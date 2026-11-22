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
| 2026-11-22 | Feature | Rope Pull Interaction | Silent toggle: pulls cord to toggle ambient warm desk lamp radial glow across screen with spring physics. | Approved |
| 2026-11-22 | Compliance | Standard Privacy & Cookie Policy | Standard developer policy implemented at `/privacy`: zero tracking without consent, local storage items defined, disclaimer for healthcare prototypes, cookie reset control. | Approved |
| 2026-11-22 | Assets | Door Rendering Approach | Semantic SVG + CSS 3D perspective transforms for high performance, sharp rendering, and responsive fluid layout. | Approved |
| 2026-11-22 | Assets | Portrait & Roles Provisioned | User supplied portrait cutout image (processed to transparent grayscale WebP) and 8 specific roles for flip-card cycling. | Approved |
| 2026-11-22 | Assets | Certificates Extracted from POSTED.zip | 22 authentic certificates, offer letters, and hackathon awards extracted into `public/certificates/`. | Approved |
| 2026-11-22 | Architecture | Four Curated Doors | User specified 4 door domains: CyberSecurity Based Projects, Medical Based Projects, Freelancing Works, AI/ML Projects. | Approved |
| 2026-11-22 | Deployment | Domain Strategy | Vercel deployment first (`.vercel.app`), with custom domain mapping configured in Phase 11. | Approved |
