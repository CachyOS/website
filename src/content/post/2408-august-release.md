---
title: CachyOS August 2024 Release
excerpt: NVIDIA Open Module, COSMIC, Secure-Boot, Ally X, CDN
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

This is our 9th release this year, featuring improvements in hardware detection and infrastructure enhancements.

Starting with this release, the hardware detection will automatically use the open NVIDIA modules. Users can revert to closed-source modules by running `sudo pacman -S linux-cachyos-nvidia`.

We've also included the latest NVIDIA Beta driver (560) after extensive testing. This driver appears to be in a stable state following its second beta release.

The COSMIC Desktop Environment is now available for installation. We'll follow the upstream release (Alpha 1) for packaging. Packages based on the latest commit are available, though these won't be used for installation. Existing users can install COSMIC on their current setup with the command: `sudo pacman -S cosmic-session`. This installs the base packages for running COSMIC. Additional packages like cosmic-text-editor, cosmic-terminal, and cosmic-store are also available.

Our infrastructure has seen significant improvements:
We're proud to announce that CDN77 is sponsoring us with a worldwide cache CDN. This greatly enhances connection speeds for users, especially in regions we previously couldn't serve effectively with our existing mirrors. This CDN has been tested for about 3 weeks by us and the community, receiving positive feedback.

We're now providing an Arch Linux mirror and Cache CDN (CDN77), which will be the default during installation. This addresses issues with mirror ranking often selecting outdated mirrors, leading to dependency problems and failed installations. This solution ensures fast package delivery from the CDN while avoiding these issues.
Two fallback mirrors hosted by us will also be used, along with one Tier 1 mirror from Arch Linux.

The Kernel Manager has received several new fixes and changes. The sched-ext configuration now supports passing custom flags via the GUI to each scheduler. NVIDIA-open modules for custom-built kernels have been added, and it now remembers the last used options for custom-built kernels. Fixes for password prompt handling in case of delays and building with a custom pkgname with LTO and NVIDIA modules enabled have also been implemented.

We've added a script to easily handle Secure Boot, along with a detailed Wiki page explaining the usage of `sbctl`.

The cachy-chroot program can now automatically mount user partitions from the Live ISO, simplifying the process of chrooting into the system when issues arise. It checks for mounted filesystems and subvolumes in `fstab`, mounts them on the correct paths, and chroots into the system. LUKS support has also been added to cachy-chroot.

The CachyOS Hardware Detection has been improved with fixes in PRIME/Hybrid Profile detection, now based on device names for easier detection of mobile chips. The RTD3 Workaround has been removed due to issues on some setups, with a guide added to the wiki for manual application if needed.

Common fixes have been applied to the ISO, game-performance script, Calamares, and mirror ranking on the Live ISO.

The Handheld Edition now officially supports the Ally X, thanks to Luke Jones' extensive work on these patches and testing by ChimeraOS and Bazzite. Device support has been verified by multiple CachyOS users.
KWin's libei is now used for Wayland Input Emulation instead of libextest. Fixes have been added to block the use of PackageKit on the Handheld Edition, as it generally causes issues on Arch Linux-based systems.

**Changelog for this Release:**

**Features:**

- chwd: NVIDIA now uses the open module as default for supported cards
- Desktop: Added COSMIC Desktop Environment to the installation options
- NVIDIA: Latest 560 Beta driver is now the default; egl-wayland patched to fix crashes in Firefox and other applications
- mirrors: CDN77 sponsored CachyOS with Object Storage featuring a worldwide cache, significantly improving connection speeds for users
- mirrors: CachyOS now provides its own Arch Linux mirror to avoid syncing issues, set as default during installation along with fallback mirrors
- SecureBoot: Introduced script and tutorial in the Wiki for easy Secure Boot support
- cachy-chroot: Added auto-mount via fstab for simplified chrooting
- cachy-chroot: Implemented support for LUKS Encryption
- kernel-manager: Added support for setting sched-ext flags in the sched-ext configuration
- kernel-manager: Introduced option to build nvidia-open
- kernel-manager: Added option to remember last used options in configure page
- Package Updates: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Bug Fixes:**

- chwd: Improved PRIME profile detection based on device name
- chwd: Removed RTD3 workaround due to issues on some setups
- cachyos-rate-mirrors: Disabled mirror ranking when running on Live ISO
- cachy-chroot: Fixes a crash when a partition didn't have a valid fstype or uuid (eg Microsoft Recovery Partition)
- calamares: Refactored keyring initialization
- kernel-manager: Fixed support for building custom pkgbase with LTO kernels and modules enabled
- kernel-manager: Fixed password prompt delay
- ISO: Replaced radeon.modeset=1 with amdgpu.modeset=1 for modern GPUs
- game-performance: Prevented failure when profile is unavailable

**Changelog for Handheld Edition:**

- device support: Added support for Ally X, thanks to Luke Jones
- libei: Implemented support for libei, replacing libextest
- packagekit: Blocked packagekit installation to prevent issues with system updates via Discover
- hook: Added pacman-hook to conflict with natively compiled Proton versions, avoiding potential issues
- Updated jupiter-fan-control, steamdeck-dsp, and Steam Deck firmware

**Manual changes for existing users:**

No special changes required.
For users, which have a NVIDIA Card, which supports the Open Module (20xx or higher) can use the nvidia-open driver with following command:
`sudo pacman -S linux-cachyos-nvidia-open`

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

- CDN: https://iso.cachyos.org/desktop/240818/cachyos-desktop-linux-240818.iso
- CDN2: https://cdn77.cachyos.org/ISO/desktop/240818/cachyos-desktop-linux-240818.iso
- Germany: https://mirror.cachyos.org/ISO/desktop/240818/cachyos-desktop-linux-240818.iso
- USA: https://us.cachyos.org/ISO/240818/desktop/cachyos-desktop-linux-240818.iso
- China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/240818/cachyos-desktop-linux-240818.iso
- https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

- CDN: https://iso.cachyos.org/handheld/240818/cachyos-handheld-linux-240818.iso
- CDN2: https://cdn77.cachyos.org/ISO/handheld/240818/cachyos-handheld-linux-240818.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

- PayPal: https://paypal.me/pttrr
- Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
