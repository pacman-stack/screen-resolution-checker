---
title: "Screen Resolution Not Fitting Screen: How to Fix It"
description: "Your display is cut off, showing black bars, or not filling the screen? Here's how to fix screen resolution not fitting your monitor on Windows, Mac, Linux, and TVs."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "not fitting screen", "overscan", "underscan", "black bars", "troubleshooting"]
---

## Identify the Problem

When your resolution does not fit the screen, it shows up in one of these ways:

- **Black bars** on the sides, top, or bottom of the screen
- **Content cut off** at the edges — taskbar missing, icons cropped, text running off-screen
- **Image too small** sitting in the center with a black border around it
- **Image stretched** with everything looking wide or squished

Each symptom has a different cause. Start by checking your current resolution at [MyScreenResolution.com](/) and compare it to your monitor's native resolution. If they do not match, that is your first fix — set the resolution to native. If they do match and the screen still does not fit, keep reading.

## Fix 1: Set the Correct Resolution

The simplest and most common fix. If your resolution is not set to native, the display cannot map pixels correctly and the image will not fit properly.

### Windows

1. Right-click the desktop > **Display settings**
2. Select the resolution marked **(Recommended)**
3. Click **Keep changes**

### Mac

1. **System Settings > Displays**
2. Select **Default for display**

### Linux

1. **Settings > Displays** and select the highest available resolution
2. Or in terminal:

```
xrandr --output <display-name> --mode <native-resolution>
```

If the native resolution is not listed, update your graphics driver — that is almost always the reason it is missing.

## Fix 2: Turn Off Overscan

**Overscan** is the most common reason a screen does not fit even when the resolution is correct. It is a legacy TV feature that slightly zooms into the image, cutting off the edges. Many TVs and some monitors apply overscan by default, especially over HDMI.

### On your TV or monitor

Open the TV's settings menu and look for one of these options (the name varies by brand):

| Brand | Setting Name | Where to Find It |
|-------|-------------|-------------------|
| Samsung | **Picture Size** or **Fit to Screen** | Settings > Picture > Picture Size Settings |
| LG | **Just Scan** | Settings > Picture > Aspect Ratio > Just Scan |
| Sony | **Display Area** or **Wide Mode** | Settings > Display & Sound > Picture > Wide Mode |
| Vizio | **Wide** or **Normal** | Picture Settings > Aspect Ratio |
| TCL/Roku TV | **Picture Size** | Settings > TV Picture Settings > Picture Size |

Set it to **Just Scan**, **Fit to Screen**, **Screen Fit**, or **1:1 Pixel Mapping** — the exact label depends on the brand, but they all do the same thing: disable overscan so every pixel is displayed.

### On NVIDIA GPU

1. Open **NVIDIA Control Panel**
2. Go to **Adjust desktop size and position** under **Display**
3. Select your display
4. Under **Scaling**, set it to **No scaling**
5. Make sure **Perform scaling on** is set to **Display**
6. Click **Apply**

Alternatively, use the **Resize** slider under **Adjust desktop size and position** to manually fit the image to the screen edges.

### On AMD GPU

1. Open **AMD Radeon Software**
2. Go to **Settings > Display**
3. Find **HDMI Scaling** (or **GPU Scaling**)
4. Adjust the slider until the image fills the screen correctly
5. If you see an **Underscan/Overscan** slider, center it so no content is cropped

### On Intel GPU

1. Open **Intel Graphics Command Center**
2. Go to **Display > General**
3. Look for **Scaling** and set it to **Maintain Display Scaling** or adjust the underscan percentage

## Fix 3: Fix Aspect Ratio Mismatch

If you see black bars on the sides (left and right), you likely have an aspect ratio mismatch. This happens when the resolution's aspect ratio does not match your monitor's physical aspect ratio.

Common mismatches:

- **16:10 monitor running a 16:9 resolution** — small black bars at top and bottom
- **16:9 monitor running a 4:3 resolution** — thick black bars on the sides
- **Ultrawide (21:9) monitor running 16:9** — black bars on both sides

### How to fix it

Choose a resolution that matches your monitor's aspect ratio:

| Monitor Aspect Ratio | Correct Resolutions |
|---------------------|-------------------|
| 16:9 | 1920×1080, 2560×1440, 3840×2160 |
| 16:10 | 1920×1200, 2560×1600, 3840×2400 |
| 21:9 | 2560×1080, 3440×1440, 3840×1600 |
| 32:9 | 3840×1080, 5120×1440 |

Set the resolution in your display settings to one that matches the ratio of your monitor.

## Fix 4: Adjust GPU Scaling Settings

