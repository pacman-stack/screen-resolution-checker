---
title: "How to Check and Change Resolution on Fire TV Stick"
description: "Complete guide to Fire TV Stick resolution settings. Learn how to check your current resolution, switch between 720p, 1080p, and 4K, configure HDR and Dolby Vision, match frame rates, and fix common display issues like being stuck at 720p or missing 4K options."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["Fire TV Stick", "screen resolution", "4K", "1080p", "HDR", "Dolby Vision", "streaming", "Amazon Fire TV", "display settings"]
---

## Which Fire TV Stick Do You Have?

Not every Fire TV Stick can output the same resolution. Before you change anything, you need to know what your hardware actually supports.

| Fire TV Stick Model | Max Resolution | HDR Support | Dolby Vision | Wi-Fi |
|---|---|---|---|---|
| **Fire TV Stick Lite** | 1080p (1920 x 1080) | HDR10, HDR10+, HLG | No | Wi-Fi 5 (dual-band) |
| **Fire TV Stick (3rd Gen)** | 1080p (1920 x 1080) | HDR10, HDR10+, HLG | No | Wi-Fi 5 (dual-band) |
| **Fire TV Stick 4K** | 4K (3840 x 2160) | HDR10, HDR10+, HLG | Yes | Wi-Fi 6 (dual-band) |
| **Fire TV Stick 4K Max** | 4K (3840 x 2160) | HDR10, HDR10+, HLG | Yes | Wi-Fi 6E (tri-band) |

If you have the Lite or standard (non-4K) model, 1080p is as high as it goes. No settings change will give you 4K output on hardware that does not support it. The 4K and 4K Max models can output up to 2160p, but only if your TV and HDMI cable also support it.

Want to quickly check what resolution your display is running right now? Visit [MyScreenResolution.com](/) for an instant readout.

## How to Check Your Current Resolution

Before changing your Fire TV Stick resolution settings, see what it is currently outputting.

1. From the **Home Screen**, navigate to **Settings** (the gear icon on the far right)
2. Select **Display & Sounds**
3. Select **Display**
4. Look at the **Resolution** field — it will show the current output (e.g., 1080p 60Hz, 2160p 60Hz)

You will also see information about the color depth and HDR status on this screen. If it says "Auto" next to the resolution, the Fire TV Stick is choosing the resolution based on what your TV reports it can handle.

### Using the Display Info Overlay

There is a faster way if you just want a quick check:

1. Go to **Settings** > **Display & Sounds** > **Display**
2. Look at the summary line at the top — it shows the active resolution and refresh rate

If the resolution shown is lower than what you expected (for example, 720p instead of 1080p), something is limiting the output. Keep reading to find out how to fix that.

## How to Change Resolution on Fire TV Stick

Here is the step-by-step process for manually setting your Fire TV Stick resolution:

1. Go to **Settings** > **Display & Sounds** > **Display**
2. Select **Resolution**
3. You will see the available options, which typically include:
   - **Auto (recommended)** — lets Fire TV detect the best resolution for your TV
   - **720p (60Hz)**
   - **1080p (60Hz)**
   - **2160p (30Hz)** — 4K models only
   - **2160p (60Hz)** — 4K models only
4. Select the resolution you want
5. A confirmation dialog appears asking if the display looks correct — select **Yes** within 15 seconds, or it reverts automatically

That 15-second revert timer is a safety net. If you pick a resolution your TV cannot actually display, you will get a black screen, but the Fire TV Stick will switch back to the previous working resolution after the timer expires. You do not need to worry about getting permanently stuck.

## Automatic vs. Manual Resolution

The Fire TV Stick defaults to **Auto** resolution, and for most people, this is the right choice. Here is what each mode actually does:

### Auto Mode

- Detects your TV's capabilities via EDID (Extended Display Identification Data) over HDMI
- Selects the highest resolution and refresh rate your TV supports
- Adjusts automatically if you move the stick to a different TV

### Manual Mode

You might want to override Auto if:

- Auto is choosing a lower resolution than your TV supports (common with older TVs or faulty EDID data)
- You want to force 4K output even though the TV is reporting limited capabilities
- You are experiencing flickering or handshake issues and want to lock in a stable resolution
- You are using an AV receiver or HDMI switch that misreports supported resolutions

| Scenario | Recommended Setting |
|---|---|
| Fire TV Stick plugged directly into a 4K TV | Auto |
| Using an HDMI splitter or AV receiver | Manual — set to the resolution your TV supports |
| TV is showing 720p when it supports 1080p | Manual — set to 1080p 60Hz |
| Experiencing flickering or black screens | Manual — try stepping down one resolution level |

## Best Fire TV Stick Resolution Settings for Your TV

The right settings depend on what TV you are pairing the Fire TV Stick with. Here is what to use for the most common setups.

### 1080p (Full HD) TV

