"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DOORS_DATA, DoorData } from "@/data/doors-data";
import { ArchedDoor } from "@/components/doors/arched-door";
import { DoorPanel } from "@/components/doors/door-panel";
import { CursorChip } from "@/components/doors/cursor-chip";
import { motion, AnimatePresence } from "framer-motion";

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
                <button
                  onClick={() => setHoveredDoorId(isOpen ? null : door.id)}
                  className="text-xs font-mono px-4 py-2 rounded-full bg-white/15 text-white border border-white/20 hover:bg-white/25 transition-colors font-semibold"
                >
                  {isOpen ? "Hide details" : "Tap for details"}
                </button>
                {isOpen && (
                  <div className="w-[300px]">
                    <DoorPanel door={door} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floor and Skirting Board Base matching Screenshot 2 */}
        <div className="absolute bottom-0 inset-x-0 z-0">
          {/* Skirting Board Molding */}
          <div className="w-full h-4 bg-[#2A2626] border-t border-white/10 shadow-[0_-2px_10px_rgba(0,0,0,0.8)]" />
          <div className="w-full h-2 bg-[#1A1818] border-t border-black" />
          {/* Floor Planks with Dot Grid Texture */}
          <div className="w-full h-10 bg-gradient-to-b from-[#141212] to-[#0D0C0C] border-t border-white/5 bg-dot-grid" />
        </div>
      </div>
    </div>
  );
}
