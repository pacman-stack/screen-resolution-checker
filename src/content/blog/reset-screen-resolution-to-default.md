---
title: "How to Reset Screen Resolution to Default Settings"
description: "Learn how to reset your screen resolution to default on Windows 10/11, Mac, and Linux using display settings, GPU control panels, Safe Mode, command line, and more."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "reset to default", "troubleshooting", "Windows", "Mac", "Linux", "NVIDIA", "AMD", "Intel"]
---

## Why You Might Need to Reset Your Screen Resolution

There are several situations where resetting your screen resolution to default is the fastest way to fix a display problem:

- **You set a custom resolution** and now the screen is blank, distorted, or off-center
- **A game or application changed the resolution** and did not switch it back
- **A driver update or OS update** changed your display settings without asking
- **You connected or disconnected a monitor** and the resolution got stuck at the wrong value
- **You adjusted scaling or resolution settings** and everything looks stretched, blurry, or too small

In all of these cases, resetting to the default (native) resolution restores the sharpest, most correct image your monitor can produce. Before you start, visit [MyScreenResolution.com](/) to check what resolution your display is currently running. If it does not match your monitor's native resolution, one of the methods below will fix it.

## Method 1: Reset Resolution in Windows Display Settings

This is the fastest and simplest method on Windows 10 and Windows 11. It works regardless of your GPU brand.

### Windows 11

1. Right-click anywhere on the desktop and select **Display settings**
2. Scroll down to **Display resolution**
3. Open the dropdown and select the option marked **(Recommended)**
4. Click **Keep changes** when prompted

### Windows 10

1. Right-click the desktop and select **Display settings**
2. Scroll down to **Display resolution** (or **Resolution** on older versions of Windows 10)
3. Select the option labeled **(Recommended)**
4. Click **Keep changes**

The **(Recommended)** label marks your monitor's native resolution. This is always the correct default to use. If you do not see a **(Recommended)** option, your graphics driver may need updating.

### Resetting scaling at the same time

If the resolution is correct but things still look wrong, your scaling may have been changed too. In **Display settings**, check the **Scale** dropdown (under **Scale & layout**) and set it to the recommended percentage, which is usually 100% on 1080p monitors and 150% or 200% on higher-resolution displays.

## Method 2: Reset Resolution via GPU Control Panels

If you set a custom resolution through your GPU's control panel, resetting through Windows Display Settings alone may not be enough. You should reset through the same tool that made the change.

### NVIDIA Control Panel

1. Right-click the desktop and select **NVIDIA Control Panel** (or search for it in the Start menu)
2. In the left panel, click **Change resolution** under **Display**
3. Select your monitor at the top
4. Under the resolution list, select the resolution marked **(native)** — this is your monitor's default
5. Set the **Refresh rate** to your monitor's default (usually 60Hz, unless you have a high-refresh-rate monitor)
6. Click **Apply**
7. Confirm the change within 20 seconds

If you previously created a custom resolution and want to remove it:

1. Go to **Change resolution > Customize**
2. Select the custom resolution you created
3. Click **Delete**
4. Click **OK**

### AMD Radeon Software

1. Right-click the desktop and open **AMD Radeon Software**
2. Click the **Settings gear icon** in the top-right corner
3. Click the **Display** tab
4. Your current resolution is shown — click on it and select your monitor's native resolution from the list
5. If you previously created a custom resolution under **Custom Resolutions**, click the **X** or **Delete** button next to it to remove it

To reset GPU scaling as well:

1. In **Settings > Display**, find **GPU Scaling**
2. Toggle it **Off** if you want the monitor to handle scaling, or set **Scaling Mode** back to **Full panel** for the default behavior

### Intel Graphics Command Center

1. Open **Intel Graphics Command Center** from the Start menu
2. Click **Display** in the left sidebar
3. Under **Resolution**, select your monitor's native resolution
4. Under **Refresh Rate**, select the default rate (usually 60Hz)
5. Under **Scale**, select **Default** or **Maintain display scaling**
6. Click **Apply**

