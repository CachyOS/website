---
title: CachyOS March 2025 Release
excerpt: Limine, ASUS, dlss-swapper
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts**,

This is our second release this year, and we took a bit more time to get more hardware support with the new releases.

The first major change is that we have added a new Bootloader. Limine is a great bootloader, which can be used for BIOS and UEFI. Limine also supports some theming like Grub.
We have also added direct btrfs snapshot support, like it works with `grub-btrfs`. This has been greatly tested from our side and works well.
The snapshots will be enabled out of the box for all installations which are using BTRFS as a filesystem.

We have added a package, called `cachyos-samba-settings`, which configures and sets up Samba support. This has been requested by our users.
After discussions with NVIDIA, we have re-enabled the GSP Firmware for the closed-source kernel module. The GSP Firmware had a bunch of improvements in recent releases, and most drawbacks seem to be solved now.

On the kernel side, we have added support for the `ASUS Armoury` driver, which is mainly used by devices like the `Rog Ally`, as well as laptops for their fan and power management.
Recently we introduced using the `ntfs3` kernel driver as default if the user mounts a partition. This has been reverted, since some users reported problems with their NTFS drive, and it will now be used according to the user's defaults.

We have introduced a customized Wine package, which will now utilize `WoW64` to strip the dependencies from the lib32 libraries. We hope this will develop more over the years, and also Valve/Steam is migrating Steam without lib32 support.
Additionally, Wine and Wine-Staging will now **default** to NTSync instead of winesync. This should generally greatly improve performance, also in Wine applications.

Due to the new drivers, support has also been added for RDNA4, RTX 5070 Ti, as well as the 5070. These should now work correctly out of the box with the ISO, and users can proceed with their installation.
The recent kernel removed the `crc32c-intel` module, which has been preloaded by mkinitcpio if an Intel CPU has been used. Currently, we use the `MODULE_ALIAS` so that users don't get an error when using mkinitcpio. We will not keep this workaround forever, so please check the Manual changes section to adjust your config.
chwd got a bunch of fixes for the T2 MacBook to not offload the brcmfmac driver, as well as to not install the legacy 390xx NVIDIA Driver on laptops, since their state is very bad.

**Changelog for this Release:**

**Features**:
- **Bootloader**: Added support for Limine bootloader
- **Bootloader**: Added support for automatic snapshots for Limine bootloader
- **Samba**: Added `cachyos-samba-settings` package to easily set up a Samba mount
- **NVIDIA**: Re-enabled GSP Firmware for the closed source NVIDIA module
- **Kernel**: Added support for the Asus Armoury driver
- **Secure Boot**: Improved `sbctl-batch-sign` script to sign only wanted files
- **udev**: Reverted using ntfs3 as the default driver for NTFS partitions
  - Info: Using the NTFS3 Kernel driver as default resulted in issues for some users. Therefore, we reverted it again.
- **wine**: Wine and Wine-Staging defaulting now to WoW64 and NTSync
- **scx-manager**: Moved out sched-ext GUI manager from Kernel Manager to its own application
- **Hardware Support**: Added support for RDNA4, RTX 5070 Ti, and 5070.
- **Settings**: Added DLSS Swapper Support - this is a script, which automatically updates and uses the latest dlss version and preset
- **Package Updates**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Fixes**:
- **initcpiocfg**: Removed `crc32c-intel` module adding to mkinitcpio - This has been deprecated and now defaults to the `crc32c` module
- **chwd**: T2 MacBook disable offloading the brcmfmac
- **chwd**: Do not install NVIDIA 390.xx driver for laptops

**Manual changes for existing users:**

If you have an Intel CPU remove the `crc32c-intel` module from your mkinitcpio.conf
```
1. sudo micro /etc/mkinitcpio.conf
2. Remove the "crc32c-intel" entry in the "MODULES=()" section
3. sudo mkinitcpio -P
```

Outside of that just run and update your system:
```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: https://iso.cachyos.org/desktop/250330/cachyos-desktop-linux-250330.iso
* CDN2: https://cdn77.cachyos.org/ISO/desktop/250330/cachyos-desktop-linux-250330.iso
* Germany: https://mirror.cachyos.org/ISO/desktop/250330/cachyos-desktop-linux-250330.iso
* USA: https://us.cachyos.org/ISO/desktop/250330/cachyos-desktop-linux-250330.iso
* China: https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/250330/cachyos-desktop-linux-250330.iso
* https://sourceforge.net/projects/cachyos-arch/files

**Handheld Edition:**

* CDN: https://iso.cachyos.org/handheld/250330/cachyos-handheld-linux-250330.iso
* CDN2: https://cdn77.cachyos.org/ISO/handheld/250330/cachyos-handheld-linux-250330.iso

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* PayPal: https://paypal.me/pttrr
* Patreon: https://www.patreon.com/CachyOS

Thank you for your continued support!

**The CachyOS Team**
