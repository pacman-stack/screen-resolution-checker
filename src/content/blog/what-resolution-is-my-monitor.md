---
title: "What Resolution Is My Monitor? 3 Ways to Find Out"
description: "Not sure what resolution your monitor is? Here are 3 fast ways to find your monitor's current resolution and its native resolution on any operating system."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["monitor resolution", "how-to", "Windows", "Mac", "Linux", "display"]
---

## Why You Need to Know Your Monitor's Resolution

Knowing your monitor's resolution helps you:

- **Confirm you are running at native resolution** for the sharpest image
- **Pick the right wallpaper size** so it does not stretch or crop
- **Configure games** at the correct resolution for the best performance and visuals
- **Troubleshoot display issues** like blurriness, black bars, or stretched images
- **Compare specs** when shopping for a new monitor

There are two numbers worth knowing: the resolution your monitor is **currently running** and the **native resolution** it was designed for. Ideally, they should be the same.

## Way 1: Use an Online Tool (Any Device, 10 Seconds)

The fastest method. Open [MyScreenResolution.com](/) in any browser on any device. The page instantly displays:

- **Screen resolution** — the resolution your display is currently using
- **Viewport size** — the area inside the browser where content is rendered
- **Device pixel ratio (DPR)** — how many physical pixels make up one logical pixel
- **Color depth** — the number of bits used per pixel for color

No installation, no settings menus. Just open the page and the information is right there.

This method shows you the **current resolution** your system is outputting to the monitor. If you want to verify whether it matches the monitor's native resolution, check the label on your monitor or use one of the methods below.

## Way 2: Check Through Your Operating System

Every major OS lets you see and change your display resolution in system settings.

### Windows 10 & 11

1. Right-click anywhere on the desktop
2. Select **Display settings**
3. Scroll to **Display resolution**
4. Your current resolution is shown in the dropdown
5. The option marked **(Recommended)** is your monitor's native resolution

For more detail, you can also use **DirectX Diagnostic Tool**:

1. Press **Win + R**, type `dxdiag`, and press Enter
2. Click the **Display** tab (or **Display 1**, **Display 2** for multiple monitors)
3. Look at **Current Display Mode** — it shows the resolution and refresh rate

### macOS

1. Click the **Apple menu > System Settings**
2. Click **Displays**
3. Your current resolution is shown
4. Hold **Option** and click **Scaled** to see every resolution your display supports

You can also use Terminal:

```
system_profiler SPDisplaysDataType | grep Resolution
```

This outputs something like `Resolution: 2560 x 1440 (QHD/WQHD)`.

### Linux

**GNOME (Ubuntu, Fedora):**

1. Open **Settings > Displays**
2. Your resolution is shown in the **Resolution** dropdown

**Any distro via terminal:**

```
xrandr | grep '*'
```

This shows the currently active resolution with an asterisk. To see all supported resolutions for each connected display:

```
xrandr
```

### Chrome OS

1. Click the **clock** in the bottom-right corner
2. Click the **gear icon** to open Settings
3. Go to **Device > Displays**
4. Your resolution is listed with options to change it

## Way 3: Check the Monitor's Physical Specs

If you want to know the **native resolution** your monitor was built for — regardless of what your OS is set to — check the monitor itself.

### On the monitor

- Look at the **sticker on the back** of the monitor. It usually lists the model number and native resolution
- Open the monitor's **OSD (on-screen display)** menu by pressing the physical buttons. Many monitors show the incoming signal resolution under an **Information** or **Input** menu item

### Online lookup

1. Find your monitor's model number (on the back sticker, on the box, or in your OS display settings)
2. Search for it on the manufacturer's website or a spec site like DisplaySpecifications.com
3. Look for **Native Resolution** or **Maximum Resolution** in the specifications

### Common native resolutions by monitor type

| Monitor Type | Typical Native Resolution |
|-------------|--------------------------|
| 24-inch office monitor | 1920 × 1080 (Full HD) |
| 27-inch mid-range | 2560 × 1440 (QHD) |
| 27-inch high-end | 3840 × 2160 (4K UHD) |
| 32-inch mid-range | 2560 × 1440 (QHD) |
| 32-inch high-end | 3840 × 2160 (4K UHD) |
| 34-inch ultrawide | 3440 × 1440 (UWQHD) |
| 49-inch super ultrawide | 5120 × 1440 (DQHD) |

If the resolution your OS is currently using does not match the native resolution from the spec sheet, change it to native for the sharpest image.

## Current Resolution vs Native Resolution: What Is the Difference?

- **Current resolution** is what your display is actually outputting right now. This is what [MyScreenResolution.com](/) and your OS display settings show you
- **Native resolution** is what the monitor was physically built for. It is a hardware spec that does not change

They should always match. If your current resolution is lower than native, the image is being upscaled and will look blurry. If it is somehow higher (through GPU supersampling), the GPU is rendering more pixels than the display can show and downscaling to fit.

The **(Recommended)** tag in Windows Display Settings and the **Default for display** option on Mac both point to the native resolution.

## What If Your Monitor Does Not Show the Native Resolution Option?

If the native resolution does not appear in your display settings:

1. **Update your graphics driver** — this is the most common fix. Without the right driver, the OS cannot detect all supported resolutions
2. **Update or install the monitor driver** — in Windows Device Manager, check under **Monitors**. If it says "Generic PnP Monitor," try updating the driver or downloading the INF file from the manufacturer
3. **Try a different cable** — older HDMI cables (1.4 and earlier) cannot carry resolutions above 1080p at 60Hz. Use HDMI 2.0+, DisplayPort, or USB-C
4. **Check for adapter limitations** — some USB-C to HDMI adapters max out at 1080p or 4K 30Hz

For a full walkthrough of resolution troubleshooting, see our guide on [why your screen resolution might be wrong and how to fix it](/blog/why-is-my-screen-resolution-wrong).

## Conclusion

Finding your monitor's resolution takes less than a minute. The fastest way is to open [MyScreenResolution.com](/) for an instant reading. You can also check through your operating system's display settings, or look up the native resolution from the monitor's model number. Make sure your current resolution matches native — that one change makes the biggest difference in how sharp your display looks.
