---
title: "Why Is My Screen Resolution Wrong? 7 Quick Fixes"
description: "Your screen resolution looks off? Here are 7 common reasons your display is set to the wrong resolution and step-by-step fixes for Windows, Mac, and Linux."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "troubleshooting", "wrong resolution", "Windows", "Mac", "Linux"]
---

## How to Tell If Your Resolution Is Wrong

Before diving into fixes, confirm that your resolution is actually incorrect. Visit [MyScreenResolution.com](/) to see your current resolution instantly, then compare it to your monitor's native resolution (usually listed on a sticker on the back, in the manual, or on the manufacturer's website).

Signs your resolution is wrong:

- **Text looks blurry or fuzzy** even though your eyesight is fine
- **Everything appears too large** and you have very little screen space
- **The image looks stretched** — circles appear as ovals, people look wider than normal
- **Black bars** appear on the top, bottom, or sides of your screen
- **Icons and text are tiny** and hard to read without leaning in

If any of these match, one of the fixes below should solve it.

## Fix 1: Set Your Display to Its Native Resolution

The most common cause of a wrong resolution is simply that your display is not set to its native resolution. This can happen after a driver update, a fresh OS install, or connecting a new monitor.

### Windows

1. Right-click on the desktop and select **Display settings**
2. Scroll to **Display resolution**
3. Select the option marked **(Recommended)** — this is your native resolution
4. Click **Keep changes**

### Mac

1. Open **System Settings > Displays**
2. Select **Default for display** — this sets the native resolution
3. If you want to see all options, hold **Option** and click **Scaled**

### Linux

1. Open **Settings > Displays**
2. Select the highest available resolution from the dropdown
3. Click **Apply**

Or in a terminal:

```
xrandr --output <display-name> --auto
```

This resets the output to its preferred native resolution.

## Fix 2: Update or Reinstall Your Graphics Driver

Outdated or corrupted graphics drivers are one of the top reasons your display gets stuck at the wrong resolution. Without the correct driver, your OS cannot communicate with the GPU properly and falls back to a generic, low resolution.

### Windows

1. Press **Win + X** and select **Device Manager**
2. Expand **Display adapters**
3. Right-click your graphics card and select **Update driver**
4. Choose **Search automatically for drivers**
5. Restart your computer after the update

If updating does not help, try a clean reinstall:

- **NVIDIA:** Download the latest driver from nvidia.com, run the installer, and select **Clean installation**
- **AMD:** Use the AMD Cleanup Utility, then install the latest driver from amd.com
- **Intel:** Download the latest driver from Intel's support site or use the Intel Driver & Support Assistant

### Mac

Graphics drivers on Mac are updated through macOS itself. Go to **System Settings > General > Software Update** and install any available updates.

### Linux

For NVIDIA on Ubuntu or Fedora:

```
sudo ubuntu-drivers autoinstall
```

Or install manually from the **Additional Drivers** tab in **Software & Updates**.

## Fix 3: Check Your Cable and Connection

A bad or incompatible cable can limit the resolution your monitor receives. This is more common than most people realize.

**Common cable issues:**

- **Old HDMI cables** (version 1.4 or earlier) may not support resolutions above 1080p at 60Hz
- **VGA cables** are analog and may cause signal degradation, leading to a blurry or incorrect resolution
- **Damaged cables** with bent pins or frayed ends can drop the connection to a lower resolution
- **Adapters** (e.g., USB-C to HDMI) that do not support your target resolution

**What to do:**

1. Try a different cable — use HDMI 2.0 or later for 4K, or DisplayPort for the most reliable connection
2. Plug the cable into a different port on both your computer and monitor
3. Remove any adapters or docking stations to test a direct connection
4. Make sure the cable is seated firmly at both ends

## Fix 4: Reinstall or Update Your Monitor Driver

Your monitor also has a driver that tells the operating system what resolutions it supports. If this driver is missing or generic, your OS might not offer the correct resolution options.

### Windows

