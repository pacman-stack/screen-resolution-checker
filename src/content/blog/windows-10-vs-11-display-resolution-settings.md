---
title: "Windows 10 vs Windows 11 Display Resolution Settings: What Changed?"
description: "A detailed side-by-side comparison of display resolution settings in Windows 10 and Windows 11 — covering how to change resolution, scaling, HDR, multi-monitor setup, refresh rate, Night Light, and common issues in each version."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "Windows 10", "Windows 11", "display settings", "HDR", "multi-monitor", "scaling"]
---

## Why the Display Settings Comparison Matters

Microsoft redesigned the Settings app for Windows 11, and Display Settings got a significant overhaul in the process. If you recently upgraded from Windows 10 to Windows 11 — or if you manage machines running both — you have probably noticed that things look different and some options have moved.

This guide walks through every major difference in display resolution settings between Windows 10 and Windows 11, so you know exactly where to find what you need on either version. Before diving in, you can quickly verify what resolution your display is currently running by visiting [MyScreenResolution.com](/) — it works on both Windows 10 and Windows 11 in any browser.

## Side-by-Side: The Display Settings UI

The first thing you will notice is the visual redesign. Here is how the two interfaces compare at a glance:

| Feature | Windows 10 | Windows 11 |
|---|---|---|
| **How to open** | Right-click desktop > Display settings | Right-click desktop > Display settings |
| **UI design** | Flat, compact layout | Rounded corners, card-based layout with more spacing |
| **Monitor diagram** | Numbered rectangles at the top | Numbered rectangles at the top (similar) |
| **Resolution dropdown** | Under "Display resolution" | Under "Display resolution" (same label) |
| **Scaling options** | Dropdown with preset percentages | Dropdown with presets + separate custom scaling field |
| **Advanced display link** | "Advanced display settings" link at the bottom | "Advanced display" link within the settings page |

The path to get to display settings is the same: right-click on the desktop and select **Display settings**. You can also press **Win + I** to open Settings, then go to **System > Display** on both versions. The core layout is similar, but Windows 11 spaces things out more and groups related options into collapsible cards.

## How to Change Resolution in Each Version

### Windows 10

1. Right-click the desktop and select **Display settings**
2. Scroll down to the **Display resolution** dropdown
3. Select your desired resolution
4. Click **Keep changes** within 15 seconds to confirm

### Windows 11

1. Right-click the desktop and select **Display settings**
2. Scroll down to the **Display resolution** dropdown
3. Select your desired resolution
4. Click **Keep changes** within 15 seconds to confirm

The process is functionally identical. The dropdown shows the same list of supported resolutions, and the **(Recommended)** label still marks your monitor's native resolution. If you need a step-by-step walkthrough for Windows 11 specifically, see our full guide on [how to change screen resolution in Windows 11](/blog/change-screen-resolution-windows-11).

The one difference: Windows 11 sometimes shows a confirmation dialog with a slightly longer animation. It is cosmetic only and does not affect the result.

## Scaling Options: Where Windows 11 Pulls Ahead

Display scaling is where the two versions start to diverge meaningfully.

### Windows 10 Scaling

- **Preset scales:** 100%, 125%, 150%, 175%, 200% (varies by display)
- **Custom scaling:** Available under **Advanced scaling settings**, where you type a percentage between 100% and 500%
- **Fix scaling for apps:** A toggle to let Windows try to fix apps that look blurry after scaling changes

### Windows 11 Scaling

- **Preset scales:** Same options as Windows 10
- **Custom scaling:** Available directly under **Scale & layout** — click the **Scale** field and type your custom value
- **Dynamic Scaling (newer builds):** Windows 11 24H2 and later can automatically adjust scaling when you dock/undock a laptop to an external monitor
- **Per-app scaling improvements:** Windows 11 handles DPI-unaware apps better out of the box, resulting in fewer blurry windows

| Scaling Feature | Windows 10 | Windows 11 |
|---|---|---|
| Preset percentages | Yes | Yes |
| Custom percentage | Yes (buried in advanced settings) | Yes (directly in Display settings) |
| Per-monitor DPI | Yes | Yes (improved) |
| Dynamic scaling on dock/undock | No | Yes (24H2+) |
| Blurry app auto-fix | Toggle available | Improved and on by default |

If you frequently move a laptop between its built-in screen and external monitors, Windows 11 handles the scaling transitions more smoothly. Windows 10 sometimes requires you to sign out and back in for scaling changes to take effect across all apps.

## HDR Settings: A Major Upgrade in Windows 11

