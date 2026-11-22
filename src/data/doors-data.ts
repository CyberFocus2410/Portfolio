export interface DoorData {
  id: string;
  slug: string;
  title: string;
  brassTitle: string;
  tagline: string;
  checklist: string[];
  baseColor: string;
  darkColor: string;
  accentBorder: string;
  glowColor: string;
  href: string;
}

export const DOORS_DATA: DoorData[] = [
  {
    id: "door-cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity",
    brassTitle: "CYBERSECURITY",
    tagline: "DEFENSIVE OPERATIONS & SECURITY AUDITING",
    checklist: [
      "Vulnerability assessment & threat profiling",
      "Cryptographic cipher implementations (Krypta)",
      "Entropy-based password security analysis",
      "Breach exposure monitoring (HaveIBeenPwned API)",
      "Blue team defensive operations & penetration testing",
    ],
    baseColor: "#1F2E3D",
    darkColor: "#141E28",
    accentBorder: "#2D4257",
    glowColor: "rgba(45, 66, 87, 0.4)",
    href: "/work/cybersecurity",
  },
  {
    id: "door-healthcare-ai",
    slug: "healthcare-ai",
    title: "Medical AI",
    brassTitle: "MEDICAL AI",
    tagline: "DIAGNOSTIC PROTOCOLS & HEALTH RECORD SYSTEMS",
    checklist: [
      "Real-time ECG analysis & cardiac triage (Vihaan 9.0 Top 15)",
      "Chest X-ray diagnostic assistance (PneumoVision)",
      "Secure digital patient record management (Health Vault)",
      "Molecular drug toxicity prediction via SMILES (ToxiGuard)",
      "Strict synthetic benchmarking & non-clinical research ethics",
    ],
    baseColor: "#3B2235",
    darkColor: "#271623",
    accentBorder: "#53314B",
    glowColor: "rgba(83, 49, 75, 0.4)",
    href: "/work/healthcare-ai",
  },
  {
    id: "door-web-freelance",
    slug: "web-freelance",
    title: "Freelancing Works",
    brassTitle: "FREELANCING",
    tagline: "END TO END, FROM WIREFRAME TO LIVE DEPLOYMENT",
    checklist: [
      "Custom responsive design & UI/UX architecture",
      "Next.js, TypeScript & Tailwind modern frontends",
      "High performance SEO & 90+ Lighthouse optimization",
      "Client business platforms & artisan e-commerce (VAP)",
      "Direct client delivery, ongoing maintenance & hosting",
    ],
    baseColor: "#2E3D34",
    darkColor: "#1E2822",
    accentBorder: "#415649",
    glowColor: "rgba(65, 86, 73, 0.4)",
    href: "/work/web-freelance",
  },
  {
    id: "door-ai-ml",
    slug: "ai-ml",
    title: "AI / ML Projects",
    brassTitle: "AI / ML PROJECTS",
    tagline: "AUTONOMOUS AGENTS & PREDICTIVE INTELLIGENCE",
    checklist: [
      "Multi-agent hiring workflows with human escalation (HireLoop)",
      "Legal contract simplification & Indian law RAG (SamajhLe)",
      "AI-powered web app security & breach auditor (LaunchLens)",
      "Large Language Model orchestration & prompt pipelines",
      "Explainable AI feature attribution & benchmarking",
    ],
    baseColor: "#4A2E22",
    darkColor: "#311E16",
    accentBorder: "#684130",
    glowColor: "rgba(104, 65, 48, 0.4)",
    href: "/work/ai-ml",
  },
];