On older Intel systems that use the legacy **Intel HD Graphics Control Panel**:

1. Open **Intel HD Graphics Control Panel** (right-click desktop or search in Start)
2. Click **Display**
3. Select your native resolution and default refresh rate
4. Click **Apply**

## Method 3: Reset Resolution Using Safe Mode (Windows)

If your screen is completely blank or unreadable after a resolution change — you cannot see anything well enough to navigate settings — booting into Safe Mode is your way out. Safe Mode loads Windows with a basic display driver at a low, universally supported resolution.

### How to enter Safe Mode

**If you can see the login screen:**

1. Hold **Shift** and click **Restart** from the power menu
2. After the reboot, go to **Troubleshoot > Advanced options > Startup Settings > Restart**
3. Press **4** or **F4** to boot into Safe Mode

**If you cannot see anything at all:**

1. Power off your computer by holding the power button for 10 seconds
2. Turn it on, and as soon as you see the manufacturer logo, hold the power button again to force it off
3. Repeat this three times — Windows will automatically enter **Windows Recovery Environment (WinRE)**
4. Go to **Troubleshoot > Advanced options > Startup Settings > Restart**
5. Press **4** or **F4** for Safe Mode

### Once you are in Safe Mode

1. Right-click the desktop and select **Display settings**
2. Set the resolution to your monitor's native resolution (or the highest available option)
3. Click **Apply** and **Keep changes**
4. Restart your computer normally

Windows will boot with the corrected resolution. If the resolution reverts after a normal restart, your graphics driver likely needs updating or reinstalling — see Method 6.

## Method 4: Reset Resolution via Command Line (Windows)

The command line is useful when you need to script a resolution change, fix a resolution remotely, or prefer not to navigate through menus.

### Using PowerShell

Windows does not have a single built-in command to change resolution, but you can use the **Set-DisplayResolution** cmdlet on Windows Server, or use a third-party utility called **QRes** on desktop versions.

**Using QRes (Windows 10/11):**

1. Download QRes from a trusted source
2. Open **Command Prompt** or **PowerShell** as Administrator
3. Run:

```
QRes.exe /x:1920 /y:1080
```

Replace `1920` and `1080` with your monitor's native resolution.

**Using PowerShell with .NET (no third-party tools):**

You can use a PowerShell script that calls the Windows API directly:

```powershell
Add-Type @"
using System;
using System.Runtime.InteropServices;

public class DisplaySettings {
    [DllImport("user32.dll")]
    public static extern int ChangeDisplaySettings(ref DEVMODE devMode, int flags);

    [StructLayout(LayoutKind.Sequential)]
    public struct DEVMODE {
        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 32)]
        public string dmDeviceName;
        public short dmSpecVersion;
        public short dmDriverVersion;
        public short dmSize;
        public short dmDriverExtra;
        public int dmFields;
        public int dmPositionX;
        public int dmPositionY;
        public int dmDisplayOrientation;
        public int dmDisplayFixedOutput;
        public short dmColor;
        public short dmDuplex;
        public short dmYResolution;
        public short dmTTOption;
        public short dmCollate;
        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 32)]
        public string dmFormName;
        public short dmLogPixels;
        public int dmBitsPerPel;
        public int dmPelsWidth;
        public int dmPelsHeight;
        public int dmDisplayFlags;
        public int dmDisplayFrequency;
    }
}
"@

$dm = New-Object DisplaySettings+DEVMODE
$dm.dmSize = [System.Runtime.InteropServices.Marshal]::SizeOf($dm)
$dm.dmPelsWidth = 1920
$dm.dmPelsHeight = 1080
$dm.dmFields = 0x180000
[DisplaySettings]::ChangeDisplaySettings([ref]$dm, 0)
```

Change `dmPelsWidth` and `dmPelsHeight` to your native resolution. This resets the resolution immediately without needing a confirmation dialog.

## Method 5: Reset NVRAM / Display Settings on Mac

