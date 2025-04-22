---
title: CachyOS April 2025 Fixup Release
excerpt: OCCT, limine, gamescope
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

Today we pushed out a new release, which is a fixing release for the previous one. There were some issues with the kernel, which have been resolved.
Also, this now includes the tool "OCCT", which makes it possible to use the ISO as an isolated stress testing environment. Thanks to @kaitokariheddo for providing this excellent idea!

The handheld edition got also some nice updates, like audio profiles for the Ally X and Legion Go, aswell we have switched to the upstream gamescope, which should provide a better expierence.

**Changelog for this Release:**

**Features:**
- **occt**: Added OCCT to the ISO to have a live environment for stress testing

**Fixes:**
- **kernel**: Fixes module crash on Asus laptops
- **limine**: Limine now has mkinitcpio-limine-hook installed and will automatically create bootloader entries


**Changelog for Handheld Edition:**
- **audio**: Added audio profiles for ROG Ally X and Legion Go
- **gamescope**: Replaced gamescope-plus with upstream gamescope

**Manual changes for existing users:**

Nothing needed, just update your system as usual:
```
sudo pacman -Syu
```

**Download:**
**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/250422/cachyos-desktop-linux-250422.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/250422/cachyos-desktop-linux-250422.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/250422/cachyos-desktop-linux-250422.iso
* USA: https://us.cachyos.org/ISO/desktop/250422/cachyos-desktop-linux-250422.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250422/cachyos-desktop-linux-250422.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/250422/cachyos-handheld-linux-250422.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/250422/cachyos-handheld-linux-250422.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* PayPal: https://paypal.me/pttrr
* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!
