"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLamp } from "@/context/lamp-context";

export function RopePull() {
  const { lampOn, toggleLamp } = useLamp();
  const [isPulling, setIsPulling] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handlePull = () => {
    setIsPulling(true);
    toggleLamp();
    setTimeout(() => setIsPulling(false), 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePull();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handlePull}
      onKeyDown={handleKeyDown}
      title={lampOn ? "Turn off ambient desk lamp" : "Pull rope to turn on warm desk lamp"}
      aria-label="Toggle ambient desk lamp"
      className="relative flex flex-col items-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-b-full px-2"
    >
      {/* Cord line */}
      <motion.div
        animate={
          isPulling && !shouldReduceMotion
            ? { height: [30, 48, 28, 30] }
            : { height: 30 }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="w-[1.5px] bg-neutral-400 group-hover:bg-amber-200 transition-colors"
      />

      {/* Wooden acorn / pull knob */}
      <motion.div
        animate={
          isPulling && !shouldReduceMotion
            ? { y: [0, 16, -2, 0] }
            : { y: 0 }
        }
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
        className={`w-3 h-5 rounded-full border shadow-md transition-all duration-300 ${
          lampOn
            ? "bg-[#D98236] border-amber-300 shadow-[0_0_12px_rgba(255,180,80,0.8)]"
            : "bg-[#8C5A3C] border-[#664028] shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110"
        }`}
      />

      {/* Subtle indicator chip on hover */}
      <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-[#211E1E] border border-white/10 text-[10px] font-mono text-amber-200 shadow-lg">
        {lampOn ? "Lamp: On" : "Pull rope"}
      </div>
    </div>
  );
}
