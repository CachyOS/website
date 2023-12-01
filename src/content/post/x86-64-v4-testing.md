---
title: CachyOS x86-64-v4 Repository testing
excerpt: x86-64-v4 available for testing now
category: repository
tags:
  - repository
---

## CachyOS x86-64-v4 Testing Now Available

The CachyOS x86-64-v4 repository is now available for testing. This new repository provides support for the latest generation of Intel and AMD CPUs, including the "Zen 4" series.

### Testing and Installation

We encourage all users with x86-64-v4 CPUs to test the new repository and provide feedback on its stability and performance. To get started, follow these steps:

1. **Check for compatibility and install the mirrorlist:** Use the following command to check if your CPU is compatible with x86-64-v4:

```bash
/lib/ld-linux-x86-64.so.2 --help | grep supported
```

If your CPU is compatible, you should see the following output:

```
x86-64-v4 (supported, searched)
x86-64-v3 (supported, searched)
x86-64-v2 (supported, searched)
```

Install the CachyOS v4 mirrorlist:
```bash
sudo pacman -S cachyos-v4-mirrorlist
```

2. **Add the repository:** Add the following lines to your `/etc/pacman.conf` file:

```
[cachyos-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-core-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-extra-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

3. **Update pacman :** Update your package manager with the following command:

```bash
sudo pacman -Sy
```

4. **Reinstall packages:** Reinstall all packages on your system with the following commands:

```bash
yes | sudo pacman -Scc
sudo pacman -Syu
sudo pacman -Qqn | sudo pacman -S -
```

### Feedback

Please provide feedback on the stability and performance of the new repository by reporting any issues you encounter to the CachyOS Forum.

We appreciate your help in testing the new repository and making CachyOS even better!
