"use client";

import type { ScreenInfo } from "@/types";
import { MetricCard } from "./MetricCard";
import { AnimatedNumber } from "./AnimatedNumber";
import { formatResolution } from "@/lib/utils";

export function MetricsGrid({ info }: { info: ScreenInfo | null }) {
  if (!info) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--muted)]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard
        label="Screen Resolution"
        value={formatResolution(info.screenWidth, info.screenHeight)}
        sublabel={`${(info.screenWidth * info.screenHeight / 1_000_000).toFixed(1)}M pixels`}
      >
        <p className="text-3xl font-bold tracking-tight">
          <AnimatedNumber value={info.screenWidth} />
          <span className="mx-2 text-[var(--muted-foreground)]">&times;</span>
          <AnimatedNumber value={info.screenHeight} />
        </p>
      </MetricCard>

      <MetricCard
        label="Viewport Size"
        value={formatResolution(info.viewportWidth, info.viewportHeight)}
        sublabel="CSS pixels (browser window)"
      >
        <p className="text-3xl font-bold tracking-tight">
          <AnimatedNumber value={info.viewportWidth} />
          <span className="mx-2 text-[var(--muted-foreground)]">&times;</span>
          <AnimatedNumber value={info.viewportHeight} />
        </p>
      </MetricCard>

      <MetricCard
        label="Device Pixel Ratio"
        value={`${info.dpr}x`}
        sublabel={`${info.dpr} physical pixel${info.dpr !== 1 ? "s" : ""} per CSS pixel`}
      />

      <MetricCard
        label="Color Depth"
        value={`${info.colorDepth}-bit`}
        sublabel={`${Math.pow(2, info.colorDepth).toLocaleString()} colors`}
      />
    </div>
  );
}
