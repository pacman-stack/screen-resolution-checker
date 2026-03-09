---
title: "PPI Calculator: How to Find Your Screen's Pixel Density"
description: "Learn how to calculate your screen's PPI (pixels per inch) with the simple PPI formula, step-by-step examples, and a reference table for common devices. Understand what pixel density means for display sharpness."
date: "2026-03-09"
author: "My Screen Resolution"
tags:
  - ppi calculator
  - pixel density
  - pixels per inch
  - screen resolution
  - display sharpness
  - dpi vs ppi
---

# PPI Calculator: How to Find Your Screen's Pixel Density

You have probably seen PPI listed in a spec sheet and wondered whether the number actually matters. It does. PPI, or pixels per inch, is the single most useful metric for judging how sharp a screen looks at a normal viewing distance. A higher PPI means individual pixels are harder to see, text edges look cleaner, and images appear more lifelike.

The good news is that calculating PPI yourself takes about ten seconds once you know the formula. This guide walks you through the math, provides worked examples, and includes a ready-made reference table so you can look up common devices without doing any arithmetic at all.

## What Is PPI and Why Does It Matter?

PPI stands for **pixels per inch**. It measures how many pixels are packed into one linear inch of your screen. The higher the number, the denser the pixel grid and the sharper the image appears to your eyes.

Resolution alone does not tell the full story. A 1920 x 1080 display looks perfectly crisp on a 14-inch laptop but noticeably grainy on a 27-inch monitor. The pixel count is identical in both cases; the difference is pixel density. That is exactly what PPI quantifies.

If you want to quickly check your current screen's resolution before diving into the math, head over to [MyScreenResolution.com](/) for an instant readout of your display's width and height in pixels.

## The PPI Formula

The formula is straightforward:

```
PPI = sqrt(width^2 + height^2) / diagonal
```

Where:

- **width** is the horizontal resolution in pixels
- **height** is the vertical resolution in pixels
- **diagonal** is the physical screen size in inches (measured corner to corner)

The numerator uses the Pythagorean theorem to find the diagonal pixel count, and then you divide by the physical diagonal to get pixels per inch.

## Step-by-Step Calculation Examples

### Example 1: 27-Inch 4K Monitor

A typical 27-inch monitor running at 3840 x 2160:

1. Square the width: 3840^2 = 14,745,600
2. Square the height: 2160^2 = 4,665,600
3. Add them: 14,745,600 + 4,665,600 = 19,411,200
4. Take the square root: sqrt(19,411,200) = 4,406.08
5. Divide by the diagonal: 4,406.08 / 27 = **163.18 PPI**

At roughly 163 PPI, individual pixels are very difficult to see at a typical desk viewing distance of 60-80 cm. This is why 27-inch 4K monitors are widely considered the sweet spot for sharp desktop work.

### Example 2: 15.6-Inch 1080p Laptop

A common 15.6-inch laptop with a 1920 x 1080 display:

1. 1920^2 = 3,686,400
2. 1080^2 = 1,166,400
3. Sum = 4,852,800
4. sqrt(4,852,800) = 2,202.91
5. 2,202.91 / 15.6 = **141.21 PPI**

Around 141 PPI is comfortable for a laptop screen held at arm's length. Most people find this density perfectly acceptable for everyday use.

### Example 3: 6.1-Inch Phone at 2556 x 1179

A modern smartphone like the iPhone 15:

1. 2556^2 = 6,533,136
2. 1179^2 = 1,390,041
3. Sum = 7,923,177
4. sqrt(7,923,177) = 2,814.82
5. 2,814.82 / 6.1 = **461.45 PPI**

At over 460 PPI, pixels are invisible to the naked eye even when the phone is held close to your face. Apple famously branded this threshold "Retina" density.

## Pre-Calculated PPI Reference Table

The table below covers popular monitor, laptop, tablet, and phone configurations so you can look up your device without pulling out a calculator.

### Monitors

