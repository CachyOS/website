---
title: CachyOS February 2025 Release
excerpt: Blackwell, Propeller, nvidia-open
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

We hope you’re off to a great start in the new year.
This is the first release of the year, and it was a bit delayed because we wanted to wait until a driver for the new NVIDIA graphics cards was available to ensure a proper experience for users.

The kernel is now optimized with Propeller. In the last release, we announced that the kernel was optimized out of the box with AutoFDO. After LLVM 19 landed in the repository, we were also able to optimize the kernel with Propeller. In general, combining these two optimization techniques should result in approximately a 10% throughput improvement (depending on the workload) as well as latency improvements. Currently, profiling is performed using the following script:
https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh.
We welcome suggestions to increase workload coverage, so feel free to contribute!

Along with the new 570 NVIDIA driver, support for the Blackwell/50xx series has now been added. Blackwell only supports the open module driver from NVIDIA, which means that we needed to change the module used on the ISO. As a result, older series without GSP chips cannot boot the “NVIDIA” boot option. Users with NVIDIA 10xx series or lower should now use the first boot option when starting the ISO. On the installation side, there will be no changes, as our hardware detection automatically discovers the necessary packages.

Outside of these core changes, we have enabled tap-to-click as the default for X11 sessions—a much-requested feature. Additionally, the NTFS3 kernel driver is now used by default instead of NTFS3G, resulting in better overall performance. The kernel manager now supports switching to the “server” mode of scx_loader.

On the kernel side, we have added fixes for the AMD preferred core feature. The AMD 3D Cache Driver now functions properly and registers changes at runtime; previously, these patches were not working.

On the fixes side, we have resolved a bug that caused DaVinci Resolve not to work with CUDA when the intel-opencl-runtime was installed. This was a long-outstanding issue and has finally been fixed.

The kernel manager now attempts to install the “nvidia” package for the default Arch kernel if the user is installing the kernel. Additionally, glibc has been updated to fix CVE-2025-0395.

**Changelog for this Release:**

**Features**:

- **Kernel**:
  - Propeller Optimization is now applied to the default **linux-cachyos** kernel for all available architectures.
    - **Note**: In combination with AutoFDO, this can improve performance by around 10%, depending on the workload.
- **NVIDIA**: Added support for the Blackwell Architecture.
- **ISO**: Using the nvidia-open module as the default to provide Blackwell support. Users with GPUs older than Turing should use the first or fallback boot option.
- **Settings**: Enabled tap-to-click for X11 sessions by default.
- **udev**: Use ntfs3 as the default driver for NTFS partitions.
- **game-performance**: Disabled the screensaver while running games.
- **kernel-manager (sched-ext)**: Added support for server mode.
- **kernel**: Added fixes for the AMD preferred core feature.
- **chwd**: Re-added the workaround for RTD3.
- **Package Updates**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Fixes**:

- **chwd**: Fixed an issue where hybrid laptops with Intel and NVIDIA hardware could not use their GPU in DaVinci Resolve.
- **glibc**: Added a fix for CVE-2025-0395.
- **kernel-manager**: Attempted to install the prebuilt NVIDIA module, if available for the default Arch kernel.
- **kernel-manager**: Added an extra check to avoid overwriting the value in case a module is not available.

**Changelog for Handheld Edition:**

- **hooks**: Allowed the use of natively compiled Proton again.
- **misc**: Several updates and fixes.

**Manual changes for existing users:**

Nothing to do, outside the usual update process:

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

- CDN: https://iso.cachyos.org/desktop/250202/cachyos-desktop-linux-250202.iso
- CDN2: https://cdn77.cachyos.org/ISO/desktop/250202/cachyos-desktop-linux-250202.iso
- Germany: https://mirror.cachyos.org/ISO/desktop/250202/cachyos-desktop-linux-250202.iso
- USA: https://us.cachyos.org/ISO/desktop/250202/cachyos-desktop-linux-250202.iso
- China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250202/cachyos-desktop-linux-250202.iso
- https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

- CDN: https://iso.cachyos.org/handheld/250202/cachyos-handheld-linux-250202.iso
- CDN2: https://cdn77.cachyos.org/ISO/handheld/250202/cachyos-handheld-linux-250202.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

- PayPal: https://paypal.me/pttrr
- Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
