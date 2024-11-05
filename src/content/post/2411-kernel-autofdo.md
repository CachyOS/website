---
title: Optimizing the Kernel with AutoFDO on CachyOS
excerpt: autofdo, optimization, kernel, performance
category: performance
tags:
  - performance
---


AutoFDO is an optimization technique that enhances code performance using profile-sampled optimization. AutoFDO works similarly to PGO (Profile-Guided Optimization) but uses CPU profiling data to optimize the resulting code. Like PGO, AutoFDO also requires two compilation steps.

This guide demonstrates how to use the `make pacman-pkg` function to create a kernel that can be easily installed on an Arch Linux-based system. I attempted to integrate it into a standard PKGBUILD workflow, but encountered issues during packaging, which have been reported upstream. You can view the report here: https://lore.kernel.org/lkml/3183ab86-8f1f-4624-9175-31e77d773699@cachyos.org/

The `make pacman-pkg` option uses a simplified PKGBUILD to package the kernel, and I had more success with this method. Therefore, we will proceed with this approach.

## Supported CPUs

- AMD: Zen 3 (Only EPYCs with BRS) and Zen4 / Zen5
- Intel: All CPUs, which are supporting LBR (likely any cpu after haswell)

## **Cloning and Configuring the Kernel**

In this section, we will clone the Linux kernel and configure it for AutoFDO. Additionally, we will enable ThinLTO for further optimization.

```sh
git clone -b 6.12/base-autofdo https://github.com/cachyos/linux
cd linux
zcat /proc/config.gz > .config
make LLVM=1 LLVM_IAS=1 prepare
## Enable AutoFDO and ThinLTO
scripts/config -e CONFIG_AUTOFDO_CLANG
scripts/config -e CONFIG_LTO_CLANG_THIN
```

## **Compilation**

```sh
make LLVM=1 LLVM_IAS=1 pacman-pkg -j"$(nproc)"
```

## **Installing and Running a Workload**

After the compilation is finished, you will get a package named `linux-upstream-$pkgver.tar.zst`. There will be three packages:

- `linux-upstream`
- `linux-upstream-headers`
- `linux-upstream-api-headers`
- `linux-upstream-debug`

Remove the `linux-upstream-api-headers` package with the following command (since it is not required and currently causes a conflict during installation):

```sh
rm linux-upstream-api-headers-$pkgver
```

After that, install the kernel with:

```sh
sudo pacman -U linux-upstream-$pkgver.tar.zst linux-upstream-headers-$pkgver.tar.zst linux-upstream-debug-$pkgver.tar.zst
```

## **Workload**

First, we need to disable the requirement for `perf record` to use sudo permissions:

```sh
sudo sh -c "echo 0 > /proc/sys/kernel/kptr_restrict"
sudo sh -c "echo 0 > /proc/sys/kernel/perf_event_paranoid"
```

Next, run a workload and profile the kernel. Personally, I compiled the CachyOS kernel using its PKGBUILD with the following commands:
Note: This depends on having "libpfm" into perf compiled. In CachyOS this is provided as default. On archlinux please do following:
```sh
paru -S libpfm devtools
pkgctl repo clone --protocol=https linux-tools && cd linux-tools
rm PKGBUILD && wget https://raw.githubusercontent.com/CachyOS/CachyOS-PKGBUILDS/refs/heads/master/toolchain/linux-tools/PKGBUILD
makepkg -s
sudo pacman -U perf-$pkgver.tar.zst
```

```sh
git clone https://github.com/cachyos/linux-cachyos
cd linux-cachyos/linux-cachyos
sudo pacman -S perf
# We use perf record to profile the workload

# AMD:
perf record --pfm-events RETIRED_TAKEN_BRANCH_INSTRUCTIONS:k -a -N -b -c 500009 -o kernel.data -- time makepkg -sfc --skipinteg

# Intel:
perf record --pfm-events BR_INST_RETIRED.NEAR_TAKEN:k -a -N -b -c 500009 -o kernel.data -- time makepkg -sfci --skipinteg
```

