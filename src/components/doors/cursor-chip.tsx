"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CursorChipProps {
  isVisible: boolean;
  mousePos: { x: number; y: number };
}

export function CursorChip({ isVisible, mousePos }: CursorChipProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!isVisible || shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: mousePos.x + 18,
        y: mousePos.y + 18,
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="pointer-events-none fixed top-0 left-0 z-50 px-3.5 py-1.5 rounded-full bg-[#EDE9E3] text-[#1A1818] text-xs font-semibold shadow-2xl backdrop-blur-md flex items-center gap-1.5"
    >
      <span>Click to enter</span>
      <span className="text-xs">→</span>
    </motion.div>
  );
}
