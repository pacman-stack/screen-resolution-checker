---
title: "Understanding EDID: How Monitors Tell Your PC Their Resolution"
description: "Learn what EDID is, how monitors communicate resolution and refresh rate data to your PC over HDMI and DisplayPort, and how to fix common EDID problems."
date: "2026-03-09"
author: "My Screen Resolution"
tags: ["what is edid monitor", "EDID", "display identification", "monitor resolution", "HDMI", "DisplayPort", "screen resolution problems", "generic PnP monitor", "EDID override"]
---

## What Is EDID and Why Does It Matter?

Every time you plug a monitor into your computer, an invisible handshake happens before a single pixel appears on screen. Your PC asks the monitor a simple question: *what are you?* The monitor responds with a small block of data called **EDID — Extended Display Identification Data**. This data tells the operating system the monitor's native resolution, supported refresh rates, physical size, manufacturer name, and a list of every resolution it can accept.

Without EDID, your computer would have no idea what it is connected to. It would not know whether to send a 1920 x 1080 signal or a 3840 x 2160 signal. It would not know whether the monitor supports 60Hz or 144Hz. It would have to guess — and guessing usually means a generic, low-resolution output that looks terrible.

EDID is the reason that monitors "just work" when you plug them in. It is also the reason they sometimes do not — because when EDID data is incorrect, corrupted, or missing, your PC makes wrong assumptions about your display. If you have ever plugged in a monitor and gotten the wrong resolution, a stretched image, or a "Generic PnP Monitor" label in Device Manager, there is a good chance EDID was the culprit.

Not sure what resolution your display is actually running right now? Visit [MyScreenResolution.com](/) to check instantly — it takes one second and works on any device.

## How EDID Works: The Technical Handshake

EDID communication follows a straightforward process. Here is what happens in the milliseconds between connecting a cable and seeing an image on screen.

### The DDC Channel

EDID data travels over a communication channel called **DDC (Display Data Channel)**. This is a dedicated wire within your HDMI, DisplayPort, DVI, or VGA cable that carries metadata — not video. DDC uses the I2C protocol, a simple two-wire serial bus originally designed for communication between integrated circuits.

When you connect a monitor:

1. **The GPU detects a display** on the connector (via a hot-plug detect signal).
2. **The GPU requests EDID** by reading from a specific I2C address (0x50) on the DDC line.
3. **The monitor responds** with its EDID data block — typically 128 or 256 bytes.
4. **The GPU and OS parse the EDID** and configure the output signal to match the monitor's preferred resolution, refresh rate, and timing.
5. **The image appears** at the correct settings.

This entire process takes a fraction of a second. It happens every time you boot your computer, wake it from sleep, or plug in a cable.

### EDID Over Different Cable Types

Every modern display interface supports EDID, but the implementation varies slightly.

| Interface | DDC Support | EDID Version Typically Used | Notes |
|-----------|-------------|---------------------------|-------|
| **VGA** | DDC2B over pins 12 and 15 | EDID 1.3 | Oldest implementation; some very old monitors lack DDC entirely |
| **DVI** | DDC2B over dedicated pins | EDID 1.3 / 1.4 | Reliable; same electrical interface as VGA DDC |
| **HDMI** | DDC over pins 15 and 16 | EDID 1.3 / 1.4 + CEA extensions | Adds audio and TV-specific capabilities to EDID |
| **DisplayPort** | AUX channel (not I2C, but carries EDID) | EDID 1.4 / DisplayID 2.0 | Most advanced; supports DisplayID for higher resolutions |
| **USB-C (DP Alt Mode)** | Same as DisplayPort via AUX | EDID 1.4 / DisplayID 2.0 | Tunneled through the USB-C connector |

The key takeaway is that regardless of which cable you use, the concept is the same: the monitor stores a data block describing its capabilities, and the GPU reads it before sending any video signal.

## What Information Does EDID Contain?

An EDID data block is compact — the base block is only 128 bytes — but it packs in a surprising amount of information. Here is what each section describes.

### Base EDID Block (128 Bytes)

The original EDID 1.x specification defines a 128-byte structure with these fields:

