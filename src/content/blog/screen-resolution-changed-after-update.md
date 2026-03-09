---
title: "How to Fix Screen Resolution After Windows Update"
description: "Screen resolution changed after update? Learn why Windows Update alters your display settings and follow six proven fixes to restore your native resolution fast."
date: "2026-03-09"
author: "My Screen Resolution"
tags:
  - screen resolution
  - Windows Update
  - display settings
  - GPU driver
  - troubleshooting
---

# How to Fix Screen Resolution After Windows Update

You restart your PC after a routine Windows Update, and something looks off. Icons are huge, text is blurry, and everything feels zoomed in. Your screen resolution changed after update, and now your desktop looks nothing like it did ten minutes ago.

This is one of the most common display issues on Windows, and it is almost always fixable. In this guide, we will walk through exactly why it happens and six concrete fixes to get your resolution back to normal.

## Why Does Windows Update Change Your Screen Resolution?

Windows Update does not randomly scramble your settings for fun. There are a few specific reasons your resolution shifts after an update:

| Cause | What Happens |
|---|---|
| **Generic driver replacement** | Windows replaces your GPU manufacturer's driver (NVIDIA, AMD, Intel) with a generic Microsoft Basic Display Adapter driver. The generic driver does not support your monitor's native resolution. |
| **Display settings reset** | Some major feature updates (like going from Windows 10 to 11, or large cumulative updates) reset personalization and display preferences, including resolution and scaling. |
| **New display driver installed** | Windows Update sometimes pushes a newer GPU driver automatically. If that driver has compatibility issues with your hardware, it may default to a lower resolution. |
| **Monitor EDID not read correctly** | After a driver swap, Windows may fail to read your monitor's EDID data properly, so it does not know what resolutions your display supports. |

The bottom line: it almost always comes down to a driver change. Fix the driver, fix the resolution.

## How to Check if Your Resolution Changed After an Update

Before diving into fixes, confirm what resolution you are actually running. There are two quick ways:

1. **Use an online tool.** Head to [MyScreenResolution.com](/) and it will instantly display your current screen resolution, pixel ratio, and viewport size. This is the fastest way to see exactly what your browser is rendering at right now.

2. **Check Windows Display Settings.** Right-click your desktop, select **Display settings**, and look at the **Display resolution** dropdown. If it does not say "(Recommended)" next to the selected value, your resolution is wrong.

If you are not sure what your monitor's native resolution should be, check the label on the back of the monitor or look up the model number online. Most modern monitors are 1920x1080 (Full HD), 2560x1440 (QHD), or 3840x2160 (4K).

For a deeper walkthrough, see our guide on [how to check your screen resolution](/blog/how-to-check-screen-resolution).

## Fix 1: Set Your Resolution Back to Native in Display Settings

This is the simplest fix and works when Windows just reset the setting without touching the driver.

1. Right-click on your desktop and select **Display settings**.
2. Scroll down to **Display resolution**.
3. Click the dropdown and select the resolution marked **(Recommended)**.
4. Click **Keep changes** when prompted.

If the recommended resolution is not listed, or the highest available option is lower than your monitor's native resolution, the problem is driver-related. Move on to Fix 2.

### What if the Recommended Option Is Missing?

This means Windows does not have a proper driver for your GPU. The generic Microsoft Basic Display Adapter only supports a handful of low resolutions. You need to install or reinstall the correct graphics driver.

## Fix 2: Reinstall Your GPU Driver (NVIDIA, AMD, or Intel)

Downloading the correct driver from the manufacturer almost always solves the problem. Here is how to do it for each major GPU brand.

### NVIDIA