macOS generally does a good job of managing resolution, but there are times when display settings get stuck — especially after connecting and disconnecting external monitors, or after a macOS update.

### Reset to Default for Display

1. Open **System Settings** (or **System Preferences** on older macOS)
2. Click **Displays**
3. Select **Default for display** — this sets the resolution to what Apple considers optimal for your screen
4. If you want to see all resolution options, hold **Option** and click **Scaled**

### Reset NVRAM (for persistent display issues)

NVRAM (Non-Volatile RAM) stores display settings like resolution, color depth, and startup disk. Resetting it can fix persistent display problems that survive reboots.

**On Intel Macs:**

1. Shut down your Mac
2. Turn it on and immediately hold **Option + Command + P + R**
3. Keep holding the keys for about 20 seconds (you may hear the startup chime twice)
4. Release the keys and let your Mac boot normally

**On Apple Silicon Macs (M1/M2/M3/M4):**

Apple Silicon Macs do not have a traditional NVRAM reset. Instead:

1. Shut down your Mac completely
2. Wait 30 seconds
3. Turn it on — macOS automatically resets display-related NVRAM during a fresh boot if it detects problems

If the resolution is still wrong after the reset, go back to **System Settings > Displays** and select **Default for display**.

### Reset display settings via Terminal

If you want to reset display-related preferences from the command line:

```
defaults delete com.apple.windowserver
defaults delete com.apple.preference.displays
```

Log out and back in (or restart) for the changes to take effect. This clears any custom display configurations and forces macOS to re-detect your display settings.

## Method 6: Reset Resolution on Linux with xrandr

On Linux, `xrandr` is the standard command-line tool for managing screen resolution. It works on most distributions that use X11 (Xorg).

### Check your current resolution and available options

```
xrandr
```

This outputs a list of connected displays and their supported resolutions. The one marked with a `*` is currently active. The one marked with a `+` is the preferred (native) resolution.

### Reset to the default (preferred) resolution

```
xrandr --output <display-name> --auto
```

Replace `<display-name>` with your display identifier (for example, `HDMI-1`, `DP-1`, `eDP-1`). The `--auto` flag tells xrandr to use the monitor's preferred resolution and refresh rate.

### Set a specific resolution manually

If `--auto` does not pick the right resolution:

```
xrandr --output HDMI-1 --mode 1920x1080 --rate 60
```

Replace the display name, resolution, and refresh rate with the correct values for your monitor.

### Reset when using Wayland

If your Linux distribution uses Wayland instead of X11 (the default on newer versions of Ubuntu, Fedora, and others), `xrandr` will not work. Use your desktop environment's display settings instead:

- **GNOME:** Open **Settings > Displays**, select your monitor, choose the correct resolution, and click **Apply**
- **KDE Plasma:** Open **System Settings > Display and Monitor > Display Configuration**, select the correct resolution, and click **Apply**

Or use the `gnome-randr` or `wlr-randr` tools for Wayland-native command-line control.

### Making the reset persistent

Changes made with `xrandr` are not permanent — they revert after a reboot. To make them persistent, add the xrandr command to your `~/.xprofile` or `~/.profile` file:

```
echo 'xrandr --output HDMI-1 --auto' >> ~/.xprofile
```

## When and Why You Need to Reset Screen Resolution

Here is a quick reference for common scenarios and the best reset method for each:

| Scenario | Best Reset Method | OS |
|---|---|---|
| Changed resolution and screen went blank | Safe Mode (Method 3) | Windows |
| Game changed resolution and did not revert | Display Settings (Method 1) | Windows |
| Set a custom resolution via GPU panel | GPU Control Panel (Method 2) | Windows |
| macOS shows wrong resolution after unplugging a monitor | Reset NVRAM (Method 5) | Mac |
| External monitor stuck at wrong resolution on Mac | Default for display (Method 5) | Mac |
| Resolution wrong after driver update | Display Settings or GPU Panel (Methods 1-2) | Windows |
| Linux resolution stuck after editing xorg.conf | xrandr --auto (Method 6) | Linux |
| Need to reset resolution remotely or via script | Command Line (Method 4 or 6) | Windows / Linux |

