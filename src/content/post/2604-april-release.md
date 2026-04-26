---
title: CachyOS April 2026 Release
excerpt: Shelly Package Manager, DNS-over-HTTPS, Fingerprint sudo
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **third release** of the year, bringing a new default GUI package manager, DNS-over-HTTPS support, fingerprint-based sudo, and a variety of installer and hardware detection improvements!

First, the installer now ships **Shelly** as the GUI package manager, replacing Octopi. A **clean snapshot** is now created immediately after the installation has finished and is retained permanently, providing users with a reliable baseline restore point. GRUB `os-prober` is now enabled by default to detect other operating systems on the same machine. The **UKUI** desktop has been dropped from the selection, and the GNOME package selection has been cleaned up and modernised. For AMD GPUs, a different Plymouth theme is now used, as the `amdgpu` driver was unable to render the previous theme reliably on laptops with a secondary monitor attached. Last but not least, a new option was introduced in the installer that sets up `MangoWM` with `DMS` shell.

**CachyOS-Welcome** supports **DNS over HTTPS** for better privacy. The redesigned DNS page lets you test connection speeds, auto-select the fastest server, or add custom ones. We also added a **VRAM Management** toggle to optimize graphics memory on AMD and Intel GPUs, full keyboard navigation, and sharper, dark-mode-friendly icons.

**chwd** automatically configures **fingerprint readers** for `sudo` prompts, detects specific Intel CPUs for better power saving, and correctly handle laptop edge cases. Firmware update fixes for the Legion Go. Additionally AI-SDK profile added support for more **AMD RDNA4** graphics.

In **cachyos-settings**, the default NVMe I/O scheduler was switched from `none` to `kyber` for better overall responsiveness under mixed workloads.

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
  * Added option to install `MangoWM` with `DMS` shell
* **CachyOS-Welcome:**
  * Added DNS-over-HTTPS (DoH) support via `blocky`
  * Added custom DNS server support and DHCP automatic indicator/reset
  * DNS servers now display metadata (region, homepage, filtering) and support individual latency testing
  * Added VRAM management toggle `dmemcg-booster` (additionally installs `plasma-foreground-booster` on KDE)
  * Added full keyboard navigation support for accessibility
  * Replaced PNG social icons with crisp, HiDPI-aware SVGs
  * Added `wezterm` to the terminal helper
* **chwd:**
  * Added native USB device detection (via libusb/sysfs) and chassis type detection
  * Added support for fingerprint (`fprint`) sudo integration
  * Added CPU family/model detection to support `intel-lpmd`
  * **AI-SDK:** Added support for AMD RDNA4 and updated ROCM products
  * **Handhelds:** Added exact patterns for Xbox ROG Ally; conditionally install `fwupd` on Lenovo Legion Go devices for Steam UI updates
  * **Network:** Added Marvell AVASTAR 88W8897 Wi-Fi profile (Surface Pro 4)
  * Split NVIDIA profiles for laptops and desktop environments
  * Split and updated profiles for Virtual Machines
* **cachyos-settings:** Switched the default NVMe I/O scheduler from `none` to `kyber`

**Fixes:**

* **Installer:**
  * The partition method is now printed to the debug log
  * Old microcode packages are now removed when reusing an existing boot partition
* **CachyOS-Welcome:**
  * Fixed connectivity checks incorrectly returning true when ping fails
  * Ensured external link icons are visible in dark themes
  * Prevented multiple instances of the welcome app from launching simultaneously
  * Added `StartupWMClass` for improved `.desktop` window matching
* **chwd:**
  * Removed the `kms` hook from `mkinitcpio.conf` on non-portable desktops to fix NVIDIA driver conflicts
  * Made the installed kernel search in NVIDIA profiles more accurate
  * Removed forced Xorg session from the NVIDIA 470xx profiles (fixes compatibility with `plasma-login-manager`)
  * Removed outdated `WaylandEnable=false` for GDM in Virtual Machine profiles
  * Fixed false-positive handheld detections (e.g., specific MSI laptops being mistaken for the MSI Claw)
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
