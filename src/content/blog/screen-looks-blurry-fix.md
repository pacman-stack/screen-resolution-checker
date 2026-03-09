---
title: "Why Does My Screen Look Blurry? Resolution Fixes"
description: "Your screen looks blurry and you don't know why. Here are the most common resolution-related causes and how to fix each one on Windows, Mac, and Linux."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["blurry screen", "screen resolution", "troubleshooting", "display scaling", "ClearType"]
---

## First: Check What Resolution You Are Running

A blurry screen almost always comes down to a resolution or scaling issue. Before trying any fixes, find out your current resolution by visiting [MyScreenResolution.com](/). Compare the result to your monitor's native resolution — if they do not match, that is likely the problem.

Your monitor's native resolution is listed:
- In the **(Recommended)** tag in your OS display settings
- On the manufacturer's website or product box
- On a sticker on the back of the monitor

If the numbers match but your screen still looks blurry, keep reading — the cause is likely one of the issues below.

## Cause 1: Running a Non-Native Resolution

This is the most common cause of a blurry display. LCD and OLED screens have a fixed pixel grid, and they can only display one resolution perfectly — the native one. Any other resolution has to be stretched or compressed to fit, which introduces blur.

### How to fix it

Set your display to its native resolution:

**Windows:**
1. Right-click the desktop > **Display settings**
2. Under **Display resolution**, select the option marked **(Recommended)**
3. Click **Keep changes**

**Mac:**
1. **System Settings > Displays**
2. Select **Default for display**

**Linux:**
1. **Settings > Displays** and choose the highest resolution, or run:

```
xrandr --output <display-name> --auto
```

If the native resolution is not available in the list, your graphics driver likely needs updating (see Cause 5).

## Cause 2: Incorrect Display Scaling

Scaling makes text and UI elements larger without lowering the resolution. When it works correctly, everything stays sharp. But wrong scaling settings — or apps that do not support scaling properly — cause blurriness.

### Scaling set too high or to a custom value

Windows supports preset scaling values (100%, 125%, 150%, 200%) and custom percentages. Preset values generally produce sharp results. Custom values like 137% or 163% can cause subtle blurriness across the entire interface because the math does not divide evenly.

**Fix:** Use a preset scaling percentage. Go to **Display settings > Scale & layout > Scale** and pick 100%, 125%, 150%, or 200%.

### Individual apps look blurry while the rest of the screen is sharp

Some older applications were not designed for high-DPI displays. Windows stretches them to match the system scaling, which makes them blurry.

**Fix on Windows:**
1. Right-click the blurry app's shortcut or .exe file
2. Select **Properties > Compatibility**
3. Click **Change high DPI settings**
4. Check **Override high DPI scaling behavior**
5. Set **Scaling performed by** to **Application**
6. Click **OK** and restart the app

**Automatic fix:** Windows 11 has a built-in feature that tries to fix blurry apps. Go to **Display settings > Scale & layout > Advanced scaling settings** and turn on **Fix scaling for apps**.

## Cause 3: ClearType Is Off or Misconfigured (Windows)

ClearType is a Windows technology that smooths the edges of text on LCD screens. If it is turned off or misconfigured, text across the entire system looks fuzzy and hard to read.

### How to fix it

1. Press **Win + S** and search for **ClearType**
2. Open **Adjust ClearType text**
3. Make sure **Turn on ClearType** is checked
4. Click **Next** and follow the wizard — it shows you sample text and asks you to pick the sharpest version
5. Complete the wizard for each connected monitor

If you recently connected a new monitor or changed your resolution, run the ClearType wizard again — it calibrates per-display.

## Cause 4: Blurry on an External Monitor Only

If your laptop screen looks sharp but your external monitor is blurry, the issue is usually with the connection or the monitor's settings.

### Check the cable

- **HDMI 1.4** maxes out at 1080p 60Hz or 4K 30Hz. For 4K at 60Hz, you need HDMI 2.0 or later
- **VGA** is analog and often produces a slightly soft image compared to digital connections
- **DisplayPort** generally gives the best results for high resolutions
- **USB-C / Thunderbolt** works well if the adapter supports your target resolution

Try swapping the cable or using a different port.

### Check the monitor's built-in sharpness setting