HDR support is one area where Windows 11 made substantial improvements over Windows 10.

### Windows 10 HDR

- **Toggle:** Under Display settings, there is a simple **Play HDR games and apps** toggle
- **HDR calibration:** Very limited — essentially on or off
- **SDR content brightness:** A single slider to adjust brightness of non-HDR content when HDR is enabled
- **Known issues:** HDR in Windows 10 was widely criticized for washed-out colors and inconsistent behavior

### Windows 11 HDR

- **Toggle:** Under Display settings, click **HDR** to open a dedicated HDR page
- **HDR certification display:** Shows whether your monitor is HDR-certified and at what level
- **Auto HDR:** Automatically applies HDR to DirectX 11 and DirectX 12 games that were not built for HDR
- **HDR calibration app:** A built-in Windows HDR Calibration app (available from the Microsoft Store) that walks you through calibrating your specific display
- **SDR content brightness:** Same slider, but with better default behavior
- **Streaming HDR video:** Separate toggle for HDR video playback in supported apps

| HDR Feature | Windows 10 | Windows 11 |
|---|---|---|
| Basic HDR toggle | Yes | Yes |
| Auto HDR for games | No | Yes |
| HDR Calibration app | No | Yes |
| HDR certification info | No | Yes |
| Streaming HDR toggle | Limited | Yes |
| Overall HDR quality | Inconsistent | Significantly improved |

If HDR matters to you, Windows 11 is the better experience by a wide margin. Auto HDR alone is a reason many gamers upgraded.

## Multi-Monitor Handling

Both versions support multiple monitors, but Windows 11 adds a few features that make multi-monitor setups easier to manage.

### Windows 10 Multi-Monitor

- Drag and arrange monitors in the display diagram at the top of Display settings
- Set each monitor's resolution, scaling, and orientation independently
- Choose **Duplicate**, **Extend**, or show on a single display via **Win + P**
- Taskbar shows on all monitors (optional)

### Windows 11 Multi-Monitor

- Same drag-and-arrange diagram
- Same per-monitor resolution, scaling, and orientation controls
- Same **Win + P** shortcut
- **Remember window locations:** Windows 11 remembers where your app windows were when you reconnect a monitor, so everything goes back to where it was
- **Ease of display arrangement:** The identify feature and alignment snapping between monitors is slightly improved
- **Taskbar behavior:** The multi-monitor taskbar has different options — you can show the taskbar on all monitors or only the main one, and choose whether to show all app icons or only the apps open on that monitor

| Multi-Monitor Feature | Windows 10 | Windows 11 |
|---|---|---|
| Extend / Duplicate / Single | Yes | Yes |
| Per-monitor resolution | Yes | Yes |
| Per-monitor scaling | Yes | Yes |
| Remember window positions | No | Yes |
| Snap Layouts across monitors | No | Yes |
| Multi-monitor taskbar customization | Basic | More options |

The window position memory is genuinely useful if you frequently plug and unplug external displays. On Windows 10, disconnecting a monitor scatters your windows onto the remaining display, and reconnecting does not restore them.

## Refresh Rate Settings Location

Finding the refresh rate setting is one of the most-asked questions when switching between Windows 10 and Windows 11.

### Windows 10

1. Go to **Display settings**
2. Click **Advanced display settings** at the bottom
3. Click **Display adapter properties for Display X**
4. In the properties window, click the **Monitor** tab
5. Select your refresh rate from the dropdown

That is three layers deep from the display settings page. Not great.

### Windows 11

1. Go to **Display settings**
2. Click **Advanced display**
3. Your refresh rate is shown right there — select it from the **Choose a refresh rate** dropdown

Windows 11 also adds a **Dynamic refresh rate (DRR)** option on supported hardware. DRR lets the display switch between a lower refresh rate (e.g., 60Hz) for static content like reading and a higher rate (e.g., 120Hz) for smooth scrolling, inking, and cursor movement. This saves battery on laptops with high-refresh-rate screens.

| Refresh Rate | Windows 10 | Windows 11 |
|---|---|---|
| Where to find it | 3 layers deep in adapter properties | 1 click from Advanced display |
| Dynamic refresh rate | No | Yes (supported hardware) |
| Visibility of current rate | Hidden | Shown on the Advanced display page |

## Night Light and Color Temperature

Both Windows 10 and Windows 11 include Night Light, a feature that reduces blue light by warming the color temperature of your screen.

### Windows 10 Night Light

- Toggle on/off from Display settings or the Action Center quick tile
- Set strength (intensity of the warm color shift)
- Schedule: Sunset to sunrise, or custom hours

