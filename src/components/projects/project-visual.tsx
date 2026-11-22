"use client";

import * as React from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  BarChart3,
  KeyRound,
  Atom,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Cpu,
  Wifi,
  Sparkles,
  ExternalLink,
  Coffee,
} from "lucide-react";

interface ProjectVisualProps {
  slug: string;
  title: string;
}

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  // 1. SecureScan AI: Dark Cyber Terminal Radar
  if (slug === "securescan-ai" || slug.includes("securescan")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#0c1017] rounded-xl p-4 sm:p-5 border border-cyan-500/20 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top Status Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold tracking-wider">SECURESCAN // CVE-RADAR</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
            ENGINE: ACTIVE
          </span>
        </div>

        {/* Radar & Metrics Row */}
        <div className="relative z-10 my-3 grid grid-cols-12 gap-3 items-center">
          {/* Radar Sweep Graphic */}
          <div className="col-span-5 sm:col-span-4 flex items-center justify-center">
            <div className="relative w-24 h-24 rounded-full border border-cyan-500/40 flex items-center justify-center bg-cyan-950/20">
              <div className="w-16 h-16 rounded-full border border-cyan-500/30" />
              <div className="w-8 h-8 rounded-full border border-cyan-500/20" />
              <div className="absolute inset-0 border-t border-cyan-400 rounded-full animate-spin" />
              <ShieldAlert className="w-5 h-5 text-cyan-300 relative z-10" />
            </div>
          </div>

          {/* Severity Counters */}
          <div className="col-span-7 sm:col-span-8 grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-white/60 text-[10px]">SECURITY SCORE</div>
              <div className="text-base font-bold text-emerald-400">98 / 100</div>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-white/60 text-[10px]">CRITICAL CVE</div>
              <div className="text-base font-bold text-emerald-400">0 FOUND</div>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-white/60 text-[10px]">PORTS SCANNED</div>
              <div className="text-base font-bold text-cyan-300">1,024</div>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-white/60 text-[10px]">TLS RATING</div>
              <div className="text-base font-bold text-amber-300">GRADE A+</div>
            </div>
          </div>
        </div>

        {/* Live Terminal Log Stream */}
        <div className="relative z-10 pt-2 border-t border-cyan-500/20 text-[10px] text-cyan-300/80 truncate">
          <span className="text-cyan-400 font-bold">$</span> scan --target 192.168.1.0/24 : 0 zero-day anomalies detected [OK]
        </div>
      </div>
    );
  }

  // 2. Password Strength Analyser: Entropy Waveform & NIST Compliance
  if (slug === "password-analyser" || slug.includes("password")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#121019] rounded-xl p-4 sm:p-5 border border-purple-500/20 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-purple-300">
            <KeyRound className="w-4 h-4 text-purple-400" />
            <span className="font-bold tracking-wider">SHANNON ENTROPY // NIST SP 800-63B</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
            86.4 BITS
          </span>
        </div>

        {/* Waveform & Bit Meter */}
        <div className="my-3 space-y-2.5">
          {/* Animated Entropy Bar */}
          <div>
            <div className="flex justify-between text-[10px] text-white/70 mb-1">
              <span>ENTROPY STRENGTH</span>
              <span className="text-emerald-400 font-bold">EXTREMELY STRONG (CRACK TIME: &gt; 1M YEARS)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-cyan-400 w-[92%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            </div>
          </div>

          {/* NIST Compliance Badges */}
          <div className="grid grid-cols-3 gap-2 text-[10px] pt-1">
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>NIST Compliant</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>0 HIBP Breaches</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-cyan-300">
              <Lock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>k-Anonymity SHA-1</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-purple-500/20 text-[10px] text-purple-300/80 flex items-center justify-between">
          <span>Pool: [A-Z, a-z, 0-9, !@#$%^&amp;*]</span>
          <span className="text-emerald-400 font-bold">Safe for Enterprise Vault</span>
        </div>
      </div>
    );
  }

  // 3. Cardiac Analyst: Live ECG Rhythm Trace
  if (slug === "cardiac-analyst" || slug.includes("cardiac")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#081510] rounded-xl p-4 sm:p-5 border border-emerald-500/25 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-emerald-300">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="font-bold tracking-wider">CARDIAC TELEMETRY // LEAD II</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-emerald-400">72 BPM</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* SVG ECG Rhythm Waveform */}
        <div className="my-2 relative h-20 w-full flex items-center justify-center bg-black/30 rounded-lg overflow-hidden border border-emerald-500/15">
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Realistic ECG P-Q-R-S-T wave */}
          <svg className="w-full h-full stroke-emerald-400 fill-none" viewBox="0 0 400 80">
            <path
              d="M0,40 L60,40 L70,36 L80,44 L90,40 L110,40 L120,40 L125,50 L135,10 L145,70 L150,35 L160,40 L180,40 L195,30 L210,40 L260,40 L270,36 L280,44 L290,40 L310,40 L320,40 L325,50 L335,10 L345,70 L350,35 L360,40 L400,40"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]"
            />
          </svg>
        </div>

        <div className="pt-2 border-t border-emerald-500/20 text-[10px] text-emerald-300/80 flex items-center justify-between">
          <span className="text-emerald-400 font-bold">STATUS: Normal Sinus Rhythm</span>
          <span className="text-amber-300 font-semibold">Vihaan 9.0 (Top 15 Finalist)</span>
        </div>
      </div>
    );
  }

  // 4. LaunchLens: Full-Stack SaaS Analytics Dashboard
  if (slug === "launchlens" || slug.includes("launch")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#14121e] rounded-xl p-4 sm:p-5 border border-indigo-500/20 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-indigo-300">
            <BarChart3 className="w-4 h-4 text-indigo-400" />
            <span className="font-bold tracking-wider">LAUNCHLENS // SAAS TELEMETRY</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
            MRR: $18,450
          </span>
        </div>

        {/* Dashboard Bar Chart Bars */}
        <div className="my-3 grid grid-cols-7 gap-2 items-end h-20 px-2 bg-black/30 rounded-lg p-2 border border-white/5">
          {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
              <div
                className="w-full rounded-t bg-gradient-to-t from-indigo-600 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                style={{ height: `${h}%` }}
              />
              <span className="text-[8px] text-white/40">D{i + 1}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-indigo-500/20 text-[10px] text-indigo-300/80 flex items-center justify-between">
          <span className="text-cyan-300 font-bold">+24.8% MoM Growth</span>
          <span className="text-white/60">3,420 Active Sessions</span>
        </div>
      </div>
    );
  }

  // 5. Krypta Cryptographic Lab: Cipher Block Visualizer
  if (slug === "krypta-lab" || slug.includes("krypta")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#12161c] rounded-xl p-4 sm:p-5 border border-blue-500/25 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-blue-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-blue-300">
            <Lock className="w-4 h-4 text-blue-400" />
            <span className="font-bold tracking-wider">KRYPTA // AES-256-GCM PIPELINE</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
            CIPHER: GCM
          </span>
        </div>

        {/* Cipher Block Architecture Flow */}
        <div className="my-3 grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-2 rounded bg-black/40 border border-blue-500/30">
            <div className="text-white/50 text-[9px]">PLAINTEXT</div>
            <div className="font-bold text-white mt-1">UTF-8</div>
          </div>
          <div className="p-2 rounded bg-black/40 border border-blue-500/30">
            <div className="text-white/50 text-[9px]">IV (96-BIT)</div>
            <div className="font-bold text-cyan-300 mt-1">HEX-SEED</div>
          </div>
          <div className="p-2 rounded bg-black/40 border border-blue-500/30">
            <div className="text-white/50 text-[9px]">AES BLOCK</div>
            <div className="font-bold text-amber-300 mt-1">256-BIT</div>
          </div>
          <div className="p-2 rounded bg-black/40 border border-blue-500/30">
            <div className="text-white/50 text-[9px]">AUTH TAG</div>
            <div className="font-bold text-emerald-400 mt-1">128-BIT</div>
          </div>
        </div>

        <div className="pt-2 border-t border-blue-500/20 text-[10px] text-blue-300/80 truncate">
          0x4a 0x7f 0x12 0x9c 0xbb 0x3d 0xee 0x5a [Authenticated &amp; Verified]
        </div>
      </div>
    );
  }

  // 6. ToxiGuard: Molecular Structure & Toxicity Prediction
  if (slug === "toxiguard" || slug.includes("toxi")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#140e15] rounded-xl p-4 sm:p-5 border border-pink-500/25 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-pink-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-pink-300">
            <Atom className="w-4 h-4 text-pink-400" />
            <span className="font-bold tracking-wider">TOXIGUARD // SMILES MOLECULAR DL</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
            SAFE (96.2%)
          </span>
        </div>

        {/* Molecular Bond Representation */}
        <div className="my-2 p-3 bg-black/40 rounded-lg border border-pink-500/20 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/50">INPUT SMILES STRING</div>
            <div className="text-xs font-bold text-pink-300 mt-0.5">CC(=O)Oc1ccccc1C(=O)O</div>
            <div className="text-[9px] text-white/40 mt-1">Formula: C9H8O4 (Acetylsalicylic Acid)</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-white/50">AMES MUTAGENICITY</div>
            <div className="text-xs font-black text-emerald-400 mt-0.5">NON-TOXIC</div>
          </div>
        </div>

        <div className="pt-2 border-t border-pink-500/20 text-[10px] text-pink-300/80 flex items-center justify-between">
          <span>In Silico Molecular Screening</span>
          <span className="text-amber-300">Synthetic Research Protocol</span>
        </div>
      </div>
    );
  }

  // 7. FoodScope: Computer Vision Freshness Inspection (IIIT Delhi Finalist)
  if (slug === "foodscope" || slug.includes("food")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#15130b] rounded-xl p-4 sm:p-5 border border-amber-500/25 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5">
          <div className="flex items-center gap-2 text-amber-300">
            <Eye className="w-4 h-4 text-amber-400" />
            <span className="font-bold tracking-wider">FOODSCOPE // COMPUTER VISION</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
            GRADE A (94%)
          </span>
        </div>

        {/* Bounding Box Viewport */}
        <div className="my-2 relative h-20 bg-black/40 rounded-lg border border-amber-500/20 flex items-center justify-center overflow-hidden">
          <div className="border border-dashed border-amber-400 px-4 py-2 rounded text-center">
            <span className="text-[10px] text-amber-300 font-bold block">TARGET_PRODUCE: BATCH #402</span>
            <span className="text-[9px] text-emerald-400">FRESHNESS: 94.2% • SHELF-LIFE: &gt; 12 DAYS</span>
          </div>
        </div>

        <div className="pt-2 border-t border-amber-500/20 text-[10px] text-amber-300/80 flex items-center justify-between">
          <span>Supply Chain Anomaly Triage</span>
          <span className="text-amber-300 font-semibold">IIIT Delhi (Top 20 Finalist)</span>
        </div>
      </div>
    );
  }

  // 8. NIOR Rooftop & Lounge: Luxury Hospitality & 3D Living Deck
  if (slug === "nior-cafe" || slug.includes("nior") || slug.includes("cafe")) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#120F0D] rounded-xl overflow-hidden border border-[#D4AF37]/30 flex flex-col justify-between font-mono text-xs relative group">
        {/* Actual High-Res Screenshot of NIOR Cafe */}
        <div className="relative w-full h-36 sm:h-44 overflow-hidden">
          <Image
            src="/assets/projects/nior-cafe.jpg"
            alt="NIOR Rooftop & Lounge"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-transparent to-black/60 pointer-events-none" />

          {/* Top Demo Tag */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px]">
            <span className="px-2.5 py-0.5 rounded-full bg-black/80 text-[#E8DCC4] border border-[#D4AF37]/40 font-semibold backdrop-blur-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>nior-cafe.vercel.app</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold backdrop-blur-md">
              LIVE DEPLOYMENT
            </span>
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div className="p-3 bg-[#120F0D] border-t border-[#D4AF37]/20 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-white font-bold tracking-wide text-xs">
              NIOR • ROOFTOP &amp; LOUNGE
            </span>
            <a
              href="https://nior-cafe.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white flex items-center gap-1 text-[11px] font-semibold"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="text-[10px] text-[#A89F91] truncate">
            28°38&apos;19&quot;N // 77°22&apos;24&quot;E • 5th Floor Starlight Deck • Indirapuram
          </div>
        </div>
      </div>
    );
  }

  // Default Fallback Visual
  return (
    <div className="w-full h-full min-h-[220px] bg-[#161414] rounded-xl p-5 border border-white/10 flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <span className="text-white font-bold">{title}</span>
        <span className="text-emerald-400">ACTIVE REPOSITORY</span>
      </div>
      <div className="my-4 text-center text-white/60">
        Interactive Architecture &amp; System Telemetry
      </div>
      <div className="pt-2 border-t border-white/10 text-[10px] text-white/40">
        Verified Production Build
      </div>
    </div>
  );
}
