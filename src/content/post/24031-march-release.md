---
title: CachyOS March 2024 Fixup Release
excerpt: Plasma 6.0.2, 6.8 Kernel, pacman 6.1
category: release
tags:
  - release
---

Greetings, CachyOS enthusiasts!

This is just a little fix release, due issues with Wayland and NVIDIA cards.
Currently there is an issue going on, when fbdev=1 and drm.modeset=1 is used, that the ownership is taken to late and this results into a blackscreen.
NVIDIA did provide a patch for this in the forum, which we have applied to our nvidia module. This does mitigate the issue and NVIDIA users will have good expierence.

We also did some little changes on the netinstall and removed the additonal kernel list, to avoid confusion by the users.
Also the new 6.8.1 Kernel is now included in the ISO.

Here you can find the changes from this release:

**Features:**
- netinstall: Remove extra kernels in the netinstall selection to avoid confusion by users. Other custom kernels can be installed via Kernel Manager
- Kernel Manager: NVIDIA Modules are automatically installed when detected, Rebased for QT6, Fixed custom names when using LTO Option
- Package Installer: Rebased on QT6, updated for pacman 6.1
- Package Updates: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Bug-Fixes:**
- NVIDIA: patched nvidia module to take the owner ship of nvidia.drm.modeset earlier to avoid issues on nvidia graphics
- Refind: Don't install the lts kernel to avoid issues
- shellprocess: Remove the liveusers directory completly

Here you can find the changes from our last release:

https://cachyos.org/blog/2403-march-release/

**Download:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* https://mirror.cachyos.org/ISO/
* https://sourceforge.net/projects/cachyos-arch/files

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* PayPal: https://paypal.me/pttrr
* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
