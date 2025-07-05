---
title: CachyOS May 2025 Release
excerpt: plymouth, nvidia, initramfs-fallback
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our fourth release this year, and this release **focuses** on theming, compatibility, and improving the handheld edition.

The first major change is that we have added a mechanism to the Live-ISO, which automatically loads the correct NVIDIA module when booting. This has now removed the "NVIDIA" boot entry, and the **modules** are installed and loaded based on automatic detection.
In the previous release, we had a bunch of reports that older GPUs, e.g., 10xx NVIDIA or lower, had problems when using the ISO since we switched to the "open module," which does not support those graphics cards. Instead, we **relied** on the Nouveau driver, which appeared to be problematic on quite many setups. This issue should now be fully resolved.

We have added a new boot animation, which unifies our **theming** and design language. This new **boot animation** will be automatically used for all new installations. Existing installations can migrate; see the "Manual changes" section. Thanks to [Erenydlz](https://github.com/erenyldz89)!
Additionally, we have added a completely new GRUB theme. Thanks to [diegons490](https://github.com/diegons490/cachyos-grub-theme/) for working on that.

Cachy-Browser has now been deprecated, since there was not much **maintenance** and time invested from our side. To keep the default browser properly working, safe, and providing a good user **experience**, we have decided to drop support for this.
Existing Users **will** automatically get a popup when starting Cachy-Browser, **which** provides a link on how to migrate **to** Firefox or other browsers with their profile. In the future, we will provide an **additional** package that can be used to apply the Cachy-Browser Firefox config and uBlock configuration.

Limda Hosting has now provided a 10GBs Mirror in Bangladesh. We are really glad that they **are providing** this now, since our **servers** were not the best in this region. This should help users in the Asian region to have a proper connection speed.

Proton-CachyOS has been updated to the Proton 10 release. Most CachyOS Proton 9 features are still included and now also **include** Wayland Support for the SLR (Steam Linux Runtime), wine-wayland fixes, FSR4 Upgrade support, Haptics for Dual Sense, and much more. This should improve the gaming **experience** a lot.
mesa-git now contains patches to improve FSR4 performance on RDNA4. Here you can find a guide **on** how to use and utilize FSR4: [https://discuss.cachyos.org/t/how-to-use-fsr4-on-rdna4-gpus/9004](https://discuss.cachyos.org/t/how-to-use-fsr4-on-rdna4-gpus/9004)
As soon **as** it is possible, we will consider **backporting** these patches **to** the stable mesa package, but this is not available yet.

On the fixes side, we have improved the **experience** for users in **Russia** and the installation **process**. Russia started to block our CDNs, which basically blocked the installation for many users. The cachyos-rate-mirrors script now **has** a fallback for users in **Russia** so that they can proceed with the installation.
The "Discover" Taskbar entry has now finally been removed, and ddcutil has been updated to the latest RC version since the current 2.2.0 release **introduces** freezes and crashes on the KDE Desktop.

The Handheld Edition **received** a bunch of new features and improvements. The Game Mode now shows the correct operating system to be used, the convolver profiles **have** been updated, and powerbuttond has been replaced with steam-powerbuttond for a smoother **experience** in standby.
SteamOS-Manager has now been integrated, which is a replacement for "hhd." This will be integrated first into the MSI **Claw** and then **other devices**, like the Steam Deck and ROG Ally.

**Features:**

- **ISO**: Added automatic detection during ISO boot to identify the system's NVIDIA GPU and load the appropriate module (e.g., nvidia-open, nvidia), providing better support for 10xx series and older.
- **Plymouth**: Added a new Plymouth animation.
  - Thanks to Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) for working on this!
- **Browser**: Cachy-Browser has been deprecated. We now provide Firefox as the default preinstalled browser. A guide to migrate profiles to Firefox (and its forks) can be found here: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Added kcalc, filelight, plymouth-kcm, and kio-admin to the KDE installation.
- **mkinitcpio**: Disabled fallback initramfs by default. This will save a significant amount of space.
- **Mirrors**: Added a new 10 Gbps mirror in Bangladesh. Thanks to Limda for hosting this!
- **Proton**:
  - Rebased almost all patches from **Proton CachyOS 9.0**.
  - Enabled the Wayland driver for Steam Linux Runtime builds. Enable with `PROTON_ENABLE_WAYLAND=1`. Thanks to [GloriousEggroll](https://github.com/GloriousEggroll) for making it happen.
  - Added many Wayland-related patches from upstream Wine that were released after Wine 10.0.
  - Fixed various issues with the Wayland driver and Vulkan games. Thanks to [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) for all the hard work.
  - Added a stub implementation for `amdxc64.dll` to enable FSR4. Use `FSR4_UPGRADE=1` to upgrade FSR3.1 games to FSR4. Thanks again to [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instructions: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Added DualSense-related patches for more complete audio device detection functionality for wired sound-based haptics. Some games that relied on that specific behaviour should now have that functionality. Thanks to [ClearlyClaire](https://github.com/ClearlyClaire) for the original patches and [Exotic0015](https://github.com/Exotic0015) for looking into it since **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Removed the Dragon Age Inquisition patch as it was not working. Please use **Proton CachyOS 9.0** for now with that game.
- **GRUB**: Added a new GRUB theme. Thanks to [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Fixes:**

- **Mirrors**: Fixed an issue where users from Russia could no longer install. This was mitigated by not using CDN77, which Russia had started to block.
- **kde-settings**: Disabled the Discover icon in the taskbar.
- **ddcutil**: Pushed the ddcutil 2.2.1 pre-release to fix an issue where AMD GPUs were freezing when watching YouTube videos.

**Changelog for Handheld Edition:**

- **os-branch**: Game Mode now correctly shows that CachyOS Linux is being used.
- **audio**: Updated convolver profiles.
- **steamos-manager**: This is used for GPU clock and TDP management, BIOS/dock updates, storage device maintenance, external storage formatting, and battery charge limit for the Steam Deck.
- **steamos-powerbuttond**: This component replaces the standard powerbuttond for a better sleep experience.
- **jupiter-hw-support**: Updated to 20250501.

**Manual changes for existing users:**

Nothing special to do. If you want to have the new bootanimation, you can do following:

```
1. sudo pacman -Syu cachyos-plymouth-bootanimation
2. sudo plymouth-set-default-theme -R cachyos-bootanimation
```

Outside of that just run and update your system:

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

- CDN: https://iso.cachyos.org/desktop/250530/cachyos-desktop-linux-250530.iso
- CDN2: https://cdn77.cachyos.org/ISO/desktop/250530/cachyos-desktop-linux-250530.iso
- Germany: https://mirror.cachyos.org/ISO/desktop/250530/cachyos-desktop-linux-250530.iso
- USA: https://us.cachyos.org/ISO/desktop/250530/cachyos-desktop-linux-250530.iso
- China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250530/cachyos-desktop-linux-250530.iso
- https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

- CDN: https://iso.cachyos.org/handheld/250530/cachyos-handheld-linux-250530.iso
- CDN2: https://cdn77.cachyos.org/ISO/handheld/250530/cachyos-handheld-linux-250530.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

- PayPal: https://paypal.me/pttrr
- Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