When the compilation is done, you will have a file called `kernel.data`. The size of this file varies depending on the profiling frequency. In my case, it was around 1.4 GB.

## **Generating the Profile for AutoFDO**

First, download the AutoFDO application called `create_llvm_prof` from [here](https://github.com/google/autofdo/releases/tag/v0.30.1). Place it in your current directory and run the following command to convert the profile:

```sh
./create_llvm_prof --binary=/usr/lib/modules/6.12.0-rc5-00015-gd89df38260bb/build/vmlinux --profile=/home/ptr1337/projects/kernel/linux-cachyos/linux-cachyos/kernel.data --format=extbinary --out=/home/ptr1337/projects/kernel/linux-cachyos/linux-cachyos/kernel-compilation.afdo
```

Replace `--binary` with your specific package version (`pkgver`). You can also check the path via pacman:

```sh
pacman -Ql linux-upstream-headers | grep vmlinux
```

LLVM 19 will no longer require `create_llvm_prof`, but since Arch Linux is often delayed in releasing new LLVM versions, we are using this tool for now.

The resulting profile in my case was about 1.2 MB in size. In my testing on a Zen5 CPU, profile sizes ranged from 800 KB to 1.5 MB depending on the workload. It is possible to merge several profiles using LLVM 19 and `llvm-profgen`.

## **Final Compilation**

This is the last step before we finally have an optimized kernel with AutoFDO. Navigate to the "linux" directory from the first cloned repository and run:

```sh
cd ~/projects/kernel/linux # example of my path
make clean
make LLVM=1 LLVM_IAS=1 CLANG_AUTOFDO_PROFILE=/home/ptr1337/Desktop/kernel-compilation.afdo pacman-pkg -j"$(nproc)"
```

Replace `CLANG_AUTOFDO_PROFILE` with the path where your converted profile is located (from the previous step). After starting the compilation process, it will generate a package that can be installed following optimization.

## **Results**

I benchmarked this optimized kernel using "cachyos-benchmarker," which runs a variety of workloads.

https://imgur.com/a/YAjhXfN

## **What's next?**

### Propeller

Propeller has been also added to the same patchset as AutoFDO. This can further improve the performance for the kernel but requires an additional compilation and profiling step.
As soon Archlinux will update to LLVM 19 I will also work on a guide for this, which can be seen as part 2 of this guide.

### BOLT

BOLT has also recently added support for the kernel. There is currently a kernel patch pending for it, but this one will be also posted on lkml in the near future.
BOLT can be even applied after AutoFDO and Propeller.

### Integration into the PKGBUILD of linux-cachyos

Integrating AutoFDO in our current PKGBUILD would be really great to simplify the process and make it even more easy to use it for many users.
As mentioned above, Im still facing bugs integrating propellor into it, but we will try to work this out in the near future.

Additionally we want to work out a way to integrate AutoFDO into our default provided kernel, but there are still challenges to create a profile directly in the same workflow.
I looked a bit into virtme-ng and this could be a possible solution. Otherwise I could also imagine, that the kernel gets compiled in chroot, installed on a test machine and then the profile uploaded to the source of the PKGBUILD and then used at compilation time.

This would further improve the performance of CachyOS out of the box.

## Update

The root issue for the packaging problem with the default "linux-cachyos" has been identified.
The issue is that strip fails, and therefore the packaging can not proceed. This regression has been introduced in binutils 2.43.
The packaging with binutils 2.42 works without problems. We will report the issue soon and hope that we can integrate AutoFDO into the CachyOS Kernel soon!

More info: https://lore.kernel.org/lkml/CAF1bQ=SbeR3XhFc7JYGOh69JZfAwQV8nupAQM+ZxpzNEFUFxJw@mail.gmail.com/
