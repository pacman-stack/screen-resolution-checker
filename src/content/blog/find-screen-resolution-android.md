---
title: "How to Find Your Screen Resolution on Android"
description: "Five ways to find your screen resolution on Android — using an online tool, Settings, Samsung display options, Developer Options, and ADB. Includes common resolutions by brand and DPR explained."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["screen resolution", "Android", "how-to", "Samsung", "OnePlus", "DPR"]
---

## Why You Might Need to Know Your Android Screen Resolution

Whether you are troubleshooting a display issue, choosing the right wallpaper, testing a responsive website, or just curious about your phone's hardware, knowing your exact screen resolution matters. Android devices come in dozens of resolutions depending on the manufacturer, model, and even your current display settings — so there is no single answer that applies to every phone.

Here are five methods to find your screen resolution on Android, from the simplest to the most advanced.

## Method 1: Use an Online Tool (Fastest)

The easiest way to find your screen resolution on Android is to open Chrome and visit [MyScreenResolution.com](/). The page instantly displays:

- **Screen resolution** (e.g., 1080 x 2400)
- **Viewport size** (the area your browser actually renders content in)
- **Device pixel ratio (DPR)**
- **Color depth**

This works on every Android phone and tablet regardless of manufacturer. No app installs, no digging through settings. Just open the page and read the numbers.

One thing to note: if your phone supports resolution switching (Samsung, OnePlus, and others), the online tool reports the resolution your phone is currently using, not necessarily the maximum resolution your hardware supports.

## Method 2: Check in Settings (Stock Android / Pixel)

On stock Android — the version that ships on Google Pixel phones and Android One devices — you can find basic display information through Settings.

1. Open **Settings**
2. Tap **Display**
3. Look for **Screen resolution**, **Display size**, or **Advanced** depending on your Android version

On many stock Android devices, the resolution is not directly shown in the Display settings. If you do not see it listed:

1. Go to **Settings > About Phone**
2. Look for a section called **Hardware information** or **Display**
3. Some devices list the resolution here alongside other hardware specs

On Pixel phones running Android 14 or later, Google does not surface the resolution directly in Settings. For Pixel devices, Method 1 (the online tool) or Method 5 (ADB) are more reliable options.

## Method 3: Samsung Phones (Resolution Switching)

Samsung Galaxy S and Note series phones with QHD+ displays give you direct control over your screen resolution. This makes Samsung one of the few Android brands where the resolution is easy to find and change.

### Finding and Changing Resolution

1. Open **Settings**
2. Tap **Display**
3. Tap **Screen resolution**
4. You will see three options:
   - **HD+** (1600 x 720) — lowest resolution, best battery life
   - **FHD+** (2400 x 1080) — the default on most Samsung phones
   - **WQHD+** (3200 x 1440) — highest resolution, sharpest image

5. Select the resolution you want and tap **Apply**

### Which Samsung Resolution Should You Use?

| Resolution | Pixel Count | Best For |
|---|---|---|
| HD+ (1600 x 720) | ~1.15 million | Maximum battery savings, basic tasks |
| FHD+ (2400 x 1080) | ~2.59 million | Daily use — good balance of sharpness and battery |
| WQHD+ (3200 x 1440) | ~4.61 million | Media consumption, reading small text, VR |

Samsung ships most Galaxy S phones at FHD+ by default to save battery, even when the hardware supports WQHD+. If you have never changed this setting, your phone is likely running at 1080p — not the maximum resolution your screen can handle.

### Adaptive Resolution on Samsung

On newer Samsung phones (Galaxy S21 and later), there is also an **Adaptive** option that automatically adjusts the resolution based on what you are doing. It drops to a lower resolution for simple tasks and ramps up for media and games. This is separate from the adaptive refresh rate feature.

## Method 4: Developer Options (Smallest Width)

Developer Options gives you more technical display information, including the smallest width value in dp (density-independent pixels). This is not the pixel resolution itself, but it tells you the effective display size Android uses for layout calculations.

### Enabling Developer Options

1. Open **Settings**
2. Go to **About Phone**
3. Tap **Build number** 7 times until you see a toast message saying "You are now a developer"
4. Go back to **Settings > System > Developer Options** (on some phones it appears under **Settings > Developer Options** directly)

### Finding Display Info

1. In **Developer Options**, scroll down to the **Drawing** section
2. Look for **Smallest width** — this shows a value like `411dp` or `360dp`
3. This value represents how many density-independent pixels fit across the shortest dimension of your screen

While the smallest width value is not the same as your pixel resolution, it is useful for developers and for understanding how Android scales content on your display. Combined with the DPR, you can calculate the physical pixel resolution:

**Physical pixels = smallest width (dp) x DPR**

For example, a phone showing 411dp with a DPR of 2.625 has a physical width of 411 x 2.625 = 1079 pixels (effectively 1080).

## Method 5: Using ADB (Android Debug Bridge)

ADB is the most precise method and works on every Android device. It requires a computer and a USB cable.

### Setup

1. Install **ADB** on your computer (it comes with Android Studio, or you can download the standalone Platform Tools from Google)
2. On your phone, enable **USB Debugging** in Developer Options
3. Connect your phone to your computer with a USB cable
4. Authorize the connection when prompted on your phone

### Getting the Resolution

Open a terminal or command prompt and run:

```
adb shell wm size
```

This returns something like:

```
Physical size: 1080x2400
```

If you have changed the resolution (on Samsung or OnePlus phones), you may see two lines:

```
Physical size: 1440x3200
Override size: 1080x2400
```

