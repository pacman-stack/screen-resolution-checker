---
title: "How to Change Screen Resolution in Windows 11"
description: "Learn how to change your screen resolution in Windows 11 using Display Settings, Intel, NVIDIA, and AMD control panels, the command line, and the registry."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "Windows 11", "how-to", "display settings", "NVIDIA", "AMD"]
---

## Check Your Current Resolution First

Before changing anything, it helps to know what resolution you are currently running. The fastest way is to visit [MyScreenResolution.com](/) — it shows your resolution, viewport size, and device pixel ratio instantly.

You can also check directly in Windows 11:

1. Right-click the desktop and select **Display settings**
2. Your current resolution is shown under **Display resolution**

The option labeled **(Recommended)** is your monitor's native resolution — the one your display was designed for and the one that looks the sharpest.

## Method 1: Change Resolution in Display Settings

This is the standard method and works for everyone.

1. **Right-click** anywhere on your desktop
2. Select **Display settings**
3. Scroll down to the **Display resolution** dropdown
4. Click the dropdown and select your desired resolution
5. Windows will preview the change and ask you to confirm
6. Click **Keep changes** within 15 seconds, or the resolution will revert automatically

If you have multiple monitors, click on the display you want to change at the top of the page before adjusting the resolution. Each monitor can run at a different resolution.

### What if the resolution you want is not listed?

If your desired resolution does not appear in the dropdown:

- Your graphics driver may be outdated — update it (see Method 4 below for GPU-specific tools)
- Your cable may not support the resolution (use HDMI 2.0+ or DisplayPort for anything above 1080p at 60Hz)
- Your monitor's driver may be missing — check Device Manager under **Monitors** and update the driver

## Method 2: Change Resolution Using the NVIDIA Control Panel

If you have an NVIDIA GPU, the NVIDIA Control Panel gives you more resolution options than Windows Settings, including custom resolutions.

1. Right-click the desktop and select **NVIDIA Control Panel** (or search for it in the Start menu)
2. In the left panel, click **Change resolution** under **Display**
3. Select your monitor at the top if you have multiple displays
4. Choose a resolution from the list
5. Click **Apply**
6. Confirm the change within 20 seconds

### Creating a Custom Resolution

If you need a resolution that is not listed:

1. In the NVIDIA Control Panel, go to **Change resolution**
2. Click **Customize**
3. Check **Enable resolutions not exposed by the display**
4. Click **Create Custom Resolution**
5. Enter the horizontal pixels, vertical pixels, and refresh rate
6. Click **Test** to verify it works with your monitor
7. If the test passes, click **OK** to save it

Use custom resolutions carefully — setting values your monitor cannot handle may result in a blank screen. The display will revert after 20 seconds if you do not confirm.

## Method 3: Change Resolution Using AMD Radeon Software

For AMD GPUs, the Radeon Software provides resolution controls and custom resolution support.

1. Right-click the desktop and select **AMD Radeon Software** (or search for it)
2. Click the **Settings gear icon** in the top-right
3. Click the **Display** tab
4. Your current resolution is shown — click on it to see available options
5. Select the resolution you want

### Creating a Custom Resolution on AMD

1. In Radeon Software, go to **Settings > Display**
2. Click **Custom Resolutions** (you may need to scroll down)
3. Click **Create New**
4. Enter your desired resolution and refresh rate
5. Click **Save**
6. The custom resolution will now appear in Windows Display Settings

## Method 4: Change Resolution Using Intel Graphics Command Center

For PCs with Intel integrated graphics (common in laptops and office desktops):

1. Search for **Intel Graphics Command Center** in the Start menu
2. Click **Display** in the left sidebar
3. Under **Resolution**, select your desired option from the dropdown
4. Click **Keep** to confirm

If you have an older Intel system, you may have the **Intel HD Graphics Control Panel** instead — the process is similar under **Display > Resolution**.

## Method 5: Change Resolution From the Command Line

You can change the resolution using PowerShell, which is useful for scripting or quick changes without opening settings.

### Check current resolution

Open PowerShell and run:

```
Get-CimInstance -ClassName Win32_VideoController | Select-Object CurrentHorizontalResolution, CurrentVerticalResolution
```

### Change resolution using a display utility

Windows does not have a built-in command to change resolution directly. However, you can use the free **QRes** utility:

1. Download QRes from a trusted source
2. Open Command Prompt or PowerShell
3. Run:

```
QRes.exe /x 2560 /y 1440
```

Replace the values with your desired resolution.

Alternatively, you can open Display Settings directly from the command line:

```
start ms-settings:display
```

## Method 6: Change Resolution Through the Registry

This method is advanced and generally not recommended unless other methods fail. Editing the registry incorrectly can cause system issues.

1. Press **Win + R**, type `regedit`, and press Enter
2. Navigate to:

```
HKEY_CURRENT_CONFIG\System\CurrentControlSet\Control\VIDEO
```

3. Find the subkey for your display adapter (there may be several — look for the one with resolution values)
4. Modify **DefaultSettings.XResolution** and **DefaultSettings.YResolution** to your desired values
5. Restart your computer

Always create a registry backup before making changes: **File > Export** in the Registry Editor.

## Adjusting Display Scaling After Changing Resolution

After setting a higher resolution, you may find that text, icons, and apps appear too small. This is normal — do not lower the resolution to fix it. Instead, adjust the scaling:

1. Go to **Display settings**
2. Under **Scale & layout**, click the **Scale** dropdown
3. Choose a percentage:
   - **1080p:** 100% works for most people
   - **1440p:** 100% or 125% depending on screen size and preference
   - **4K:** 150% is common on 27-inch monitors, 200% on smaller screens

Windows 11 also supports custom scaling. Click on **Scale** and type any value between 100% and 500%. However, stick to the preset values when possible — custom scaling can cause blurry text in some older apps.

## Fixing Common Issues

### Resolution resets after restart

This usually means the graphics driver is not saving the setting. Update your GPU driver to the latest version. If you are using a custom resolution, re-create it after updating.

### Screen goes black after changing resolution

Wait 15–20 seconds. Windows will automatically revert to the previous resolution if you do not confirm the change. If the screen stays black, restart your PC — it will boot at the previous working resolution.

### Resolution looks blurry

You are likely running a non-native resolution. Set the resolution to the **(Recommended)** option in Display Settings. If everything is too small at native resolution, use scaling instead of lowering the resolution.

### External monitor stuck at low resolution

1. Check your cable — make sure it supports the resolution you want
2. Update both GPU and monitor drivers
3. In Display Settings, make sure **Multiple displays** is set to **Extend these displays** (not Duplicate)
4. Try a different port on your GPU

## Conclusion

Changing screen resolution in Windows 11 takes just a few clicks through Display Settings. For more control, your GPU manufacturer's software (NVIDIA, AMD, or Intel) offers additional options including custom resolutions. Always aim to run your monitor at its native (Recommended) resolution for the sharpest image, and use scaling if things look too small. To quickly verify your current resolution at any time, visit [MyScreenResolution.com](/).
