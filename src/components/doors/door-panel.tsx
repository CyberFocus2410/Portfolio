"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { DoorData } from "@/data/doors-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DoorPanelProps {
  door: DoorData;
}

export function DoorPanel({ door }: DoorPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-6 sm:p-8 rounded-3xl bg-[#211E1E]/95 border border-white/15 backdrop-blur-md shadow-2xl max-w-md w-full"
    >
      {/* Domain Title */}
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#EDE9E3] tracking-tight">
        {door.title}
      </h3>

      {/* Monospace Tagline */}
      <p className="mt-2 text-xs font-mono tracking-wider text-[#A39A92] uppercase font-semibold">
        {door.tagline}
      </p>

      {/* Checklist */}
      <ul className="mt-6 space-y-3">
        {door.checklist.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#EDE9E3]">
            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {/* Enter Action */}
      <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-[#A39A92]">
          Click door or button to enter
        </span>
        <Link href={door.href}>
          <Button variant="primary" size="sm" hasArrow>
            Enter {door.title}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
