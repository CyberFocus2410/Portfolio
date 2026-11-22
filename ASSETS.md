# Assets Registry

This file tracks all visual and document assets across project phases.

| Asset | Spec | Status | File Path | Phase | Notes |
|---|---|---|---|---|---|
| Portrait cutout | Transparent PNG/WebP, grayscale, half-body | received | `public/assets/portrait.webp` | Phase 3 | Processed from uploaded JPEG with transparent alpha & grayscale |
| Roles for flip-card | 8 roles supplied by user | received | `src/app/page.tsx` & Sanity | Phase 3 | Web Dev, App Dev, UI/UX, Freelancer, Cybersecurity Analyst, Pen Tester, Blue Team, Photographer |
| Ability-card content | Skills and focus areas | received | `src/app/page.tsx` & Sanity | Phase 3 | Cybersecurity Blue Teaming, Threat Detection, Python, Full-stack |
| Door taglines & checklists | 4 doors: CyberSecurity, Medical, Freelancing, AI/ML | received | `src/app/design-system/page.tsx` & Work | Phase 4 | Configured across 4 domain doors |
| Certificate files | 22 authentic files extracted from POSTED.zip | received | `public/certificates/` | Phase 7 | CRTOM, FoodScope (IIIT-D), Vihaan 9.0, HackerRank, Decode Labs offer, etc. |
| Project descriptions | In user's own words per project | needed | Sanity CMS | Phase 6 | Markdown/plain text |
| Project screenshots (Desktop) | 1600x1000 PNG/WebP | needed | Sanity / `public/projects/` | Phase 6 | 2 to 4 per project |
| Project screenshots (Mobile) | 1170x2532 PNG/WebP | needed | Sanity / `public/projects/` | Phase 6 | For mobile mockup |
| Demo videos | MP4/WebM, under 20 MB | needed | Sanity / Media CDN | Phase 6 | Optional per project |
| Client permissions | Confirmation boolean & scope | needed | Project records | Phase 6 | Required before showing client work |
| Hackathon certificates | PDF or PNG, high resolution | needed | Sanity / Media | Phase 7 | Vihaan 9.0, Fork It, etc. |
| Hackathon bios & results | 2-3 sentence summary & official result | needed | Sanity CMS | Phase 7 | Per hackathon |
| Certificate files | PDF or PNG | needed | Sanity / Media | Phase 7 | CRTOM, OPSWAT, HackerRank, etc. |
| Certificate metadata | Title, issuer, issue date, expiry date, ID, URL | needed | Sanity CMS | Phase 7 | Used for computed validity |
| Badge images | Square PNG/SVG, 512px+ | needed | Sanity / `public/badges/` | Phase 7 | Per achievement badge |
| Skill levels | Self-assessment: Learning, Working, Strong | needed | Sanity CMS | Phase 7 | Per skill |
| Education details | Institute, degree, dates, bullets | needed | Sanity CMS | Phase 8 | DTC / GGSIPU, etc. |
| Experience details | Organization, role, dates, bullets | needed | Sanity CMS | Phase 8 | Decode Labs, etc. |
| Resume PDF | Clean, printable single/multi-page PDF | needed | `public/resume.pdf` | Phase 10 | Downloadable asset |
| Open Graph image | 1200x630 PNG | needed | `public/og-image.png` | Phase 10 | Social preview card |
| Favicon & app icons | SVG / 32x32 ICO / 192x192 PNG | needed | `src/app/icon.png` | Phase 10 | Browser tab icon |
| Domain configuration | Custom domain DNS records | needed | Vercel DNS | Phase 11 | Optional / custom domain |
