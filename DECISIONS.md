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
| 2026-11-22 | Feature | Arched Doors System (Phase 4) | 4 physical arched doors in CSS/SVG 3D (Cybersecurity, Medical AI, Freelancing, AI/ML) with brass plates, lever handles, fluted panels, hover hinge swing, cursor chip, and mobile scroll-snap strip. Embedded directly on the front page (`/`) and dedicated `/work` route. | Approved |
| 2026-11-22 | Visual System | Pure White High-Contrast Typography | Shifted all dark-surface body and headline typography to pure white `#FFFFFF` and `#D1C9BE` to ensure 100% legibility against dark background. | Approved |
| 2026-11-22 | Feature | Interactive Color Spotlight Portrait | Dual-layer portrait with circular lens `clip-path` reveal: moving the cursor over the portrait reveals the authentic full-color photograph inside a glowing circular spotlight while the rest stays grayscale. | Approved |
| 2026-11-22 | Feature | Hero Desk-Calendar & Portrait | 11-ring spiral flip-card cycling 8 user roles (3.2s timer, hover, tap, keyboard), grayscale cutout cropped by bottom boundary, floating ability pill and modal. | Approved |
| 2026-11-22 | Assets | Certificates Extracted from POSTED.zip | 22 authentic certificates, offer letters, and hackathon awards extracted into `public/certificates/`. | Approved |
| 2026-11-22 | Architecture | Four Curated Doors | User specified 4 door domains: CyberSecurity Based Projects, Medical Based Projects, Freelancing Works, AI/ML Projects. | Approved |
| 2026-11-22 | Deployment | Domain Strategy | Vercel deployment first (`.vercel.app`), with custom domain mapping configured in Phase 11. | Approved |