- **Physical size** is the hardware resolution — the actual pixel count of your screen
- **Override size** is the resolution your phone is currently rendering at

### Getting the Display Density

You can also check the display density with:

```
adb shell wm density
```

This returns a value like `420` or `560`, which is the DPI (dots per inch) your phone is using. Manufacturers sometimes set this to a non-standard value to make UI elements larger or smaller.

## Common Android Screen Resolutions by Brand

Here is a reference table of common resolutions you will find on popular Android phones:

| Brand | Model Series | Resolution | Aspect Ratio |
|---|---|---|---|
| Samsung | Galaxy S24 Ultra | 3120 x 1440 (QHD+) | 19.5:9 |
| Samsung | Galaxy S24 / S24+ | 2340 x 1080 (FHD+) | 19.5:9 |
| Samsung | Galaxy A55 | 2340 x 1080 (FHD+) | 19.5:9 |
| Google | Pixel 9 Pro | 2992 x 1344 (QHD+) | 20:9 |
| Google | Pixel 9 | 2424 x 1080 (FHD+) | 20:9 |
| OnePlus | 13 | 3168 x 1440 (QHD+) | 19.8:9 |
| OnePlus | 13R | 2780 x 1264 (FHD+) | 19.8:9 |
| Xiaomi | 14 Ultra | 3200 x 1440 (QHD+) | 20:9 |
| Xiaomi | 14 | 2670 x 1200 (FHD+) | 20:9 |
| Nothing | Phone (2) | 2412 x 1080 (FHD+) | 20.1:9 |
| Motorola | Edge 50 Pro | 2712 x 1220 (FHD+) | 20:9 |
| Sony | Xperia 1 VI | 2340 x 1080 (FHD+) | 19.5:9 |

Notice that most flagship phones use either FHD+ (1080p-class) or QHD+ (1440p-class) resolutions. Budget and mid-range phones almost universally ship at HD+ (720p) or FHD+ (1080p).

## What Does DPR Mean on Android?

When you check your resolution using [MyScreenResolution.com](/), you will also see a **Device Pixel Ratio (DPR)** value. On Android phones, this is typically between 2.0 and 4.0.

DPR tells you how many physical pixels map to one CSS pixel (or one density-independent pixel). A DPR of 3.0 means every "logical" pixel is rendered using a 3x3 grid of actual physical pixels.

### Why DPR Matters

- **Web developers** use DPR to serve the right image size — a phone with DPR 3.0 needs a 3x image to look sharp
- **Resolution switching** changes your DPR — dropping from WQHD+ to FHD+ on a Samsung phone will lower the DPR because fewer physical pixels are being used per logical pixel
- **Screenshots** are captured at the current rendering resolution, not the physical maximum — so a screenshot on a Samsung phone set to FHD+ will be 1080p even if the hardware supports 1440p

### Common DPR Values on Android

| DPR | Android Density Bucket | Approximate PPI |
|---|---|---|
| 1.0 | mdpi | ~160 |
| 1.5 | hdpi | ~240 |
| 2.0 | xhdpi | ~320 |
| 3.0 | xxhdpi | ~480 |
| 4.0 | xxxhdpi | ~640 |

Most modern Android phones fall in the 2.75 to 3.5 range. The exact DPR depends on both the physical resolution and the display density (DPI) the manufacturer has configured.

## How Resolution Switching Works on Samsung and OnePlus

Some Android manufacturers let you change the rendering resolution on the fly. This is different from display scaling — resolution switching actually reduces (or increases) the number of pixels being rendered.

### Samsung

Samsung has offered resolution switching since the Galaxy S7. On phones with QHD+ panels, you can choose between HD+, FHD+, and WQHD+ in **Settings > Display > Screen resolution**. The change takes effect immediately and applies system-wide.

The main reason to lower the resolution is **battery life**. Rendering fewer pixels means the GPU does less work, which saves power. The difference is modest but measurable — expect roughly 5-10% better battery life at FHD+ versus WQHD+ under heavy use.

Samsung defaults to FHD+ on all recent flagships, which is why many people never realize their phone can run at a higher resolution.

### OnePlus

OnePlus phones with QHD+ displays (OnePlus 12, 13, and others) also support resolution switching:

1. Open **Settings**
2. Tap **Display & Brightness**
3. Tap **Screen Resolution**
4. Choose between **FHD+** and **QHD+**

OnePlus does not offer an HD+ option — only FHD+ and QHD+. Like Samsung, the default is FHD+ to balance battery life and visual quality.

### Does Lowering the Resolution Affect Performance?

Yes, but not always the way you might expect:

- **General UI:** No visible difference between FHD+ and QHD+ on a 6.5-inch screen for most people
- **Gaming:** Some games render at a fixed resolution regardless of your system setting. Others follow the system resolution, so lowering it can improve frame rates
- **Battery life:** Lower resolution uses slightly less power, mainly because the GPU renders fewer pixels per frame
- **Text clarity:** On phones larger than 6.5 inches, WQHD+ produces noticeably sharper text than FHD+

## Conclusion

Finding your screen resolution on Android takes seconds with an online tool like [MyScreenResolution.com](/), or a quick trip through your phone's Settings menu. If you want the full picture — including both the physical hardware resolution and the current rendering resolution — the ADB command `adb shell wm size` is the most reliable method. Samsung and OnePlus owners should also check whether their phone is running at its maximum resolution, since most ship at FHD+ by default even when the hardware supports QHD+. For a broader overview of how resolution works across all devices, see our guide on [how to check your screen resolution](/blog/how-to-check-screen-resolution) or learn the fundamentals in [what is screen resolution](/blog/what-is-screen-resolution).