Many monitors have a **Sharpness** setting in their on-screen display (OSD) menu. If it is set too low, the image looks soft. If it is set too high, it adds ugly halos around text. Set it to the middle or default value.

### Check the monitor's input resolution

Some monitors have an OSD option that shows the incoming signal resolution. Verify it matches the native resolution. If the monitor is receiving 1080p but its native resolution is 1440p, the image will be blurry because the monitor is upscaling.

## Cause 5: Outdated or Missing Graphics Driver

Without the correct graphics driver, your operating system may not even offer the native resolution as an option. It falls back to a generic driver that supports only basic resolutions like 1024 × 768 or 1280 × 1024 — neither of which is likely native to your monitor.

### How to fix it

**Windows:**
1. Press **Win + X > Device Manager**
2. Expand **Display adapters**
3. Right-click your GPU and select **Update driver > Search automatically**
4. If that does not work, download the driver directly:
   - NVIDIA: [nvidia.com/drivers](https://www.nvidia.com/Download/index.aspx)
   - AMD: [amd.com/support](https://www.amd.com/en/support)
   - Intel: [intel.com/support](https://www.intel.com/content/www/us/en/support/detect.html)
5. Restart after installing

**Mac:**
Graphics drivers update with macOS. Go to **System Settings > General > Software Update**.

**Linux:**
```
sudo ubuntu-drivers autoinstall
```
Or use your distribution's driver manager.

## Cause 6: Font Smoothing Disabled (Mac)

On macOS, font smoothing makes text look smoother on non-Retina (low-DPI) external monitors. Apple disabled it by default in recent macOS versions, which can make text on external 1080p or 1440p monitors look thin and rough.

### How to fix it

Open Terminal and run:

```
defaults write -g CGFontRenderingFontSmoothingDisabled -bool false
```

Log out and back in for the change to take effect.

To revert:

```
defaults delete -g CGFontRenderingFontSmoothingDisabled
```

This makes the biggest difference on non-Retina external monitors. On Retina displays, the pixel density is high enough that font smoothing has minimal impact.

## Cause 7: Display Set to Duplicate Instead of Extend

When you connect an external monitor and set it to **Duplicate** (mirror) mode, both screens are forced to use the same resolution. If your laptop is 1920 × 1080 and your external monitor is 2560 × 1440, the mirrored output runs at 1080p on both — making the external monitor blurry because it is running below native.

### How to fix it

**Windows:**
1. Go to **Display settings**
2. Under **Multiple displays**, select **Extend these displays**

**Mac:**
1. Go to **System Settings > Displays**
2. Click **Arrangement**
3. Uncheck **Mirror Displays**

In Extend mode, each display runs at its own native resolution independently.

## Cause 8: Browser Zoom Is Not at 100%

Sometimes the blurriness is only inside your web browser, not the entire screen. This happens when browser zoom is set to something other than 100%.

### How to check and fix it

- Press **Ctrl + 0** (Windows/Linux) or **Cmd + 0** (Mac) to reset zoom to 100%
- Or check the zoom level in the browser menu — look for a percentage next to a magnifying glass icon

If text is too small at 100% zoom, it is better to adjust your operating system's display scaling rather than zooming the browser, since OS-level scaling produces sharper results.

## Quick Checklist

If your screen looks blurry, work through this list in order:

1. Check your resolution at [MyScreenResolution.com](/) — is it your monitor's native resolution?
2. Is scaling set to a preset value (100%, 125%, 150%, 200%)?
3. Is ClearType turned on and calibrated? (Windows)
4. Is font smoothing enabled? (Mac with non-Retina external monitor)
5. Are you using a digital cable (HDMI 2.0+, DisplayPort, USB-C) rather than VGA?
6. Is your graphics driver up to date?
7. Are multiple displays set to Extend, not Duplicate?
8. Is browser zoom at 100%?

In most cases, the fix is one of the first three items. For a detailed guide on finding your current resolution across every platform, see [how to check your screen resolution on any device](/blog/how-to-check-screen-resolution).

## Conclusion

A blurry screen is almost always a resolution or scaling problem, and the fix is usually straightforward. Set your display to its native resolution, use preset scaling values, and make sure ClearType or font smoothing is enabled. If the blur is only on an external monitor, check your cable and make sure you are in Extend mode. Work through the checklist above, and your display should be sharp and clear within minutes.
