---
title: CachyOS March 2026 Release
excerpt: Desktop Previews, Winboat, Website Redesign
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **second release** of the year, bringing animated desktop previews in the installer, Winboat integration, a reworked website, and significant handheld edition changes!

First, the installer now shows **animated GIF/WebP previews** in the Desktop Selection to showcase each desktop environment. This is currently enabled for Plasma, GNOME, Niri and COSMIC, giving users a much better idea of what to expect before making their choice. And also, added support for JPEG XL in the Desktop Selection to reduce image sizes. The Desktop Environment list has also been sorted from easy and accessible setups to more advanced ones like window managers. **Cachy-Update** is now enabled by default for GNOME and KDE installations. The microcode installation logic has been improved - it will now detect the hardware and install the proper microcode instead of installing both and then removing the unneeded one. The error message when the EFI partition is too small has also been improved.

<video controls width="100%" preload="metadata">
  <source src="https://1016613440.rsc.cdn77.org/videos/installer-desktop-preview.mp4" type="video/mp4" />
</video>

**CachyOS-Welcome** now includes a button to easily install and enable **Winboat** for a seamless Windows Docker VM experience. We have also added support for keyboard navigation to improve accessibility.

On the kernel side, **linux-cachyos** now publishes tagged releases in a dedicated Linux repository, replacing the previous single-patch (`0001-cachyos-base-all.patch`) workflow. **chwd** has massively decreased the initramfs size for NVIDIA dGPU configurations. We have also improved the experience for users in China with **cachyos-rate-mirrors**, which now includes a proper check before rating the mirrors. In **cachyos-settings**, the wireless regulatory domain is now automatically set based on the user's timezone. The **website** design has been reworked and improved to follow more modern standards.

For the **Handheld Edition**, we have replaced gamescope-session-plus with **gamescope-session-cachyos**, which is forked from Valve's gamescope-session and enables firmware updates for Steam Deck and Lenovo Legion Go devices. **SDDM** has been replaced with **plasma-login-manager**, and **Limine** is now selected as the default bootloader with automatic snapshots - systemd-boot will still be selectable.

On the fixes side, we have  removed **bcachefs** from the filesystem selection, as it now requires `bcachefs-dkms`. We also fixed encryption when LUKS2 is used and fixed enabling the "ly" display manager. In **cachyos-settings**, `cachyos-bugreport.sh` now redacts IP, username, hostname, and MAC address.

Finally, we are happy to announce **new mirrors** in Russia (jura12), Sweden (Zyner), and Canada (All Things Linux).


**Features:**

* **Installer:**
  * Added support to show GIF/WebP videos in the Desktop Selection to showcase the desktops. This is enabled for Plasma, GNOME, Niri and COSMIC
  * Added support for JPEG XL in the Desktop Selection to reduce image sizes
  * Cachy-Update is now enabled by default for the GNOME and KDE installations
  * Improved microcode installation logic — it will now detect the hardware and install the proper microcode instead of installing both and then removing the unneeded one
  * Improved error message when the EFI partition is too small
  * Sorted the Desktop Environment list from easy and accessible setups to more advanced ones like WMs
* **CachyOS-Welcome:**
  * Added a button to easily install and enable "Winboat" for an easy Windows Docker VM
  * Added support for FFMUC DNS server in DNS selection
  * Added Ukrainian translation
* **chwd:** Decreased the initramfs size massively for NVIDIA dGPU configurations
* **linux-cachyos:** Instead of generating a `0001-cachyos-base-all.patch`, a release is now generated in a Linux repository for each release of our patched kernel
* **cachyos-rate-mirrors:** Improved the experience for users in China&Russia massively with a proper check before rating the mirrors
* **cachyos-settings:** Added support to automatically set the wireless regulatory domain based on timezone
* **website:** The website design has been reworked and improved to follow more modern standards
* **GitHub:** Added issue templates to important GitHub repos to improve the quality of bug reports and provide guidance for the user
* **Mirrors:** New mirrors in Russia (jura12, cachy-arch.ru), Sweden (Zyner), and Canada (All Things Linux)

**Fixes:**

* **Installer:**
  * Removed support for bcachefs in the filesystem selection due to the requirement of bcachefs-dkms
  * Fixed encryption when LUKS2 is used for specific devices
  * Fixed enabling the "ly" display manager
* **cachyos-settings:** `cachyos-bugreport.sh` now redacts IP, username, hostname, and MAC address
* **chwd:**
  * Generic handheld profiles and improved support for handheld GPUs
  * fwupd is now enabled for Lenovo handhelds


**Changelog for Handheld Edition:**

* **gamescope-session:** Replaced gamescope-session-plus with gamescope-session-cachyos, which is forked from Valve's gamescope-session
  * Enables firmware updates for Steam Deck and Lenovo Legion Go devices
* **plasma-login-manager:** Replaced SDDM with plasma-login-manager for the login manager
* **bootloaders:** Limine is now selected as default with automatic snapshots. systemd-boot will still be selectable
* **Installer:** Merged Handheld Calamares with desktop edition calamares together
* **ISO:** ISO now uses Wayland instead of X11


**Manual changes for existing users:**

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: <https://iso.cachyos.org/desktop/260308/cachyos-desktop-linux-260308.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/desktop/260308/cachyos-desktop-linux-260308.iso>
* Germany: <https://mirror.cachyos.org/ISO/desktop/260308/cachyos-desktop-linux-260308.iso>
* USA: <https://us.cachyos.org/ISO/desktop/260308/cachyos-desktop-linux-260308.iso>
* China: <https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/260308/cachyos-desktop-linux-260308.iso>
* Russia: <https://archlinux.gay/cachy/ISO/desktop/260308/cachyos-desktop-linux-260308.iso>
* Russia: <https://mirror.yandex.ru/cachyos/ISO/desktop/260308/cachyos-desktop-linux-260308.iso>
* <https://sourceforge.net/projects/cachyos-arch/files>

**Handheld Edition:**