1. Go to [nvidia.com/drivers](https://www.nvidia.com/Download/index.aspx).
2. Select your GPU model, operating system, and download type (Game Ready or Studio).
3. Download and run the installer.
4. Choose **Custom installation** and check **Perform a clean install**.
5. Restart your PC.

### AMD

1. Go to [amd.com/support](https://www.amd.com/en/support).
2. Select your GPU series and model.
3. Download AMD Software: Adrenalin Edition.
4. During installation, select **Factory Reset** to do a clean install.
5. Restart your PC.

### Intel (Integrated Graphics)

1. Go to [intel.com/support](https://www.intel.com/content/www/us/en/support/detect.html).
2. Run the Intel Driver & Support Assistant. It will detect your hardware and offer the correct driver.
3. Install the driver and restart.

After the restart, go back to **Display settings** and verify that your native resolution is now available and selected. You can also double-check on [MyScreenResolution.com](/) to confirm the change took effect in your browser.

## Fix 3: Roll Back the Graphics Driver

If your resolution was fine before the update, you can tell Windows to revert to the previous driver version.

1. Press **Win + X** and select **Device Manager**.
2. Expand **Display adapters**.
3. Right-click your GPU and select **Properties**.
4. Go to the **Driver** tab.
5. Click **Roll Back Driver**.
6. Select a reason and click **Yes**.
7. Restart your PC.

> **Note:** The Roll Back Driver button is greyed out if Windows does not have a previous driver stored. In that case, use Fix 2 to manually install the correct driver.

## Fix 4: Check for Additional Windows Updates

Sometimes the initial update installs a broken or generic driver, and a follow-up update contains the fix. This is especially common right after major Windows releases.

1. Open **Settings** > **Windows Update**.
2. Click **Check for updates**.
3. Also click **Advanced options** > **Optional updates**. Look under **Driver updates** for any GPU-related entries.
4. Install any available driver updates and restart.

Microsoft frequently ships corrected drivers through Optional Updates within days of a problematic release. Do not skip this step.

## Fix 5: Uninstall the Problematic Update

If you can identify exactly which update broke your resolution, you can remove it.

1. Open **Settings** > **Windows Update** > **Update history**.
2. Scroll down and click **Uninstall updates**.
3. Find the most recent update (sort by date). It is usually a cumulative update starting with "KB" followed by a number.
4. Click **Uninstall** next to it.
5. Restart your PC.

### How to Identify the Guilty Update

- Check the date. If your resolution broke on March 5 and a cumulative update was installed on March 5, that is your culprit.
- Look at **Update history** for any entries labeled as driver updates.
- Search the KB number online to see if other users are reporting display issues with that specific update.

After uninstalling, your resolution should return to normal. You can then pause updates temporarily (see Fix 6) while waiting for Microsoft to release a corrected version.

## Fix 6: Prevent Windows from Overwriting Your GPU Driver

This is the long-term fix. If Windows keeps replacing your working GPU driver with a broken one, you can block it.

### Option A: Use the Windows Update Show/Hide Tool (wushowhide)

Microsoft provides an official tool to hide specific updates so they will not install automatically.

1. Download the **wushowhide.diagcab** tool from Microsoft's support site (search "wushowhide download" to find the official link).
2. Run the tool and select **Hide updates**.
3. Check the box next to the problematic driver update.
4. Click **Next** to hide it.

The update will no longer install automatically. You can unhide it later if a fixed version is released.

### Option B: Block Driver Updates via Group Policy (Windows Pro/Enterprise)

1. Press **Win + R**, type `gpedit.msc`, and press Enter.
2. Navigate to: **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Windows Update** > **Manage updates offered from Windows Update**.
3. Double-click **Do not include drivers with Windows Updates**.
4. Set it to **Enabled** and click **OK**.

This prevents Windows Update from touching your GPU drivers entirely. You will need to manage driver updates manually going forward.

### Option C: Block via Registry (Windows Home)

Windows Home does not include the Group Policy Editor, but you can achieve the same result through the registry.

1. Press **Win + R**, type `regedit`, and press Enter.
2. Navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`.
3. If the `WindowsUpdate` key does not exist, create it.
4. Create a new **DWORD (32-bit) Value** named `ExcludeWUDriversInQualityUpdate`.
5. Set its value to **1**.
6. Restart your PC.

## Prevention Checklist

Use this checklist to minimize the chance of resolution problems after future updates:

- [ ] **Create a restore point** before installing major Windows updates (type "Create a restore point" in the Start menu).
- [ ] **Back up your current GPU driver version** by noting the driver version number in Device Manager > Display adapters > Properties > Driver tab.
- [ ] **Pause updates** temporarily if you are in the middle of important work (Settings > Windows Update > Pause updates).
- [ ] **Use the wushowhide tool** to block known-problematic driver updates.
- [ ] **Keep your GPU driver updated manually** from the manufacturer's website rather than relying on Windows Update.
- [ ] **Check your resolution after every update** using [MyScreenResolution.com](/) or Display Settings.
- [ ] **Read update release notes** before installing. Microsoft publishes known issues for each cumulative update.

## Conclusion

A screen resolution changed after update scenario is frustrating, but it is almost always a driver issue with a straightforward fix. Start with the simple approach: reset your resolution in Display Settings. If the correct option is missing, reinstall your GPU driver from the manufacturer. For persistent problems, roll back the driver or block Windows from overwriting it.

If your display still looks wrong after trying these fixes, the issue may be something else entirely. Check out our guide on [why is my screen resolution wrong](/blog/why-is-my-screen-resolution-wrong) for additional troubleshooting steps that cover scaling, refresh rate, and cable-related problems.
