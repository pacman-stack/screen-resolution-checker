---
title: "Logical Resolution vs Physical Resolution Explained"
description: "Learn the difference between logical resolution and physical resolution, how device pixel ratio connects them, and why this distinction matters for developers, designers, and everyday users."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["logical resolution", "physical resolution", "device pixel ratio", "DPR", "CSS pixels", "Retina", "HiDPI", "screen resolution"]
---

## What Is Physical Resolution?

Physical resolution is the actual number of pixels your screen hardware contains. It is a fixed property of the display panel itself — you cannot add or remove physical pixels after manufacturing.

When a spec sheet says a monitor is "3840 x 2160," that is the physical resolution. The panel literally has 3,840 columns and 2,160 rows of tiny light-emitting elements arranged in a grid. Every image, every letter, every icon you see is ultimately rendered by those hardware pixels and nothing else.

Physical resolution is sometimes called "native resolution" or "hardware resolution." Regardless of the name, it describes the same thing: the real pixel count baked into the screen. For a deeper comparison between native and scaled modes, see [native resolution vs scaled resolution](/blog/native-resolution-vs-scaled-resolution).

## What Is Logical Resolution?

Logical resolution is the resolution your operating system reports to applications. It is not the physical pixel count — it is the number of "points" or "logical pixels" the OS uses to lay out content on screen.

On a MacBook Pro with a physical resolution of 3024 x 1964, macOS tells apps the display is 1512 x 982 in logical terms. On an iPhone 14 with a physical resolution of 1170 x 2532, iOS reports a logical resolution of 390 x 844. The operating system deliberately hides the true pixel count from most software so that UI elements stay a comfortable, readable size.

If apps used physical resolution directly on these high-density panels, everything — buttons, text, menus — would be microscopically small. Logical resolution solves that problem by giving software a coordinate system where "one unit" maps to multiple hardware pixels behind the scenes.

To quickly see both the logical resolution and device pixel ratio your device is currently using, visit [MyScreenResolution.com](/) — it reports these values instantly without requiring any setup.

## How Device Pixel Ratio Connects the Two

The bridge between physical and logical resolution is the **device pixel ratio (DPR)**. The formula is simple:

**DPR = Physical Resolution / Logical Resolution**

On a display where the physical resolution is 3024 x 1964 and the logical resolution is 1512 x 982, the DPR is 2. That means every single logical pixel is backed by a 2 x 2 block of physical pixels — four hardware pixels doing the job of one logical pixel.

This is why Retina and HiDPI screens look so sharp. The logical layout stays the same size as a lower-resolution display, but each element is rendered with far more physical detail. For a thorough breakdown of how DPR works, see [device pixel ratio explained](/blog/device-pixel-ratio-explained).

### Common DPR Values

| DPR | What It Means | Example |
|-----|---------------|---------|
| 1 | 1 logical pixel = 1 physical pixel | Most external 1080p and 1440p monitors |
| 1.25 | 1 logical pixel = 1.25 physical pixels | Windows laptop at 125% scaling |
| 1.5 | 1 logical pixel = 1.5 physical pixels | Windows laptop at 150% scaling |
| 2 | 1 logical pixel = 2x2 physical pixels | MacBook Retina, iPhone (most models) |
| 3 | 1 logical pixel = 3x3 physical pixels | iPhone Plus/Pro Max models, many Android flagships |

## iPhone Example: Physical vs Logical Resolution

Apple's iPhones are one of the clearest examples of this concept in action.

Take the **iPhone 14**:

- **Physical resolution:** 1170 x 2532 pixels
- **Logical resolution:** 390 x 844 points
- **DPR:** 3x

When a developer creates a button that is 100 x 50 logical points, iOS renders it using 300 x 150 physical pixels. The button appears the same logical size as it would on an older, lower-density screen, but it is drawn with 9 times as many pixels (3 x 3 per logical point).

