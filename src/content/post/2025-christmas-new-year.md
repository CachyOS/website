---
title: CachyOS Recap 2025 and Merry Christmas
excerpt: Christmas and new year
category: Information
tags:
  - information
---

What a year it has been! In 2025, we didn't just expand our team and feature set; we saw our community triple in size as we pushed the boundaries of Linux performance together.

## Team

The CachyOS Team expanded in 2025 with the following new members:


1. **Anton Ždanov** ([@azdanov)](https://github.com/azdanov): Maintainer of Website, packages.cachyos.org, wiki, Web Developer and Community Moderator
2. **Maikel Josephs** ([@ly-sec)](https://github.com/ly-sec): Developer of [Noctalia](https://github.com/noctalia-dev/noctalia-shell), Maintainer of cachyos-niri-settings and Community Moderator
3. **Ambrosia**: Community Moderator

## Sponsors and Donations

We’re grateful to our new and existing sponsors for helping us deliver CachyOS worldwide:

* Framework - since December 2025 with a donation of €200 per month as well as one Framework 16!


* CDN77 – World Wide Cache CDN - absolutely awesome quality by them and covering over 65% of our traffic world wide!
* Cloudflare – Cloudflare Pro for [cachyos.org](http://cachyos.org)

Thanks to your support, this is the first year we have successfully covered all our server and maintenance costs. Together, we raised **€13,500**!

## Features and Changes

### **Kernel & System Performance**

* **Optimization:** The default kernel (`linux-cachyos`) is now optimized using **Propeller** in conjunction with **AutoFDO**. This combination results in approximately a **10% throughput improvement** and reduced latency, depending on the workload.
* **LTS Kernel Strategy:** To improve stability and recovery, the installer now automatically installs `linux-cachyos-lts` as a secondary fallback kernel alongside the stable kernel. Additionally, the installation ISO itself now provides the LTS and stable kernel to ensure maximum compatibility and reduce graphics-related boot issues.
* **Systemd Hook:** The `mkinitcpio` "systemd" hook has been enabled for supported configurations, though it is automatically disabled if ZFS or Bcachefs is detected.
* **Process Management:** `systemd-oomd` was removed because it was found to kill processes too early when used alongside other memory management tools like `le9`.
* **ZRAM Changes:** Recompression for incompressible pages in ZRAM was disabled as it offered no real performance benefit.

### **NVIDIA & Graphics**

* **Blackwell Support:** Support for the NVIDIA 50xx series (Blackwell), including the 5070 and 5070 Ti, was added. This required switching the ISO to use the `nvidia-open` module by default.
* **Automatic Driver Detection:** The Live ISO now automatically detects the GPU generation and loads the appropriate module (e.g., `nvidia-open` for newer cards, legacy modules for older ones), removing the need for users to manually select "NVIDIA" boot entries.
* **Legacy Driver Changes:** Support for the legacy 390xx driver was dropped; Fermi GPUs now use **Nouveau NvBoost** instead.

### **Gaming & Proton**

* **Upscaling Tools:** New environment variables were introduced to automatically upgrade upscalers in games:
  * `PROTON_DLSS_UPGRADE=1`: Downloads the latest DLSS DLLs.
  * `PROTON_FSR4_UPGRADE`: Automatically downloads FSR 4 DLLs to replace FSR 3.1 in supported games.
  * `PROTON_XESS_UPGRADE=1`: Upgrades XeSS DLLs.
* **Latency & Sync:** Added support for **AMD Anti-Lag 2** in both Mesa and Proton-CachyOS.
* **Wine Improvements:** Wine and Wine-Staging now default to **NTSync** (improving synchronization performance) and **WoW64** mode (removing the need for 32-bit `lib32` libraries).

### **Desktop & Applications**

* **Bootloader & Snapshots:** Added support for the **Limine** bootloader, which now supports automatic bootable Btrfs snapshots out of the box, similar to the existing GRUB implementation. GRUB also received updates to automatically enable snapshots on Btrfs systems.
* **Wayland Default:** Plasma installations now default to Wayland. If a GPU does not support Wayland (e.g., legacy NVIDIA), the `plasma-x11-session` is installed automatically as a fallback.
* **New Desktop Environment:** Added **Niri WM** as a desktop option in the installer, complete with pre-configured dotfiles for a "ready-to-use" experience.
* **Browser Migration:** **Cachy-Browser** was deprecated due to maintenance costs. It has been replaced by **Firefox** (or `firefox-pure`) with an optional `cachyos-firefox-settings` package to apply CachyOS optimizations.
* **Package Dashboard:** Launched **[packages.cachyos.org](https://packages.cachyos.org)**, a dashboard that provides transparency on package sources (Arch vs. CachyOS) and allows users to download binaries directly.
* **Cosmic Desktop:** Switched from SDDM to `cosmic-greeter` for installations using the COSMIC desktop.
* **Shell Selection:** Users can now choose their preferred shell (Bash, Zsh, or Fish) directly during installation.
* **Stress Testing:** The **OCCT** tool was added to the ISO, enabling users to use the live environment as a dedicated stress-testing station.

### **Handheld Edition**

* **Device Support:** Added official support for the **Lenovo Legion Go**, **Lenovo Legion Go S**, and **Xbox ROG Ally / Ally X**.
* **Gamescope:** Switched to the upstream implementation of Gamescope for a better and more standard experience.
* **Integration:** Replaced `hhd` with **SteamOS-Manager** for better management of GPU clocks, TDP, and BIOS updates on handhelds.

### **Accessibility**

* **Visual Aid:** Added **Orca** and **espeak-ng** to the ISO and installer, allowing users with visual impairments to navigate the installation process via screen reading.

### **Wiki**

* The Wiki received a complete overhaul and has been improved heavily. Additionally there has been a lot of translation added to provide easier accessibility to people, which are not fluent to english.

## Stats

### Social

* Discord: 20,500 members (+355.6%)
* Reddit: 30,000 members (+867.7%)
* Forum: 8,500 members (+466.7%)

*The percentages indicate increases since our last year's recap numbers.*

### Traffic

We served a massive amount of data this year:

* 11.45 PB (11450 TB) of data and 4,7 billion requests from January 1 to December 23, 2025. This does not include user hosted mirrors.
* 1.9 million unique visitors according to Cloudflare
* Over the last 30 days alone, we delivered 1900 TB of data, with 140 million requests and 1.9 million unique visitors.
* ISO downloads reached a peak of 133.000 per month and a total of 847.000!

## Whats next?

In addition to our ongoing PGO and AutoFDO optimizations, we are developing a specialized 'Server' Edition for NAS, workstations, and server environments. We intend to provide a verified image that hosting providers can easily deploy for their customers. This edition will ship with a hardened configuration, pre-tuned settings, and performance-optimized packages for web servers, databases and more!

## **A Heartfelt Thank You**

None of these milestones - from the 11.5 PB of data delivered to the massive improvements in our kernel and handheld support - would have been possible without you. Whether you are a long-time user, a new sponsor, or someone who just downloaded the ISO for the first time this month, you are the engine behind CachyOS.

Thank you for testing, reporting, donating, and pushing the boundaries of Linux performance with us.\nFrom the entire CachyOS Team, we wish you a Merry Christmas, a relaxing holiday season, and a happy, high-performance New Year. We can't wait to show you what we have cooking for 2026!

**— The CachyOS Team**