- **Header** — an 8-byte fixed pattern that identifies the data as EDID
- **Manufacturer ID** — a 3-letter code identifying the display maker (e.g., "DEL" for Dell, "SAM" for Samsung)
- **Product code and serial number** — identifies the specific model
- **Manufacture date** — week and year of production
- **EDID version** — which version of the standard this data follows
- **Basic display parameters** — whether it is digital or analog, bit depth, supported color encoding, screen size in centimeters
- **Color characteristics** — chromaticity coordinates for the display's red, green, blue, and white primaries
- **Established timings** — flags for common legacy resolutions (720 x 400, 640 x 480, 800 x 600, 1024 x 768, etc.)
- **Standard timings** — up to 8 additional resolution/refresh rate combinations
- **Detailed timing descriptors** — up to 4 slots for precise timing data, including the **preferred (native) resolution** in the first slot
- **Extension flag** — indicates how many 128-byte extension blocks follow

### Extension Blocks

Modern monitors almost always include one or more extension blocks that expand beyond the base 128 bytes. The most common types are:

- **CEA-861 extensions** — used by HDMI displays to declare audio capabilities, additional video modes, HDR metadata, VRR support, and color space information
- **DisplayID extensions** — a newer, more flexible format that can describe tiled displays, adaptive sync ranges, and resolutions beyond 4K at high refresh rates

A typical modern 4K 144Hz gaming monitor might have an EDID payload of 256 or 384 bytes, with the base block covering standard resolutions and the extension blocks listing high-refresh-rate modes, HDR capabilities, and FreeSync/G-Sync compatibility flags.

### The Preferred Timing: How Your Monitor Gets Its Default Resolution

The single most important piece of data in the EDID is the **first detailed timing descriptor** in the base block. This is the monitor's **preferred timing** — the resolution and refresh rate that the monitor manufacturer considers optimal. When your operating system sets the "recommended" resolution in Display Settings, it is reading this value directly from the EDID.

For a 2560 x 1440 monitor running at 165Hz, the preferred timing descriptor would encode:

- Pixel clock: 586.59 MHz
- Horizontal active pixels: 2560
- Vertical active lines: 1440
- Horizontal blanking, sync width, and porch values
- Vertical blanking, sync width, and porch values
- Refresh rate derived from the above: 165Hz

If this timing is wrong — if the manufacturer made a mistake, or if the data got corrupted — your operating system will choose the wrong resolution as its default.

## Common EDID Problems and How to Identify Them

EDID is supposed to make display setup automatic. When it works, you never think about it. When it fails, the symptoms are unmistakable.

### Wrong Resolution After Connecting a Monitor

The most common EDID-related issue is your PC selecting a resolution that does not match the monitor's native resolution. Instead of 2560 x 1440, you get 1920 x 1080 or even 1024 x 768. This happens when:

- The EDID data does not include the correct preferred timing
- The EDID extension block is missing or unreadable
- A KVM switch, cable adapter, or splitter is interfering with DDC communication
- The cable is damaged or poorly shielded, causing I2C read errors

If your display is not showing the resolution you expect, check what your system is actually outputting. Visit [MyScreenResolution.com](/) to see your current resolution and compare it to your monitor's specification sheet. If they do not match, EDID is a likely suspect.

For a broader walkthrough of resolution issues, read our guide on [why your screen resolution might be wrong](/blog/why-is-my-screen-resolution-wrong).

### "Generic PnP Monitor" in Device Manager

When Windows cannot read the EDID from a monitor — or when the EDID contains invalid data — it labels the display as a "Generic PnP Monitor" in Device Manager. This means Windows is operating with no knowledge of the monitor's capabilities and is falling back to a safe, generic mode.

Common causes include:

- **Bad cables** — especially cheap or very long HDMI/DisplayPort cables where the DDC signal degrades
- **KVM switches** — many budget KVM switches do not pass through DDC properly
- **Adapters** — passive VGA-to-HDMI or DVI-to-HDMI adapters sometimes fail to relay EDID
- **Docking stations** — USB-C docks with multiple display outputs occasionally corrupt EDID during passthrough

### Missing Resolutions from the Display Settings List

Sometimes your monitor supports a resolution — you know it does because the spec sheet says so — but Windows or macOS does not list it as an option. This usually means the resolution is not declared anywhere in the EDID data.

