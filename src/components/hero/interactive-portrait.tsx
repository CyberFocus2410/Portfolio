"use client";

import * as React from "react";
import Image from "next/image";

export function InteractivePortrait() {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [lensPos, setLensPos] = React.useState({ x: 0, y: 0 });

  const updatePosition = (clientX: number, clientY: number) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
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
  const lensRadius = 90;

  return (
    <div className="relative flex justify-center items-end">
      {/* The Image Stage: Base and Color Overlay Locked 1:1 in the EXACT same dimensions */}
      <div
        ref={wrapperRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        className="relative inline-block overflow-hidden cursor-crosshair select-none"
      >
        {/* Layer 1: Base Grayscale Portrait */}
        <div className="relative block">
          <Image
            src="/assets/portrait-grayscale.png"
            alt="Vivan Mittal - Grayscale Portrait"
            width={301}
            height={1024}
            priority
            className="w-auto h-[480px] sm:h-[560px] md:h-[620px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-110 pointer-events-none block"
          />
        </div>

        {/* Layer 2: Color Overlay - Locked 1:1 over Layer 1 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none transition-[clip-path] duration-75 ease-out"
          style={{
            clipPath: isHovered
              ? `circle(${lensRadius}px at ${lensPos.x}px ${lensPos.y}px)`
              : `circle(0px at 0 0)`,
            WebkitClipPath: isHovered
              ? `circle(${lensRadius}px at ${lensPos.x}px ${lensPos.y}px)`
              : `circle(0px at 0 0)`,
          }}
        >
          <Image
            src="/assets/portrait-color.png"
            alt="Vivan Mittal - Color Portrait"
            width={301}
            height={1024}
            priority
            className="w-full h-full object-contain object-bottom filter contrast-105 brightness-105 pointer-events-none block"
          />
        </div>

        {/* Circular Glowing Lens Ring */}
        {isHovered && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border-2 border-white/90 shadow-[0_0_25px_rgba(255,200,100,0.6),inset_0_0_15px_rgba(255,255,255,0.4)] transition-transform duration-75 ease-out"
            style={{
              width: lensRadius * 2,
              height: lensRadius * 2,
              left: lensPos.x - lensRadius,
              top: lensPos.y - lensRadius,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-amber-400/[0.04]" />
          </div>
        )}

        {/* Subtle hover prompt */}
        <div
          aria-hidden="true"
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[11px] font-mono text-white/90 shadow-lg backdrop-blur-md transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-80"
          }`}
        >
          Hover over portrait to reveal color ✦
        </div>
      </div>
    </div>
  );
}
