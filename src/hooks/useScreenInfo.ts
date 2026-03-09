"use client";

import { useState, useEffect, useCallback } from "react";
import type { ScreenInfo } from "@/types";

export function useScreenInfo(): ScreenInfo | null {
  const [info, setInfo] = useState<ScreenInfo | null>(null);

  const update = useCallback(() => {
    setInfo({
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      dpr: window.devicePixelRatio,
      colorDepth: window.screen.colorDepth,
    });
  }, []);

  useEffect(() => {
    update();

    window.addEventListener("resize", update);

    const mql = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );
    mql.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      mql.removeEventListener("change", update);
    };
  }, [update]);

  return info;
}