| Screen Size | Resolution       | PPI   |
|-------------|------------------|-------|
| 24"         | 1920 x 1080 (FHD)  | 91.8  |
| 27"         | 1920 x 1080 (FHD)  | 81.6  |
| 27"         | 2560 x 1440 (QHD)  | 108.8 |
| 27"         | 3840 x 2160 (4K)   | 163.2 |
| 32"         | 2560 x 1440 (QHD)  | 91.8  |
| 32"         | 3840 x 2160 (4K)   | 137.7 |
| 34" UW      | 3440 x 1440 (UWQHD)| 109.7 |
| 38" UW      | 3840 x 1600 (UWQHD+)| 109.5|
| 49" DQHD    | 5120 x 1440        | 108.6 |

### Laptops

| Screen Size | Resolution       | PPI   |
|-------------|------------------|-------|
| 13.3"       | 1920 x 1080 (FHD)  | 165.6 |
| 13.3"       | 2560 x 1600 (QHD+) | 226.7 |
| 14"         | 1920 x 1080 (FHD)  | 157.4 |
| 14"         | 2560 x 1600 (QHD+) | 214.6 |
| 14"         | 3024 x 1964 (MBP)  | 254.0 |
| 15.6"       | 1920 x 1080 (FHD)  | 141.2 |
| 15.6"       | 2560 x 1440 (QHD)  | 188.3 |
| 16"         | 3456 x 2234 (MBP)  | 254.0 |
| 17.3"       | 1920 x 1080 (FHD)  | 127.3 |

### Tablets

| Device           | Screen Size | Resolution       | PPI   |
|------------------|-------------|------------------|-------|
| iPad 10th Gen    | 10.9"       | 2360 x 1640      | 264.0 |
| iPad Air M3      | 13"         | 2732 x 2048      | 264.0 |
| iPad Pro 11" M4  | 11"         | 2420 x 1668      | 264.0 |
| iPad Pro 13" M4  | 13"         | 2752 x 2064      | 264.0 |
| Samsung Tab S9   | 11"         | 2560 x 1600      | 274.5 |

### Phones

| Device              | Screen Size | Resolution       | PPI   |
|---------------------|-------------|------------------|-------|
| iPhone 16           | 6.1"        | 2556 x 1179      | 461.4 |
| iPhone 16 Pro Max   | 6.9"        | 2868 x 1320      | 460.9 |
| Samsung Galaxy S25  | 6.2"        | 2340 x 1080      | 416.2 |
| Samsung Galaxy S25 Ultra | 6.9"   | 3120 x 1440      | 497.7 |
| Google Pixel 9      | 6.3"        | 2424 x 1080      | 422.0 |

## What Do PPI Numbers Actually Mean?

Not every display needs 400+ PPI. What matters is the combination of pixel density and typical viewing distance. Here is a practical breakdown.

| PPI Range  | Typical Experience                                                                 |
|------------|------------------------------------------------------------------------------------|
| Below 90   | Individual pixels are clearly visible. Text looks blocky. Fine for a TV viewed from a couch but uncomfortable for desk work. |
| 90 - 110   | Acceptable for large desktop monitors at arm's length. You may notice slight graininess on small text or fine lines. |
| 110 - 160  | The sweet spot for most desktop and laptop use. Text is crisp and images look clean at normal viewing distances.            |
| 160+       | Approaching or exceeding "Retina" density. Pixels are invisible under normal conditions. Common on modern laptops, tablets, and phones. |

For context, a 27-inch 1080p monitor sits at about 82 PPI, which many users find noticeably soft for productivity tasks. Upgrading to 1440p on the same size pushes you to 109 PPI, a significant improvement. Jump to 4K and you reach 163 PPI, where sharpness is excellent.

If you are unsure what resolution your display is currently running at, [MyScreenResolution.com](/) detects it automatically and reports the exact pixel dimensions in your browser.

## How to Find Your Screen Size and Resolution