### Windows 11 Night Light

- Toggle from Display settings or the Quick Settings panel (replaces Action Center)
- Same strength slider
- Same scheduling options
- Slightly better integration with the new Quick Settings flyout — easier to toggle quickly

The functionality is the same. Microsoft did not add new Night Light features in Windows 11. The only difference is where you access the quick toggle: in Windows 10 it is in the Action Center (notification panel), while in Windows 11 it is in the Quick Settings flyout that appears when you click the network/volume/battery icons in the system tray.

## What Changed and What Stayed the Same

### What stayed the same

- The path to display settings (right-click desktop > Display settings)
- The resolution dropdown with a (Recommended) label for native resolution
- Per-monitor resolution and scaling
- Extend/Duplicate/Single display options via Win + P
- Night Light functionality
- The 15-second revert timer after changing resolution
- GPU control panels (NVIDIA, AMD, Intel) work the same way on both

### What changed

- **UI layout:** Redesigned with rounded corners, cards, and more spacing in Windows 11
- **Scaling:** Custom scaling is easier to access, and dynamic scaling was added for dock/undock scenarios
- **HDR:** Massively improved with Auto HDR, calibration tools, and certification info
- **Refresh rate:** Much easier to find and change, plus Dynamic Refresh Rate support
- **Multi-monitor:** Window position memory and better Snap Layouts across screens
- **Advanced display page:** Shows more information at a glance, including refresh rate, color format, color space, and bit depth

## Which Is Better for Display Management?

Windows 11 is the better operating system for display management, particularly if you:

- Use HDR content or games
- Have a high-refresh-rate monitor (especially on a laptop)
- Work with multiple monitors that you connect and disconnect regularly
- Want scaling to "just work" without manual adjustment

Windows 10 is still perfectly functional for basic resolution and scaling tasks. If you are running a single monitor at a fixed resolution without HDR, you will not notice a practical difference in day-to-day use. The underlying display pipeline handles resolution the same way on both.

To check what resolution your system is currently running regardless of Windows version, visit [MyScreenResolution.com](/) or follow our guide on [how to check your screen resolution](/blog/how-to-check-screen-resolution).

## Common Issues Unique to Each Version

### Windows 10 Issues

- **HDR looks washed out:** This was a persistent complaint throughout Windows 10's lifecycle. The SDR brightness slider helps, but HDR on Windows 10 never felt polished. Upgrading to Windows 11 is the most reliable fix.
- **Scaling breaks older apps:** Some legacy apps ignore DPI settings and render at 100% regardless. The "Fix scaling for apps" toggle helps but does not work for every app.
- **Refresh rate is hard to find:** Many users never discovered the refresh rate setting because it is buried inside adapter properties.
- **Resolution resets after sleep:** Some driver combinations on Windows 10 cause the resolution to reset to a lower value after the PC wakes from sleep. Updating the GPU driver usually fixes this.

### Windows 11 Issues

- **Resolution changes after undocking:** On some laptop models, Windows 11 occasionally sets an incorrect resolution when a laptop is undocked from an external monitor. Re-opening Display settings and reselecting the recommended resolution fixes it.
- **Scaling glitches with Remote Desktop:** Remote desktop sessions on Windows 11 can sometimes apply the wrong scaling, making everything appear too large or too small. Setting the remote session to match the local scaling helps.
- **HDR toggle resets after reboot:** A small number of users report that the HDR toggle turns itself off after restarting. This is typically a driver issue — updating to the latest GPU driver resolves it.
- **Night Light conflicts with HDR:** Enabling both Night Light and HDR at the same time can produce odd color results. Microsoft recommends disabling Night Light when using HDR content.
- **Snap Layouts resize windows unexpectedly on multi-monitor:** When monitors have different resolutions or scaling levels, snapping a window from one screen to another can sometimes resize it oddly. Keeping scaling percentages close (e.g., both at 100% or both at 150%) minimizes this.

## Conclusion

The core display resolution controls work the same way on Windows 10 and Windows 11 — right-click the desktop, open Display settings, pick your resolution. Where Windows 11 pulls ahead is in the details: HDR is substantially better, refresh rate settings are easier to find, multi-monitor memory saves you from rearranging windows every time you dock a laptop, and scaling transitions are smoother. If you are still on Windows 10 and display quality matters to your workflow, the upgrade is worth it for the HDR and refresh rate improvements alone. For a quick check of your current resolution on either version, visit [MyScreenResolution.com](/).
