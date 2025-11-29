---
title: CachyOS April 2024 Release
excerpt: XZ CVE Fix, Back to X11, Plymouth, Refind new Layout
category: release
tags:
  - release
---

Greetings, CachyOS enthusiasts!

This is our fourth release of 2024 and is mainly to provide a xz library, which does not contain the current known CVE with it.
We have added the commit "Mitigate past commit of malicious xz actor by ensuring path names are only outputted via safe_fprintf to avoid escape sequences in paths hitting the terminal." in "libarchive"

We have also added a bunch of new features, so it's quite an opportune time to do a release.
Unfortunately, due to issues with calamares and wayland, when changing the keyboard layout in calamares we needed to switch back to x11 only for the ISO.

We now provide a new refind partitioning layout (separate /boot and /boot/efi), which makes it easier to multi boot with windows and other linux distributions.
Plymouth has been added and it is now used by default for all currently available bootloaders, Plymouth provides a themed boot animation instead of scrolling text.
The boot animation will show a spinning circle, the CachyOS Logo and your UEFI Motherboard Vendor splash art.

Here you can find more detailed changes for this release:

**Features:**

- Plymouth: Use plymouth to provide a themed boot animation
- ISO: Switch back to X11 due to issues when setting the keyboard layout in calamares
- rEFInd: New partitioning layout (separate /boot and /boot/efi)
- netinstall: KDE: Install xwaylandvideobridge by default
- netinstall: Use lightdm instead of ly for various Desktop Environments, due to a bug in ly
- systemd-boot: Use @saved for systemd-boot to allow it to remember the previously selected boot entry
- cachyos-keyring: Refactor cachyos-keyring package and provide a cachyos-trusted keyring
- ISO: Use ZSTD 19 Compression for the mkinitcpio image of the ISO
- Package Updates: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 and cachyos-settings 39-2

**Bug-Fixes:**

- Autologin: Fixed the autologin option when used together with SDDM
- xz: Provide a patched xz package
- libarchive: Mitigate commit from malicious xz actor
- cachyos-settings: udev-rule: don't set watermark_scale_factor to 125, since it significantly increases RAM usage
- calamares: pacman-keyring: Use simpler method to integrate the keyring into the installation

**Download:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

- https://cdn.cachyos.org/ISO/kde/240401/cachyos-kde-linux-240401.iso
- https://mirror.cachyos.org/ISO/
- https://sourceforge.net/projects/cachyos-arch/files

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

- PayPal: https://paypal.me/pttrr
- Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
