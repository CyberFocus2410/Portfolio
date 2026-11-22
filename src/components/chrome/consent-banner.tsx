"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ConsentBanner() {
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    try {
      const consent = localStorage.getItem("portfolio_analytics_consent");
      if (consent === null) {
        // Delay slightly for smooth entrance
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const handleChoice = (allow: boolean) => {
    try {
      localStorage.setItem("portfolio_analytics_consent", allow ? "allowed" : "denied");
    } catch {
      // Storage unavailable
    }
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.aside
          aria-label="Cookie consent banner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl"
        >
          {/* Matches Screenshot 4 design */}
          <div className="bg-[#211E1E]/95 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-4 sm:px-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-[#EDE9E3] text-center sm:text-left leading-tight">
              May I count your visit with Google Analytics? It sets cookies.{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 text-[#A39A92] hover:text-white transition-colors"
              >
                Details
              </Link>
            </p>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleChoice(false)}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[#EDE9E3] font-medium text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                No thanks
              </button>
              <button
                onClick={() => handleChoice(true)}
                className="px-4 py-1.5 rounded-full bg-[#EDE9E3] hover:bg-white text-[#1A1818] font-semibold text-xs shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Allow
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
