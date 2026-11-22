---
title: CachyOS November 2026 Release
excerpt: Easy Anti-Cheat Support, Recovery Environment, Package Installer Revamp
category: release
tags:
  - release
---

**Hello CachyOS Enthusiasts,**

This is our **sixth release** of the year.

This release brings support for **Easy Anti-Cheat Linux v2**. EAC only lets games start when it can verify how the system was booted: Secure Boot with a kernel signed by a key that Epic trusts, a TPM 2.0, an enabled IOMMU, and a kernel running in lockdown mode that only loads signed modules. For this we provide a dedicated kernel, `linux-cachyos-eac`, together with a systemd-boot signed with the same key. The EAC kernel gets its own boot entry and your normal boot entries are kept, so you only boot into it when you want to play a game that uses EAC. The new `eac-setup` script does the setup for systemd-boot, Limine and rEFInd, with experimental support for GRUB, and `eac-status` verifies the result. DKMS modules do not work with the EAC kernel, so the NVIDIA (open and 580xx), ZFS and r8125 modules are shipped as `linux-cachyos-eac-*` packages instead. Please read the [Easy Anti-Cheat guide](https://wiki.cachyos.org/configuration/easy_anti_cheat/) in our wiki before you start, especially if you use BitLocker or unlock your disk with the TPM.

The **CachyOS Package Installer** has been fully revamped with a new UI for its 2.0.0 release. Besides the CachyOS and Arch repositories, it can now build packages from the AUR and install Flatpak apps and AppImages, each of them opt-in. Before an AUR package gets built, the PKGBUILD and its install scripts are shown for review, and a static analysis marks the lines which should be looked at. When reviewing an update, it shows what changed since the installed version. AppImages can be added from a local file or from a GitHub project, which also offers newer releases as updates, and AppImages which were added with Shelly or Gear Lever can be taken over. The new settings page offers several colour themes and a button to rank the mirrors.

![CachyOS Package Installer: the Discover page in the light and dark theme, and the review page of an AUR package](https://1016613440.rsc.cdn77.org/images/2611-package-installer.webp)

**cachyos-recovery** is our new recovery environment. It is a self-contained image, which can be booted from your bootloader or directly from UEFI, so rolling back a broken system no longer needs a live USB. From its menu you can boot any Btrfs snapshot with a writable root to try it first, and then roll back to it permanently, either from the notification on the desktop or directly from the recovery menu. The rollback also regenerates the kernel and initramfs files and the bootloader configuration for the restored snapshot, and signs them if Secure Boot is set up with sbctl. It works independently of Snapper, supports LUKS encrypted installations and takes about 70 MB on the ESP. It can be installed with `sudo pacman -S cachyos-recovery`, or `cachyos-recovery-legacy` on BIOS systems.

![CachyOS Recovery: the snapshot list in the recovery menu and the rollback notification on a booted snapshot](https://1016613440.rsc.cdn77.org/images/2611-recovery.webp)

**cachyos-drm-awaiter** is a new package, which replaces early KMS and the `nvidia-module-loader`. It waits for the GPU drivers to be loaded before the display manager gets started, for any driver and not only NVIDIA, and shows a QR code if the driver failed to load. **chwd** and the **installer** have been adjusted for it, so the `kms` hook is no longer added to the initramfs by default.

The **installer** now uses the shared CachyOS installer libraries (gucc) from the CLI installer as backend for the initramfs, machine-id and post-install steps. We are slowly transitioning to our new installer backend, and for now Calamares is switched over to it step by step. The root partition is created with the `SD_GPT_ROOT_X86_64` partition type by default, Plymouth is now optional and can be deselected in the package selection, and the rEFInd + AI SDK bootloader option has been removed. It only differed from the regular rEFInd installation by installing the AI SDK, which can still be done afterwards with `sudo chwd -a --ai_sdk`. The **CLI installer** got a large refactor onto the same library, with reworked LUKS and LVM handling for the bootloader.

In **chwd**, intel-lpmd is now only used on hybrid CPUs and got Wildcat Lake support, NVIDIA PRIME profiles match on convertibles, and the Framework Laptop 12 got tablet mode support. Simplified Chinese, Hungarian and Arabic localizations have been added.

**cachyos-settings** brings back the systemd-oomd configuration and enables it by default; it kills based on swap usage and ignores the user session. Dirty ratios are now used and the writeback is capped on slow disks and USB drives, REISUB can be performed by default, and `game-performance` got tlpctl support.

On the package side, this release comes with **Linux 7.3.5**, NVIDIA 620.73.04 and Mesa 26.3.1. The `nvidia-580xx` modules are now prebuilt for our kernels, the kernel can be built with Rust together with ThinLTO, and mutter is shipped with the tearing patches merged.

CachyOS now also provides an image for the **Windows Subsystem for Linux**. See the [CachyOS on WSL](https://wiki.cachyos.org/virtualization/wsl/) wiki page for the installation.

**Features:**

* **Easy Anti-Cheat:**
  * Added `linux-cachyos-eac`, an EAC-compatible kernel variant signed with the CachyOS key, including NVIDIA (`nvidia-open`, `nvidia-580xx`), ZFS and r8125 module packages
  * Added `cachyos-eac-signing-key`, `systemd-boot-cachyos-signed` and `cachyos-eac-grub-hook` packages
  * Added `eac-setup` and `eac-status` scripts to cachyos-settings to set up and verify the Secure Boot chain, with experimental GRUB support
  * `sbctl-batch-sign` now skips files which are already signed by CachyOS
  * Wiki: New Easy Anti-Cheat guide for systemd-boot, Limine, rEFInd and GRUB (experimental), including migration from existing Secure Boot setups
* **Kernel:**
  * Linux 7.3.5, LTS 6.18.64
  * Added support for Rust together with ThinLTO
  * Enabled Rust Binder
  * `nvidia-580xx` modules are now prebuilt for the kernels
  * linux-cachyos-server defaults THP to `madvise`
  * Build the `applesmc` module
* **Packages:**
  * NVIDIA 620.73.04
  * Mesa 26.3.1
  * Limine 12.10.0
  * proton-cachyos 11.0-20261015, proton-cachyos-native is now wow64-only
  * LLVM/Clang is now built from one unified PKGBUILD, added `llvm-bolt` and `clang-libs`
  * mutter is now shipped with the tearing patches merged
  * Added bpftune-gaming, pahole and a custom plymouth package
  * Dropped the Void editor

* **CachyOS Package Installer:** Fully revamped with a new UI
  * Added AUR support (opt-in), including updates for installed AUR packages and a diff since the installed version when reviewing an update
  * PKGBUILDs and install scripts are reviewed in the app, with a static analysis that flags suspicious patterns before anything gets built
  * Added Flatpak support (opt-in)
  * Added AppImage support (opt-in): local files get a menu entry and icon, and AppImages can be installed from a GitHub project URL, including updates to newer releases
  * AppImages which were added with Shelly or Gear Lever can be taken over
  * Added a settings page with colour themes and a button to rank the mirrors with cachyos-rate-mirrors
* **cachyos-recovery:** New self-contained recovery environment, which can be booted from the bootloader or directly from UEFI without needing a live USB
  * Btrfs snapshots can be restored from a TUI, independent of Snapper and mostly bootloader agnostic
  * Snapshots can be booted with a writable root via overlayfs before restoring them
  * Shipped as UKI on UEFI systems (takes about 70 MB on the ESP) and as `cachyos-recovery-legacy` for BIOS systems, installed via a pacman hook
  * Adds a UEFI boot entry, a Limine entry (UEFI and BIOS) and a GRUB entry on BIOS systems
  * The image is signed for Secure Boot if sbctl is set up
  * Supports LUKS encrypted installations
* **cachyos-drm-awaiter:** New package replacing early KMS and `nvidia-module-loader`
  * Waits for the GPU drivers before starting the display manager, for any driver and not only NVIDIA
  * Shows a QR code if the driver failed to load
  * Supports kmscon and can be disabled via kernel parameter
* **Installer:**
  * Calamares now uses the shared CachyOS installer libraries (gucc) from the CLI Installer as backend for the initramfs, machine-id and post-install steps
  * Root partition is now created with the `SD_GPT_ROOT_X86_64` partition type by default
  * systemd-boot now uses the max console-mode by default
  * Plymouth is now optional and can be deselected in the package selection
  * The `kms` hook is no longer added to the initramfs by default, plymouth uses simpledrm to show the splash screen
  * Added `gvfs-mtp` and `gst-plugin-dav1d`
  * Removed the rEFInd + AI SDK bootloader option, the AI SDK can be installed with `chwd -a --ai_sdk`
  * Removed the Iridescent KDE theme from the defaults
* **CLI Installer:**
  * Large refactor onto the shared gucc library with a typed installer state and reworked bootloader handling
  * Username and hostname are validated at config validation
  * Creates a cmdline file by default for systemd-boot
  * Root partition is now created with the `SD_GPT_ROOT_X86_64` partition type by default
  * Reworked LUKS and LVM handling for the bootloader, `rd.luks.uuid=` is used when possible
  * Added LUKS passphrase and console keymap options to the config
  * Hardware clock defaults to UTC
  * Initramfs is now generated only once and the `kms` hook is removed
  * Dropped the `EraseAndAuto` layout
* **ISO:**
  * Synced the GRUB configuration with archiso 92
  * Added `ghostty-terminfo` and `kmscon-terminfo`
  * Dropped linux-atm
* **chwd:**
  * Eliminated early KMS in favor of proper systemd chainload via cachyos-drm-awaiter
  * Added `cpu_hybrid` profile check, intel-lpmd is only used on hybrid CPUs
  * Added Wildcat Lake to the intel-lpmd detection
  * Added tablet mode support for the Framework Laptop 12
  * NVIDIA PRIME profiles now match on convertibles
  * Dropped the nvidia-dkms-470xx profile
  * Added Simplified Chinese, Hungarian and Arabic localization
* **cachyos-settings:**
  * systemd-oomd configuration returned and is enabled by default; it kills based on swap usage and ignores the user session
  * sysctl: Use dirty ratios and cap writeback on slow disks and USB drives
  * sysctl: REISUB can be performed by default
  * game-performance: Added tlpctl support
  * Added xswap configuration handling
  * cachyos-bugreport: Redacts SSID, IPv6, MAC, UUID and `file://` paths
  * Dropped `DefaultTimeoutStartSec`
* **Desktops:**
  * Hyprland Noctalia: Swapped Satty for Swash, added qview to the mimeapps and a keybind for silent workspace moves
  * Mango Noctalia: Added plugins for easier keybind and layout management, reworked keybinds
  * Added the `cachyos-jay-noctalia` settings package for the Jay compositor, available from the repo but not in the installer
* **cachyos-handheld:** steamos-gamemode now uses `steamosctl` to switch to game mode
* **systemd-boot-manager:** Added support for UKI images, `LINUX_OPTIONS` is appended to the cmdline
* **cachyos-hooks:**
  * Rewrote `update-initramfs` with better booster detection
  * reboot-required: Triggers on nvidia-utils and nvidia-open too, notification is now translated
* **Cachy-Update:** Updated to Arch-Update v4.4.7 - systray status follows the system state, hardened temporary and lock file handling, Vietnamese translation
* **cachyos-rate-mirrors:** Synced with upstream rate-mirrors, added `--include-countries`, retries on transient HTTP failures, skips mirrors with an error status and no longer forces top priority mirrors
* **scx-manager:** Added French and Chinese (Simplified and Traditional) translation, dropped scx_cake profiles
* **ananicy-rules:** New rules for several games and applications, added a linter and JSON schema for the rules
* **WSL:** CachyOS now provides an image for the Windows Subsystem for Linux
* **Docker:** Added `cachyos/distrobox` image
* **Mirrors:** New mirrors in South Korea, India, Switzerland (init7) and two in US East
* **Wiki:** Added Simplified Chinese translation, TRIM on LUKS and Vivaldi hardware acceleration

**Fixes:**

* **Installer:**
  * Disabled `GRUB_BOOTNEXT` in the GRUB configuration
  * Removed the duplicated cosmic-greeter entry
  * plymouthcfg now only changes the uncommented section
* **CLI Installer:**
  * Fixed user supplied kernel being ignored
  * Fixed fallback of the root partition filesystem name
  * Properly cleans up on installation abort, failure and success
  * Fixes for removable devices and the systemd encrypt hook parameters
* **ISO:**
  * Fixed the memtest86+ entry paths for systemd-boot and syslinux
  * Removed the leftover broadcom-wl modprobe configuration
  * dmcheck now targets noctalia-greeter instead of greetd
* **chwd:**
  * Removed RTD3 workaround for NVIDIA dGPUs, DynamicPowerManagement is only set for Turing
  * Do not use lspci to check on NVIDIA dGPUs
  * Check on hooks even if no packages were found
  * Updated T2 module names
* **cachyos-settings:**
  * Removed `NVreg_DynamicPowerManagement` from the NVIDIA modprobe configuration
  * udev: Fixed hdparm ATA match and do not use hdparm on USB drives
  * udev: Misc fixes for audio power management
  * iw-set-regdomain: Broadened no-country zones, resolve timezone aliases
  * Blacklisted `wdat_wdt`
  * oomd: Generate the user slice drop-in only if PID 1 is visible
  * eac-status: Requires `intel_iommu=on` only on Intel CPUs, clearer failure messages and more checks
* **Desktops:**
  * Hyprland Noctalia: Fixed workspace keybinds on AZERTY layouts and the Noctalia config for the latest release
  * Fixed the qt6ct path to the Noctalia template in the Mango and Jay variants
* **cachyos-kdump-tools:** Support the deploy filenames of limine-mkinitcpio-hook >= 1.37
* **cachyos-hooks:** reboot-required no longer blocks pacman when no notification daemon starts
* **systemd-boot-manager:** UKI images are only removed after successful generation
* **cachyos-rate-mirrors:** Pull in network-online from the service instead of the timer
* **Packages:**
  * nvidia-utils: Fixed runtime D3 on Linux 7.3, do not force loading nvidia-uvm
  * nvidia-580xx-utils: Fixed plasmashell crash by using egl-wayland2 on KWin
  * mutter: Fixed crashes in the tearing cleanup
  * gcc: Fixed cc-rs symlinks on v4
* **WSL:** Masked systemd units discouraged by Microsoft

**Manual changes for existing users:** Since cachyos-drm-awaiter replaces early KMS and `nvidia-module-loader`, please update your system and then reinstall your driver profiles with chwd:

```
sudo pacman -Syu
sudo chwd -a -f
```

**Download:**

**Desktop Edition:**

Grab your copy of the latest ISO from our mirrors on SourceForge:

* CDN: <https://iso.cachyos.org/desktop/261122/cachyos-desktop-linux-261122.iso>
* Germany: <https://mirror.cachyos.org/ISO/desktop/261122/cachyos-desktop-linux-261122.iso>
* Sweden: <https://mirror.zyner.org/cachyos/ISO/desktop/261122/cachyos-desktop-linux-261122.iso>
* USA: <https://us.cachyos.org/ISO/desktop/261122/cachyos-desktop-linux-261122.iso>
* China: <https://mirrors.tuna.tsinghua.edu.cn/cachyos/desktop/261122/cachyos-desktop-linux-261122.iso>
* Russia: <https://archlinux.gay/cachy/ISO/desktop/261122/cachyos-desktop-linux-261122.iso>
* Russia: <https://mirror.yandex.ru/cachyos/ISO/desktop/261122/cachyos-desktop-linux-261122.iso>
* <https://sourceforge.net/projects/cachyos-arch/files>

**Support Us:**

Your contributions help us maintain our servers. Consider supporting CachyOS through:

* Patreon: <https://www.patreon.com/CachyOS>

Thank you for your continued support!

**The CachyOS Team**
