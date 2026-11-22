"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { DoorData } from "@/data/doors-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DoorPanelProps {
  door: DoorData;
}

export function DoorPanel({ door }: DoorPanelProps) {
  return (
    <div className="p-7 sm:p-8 rounded-3xl bg-[#1A1818]/95 border border-white/20 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-w-lg w-full">
      {/* Domain Title */}
      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
        {door.title}
      </h3>

      {/* Monospace Tagline */}
      <p className="mt-2 text-xs font-mono tracking-wider text-amber-300 uppercase font-bold">
        {door.tagline}
      </p>

      {/* Checklist */}
      <ul className="mt-6 space-y-3">
        {door.checklist.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-white font-medium">
            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {/* Enter Action */}
      <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-[#D1C9BE]">
          Click door or button to enter
        </span>
        <Link href={door.href}>
          <Button variant="primary" size="sm" hasArrow>
            Enter {door.title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
