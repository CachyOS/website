---
title: CachyOS Recap 2024
excerpt: Christmas and new year
category: Information
tags:
  - information
---

This is a little post about the changes in CachyOS, but also the community in 2024. We had a really great year with you, improved CachyOS together heavily and introduced dozens of new features and fixes. Below you can find a summary of the important changes done at the CachyOS Project.

## Team

The CachyOS Team is grown quite a bit in 2024. Following team members joined in 2024:

- **Eric Naim (@naim):** Kernel contributor, package maintainer, and all-around community superhero.
- **Nekoh:** Developer and Maintainer of the CachyOS Handheld Edition (rumor has it, they can code with one hand while beating the final boss in a handheld game with the other).
- **Stelios Tsampas (@loathingkernel):** Developer and Maintainer of CachyOS Wine and Proton (he can fix Wine bugs faster than you can say “Cheers!”).
- **Harsh Peshwani (@Soulharsh007):** Developer of Cachy-Chroot, Website, and Builder Dashboard

Thanks to all of you joining the CachyOS Team and volunteering the work to this project. We are very proud to have you on our team! <3

## Features and Changes

We had in 2024 a really good development track in bringing new features, upstream fixes and bringing improvements to the community. Here is a list of the changes into CachyOS:

### Repository

- Added `x86-64-v4` support to our repository and installation process
- Added Zen 4 (znver4) support to our repository and installation process
- Added support for precompiled NVIDIA Modules
- Higher syncing interval for optimized packages
- Added several new mirrors around the world
- Added CDN's and World Wide Cache CDN's for the CachyOS Repository
- Added an unstripped vmlinux of kernels into the repository
- More Profile guided pptimization to more packages
- Kernels are now as default optimized with AutoFDO

### Installer

- All filesystems support to refind and encryption (luks2)
- Dropped Offline Installer
- automatic mirror ranking before the installation process
- Reworked netinstall package list
- Added Plymouth support out of the box
- Added bcachefs support
- Added "AI-SDK" Installation type for out of the box CUDA/ROCm support
- Added support for Game Mode (Steam) expierence on handheld devices
- Added T2 MacBook support
- switched to BTRFS as default filesystem
- Rebased on QT6
- Early Microcode loading with the initramfs
- SDDM uses wayland now as default

### Misc

#### CachyOS Hardware Detection (chwd)

- Support for 40xx NVIDIA Cards
- Added handheld configuration and detection
- Added MacBook T2 Chip configuration and detection
- Added network driver detection
- Added `libva-nvidia-driver` to the nvidia preset
- NVIDIA Open Modules used as default, if supported
- Added AMDGPU GC support for detecting if ROCm is supported
- NVIDIA: Improved Prime profile detection
- Added `--autoconfigure` option to automatically find the best drivers for the hardware
- Profiles are now specially designed for PCI Devices

#### cachyos-settings

- MQ Deadline Scheduler for SSD/SD Cards
- Dropped tuning for watermal values
- Added debuginfod URL to CachyOS user
- Added support for NTSync
- Added topmem tool to show the top 10 memory usage of processes
- Reworked sysctl configuration
- Added zink-run tool to easily run application with zink
- Added game-performance script to easily switch to the performance profile, when starting the game
- Disabled zswap as default
- Added Logo for gdm
- Use syxstemd-resolved as default dns-resolver
- Added support for thp shrinker

#### cachy-chroot

- Introduced Cachy-Chroot - a tool to easily chroot into the users system
- Added auto-mount via fstab for simplified chrooting (user only selects the wanted disk)
- Added support for LUKS Encryption
- Added CachyOS BTRFS Preset detection and automatic mounting based on preset

## Community

Thank you all for using and joining the CachyOS Project! The community has grown a lot in this year. Thanks for all the testing and the contributions! You are all helping us a lot to improve this open source project, while also helping the upstream community to discover bugs fast before they are shipped to a wider range of users.

### Stats

#### Social

- **Discord:** 4500 Members (We tried to count the memes, but we lost track at 10,000.)
- **Reddit:** 3100 Members
- **Forum:** 1500 Members
- **Telegram:** 800 Members

#### Traffic

The traffic on our servers has increased a lot in the last year.

##### Complete year (1.1.2024 - 23.12.2024)

- **1,4 Petabyte (1400 TB) Data served**
- **765 Million requests**
- **234k unique visitors per month**

##### Last 30 days:

- **250TB Data served per month**
- **140 Million requests per month**
- **234 thousands unique visitors**

#### ISO Downloads

- **19,000 ISO Downloads per month**

### Sponsors && Donations

#### Sponsors

In 2024 we have received new partnerships and help for delivering our repository easily across the world. Thank you all for sponsoring us and helping us to improve CachyOS.

- [CDN77](https://www.cdn77.com/) - World Wide Cache CDN
- [Cloudflare](https://www.cloudflare.com/) - Cloudflare Pro for [cachyos.org](http://cachyos.org)
- [Tebi](https://tebi.io/) - CDN on 4 different datacenters
- [Active Servers](https://active-servers.com/) - 19% less costs for our buildserver

#### Donations

Thank you all for donating to us and helping us to pay our infrastructure! We have received in 2024 4500€ in total - this covered mostly our complete server costs the first time!

## Greets

As we power down the terminal for a holiday break, we want to say: **Thank You!** Thank you for being part of this crazy journey. We wish you a Merry Christmas and a wonderfully Happy New Year! May 2025 bring even more awesome features, brilliant code and fewer bugs.

Cheers to another year of CachyOS - let’s make it even better together! Happy holidays and Happy Christmas!

**The CachyOS Team**
