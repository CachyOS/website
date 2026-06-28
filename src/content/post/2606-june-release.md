---
title: CachyOS June 2026 Release
excerpt: Hyprland Noctalia, DNS-over-QUIC, GCC Branch Prediction
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **fourth release** of the year, bringing the new CachyOS Hyprland Noctalia desktop option, DNS-over-QUIC support, Python and GCC performance improvements, and a variety of installer and hardware detection fixes!

First, the package stack has received a few important improvements. **Python** now uses extended PGO, improving performance for Python workloads. We have also added a [GCC patch](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) for generic x86 branch misprediction tuning, helping GCC better account for branch misprediction costs on modern Intel and AMD CPUs. Our `pacman` package now includes [network isolation for scriptlets and hooks](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9), preventing them from accessing the network by default. We also fixed a regression found in Phoronix Benchmarks when **OpenBLAS** was used on high core count CPUs. Additionally, `proton-cachyos` has been renamed to `proton-cachyos-native`.

The installer now includes the **CachyOS Hyprland Noctalia** desktop option together with a preview video, making it easier to see the desktop before selecting it. `paru` has been removed from the installation; users are recommended to use [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), either through its GUI or CLI, as an alternative. **MangoWM** now uses SDDM as its display manager, and GNOME System Monitor has been replaced with **Resources**. The audio package group now includes `realtime-privileges`, and the live session has better keyboard layout and variant detection.

**CachyOS-Welcome** now supports **DNS over QUIC** through `blocky`, including support for custom endpoints. A dedicated Troubleshooting page has been added, **Ptyxis** is now supported as a terminal, and new Azerbaijani and Greek localizations are available. The French readme and involvement pages have also been added. Several existing translations (Italian, German, French, Japanese, Bulgarian) were updated, and we fixed a crash when saved settings couldn't be read, plus corrected tweak state detection and global-service disabling via polkit.

In **chwd**, we added Turkish localization and removed `cachyos-handheld` from the handheld package lists. We also corrected virtual-machine vendor IDs, removed unnecessary `fprintd` service activation, and fixed the Mesa removal guard. chwd now resolves driver conflicts on multi-GPU systems where GPUs require incompatible driver branches, and ships a 32-bit Vulkan driver for virtual machines.

In **cachyos-settings**, user services now have a 15-second startup timeout and a 10-second shutdown timeout. This prevents long 90-second shutdown delays caused by user services waiting too long during shutdown.

On the fixes side, the installer now correctly handles keyboard layout ordering and `locale1` configuration. It also copies the correct pacman configuration into the installed system, removes leftover `/etc/calamares` directories after installation, runs Calamares cleanup after all installation scripts, and drops the redundant Limine post-install step. In **CachyOS-Welcome**, selecting "Install Apps" no longer crashes when `cachyos-pi` is not installed; the button is now hidden when unavailable.

**Features:**

* **Packages:**
  * Python now uses extended PGO to improve performance
  * Added a [GCC patch](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) for generic x86 branch misprediction tuning, improving how GCC accounts for branch misprediction costs on modern Intel and AMD CPUs
  * Fixed a regression found in Phoronix Benchmarks when OpenBLAS was used on high core count CPUs
  * Renamed `proton-cachyos` to `proton-cachyos-native`
* **pacman:** Added [network isolation for scriptlets and hooks](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Installer:**
  * Added CachyOS Hyprland Noctalia desktop option and preview video
  * Removed `paru` from the installation; users are recommended to use [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), either through its GUI or CLI, as an alternative
  * Added SDDM as the display manager for MangoWM
  * Replaced GNOME System Monitor with Resources
  * Added `realtime-privileges` to the audio package group
  * Improved live-session keyboard layout and variant detection
* **CachyOS-Welcome:**
  * Added DNS over QUIC (DoQ) support through `blocky`
  * Added a dedicated Troubleshooting page
  * Added Ptyxis terminal support
  * Added Azerbaijani and Greek localizations
  * Added French readme and involvement pages
  * Updated Italian, German, French, Japanese, and Bulgarian translations
* **chwd:**
  * Added Turkish localization
  * Removed `cachyos-handheld` from handheld package lists
  * Resolves driver conflicts on multi-GPU systems requiring incompatible driver branches (e.g. mixed NVIDIA generations), installing the best common driver or falling back to the primary GPU
  * Added the 32-bit Vulkan driver for virtual machines
* **cachyos-settings:** Applied 15-second startup and 10-second shutdown timeouts to user services, preventing 90-second shutdown delays

**Fixes:**

* **Installer:**
  * Fixed keyboard layout ordering and `locale1` configuration handling
  * Fixed copying the correct pacman configuration into the installed system
  * Removed leftover `/etc/calamares` directories after installation
  * Moved Calamares cleanup after all installation scripts
  * Removed the redundant Limine post-install step
* **CachyOS-Welcome:**
  * Prevented a crash when selecting "Install Apps" without `cachyos-pi` installed; the button is now hidden when unavailable
  * Fixed a crash when the saved settings file could not be read or parsed; settings now reset to defaults on failure
  * Corrected tweak detection (including `graphical-session.target.wants`) and global user-service tweak disabling via polkit
* **chwd:**
  * Corrected virtual-machine vendor IDs
  * Removed unnecessary `fprintd` service activation
  * Fixed the Mesa removal guard

**Manual changes for existing users:** No manual changes needed. Just the usual updating:

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: <https://iso.cachyos.org/desktop/260628/cachyos-desktop-linux-260628.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/desktop/260628/cachyos-desktop-linux-260628.iso>
* Germany: <https://mirror.cachyos.org/ISO/desktop/260628/cachyos-desktop-linux-260628.iso>
* USA: <https://us.cachyos.org/ISO/desktop/260628/cachyos-desktop-linux-260628.iso>
* China: <https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/260628/cachyos-desktop-linux-260628.iso>
* Russia: <https://archlinux.gay/cachy/ISO/desktop/260628/cachyos-desktop-linux-260628.iso>
* Russia: <https://mirror.yandex.ru/cachyos/ISO/desktop/260628/cachyos-desktop-linux-260628.iso>
* <https://sourceforge.net/projects/cachyos-arch/files>

**Handheld Edition:**

* CDN: <https://iso.cachyos.org/handheld/260628/cachyos-handheld-linux-260628.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/handheld/260628/cachyos-handheld-linux-260628.iso>

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: <https://www.patreon.com/CachyOS>

Thank you for your continued support!

**The CachyOS Team**