To use the PPI formula, you need two pieces of information: your screen's physical diagonal size and its pixel resolution.

### Finding Your Physical Screen Size

- **Check the model number.** The screen size is almost always included in the product name (e.g., "Dell U2723QE" is a 27-inch monitor).
- **Measure it.** Use a tape measure from one corner of the visible display area to the opposite corner, not including the bezel. Measure in inches.
- **Look up specs online.** Search for your monitor or laptop model on the manufacturer's website.

### Finding Your Pixel Resolution

- **Use an online tool.** Visit [MyScreenResolution.com](/) and it will instantly show your current display resolution.
- **Windows:** Right-click the desktop, select Display settings, and look under Display resolution.
- **macOS:** Open System Settings, click Displays, and check the resolution listed.
- **Linux:** Run `xrandr` in a terminal to see active resolutions.

Once you have both values, plug them into the formula covered earlier and you have your PPI.

## PPI vs DPI: What Is the Difference?

These two terms are frequently confused or used interchangeably, but they refer to different things.

| Term | Stands For         | Applies To         | Measures                              |
|------|--------------------|--------------------|---------------------------------------|
| PPI  | Pixels Per Inch    | Screens / Displays | Pixel density of a digital display    |
| DPI  | Dots Per Inch      | Printers / Print   | Ink dot density on paper              |

**PPI** describes how tightly pixels are packed on a screen. It is a fixed physical property of the display hardware.

**DPI** describes how many ink dots a printer places per inch on paper. It is a setting that can be changed in print software.

In everyday conversation, some operating systems and software use "DPI" when they actually mean PPI (Windows display scaling settings, for example). Technically, when you are talking about a screen, PPI is the correct term. For a deeper look at how pixel dimensions relate to physical screen area, see our guide on [screen resolution vs display size](/blog/screen-resolution-vs-display-size).

## Why PPI Matters for Display Sharpness

### Text Clarity

Text rendering benefits the most from high PPI. Letters are made up of curves and diagonals that need many pixels to look smooth. At low PPI, anti-aliasing has to do heavy lifting and the result is fuzzy edges. At high PPI, curves are represented by enough pixels that they appear naturally smooth.

### Image and Video Quality

Photos and videos look more detailed on high-PPI screens because more pixels are available to represent fine textures, gradients, and subtle color transitions. This is especially noticeable in landscape photography and 4K video content.

### UI Element Precision

Icons, borders, and thin lines look crisper at higher pixel densities. Designers and developers often prefer high-PPI displays because they can preview fine UI details accurately. For more on how pixel measurements relate to what you see on screen, check out our article on [pixels per inch explained](/blog/pixels-per-inch-explained).

### Viewing Distance Matters

PPI requirements scale with how close you sit to the screen. A 55-inch 4K TV at 80 PPI looks perfectly sharp from a couch three meters away, but that same density would look pixelated on a monitor at arm's length. Phones need the highest PPI because they are held closest to the eyes.

## Quick PPI Calculation Cheat Sheet

If you want to estimate PPI without a calculator, here are some shortcuts:

- **1080p displays:** Divide 2,203 by your screen's diagonal in inches.
- **1440p displays:** Divide 2,936 by your screen's diagonal in inches.
- **4K displays:** Divide 4,406 by your screen's diagonal in inches.

These numerators are the diagonal pixel counts for each resolution, pre-calculated so you only need to do one division.

## Conclusion

PPI is the most practical way to judge how sharp a display will look at your typical viewing distance. The formula is simple: take the square root of the sum of your width and height pixels squared, then divide by the diagonal screen size in inches. Anything above 110 PPI is comfortable for desktop work, above 160 PPI is excellent, and above 300 PPI is effectively invisible to the human eye.

Before you start calculating, grab your current resolution from [MyScreenResolution.com](/), look up your screen's diagonal size, and plug the numbers in. In ten seconds you will know exactly where your display stands on the sharpness scale.
