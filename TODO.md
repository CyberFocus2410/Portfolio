# TODO: Unresolved Questions & Missing Content

This file logs every missing piece of content, unconfirmed fact, and pending decision.

## Phase 0: Intake & Plan (Completed)
- [x] Receive user sign-off and approval on the Phase 0 Implementation Plan.
- [x] Decision 1: Ambient warm desk lamp glow confirmed for rope pull.
- [x] Decision 2: Semantic SVG + CSS 3D transforms confirmed for doors.
- [x] Decision 3: Framer Motion confirmed as animation library.
- [x] Decision 4: Featured GitHub repos grouped across 5 domains.
- [x] Decision 5: Custom domain mapped later; Vercel deployment first.
- [x] Decision 6: Dark mode only (`#1A1818`) confirmed.

## Phase 1: Scaffold & Design System (Completed)
- [x] Initialize Next.js 15+ / React 19 project with TypeScript and Tailwind CSS.
- [x] Configure Tailwind tokens (colors, font families, tracking, radii).
- [x] Install and configure font loading via `next/font` (Plus Jakarta Sans + JetBrains Mono).
- [x] Build reusable atomic primitives: Button pill, Card, Tag pill, Monospace label, Section header, Container.
- [x] Set up CI pipeline (`.github/workflows/ci.yml`) with Gitleaks, Semgrep, and `npm audit`.
- [x] Build `/design-system` style-guide page showcasing all components and tokens.
- [x] Processed transparent grayscale portrait cutout WebP (`public/assets/portrait.webp`).
- [x] Extracted 22 authentic certificate and achievement documents into `public/certificates/`.
- [x] Launched localhost development server on `http://localhost:3000`.

## Phase 2: Global Chrome (Completed)
- [x] Refine sticky top nav with animated active-link underline.
- [x] Connect live local-time & date pill with timezone synchronization.
- [x] Build interactive hanging rope pull with spring physics & warm lamp glow overlay (silent by default).
- [x] Implement circular back-to-top button with dynamic scroll-progress ring.
- [x] Build page preloader with percentage counter, "Click to enter" gate, and session memory.
- [x] Build privacy consent banner with granular analytics gating and direct link to privacy policy.
- [x] Generated standard privacy & cookie policy at `/privacy`.

## Phase 3: Home Hero (Completed)
- [x] Connect interactive greeting and headline typography ("Hi, I'm Vivan." + "I am a").
- [x] Refine white desk-calendar flip-card with 11-loop spiral rings, stacked 3D depth, auto-timer, and touch/click role cycling with 8 verified roles.
- [x] Position high-resolution grayscale transparent portrait cutout cropped precisely by bottom container edge.
- [x] Connect floating "My ability card" pill and modal dialog with core competencies, DTC education, and Decode Labs internship.
- [x] Build responsive bottom status strip (availability dot, location, scroll indicator).
- [x] Verify accessibility, screen-reader reading order, and responsive testing across 360px, 768px, and 1440px.

## Phase 4: Work Page with Doors (Completed)
- [x] Create `/work` page featuring the arched doors wall ("Magic happens behind the doors").
- [x] Build 4 physical arched doors in CSS/SVG: Cybersecurity, Medical AI, Freelancing Works, AI/ML Projects.
- [x] Implement brass nameplates, lever handles, keyholes, and fluted panel textures.
- [x] Build hover hinge-swing animation, background dimming, and content panel with monospace tagline and checklist.
- [x] Build cursor-following "Click to enter" chip badge.
- [x] Create door-to-page navigation transition into domain pages (`/work/[domain]`).
- [x] Implement mobile horizontal scroll-snap strip with tap-to-open interaction.

## Phase 5: CMS (Sanity) (Completed)
- [x] Initialize Sanity configuration and client (`sanity.config.ts`, `src/sanity/client.ts`).
- [x] Define 10 schemas: project, hackathon, certificate, badge, skill, experience, education, door, role, siteSettings.
- [x] Implement dynamically computed certificate validity status logic (`src/lib/certificate-utils.ts`: Valid, Expiring soon within 90 days, Expired, No expiry) and verified with automated test suite.
- [x] Set up secure revalidation webhook endpoint (`/api/revalidate`) with secret token authentication and route purge.
- [x] Seed CMS records strictly from verified seed facts and authentic `POSTED` certificates (`src/sanity/seed-data.ts`).
- [x] Write phone browser editing guide in `README.md` for mobile Sanity Studio document authoring and PDF/image uploads.
- [x] Verified embedded Studio at `/studio` with NextStudio and styled-components integration.

## Phase 6: Domain Pages & Projects (Completed)
- [x] Build `/projects` index page with domain filtering tabs (All, Cybersecurity, Medical AI, Freelancing Works, AI/ML Projects, Apps & Mobile).
- [x] Build individual project detail pages (`/projects/[slug]`) with case study layout, live URLs, GitHub repos, and tech badges.
- [x] Build domain showcase pages (`/work/[domain]`) linked directly from the arched doors.
- [x] Render interactive device mockups (realistic monitor browser frames and mobile phone frames) for showcased projects.
- [x] Embed prominent non-medical research disclaimers on all healthcare AI projects (Cardiac Analyst, PneumoVision, Health Vault).

## Phase 7: Hackathons, Certificates & Skills (Completed)
- [x] Build `/hackathons` showcase with verified distinctions (Vihaan 9.0 Top 15, FoodScope Top 20, SIH 2025 Nominee, HackHazards '26, Thoughtworks HackFest).
- [x] Build `/certificates` registry with all 22 authentic documents from `POSTED.zip`, category filtering, search, and dynamic validity calculation badges.
- [x] Build `/skills` Tech Arsenal matrix with proficiency levels, categorization, and linked project references.

## Phase 8: My Story & Contact (Completed)
- [x] Build `/my-story` split layout with sticky milestone year indicator and synced vertical chronological timeline.
- [x] Build `/contact` collaboration page with interactive inquiry form, email copy, GitHub link, and base location.

## Missing Facts & Content Confirmations
- [ ] Confirm exact official event name for the IIIT Delhi hackathon ("Fork It Challenge" offline round, Feb 2026).
- [ ] Obtain names, URLs, and written permission status for freelance cafe websites.
- [ ] Confirm whether `Kirana_Vulnerable`, `CYBERCOP_OSINT`, `CyberRiskIQ`, and `SamajhLe` should be featured under Cybersecurity or AI/ML.
- [ ] Ensure ISC2 CC certification is omitted until officially passed.
- [ ] Collect exact issue dates and credential verification URLs for CRTOM, OPSWAT, and HackerRank Python.

## Upstream Account Dependencies
- [ ] Sanity CMS account and project creation (hosted Studio vs embedded).
- [ ] Resend API account setup and domain/email verification.
- [ ] Vercel account and deployment pipeline connection.
