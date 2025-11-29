---
title: CachyOS November 2025 Release
excerpt: accessibility, Cosmic-greeter, systemd-hook
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **seventh release** this year, bringing better accessibility, changes to mkinitcpio, and more!

First, we are pleased to bring **Orca** and **espeak-ng** to the ISO and installer. This adds crucial support for users with visual impairments, helping them navigate the CachyOS installation process.

Next, we have enabled the **mkinitcpio "systemd" hook** for supported configurations. Since ZFS and Bcachefs do not currently support this hook, it is automatically disabled if either is selected as the root filesystem. Additionally, we are now installing `bcachefs-dkms`, which replaces the default kernel module to provide better integration for Bcachefs users.

We have prepared the installer to support **Plasma Login Manager** and **Cosmic Greeter**. While we plan to use Plasma Login Manager as a replacement for SDDM in the future, we are holding it back for now as it currently lacks integration with KDE Settings. However, Cosmic Greeter is now used for COSMIC installations, providing a smoother experience with the COSMIC desktop.

Regarding hardware detection, the system now installs `intel-media-sdk` and `vpl-gpu-rt` on supported GPUs. We have also dropped support for the legacy 390xx NVIDIA driver; Fermi GPUs will now use **Nouveau NvBoost** instead. Furthermore, we have added handheld support for the **Xbox ROG Ally** and **ROG Ally X**.

**CachyOS-Hello** now opens CachyOS’s PackageInstaller window when the “Install Apps” button is clicked. Additionally, it now supports CLI operations for its GUI functionality. In `cachyos-settings`, we have disabled recompression for incompressible pages in ZRAM, as we found it offered no real performance improvement.

**Proton-CachyOS** now supports `dxvk-gplasync` as an alternative DXVK via `PROTON_DXVK_GPLASYNC=1`. Additionally, AMD's Anti-Lag layer has been disabled when using `PROTON_FSR4_UPGRADE` due to stability issues. We have also introduced a tuned **per-game shader cache** with larger limits, which helps prevent cache overflow and reduces the need to recompile shaders.

On the fixes side, we resolved an issue with **Limine** installation on systems with broken UEFI implementations where entries were not registering. Finally, the systemd variant of the `btrfs-overlayfs` hook is now used to ensure compatibility with the mkinitcpio systemd hook.


**Features:**

* **ISO/Installer:** Added Orca and espeak-ng for better accessibility
* **initcpiocfg:** Enabled systemd hook on supported configurations
* **Netinstall:** Hyprland dotfiles have been removed
* **pacstrap:** Install `bcachefs-dkms` if `bcachefs` is selected as the filesystem
* **Calamares:** Added support for plasma-login-manager and cosmic-greeter
* **Cosmic:** Switched from SDDM to cosmic-greeter
* **Fonts:** Improved fonts for Asian users
* **chwd:**
  * Installs `intel-media-sdk` and `vpl-gpu-rt` on supported GPUs
  * Enabled Nouveau NvBoost for Fermi GPUs
  * Dropped support for 390xx legacy NVIDIA driver
  * Added support for Xbox ROG Ally/X
* **cachyos-hello:**
  * Removed internal package installer; opens CachyOS package installer instead
  * Added CLI interface for the GUI functionality
  * Various ISO version check fixes
* **cachyos-settings:** zram-generator: Removed compression for incompressible pages
* **Proton-CachyOS:**
  * Added `dxvk-gplasync` as alternative DXVK. This can be enabled via `PROTON_DXVK_GPLASYNC=1`
  * Added `DISABLE_LAYER_MESA_ANTI_LAG` when using `PROTON_FSR4_UPGRADE`
  * Brought in multiple **Wayland fixes** (fullscreen offset, dead keys, DPI behavior, video output tweaks) and `winewayland.drv` improvements
  * Introduced and tuned **per-game shader cache** behavior and larger shader caches (especially for NVIDIA)
  * Added FSR3 and XeSS upscaler upgrades

**Fixes:**

* **Limine:**
  * Fixed installation of Limine without entry registering on broken UEFI
  * Uses systemd variant of `btrfs-overlayfs` hook
* **Calamares:** Removed `attr2` as an option on XFS mount settings
* **chwd:** Disabled T2 chip's USB Ethernet interface


**Manual changes for existing users:**

Steam-native-runtime has been deprecated. You can follow here: 

https://discuss.cachyos.org/t/cachyos-announcement-migrating-away-from-steam-native-runtime/17800

outside of this the usual:

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/251129/cachyos-desktop-linux-251129.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/251129/cachyos-desktop-linux-251129.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/251129/cachyos-desktop-linux-251129.iso
* USA: https://us.cachyos.org/ISO/desktop/251129/cachyos-desktop-linux-251129.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/251129/cachyos-desktop-linux-251129.iso
* Russia: https://archlinux.gay/cachy/ISO/desktop/251129/cachyos-desktop-linux-251129.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/251129/cachyos-handheld-linux-251129.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/251129/cachyos-handheld-linux-251129.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
