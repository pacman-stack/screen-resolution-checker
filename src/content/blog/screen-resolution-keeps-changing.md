---
title: "Screen Resolution Keeps Changing? Here Is Why (And How to Fix It)"
description: "Is your screen resolution keeps changing on its own? Learn the most common causes — from driver issues to faulty cables — and how to fix each one on Windows, Mac, and Linux."
date: "2026-03-09"
author: "My Screen Resolution"
tags:
  - screen resolution
  - display settings
  - troubleshooting
  - Windows
  - Mac
  - Linux
  - GPU drivers
---

# Screen Resolution Keeps Changing? Here Is Why (And How to Fix It)

You sit down at your computer, and everything looks wrong. Icons are too big, text is blurry, and your desktop looks like it belongs on a monitor from 2005. You fix the resolution, and it happens again the next day — or even the next hour.

If your screen resolution keeps changing without your input, you are not imagining things. This is a well-documented problem with a handful of common causes, and every single one of them is fixable.

In this guide, we will walk through exactly why this happens and how to stop it for good — whether you are on Windows, Mac, or Linux.

Before diving in, head over to [MyScreenResolution.com](/) to confirm what resolution your display is currently running at. Knowing your actual versus expected resolution is the first step in diagnosing the problem.

## Why Does My Screen Resolution Keep Changing?

There is no single answer. The resolution can reset itself due to hardware issues, software conflicts, or misconfigured settings. Here are the most common culprits:

1. Outdated or corrupted GPU drivers
2. A loose or faulty display cable
3. Games or apps that change the resolution and fail to restore it
4. Windows Update resetting display settings
5. Multiple monitors confusing the operating system
6. Power management settings interfering with the display
7. A faulty or failing GPU

Let's break each one down with clear steps to diagnose and fix it.

---

## 1. Outdated or Corrupted GPU Drivers

This is the single most common reason your screen resolution keeps changing. Your graphics driver is the software layer between your operating system and your monitor. When it is outdated, corrupted, or incompatible, the OS can fall back to a generic resolution — often 1024x768 or 800x600.

### How to Diagnose It

- The resolution resets after rebooting or waking from sleep.
- You see visual artifacts, flickering, or brief black screens alongside the resolution change.
- Device Manager (Windows) shows a warning icon next to your display adapter.

### How to Fix It

**Windows:**

1. Right-click the Start button and open **Device Manager**.
2. Expand **Display adapters**.
3. Right-click your GPU and select **Update driver** > **Search automatically for drivers**.
4. If that does not help, go to the manufacturer's website (NVIDIA, AMD, or Intel) and download the latest driver manually.
5. For a clean slate, use **DDU (Display Driver Uninstaller)** in Safe Mode to fully remove the old driver before installing the new one.

**Mac:**

1. Open **System Settings** > **General** > **Software Update**.
2. macOS bundles GPU drivers with system updates, so installing the latest macOS version is the fix.
3. If you are on an older Mac with a discrete GPU, check if a firmware update is available from Apple Support.

**Linux:**

1. Open a terminal and check your current driver: `lspci -k | grep -A 2 VGA`.
2. For NVIDIA cards, install the proprietary driver through your distribution's driver manager or via `sudo apt install nvidia-driver-XXX` (replace XXX with the recommended version).
3. For AMD or Intel, ensure the `mesa` driver package is up to date: `sudo apt update && sudo apt upgrade mesa-vulkan-drivers`.

---

## 2. Loose or Faulty Display Cable

A cable that is not fully seated — or one that is damaged — can cause intermittent signal drops. When the connection is momentarily lost, the OS may re-detect the monitor and assign a default resolution.

### How to Diagnose It

- The resolution changes randomly, not tied to reboots or specific actions.
- The screen occasionally flickers, goes black for a second, or displays a "No Signal" message before recovering.
- Wiggling the cable at either end reproduces the issue.

### How to Fix It

1. **Power off the monitor and computer.**
2. Unplug the display cable from both ends. Inspect it for bent pins, frayed wiring, or damaged connectors.
3. Plug it back in firmly. If using HDMI, make sure it clicks into place. If using DisplayPort, ensure the latch engages.
4. **Try a different cable entirely.** Cables degrade over time, and a $10 replacement often solves hours of frustration.
5. **Try a different port on your GPU** if one is available. A damaged port on the graphics card can cause the same symptoms.
6. Avoid adapters when possible (e.g., DVI-to-HDMI or DisplayPort-to-VGA). Each adapter is another potential point of failure.

