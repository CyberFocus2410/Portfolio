"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Preloader() {
  const [progress, setProgress] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [isEntered, setIsEntered] = React.useState(false);
  const [hasVisited, setHasVisited] = React.useState(true); // default true to avoid flash on SSR
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    // Check if user already entered during this browser session
    const visited = sessionStorage.getItem("portfolio_has_entered");
    if (visited || shouldReduceMotion) {
      setHasVisited(true);
      setIsEntered(true);
      return;
    }

    setHasVisited(false);

    // Smooth counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Random incremental pacing
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleEnter = () => {
    try {
      sessionStorage.setItem("portfolio_has_entered", "true");
    } catch {
      // Ignore storage errors
    }
    setIsEntered(true);
  };

  if (hasVisited && isEntered) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isEntered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#1A1818] flex flex-col justify-between p-8 sm:p-12 text-[#EDE9E3] select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-[#A39A92]">
            <span>Vivan Mittal · Portfolio</span>
            <span>B.Tech CSE (2025–2029)</span>
          </div>

          {/* Center Stage: Percentage Counter & Enter Gate */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="font-mono text-7xl sm:text-9xl font-black tracking-tighter text-[#EDE9E3]">
              {String(progress).padStart(2, "0")}
              <span className="text-3xl sm:text-5xl text-[#A39A92] font-normal ml-2">
                %
              </span>
            </div>

            <div className="h-16 mt-8 flex items-center justify-center">
              {isReady ? (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                  autoFocus
                  className="px-6 py-3 rounded-full bg-[#EDE9E3] text-[#1A1818] font-semibold text-sm flex items-center gap-2 shadow-2xl hover:bg-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <span>Click to enter</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <div className="text-xs font-mono text-[#A39A92] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>Loading experience...</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-[#A39A92]">
            <span>Delhi Technical Campus</span>
            <span>Cybersecurity · AI/ML · Web</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
