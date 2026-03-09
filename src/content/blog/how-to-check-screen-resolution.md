---
title: "How to Check Your Screen Resolution on Any Device"
description: "Step-by-step instructions for finding your screen resolution on Windows, Mac, Linux, iPhone, iPad, Android, and Chromebook."
date: "2026-03-07"
author: "My Screen Resolution"
tags: ["how-to", "screen resolution", "Windows", "Mac", "Android"]
---

## The Fastest Way: Use an Online Tool

The quickest method to check your screen resolution on any device is to visit an online checker like [MyScreenResolution.com](/). It instantly displays your:

- **Screen resolution** (e.g., 1920 × 1080)
- **Viewport size** (the browser's content area)
- **Device pixel ratio (DPR)**
- **Color depth**

No downloads, no settings menus — just open the page and your resolution is displayed immediately. But if you want to check through your operating system's settings, here's how to do it on every major platform.

## Windows 10 & 11

### Method 1: Display Settings

1. **Right-click** on your desktop and select **Display settings**
2. Scroll down to the **Display resolution** dropdown
3. Your current resolution is shown (e.g., 1920 × 1080)

### Method 2: System Information

1. Press **Win + R** to open the Run dialog
2. Type `dxdiag` and press Enter
3. Click the **Display** tab
4. Your resolution is listed under **Current Display Mode**

### Method 3: Command Line

Open Command Prompt or PowerShell and run:

```
wmic path Win32_VideoController get CurrentHorizontalResolution,CurrentVerticalResolution
```

## macOS

### Method 1: System Settings

1. Click the **Apple menu** and select **System Settings**
2. Click **Displays**
3. Your resolution is shown, or you can hold **Option** and click **Scaled** to see all available resolutions

### Method 2: About This Mac

1. Click the **Apple menu** and select **About This Mac**
2. Your display resolution is listed in the overview, or click **More Info** and then **Displays**

### Method 3: Terminal

Open Terminal and run:

```
system_profiler SPDisplaysDataType | grep Resolution
```

This will output something like: `Resolution: 3024 x 1964 Retina`

## Linux

### GNOME (Ubuntu, Fedora)

1. Open **Settings**
2. Navigate to **Displays**
3. Your current resolution is displayed in the **Resolution** dropdown

### Command Line (Any Distro)

Open a terminal and run:

```
xrandr | grep '*'
```

Or for Wayland:

```
wlr-randr
```

## iPhone & iPad

Apple doesn't expose screen resolution in the Settings app, but you can:

1. Visit [MyScreenResolution.com](/) in Safari to see your viewport and DPR
2. Look up your device model — each iPhone and iPad has a fixed resolution:
   - **iPhone 15 Pro:** 2556 × 1179 (3× DPR)
   - **iPhone 15:** 2556 × 1179 (3× DPR)
   - **iPad Pro 12.9":** 2732 × 2048 (2× DPR)
   - **iPad Air:** 2360 × 1640 (2× DPR)

## Android

### Method 1: Settings

1. Open **Settings**
2. Go to **Display** (or **Screen**)
3. Look for **Screen resolution** or **Display resolution**
4. Some manufacturers (like Samsung) let you switch between HD+, FHD+, and WQHD+

### Method 2: Developer Options

1. Go to **Settings > About Phone** and tap **Build number** 7 times to enable Developer Options
2. Go back to **Settings > Developer Options**
3. Look for **Smallest width** — this gives you the display density in dp

### Method 3: Online

Visit [MyScreenResolution.com](/) in Chrome to see your exact resolution and DPR.

## Chromebook

1. Click the **clock** in the bottom-right corner
2. Click the **Settings gear icon**
3. Select **Device > Displays**
4. Your resolution is shown with options to change it

Or open the Chrome browser and visit our [screen resolution checker](/) for instant results.

## Understanding Your Results

Once you've found your resolution, here's what the numbers mean:

- **Higher resolution** = more pixels = sharper image, but requires more GPU power
- **DPR above 1** = your device uses multiple physical pixels per CSS pixel (common on modern phones, tablets, and Retina displays)
- **Viewport smaller than resolution** = normal. The viewport is the browser's content area, excluding UI chrome

## Which Resolution Should You Use?

For most people, the default (native) resolution of your display is the best choice. It's the resolution your screen was designed for and will look the sharpest. Lowering the resolution can make everything appear blurry because pixels won't map 1:1 to physical pixels.

If text or icons appear too small at your native resolution, use your OS's **display scaling** (e.g., 125% or 150% on Windows, or "Looks like" options on macOS) instead of reducing the resolution. Scaling keeps text sharp while making it larger.

## Conclusion

Checking your screen resolution takes seconds with an online tool, or just a few clicks through your operating system's settings. Knowing your resolution helps you troubleshoot display issues, choose the right wallpaper, configure games for optimal performance, and ensure you're getting the most out of your display hardware.
