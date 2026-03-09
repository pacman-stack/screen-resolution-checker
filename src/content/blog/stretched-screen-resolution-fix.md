---
title: "How to Fix Stretched Screen Resolution on Windows"
description: "Everything on your Windows screen looks stretched and distorted? Here are the most common causes and step-by-step fixes to restore the correct aspect ratio."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["stretched screen", "screen resolution", "Windows", "aspect ratio", "troubleshooting"]
---

## Why Does Your Screen Look Stretched?

A stretched screen means the image is being displayed at the wrong aspect ratio. Circles look like ovals, people appear wider than normal, and everything feels "squished" horizontally or vertically.

This happens when your display is running at a resolution that does not match your monitor's native aspect ratio — for example, a 16:9 monitor forced to display a 4:3 or 5:4 resolution. Instead of showing black bars, the GPU or monitor stretches the image to fill the screen, distorting everything.

Start by checking your current resolution at [MyScreenResolution.com](/). If it does not match your monitor's native resolution, that is the problem.

## Fix 1: Set the Correct Resolution

This fixes stretched screens about 90% of the time.

1. Right-click on the desktop and select **Display settings**
2. Scroll to **Display resolution**
3. Open the dropdown and select the option marked **(Recommended)**
4. Click **Keep changes**

The **(Recommended)** resolution is your monitor's native resolution — the one with the correct aspect ratio that eliminates stretching.

### What if Recommended is not listed?

If you do not see a **(Recommended)** option or your native resolution is missing entirely:

- Your graphics driver is likely outdated or using a generic driver — see Fix 3
- Your cable may not support the resolution — see Fix 5
- The monitor driver may be missing — see Fix 4

## Fix 2: Change GPU Scaling to Maintain Aspect Ratio

If your resolution is correct but the image is still stretched — or if you intentionally want to run a lower resolution without distortion — change your GPU's scaling mode.

### NVIDIA

1. Right-click the desktop and open **NVIDIA Control Panel**
2. In the left panel, click **Adjust desktop size and position**
3. Select your display at the top
4. Under **Scaling**, select **Aspect ratio** (not Full-screen)
5. Set **Perform scaling on** to **GPU**
6. Click **Apply**

With **Aspect ratio** scaling, lower resolutions will display at their correct proportions with black bars on the sides instead of being stretched.

### AMD

1. Right-click the desktop and open **AMD Radeon Software**
2. Go to **Settings > Display**
3. Enable **GPU Scaling**
4. Set **Scaling Mode** to **Preserve aspect ratio**
5. Close and the change takes effect immediately

### Intel

1. Open **Intel Graphics Command Center** from the Start menu
2. Click **Display** in the left sidebar
3. Under **Scale**, select **Maintain aspect ratio**
4. Click **Apply**

## Fix 3: Update Your Graphics Driver

An outdated, corrupted, or generic graphics driver is one of the top causes of a stretched screen. Without the proper driver, Windows cannot detect your monitor's native resolution and falls back to a basic resolution like 1024 × 768 — which stretches on any modern widescreen monitor.

### Automatic update

1. Press **Win + X** and select **Device Manager**
2. Expand **Display adapters**
3. Right-click your graphics card and select **Update driver**
4. Choose **Search automatically for drivers**
5. Restart your computer after the update completes

### Manual update

If the automatic search does not find a newer driver, download directly from the manufacturer:

- **NVIDIA:** Go to nvidia.com, find your GPU model, download and run the installer. Select **Clean installation** for best results
- **AMD:** Go to amd.com/support, download the latest Radeon Software package, and install
- **Intel:** Go to intel.com/support or use the Intel Driver & Support Assistant tool

After installing the new driver, go back to Display settings — the correct native resolution should now appear with the **(Recommended)** label.

## Fix 4: Update the Monitor Driver

Windows identifies each monitor and loads a driver that tells the OS what resolutions the monitor supports. If this driver is missing or generic, Windows may not offer the correct resolution.

1. Press **Win + X** and select **Device Manager**
2. Expand **Monitors**
3. If it says **Generic PnP Monitor**, right-click it and select **Update driver**
4. Choose **Search automatically for drivers**
5. If no update is found, visit your monitor manufacturer's website
6. Download the monitor's INF or ICM driver file
7. Back in Device Manager, click **Update driver > Browse my computer for drivers** and point to the downloaded file
8. Restart your computer

After the monitor driver is installed, Windows can properly detect the native resolution, and the stretched image should be fixed.

