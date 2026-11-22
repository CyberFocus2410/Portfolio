# Decisions Log

This document records all architectural, design, and scope decisions made during the project.

| Date | Category | Decision | Rationale | Status |
|---|---|---|---|---|
| 2026-11-22 | Process | Strict Phase-by-Phase Execution | Section 0 rules: Restate goal, issue Asset Request, wait for approval, build, report, commit. | Approved |
| 2026-11-22 | Integrity | Zero Invented Facts | Strictly rely on confirmed facts from `prompts.md` and user responses; draft unverified entries. | Approved |
| 2026-11-22 | Design | Recreate Mood & Mechanics Only | Honor reference layout (doors, flip-card, split timeline) without copying code or assets. | Approved |
| 2026-11-22 | Compliance | Healthcare Research Disclaimers | All medical AI projects (Cardiac Analyst, PneumoVision, Health Vault) must carry prominent non-medical disclaimers and synthetic data notices. | Approved |
| 2026-11-22 | CMS | Computed Certificate Validity | Certificate validity (Valid, Expiring Soon, Expired, No Expiry) is derived dynamically from issue/expiry dates, never manual input. | Approved |
| 2026-11-22 | Visual System | Palette Baseline | Dark theme baseline: Base `#1A1818`, Surface `#211E1E`, Text `#EDE9E3`, Muted `#A39A92`, Hairlines `rgba(255,255,255,0.08)`. Dark mode only. | Approved |
| 2026-11-22 | Motion | Framer Motion Selected | Framer Motion selected for React 19 / Next.js App Router RSC compatibility, layout animations, and declarative reduced-motion. | Approved |
| 2026-11-22 | Feature | Rope Pull Interaction | Lamp glow: toggles an ambient warm desk lamp radial glow overlay. | Approved |
| 2026-11-22 | Assets | Door Rendering Approach | Semantic SVG + CSS 3D perspective transforms for high performance, sharp rendering, and responsive fluid layout. | Approved |
| 2026-11-22 | Scope | Featured GitHub Repos | 5 domains: Cybersecurity (`SecureScan`, `Password_Strength_Analyser`, `PhishLeakGuard`), Healthcare AI (`Cardiac_Analyst`, `Health_Vault4`, `PneumoVision`), AI/ML (`LaunchLens`, `HireLoop`, `SamajhLe`), Web (`VAP-Handicrafts`), Apps (`TechnoV`). | Approved |
| 2026-11-22 | Deployment | Domain Strategy | Vercel deployment first (`.vercel.app`), with custom domain mapping configured in Phase 11. | Approved |
