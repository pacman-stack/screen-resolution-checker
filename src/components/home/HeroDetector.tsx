"use client";

import { motion } from "framer-motion";
import type { ScreenInfo } from "@/types";
import { AnimatedNumber } from "./AnimatedNumber";

export function HeroDetector({ info }: { info: ScreenInfo | null }) {
  return (
    <div className="py-20 text-center sm:py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--muted-foreground)]"
      >
        Your Screen Resolution Is
      </motion.p>

      {info ? (
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
        >
          <AnimatedNumber value={info.screenWidth} />
          <span className="mx-3 text-[var(--muted-foreground)] sm:mx-4">
            &times;
          </span>
          <AnimatedNumber value={info.screenHeight} />
        </motion.h1>
      ) : (
        <div className="mx-auto h-20 w-96 max-w-full animate-pulse rounded-xl bg-[var(--muted)] sm:h-24" />
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg text-[var(--muted-foreground)]"
      >
        {info
          ? `${info.dpr}x pixel ratio · ${info.colorDepth}-bit color · ${info.viewportWidth}×${info.viewportHeight} viewport`
          : "Detecting your display..."}
      </motion.p>
    </div>
  );
}