## Fix 5: Check Your Cable

Certain cables limit the resolutions your computer can send to the monitor. If your cable cannot carry the native resolution, Windows falls back to a lower resolution that may have the wrong aspect ratio.

**Cable limitations:**

| Cable Type | Maximum Practical Resolution |
|-----------|------------------------------|
| VGA | 1920 × 1080 (analog, may look soft) |
| DVI-D Single Link | 1920 × 1200 at 60Hz |
| DVI-D Dual Link | 2560 × 1600 at 60Hz |
| HDMI 1.4 | 3840 × 2160 at 30Hz / 1080p at 60Hz |
| HDMI 2.0 | 3840 × 2160 at 60Hz |
| HDMI 2.1 | 3840 × 2160 at 120Hz / 8K at 60Hz |
| DisplayPort 1.2 | 3840 × 2160 at 60Hz |
| DisplayPort 1.4 | 3840 × 2160 at 120Hz |
| USB-C (DP Alt Mode) | Depends on adapter — check specs |

**What to do:**

1. If you are using VGA, switch to HDMI or DisplayPort for a digital signal
2. If you need 1440p or 4K at 60Hz, use at least HDMI 2.0 or DisplayPort 1.2
3. Try a different cable — damaged cables can cause resolution handshake failures
4. Remove adapters or docking stations and connect directly to test

## Fix 6: Fix Stretched Screen After a Windows Update

Windows updates occasionally reset display settings or install a generic graphics driver that replaces the manufacturer's driver. If your screen became stretched right after an update:

1. **Check the resolution** in Display settings — it may have been reset to a non-native value. Set it back to **(Recommended)**
2. **Check the graphics driver** in Device Manager. If it was replaced with a Microsoft Basic Display Adapter:
   - Download the latest driver from your GPU manufacturer
   - Install it and restart
3. **Roll back the driver** if the new one causes issues:
   - In Device Manager, right-click your GPU > **Properties > Driver** tab
   - Click **Roll Back Driver** if the option is available
4. **Check for a follow-up update** — go to **Settings > Windows Update** and install any pending updates that may contain a driver fix

## Fix 7: Fix Stretched Screen in Safe Mode

If the stretched screen is so bad that you cannot navigate Display settings normally, boot into Safe Mode:

1. Hold **Shift** and click **Restart** from the Start menu
2. Go to **Troubleshoot > Advanced options > Startup Settings**
3. Click **Restart**
4. Press **4** or **F4** to start in Safe Mode (or **5** / **F5** for Safe Mode with Networking)

In Safe Mode, Windows uses a basic display driver at a standard resolution. From here you can:

- Uninstall the problematic graphics driver in Device Manager
- Download and install the correct driver (if you chose Safe Mode with Networking)
- Change the resolution in Display settings

Restart normally after making changes.

## Fix 8: Check Game and Application Settings

If the stretching only happens inside a specific game or application, the issue is not your system resolution — it is the app's internal display settings.

### Games

- Open the game's **Settings > Display** or **Graphics** menu
- Set the resolution to match your monitor's native resolution
- Set the **Display Mode** to **Fullscreen** or **Borderless Windowed**
- Make sure the aspect ratio is set to **Auto** or **16:9** (for standard monitors)

### Applications

- Some older programs run at fixed resolutions. Right-click the app shortcut > **Properties > Compatibility**
- Try checking **Run in 640 × 480 resolution** then unchecking it — this sometimes resets the app's display behavior
- Check **Override high DPI scaling behavior** and set it to **Application**

## Verifying the Fix

After applying any of the fixes above, confirm that your resolution is correct:

1. Visit [MyScreenResolution.com](/) — it should show your monitor's native resolution
2. Check that the aspect ratio matches your monitor (16:9 for most widescreen monitors)
3. Look at round objects on screen — circles should look like circles, not ovals
4. Open a photo of a person — their proportions should look natural

For more display troubleshooting, see our guides on [why your screen resolution might be wrong](/blog/why-is-my-screen-resolution-wrong) and [how to check your screen resolution on any device](/blog/how-to-check-screen-resolution).

## Conclusion

A stretched screen on Windows is almost always caused by running the wrong resolution. Set your display to the **(Recommended)** native resolution in Display settings, and the stretching disappears. If the native resolution is not available, update your graphics driver — that fixes it in most remaining cases. For situations where you intentionally run a lower resolution, set your GPU scaling to **Maintain aspect ratio** so the image stays proportional with black bars instead of being stretched to fill the screen.
