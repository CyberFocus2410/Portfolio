"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { DoorData } from "@/data/doors-data";
import { ArrowRight, Sparkles } from "lucide-react";

interface ArchedDoorProps {
  door: DoorData;
  isOpen: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onSelect: () => void;
}

export function ArchedDoor({
  door,
  isOpen,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  onSelect,
}: ArchedDoorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={door.href}
      aria-label={`Enter ${door.title} domain`}
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className={`group relative block w-[210px] sm:w-[230px] md:w-[250px] h-[390px] sm:h-[430px] md:h-[460px] flex-shrink-0 cursor-pointer select-none transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 rounded-t-[125px] ${
        isDimmed ? "opacity-20 scale-[0.98]" : "opacity-100 scale-100"
      }`}
      style={{ perspective: 1200 }}
    >
      {/* Outer Door Frame / Portal Trim */}
      <div className="absolute inset-0 rounded-t-[125px] bg-[#141212] border-[10px] sm:border-[12px] border-[#2A2626] shadow-[inset_0_10px_30px_rgba(0,0,0,0.9),0_20px_40px_rgba(0,0,0,0.7)] flex overflow-hidden group-hover:border-[#3D3737] transition-colors">
        {/* Interior Void & Portal Entrance (Revealed when door swings open) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0D0C0C] via-[#141212] to-[#1A1818] flex flex-col items-center justify-center p-4 overflow-hidden"
          style={{
            boxShadow: isOpen
              ? `inset 0 0 60px ${door.glowColor}, 0 0 40px ${door.glowColor}`
              : "none",
          }}
        >
          {/* Subtle interior light beam */}
          <div
            className={`absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Perspective Portal Depth Rings */}
          <div
            className={`absolute inset-4 rounded-t-[100px] border border-white/10 transition-all duration-700 pointer-events-none ${
              isOpen ? "opacity-60 scale-95" : "opacity-0 scale-75"
            }`}
            style={{ borderColor: door.glowColor }}
          />

          {/* Glowing Portal Corridor & Step Inside CTA */}
          <div
            className={`relative z-10 flex flex-col items-center gap-3 transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-90"
            }`}
          >
            {/* Glowing Orb */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl border border-white/20 transition-transform group-hover:scale-110"
              style={{
                background: `radial-gradient(circle, ${door.glowColor} 0%, rgba(20,18,18,0.9) 70%)`,
              }}
            >
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 animate-pulse" />
            </div>

            {/* Floating Portal Action Pill */}
            <div className="px-4 py-2 rounded-full bg-white text-[#141212] font-mono font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(255,255,255,0.7)] flex items-center gap-2 group-hover:scale-105 transition-transform">
              <span>Step Inside</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>

            <span className="text-[10px] sm:text-[11px] font-mono text-[#EDE9E3] font-semibold tracking-widest uppercase text-center px-2">
              Click to Enter Realm
            </span>
          </div>
        </div>

        {/* 3D Swinging Door Leaf */}
        <motion.div
          animate={
            isOpen && !shouldReduceMotion
              ? { rotateY: -65, x: 8 }
              : { rotateY: 0, x: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 18,
            mass: 1.2,
          }}
          style={{
            transformOrigin: "left center",
            backgroundColor: door.baseColor,
          }}
          className="relative w-full h-full rounded-t-[115px] border-r-2 border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.6),5px_0_15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center justify-between py-6"
        >
          {/* Fluted Vertical Grooves / Ribs */}
          <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-25">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="w-[1.5px] h-full bg-gradient-to-b from-black via-black/80 to-transparent shadow-[1px_0_0_rgba(255,255,255,0.08)]"
              />
            ))}
          </div>

          {/* Arched Panel Inset Border */}
          <div className="absolute inset-3 rounded-t-[100px] border border-white/15 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.4)]" />

          {/* Brass Nameplate */}
          <div className="relative z-10 mt-14 sm:mt-16 px-4 py-2 rounded-sm bg-gradient-to-b from-[#E2B766] via-[#B58632] to-[#7D581C] border border-[#F5D591] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center min-w-[130px] sm:min-w-[145px]">
            {/* Corner Screws */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-[#523A12] border border-[#F5D591]/50" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#523A12] border border-[#F5D591]/50" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-[#523A12] border border-[#F5D591]/50" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#523A12] border border-[#F5D591]/50" />

            <span className="font-mono font-black text-[11px] sm:text-xs tracking-wider text-[#2E1F09] drop-shadow-[0_1px_0_rgba(255,255,255,0.4)] uppercase">
              {door.brassTitle}
            </span>
          </div>

          {/* Brass Lever Handle and Keyhole */}
          <div className="relative z-10 self-end mr-4 sm:mr-5 mb-16 sm:mb-20 flex flex-col items-center">
            {/* Lever Escutcheon Plate */}
            <div className="w-5 h-10 rounded-sm bg-gradient-to-b from-[#D9A752] via-[#9E6F22] to-[#614210] border border-[#F5D591]/60 shadow-md flex flex-col items-center justify-between p-1">
              {/* Handle Lever */}
              <div className="w-7 h-2 rounded-full bg-gradient-to-r from-[#F5D591] via-[#D9A752] to-[#7A5416] -ml-5 shadow-sm transform -rotate-3" />
              {/* Keyhole */}
              <div className="w-1.5 h-2.5 rounded-full bg-black/80 mb-1" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Door Base Shadow */}
      <div className="absolute -bottom-2 inset-x-2 h-4 bg-black/80 blur-md rounded-full pointer-events-none" />
    </Link>
  );
}