---

## 3. Games or Apps Changing Resolution and Not Restoring It

Many games and some older applications run at a resolution different from your desktop. They are supposed to switch back when you exit, but crashes, force-quits, or buggy implementations can leave your desktop stuck at the wrong resolution.

### How to Diagnose It

- The resolution changes immediately after closing a game or full-screen application.
- Alt-tabbing out of a game leaves the desktop at the game's resolution.
- The issue only started after installing a specific game or application.

### How to Fix It

**Windows:**

1. Open **Settings** > **System** > **Display** and manually set the resolution back to your native value.
2. In the problematic game, go to its video settings and switch from **Fullscreen** to **Borderless Windowed** mode. This prevents the game from taking over the display resolution entirely.
3. If a game consistently fails to restore the resolution after crashing, add it to your GPU control panel (NVIDIA Control Panel or AMD Radeon Software) and force the resolution from there.

**Mac:**

1. Open **System Settings** > **Displays** and select your native resolution.
2. Most Mac games through Steam respect the system resolution, but if one does not, set it to windowed mode in the game's own settings.

**Linux:**

1. Run `xrandr` in a terminal to see available resolutions and set the correct one:
   `xrandr --output <display_name> --mode <resolution>`.
2. To make it permanent, add the `xrandr` command to your startup scripts or desktop environment's autostart configuration.
3. For Steam games on Linux, right-click the game > **Properties** > **Launch Options** and add `gamemoderun %command%` if using Feral GameMode, which handles resolution restoration more reliably.

---

## 4. Windows Update Resetting Display Settings

Windows Update occasionally resets display settings — especially when it installs a new GPU driver as part of an update. This is one of the more frustrating causes because it can happen without warning.

### How to Diagnose It

- The resolution changed right after a Windows Update.
- Checking **Settings** > **Windows Update** > **Update history** shows a recent driver or feature update.

### How to Fix It

1. After every major Windows Update, check **Settings** > **System** > **Display** and confirm your resolution.
2. To prevent Windows from overwriting your GPU driver, you can block driver updates through Windows Update:
   - Open **Group Policy Editor** (`gpedit.msc`) > **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Windows Update** > enable **Do not include drivers with Windows Updates**.
   - Alternatively, use Microsoft's **"Show or hide updates" troubleshooter** tool to block specific driver updates.
3. Keep your GPU driver updated manually through the manufacturer's software (GeForce Experience, AMD Adrenalin, or Intel Arc Control). A current driver is less likely to be overwritten by Windows Update.

---

## 5. Multiple Monitors Confusing the OS

Running two or more monitors — especially with different native resolutions or refresh rates — can cause the OS to misidentify which monitor is primary, duplicate instead of extend, or assign the wrong resolution to the wrong display.

### How to Diagnose It

- The resolution issue started when you connected a second (or third) monitor.
- Disconnecting the extra monitor immediately fixes the resolution on the primary display.
- The OS keeps swapping which monitor is "Display 1" and "Display 2."

### How to Fix It

**Windows:**

1. Open **Settings** > **System** > **Display**.
2. Click **Identify** to see which physical monitor corresponds to which number.
3. Select each monitor individually and set its resolution to its native value.
4. Scroll down and ensure **Multiple displays** is set to **Extend these displays**, not **Duplicate**.
5. Right-click the desktop > **Display settings** > check **Make this my main display** on the correct monitor.

**Mac:**

1. Open **System Settings** > **Displays**.
2. Click **Arrange** and drag the displays to match their physical arrangement.
3. To set the primary display, drag the white menu bar to the monitor you want as primary.
4. Set each display's resolution individually by selecting it in the Displays panel.

**Linux:**

1. Use `xrandr` to list connected outputs: `xrandr --listmonitors`.
2. Set each monitor individually:
   `xrandr --output HDMI-1 --mode 1920x1080 --primary`
   `xrandr --output DP-1 --mode 2560x1440 --right-of HDMI-1`.
3. Save the configuration by adding these commands to `~/.xprofile` or your desktop environment's display settings.

---

## 6. Power Management Settings Interfering With the Display

Aggressive power-saving settings can cause the GPU or monitor to enter low-power states. When they wake back up, the OS sometimes re-negotiates the display connection and picks a wrong resolution.

### How to Diagnose It

- The resolution changes after the computer wakes from sleep or after the screen turns back on from a screensaver.
- The issue does not occur if you disable sleep and screen timeout entirely (as a test).