Sometimes the image does not fill the screen because your GPU is set to maintain the aspect ratio or use no scaling, which leaves the image smaller than the display area.

### NVIDIA

1. Open **NVIDIA Control Panel**
2. Go to **Adjust desktop size and position**
3. Under **Scaling**, select **Full-screen**
4. Set **Perform scaling on** to **GPU**
5. Click **Apply**

### AMD

1. Open **AMD Radeon Software > Settings > Display**
2. Enable **GPU Scaling**
3. Set **Scaling Mode** to **Full panel**

### Intel

1. Open **Intel Graphics Command Center**
2. Go to **Display**
3. Set **Scale** to **Stretch to fill screen** or **Maintain aspect ratio** depending on your preference

**Note:** Full-screen scaling that does not match the aspect ratio will stretch the image. Use **Maintain aspect ratio** if you want to avoid distortion and accept small black bars instead.

## Fix 5: Update or Reinstall the Graphics Driver

A generic or outdated driver may not detect your monitor's native resolution correctly, forcing it to a resolution that does not fit.

**Windows:**
1. **Device Manager > Display adapters**
2. Right-click your GPU > **Update driver > Search automatically**
3. If that fails, download the latest driver from your GPU manufacturer's site
4. Restart after installing

**Mac:**
Update macOS through **System Settings > General > Software Update**.

**Linux:**
```
sudo ubuntu-drivers autoinstall
```

After updating, check your display settings again — the correct native resolution should now be available.

## Fix 6: Check the Monitor's Own Settings

Monitors have built-in menus (OSD) with settings that can affect how the image fills the screen.

Look for:

- **Auto Adjust** or **Auto Config** — runs an automatic calibration (especially useful on older monitors or VGA connections)
- **H. Position / V. Position** — adjusts the horizontal and vertical placement of the image
- **H. Size / V. Size** — adjusts how much of the panel the image fills
- **Aspect Ratio** — set to **Auto**, **16:9**, or whatever matches your monitor's panel
- **Input Resolution** — some monitors let you manually set the expected input resolution

Try running **Auto Adjust** first — it fixes most fitting issues on monitors that support it.

## Fix 7: Reset Display Settings to Default

If you have tried multiple changes and made things worse, reset everything to a clean state.

### Windows

1. Go to **Display settings**
2. Set **Scale** to the recommended value
3. Set **Display resolution** to **(Recommended)**
4. In NVIDIA/AMD control panel, look for a **Restore defaults** option

### Mac

Reset NVRAM to clear display configuration:
1. Shut down your Mac
2. Power on and hold **Option + Command + P + R** for 20 seconds

### Linux

```
xrandr --auto
```

This resets all connected displays to their preferred resolution and position.

## Fix 8: Handle External Monitor and TV Connections

External displays — especially TVs — behave differently from dedicated monitors. Here are the most common issues:

### TV shows desktop with edges cut off

This is overscan (see Fix 2). Set the TV to **Just Scan** or **Fit to Screen** in its picture settings. Also adjust HDMI scaling in your GPU control panel.

### Laptop screen fine, external monitor does not fit

1. Make sure the external display is set to its own native resolution (not duplicating the laptop)
2. In **Display settings**, switch from **Duplicate** to **Extend** so each display runs independently
3. Check the external monitor's OSD for overscan or aspect ratio settings

### Projector shows image too small or too large

Projectors often default to a lower resolution. Set the output resolution in display settings to match the projector's native resolution (commonly 1920 × 1080 for modern projectors).

## Quick Troubleshooting Checklist

Work through this in order:

1. Check your current resolution at [MyScreenResolution.com](/) — does it match native?
2. Is overscan disabled on the TV/monitor?
3. Does the resolution's aspect ratio match the monitor's aspect ratio?
4. Is GPU scaling set to Full-screen or Maintain aspect ratio?
5. Is the graphics driver up to date?
6. Have you tried the monitor's Auto Adjust function?
7. Are multiple displays in Extend mode (not Duplicate)?

Most fitting issues are resolved by the first three items. For a deeper dive into resolution troubleshooting, see our guide on [why your screen resolution might be wrong](/blog/why-is-my-screen-resolution-wrong).

## Conclusion

A screen that does not fit is frustrating but almost always fixable. The cause is usually one of three things: wrong resolution, overscan enabled, or an aspect ratio mismatch. Set your display to its native resolution, disable overscan on TVs, and make sure the resolution matches your screen's aspect ratio. If those do not work, check your GPU scaling settings and update your drivers. Your display should fill the screen perfectly after working through these fixes.
