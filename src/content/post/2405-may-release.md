---
title: CachyOS May 2024 Release
excerpt: Bcachefs, Handheld, AI-SDK
category: release
tags:
  - release
---

Hello CachyOS Enthusiasts,

This is our 6th release this year and we are really excited to announce our newly added features.
We are now introducing the Bcachefs file system in our installer. This can be used with on a root installation and has been tested quite well.
Bcachefs is currently still in an experimental state but will improve lot with the next major kernel releases. The installer automatically detects which file system is installed and will correctly configure and install the required packages.

The next new feature is an AI SDK Installation. This installation type automatically installs all required packages required to have a local AI Installation.
This was done due to requests from an Local AI Enthusiasts group and will be further enhanced in the future. For now, this install method only works for CUDA and NVIDIA, but we are also working on introducing this for official ROCm supported cards. ROCm support is planned to be released together with the next release.

Last but not least, we are adding an experimental handheld Edition for CachyOS. The Handheld Edition automatically setups a Steam Deck like experience and installs all required Gaming Tools for it.
We are also proud to announce that this version will use the LAVD Scheduler, which is funded by Valve and improves the Frametime and 1% lows on Handhelds dramatically.
The Handheld Edition is currently tested on the Rog Ally, Lenovo Legion GO and MSI Claw. Steam Deck support is also being currently worked on, but there are some small issues that should be fixed with upcoming releases. For more information check out following: [Handheld information](https://discuss.cachyos.org/t/information-experimental-cachyos-handheld-edition/203)

We are also working closely together with the sched-ext development team and currently testing their framework a lot. The Rusty Scheduler has made insane improvements for interactivity and is already used by many users in our community as the default scheduler with systemd services.

This release also contains some fixes for the ISO and calamares. The fstrim timer is now correctly enabled, the ISO won't screen lock anymore during installation and some fixes for ZFS and the umount module of calamares.

With this release we are dropping support for the Offline Installer to avoid extra maintenance work. Currently it is not possible for us to provide feature parity for the Offline Installer and thus is the reason for dropping it. We will keep an ISO online, which will still include the Offline Installer, so that users can use this as a fallback.

We have also prepared our repository for the upcoming explicit sync changes from NVIDIA and AMD. Kwin, Mutter, egl-wayland and xorg-xwayland are provided with the patches, which are required for explicit sync.
The NVIDIA Driver support is expected to be released on May 15, after some internal testing we will push this driver to the repository.

CachyOS now provides an archive for the "cachyos", "cachyos-v3" and "cachyos-v4" repository.
This archive can be used to downgrade the kernels or other customized packages provided from our repository.

We have introduced a new Forum, feel free to check it out!
https://discuss.cachyos.org

Here you can find the changelog for this release:

**Features:**

- Filesystems: Introduce Bcachefs as a filesystem option
- pacstrap: Add detection if Bcachefs is used and install corresponding Bcachefs-tools
- CachyOS-AI-SDK: Introduce new install option to provide a OOB NVIDIA SDK Setup
- CachyOS-Deckify: Provide variant for Handhelds (experimental), see [here](https://discuss.cachyos.org/t/information-experimental-cachyos-handheld-edition/203) for more details
- BTRFS: Automatic Snapper for snapshots, can be installed from within the CachyOS hello app.
- ISO: Drop Offline Installer
- Package Updates: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2 , NVIDIA 550.78, zstd 1.5.6

**Bug-Fixes:**

- settings.conf: Move hardware detection before netinstall
- pacstrap: Use btrfs-assistant instead of btrfs-assistant-git
- plymouth: remove plymouth hook on zfs + encryption
- ISO: Add various config files for KDE, to avoid getting screen locking during installation
- services-systemd: Properly enable fstrim.timer
- umount: Disable emergency to avoid issues with the zfs installation
- shellprocess: Cleanup leftovers from the offline installation

**Download:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

- https://mirror.cachyos.org/ISO/
- https://sourceforge.net/projects/cachyos-arch/files

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

- PayPal: https://paypal.me/pttrr
- Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