This is why app layouts do not shrink as Apple increases physical pixel counts. The logical resolution stays manageable, and the DPR absorbs the extra hardware pixels to produce sharper rendering.

### iPhone Physical vs Logical Resolution Table

| Model | Physical Resolution | Logical Resolution | DPR |
|-------|--------------------|--------------------|-----|
| iPhone SE (3rd gen) | 750 x 1334 | 375 x 667 | 2x |
| iPhone 14 | 1170 x 2532 | 390 x 844 | 3x |
| iPhone 14 Pro | 1179 x 2556 | 393 x 852 | 3x |
| iPhone 15 | 1179 x 2556 | 393 x 852 | 3x |
| iPhone 15 Pro Max | 1290 x 2796 | 430 x 932 | 3x |
| iPhone 16 Pro | 1206 x 2622 | 402 x 874 | 3x |

Notice how different physical resolutions can map to similar logical resolutions. The physical upgrades improve sharpness; the logical values keep app layouts consistent.

## MacBook Example: Physical vs Logical Resolution

Apple's Mac lineup uses a clean 2x DPR on most Retina models.

Take the **MacBook Pro 14-inch (M-series)**:

- **Physical resolution:** 3024 x 1964 pixels
- **Logical resolution:** 1512 x 982 points
- **DPR:** 2x

Every menu bar item, every line of text, every toolbar icon is laid out on a 1512 x 982 grid but painted with 3024 x 1964 actual pixels. The result is the same amount of usable screen space as a 1512 x 982 display, but with four times the pixel detail.

macOS also offers "Looks like" scaling options — for example, "Looks like 1800 x 1169" on the same panel. In that mode, macOS renders at an even higher internal resolution and then downscales to the physical pixels, giving you more workspace at a slight cost to rendering efficiency. For more on how that works, see [native resolution vs scaled resolution](/blog/native-resolution-vs-scaled-resolution).

### Mac Physical vs Logical Resolution Table

| Model | Physical Resolution | Default Logical Resolution | DPR |
|-------|--------------------|-----------------------------|-----|
| MacBook Air 13" (M2/M3) | 2560 x 1664 | 1280 x 832 | 2x |
| MacBook Air 15" (M2/M3) | 2880 x 1864 | 1440 x 932 | 2x |
| MacBook Pro 14" (M-series) | 3024 x 1964 | 1512 x 982 | 2x |
| MacBook Pro 16" (M-series) | 3456 x 2234 | 1728 x 1117 | 2x |
| iMac 24" (M-series) | 4480 x 2520 | 2240 x 1260 | 2x |
| Pro Display XDR 32" | 6016 x 3384 | 3008 x 1692 | 2x |

The pattern is consistent: Apple doubles the pixel count in each direction, keeping DPR at a clean 2x.

## Windows Example: Physical vs Logical Resolution with Scaling

Windows handles things a bit differently from macOS. Instead of a fixed "Retina" multiplier, Windows lets users choose a scaling percentage — 100%, 125%, 150%, 200%, and so on.

Take a **Dell XPS 15 with a 4K display (3840 x 2160)** running at **150% scaling**:

- **Physical resolution:** 3840 x 2160
- **Effective logical resolution:** 2560 x 1440 (3840 / 1.5 = 2560, 2160 / 1.5 = 1440)
- **DPR:** 1.5

At 150%, Windows tells applications the screen is 2560 x 1440. Apps render their layouts for that size, and Windows uses the full 3840 x 2160 physical pixels to paint everything at higher detail.

If the same laptop were set to 200% scaling:

- **Effective logical resolution:** 1920 x 1080 (3840 / 2 = 1920, 2160 / 2 = 1080)
- **DPR:** 2

Now apps think the screen is 1080p. UI elements are larger and more readable, and each logical pixel maps to a clean 2 x 2 physical block — no fractional scaling needed.

### Windows Scaling Quick Reference

