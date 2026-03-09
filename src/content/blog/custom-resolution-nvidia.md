---
title: "How to Set Custom Resolution on NVIDIA GPUs"
description: "Step-by-step guide to creating custom resolutions on NVIDIA GPUs using NVIDIA Control Panel. Covers DSR vs custom resolution, DLDSR, testing, troubleshooting black screens, and common use cases for gaming and desktop."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["custom resolution nvidia", "NVIDIA Control Panel", "custom resolution", "DSR", "DLDSR", "GPU scaling", "screen resolution", "NVIDIA"]
---

## Why Would You Need a Custom Resolution?

Most of the time, Windows and your NVIDIA driver automatically detect your monitor's supported resolutions through EDID data. You pick one from the list, and that is it.

But there are situations where the standard list falls short:

- **Your monitor supports a resolution that is not listed.** Some displays, especially older ones, ultrawide panels, or imported monitors, report incomplete EDID data. The resolution you want is technically supported by the hardware but does not show up.
- **You want a non-standard aspect ratio.** Maybe you need a 1920 x 800 resolution for a specific game or a 2048 x 1152 resolution for more desktop space on a 1080p panel.
- **You need a specific refresh rate.** Your monitor can do 75Hz at a given resolution, but the driver only offers 60Hz.
- **You are matching a projector or capture card.** Professional setups often require exact resolutions that do not appear in default lists.
- **You want to test app layouts at unusual sizes.** Developers and designers sometimes need pixel-exact resolutions to preview how content renders on specific devices.

Before you start, check what your display is currently running by visiting [MyScreenResolution.com](/) — it instantly shows your active resolution, viewport, and device pixel ratio. Knowing your starting point makes it easier to evaluate whether a custom resolution actually improved things.

## Step-by-Step: Creating a Custom Resolution in NVIDIA Control Panel

This is the primary method for adding a custom resolution on any NVIDIA GeForce or Quadro GPU.

### Prerequisites

