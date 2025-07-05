---
title: CachyOS April 2025 Fixup Release
excerpt: OCCT, limine, gamescope
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

Today we have released an update that serves as a bugfix release for the previous version. This update resolves certain issues related to the kernel that were identified.

Additionally, this release now includes the OCCT tool, which enables the ISO to be used as an isolated stress testing environment. We'd like to thank @kaitokariheddo for this excellent suggestion!
Our thanks also go out to the OCCT Developers for their effective collaboration in getting OCCT correctly packaged and running on CachyOS.

The Handheld Edition has also received several nice updates. These include audio profiles for the Ally X and Legion Go, as well as a switch to the upstream Gamescope implementation, which is expected to provide a better experience.

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

- CDN: https://iso.cachyos.org/desktop/250422/cachyos-desktop-linux-250422.iso
- CDN2: https://cdn77.cachyos.org/ISO/desktop/250422/cachyos-desktop-linux-250422.iso
- Germany: https://mirror.cachyos.org/ISO/desktop/250422/cachyos-desktop-linux-250422.iso
- USA: https://us.cachyos.org/ISO/desktop/250422/cachyos-desktop-linux-250422.iso
- China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250422/cachyos-desktop-linux-250422.iso
- https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

- CDN: https://iso.cachyos.org/handheld/250422/cachyos-handheld-linux-250422.iso
- CDN2: https://cdn77.cachyos.org/ISO/handheld/250422/cachyos-handheld-linux-250422.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

- PayPal: https://paypal.me/pttrr
- Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!
