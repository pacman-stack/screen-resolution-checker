"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

export function AnimatedNumber({ value }: { value: number }) {
  const animated = useAnimatedCounter(value);
  return <span>{animated.toLocaleString()}</span>;
}
