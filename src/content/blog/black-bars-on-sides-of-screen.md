---
title: "Why Is My Display Showing Black Bars on the Sides?"
description: "Black bars on the sides of your screen? Learn the causes — wrong resolution, aspect ratio mismatch, overscan, GPU scaling — and how to fix them on Windows, Mac, and Linux."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["black bars on sides of screen", "screen resolution", "aspect ratio", "overscan", "GPU scaling", "troubleshooting"]
---

## What Causes Black Bars on the Sides of Your Screen?

Black bars on the sides of your screen mean the image is not filling the entire display. The picture is being shown at a narrower width than the panel, leaving unused black strips on the left and right.

This happens for one of these reasons:

- **Wrong resolution** — the output resolution is lower or has a different shape than your monitor expects
- **Aspect ratio mismatch** — you are sending a 4:3 or 16:10 signal to a 16:9 panel (or similar mismatch)
- **GPU scaling set to maintain aspect ratio** — the GPU is adding black bars intentionally to avoid stretching
- **Overscan or underscan settings** — the display or GPU is zooming or shrinking the image
- **Display mode misconfiguration** — duplicated displays, wrong refresh rate, or incorrect input source

Start by visiting [MyScreenResolution.com](/) to check your current resolution and compare it to your monitor's native resolution. If they do not match, that tells you exactly where to begin.

## Fix 1: Set the Correct Native Resolution

The most common cause of black bars is running a resolution that does not match your monitor. A 1024 x 768 signal on a 1920 x 1080 screen, for example, cannot fill the panel without stretching, so the GPU pads the unused area with black.

### Windows

1. Right-click the desktop and select **Display settings**
2. Scroll to **Display resolution**
3. Select the option marked **(Recommended)** — this is your native resolution
4. Click **Keep changes**

### Mac

1. Open **System Settings > Displays**
2. Select **Default for display** to restore the native resolution
3. If you need a specific resolution, click **Show all resolutions** and choose the one that matches your monitor's specifications

### Linux

1. Open **Settings > Displays** and select the highest available resolution that matches your monitor
2. Or use the terminal:

```
xrandr --output <display-name> --mode <native-resolution>
```

If your native resolution is not listed, the most likely cause is a missing or outdated graphics driver. Update the driver and check again.

## Fix 2: Fix Aspect Ratio Mismatch

Black bars specifically on the **left and right sides** almost always point to an aspect ratio mismatch. Your monitor has a widescreen panel but it is receiving a non-widescreen signal.

Here are the most common mismatches that produce side black bars:

| Your Monitor | Resolution Being Sent | What You See |
|-------------|----------------------|--------------|
| 16:9 (standard widescreen) | 1024 x 768, 1280 x 1024, 1600 x 1200 (all 4:3 or 5:4) | Thick black bars on left and right |
| 21:9 (ultrawide) | 1920 x 1080, 2560 x 1440 (16:9) | Black bars on both sides |
| 32:9 (super ultrawide) | 2560 x 1440 (16:9) | Wide black bars on both sides |
| 16:9 | 1920 x 1200, 2560 x 1600 (16:10) | Thin black bars on left and right, or top and bottom |

### How to fix it

Choose a resolution that matches your monitor's aspect ratio:

| Monitor Aspect Ratio | Matching Resolutions |
|---------------------|---------------------|
| 16:9 | 1920 x 1080, 2560 x 1440, 3840 x 2160 |
| 16:10 | 1920 x 1200, 2560 x 1600, 3840 x 2400 |
| 21:9 | 2560 x 1080, 3440 x 1440, 3840 x 1600 |
| 32:9 | 3840 x 1080, 5120 x 1440 |

If you are not sure what aspect ratio your monitor uses, check the specs on the manufacturer's website or look at the model number on the back of the display. You can also visit [MyScreenResolution.com](/) — if the detected resolution matches one of the ratios above, that is what your monitor expects.

## Fix 3: Adjust GPU Scaling Settings

Your GPU controls how a resolution is mapped to the display. If scaling is set to **Aspect ratio** or **No scaling**, the GPU will intentionally add black bars rather than stretch a mismatched resolution to fill the screen.

### NVIDIA

1. Right-click the desktop and open **NVIDIA Control Panel**
2. Go to **Adjust desktop size and position** under **Display**
3. Select your display
4. Under **Scaling**, choose one of these:
   - **Full-screen** — stretches the image to fill the panel (may distort if aspect ratio does not match)
   - **Aspect ratio** — maintains proportions, may add black bars
   - **No scaling** — shows the image at its native pixel size, adds black bars if smaller than the panel
5. Set **Perform scaling on** to **GPU**
6. Click **Apply**