| Physical Resolution | Scaling | Logical Resolution | DPR |
|--------------------|---------|-------------------|-----|
| 1920 x 1080 | 100% | 1920 x 1080 | 1 |
| 1920 x 1080 | 125% | 1536 x 864 | 1.25 |
| 2560 x 1440 | 100% | 2560 x 1440 | 1 |
| 2560 x 1440 | 125% | 2048 x 1152 | 1.25 |
| 2560 x 1440 | 150% | 1707 x 960 | 1.5 |
| 3840 x 2160 | 150% | 2560 x 1440 | 1.5 |
| 3840 x 2160 | 200% | 1920 x 1080 | 2 |
| 3840 x 2160 | 250% | 1536 x 864 | 2.5 |
| 3840 x 2160 | 300% | 1280 x 720 | 3 |

Fractional scaling values like 1.25 and 1.5 can sometimes cause slight blurriness in apps that do not handle non-integer DPR well. Integer values like 2x generally produce the cleanest results.

## Why This Distinction Matters for Web Developers

If you build websites, understanding logical vs physical resolution is not optional — it directly affects how your layouts, images, and media queries behave.

### CSS Pixels Are Logical Pixels

When you write `width: 390px` in CSS, that "390px" refers to 390 **logical** (CSS) pixels, not 390 hardware pixels. On an iPhone 14 with a 3x DPR, that CSS width actually spans 1,170 physical pixels on screen.

This is why a `div` set to `width: 100%` on an iPhone does not render at 1170 pixels wide in your CSS calculations — it renders at 390 CSS pixels wide, because the browser uses the logical resolution as its coordinate system.

### Viewport Width Is Logical

The `<meta name="viewport" content="width=device-width">` tag sets the viewport width to the device's logical width. On an iPhone 14, `window.innerWidth` returns 390, not 1170. On a MacBook Pro 14", a full-screen browser window reports roughly 1512 CSS pixels wide, not 3024.

### Images Need to Account for DPR

If you serve a 390-pixel-wide image to fill the full width of an iPhone 14 screen, it will look blurry. The screen has 1,170 physical pixels across that width, so the browser stretches the 390-pixel image to cover all of them. To look sharp, you need to serve an image that is 1,170 pixels wide (3x the CSS width).

This is where `srcset` and the `sizes` attribute become essential:

```html
<img
  src="photo-390.jpg"
  srcset="photo-390.jpg 390w, photo-780.jpg 780w, photo-1170.jpg 1170w"
  sizes="100vw"
  alt="Example photo"
/>
```

The browser picks the right image based on the device's DPR and viewport size.

### Media Queries Use Logical Pixels

A media query like `@media (max-width: 768px)` triggers based on the logical viewport width, not the physical pixel count. A device with a physical width of 1170 pixels but a logical width of 390 pixels will match `max-width: 768px`. This is the behavior you want — it ensures responsive breakpoints work consistently across devices regardless of their pixel density.

## Why This Distinction Matters for Designers

Designers working in Figma, Sketch, or Adobe XD design at **logical resolution**. When you create an iPhone frame at 390 x 844 in Figma, you are designing at the logical resolution of the iPhone 14 — not its 1170 x 2532 physical resolution.

This means:

- **Layout and spacing** should be defined in logical (point) values
- **Raster assets** (icons, photos) need to be exported at 1x, 2x, and 3x to cover different DPR values
- **Vector assets** (SVGs) scale automatically regardless of DPR, which is why they are preferred for icons and logos
- **Font sizes** in points correspond to logical pixels, not physical ones

A common mistake is designing at the physical resolution, which produces layouts where everything appears half-size or one-third-size on the actual device. Always design at the logical resolution and let the DPR handle the sharpness.

## Popular Devices: Physical vs Logical Resolution Side by Side

This table covers a broad range of devices so you can see the pattern across phones, tablets, laptops, and desktop monitors.