If your TV is 1080p, the panel has 1,920 x 1,080 pixels. That is the ceiling. If you are unsure about resolution terms, our guide on [what 1080p, 1440p, and 4K actually mean](/blog/what-does-1080p-1440p-4k-mean) breaks it all down.

- **Resolution:** 1080p 60Hz
- **Color depth:** 8-bit (standard)
- **HDR:** Disabled (1080p TVs typically do not support HDR)
- **Match original frame rate:** On (reduces judder in movies)

Even if you have a Fire TV Stick 4K, it will output 1080p to a 1080p TV. Setting it to Auto handles this correctly.

### 4K (UHD) TV

If your TV supports 4K, you want to take full advantage of it:

- **Resolution:** 2160p 60Hz (or Auto)
- **Color depth:** 10-bit or 12-bit (if your TV supports it)
- **HDR:** Enabled (if supported — see HDR section below)
- **Match original frame rate:** On

Make sure your HDMI port supports HDMI 2.0 or higher. Some 4K TVs have a mix of HDMI 2.0 and HDMI 1.4 ports — if the stick is plugged into an HDMI 1.4 port, it will be limited to 4K at 30Hz or 1080p at 60Hz.

### 4K TV with Dolby Vision

If you have a Dolby Vision-capable TV and a Fire TV Stick 4K or 4K Max:

- **Resolution:** 2160p 60Hz
- **Color depth:** 12-bit
- **HDR:** Always HDR or Adaptive
- **Dolby Vision:** Enabled in display settings

This gets you the best possible picture quality for Dolby Vision content on Netflix, Disney+, Apple TV+, and other supported apps.

## HDR and Dolby Vision Settings

HDR (High Dynamic Range) gives you brighter highlights, deeper blacks, and a wider color range. But the Fire TV Stick gives you several ways to handle it, and the wrong setting can make your picture look washed out.

### HDR Mode Options

Go to **Settings** > **Display & Sounds** > **Display** > **HDR Mode** to find these options:

| HDR Mode | What It Does | Best For |
|---|---|---|
| **Always HDR** | Forces HDR output for all content, including SDR | TVs with strong HDR tone mapping that handle SDR-to-HDR conversion well |
| **Adaptive** | Switches between SDR and HDR based on the content playing | Most users — avoids washed-out SDR content |
| **Off** | Disables HDR entirely | Troubleshooting, or TVs with poor HDR support |

**Adaptive** is the safest choice for most people. "Always HDR" can make non-HDR content (like regular TV shows or older movies) look oddly dim or washed out because the TV stays in HDR mode and has to convert the SDR signal.

### Enabling Dolby Vision

Dolby Vision is only available on the Fire TV Stick 4K and 4K Max. To enable it:

1. Go to **Settings** > **Display & Sounds** > **Display**
2. Scroll to **Dolby Vision**
3. Toggle it **On**

Your TV must support Dolby Vision for this option to appear. If you do not see it, your TV or your Fire TV Stick model does not support it.

### Color Depth Settings

Under **Display** settings, you can also adjust color depth:

- **8-bit** — standard for SDR content (16.7 million colors)
- **10-bit** — required for HDR10 (1.07 billion colors)
- **12-bit** — used by Dolby Vision (68.7 billion colors)

Set this to the highest value your TV supports. If you experience flickering or color banding after increasing the color depth, your HDMI cable may not have enough bandwidth — try a certified Premium High Speed or Ultra High Speed HDMI cable.

## Match Original Frame Rate Settings

Movies are typically shot at 24fps (frames per second), while TV shows and sports are 30fps or 60fps. By default, the Fire TV Stick outputs everything at 60Hz regardless of the source content's frame rate. This causes a problem called **telecine judder** — a subtle stuttering effect during slow panning shots in movies.

### How to Enable Frame Rate Matching

1. Go to **Settings** > **Display & Sounds** > **Display**
2. Select **Match Original Frame Rate**
3. Choose **On**

When enabled, the Fire TV Stick will switch the HDMI output to match the content's native frame rate (24Hz for movies, 30Hz for some shows, 60Hz for sports). Your screen may briefly go black during the switch — this is normal.

| Setting | Behavior | Downside |
|---|---|---|
| **Off** | Always outputs at 60Hz | Judder on 24fps movie content |
| **On** | Switches output to match source frame rate | Brief black screen when switching between content types |

For movie watching, turning this on makes a noticeable difference in motion smoothness. For sports and casual browsing, it matters less since that content is already 60fps or close to it.

## Common Fire TV Stick Resolution Issues

### Stuck at 720p

This is the most common complaint. Your Fire TV Stick should be outputting 1080p or 4K, but it is stuck at 720p. Here is what causes it and how to fix it:

**1. Bad HDMI handshake**
- Unplug the Fire TV Stick from the TV's HDMI port
- Wait 30 seconds
- Plug it back in
- If that does not work, try a different HDMI port on the TV

