---
title: CachyOS October 2024 Release
excerpt: amdgpu, chwd, SDDM
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

This is our 11th release this year, which is intended as a fixing release.

There has been an increased amount of reports, that people with RDNA3 and AMD iGPU's were not able to get a graphical session on the ISO, this has been fixed with adding xf86-video-amdgpu.
Besides that there are some fixes for the SDDM wayland session for KDE, which should be now fully resolved. There are some more fixes with the upcoming Plasma 6.2 release, which should make the experience better.

Also, we have fixed reinstalling profiles with our hardware detection, this helps if users are changing their hardware or want to reinstall the driver packages.

Besides that we had some common package updates, like the kernel, mesa, python and scx-scheds.


**Changelog for this Release:**

**Features:**
- Package Updates: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Bug Fixes:**
- SDDM: Pulled in newer SDDM to fix wayland session logins
- ISO: Added xf86-video-amdgpu to fix graphical session loading on some setups
- chwd: Fixed reinstallation of profiles


**Manual changes for existing users:**

No special changes required.
Users who are on the legacy NVIDIA Driver (470xx and 390xx) need to remove the cachyos-kde-settings package due to the usage of Wayland.
Simply running: `sudo pacman -R cachyos-kde-settings` solves the issue.

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/241003/cachyos-desktop-linux-241003.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/241003/cachyos-desktop-linux-241003.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/241003/cachyos-desktop-linux-241003.iso
* USA: https://us.cachyos.org/ISO/desktop/241003/cachyos-desktop-linux-241003.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/241003/cachyos-desktop-linux-241003.iso
* Sourceforge: https://sourceforge.net/projects/cachyos-arch/files

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* PayPal: https://paypal.me/pttrr
* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
