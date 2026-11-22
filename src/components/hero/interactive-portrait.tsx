"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface InteractivePortraitProps {
  onOpenAbilityModal: () => void;
}

export function InteractivePortrait({ onOpenAbilityModal }: InteractivePortraitProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [lensPos, setLensPos] = React.useState({ x: 0, y: 0 });

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setLensPos({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // Lens radius in px
  const lensRadius = 85;

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px]">
      {/* Floating "My ability card" Pill */}
      <button
        onClick={onOpenAbilityModal}
        title="View verified skills and profile"
        aria-label="Open My ability card"
        className="absolute top-10 sm:top-14 left-0 sm:-left-4 z-40 px-4 py-2 rounded-full bg-[#1A1818]/95 hover:bg-[#211E1E] text-xs font-mono text-white border border-white/30 shadow-2xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span className="font-semibold">My ability card</span>
      </button>

      {/* Interactive Dual-Layer Portrait Stage */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        className="relative overflow-hidden flex items-end justify-center cursor-crosshair select-none"
      >
        {/* Layer 1: Base Grayscale Portrait */}
        <div className="relative">
          <Image
            src="/assets/portrait-grayscale.png"
            alt="Vivan Mittal - Grayscale Portrait"
            width={440}
            height={800}
            priority
            className="w-auto h-[480px] sm:h-[560px] md:h-[620px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-110"
          />
        </div>

        {/* Layer 2: Full Color Portrait with Circular Clip-Path Reveal */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-[clip-path] duration-75 ease-out"
          style={{
            clipPath: isHovered
              ? `circle(${lensRadius}px at ${lensPos.x}px ${lensPos.y}px)`
              : `circle(0px at 50% 50%)`,
            WebkitClipPath: isHovered
              ? `circle(${lensRadius}px at ${lensPos.x}px ${lensPos.y}px)`
              : `circle(0px at 50% 50%)`,
          }}
        >
          <Image
            src="/assets/portrait-color.png"
            alt="Vivan Mittal - Color Portrait"
            width={440}
            height={800}
            priority
            className="w-auto h-[480px] sm:h-[560px] md:h-[620px] object-contain object-bottom filter contrast-105 brightness-105"
          />
        </div>

        {/* Circular Glowing Lens Ring */}
        {isHovered && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border-2 border-white/80 shadow-[0_0_25px_rgba(255,200,100,0.5),inset_0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-75 ease-out"
            style={{
              width: lensRadius * 2,
              height: lensRadius * 2,
              left: lensPos.x - lensRadius,
              top: lensPos.y - lensRadius,
            }}
          >
            {/* Subtle center lens crosshair or pulse */}
            <div className="absolute inset-0 rounded-full bg-amber-400/[0.04]" />
          </div>
        )}

        {/* Floating tooltip hint on mobile / desktop */}
        <div
          aria-hidden="true"
          className={`absolute bottom-6 z-30 pointer-events-none px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[11px] font-mono text-white/90 shadow-lg backdrop-blur-md transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-80"
          }`}
        >
          Hover over portrait to reveal color ✦
        </div>
      </div>
    </div>
  );
}