- An NVIDIA GPU (GeForce, Quadro, or RTX series)
- The latest NVIDIA driver installed (download from [nvidia.com/drivers](https://www.nvidia.com/drivers))
- A monitor connected via DisplayPort or HDMI

### The Process

1. **Right-click** on your desktop and select **NVIDIA Control Panel**. If you do not see it, search for "NVIDIA Control Panel" in the Start menu. On newer Windows 11 systems, you may need to click **Show more options** first.
2. In the left sidebar, click **Change resolution** under the **Display** section.
3. Select the monitor you want to modify at the top (if you have multiple displays).
4. Click the **Customize** button below the resolution list.
5. Check the box that says **Enable resolutions not exposed by the display**. This tells the driver to allow resolutions outside your monitor's reported capabilities.
6. Click **Create Custom Resolution**.
7. Fill in the resolution parameters:
   - **Horizontal pixels** — the width (e.g., 2560)
   - **Vertical lines** — the height (e.g., 1440)
   - **Refresh rate** — the desired Hz (e.g., 75)
   - **Color depth** — leave at 32-bit unless you have a reason to change it
   - **Scan type** — Progressive (default, and what you want for LCD/OLED panels)
8. Under **Timing**, select **Automatic** for the timing standard. This lets the driver calculate the correct pixel clock and blanking intervals. If Automatic does not work, try **CVT** or **CVT Reduced Blanking**.
9. Click **Test**. Your screen will go black briefly and then attempt to display the new resolution.
10. If the test succeeds, you will see the new resolution on screen. Click **Yes** to confirm within 20 seconds, or it will revert automatically.
11. Click **OK** to save the custom resolution. It now appears in both the NVIDIA Control Panel and Windows Display Settings.

### Timing Standard Options Explained

The timing standard determines how signal timing is calculated. Picking the wrong one can cause the test to fail even if the resolution itself is valid.

| Timing Standard | When to Use |
|----------------|------------|
| **Automatic** | Best default choice. The driver picks the most compatible timing. |
| **CVT (Coordinated Video Timing)** | Standard for most modern LCD monitors. Works well for common resolutions. |
| **CVT Reduced Blanking** | Reduces bandwidth requirements. Useful when you are close to your cable's bandwidth limit (e.g., high refresh rate at high resolution). |
| **GTF (Generalized Timing Formula)** | Older standard. Try this if CVT fails on an older monitor. |
| **DMT (Display Monitor Timing)** | VESA-defined fixed timings. Only works for resolutions that have a predefined DMT entry. |
| **Manual** | Full manual control over pixel clock, front porch, sync width, and back porch. Only for advanced users who know their monitor's exact timing specs. |

## DSR vs Custom Resolution: What Is the Difference?

These are two completely different features, and confusing them is common. Here is the distinction.

### Custom Resolution

A custom resolution changes the actual signal your GPU sends to your monitor. You are telling the GPU: "Output this exact pixel grid." The monitor receives that signal and either displays it natively (if it matches the physical pixel count) or scales it using its internal scaler.

Custom resolutions modify what appears in your Windows resolution list. They affect the entire desktop, all apps, and everything on screen.

### DSR (Dynamic Super Resolution)

DSR does not change the signal sent to your monitor at all. Your monitor always receives its native resolution. Instead, DSR tells the GPU to render frames at a higher internal resolution and then downscale to your monitor's native resolution before sending the signal.

DSR is primarily a gaming feature. It is essentially supersampling anti-aliasing — the game renders at a higher resolution, and the extra pixel data smooths edges when downscaled. For a deeper explanation of how this works, see our guide on [increasing screen resolution beyond native](/blog/increase-screen-resolution-beyond-native).

| Feature | Custom Resolution | DSR |
|---------|------------------|-----|
| **Changes monitor signal** | Yes | No |
| **Modifies Windows resolution list** | Yes | Yes (adds "DSR" resolutions in games) |
| **Works on desktop** | Yes | Primarily for games |
| **Requires monitor support** | Yes (must accept the signal) | No (monitor always sees native resolution) |
| **Performance impact** | Minimal (just changes output resolution) | Significant (renders at higher resolution) |
| **Risk of black screen** | Yes | No |
| **Best for** | Matching non-standard displays, specific output needs | Improving game image quality via supersampling |

### When to Use Which

- **Use a custom resolution** when your monitor physically supports a resolution that is not listed, or when you need a specific non-standard output for hardware compatibility.
- **Use DSR** when you want better anti-aliasing in games without changing your actual display resolution.

## NVIDIA DLDSR: The AI-Powered Upgrade to DSR

DLDSR (Deep Learning Dynamic Super Resolution) is NVIDIA's newer take on supersampling. It was introduced with NVIDIA's RTX GPUs and uses AI tensor cores to achieve image quality comparable to traditional DSR at a much lower performance cost.

### How DLDSR Differs from Standard DSR

Traditional DSR at 4x (rendering at four times native resolution) gives excellent image quality but cuts FPS roughly in half or worse. DLDSR at 2.25x produces similar visual quality to DSR 4x but with significantly less performance overhead because the AI model fills in detail rather than brute-force rendering every pixel.

| Method | Render Multiplier | Approximate FPS Cost | Image Quality |
|--------|-------------------|---------------------|---------------|
| **DSR 1.78x** | 1.78x pixels | 20-30% FPS loss | Good |
| **DSR 4.00x** | 4.00x pixels | 50-70% FPS loss | Excellent |
| **DLDSR 1.78x** | ~1.78x pixels (AI-enhanced) | 10-20% FPS loss | Good to Very Good |
| **DLDSR 2.25x** | ~2.25x pixels (AI-enhanced) | 15-25% FPS loss | Excellent |

### How to Enable DLDSR

1. Open **NVIDIA Control Panel**
2. Go to **Manage 3D Settings > Global Settings**
3. Find **DSR - Factors**
4. Check the **DL** prefixed options (e.g., **2.25x DL**, **1.78x DL**)
5. Adjust **DSR - Smoothness** to control the sharpness of the downscaled image (33% is a good starting point, lower values are sharper)
6. Open your game and select the higher resolution from the in-game display settings

DLDSR requires an RTX 20-series or newer GPU. Older GTX cards do not have the tensor cores needed for the AI processing.

## Common Custom Resolutions and Their Use Cases

Not sure which custom resolution to create? Here are some popular ones and why people use them.

| Custom Resolution | Aspect Ratio | Common Use Case |
|-------------------|-------------|-----------------|
| **2048 x 1152** | 16:9 | Extra desktop space on a 1080p monitor without going full 1440p |
| **1920 x 800** | 2.40:1 | Cinematic widescreen gaming (matches movie aspect ratio) |
| **1600 x 900** | 16:9 | Lower GPU load for competitive gaming while maintaining 16:9 |
| **2560 x 1080** | 21:9 | Simulating ultrawide on a standard display (will letterbox) |
| **1440 x 1080** | 4:3 | Stretched 4:3 resolution for competitive FPS games (CS2, Valorant) |
| **1280 x 1024** | 5:4 | Legacy compatibility for older software or games |
| **3440 x 1440** | 21:9 | Matching ultrawide monitors that do not report this resolution |
| **1920 x 1200** | 16:10 | Matching 16:10 panels that are misidentified as 16:9 |
| **2560 x 1600** | 16:10 | Full resolution for 16:10 monitors with incomplete EDID |

## Custom Resolution for Gaming vs Desktop

How you use a custom resolution depends heavily on whether you are optimizing for gaming or desktop productivity.

### Gaming

In competitive gaming, custom resolutions are commonly used to gain performance or visual advantages:

- **Stretched resolutions** (like 1440 x 1080 on a 1080p monitor) make player models appear wider in games like CS2 and Valorant, giving a perceived aiming advantage. The GPU outputs fewer pixels, so FPS increases.
- **Lower-than-native resolutions** (like 1600 x 900 on a 1080p monitor) reduce GPU load for higher frame rates in competitive titles where FPS matters more than visual quality.
- **Non-standard aspect ratios** (like 1920 x 800) force a cinematic widescreen view, often used in single-player games for immersion.

To use a custom resolution in a game, create it in NVIDIA Control Panel first, then select it from the game's own resolution settings.

### Desktop and Productivity

For desktop work, custom resolutions serve different purposes:

- **Fitting more content on screen** by using a resolution slightly above native (e.g., 2048 x 1152 on a 1080p panel). The monitor's scaler handles the display, and text may be slightly softer but you get more workspace.
- **Matching unusual display hardware** like projectors, capture cards, or older monitors that do not advertise their full capabilities.
- **Fixing aspect ratio issues** when your monitor's EDID data is wrong and Windows is offering the wrong resolution list.

For general guidance on resolution settings in Windows, check our guide on [how to change screen resolution in Windows 11](/blog/change-screen-resolution-windows-11).

## Testing and Validating Custom Resolutions

Creating a custom resolution is only half the process. You need to verify it actually works correctly.

### During the Test Phase

When you click **Test** in the NVIDIA Control Panel custom resolution dialog:

1. The screen goes black for 2-5 seconds
2. If the monitor accepts the signal, the new resolution appears
3. A confirmation dialog asks if you want to keep the resolution
4. If you do not click **Yes** within 20 seconds, the resolution reverts automatically

### After Applying

Once the resolution is saved, verify it is working correctly:

1. Visit [MyScreenResolution.com](/) to confirm your browser reports the expected resolution
2. Open **Display Settings** in Windows and verify the resolution appears correctly
3. Check for visual artifacts — look for:
   - **Overscan or underscan** (black borders around the screen, or content cut off at the edges)
   - **Blurry text** (indicates the monitor is scaling a non-native resolution)
   - **Flickering** (timing mismatch between GPU output and monitor)
   - **Color banding** (incorrect color depth setting)
4. If the custom resolution is for gaming, launch a game and verify it appears in the in-game resolution list

### Signal Verification Checklist

| Check | What to Look For | Action if Wrong |
|-------|-----------------|----------------|
| Resolution matches | MyScreenResolution.com shows expected values | Re-create the custom resolution with correct values |
| No overscan | Content reaches all four edges of the screen | Adjust overscan/underscan in NVIDIA Control Panel > Resize Desktop |
| Text is sharp | Fonts are crisp, not blurry | You may be using a non-native resolution; adjust or accept the tradeoff |
| Refresh rate correct | No flickering, smooth mouse cursor movement | Re-test with a different refresh rate or timing standard |
| Colors look right | No banding or washed-out colors | Check color depth (should be 32-bit) and output color format (RGB full) |

## What to Do If the Screen Goes Black

A black screen after testing a custom resolution is the most common issue, and it is almost always recoverable. Do not panic.

### Immediate Recovery (Wait It Out)

If you clicked **Test** and the screen went black, just wait. The NVIDIA Control Panel automatically reverts to your previous resolution after 20 seconds if you do not confirm the change. Your screen will come back on its own.

### If the Screen Stays Black After Confirming

If you accidentally confirmed a resolution your monitor cannot display:

1. **Wait 15 seconds** — Windows may still revert if the display is completely unresponsive
2. **Press Windows + P** and then press **Enter** — this cycles through display modes and may reset the output
3. **Restart your PC** — it will boot at the last known working resolution in most cases
4. **Boot into Safe Mode:**
   - Hold **Shift** and click **Restart** from the login screen (or hold the power button to force shutdown, then power on — after two interrupted boots, Windows will offer recovery options)
   - In Safe Mode, Windows loads with a basic resolution (usually 800 x 600 or 1024 x 768)
   - Open Device Manager, find your NVIDIA GPU under **Display adapters**, right-click it, and select **Uninstall device** (check "Delete the driver software" if prompted)
   - Restart normally — Windows will reinstall a basic display driver and use a standard resolution
   - Reinstall the NVIDIA driver from [nvidia.com/drivers](https://www.nvidia.com/drivers)

### If You Have a Second Monitor

Connect a second monitor to your GPU. Windows should detect it and extend your desktop to the second screen, allowing you to navigate to NVIDIA Control Panel and remove the problematic custom resolution.

### Nuclear Option: DDU (Display Driver Uninstaller)

If nothing else works:

1. Boot into Safe Mode
2. Download and run **DDU (Display Driver Uninstaller)** — a free tool that completely removes all NVIDIA driver traces
3. Restart and reinstall the NVIDIA driver from scratch

Your custom resolutions are stored in the NVIDIA driver profile and will be erased along with the driver.

## Risks and Safety Precautions

Setting a custom resolution on a modern LCD or OLED monitor will not physically damage the panel. The worst realistic outcome is a black screen that requires a reboot or driver reset. But there are still risks worth understanding.

### What Can Go Wrong

| Risk | Likelihood | Impact | How to Avoid |
|------|-----------|--------|-------------|
| Black screen (monitor rejects signal) | High for aggressive settings | Temporary; auto-reverts in 20 seconds | Always use **Test** before saving |
| Blurry display (non-native resolution scaling) | High | Cosmetic; no damage | Accept the tradeoff or use native resolution |
| Monitor overdriving (exceeding safe pixel clock) | Low on modern monitors | Could stress the monitor's scaler over long periods | Stick to Automatic or CVT timing |
| Unstable signal (flickering, artifacts) | Moderate for extreme settings | Cosmetic; may cause eye strain | Reduce refresh rate or resolution |
| Inability to revert (stuck on bad resolution) | Low | Requires Safe Mode or driver reset | Always know the Safe Mode boot process before experimenting |

### Safety Best Practices

1. **Always use the Test button.** Never save a custom resolution without testing it first.
2. **Start conservative.** Try resolutions close to your monitor's native resolution before attempting large jumps.
3. **Use Automatic timing first.** Only switch to Manual timing if you know exactly what your monitor's timing specs are.
4. **Keep a second display available.** If you have a spare monitor, keep it connected so you always have a way to access your desktop.
5. **Know how to boot into Safe Mode** before you start experimenting.
6. **Document your working settings.** Write down your monitor's native resolution, refresh rate, and timing standard before creating custom resolutions.

## Troubleshooting Common Issues

### "Custom resolution test failed"

This means the NVIDIA driver attempted the resolution and the monitor did not respond. Possible fixes:

- **Lower the refresh rate** — try 60Hz instead of 75Hz
- **Change the timing standard** — switch from Automatic to CVT Reduced Blanking
- **Reduce the resolution** — try a slightly lower width or height
- **Check your cable** — a cable bandwidth limitation can cause test failures. HDMI 2.0 cannot handle resolutions much above 4K at 60Hz; DisplayPort 1.4 handles more

### "Resolution appears in the list but looks wrong when applied"

- **Overscan issue:** Go to NVIDIA Control Panel > **Adjust desktop size and position** and select **No scaling** with **Perform scaling on: GPU**
- **Wrong aspect ratio:** Make sure your custom resolution's aspect ratio matches your monitor's panel (e.g., do not create a 4:3 resolution on a 16:9 monitor unless you want letterboxing or stretching)
- **Monitor scaler issue:** Some cheaper monitors have poor internal scalers. If the image looks soft, the monitor is scaling a non-native resolution and introducing blur

### "Custom resolution disappears after restart"

- Update your NVIDIA driver to the latest version
- Re-create the custom resolution and make sure to click **OK** (not just Test)
- Check if any display management software (like DisplayFusion) is overriding your settings
- If you are running multiple GPUs or switchable graphics (common in laptops), make sure the custom resolution is created on the correct GPU

### "Games do not show my custom resolution"

- Some games only list resolutions they explicitly support. Check the game's config file (often a .ini or .cfg file in the game's install directory) and manually enter the custom resolution values
- Make sure the custom resolution is set for the correct display in NVIDIA Control Panel
- Restart the game after creating the custom resolution — many games only read the resolution list at startup

### "Custom resolution causes flickering"

- The refresh rate or pixel clock is slightly outside your monitor's tolerance. Try:
  - Lowering the refresh rate by 1-2 Hz (e.g., 59Hz instead of 60Hz)
  - Switching the timing standard to CVT Reduced Blanking
  - Reducing the color depth from 32-bit to 24-bit (frees up bandwidth)

### "NVIDIA Control Panel does not show the Customize button"

- Your NVIDIA driver may be too old. Update to the latest version
- Some NVIDIA notebook GPUs with Optimus (switchable graphics) do not expose custom resolution options because the display is controlled by the integrated GPU. Check if your laptop has a direct GPU output (some laptops route the HDMI or USB-C port directly to the NVIDIA GPU)

## Conclusion

Creating a custom resolution on an NVIDIA GPU is straightforward through the NVIDIA Control Panel's Customize dialog — enter your desired width, height, and refresh rate, test it, and save. The process is safe on modern displays since the worst outcome is a temporary black screen that auto-reverts in 20 seconds. For gaming-specific image quality improvements, DSR and DLDSR are better choices than custom resolutions because they enhance visual quality through supersampling without changing your monitor's actual signal. For hardware compatibility, non-standard aspect ratios, or unlocking resolutions your monitor supports but does not advertise, a custom resolution is the right tool. Whichever approach you take, visit [MyScreenResolution.com](/) afterward to confirm your display is running at the resolution you intended.
