"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, Sparkles, Shield, Award, MapPin, Clock, Laptop } from "lucide-react";

interface AbilityCard3DProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AbilityCard3D({ isOpen, onClose }: AbilityCard3DProps) {
  // Mouse tracking for 3D card tilt
  const cardRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for fluid tilt physics
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Calculate 3D rotations (-16 to +16 degrees)
  const rotateX = useTransform(smoothY, [0, 1], [14, -14]);
  const rotateY = useTransform(smoothX, [0, 1], [-14, 14]);

  // Holographic glare shine coordinates
  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Keyboard escape listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Ability stats with dot leaders matching reference
  const abilities = [
    { label: "Cybersecurity & Blue Teaming", score: 94 },
    { label: "Web Development", score: 90 },
    { label: "UI/UX Design", score: 88 },
    { label: "Graphic Design", score: 85 },
    { label: "App Development", score: 85 },
    { label: "AI / ML Systems", score: 82 },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="collectible-card-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden select-none animate-fade-in"
      onClick={onClose}
    >
      {/* Ambient Floating Golden Embers in Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/40 animate-pulse"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              width: `${(i % 4) * 2 + 2}px`,
              height: `${(i % 4) * 2 + 2}px`,
              boxShadow: "0 0 12px rgba(251, 191, 36, 0.6)",
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${(i % 5) * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Top Right Close Button matching screenshot */}
      <div className="absolute top-5 right-6 z-50">
        <button
          onClick={onClose}
          aria-label="Close Ability Card"
          className="px-4 py-1.5 rounded-full bg-black/60 hover:bg-white/10 text-white/90 hover:text-white border border-white/20 shadow-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
        >
          <X className="w-3.5 h-3.5" />
          <span>Close</span>
        </button>
      </div>

      {/* Top Left Watermark Badge */}
      <div className="absolute top-6 left-6 z-50 hidden sm:flex items-center gap-2 text-white/40 font-mono text-[11px] tracking-widest uppercase">
        <Sparkles className="w-3.5 h-3.5 text-amber-400/60" />
        <span>VIVAN MITTAL // COLLECTIBLE ABILITY CARD</span>
      </div>

      {/* 3D Perspective Card Wrapper */}
      <div
        style={{ perspective: 1200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex items-center justify-center"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-[340px] sm:w-[410px] md:w-[450px] rounded-[28px] p-3.5 sm:p-4 cursor-grab active:cursor-grabbing"
        >
          {/* Outer Multi-layered Baroque Ornate Golden Frame */}
          <div
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #f5d591 0%, #d4a343 25%, #9e6f22 50%, #f7dfa5 75%, #7a5416 100%)",
              boxShadow:
                "0 30px 80px rgba(0, 0, 0, 0.95), 0 0 40px rgba(212, 163, 67, 0.25), inset 0 2px 3px rgba(255, 255, 255, 0.6)",
            }}
          />

          {/* Intricate Filigree Corner Flourishes (SVG Vector Baroque Corners) */}
          <svg
            className="absolute top-2 left-2 w-10 h-10 text-[#54380e] pointer-events-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M4 4 Q 20 4 20 20 Q 4 20 4 4 Z M6 6 Q 6 16 16 16 Q 16 6 6 6 Z" opacity="0.8" />
            <circle cx="8" cy="8" r="2" fill="#382406" />
            <path d="M2 14 C 2 8, 8 2, 14 2 C 16 4, 18 8, 14 12 C 10 16, 4 16, 2 14 Z" />
          </svg>
          <svg
            className="absolute top-2 right-2 w-10 h-10 text-[#54380e] pointer-events-none transform scale-x-[-1] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M4 4 Q 20 4 20 20 Q 4 20 4 4 Z M6 6 Q 6 16 16 16 Q 16 6 6 6 Z" opacity="0.8" />
            <circle cx="8" cy="8" r="2" fill="#382406" />
            <path d="M2 14 C 2 8, 8 2, 14 2 C 16 4, 18 8, 14 12 C 10 16, 4 16, 2 14 Z" />
          </svg>
          <svg
            className="absolute bottom-2 left-2 w-10 h-10 text-[#54380e] pointer-events-none transform scale-y-[-1] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M4 4 Q 20 4 20 20 Q 4 20 4 4 Z M6 6 Q 6 16 16 16 Q 16 6 6 6 Z" opacity="0.8" />
            <circle cx="8" cy="8" r="2" fill="#382406" />
            <path d="M2 14 C 2 8, 8 2, 14 2 C 16 4, 18 8, 14 12 C 10 16, 4 16, 2 14 Z" />
          </svg>
          <svg
            className="absolute bottom-2 right-2 w-10 h-10 text-[#54380e] pointer-events-none transform scale-[-1] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M4 4 Q 20 4 20 20 Q 4 20 4 4 Z M6 6 Q 6 16 16 16 Q 16 6 6 6 Z" opacity="0.8" />
            <circle cx="8" cy="8" r="2" fill="#382406" />
            <path d="M2 14 C 2 8, 8 2, 14 2 C 16 4, 18 8, 14 12 C 10 16, 4 16, 2 14 Z" />
          </svg>

          {/* Dotted Beaded Inner Gold Line */}
          <div className="absolute inset-2.5 rounded-[22px] border-2 border-dashed border-[#573d13]/60 pointer-events-none" />

          {/* Inner Card Face */}
          <div
            className="relative rounded-[20px] overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between"
            style={{
              background:
                "radial-gradient(ellipse at 50% 20%, #4a3416 0%, #291d0e 60%, #171108 100%)",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.85)",
            }}
          >
            {/* Top Name Banner Plaque */}
            <div className="relative mx-auto mb-3 max-w-[280px] w-full flex items-center justify-center">
              {/* Gold Ribbon Banner Base */}
              <div
                className="w-full py-1.5 px-4 rounded-full border border-[#f5d591] text-center shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.8)] relative"
                style={{
                  background:
                    "linear-gradient(180deg, #fdf8eb 0%, #edd8a8 45%, #d6b367 75%, #f4e3b7 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#523a12]" />
                  <h3
                    id="collectible-card-title"
                    className="font-black text-sm sm:text-base tracking-wide text-[#2b1c09] uppercase drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
                  >
                    Vivan Mittal
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#523a12]" />
                </div>
              </div>
            </div>

            {/* Upper Frame: Holographic Portrait Section */}
            <div className="relative rounded-2xl overflow-hidden border-[3px] border-[#c4983d] shadow-[0_8px_20px_rgba(0,0,0,0.7)] bg-[#0A0806] h-[220px] sm:h-[260px] w-full flex items-center justify-center">
              {/* Holographic Iridescent Shimmer Background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, rgba(245, 213, 145, 0.25) 0%, rgba(120, 0, 255, 0.2) 40%, rgba(0, 212, 255, 0.15) 70%, transparent 100%)",
                }}
              />

              {/* Holographic Concentric Rings / Particle Shimmer */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Portrait Image (Using User Uploaded Full-Body Sticker Cutout) */}
              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/assets/ability-card-portrait.jpg"
                  alt="Vivan Mittal - Ability Card Portrait"
                  width={448}
                  height={1024}
                  priority
                  className="object-contain object-center w-full h-full max-h-full transition-transform duration-500 hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Dynamic Rainbow Holographic Foil Over Photo */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-45"
                style={{
                  background: `linear-gradient(125deg, transparent 20%, rgba(255, 100, 200, 0.35) 40%, rgba(100, 220, 255, 0.45) 55%, rgba(255, 230, 100, 0.35) 70%, transparent 85%)`,
                  backgroundPositionX: glareX,
                  backgroundPositionY: glareY,
                }}
              />

              {/* Portrait Corner Ornaments */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#ffecb3] pointer-events-none z-20" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#ffecb3] pointer-events-none z-20" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#ffecb3] pointer-events-none z-20" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#ffecb3] pointer-events-none z-20" />
            </div>

            {/* Middle Filigree Scroll Divider */}
            <div className="my-2.5 flex items-center justify-center gap-2 pointer-events-none">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4a343] to-[#523a12]" />
              <svg className="w-5 h-5 text-[#f5d591]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
              </svg>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#d4a343] to-[#523a12]" />
            </div>

            {/* Lower Section: Aged Parchment Stats Box */}
            <div
              className="relative rounded-xl p-3 sm:p-4 border-2 border-[#c4983d] shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]"
              style={{
                background:
                  "linear-gradient(180deg, #f7f1e1 0%, #eee4ce 60%, #e5d7bd 100%)",
              }}
            >
              {/* Decorative Corner Filigrees on Parchment */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#73531b]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#73531b]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#73531b]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#73531b]" />

              {/* Stats Rows with Dot Leaders */}
              <div className="space-y-1.5 font-mono">
                {abilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#2d2112]"
                  >
                    <span className="font-semibold text-[#1f170c] tracking-tight">
                      {item.label}
                    </span>
                    <span className="flex-1 mx-2 overflow-hidden text-[#8f7956] tracking-widest text-[10px] select-none text-center">
                      ....................................
                    </span>
                    <span className="font-mono font-black text-[#1a1208] text-xs sm:text-sm min-w-[24px] text-right">
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Pill Strip */}
            <div className="mt-3">
              <div
                className="py-1.5 px-3 rounded-full border border-[#d4a343] shadow-md flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-[#3d2c14]"
                style={{
                  background:
                    "linear-gradient(180deg, #fdf8eb 0%, #ebdcb7 100%)",
                }}
              >
                <div className="flex items-center gap-1">
                  <span className="text-[#7a5821] font-normal">based:</span>
                  <span>India</span>
                </div>
                <div className="h-2.5 w-[1px] bg-[#a88647]" />
                <div className="flex items-center gap-1">
                  <span className="text-[#7a5821] font-normal">works:</span>
                  <span>Remotely</span>
                </div>
                <div className="h-2.5 w-[1px] bg-[#a88647]" />
                <div className="flex items-center gap-1">
                  <span className="text-[#7a5821] font-normal">replies:</span>
                  <span>&lt; 2 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Holographic Specular Glare Layer Across Whole Card */}
          <motion.div
            className="absolute inset-0 rounded-[28px] pointer-events-none mix-blend-overlay opacity-30"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