**2. Faulty or low-quality HDMI cable/extender**
- If you are using the HDMI extender that came in the box, try plugging the stick directly into the TV
- If you are using a third-party HDMI cable or adapter, replace it with one that supports HDMI 2.0 (for 4K) or HDMI 1.4 (for 1080p)

**3. Auto resolution detecting incorrectly**
- Go to **Settings** > **Display & Sounds** > **Display** > **Resolution**
- Switch from Auto to **1080p 60Hz** (or 2160p 60Hz for 4K models) manually

**4. Software glitch**
- Restart the Fire TV Stick: go to **Settings** > **My Fire TV** > **Restart**
- Or hold the **Select** and **Play/Pause** buttons simultaneously for about 5 seconds

### No 4K Option Available

If you have a Fire TV Stick 4K or 4K Max but do not see 2160p as an option:

- **Check your TV** — it must be a 4K TV. A 1080p TV will not show 4K options
- **Check the HDMI port** — use a port labeled HDMI 2.0 or higher. HDMI 1.4 ports on some TVs limit output to 1080p
- **Check your HDMI cable** — if using an extension cable or running through a receiver, it must support HDMI 2.0 bandwidth (18 Gbps minimum)
- **Enable enhanced HDMI on your TV** — many TVs require you to enable "HDMI Enhanced," "Input Signal Plus," "HDMI ULTRA HD Deep Color," or a similar setting for that specific port. See our guide on [how to change resolution on smart TVs](/blog/change-resolution-smart-tv) for brand-specific instructions

### Flickering or Blinking Screen

Flickering usually means the resolution or refresh rate you selected exceeds what your TV or HDMI connection can reliably handle.

- Step down the resolution one level (e.g., try 2160p 30Hz instead of 2160p 60Hz)
- Reduce color depth from 12-bit to 10-bit, or from 10-bit to 8-bit
- Disable HDR temporarily to see if the flickering stops
- Replace your HDMI cable with a certified Premium High Speed HDMI cable
- Try a different HDMI port

### Picture Does Not Fill the Screen

If you see black bars around the edges (overscan), or the picture extends beyond the screen edges (underscan):

1. Go to **Settings** > **Display & Sounds** > **Display**
2. Select **Calibrate Display**
3. Follow the on-screen instructions to adjust the display boundaries until the arrows align with the edges of your screen

This adjusts the Fire TV Stick's output area to match your TV's actual viewable area. Most modern TVs handle this automatically, but some older models or certain HDMI connections may need manual calibration.

### Audio but No Picture After Changing Resolution

If you changed the resolution and got a black screen but can still hear audio:

1. Wait 15 seconds — the Fire TV Stick should automatically revert to the previous resolution
2. If it does not revert, press and hold the **Back** button and the **Menu** button on the remote simultaneously to cycle through available resolutions
3. As a last resort, perform a factory reset by holding the **Back** button and the right side of the navigation ring for 10 seconds

## Troubleshooting Checklist

If you have tried the fixes above and still have resolution problems, run through this checklist:

| Step | Action | Why |
|---|---|---|
| 1 | Restart Fire TV Stick (Settings > My Fire TV > Restart) | Clears temporary glitches and forces a fresh HDMI handshake |
| 2 | Try a different HDMI port on your TV | Some ports support higher resolutions than others |
| 3 | Remove HDMI extenders, splitters, or AV receivers from the chain | These devices can limit bandwidth and resolution |
| 4 | Replace the HDMI cable with a certified Premium High Speed cable | Cheap cables often cannot sustain 4K 60Hz or HDR signals |
| 5 | Enable enhanced HDMI mode on your TV for that port | Required for 4K, HDR, and Dolby Vision on most TV brands |
| 6 | Manually set resolution instead of using Auto | Bypasses EDID detection issues |
| 7 | Check for Fire TV software updates (Settings > My Fire TV > About > Check for Updates) | Updates often fix display compatibility issues |
| 8 | Factory reset the Fire TV Stick (Settings > My Fire TV > Reset to Factory Defaults) | Nuclear option — erases all settings and apps |

Work through these in order. Most resolution issues are solved by steps 1 through 4.

To confirm what resolution your display is actually rendering after making changes, you can always visit [MyScreenResolution.com](/) from any browser on the same screen.

## Conclusion

Getting the right Fire TV Stick resolution settings comes down to three things: knowing your hardware limits (Lite and standard max out at 1080p, 4K and 4K Max go up to 2160p), making sure your HDMI connection supports the resolution you want, and choosing between Auto and manual mode based on whether Auto is detecting your TV correctly. For most setups, leaving resolution on Auto, enabling Match Original Frame Rate, and setting HDR to Adaptive gives you the best balance of picture quality and compatibility. If something looks off, the troubleshooting checklist above covers virtually every scenario.