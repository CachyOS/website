---
title: CachyOS August 2026 Release
excerpt: Shelly Rewrite, Cachy-Update Rework, Server Edition Profiles
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **fifth release** of the year.

The **CLI installer** had a bunch of fixes and refactoring, with added experimental support for the upcoming Server Edition installation profiles.

The **installer** received several desktop-specific changes. Hyprland now uses `noctalia-greeter` instead of SDDM, switched lightdm greeter to `lightdm-slick-greeter` for Cinnamon, added `gvfs-dnssd` to GNOME, also cosmic-monitor got added to Cosmic.

**CachyOS-Welcome** got a DNS rework, so the speed-test based server ranking now correctly picks the fastest DNS server.

In **chwd**, improved handheld detection via particular board name matching, and added Bulgarian localization. The kernel-manager backend was rewritten from C++ to Rust and integrated directly into chwd-kernel.

**Cachy-Update** was rebased onto Arch-Update v4.x, with its systray applet rewritten in Rust. New `--check --enable` option turns on automated update checks and starts the systray in one step, tray now has configurable pagination via TrayUpdatesPerPage, and default check interval was raised to 6 hours.

**Shelly**, our default GUI package manager, was rewritten from C# to Zig for its major release, dropping the managed runtime for native binaries with lower memory use and faster startup. The desktop app got a new first-run welcome screen, list and grid package browsing, AUR PKGBUILD previews with build output, and a Utilities page for database sync, cache cleanup and orphan removal. The CLI was rebuilt with integrated repository and AUR search, combined update checks for repositories, AUR, AppImages and Flatpaks, and TOML backup import and export. Flatpak support now offered as optional shelly-flatpak-backend package.

On the desktop side, we added new **Noctalia** variants for `mango` and `niri`, Noctalia v5 support for the Hyprland dotfiles, and updated the Nord KDE theme for Plasma 6.7. In **cachyos-settings**, a `nice` value tuning was added as pipewire error fix.

**cachyos-rate-mirrors** (rate-mirrors backend) now uses our mirrorlist API when ranking mirrors, which should give better ranking of outdated and regional mirrors.

**Features:**

* **Installer:**
  * CachyOS Hyprland Noctalia desktop option now uses `noctalia-greeter` instead of SDDM
  * Cinnamon switched from `lightdm-gtk-greeter` to `lightdm-slick-greeter`
  * Added `gvfs-dnssd` to GNOME and cosmic-monitor to COSMIC
* **CLI Installer:** Fixes and refactors, with experimental Server Edition support installation profiles
* **CachyOS-Welcome:** Reworked DNS handling so the speed-test based server ranking now works correctly
* **chwd:**
  * Improved handheld detection with board_name pattern matching
  * Rewrote the `kernel-manager` backend in Rust, and integrated it into `chwd-kernel`
  * Added Bulgarian localization
* **Cachy-Update:**
  * Rebased onto Arch-Update v4.x with the systray applet rewritten in Rust
* **Desktops:** Added `mango` and `niri` Noctalia variants, Noctalia v5 support for the Hyprland dotfiles, and updated the Nord KDE theme for Plasma 6.7
* **cachyos-settings:** Added a nice-value tuning to `limits.d`
* **cachyos-rate-mirrors:** Now uses the CachyOS mirrorlist API for ranking mirrors
* **Mirrors:** New mirror in Hungary (Tier 2)
* **Wiki**: Gaming with CachyOS Guide has been significantly changed, old launch options no longer needed with the latest proton-cachyos-slr have been removed, but can still be found [here](https://github.com/CachyOS/proton-cachyos#proton-cachyos-config-options). And just generally updating the page and the wiki.

**Fixes:**

* **chwd:**
  * Gracefully handle a missing board_name DMI file
  * Correctly handle VM environments
  * Correctly quote pacman arguments

**Manual changes for existing users:** No manual changes needed. Just the usual updating:

```
sudo pacman -Syu
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: <https://iso.cachyos.org/desktop/260809/cachyos-desktop-linux-260809.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/desktop/260809/cachyos-desktop-linux-260809.iso>
* Germany: <https://mirror.cachyos.org/ISO/desktop/260809/cachyos-desktop-linux-260809.iso>
* USA: <https://us.cachyos.org/ISO/desktop/260809/cachyos-desktop-linux-260809.iso>
* China: <https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/260809/cachyos-desktop-linux-260809.iso>
* Russia: <https://archlinux.gay/cachy/ISO/desktop/260809/cachyos-desktop-linux-260809.iso>
* Russia: <https://mirror.yandex.ru/cachyos/ISO/desktop/260809/cachyos-desktop-linux-260809.iso>
* <https://sourceforge.net/projects/cachyos-arch/files>

**Handheld Edition:**

* CDN: <https://iso.cachyos.org/handheld/260809/cachyos-handheld-linux-260809.iso>
* CDN2: <https://cdn77.cachyos.org/ISO/handheld/260809/cachyos-handheld-linux-260809.iso>

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: <https://www.patreon.com/CachyOS>

Thank you for your continued support!

**The CachyOS Team**
