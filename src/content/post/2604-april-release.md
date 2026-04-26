---
title: CachyOS April 2026 Release
excerpt: Shelly Package Manager, DNS-over-HTTPS, Fingerprint sudo
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **third release** of the year, bringing a new default GUI package manager, DNS-over-HTTPS support, fingerprint-based sudo, and a variety of installer and hardware detection improvements!

First, the installer now ships **Shelly** as the default GUI package manager, replacing Octopi. A **clean snapshot** is now created immediately after the installation has finished and is retained permanently, providing users with a reliable baseline restore point. GRUB `**os-prober**` is now enabled by default to detect other operating systems on the same machine. The **UKUI** desktop has been dropped from the selection, and the GNOME package selection has been cleaned up and modernised. For AMD GPUs, a different Plymouth theme is now used, as the `amdgpu` driver was unable to render the previous theme reliably on laptops with a secondary monitor attached. Last but not least, a new option was introduced in the installer that sets up `MangoWM` with `DMS` shell.

**CachyOS-Welcome** now supports **DNS-over-HTTPS** via `blocky`, and the DNS page has been extended with latency testing of individual servers and the option to add custom ones. A new toggle for improved **VRAM management** on AMD and Intel dGPUs has been added, which is effective under gamescope or KDE. Full **keyboard navigation** has also been added across the application to further improve accessibility.

On the hardware side, **chwd** has received several notable improvements. It now supports enabling **fingerprint-based sudo** on supported devices and ships `**intel-lpmd**` on supported devices using an in-house fork with improved configuration. Additionally, **chassis type detection** was added to the profiles and the **Xbox ROG Ally** pattern is now part of the chwd profile.

In **cachyos-settings**, the default NVMe I/O scheduler was switched from `none` to `**kyber**` for better overall responsiveness under mixed workloads.

On the fixes side, the installer now prints the chosen partition method to the debug log, and old microcode packages are properly removed when reusing an existing boot partition. In **chwd**, the kernel search in the NVIDIA profiles is now more accurate, the forced Xorg session was removed from the 470xx profiles, and handheld product name matching was improved. In **cachyos-settings**, `S01x` power management was dropped due to issues with the NVIDIA 595 driver, and `AggressiveVblank` was disabled due to VR-related issues with the NVIDIA driver.

**Features:**

* **Installer:**
  * Shelly now replaced Octopi as the GUI package manager
  * A clean snapshot is now created immediately after installation and retained permanently, providing a baseline restore point
  * GRUB `os-prober` is now enabled by default
  * Added MangoWM as Desktop Option with dotfiles
  * Dropped the UKUI desktop
  * AMD GPUs now use a different Plymouth theme, as the amdgpu driver is unable to render the previous theme reliably on laptops with a secondary monitor attached
  * Cleaned up and modernised the GNOME package selection
  * Added option to install `MangoWM` with `DMS` shell.
* **CachyOS-Welcome:**
  * Added support for DNS-over-HTTPS via blocky
  * The DNS page now supports latency testing of individual servers and allows adding custom ones
  * Added a toggle for improved VRAM management on AMD and Intel dGPUs (only effective under gamescope or KDE)
  * Added full keyboard navigation support
* **chwd:**
  * Added support for enabling fingerprint-based sudo on supported devices
  * Added support for `intel-lpmd` on supported devices, using an in-house fork with improved configuration
  * Added chassis type detection to profiles
  * Added the Xbox ROG Ally pattern to the chwd profile
* **cachyos-settings:** Switched the default NVMe I/O scheduler from `none` to `kyber`

**Fixes:**

* **Installer:**
  * The partition method is now printed to the debug log
  * Old microcode packages are now removed when reusing an existing boot partition
* **chwd:**
  * Kernel search is now more accurate in the NVIDIA profiles
  * Removed the forced Xorg session from the 470xx profiles
  * Improved matching of handheld product names
* **cachyos-settings:**
  * Dropped `S01x` power management due to issues with the NVIDIA 595 driver
  * Disabled `AggressiveVblank` due to VR-related issues with the NVIDIA driver

**Manual changes for existing users:** No manual changes needed. Just the usual updating:

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: <https://iso.cachyos.org/desktop/260429/cachyos-desktop-linux-260429.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/desktop/260429/cachyos-desktop-linux-260429.iso>
* Germany: <https://mirror.cachyos.org/ISO/desktop/260429/cachyos-desktop-linux-260429.iso>
* USA: <https://us.cachyos.org/ISO/desktop/260429/cachyos-desktop-linux-260429.iso>
* China: <https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/260429/cachyos-desktop-linux-260429.iso>
* Russia: <https://archlinux.gay/cachy/ISO/desktop/260429/cachyos-desktop-linux-260429.iso>
* Russia: <https://mirror.yandex.ru/cachyos/ISO/desktop/260429/cachyos-desktop-linux-260429.iso>
* <https://sourceforge.net/projects/cachyos-arch/files>

**Handheld Edition:**

* CDN: <https://iso.cachyos.org/handheld/260429/cachyos-handheld-linux-260429.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/handheld/260429/cachyos-handheld-linux-260429.iso>

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: <https://www.patreon.com/CachyOS>

Thank you for your continued support!

**The CachyOS Team**