1. Open **Device Manager**
2. Expand **Monitors**
3. Right-click your monitor (it might say "Generic PnP Monitor") and select **Update driver**
4. Choose **Search automatically for drivers**
5. If no update is found, visit your monitor manufacturer's website and download the monitor's INF driver file
6. Return to Device Manager, click **Update driver > Browse my computer for drivers**, and point to the downloaded file
7. Restart your computer

### Mac

macOS handles monitor detection automatically. If your Mac is not recognizing your monitor's native resolution, try:

1. Disconnect the monitor, wait 10 seconds, and reconnect
2. Try a different cable or port
3. Reset NVRAM: shut down your Mac, then power on while holding **Option + Command + P + R** for 20 seconds

## Fix 5: Adjust Scaling Settings (Things Look Too Big or Too Small)

Sometimes the resolution is actually correct, but the **scaling** is set wrong, making everything appear too large or too small.

### Windows

1. Go to **Display settings**
2. Under **Scale & layout**, check the **Scale** dropdown
3. The recommended setting is usually 100% for 1080p, 125% for 1440p, and 150% for 4K
4. If a custom scale was set, click **Advanced scaling settings** and remove any custom value

### Mac

1. Go to **System Settings > Displays**
2. The "Looks like" options let you choose how much screen space you get
3. The middle option is typically the default balance between sharpness and usable space

### Linux (GNOME)

1. Go to **Settings > Displays**
2. Adjust the **Scale** setting (usually 100% or 200%)
3. For fractional scaling on Ubuntu, enable it with:

```
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

## Fix 6: Handle Multiple Monitors Correctly

When you connect an external monitor, your OS might apply the wrong resolution to one or both displays — especially if the monitors have different native resolutions.

### Windows

1. Go to **Display settings**
2. Click on the monitor that has the wrong resolution (displayed as numbered rectangles at the top)
3. Set the correct resolution for that specific display
4. Make sure **Multiple displays** is set to **Extend** (not Duplicate) if the monitors have different resolutions — duplicating forces both screens to the lower resolution

### Mac

1. Go to **System Settings > Displays**
2. Click on the external display in the layout preview
3. Choose the correct resolution for that display

### Common issue: Duplicated displays

When displays are mirrored/duplicated, both screens run at the resolution of the lower-resolution display. Switch to **Extend** mode to let each monitor run at its own native resolution.

## Fix 7: Reset Your Display Settings to Default

If none of the above fixes work, resetting display settings to their defaults can clear any conflicting configuration.

### Windows

1. Go to **Display settings**
2. Set **Scale** to the recommended value
3. Set **Display resolution** to the **(Recommended)** option
4. If the problem started after a Windows Update, check for additional updates that may include a fix

As a last resort, you can boot into **Safe Mode** (hold Shift while clicking Restart, then go to Troubleshoot > Advanced > Startup Settings). Safe Mode uses a basic display driver and default resolution, which can help you determine if the issue is driver-related.

### Mac

Reset the display configuration by resetting NVRAM:

1. Shut down your Mac
2. Power on and immediately hold **Option + Command + P + R** for 20 seconds
3. Release the keys and let your Mac boot normally

### Linux

Reset your display to defaults from a terminal:

```
xrandr --auto
```

This tells all connected outputs to use their preferred resolution.

## Still Not Working?

If you have tried all seven fixes and your resolution is still wrong:

- **Your monitor may have a hardware issue.** Test it with a different computer to see if the problem follows the monitor
- **Your GPU might not support the resolution.** Check your graphics card's specifications for its maximum supported resolution and refresh rate
- **A docking station or KVM switch** might be limiting the signal. Try connecting directly to your computer

You can always verify your current resolution at [MyScreenResolution.com](/) to confirm whether your changes took effect. For step-by-step instructions on checking your resolution across all platforms, see our [complete guide to checking your screen resolution](/blog/how-to-check-screen-resolution).

## Conclusion

A wrong screen resolution is almost always fixable. In most cases, it comes down to selecting the native resolution in display settings or updating your graphics driver. If the issue is more stubborn, checking your cable, monitor driver, or scaling settings will usually get you back to the correct resolution. Start with Fix 1, work your way down, and your display should be looking sharp again in minutes.
