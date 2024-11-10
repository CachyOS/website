---
title: CachyOS November 2024 Release
excerpt: NVIDIA, THP, fixes
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

This is our 11th release this year, featuring performance improvement, changes to the partitioning, and more!

We have backported from the 6.13 Kernel the THP Shrinker, which allows splitting hugepages earlier, reducing memory usage when transparent_hugepages is set to "always", while maintaining the same performance.

Also, we have added the AMD Cache Optimizer, which can be modified at runtime to the preferred mode - cache or frequency. This changes the AMD preferred core ranking. This should help in games using the wrong CCD, for example. You can find instructions in the wiki on how to use this.

Additionally, we have backported the AMD-pstate performance fixes for Strix Point laptops. This should generally improve the performance of these laptops.

The GSP Firmware now gets automatically disabled if the user manually switches to the closed-source NVIDIA module. This is because most users switch to the closed-source module if they experience problems with the GSP Firmware.
Also, we are enabling now the nvidia-powerd service as default on supported laptop cards.

On proton-cachyos, we have backported the recently posted "Optical-Flow" patches. These make DLSS Frame Generation work on NVIDIA GPUs.

The Kernel also contains fixes for the incorrectly used TDP on AMD cards. This has been a very long-standing issue on the RDNA3 family and seems to be finally fixed.

Also, there has been a patch which fixes the timing problems on displays with 5120x1440x240 configurations.

We will now inform the user if they are on an old ISO to avoid problems for users using outdated ISOs.

Additionally, we will now warn users if they are trying to install the "CachyOS Handheld Edition" on unsupported devices. We are currently offering the "Game Mode"-like experience only for Handhelds. Since we saw users installing the handheld edition on normal desktops, we will provide a warning.

Outside of this, we have added kdeplasma-addons to the Plasma installation, as this was a much-requested feature. The "3-way" partitioning of rEFInd has been reverted, since it did not provide a noticeable benefit. It will now use the standard location for the rEFInd installation. This is required to support all filesystems.

Calamares has also received a bunch of fixes and has been updated to the latest version.


**Changelog for this Release:**

**Features:**
- thp-shrinker: Put max_ptes_none value to 80% for zero filled pages. This will reduce the memory usage for when THP always is used, while maintaining the same performance
- NVIDIA: GSP Firmware gets now automatically disabled, if the users switches on their own to the closed driver
- chwd: NVIDIA: nvidia-powerd services gets enabled for laptops, to reach the most available tdp
- proton-cachyos: DLSS Frame Generation is now working. This is also expected to work in the future in the upstream proton
- kernel: AMD Cache Optimizer is now applied. Users with dual x3d CCD's cpus can now switch between having frequency or cache cores preferred
- kernel: amd-pstate: Backported amd-pstate performance fixes for Strix Point
- kernel: Added upstream fixes for the tdp issues on amd rdna2 and rdna3 gpus
- kernel: Added timing fixes for displays with 5120x1440x240 configuration
- kernel: Experimental AutoFDO optimized kernel in the repository under "linux-cachyos-autofdo"
- ISO: Added check, if user running handheld edition and warn then, if they are starting the installation on an unsupported device
- ISO: Added check, if the user is using the latest ISO, if not warn them

**Bug Fixes:**
- refind: partitioning: changed from 3 way partiton layout to 2 way
- netinstall: added kdeplasma-addons to the Plasma installation
- calamares: Fixed a issue, while partitioning with a swap partition

**Changelog Handheld Edition:**
- Rog Ally X Support should have been improved

**Manual changes for existing users:**

Users, which having laptops with nvidia dGPU (30xx and above) should enable the nvidia-powerd.service with following command:
```sh
sudo systemctl enable nvidia-powerd
```

Outside of this, just keep your system updated with following command:
```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/241110/cachyos-desktop-linux-241110.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/241110/cachyos-desktop-linux-241110.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/241110/cachyos-desktop-linux-241110.iso
* USA: https://us.cachyos.org/ISO/241110/desktop/cachyos-desktop-linux-241110.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/241110/cachyos-desktop-linux-241110.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/241110/cachyos-handheld-linux-241110.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/241110/cachyos-handheld-linux-241110.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* PayPal: https://paypal.me/pttrr
* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
