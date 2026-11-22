"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DOORS_DATA, DoorData } from "@/data/doors-data";
import { ArchedDoor } from "@/components/doors/arched-door";
import { DoorPanel } from "@/components/doors/door-panel";
import { CursorChip } from "@/components/doors/cursor-chip";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DoorsStage() {
  const router = useRouter();
  const [hoveredDoorId, setHoveredDoorId] = React.useState<string | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isMouseOverStage, setIsMouseOverStage] = React.useState(false);

  const activeDoor = DOORS_DATA.find((d) => d.id === hoveredDoorId) || null;
  const hoveredIndex = DOORS_DATA.findIndex((d) => d.id === hoveredDoorId);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleSelectDoor = (door: DoorData) => {
    router.push(door.href);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOverStage(true)}
      onMouseLeave={() => {
        setIsMouseOverStage(false);
        setHoveredDoorId(null);
      }}
      className="relative w-full overflow-hidden select-none"
    >
      {/* Dynamic Cursor Chip "Click to enter →" */}
      <CursorChip
        isVisible={isMouseOverStage && hoveredDoorId !== null}
        mousePos={mousePos}
      />

      {/* Doors Wall Container */}
      <div className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[640px] flex flex-col justify-end items-center px-4 sm:px-8 pb-12 pt-6">
        {/* Desktop View: Horizontal Row of Doors & Overlay Panel Hovering on the Side */}
        <div className="hidden lg:flex items-end justify-center gap-8 xl:gap-12 relative z-10 w-full max-w-7xl min-h-[480px]">
          {DOORS_DATA.map((door) => {
            const isOpen = hoveredDoorId === door.id;
            const isDimmed = hoveredDoorId !== null && !isOpen;

            return (
              <div key={door.id} className="relative flex flex-col items-center">
                <ArchedDoor
                  door={door}
                  isOpen={isOpen}
                  isDimmed={isDimmed}
                  onHoverStart={() => setHoveredDoorId(door.id)}
                  onHoverEnd={() => {}}
                  onSelect={() => handleSelectDoor(door)}
                />
              </div>
            );
          })}

          {/* Floating Information Panel hovering directly OVER the other doors on the side */}
          <AnimatePresence mode="wait">
            {activeDoor && (
              <motion.div
                key={activeDoor.id}
                initial={{ opacity: 0, x: hoveredIndex <= 1 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseEnter={() => setHoveredDoorId(activeDoor.id)}
                className={`absolute top-1/2 -translate-y-1/2 z-30 pointer-events-auto max-w-md xl:max-w-lg w-full ${
                  hoveredIndex <= 1
                    ? "right-6 xl:right-16"
                    : "left-6 xl:left-16"
                }`}
              >
                <DoorPanel door={activeDoor} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile / Tablet View: Horizontal Scroll-Snap Strip */}
        <div className="lg:hidden w-full overflow-x-auto flex gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none px-4">
          {DOORS_DATA.map((door) => {
            const isOpen = hoveredDoorId === door.id;

            return (
              <div
                key={door.id}
                className="snap-center flex-shrink-0 flex flex-col items-center gap-4"
              >
                <ArchedDoor
                  door={door}
                  isOpen={isOpen}
                  isDimmed={false}
                  onHoverStart={() => setHoveredDoorId(door.id)}
                  onHoverEnd={() => {}}
                  onSelect={() => handleSelectDoor(door)}
                />
                <div className="flex items-center gap-2">
                  <Link
                    href={door.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full bg-white text-[#141212] font-bold shadow-md hover:bg-neutral-100 transition-colors"
                  >
                    <span>Enter {door.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setHoveredDoorId(isOpen ? null : door.id)}
                    className="text-xs font-mono px-4 py-2 rounded-full bg-white/15 text-white border border-white/20 hover:bg-white/25 transition-colors font-semibold"
                  >
                    {isOpen ? "Hide details" : "Checklist"}
                  </button>
                </div>
                {isOpen && (
                  <div className="w-[300px]">
                    <DoorPanel door={door} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ground Line & Floor Glow */}
        <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8" />
        <div className="w-1/2 max-w-md h-12 bg-amber-500/5 blur-2xl rounded-full pointer-events-none -mt-6" />
      </div>
    </div>
  );
}
