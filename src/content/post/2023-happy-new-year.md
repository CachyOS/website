---
title: Happy new Year, CachyOS Recap 2023 and Plans for 2024
excerpt: Happy new Year from CachyOS and thank you
category: Information
tags:
  - information
  - repository
---


We wish you all a happy new year and hope you got well into 2024.
2023 was a great year for CachyOS, marked by significant improvements, changes, and fixes across the board.
With the support of the community, we've made significant improvements in enhancing the kernel, installer, and repository.

## Repository Updates

Our repository saw significant improvements, including:

- January: Introduction of the "cachyos-community-v3" repository, providing a complete rebuild of the "community" repository from archlinux
- May: archlinux made their "git migration" and it was required to make a lot of changes on our cachybuilder and it also required a complete rebuild. The community repository got merged into "extra".
- August: Migration to a 7950X3D server from Hetzner, enabling support for x86-64-v4 (avx512) optimized packages
- October: Launch of our new Cachybuilder, written in C++, offering enhanced build system capabilities
- November: Integration of complete x86-64-v4 (avx512) repositories

## GUI-Installer

The GUI-Installer underwent substantial revisions, including:

- New Desktop Environments: UKUI, Cinnamon, Budgie, Mate, LXDE and Qtile
- Refined theming for improved visual consistency
- Automated mirror ranking for efficient online installation
- Integration of the Refind Bootloader
- Support for LUKS encryption for the zfs filesystem
- Rewritten chwd (CachyOS Hardware Detection) in rust and simplified profiles
- Adoption of luks2 encryption as the default for the systemd bootloader
- Precompiled NVIDIA Module for all kernels, eliminating the need for dkms

## Kernel, Settings, and Miscellaneous Updates

The linux-cachyos kernel, CachyOS-Settings, and other components experienced exciting developments:

### Kernel

- The ZFS Module is directly build with the kernel
- Introduction of linux-cachyos-server for server configurations
- Addition of linux-cachyos-lts kernel following LTS release cycle
- The EEVDF Scheduler got added with 6.3 release for testing
- Support for NVIDIA module build
- linux-cachyos-sched-ext got added to test various scheduler with the sched-ext BPF
- Compatibility with Fedora, Nix, and Gentoo
- The PRJC(pds,bmq), cacULE and TT Scheduler got removed with the 6.6 Release

### CachyOS-Settings and others

- Add ZRAM recompression by default
- Systemd journal size limited to 50MB
- Shutdown timeout reduced to 15 seconds
- Nvidia-settings enhancements: fbdev=1 and other improvements
- Increased vm.max_map_count for optimized gaming performance
- topmem: a script to display top memory usage of processes and swap usage
- Optimized dirty_ratio values
- Enable defer+madvise defragmention for THP by default
- cachyos-bugreport.sh script for simplifying bug reports
- zram-generator: ZRAM size set equal to RAM

## BORE (Burst-Oriented Response Enhancer) CPU Scheduler Modification

Through the year 2023 from BORE v1.7.5 to v3.6.1, it got gradually improved in 70+ consecutive update releases including:

- Many performance improvements
- Numerous bug fixes
- Parameter optimizations
- More precise burst tracking
- Better fairness and response consistency
- Better CPU cgroups compatibility
- EEVDF scheduler support
- Constant scheduling granularities
- Burst "inheritance" feature with caching ability
- Topological recursive task search
- Better code readability
- Architectural compatibility improvement

## New Team members joined

Two new members joined the CachyOS team in 2023, bringing valuable expertise:

- @ventureoo: Focused on hardware detection, nvidia-settings, kernel PKGBUILDs, and general tasks
- @lseman: Contributed PGO and BOLT optimization for packages like Julia, zstd, python, and sqlite

## 2024 Plans

Our commitment to excellence continues in 2024. We're excited to implement these plans:

### Infrastructure Enhancements

- Expanding network of mirrors worldwide to improve download speeds, particularly in Asia
- Utilizing the R2 Storage from Cloudflare for enhanced performance

### CLI Installer

- Refining and enhancing the CLI installer for greater customization and control
- Developing a "config" based installation approach, enabling one configuration for multiple machines
- Including post-install scripts, which can be provided by users

### GUI Installer

- Migrating the Calamares Installer from QT5 to QT6, leveraging Calamares upstream's progress while addressing custom patch dependencies
- Integrating x86-64-v4 auto detection in the installer for improved user experience

### Merchandise

- Introducing CachyOS merchandise, including apparel and accessories
- Collaborating with a designer to create captivating logos and designs
- Starting with smaller items like cups, t-shirts, and similar products

We thank you all for your support!

**The CachyOS Team**

