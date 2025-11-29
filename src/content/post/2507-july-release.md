---
title: CachyOS July 2025 Release
excerpt: Shell, fuwpd, anti-lag
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our fifth release this year, and it includes a long-awaited requested feature, improvements for `chwd`, and more.

The user's shell can now be chosen at installation time. In the package list selection, there is now an option to choose between `cachyos-fish-config` and `cachyos-zsh-config`. If neither is selected, the system will default to Bash. The default configuration will still be Fish, as it was before.

We received some reports that `systemd-oomd` was killing processes too early in some cases. We have removed its integration to avoid these issues.

For Plasma installations, we are now defaulting to Wayland. For graphics configurations that do not support Wayland (e.g., NVIDIA legacy drivers), the `plasma-x11-session` will be automatically installed to prevent issues. Additionally, `fwupd` has been added to the Plasma and GNOME environments.

`mesa-git` now includes the upstream merge request for "Anti-Lag 2," which provides a latency improvement for supported games. Proton-CachyOS has also gained support for "Anti-Lag 2." Furthermore, the `PROTON_FSR4_UPGRADE` variable is now supported. This variable will automatically download the latest FSR 4 DLL and replace the existing one in the path. Games that support FSR 3.1 can be automatically upgraded to FSR 4 with this feature. Proton-CachyOS has also received more upstream patches for the Wine-Wayland integration.

In the last release, we dropped support for "cachy-browser." We have now added a package called `cachyos-firefox-settings`, which can be applied on top of a normal Firefox installation. There is also a precompiled, optimized package called `firefox-pure`, which includes these changes out of the box.

The Handheld Edition now supports the Lenovo Legion Go and has been validated by us. Additionally, the Handheld Edition has received configuration improvements.


**Features:**
-   **Shell**: The user shell can be now chosen at installation time between fish, zsh and bash. Fish still stays to be default enabled.
-   **chwd**: Install plasma-x11 for legacy NVIDIA Drivers
-   **Netinstall**: Added fwupd to KDE Plasma and Gnome
-   **mesa-git**: Added support for AMD Anti Lag
-   **firefox**: Introduced an alternative firefox called "firefox-pure", which includes improvement with the userjs profile. Additionally there has been "cachyos-firefox-settings" added, which can be installed on top of firefox.
-   **Proton-CachyOS**:
    -   Imported upstream wine-wayland commits
    -   Added "PROTON_FSR4_UPGRADE" env variable, which will automatically download the latest FSR4 DLL and then replace it for an automatic upgrade on FSR 3.1 supported games
    -   Added many Wayland-related patches from upstream Wine that were released after Wine 10.0.
    -   added patches to help with better anticheat integration. Thanks to NelloKudo
    -   Added patches for AMD's Anti Lag 2 for vkd3d-proton and wine
    -   Updated umu-protonfixes to latest commit

**Fixes:**
-   **Keyring**: Improved the handling of the keyring installation to avoid issues and do several retries.
-   **systemd-oomd**: Disabled systemd-oomd, since it had problems handling this together with le9 and killed applications way too early.

**Changelog for Handheld Edition:**
-   **handheld-settings**: Imported several tweaks of SteamOS to the Handheld Edition
-   **pipewire**: Set minimum quantum to 256
-   **SteamDeck-OLED**: Install galileo-mura for Steam Deck OLED
-   **Lenovo Legion Go S**: Added support for the Lenovo Legion Go S

**Manual changes for existing users:**

Just update your system:
```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/250713/cachyos-desktop-linux-250713.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/250713/cachyos-desktop-linux-250713.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/250713/cachyos-desktop-linux-250713.iso
* USA: https://us.cachyos.org/ISO/desktop/250713/cachyos-desktop-linux-250713.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250713/cachyos-desktop-linux-250713.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/250713/cachyos-handheld-linux-250713.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/250713/cachyos-handheld-linux-250713.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