To eliminate black bars, select **Full-screen**. Be aware that this stretches the image if the aspect ratios do not match — the cleaner fix is to set the correct resolution first.

### AMD

1. Right-click the desktop and open **AMD Radeon Software**
2. Go to **Settings > Display**
3. Enable **GPU Scaling**
4. Set **Scaling Mode** to one of:
   - **Full panel** — fills the entire screen (may stretch)
   - **Preserve aspect ratio** — keeps proportions, may show black bars
   - **Center** — no scaling at all, image sits in the middle with black around it
5. To remove black bars, select **Full panel** or fix the resolution to match the monitor

Also check the **HDMI Scaling** slider if you are connected over HDMI — slide it to the right to expand the image if it is not filling the screen.

### Intel

1. Open **Intel Graphics Command Center** from the Start menu
2. Go to **Display > General**
3. Under **Scale**, select:
   - **Stretch to fill screen** — removes black bars but may distort
   - **Maintain aspect ratio** — keeps proportions with possible black bars
   - **Maintain display scaling** — lets the monitor decide
4. Select the option that fits your preference and click **Apply**

## Fix 4: Disable Overscan and Underscan

**Overscan** zooms into the image slightly, cutting off edges. **Underscan** shrinks the image, creating a visible black border around the entire picture. Both can cause black bars or a picture that does not fit.

### On your TV or monitor

If you are using a TV as a monitor, overscan is frequently enabled by default. Open the TV's settings and look for these options:

| Brand | Setting to Look For | Location |
|-------|-------------------|----------|
| Samsung | **Fit to Screen** or **Picture Size: 16:9** | Settings > Picture > Picture Size Settings |
| LG | **Just Scan: On** | Settings > Picture > Aspect Ratio |
| Sony | **Display Area: Full Pixel** | Settings > Display & Sound > Picture |
| Vizio | **Normal** or **Wide** | Picture Settings > Aspect Ratio |
| TCL / Roku TV | **Picture Size: Direct** | Settings > TV Picture Settings |

Set the option to **Just Scan**, **Fit to Screen**, **Screen Fit**, **Full Pixel**, or **1:1 Pixel Mapping** — the exact name varies by brand, but they all disable overscan so every pixel maps directly to the panel.

### On NVIDIA GPU

1. Open **NVIDIA Control Panel**
2. Go to **Adjust desktop size and position**
3. If you see a **Resize** option or an **Underscan** slider, use it to expand the image until it fills the screen edges
4. Set **Perform scaling on** to **Display** and scaling to **No scaling** to let the monitor handle it directly

### On AMD GPU

1. Open **AMD Radeon Software > Settings > Display**
2. Find the **HDMI Scaling** slider
3. Drag it to the right to increase the image size, or to the left to shrink it
4. Adjust until the image fills the screen with no black bars and no content cut off

### On Intel GPU

1. Open **Intel Graphics Command Center**
2. Go to **Display > General**
3. Look for an **Underscan** percentage option and set it to **0%**

## Fix 5: Check the Display Mode

Running in the wrong display mode can cause black bars, especially with external monitors, projectors, or multi-monitor setups.

### Duplicate vs. Extend mode

When you duplicate displays, both screens are forced to run at the same resolution. If your external monitor has a different native resolution than your laptop, one of them will show black bars.

**Windows:**
1. Press **Win + P**
2. Select **Extend** instead of **Duplicate**
3. Each display now runs at its own native resolution

**Mac:**
1. Open **System Settings > Displays**
2. Click **Arrangement**
3. Uncheck **Mirror Displays** so each screen runs independently

**Linux:**
```
xrandr --output <external-display> --auto --right-of <primary-display>
```

### Wrong input source on the monitor

Some monitors have multiple inputs (HDMI 1, HDMI 2, DisplayPort, etc.). If the monitor is set to the wrong input, it may display a signal incorrectly or add bars. Use the monitor's OSD (on-screen display) button to select the correct input.

## Fix 6: Fix Black Bars in Games

Black bars in games are usually caused by the game running at a resolution or aspect ratio that does not match your monitor.

### Step-by-step fix

1. Open the game and go to **Settings > Display** or **Graphics**
2. Set the **Resolution** to your monitor's native resolution (for example, 1920 x 1080)
3. Set the **Display Mode** to **Fullscreen** (not Windowed or Borderless Windowed — those can sometimes cause bars)
4. Set the **Aspect Ratio** to **Auto** or to the ratio matching your monitor (16:9, 21:9, etc.)
5. Apply changes and restart the game if needed

### If the game does not support your resolution

Some older games only support 4:3 resolutions (800 x 600, 1024 x 768). In that case:

- **Accept the black bars** — this is the correct behavior, as stretching a 4:3 game to 16:9 distorts the image
- **Force GPU scaling to Full-screen** in your GPU control panel (see Fix 3) if you prefer a stretched image over black bars
- **Use a community widescreen patch** — many older games have fan-made patches that add widescreen support. Search for your game title plus "widescreen fix"

### Ultrawide monitors in games

Many games do not natively support 21:9 or 32:9 resolutions. When a game only outputs 16:9 on a 21:9 monitor, you get black bars on the sides. Solutions:

- Check the game's settings for an ultrawide resolution option
- Look for community mods or tools like **Flawless Widescreen** that force ultrawide support
- Set the GPU scaling to **Full-screen** if you want the image stretched (not recommended — it distorts)

## Fix 7: Fix Black Bars in Videos

Black bars in video players are common and usually not a problem — they indicate that the video's aspect ratio does not match your screen.

### Why videos show black bars

| Video Aspect Ratio | Your Screen | Result |
|--------------------|-----------|----|
| 2.39:1 (cinematic widescreen) | 16:9 | Black bars on top and bottom (letterboxing) |
| 4:3 (old TV/video format) | 16:9 | Black bars on left and right (pillarboxing) |
| 16:9 | 16:9 | No black bars |
| 16:9 | 21:9 (ultrawide) | Black bars on left and right |

### What you can do

- **Letterboxing (top and bottom bars on widescreen videos):** This is intentional. The video was filmed in a wider ratio than 16:9. You can use the "zoom" or "fill" option in your video player to crop and fill the screen, but this cuts off part of the image.
- **Pillarboxing (side bars on 4:3 videos):** The video is narrower than your screen. Most players let you stretch or zoom, but this distorts the picture. The bars are the correct behavior.
- **In YouTube or streaming apps:** Some apps have a "pinch to zoom" or "fill screen" option. On VLC, press the **C** key to cycle through crop modes.

For most video content, black bars are expected and not something to fix — they exist to preserve the original framing of the footage.

## Fix 8: Update or Reinstall Your Graphics Driver

An outdated or corrupted graphics driver can cause your system to fall back to a generic resolution that does not match your monitor, resulting in black bars.

### Windows

1. Press **Win + X** and select **Device Manager**
2. Expand **Display adapters**
3. Right-click your GPU and select **Update driver > Search automatically**
4. If no update is found, download the latest driver manually:
   - **NVIDIA:** nvidia.com — download GeForce Experience or the standalone driver
   - **AMD:** amd.com/support — download Radeon Software
   - **Intel:** intel.com/support — use the Intel Driver & Support Assistant
5. Restart after installing

### Mac

Update macOS through **System Settings > General > Software Update**. Apple bundles GPU drivers with macOS updates.

### Linux

```
sudo ubuntu-drivers autoinstall
```

Or for NVIDIA specifically:

```
sudo apt install nvidia-driver-<version>
```

After updating, check your display settings — the correct native resolution should now appear, and black bars should be gone.

## Quick Troubleshooting Checklist

Run through this list in order. Most black bar issues are resolved within the first four steps:

| Step | What to Check | How |
|------|-------------|-----|
| 1 | Is the resolution set to native? | Visit [MyScreenResolution.com](/) and compare to your monitor's specs |
| 2 | Does the aspect ratio match? | A 4:3 resolution on a 16:9 screen always causes side bars |
| 3 | Is GPU scaling set to Full-screen? | Check NVIDIA Control Panel, AMD Radeon Software, or Intel Graphics Command Center |
| 4 | Is overscan/underscan disabled? | Check your TV or monitor OSD settings, plus HDMI scaling in the GPU control panel |
| 5 | Is the display in Extend mode (not Duplicate)? | Press Win + P on Windows or check display arrangement on Mac |
| 6 | Is the graphics driver up to date? | Device Manager > Display adapters > Update driver |
| 7 | Is the cable sufficient for the resolution? | HDMI 2.0+ or DisplayPort 1.2+ for 1440p and above |
| 8 | Is the monitor set to the correct input? | Check the OSD menu for the active input source |

If the black bars only appear in specific games or videos, skip the system-level fixes and go directly to Fix 6 or Fix 7.

For more display troubleshooting, see our guides on [how to check your screen resolution](/blog/how-to-check-screen-resolution) and [screen resolution not fitting screen](/blog/screen-resolution-not-fitting-screen).

## Conclusion

Black bars on the sides of your screen are caused by a mismatch between the signal your computer sends and what your monitor expects. In most cases, the fix is straightforward: set your display to its native resolution, make sure the aspect ratio matches your monitor, and check your GPU scaling settings. If you are using a TV, disable overscan. If the bars only show up in games or videos, adjust the in-app display settings or accept the bars as the correct way to display content with a different aspect ratio. Work through the checklist above and the bars will be gone in minutes.