| Device | Physical Resolution | Logical Resolution | DPR |
|--------|--------------------|--------------------|-----|
| iPhone SE (3rd gen) | 750 x 1334 | 375 x 667 | 2x |
| iPhone 14 | 1170 x 2532 | 390 x 844 | 3x |
| iPhone 15 Pro | 1179 x 2556 | 393 x 852 | 3x |
| iPhone 16 Pro Max | 1320 x 2868 | 440 x 956 | 3x |
| Samsung Galaxy S24 | 1080 x 2340 | 360 x 780 | 3x |
| Google Pixel 8 | 1080 x 2400 | 412 x 915 | 2.625x |
| iPad Air (M2) | 2360 x 1640 | 1180 x 820 | 2x |
| iPad Pro 12.9" | 2048 x 2732 | 1024 x 1366 | 2x |
| MacBook Air 13" (M3) | 2560 x 1664 | 1280 x 832 | 2x |
| MacBook Pro 14" (M-series) | 3024 x 1964 | 1512 x 982 | 2x |
| MacBook Pro 16" (M-series) | 3456 x 2234 | 1728 x 1117 | 2x |
| Dell XPS 15 (4K) | 3840 x 2160 | 2560 x 1440 | 1.5x (at 150%) |
| Surface Pro 10 | 2880 x 1920 | 1920 x 1280 | 1.5x (at 150%) |
| External 1080p Monitor | 1920 x 1080 | 1920 x 1080 | 1x |
| External 1440p Monitor | 2560 x 1440 | 2560 x 1440 | 1x (at 100%) |
| External 4K Monitor (at 200%) | 3840 x 2160 | 1920 x 1080 | 2x |
| Apple Pro Display XDR | 6016 x 3384 | 3008 x 1692 | 2x |

Notice that phones tend to have higher DPR values (2x-3x) because their screens are small and pixel-dense. Laptops typically use 1.5x or 2x. External desktop monitors often run at 1x unless the user enables scaling.

## How to Find Both Values for Your Device

### The Quick Way

Visit [MyScreenResolution.com](/) from any browser. It reports your logical resolution (viewport size), device pixel ratio, and screen dimensions in one glance. From there, you can calculate physical resolution by multiplying the reported values by the DPR.

### On macOS

Open **System Settings > Displays**. The "Resolution" section shows the logical resolution your Mac is using (the "Looks like" value). To find the physical resolution, click the "Advanced" option or check your Mac's technical specifications on Apple's website.

You can also open **Terminal** and run:

```
system_profiler SPDisplaysDataType
```

This outputs both the physical resolution and the current UI scaling settings.

### On Windows

Right-click on the desktop and choose **Display settings**. The "Display resolution" dropdown shows the physical resolution. The "Scale" percentage tells you the scaling factor. Divide the physical resolution by the scale factor (as a decimal) to get the logical resolution.

For example: 3840 x 2160 at 150% gives a logical resolution of 2560 x 1440.

### On iOS

Apple does not show resolution in the Settings app. The easiest method is to open Safari and visit [MyScreenResolution.com](/). Alternatively, look up your iPhone model in Apple's tech specs — the physical resolution is listed there, and the logical resolution is the physical resolution divided by the DPR (2x or 3x depending on the model).

### On Android

Go to **Settings > About Phone > Display** (the exact path varies by manufacturer). Some Android phones show the physical resolution directly. For the logical resolution and DPR, open Chrome and visit [MyScreenResolution.com](/).

## Conclusion

Physical resolution is the actual pixel count built into your display hardware. Logical resolution is the coordinate system your operating system presents to software. The device pixel ratio is the multiplier that connects them. On modern devices, logical resolution is almost always smaller than physical resolution because the OS uses the extra physical pixels to make everything sharper rather than smaller. Understanding this distinction matters whether you are choosing a display, building a website, designing an app interface, or simply trying to figure out why your screen reports a different resolution than what the spec sheet says.