This is particularly common with:

- **Older monitors** whose EDID was written before certain resolutions became standard
- **TV sets used as monitors** — many TVs only advertise broadcast-standard resolutions (1080p, 4K) and omit PC-standard modes like 1440p
- **Monitors connected through MST hubs or daisy chains** — the hub may filter or modify the EDID

If your GPU supports the resolution but your display settings do not show it, the issue is almost certainly in the EDID. Check whether your GPU can handle the resolution you need by reading our article on [maximum resolution GPU support](/blog/maximum-resolution-gpu-support).

### Overscan and Underscan on TVs

When you connect a PC to a TV via HDMI, the TV's EDID often includes a CEA flag that tells the GPU to treat the display as a television rather than a computer monitor. This can trigger **overscan** — where the GPU zooms in slightly and cuts off the edges of the desktop, causing the [screen resolution to not fit the screen](/blog/screen-resolution-not-fitting-screen) properly.

The fix involves either disabling overscan in your TV's settings, adjusting the GPU's scaling mode, or overriding the EDID to remove the CEA underscan flag.

## How to Read Your Monitor's EDID Data

If you suspect an EDID problem, the first step is to read and inspect the raw data. Several tools make this straightforward.

### On Windows

- **Monitor Asset Manager** (free) — reads and decodes EDID from all connected monitors. Shows every field in a human-readable format.
- **Custom Resolution Utility (CRU)** by ToastyX — reads the EDID, lets you view and edit every timing block, and can write modified EDID data back.
- **Windows PowerShell** — you can pull raw EDID bytes from the registry at `HKLM\SYSTEM\CurrentControlSet\Enum\DISPLAY\<MonitorID>\<InstanceID>\Device Parameters\EDID`.

### On macOS

- **System Information** (Apple menu > About This Mac > System Report > Graphics/Displays) — shows basic EDID-derived information like resolution, vendor, and model.
- **IORegistryExplorer** — for advanced users, this utility can read raw EDID data from the IOKit registry.

### On Linux

- **xrandr --verbose** — dumps EDID hex data along with parsed mode lines.
- **edid-decode** — a dedicated command-line tool that parses EDID data and flags specification violations. Available in most package managers.
- **read-edid / get-edid** — reads EDID directly from the DDC bus.

### What to Look For

When inspecting EDID data, focus on these items:

1. **Preferred timing** — does the first detailed timing match your monitor's actual native resolution and refresh rate?
2. **Established and standard timings** — is your desired resolution listed?
3. **Extension blocks** — are they present and valid? A missing CEA extension means no audio over HDMI and potentially missing high-refresh modes.
4. **Checksum** — each 128-byte block ends with a checksum byte. If it is wrong, the entire block may be ignored by the GPU driver.

## How to Override EDID Data

When the EDID is wrong and you cannot fix it at the source (for example, a monitor with factory-flawed EDID firmware), you can override it at the operating system or GPU driver level.

### Windows: EDID Override via Registry or INF File

Windows allows you to override EDID data by injecting a corrected binary into the registry. The process involves:

1. Reading the current EDID with a tool like CRU.
2. Editing the timing descriptors and resolution list to include the correct modes.
3. Exporting the modified EDID as a .bin file.
4. Installing it via an INF file that tells Windows to use the override instead of reading from the monitor.

Alternatively, Custom Resolution Utility (CRU) can handle this entire process through its GUI — you edit the resolutions, click "export," restart the GPU driver, and the override takes effect.

### NVIDIA and AMD Control Panels

Both NVIDIA and AMD provide options to add custom resolutions that are not in the EDID:

- **NVIDIA Control Panel** > Display > Change resolution > Customize > Create Custom Resolution
- **AMD Adrenalin** > Display > Custom Resolutions

These custom resolutions bypass the EDID's resolution list. The GPU sends the signal regardless of whether the monitor's EDID advertises support for it. This works when the monitor physically supports the resolution but its EDID simply does not list it.

### Linux: xrandr Custom Modes

On Linux, you can add custom modes using xrandr:

```
xrandr --newmode "2560x1440_60" 241.50 2560 2608 2640 2720 1440 1443 1448 1481 +hsync -vsync
xrandr --addmode DP-1 "2560x1440_60"
xrandr --output DP-1 --mode "2560x1440_60"
```

