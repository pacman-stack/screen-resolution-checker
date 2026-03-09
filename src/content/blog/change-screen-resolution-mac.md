---
title: "How to Change Screen Resolution on Mac and MacBook"
description: "Step-by-step guide to changing screen resolution on any Mac or MacBook using System Settings, Terminal, Option key tricks, third-party tools, and external monitor configuration."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "Mac", "macOS", "MacBook", "Retina", "how-to", "display settings"]
---

## Check Your Current Resolution First

Before you change anything, find out what resolution your Mac is currently running. The fastest way is to visit [MyScreenResolution.com](/) — it instantly displays your resolution, viewport size, and device pixel ratio without downloading anything.

You can also check through macOS:

1. Click the **Apple menu** and select **System Settings**
2. Click **Displays**
3. Your current scaled resolution is shown under the selected display profile

Or use Terminal for the exact panel resolution:

```
system_profiler SPDisplaysDataType | grep Resolution
```

This returns something like `Resolution: 3024 x 1964 Retina`, which is the actual pixel count of your display. For a deeper look at what these numbers mean, read our guide on [how to check your screen resolution](/blog/how-to-check-screen-resolution).

## How Mac "Scaled" Resolutions Work

If you have used Windows, you know that changing resolution is straightforward — you pick a pixel count and the display switches to it. macOS handles things differently, and understanding this is key before you start making changes.

On a Retina Mac, the panel has a fixed native resolution (for example, 3024 x 1964 on a 14-inch MacBook Pro). macOS never actually changes the number of pixels your display outputs. Instead, it renders the interface at a different virtual resolution and then scales it to fit the panel. Apple calls these **"Looks like"** options.

When you select "Looks like 1920 x 1200" on that same MacBook Pro, macOS renders the UI as if the screen were 1920 x 1200 pixels and then upscales (or maps) the result to the full 3024 x 1964 panel. The result is that everything appears larger, but you still get Retina-quality sharpness because the physical pixels far outnumber the virtual ones.

| "Looks like" Setting | What Actually Happens | Effect |
|---|---|---|
| Larger Text | Renders at a lower virtual resolution, then scales up | UI elements are bigger, less screen space |
| Default | Renders at Apple's recommended virtual resolution | Best balance of sharpness and space |
| More Space | Renders at a higher virtual resolution, then scales down | UI elements are smaller, more screen space |

This is fundamentally different from what you might be used to on other platforms. For a full breakdown, see our article on [native resolution vs scaled resolution](/blog/native-resolution-vs-scaled-resolution).

## Change Resolution in System Settings

This is the standard method and works on every Mac running macOS Ventura (13) or later.

1. Click the **Apple menu** and select **System Settings**
2. Click **Displays** in the sidebar
3. You will see a row of resolution options labeled from **Larger Text** to **More Space**
4. Click the option you want
5. The display changes immediately — no confirmation dialog

On macOS Monterey (12) and earlier, go to **System Preferences > Displays** instead. The layout is slightly different — you will see radio buttons for **Default for display** and **Scaled**, followed by a list of resolutions — but the concept is the same.

### Which option should you pick?

- **Larger Text:** Good if you find the default text too small, especially on a 13-inch screen
- **Default:** Apple's recommended setting. Best balance of readability and workspace
- **More Space:** Gives you the most screen real estate. Ideal for multitasking, coding, or running multiple windows side by side

## Hold Option to See All Available Resolutions

The standard System Settings view only shows Apple's curated five options. If you want to see every resolution your Mac supports, there is a hidden trick:

1. Open **System Settings > Displays**
2. Hold the **Option** key on your keyboard
3. While holding Option, click on one of the resolution options

On macOS Ventura and later, this reveals a **Show all resolutions** toggle at the bottom of the Displays panel. Turn it on, and you will see a complete list of every resolution your display can accept, including non-Retina (1x) options and resolutions that Apple does not normally show.

On older macOS versions, holding **Option** while clicking the **Scaled** radio button shows the full resolution list directly.

This is useful when you need a very specific resolution for testing, screen recording, or compatibility with external projectors.

## Change Resolution on an External Monitor

When you connect an external monitor, macOS treats it as a separate display with its own resolution settings.

1. Connect your external monitor via HDMI, USB-C, Thunderbolt, or DisplayPort
2. Open **System Settings > Displays**
3. Click on the external monitor in the display list (or click its preview at the top)
4. Choose a resolution from the available options