## What to Do If the Reset Does Not Work

If you have tried the methods above and your resolution is still wrong, work through these additional steps:

### 1. Update your graphics driver

An outdated or corrupted driver is the most common reason resolution options are missing or incorrect.

- **NVIDIA:** Download the latest driver from [nvidia.com/drivers](https://www.nvidia.com/Download/index.aspx). Run the installer and select **Clean installation** to replace all existing driver files
- **AMD:** Download the AMD Cleanup Utility from [amd.com/support](https://www.amd.com/en/support), run it, then install the latest driver
- **Intel:** Use the Intel Driver & Support Assistant at [intel.com/support](https://www.intel.com/content/www/us/en/support/detect.html)
- **Linux:** Run `sudo ubuntu-drivers autoinstall` (Ubuntu) or use your distribution's driver manager

### 2. Check your cable and port

Not all cables support all resolutions:

| Cable Type | Maximum Resolution | Notes |
|---|---|---|
| VGA | 2048 x 1536 | Analog, often produces soft image |
| HDMI 1.4 | 4K at 30Hz | For 4K at 60Hz, you need HDMI 2.0+ |
| HDMI 2.0 | 4K at 60Hz | Sufficient for most monitors |
| HDMI 2.1 | 8K at 60Hz / 4K at 120Hz | Needed for high refresh 4K |
| DisplayPort 1.2 | 4K at 60Hz | Common on desktop monitors |
| DisplayPort 1.4 | 4K at 120Hz / 8K at 60Hz | Best for high-end setups |
| USB-C / Thunderbolt | Varies | Depends on the adapter and host device |

If your cable does not support your native resolution, the OS will cap the available options at whatever the cable can handle. Try a different cable or port.

### 3. Reinstall the monitor driver

Windows sometimes uses a generic monitor driver that limits available resolutions.

1. Press **Win + X** and open **Device Manager**
2. Expand **Monitors**
3. Right-click your monitor and select **Uninstall device**
4. Restart your computer — Windows will reinstall the monitor driver automatically
5. After the restart, go to **Display settings** and check if the native resolution is now available

### 4. Check for multiple displays

If you recently disconnected a second monitor, Windows may still think it is connected. Go to **Display settings > Multiple displays** and make sure it is set to **Show only on 1** (or whichever display you are using). Phantom displays can lock your resolution to an incorrect value.

### 5. Use System Restore (Windows)

If the resolution problem started after a specific change and nothing else works:

1. Search for **Create a restore point** in the Start menu
2. Click **System Restore**
3. Select a restore point from before the problem started
4. Follow the wizard to restore your system

This reverts drivers, settings, and registry changes without affecting your personal files.

## Quick Checklist

Work through this list in order to reset your screen resolution to default:

1. Check your current resolution at [MyScreenResolution.com](/) and compare it to your monitor's native resolution
2. Open Display Settings and select the **(Recommended)** resolution
3. If you used a GPU control panel to set a custom resolution, reset it there too
4. If the screen is blank, boot into Safe Mode and reset from there
5. On Mac, select **Default for display** or reset NVRAM
6. On Linux, run `xrandr --output <display-name> --auto`
7. If nothing works, update your graphics driver, check your cable, and reinstall the monitor driver

For a detailed guide on identifying your current resolution across every platform and device, see [how to check your screen resolution on any device](/blog/how-to-check-screen-resolution).

## Conclusion

Resetting your screen resolution to default is straightforward in most cases. On Windows, selecting the **(Recommended)** resolution in Display Settings handles it instantly. On Mac, choosing **Default for display** or resetting NVRAM clears persistent issues. On Linux, `xrandr --auto` resets your output to its preferred resolution in one command. If none of those work, the problem is almost always a driver or cable issue, both of which are quick to fix. Start with the simple methods, and you should have your display back to normal within a few minutes.
