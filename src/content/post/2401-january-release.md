---
title: CachyOS January 2024 Release
excerpt: x86-64-v4 autodetection, sched-ext provided as default
category: release
tags:
  - release
---

Greetings, CachyOS enthusiasts!

Happy new year! We're excited to introduce our first release of 2024, which brings a wealth of new features and improvements to CachyOS.

**New autodetection for x86-64-v4 CPUs**

We're now automatically detecting and enabling the x86-64-v4 repository for users with compatible CPUs, such as Zen 4, Intel 11th Gen, or Intel Xeon. This will ensure you get the best performance possible from your system.

**Improved Wayland experience for NVIDIA users**

Starting with this release, xwayland is now patched with explicit sync patches to further enhance the Wayland experience for NVIDIA users. This should result in smoother and more responsive graphics.

**Default kernel with sched-ext scheduler framework**

The default kernel now includes the sched-ext scheduler framework, which allows you to dynamically switch between [different schedulers](https://github.com/sched-ext/scx) at runtime. This gives you more flexibility in fine-tuning your system performance. There are several example schedulers such as scx_rusty, scx_nest and scx_rustland.

**Additional package updates**

We've also updated a number of other packages, including mesa 23.3.3, the Linux kernel 6.7.1, gcc 13.2.1, mkinitcpio 37.2, and xorg-xwayland 23.2.4.

**Bug fixes**

We've also fixed a bug that was affecting Ada Lovelace NVIDIA cards. Now, the NVIDIA modules are directly packed into the initramfs to avoid issues with the early KMS.

mkinitcio also got a bugfix: solved issues with the 6.7 kernel, which resulted into a really big initramfs image.

**Download and support**

You can download the latest CachyOS ISO from our mirrors on SourceForge:

* [https://mirror.cachyos.org/ISO/](https://mirror.cachyos.org/ISO/)
* [https://sourceforge.net/projects/cachyos-arch/files/](https://sourceforge.net/projects/cachyos-arch/files/)

If you would like to support our development efforts, please consider making a donation to help cover our monthly server costs:

* [https://paypal.me/pttrr](https://paypal.me/pttrr)
* [https://www.patreon.com/CachyOS](https://www.patreon.com/CachyOS)

Thank you for using CachyOS!

**The CachyOS Team**