### Tips for external monitors

- If you are connecting a 4K monitor, make sure your cable supports the resolution. USB-C and Thunderbolt handle 4K at 60Hz natively. HDMI needs to be version 2.0 or higher.
- Some monitors show limited resolution options until you update the display firmware or use a better cable.
- If your external monitor looks blurry, check that macOS is not duplicating your built-in display (which forces the external monitor to match the laptop's resolution). Set the arrangement to **Extend** instead.
- Use the **Option key trick** described above to see all resolutions the external monitor supports.

### Recommended resolutions for common external monitor sizes

| Monitor Size | Panel Resolution | Best "Looks like" Setting |
|---|---|---|
| 24-inch 4K | 3840 x 2160 | Looks like 1920 x 1080 (perfect 2x Retina) |
| 27-inch 4K | 3840 x 2160 | Looks like 1920 x 1080 or 2560 x 1440 |
| 27-inch 5K | 5120 x 2880 | Looks like 2560 x 1440 (perfect 2x Retina) |
| 32-inch 4K | 3840 x 2160 | Looks like 2560 x 1440 |
| Ultrawide 34-inch | 3440 x 1440 | Looks like 3440 x 1440 (1x, non-Retina) |

## Change Resolution Using Terminal

Terminal gives you a way to check and, with the right tools, change your resolution without opening System Settings.

### Check your current resolution

```
system_profiler SPDisplaysDataType
```

This prints detailed information about every connected display, including the resolution, pixel depth, and whether it is running in Retina mode.

To get just the resolution line:

```
system_profiler SPDisplaysDataType | grep Resolution
```

### Change resolution with displayplacer

macOS does not have a built-in Terminal command to change the display resolution. However, the free open-source tool **displayplacer** fills this gap.

Install it with Homebrew:

```
brew tap jakehilborn/jakehilborn
brew install displayplacer
```

List your current display configuration:

```
displayplacer list
```

This outputs every connected display with its current resolution, refresh rate, and a ready-to-use command. To change the resolution, use the command it provides as a template:

```
displayplacer "id:<display_id> res:2560x1440 hz:60 color_depth:8 enabled:true scaling:on origin:(0,0)"
```

Replace the values with your desired settings. You can also use displayplacer to set resolution, arrangement, and rotation for multiple monitors in a single command, which makes it excellent for scripting or automating desk setups.

## Third-Party Resolution Tools

If you want a GUI with more control than System Settings provides, two tools stand out.

### SwitchResX

SwitchResX is the most established resolution management utility for macOS. It has been around for decades and supports features that no other tool matches:

- Create and save custom resolutions that macOS does not list
- Set resolution profiles that activate automatically based on which app is in the foreground
- Define per-app resolution overrides
- Schedule resolution changes
- Access resolutions for all connected displays from the menu bar

SwitchResX is a paid app with a free trial. It requires a System Extension to function, which means you need to allow it in **System Settings > Privacy & Security**.

### RDM (Retina Display Menu)

RDM is a free, lightweight menu bar app that lets you switch between all available resolutions with a single click. It is especially useful for developers who need to test at specific non-Retina resolutions.

Install it with Homebrew:

```
brew install --cask rdm
```

Once installed, RDM adds an icon to your menu bar. Click it to see a list of every resolution your display supports, including HiDPI (Retina) and non-HiDPI variants. Click any resolution to switch instantly.

RDM is simpler than SwitchResX — it does not support custom resolutions or app-specific profiles — but it is free and does the job well for quick switching.

## Retina Scaling Explained

Retina is Apple's marketing name for displays with a device pixel ratio (DPR) of 2x or higher. Understanding how this works helps you make better resolution decisions.

On a Retina display, macOS uses multiple physical pixels to render each "point" in the interface. On a 2x Retina display, every point uses a 2x2 block of 4 physical pixels. This is why text and UI elements look so sharp — there are four times as many pixels doing the work compared to a standard (1x) display.

| Mac Model | Native Panel Resolution | Default "Looks like" | DPR |
|---|---|---|---|
| MacBook Air 13" (M2/M3) | 2560 x 1664 | 1280 x 832 | 2x |
| MacBook Air 15" (M2/M3) | 2880 x 1864 | 1440 x 932 | 2x |
| MacBook Pro 14" (M3/M4) | 3024 x 1964 | 1512 x 982 | 2x |
| MacBook Pro 16" (M3/M4) | 3456 x 2234 | 1728 x 1117 | 2x |
| iMac 24" (M3/M4) | 4480 x 2520 | 2240 x 1260 | 2x |
| Apple Studio Display | 5120 x 2880 | 2560 x 1440 | 2x |
| Pro Display XDR | 6016 x 3384 | 3008 x 1692 | 2x |

When you select a "Looks like" option that does not divide evenly into the native resolution (for example, "Looks like 1680 x 1050" on a 3024 x 1964 panel), macOS renders at 3360 x 2100 and then downscales to 3024 x 1964. This is still sharp, but it can use slightly more GPU resources than a clean 2x mapping. You can quickly verify your current DPR and effective resolution by visiting [MyScreenResolution.com](/).

## Common Issues and Fixes

### Resolution looks blurry after changing it

You are most likely running a non-Retina (1x) resolution. macOS renders these without the extra pixel density, making everything look fuzzy on a Retina panel. Switch back to a HiDPI option — any resolution shown as Retina or with the lightning bolt icon in RDM.

### External monitor text is too small or too large

Adjust the "Looks like" resolution for that specific monitor in **System Settings > Displays**. A 4K monitor at "Looks like 3840 x 2160" will make everything tiny. Set it to "Looks like 1920 x 1080" for comfortable 2x Retina scaling.

### Resolution resets after restart

This can happen with certain external monitors or docking stations. Try these fixes:

1. Disconnect and reconnect the monitor
2. Reset NVRAM: shut down, then turn on and immediately hold **Option + Command + P + R** for 20 seconds (Intel Macs only — Apple Silicon Macs do not have NVRAM reset)
3. Delete the display configuration plist:
   ```
   sudo rm /Library/Preferences/com.apple.windowserver.displays.plist
   ```
   Then restart your Mac
4. Update macOS to the latest version — Apple regularly fixes display compatibility issues

### "Looks like" options are missing or limited

If you see fewer scaling options than expected:

- Make sure you are clicking the correct display in the settings panel
- Use the **Option key trick** to reveal all resolutions
- Check that your monitor's cable supports the resolution — a lower-bandwidth cable can restrict the options macOS shows
- Try a different port or cable

### Screen flickers when changing resolution

Brief flickering during a resolution change is normal — the display is re-syncing. If it persists:

- Try a different cable or port
- Update macOS
- If using a third-party tool, uninstall it and test with System Settings alone to isolate the issue

## Best Resolution Settings for Different Mac Models

Choosing the right "Looks like" resolution depends on your screen size, your eyesight, and what you use your Mac for. Here are practical recommendations.

| Mac Model | Best for Readability | Best for More Space | Best for Developers |
|---|---|---|---|
| MacBook Air 13" | Default (1280 x 832) | 1440 x 900 | 1680 x 1050 |
| MacBook Air 15" | Default (1440 x 932) | 1680 x 1050 | 1680 x 1050 |
| MacBook Pro 14" | Default (1512 x 982) | 1800 x 1169 | 1800 x 1169 |
| MacBook Pro 16" | Default (1728 x 1117) | 2056 x 1329 | 2056 x 1329 |
| iMac 24" | Default (2240 x 1260) | 2560 x 1440 | 2560 x 1440 |
| Mac Mini + 4K Monitor | 1920 x 1080 | 2560 x 1440 | 2560 x 1440 |
| Mac Studio + 5K Display | 2560 x 1440 | 2880 x 1620 | 2880 x 1620 |

A few tips:

- **For coding and design work**, prioritize more screen space. The extra room for editor panels, inspectors, and terminal windows is worth the slightly smaller text.
- **For reading and writing**, stick with the default or one step toward "Larger Text." Extended time at small text sizes causes eye strain.
- **For presentations and screen sharing**, use the default resolution. It is the setting that looks best to viewers and avoids scaling artifacts in screen recordings.

## Conclusion

Changing screen resolution on a Mac is straightforward once you understand that macOS uses scaled rendering rather than true resolution switching. System Settings handles most needs, the Option key unlocks the full resolution list, and tools like displayplacer, RDM, and SwitchResX cover advanced use cases. Stick with a Retina-compatible "Looks like" option for the sharpest image, use the "More Space" setting when you need extra screen real estate, and visit [MyScreenResolution.com](/) to quickly verify what your display is actually running.
