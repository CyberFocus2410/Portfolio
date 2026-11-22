"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FlipCardProps {
  roles: string[];
  autoCycleInterval?: number;
}

export function FlipCard({
  roles,
  autoCycleInterval = 3200,
}: FlipCardProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Auto-cycle timer
  React.useEffect(() => {
    if (isHovered || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, autoCycleInterval);

    return () => clearInterval(interval);
  }, [roles.length, autoCycleInterval, isHovered, shouldReduceMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % roles.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setCurrentIndex((prev) => (prev - 1 + roles.length) % roles.length);
    }
  };

  return (
    <div
      role="region"
      aria-label="Vivan Mittal Role Carousel"
      className="relative select-none inline-block w-full max-w-[460px]"
    >
      {/* Screen-reader announcement container */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current role: {roles[currentIndex]}, role {currentIndex + 1} of {roles.length}
      </div>

      <div
        tabIndex={0}
        role="button"
        aria-label={`Cycle role: Currently ${roles[currentIndex]}. Click to see next.`}
        onClick={handleNext}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-3xl"
      >
        {/* Binder Spiral Rings */}
        <div className="relative z-30 flex justify-between items-center px-6 -mb-3 sm:-mb-3.5 pointer-events-none">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Silver Wire Loop */}
              <div className="w-2 sm:w-2.5 h-6 sm:h-7 rounded-full bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-400 border border-neutral-400 shadow-sm" />
              {/* Punched hole */}
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 -mt-1 shadow-inner" />
            </div>
          ))}
        </div>

        {/* Stacked Paper Deck Underneath (Physical Pad Depth) */}
        <div className="absolute inset-0 top-3 bg-neutral-300 rounded-2xl sm:rounded-3xl translate-y-2 translate-x-1 shadow-lg opacity-80" />
        <div className="absolute inset-0 top-3 bg-neutral-200 rounded-2xl sm:rounded-3xl translate-y-1 translate-x-0.5 shadow-md opacity-90" />

        {/* Top Active Card */}
        <div className="relative z-20 bg-[#F4F1EA] text-[#1A1818] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border border-neutral-300 transition-transform duration-200 group-hover:-translate-y-1">
          {/* Role text with smooth page-flip transition */}
          <div className="h-16 sm:h-20 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 16, rotateX: -15 }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, rotateX: 0 }
                }
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -16, rotateX: 15 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-none text-[#1A1818]"
              >
                {roles[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Bottom Meta Bar */}
          <div className="mt-4 pt-3 border-t border-neutral-300/80 flex items-center justify-between text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span>ROLES</span>
            </span>
            <span className="font-semibold text-neutral-700">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(roles.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
