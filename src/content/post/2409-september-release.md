---
title: CachyOS September 2024 Release
excerpt: PGO, sddm-wayland, zlib-ng, inputplumber
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

This is our 10th release this year, featuring improvements to performance, faster updates, and other enhancements. The release comes a bit delayed, since the CachyOS Team was at the LPC, and therefore we couldn't follow our common release cycle.

We have started to optimize more packages with PGO. In the case of LLVM and Clang, we have seen a **10%** performance improvement. Additionally, packages like `svt-av1`, `nodejs`, and `ripgrep` got optimized with PGO. We will work further to optimize our packages and improve their performance. Also, we have added cherry-picked patches to `glibc` and `gcc` from `clearlinux`. This provided an additional **1.5%** improvement to the `gcc` compiler.

The repository sync is now happening more often, which means there will be even less delay between the Arch repository and our optimized packages. Also, starting from 27.09.24, we are applying `-fno-semantic-interposition` automatically to -fpic compiled packages. This can significantly improve many shared packages. We have also started to replace `zlib` with `zlib-ng` and its compat layer. `zlib-ng` is a more modern alternative to `zlib`, which provides better performance and more modern techniques.

The `cachyos-kde-settings` package now installs an SDDM config, which enables Wayland by default for SDDM. This has the benefit that refresh rates, resolution, and other settings can be applied to it, providing a better experience.
GPUs that do not support Wayland (legacy NVIDIA) need to manually remove this config. We may introduce hardware detection integration for this in the future, but this has not been done yet.

In `cachyos-settings`, we have added changes to the handling of NetworkManager. NetworkManager will now use systemd-resolved as the backend, which helps fix issues with download speed in Steam due to its massive DNS requests. Enabling DNS caching massively improves that. Also, we are now adding an NTP Server for systemd-timesyncd, which will default to time.google.com. There have been increased reports in Arch Linux, as well as CachyOS, that the timeservers provided as default are not working correctly. The previously used timeservers will still be used as fallbacks.
The CachyOS Hardware Detection (chwd) simplified the device handling, and all profiles are now specifically designed for PCI devices.

In terms of fixes, we have added to the "Launch Installer" fixes to sync the time to the hardware clock. There have been some reports that the installation failed since the time was "backwards". Calamares now correctly unmounts the root filesystem after the installation. Core dumps have been enabled in CachyOS again to have easier debugging, and core dumps get cleared every 3 days to avoid an increase in used storage.

Together with this release the **old ISO** will **not work** anymore, due the changes in the hardware detection.

**Changelog for this Release:**

**Features:**
- Packages: Optimized a bunch of packages with PGO, like LLVM, Clang, svt-av1, and nodejs. This yielded, for example, a 10% faster Clang compiler
- Repository: The repository is now synced and updated more frequently, meaning there will be even less delay. The sync interval has been decreased from every 3 hours to every hour.
- Repository: Starting from 27.09.2024, packages compiled with -fpic will automatically enable -fno-semantic-interposition. This can provide a performance improvement for many packages.
- zlib-ng: Is now used as a replacement for zlib
- Mirrors: New Mirror in Austria, hosted by Soulharsh007.
- SDDM: On the KDE Installation, SDDM will now default to Wayland as the compositor. # Provide Migration changes in release post
- cachyos-settings: NetworkManager now uses systemd-resolved as the backend, which helps with DNS caching
- cachyos-settings: Use time.google.com as the timesync server to avoid issues with timesync on some setups
- gcc: Added fixes for the tuning of znver5
- gcc: Cherry-picked patches and flags from Clear Linux
- glibc: Added "evex" patches as well as cherry-picks from Clear Linux
- wiki: The Wiki received many new additions and reworks
- chwd: Simplified device handling
- chwd: All profiles are now specifically designed for PCI devices
- chwd: Add --autoconfigure to automatically handle the driver installation
- Package Updates: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Bug Fixes:**
- Launch-Installer: Added fixes to sync the hardware clock before starting the installation
- calamares: Added fix for unmounting the filesystem after installation
- keyring: Clean up the keyring and recreate it before starting installation; this fixes rare keyring issues
- sysctl: Core dumps have been enabled again
- chwd: Removed `libva-nvidia-driver` from the PRIME profile to prevent potential conflicts and improve compatibility with software like Spectacle
- cachyos-settings: Added workaround for GNOME Wayland crashes
- cachyos-fish/zsh-config: Dropped wayland specific quirks

**Changelog for Handheld Edition:**
- Ally/Ally X: HHD got replaced with inputplumber, since hhd does not use the kernel driver for it correctly, which results in issues.
- Handheld related packages updated

**Manual changes for existing users:**

No special changes required.
Users who are on the legacy NVIDIA Driver (470xx and 390xx) need to remove the cachyos-kde-settings package due to the usage of Wayland.
Simply running: `sudo pacman -R cachyos-kde-settings` solves the issue.

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/240929/cachyos-desktop-linux-240929.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/240929/cachyos-desktop-linux-240929.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/240929/cachyos-desktop-linux-240929.iso
* USA: https://us.cachyos.org/ISO/desktop/240929/cachyos-desktop-linux-240929.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/240929/cachyos-desktop-linux-240929.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/240929/cachyos-handheld-linux-240929.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/240929/cachyos-handheld-linux-240929.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* PayPal: https://paypal.me/pttrr
* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