### How to Fix It

**Windows:**

1. Open **Control Panel** > **Power Options** > **Change plan settings** > **Change advanced power settings**.
2. Expand **PCI Express** > **Link State Power Management** and set it to **Off**.
3. Expand **Display** and set **Turn off display after** to a reasonable value, but check if the issue persists with it set to **Never** (as a diagnostic step).
4. In your GPU control panel, disable any GPU-specific power saving features (e.g., NVIDIA's "Power management mode" should be set to "Prefer maximum performance" if this issue recurs frequently).

**Mac:**

1. Open **System Settings** > **Displays** > **Advanced** and disable **Automatically adjust brightness** if it is interfering.
2. Go to **System Settings** > **Energy** (or **Battery** on laptops) and disable **Automatic graphics switching** on older MacBook Pro models with dual GPUs. Switching between integrated and discrete graphics can trigger resolution resets.

**Linux:**

1. Disable DPMS (Display Power Management Signaling) as a test: `xset -dpms`.
2. If that fixes it, the issue is in how your system resumes from display sleep. You can make this persistent by adding `xset -dpms` to your startup scripts, though a better long-term fix is to update your GPU driver.
3. For laptops, check your TLP or power-management daemon configuration and ensure GPU runtime power management is not being overly aggressive.

---

## 7. Faulty or Failing GPU

If none of the above fixes work, the GPU itself may be the problem. A graphics card that is overheating, has failing VRAM, or is physically damaged can behave erratically — including resetting the resolution.

### How to Diagnose It

- You see visual artifacts (strange colors, lines, or blocks) alongside the resolution changes.
- The issue persists across fresh driver installations.
- Stress-testing the GPU with a tool like FurMark or Unigine Heaven causes crashes or visual corruption.
- The problem occurs in the BIOS/UEFI screen as well (before the OS even loads), which rules out software causes entirely.

### How to Fix It

1. **Check GPU temperatures** using HWMonitor (Windows), iStat Menus (Mac), or `sensors` (Linux). If your GPU is hitting 90C+ under load, overheating may be degrading performance and causing instability.
2. **Clean the GPU fans and heatsink.** Dust buildup is the most common cause of GPU overheating. Use compressed air to clear it out.
3. **Reseat the GPU.** Power off, unplug, open your case, remove the graphics card, and reinstall it firmly in the PCIe slot. Also re-connect any power cables to the card.
4. **Test with a different GPU** or use the integrated graphics (if your CPU has them) to isolate whether the card is the problem.
5. If the GPU is indeed failing, replacement is the only permanent fix. Check if it is still under warranty before purchasing a new one.

---

## How to Prevent Your Screen Resolution From Changing Again

Once you have fixed the immediate issue, take a few steps to keep it from coming back:

- **Keep GPU drivers updated.** Set a monthly reminder or enable auto-updates through your GPU manufacturer's software.
- **Use quality cables.** Cheap or worn-out cables are a leading cause of display issues. Invest in a certified HDMI 2.1 or DisplayPort 1.4 cable.
- **Run games in borderless windowed mode** to avoid resolution switching entirely.
- **Monitor your GPU temperatures** periodically to catch overheating before it causes problems.
- **After every major OS update**, verify your display settings have not been reset.
- **Bookmark [MyScreenResolution.com](/)** so you can quickly verify your current resolution any time something looks off.

If you are not sure what resolution your monitor should be running at, check the manufacturer's specs or visit [MyScreenResolution.com](/) — it will show you exactly what your browser is rendering at, which makes it easy to spot discrepancies.

---

## Related Articles

- [How to Check Your Screen Resolution](/blog/how-to-check-screen-resolution) — a quick guide to finding your current display resolution on any device.
- [Why Is My Screen Resolution Wrong?](/blog/why-is-my-screen-resolution-wrong) — covers scenarios where the resolution is incorrect but not necessarily changing on its own.

---

## Conclusion

A screen resolution that keeps changing is almost always caused by one of seven things: bad GPU drivers, a loose cable, a misbehaving game, a Windows Update, multi-monitor confusion, power management settings, or a failing graphics card. The fix is usually straightforward once you identify the root cause.

Start with the basics — update your drivers and check your cables. If those do not solve it, work through the remaining causes one by one. And whenever you need to quickly confirm what resolution your display is actually running at, [MyScreenResolution.com](/) is the fastest way to check.