For a permanent override, you can place a corrected EDID binary in `/lib/firmware/edid/` and tell the kernel to load it via the `drm.edid_firmware` boot parameter.

### Risks of EDID Overrides

Overriding EDID is generally safe for the monitor — you cannot damage hardware by sending an unsupported signal, because the monitor will simply refuse to display it and show a "signal out of range" message. However:

- Setting a pixel clock too high can stress the GPU or cable
- Incorrect sync timings can cause image instability, flickering, or a blank screen
- Overrides are per-system, so you will need to re-apply them on a different computer

## EDID vs DisplayID: What Is Replacing EDID?

EDID has been around since 1994. While it has been extended and revised multiple times (the current version is EDID 1.4, released in 2006), its 128-byte base block and rigid structure are showing their age. Modern displays with 8K resolution, high refresh rates, HDR, and adaptive sync need more metadata than EDID was designed to carry.

**DisplayID** is the successor standard, developed by VESA (the same organization behind DisplayPort). Here is how they compare.

| Feature | EDID 1.4 | DisplayID 2.0 |
|---------|---------|---------------|
| **Base block size** | 128 bytes (fixed) | Variable length |
| **Structure** | Rigid fields with fixed offsets | Flexible tagged data blocks |
| **Maximum resolution** | Limited by timing descriptor format (~8K practical max) | No inherent limit |
| **Tiled display support** | Not supported | Native support for multi-tile displays |
| **Adaptive sync** | Not supported natively (uses CTA extensions) | Native adaptive sync range descriptors |
| **HDR metadata** | Via CTA-861 extension blocks | Native HDR data blocks |
| **Type VII timings** | Not available | Supports detailed timing with higher precision |
| **Backward compatibility** | N/A | Can be embedded as an EDID extension block |

### The Current State of Transition

As of 2026, most monitors still use EDID 1.4 as their base with CTA-861 extension blocks for additional features. DisplayID 2.0 is becoming more common in high-end monitors — particularly those with resolutions above 4K, tiled configurations (like the Dell UltraSharp 8K, which is a tiled display internally), or wide adaptive sync ranges.

The transition is gradual because DisplayID 2.0 can be embedded *inside* an EDID extension block. This means a monitor can present standard EDID to older systems while also providing richer DisplayID data to newer GPU drivers that understand it. You do not need to choose one or the other — both coexist.

For most users, the EDID-to-DisplayID transition is invisible. Your operating system and GPU driver handle whichever format the monitor provides. The practical benefit is that newer monitors will correctly report capabilities that older EDID could not describe — like a 4K 240Hz mode or a VRR range of 48-240Hz.

## Troubleshooting Checklist for EDID Issues

If you are dealing with resolution problems and suspect EDID is involved, work through this checklist:

1. **Check your current resolution** at [MyScreenResolution.com](/) and compare it to your monitor's native specification.
2. **Try a different cable.** A surprising number of EDID issues are caused by cheap or damaged cables with poor DDC signal integrity.
3. **Remove adapters and switches.** Connect the monitor directly to the GPU with a single cable. If the problem disappears, the adapter or switch is interfering with DDC.
4. **Check Device Manager.** If your monitor shows as "Generic PnP Monitor," the EDID is not being read successfully.
5. **Read the EDID** with Monitor Asset Manager or CRU. Look for incorrect preferred timings, missing resolutions, or checksum errors.
6. **Update your GPU driver.** Newer drivers sometimes include EDID quirk tables that correct known issues with specific monitor models.
7. **Override the EDID** as a last resort if the monitor's built-in EDID is incorrect and cannot be updated via a firmware update from the manufacturer.

## Conclusion

EDID is one of those technologies that works so well most people never know it exists — until it does not work. It is the reason your PC automatically selects the right resolution when you plug in a monitor, and it is the reason things go wrong when cables degrade, adapters interfere, or manufacturer data contains errors. Understanding what EDID is, what data it carries, and how to inspect and override it gives you the tools to diagnose and fix the most frustrating category of display problems: the ones where your monitor is perfectly capable but your PC refuses to use it correctly.
