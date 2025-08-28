---
title: CachyOS August 2025 Release
excerpt: Packages, LTS, Cachy-Update
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **sixth release** this year, bringing a **package dashboard**, **stability** improvements, and more!

First, we’re introducing our new service, **[packages.cachyos.org](https://packages.cachyos.org)** — a dashboard that provides a comprehensive overview of the current versions of packages used in CachyOS. You can list by **architecture**, **repository**, **package name**, **update time**, and more. For each package, the **PKGBUILD source** is clearly shown, providing transparency about which PKGBUILDs come from **Arch Linux** and which we’ve modified. Packages without a listed “Source” are pulled from the **AUR**. There’s also a **binary download link** for each package so you can inspect the binary or install it manually.

Next, we’re focusing on **stability**. Recently, there have been frequent reports of issues with the latest stable kernel. With this release, we install the **`linux-cachyos-lts`** kernel out of the box as a **fallback**. If users encounter issues, they can rely on the **LTS kernel**. This should improve stability and make recovery easier if problems arise.

The **installation medium (ISO)** now also uses the **LTS kernel** instead of the latest stable kernel, since the ISO needs to boot reliably without graphics-related issues. Using the LTS kernel could cause future compatibility gaps — for example, when new **AMD** or **Intel GPUs** require a newer kernel. If needed, we’ll consider bundling a **second kernel** in the ISO to ensure users with the latest hardware can boot and install smoothly.

We’ve added a new desktop option to the online installer: **Niri WM**. We maintain a small set of **dotfiles** to provide a good out-of-the-box experience. Learn more about keybindings and configuration here: [https://wiki.cachyos.org/configuration/desktop\_environments/niri/](https://wiki.cachyos.org/configuration/desktop_environments/niri/)

Choosing the **GRUB** bootloader with **Btrfs** as the filesystem will now automatically enable **bootable snapshots**, matching the behavior we already provide with **Limine**. This improves user experience and stability in case a package update doesn’t play nicely with your hardware.

On the NVIDIA side, we’ve enabled **S0ix sleep** on supported hardware to provide modern low-power standby while still allowing the system to receive notifications and other background events.

**Cachy-Update**, a fork of `arch-update`, is now in the **CachyOS repository**. It provides a **system tray indicator** that informs users about available updates from both the official repositories and the **AUR**. We’re evaluating a longer check interval; while it’s currently relatively short, we’re considering moving to a **2–5 day** cadence based on user feedback. You can enable Cachy-Update via the **CachyOS-Hello → Tweaks** page.

**Proton-CachyOS** received several new features: a **DLSS version upgrader** and an option to **force the latest preset**. **XeSS** now has a similar version-upgrade feature. We’ve also made improvements for **PhysX**, and the required **NVIDIA libraries** are now bundled. On **RDNA3** GPUs, you can easily enable **FSR 4** with `PROTON_FSR4_RDNA3_UPGRADE`; this downloads the FSR4 library and sets the necessary variables automatically. **NTSync** can now be used with Proton-CachyOS by setting `PROTON_USE_NTSYNC`.

On the fixes side, there are several improvements to the **Limine** bootloader and the **Launch Installer** button. Limine now resolves **MBR/BIOS** installation issues (including the **`/dev/sdaX`** **`/boot`** selection error and an uninitialized **`bootLoader`** path), adds a warning about the **`bios-grub`** flag that can trigger a “**Stage 3 file not found**” error, restores **Windows dual-boot** out of the box on BIOS systems, and ensures **Btrfs** snapshots boot correctly under **GNOME (GDM)**. The Launch Installer button now includes **fallback pings** for both **IPv4** and **IPv6**.

**Features:**

* **Services:** Added **packages.cachyos.org**, a package search equivalent to Arch Linux’s website, with an option to exclude CachyOS packages.
* **Kernel:** The installer now additionally installs **linux-cachyos-lts** as a secondary/backup kernel after installation. We still recommend using the Stable kernel.
* **ISO:** Switched the live ISO’s kernel from Stable to LTS due to ongoing issues with the Stable kernel, improving boot reliability.
* **Desktop:** Added **Niri** as a desktop option, including a few preconfigured dotfiles.
* **NVIDIA:** Enabled **S0ix** sleep on supported hardware for modern low-power standby.
* **GRUB:** Bootable snapshots are now automatically enabled and set up when the root filesystem uses **Btrfs**.
* **Tweaks:** Integrated **Cachy-Update** into the Welcome app’s Tweaks page. Cachy-Update adds a timer and a system tray indicator to notify users about updates and lets them update with a click.
* **Proton-CachyOS:**
    - Added downloader for DLSS dlls (version **310.3.0**), similar to the FSR4 downloader. Use `PROTON_DLSS_UPGRADE=1` environment variable to enable it.
    - Added `PROTON_DLSS_INDICATOR=1` environment variable to enable DLSS hud.
    - Added downloader for XeSS dlls (version **2.1.0**), similar to the DLSS downloader. Use `PROTON_XESS_UPGRADE=1` environment variable to enable it.
    - Added `PROTON_FSR4_RDNA3_UPGRADE` for RDNA3 GPUs. Does the same thing as `PROTON_FSR4_UPGRADE` but also sets some other necessary variables.
    - Added completer implementations of Nvidia libraries missing from Proton. Should help with enabling options such as PhysX on games they were disabled before. You can also enable them individually using `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` and `PROTON_NVIDIA_NVOPTIX`.
    - Added per-game shader cache, enabled by default, can be disabled with `PROTON_LOCAL_SHADER_CACHE=0`. Shaders will be cached under `<steamlibrary>/shadercache/<appid>` for each game, similarly to when shader pre-caching is enabled. You will get stuttering as the shader cache for each game is rebuilt but the cached shaders won't be evicted due to limited cache size.
    - Added [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) as an optional DXVK replacement for older GPUs that don't properly support Vulkan 1.3. It is using the `async` branch, so it SHOULD NOT to be used with games using anti-cheat or multiplayer games in general. You have been warned. Use `PROTON_DXVK_SAREK=1` to enable.
    - Added `PROTON_FSR3_UPGRADE` to upgrade FSR 3.1 DLLs to newer versions.

**Fixes:**

* **Limine:** 
    - Fixed `limine bios-install /dev/sdaX` error when selecting the **/boot** mount point as the boot location on MBR systems.
    - Fixed uninitialized value of the `bootLoader` path, which caused installation failures on MBR systems when the bootloader location wasn’t explicitly selected.
    - Added a warning about using the **bios-grub** flag on the boot partition, which can cause a “Stage 3 file not found” error.
    - Fixed out-of-the-box dual-boot with Windows for BIOS installations.
    - Fixed Btrfs snapshots failing to boot when using **GNOME (GDM)**.
* **Launch Installer:** Added fallback IPs for the online check if pinging **cachyos.org** fails.


**Manual changes for existing users:**

Gnome and KDE User can enable Cachy-Update in the CachyOS-Hello Tweaks page and outside of this just update your system:
```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/250828/cachyos-desktop-linux-250828.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/250828/cachyos-desktop-linux-250828.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/250828/cachyos-desktop-linux-250828.iso
* USA: https://us.cachyos.org/ISO/desktop/250828/cachyos-desktop-linux-250828.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250828/cachyos-desktop-linux-250828.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/250828/cachyos-handheld-linux-250828.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/250828/cachyos-handheld-linux-250828.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
