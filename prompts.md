# prompts.md: Vivan Mittal portfolio build

This is the master brief. Read it fully before doing anything. Work phase by phase. Never skip ahead.

---

## 0. How we work together (rules of engagement)

1. **One phase at a time.** At the start of every phase, do these steps in order:
   1. Restate the phase goal in 2 to 3 lines.
   2. Post an **Asset & Info Request** (see section 1) listing everything you need from me for this phase.
   3. **Stop and wait** for my reply. Do not write code until I answer or say "use placeholders".
   4. Build the phase.
   5. Run the acceptance checks for the phase, and show me the results.
   6. Post a **Phase Report** (what you built, what you assumed, what is still a placeholder).
   7. Commit to git with the message `phase-N: <name>`, then wait for me to say "next".
2. **Never invent facts.** Do not make up achievements, dates, certificates, client names, metrics, testimonials or project descriptions. If something is missing, leave it empty, mark the CMS entry as draft, and add a line to `TODO.md`.
3. **Ask, don't guess.** If a requirement is ambiguous, ask one short question. Offer 2 to 3 options with your recommendation.
4. **Keep three living files** in the repo root and update them after every phase:
   - `ASSETS.md`: every asset, with columns: asset, spec, status (needed, received, placeholder), file path.
   - `TODO.md`: unresolved questions and missing content.
   - `DECISIONS.md`: each decision I made, with the date.
5. **Verify before you rely on it.** Free-tier limits, pricing and library APIs change. Check the current official docs for Next.js, Sanity, Vercel, Resend and your animation library before you use them, and tell me about any limit that could affect me.
6. **Do not copy the reference site.** Recreate the mechanics and mood from the screenshots with my own text, artwork, photo and code.
7. **Safe defaults.** No secrets in the repo, use environment variables, and ask before installing anything unusual or paid.

---

## 1. Asset & Info Request format

Use this exact structure at the start of each phase. Mark each item **Required**, **Optional**, or **Can use a placeholder**:

```
PHASE N: NAME
Needed from you
  [ ] Item name: exact spec (format, size, filename), where it is used
Questions
  1. ...
Reply with the files and answers, or say "use placeholders for X".
```

If I say "use placeholders", create clearly labelled placeholders, add them to `ASSETS.md` as `placeholder`, and continue.

---

## 2. Project brief

**Owner:** Vivan Mittal. B.Tech Computer Science and Engineering student at Delhi Technical Campus (GGSIPU), 2025 to 2029. Delhi NCR, India. GitHub: github.com/CyberFocus2410. LinkedIn: linkedin.com/in/cyberfocus2410. Email: cyberfocus2410@gmail.com.

**Goal:** A multi-page cinematic portfolio that shows everything I have built, my hackathons, certificates, skills, experience and education, with a CMS I can use from my phone. The immediate aim is to land a cybersecurity internship, and the site also covers AI/ML, healthcare AI, web freelancing and app work.

**Audience:** Recruiters, hiring managers, and freelance clients.

### Stack

- Next.js (App Router), TypeScript, Tailwind CSS
- GSAP or Framer Motion (choose one and explain why)
- Sanity (hosted Studio) as the CMS
- Vercel for hosting
- Resend for contact email, with a mailto fallback

### Reference

Six screenshots of a reference portfolio are attached. Recreate the **interaction model and mood**:

1. **Hero:** a greeting headline, a muted second line, and a white desk-calendar flip-card (with spiral rings and a counter like "03 / 05") that cycles through my roles on hover or tap and also on a timer. On the right is a grayscale transparent-background portrait cut off by the bottom edge, with a floating "My ability card" pill. Below the hero is a thin strip: availability, location, "Scroll to explore ↓".
2. **Work page, "Magic happens behind the doors":** a row of arched doors on a dark wall with a skirting board and floor. Each door has recessed panel grooves, a brass nameplate, a brass lever handle and keyhole, and its own muted colour. On hover, the door swings open on its hinge, the other doors fade back, and a text panel appears with a title, a monospace tagline and a checklist. A "Click to enter" chip follows the cursor. Clicking opens the domain page.
3. **Domain pages:** a giant title, a subtitle, then large rounded project cards. Each card has a monospace label, name, subtitle, description, tag pills, links, and a device mockup (monitor or phone) with a screenshot or looping video.
4. **My story:** a split layout. The left side is sticky and shows a huge year, its date range and a counter with a progress line, over faint radial tick rings and a warm glow. The right side is a vertical timeline with a line and a moving dot. The active entry is bright and the others are dimmed.
5. **Footer / contact:** a rounded-top dark panel with a status dot, a two-line headline (bright, then muted), a paragraph, a primary light pill button with a circular arrow, an outlined secondary pill, and columns for Work, Navigate and Status.
6. **Persistent chrome:** a centred text nav with an underlined active item, a pill showing live local time and today's date, a hanging rope with a wooden pull-knob at the top right, a circular back-to-top button with a progress ring, and a cookie banner (No thanks / Allow).

### Visual system

- Base `#1A1818`, surface `#211E1E`, text `#EDE9E3`, muted `#A39A92`, hairlines `rgba(255,255,255,.08)`. Add a faint warm-brown radial glow behind hero and story sections and a subtle dot-grid texture.
- Choose one geometric grotesk for headings and body (large, tight-tracked display sizes, muted second lines) and one monospace for small uppercase labels and dates. Use free fonts via `next/font` and tell me what you picked.
- Pill buttons. Cards use a radius of 24px or more with a thin border.
- Door colours: navy, plum, sage, rust and one more, all muted.
- Contrast must meet WCAG AA.

### Motion rules

- Preloader with a percentage counter, then a "Click to enter" step.
- Page transitions: a curtain wipe. Opening a door transitions into its page.
- Motion is purposeful. Do not add scattered effects.
- Respect `prefers-reduced-motion`: disable the door swing, flip-card auto-cycle, curtain, rope spring and scroll-linked effects, and use plain fades.
- Every hover interaction needs a keyboard and touch alternative. Visible focus states everywhere.
- On mobile, the doors become a horizontal scroll-snap strip, one door per screen, with tap to open.

### Sitemap

`/` Home, `/work` Doors, `/work/[domain]` domain pages (cybersecurity, ai-ml, healthcare-ai, web-freelance, apps), `/projects` all projects with filters and search, `/projects/[slug]` detail, `/hackathons`, `/certificates` (certificates and badges), `/skills`, `/my-story` (experience and education), `/contact`, `/privacy`.

### CMS (Sanity), schemas

Only documents with `published = true` appear on the site. The Studio must work well in a phone browser (add and edit entries, upload photos and PDFs).

- **project:** title, slug, domain, summary, body, stack, role, cover, gallery, mockup type (monitor, phone, none), video, repoUrl, liveUrl, featured, label (e.g. ML MODEL), clientName (optional), permissionConfirmed, status, date, published
- **hackathon:** name, organiser, date, result, bio, project (reference), certificate (image or PDF), published
- **certificate:** title, issuer, type (course, exam, certification), issueDate, expiryDate (optional), credentialId, verifyUrl, file, published. The status (Valid, Expiring soon within 90 days, Expired, No expiry) is **computed from dates**, never typed by hand.
- **badge:** title, issuer, image, issueDate, verifyUrl, published
- **skill:** name, category, level (Learning, Working, Strong), relatedProjects
- **experience** and **education:** organisation, role or degree, start, end (or present), location, bullets, published
- **door:** title, colour, tagline, checklist, domain, order
- **role:** text for the flip-card, order
- **profile / siteSettings:** headline, bio, portrait cutout, social links, resume PDF, availability text, SEO defaults

A webhook revalidates the site whenever content changes. The Studio is protected by login. Tokens live in environment variables, and the public site uses a read-only token.

### Content rules

- Never show a client name or client screenshot unless `permissionConfirmed` is true.
- Healthcare projects (Cardiac Analyst, PneumoVision, Health Vault) carry a visible note: "Research and educational prototype, not a medical device." Use synthetic data only and never show real patient data.
- Do not list the ISC2 CC certification until I have actually passed it.

### Seed facts (the only facts you may use)

- **Projects:** SecureScan AI, Password Strength Analyser, PhishLeakGuard, LaunchLens, Cardiac Analyst, PneumoVision, Health Vault (stores users' reports and vitals so a doctor can see a patient's history), and freelance cafe websites (names and links to come from me). Read github.com/CyberFocus2410 for the rest, and ask me whenever a description is missing.
- **Experience:** Cybersecurity Intern, Decode Labs (2026). Developed learning projects including Password Strength Analyser and Krypta, a Python-backed educational cipher application.
- **Education:** B.Tech CSE, Delhi Technical Campus (GGSIPU), 2025 to 2029.
- **Hackathons:** Vihaan 9.0 at IEEE DTU (Top 15 finalist with Cardiac Analyst; advanced to the final round, 2026). Fork It Challenge at IIIT Delhi (Top 20 finalist, offline round, February 2026; confirm the exact event name with me).
- **Credentials:** CRTOM (Red Team Leaders, 2025). OPSWAT Introduction to Critical Infrastructure Protection (2025, expires December 2026). HackerRank Python (Basic) (2026).

### Quality and security bar

- Mobile Lighthouse 90 or higher in all four categories.
- Responsive from 360px up.
- Strict security headers and a Content Security Policy, HTTPS only, form validation and rate limiting.
- GitHub Actions on each push: Gitleaks, Semgrep, `npm audit`.
- Sitemap, robots.txt, Open Graph images, Person structured data.
- Analytics load only after consent.

---

## 3. Phase prompts

For each phase: post the Asset & Info Request first, wait for my reply, build, run the checks, post the Phase Report, commit, and wait for "next".

### Phase 0: Intake and plan

**Goal:** Understand the brief, audit my GitHub, and produce the plan.
**Do:**
- Read this file and the six screenshots. Summarise your understanding in under 150 words.
- Review github.com/CyberFocus2410 and list every repository that looks relevant. Group them by domain and ask me which to include.
- Produce the implementation plan: architecture, folder structure, data model, page map, design tokens, animation approach, and a risk list.
- Create `ASSETS.md`, `TODO.md`, `DECISIONS.md`.
**Ask me for:** the full list of assets in section 4, my preferred domain name (if any), and my choices on the open decisions in section 5.
**Accept when:** I approve the plan in writing.

### Phase 1: Scaffold and design system

**Do:** Create the Next.js project, Tailwind tokens (colours, type scale, radii, spacing), fonts, base components (Button pill, Card, Tag, Label, Section), the layout shell, ESLint, Prettier, and the GitHub Actions workflow (Gitleaks, Semgrep, `npm audit`).
**Ask me for:** font preferences if I have any, and confirmation of the colour tokens.
**Accept when:** A style-guide page shows every component, and CI passes.

### Phase 2: Global chrome

**Do:** Top nav with an active-item underline, the local-time and date pill, the hanging rope with its spring animation (confirm what the pull does before building), the back-to-top button with a progress ring, the preloader, the curtain page transitions, and the consent banner.
**Ask me for:** what the rope pull should do (options: toggle a lamp glow, toggle a theme, do nothing), and the privacy policy wording or permission for a standard template.
**Accept when:** All of it works with keyboard and touch, reduced-motion mode swaps in fades, and analytics stay off until consent.

### Phase 3: Home hero

**Do:** The greeting, the role flip-card (spiral rings, counter, auto-cycle plus hover or tap), the portrait cutout cropped by the hero bottom edge, the "My ability card" pill and its modal, and the bottom strip.
**Ask me for:**
- Portrait: transparent PNG or WebP, grayscale, at least 1600px tall, half body, the original colour version for reference.
- The 3 to 5 role names for the flip-card. Only roles I can back with projects.
- The headline and my one-line positioning.
- The ability-card content (skills and focus areas).
- The availability text.
**Accept when:** The hero looks right at 360px, 768px and 1440px, and a screen reader can read the roles.

### Phase 4: Work page with doors

**Do:** The doors in CSS and SVG, the hinge swing on hover, the panel with tagline and checklist, the cursor-following "Click to enter" chip, the door-to-page transition, and the mobile scroll-snap strip.
**Ask me for:** the list of doors (suggested: Cybersecurity, AI & ML, Healthcare AI, Web & Freelance, Apps), a tagline and 4 to 5 checklist lines for each, and whether I want custom door illustrations or CSS-built ones.
**Accept when:** Hover, focus and tap all open a door, and reduced motion removes the swing.

### Phase 5: CMS

**Do:** Sanity project and Studio, all schemas from section 2, validation rules, the computed certificate status, the revalidation webhook, login protection, and seed content from the seed facts only.
**Ask me for:** a Sanity account decision (I will create it, or you guide me), and I will provide the tokens through environment variables only.
**Accept when:** I can open the Studio on my phone, add a certificate with a PDF, publish it, and see it appear on the site within about a minute. Write a short phone guide to `README.md`.

### Phase 6: Domain pages, projects, detail pages

**Do:** The five domain pages with big titles and project cards, device mockups, the All Projects page with filters and search, project detail pages, and the healthcare disclaimer.
**Ask me for, per project:** description in my own words, role, stack, repo URL, live URL, 2 to 4 screenshots (1600 by 1000 for desktop, 1170 by 2532 for phone), an optional demo video (under 20 MB, MP4 or WebM), and which projects to feature. For freelance sites: client name (optional), live URL, screenshots, and whether the client has given permission.
**Accept when:** Every card links to a working detail page, and no client name appears without permission.

### Phase 7: Hackathons, certificates, badges, skills

**Do:** The hackathons page with the certificate lightbox, the certificates page with computed validity and filters, the badge wall, and the skills page grouped by category with levels and linked projects.
**Ask me for:**
- Per hackathon: exact name, organiser, date, result, 2 to 3 sentence bio, the project I built, and the certificate (PDF or PNG).
- Per certificate: title, issuer, issue date, expiry date (if any), credential ID, verification URL, and the file.
- Per badge: image (square PNG or SVG, at least 512px), issuer, date, URL.
- Skills: a list with my honest level for each (Learning, Working, Strong).
**Accept when:** A certificate with no file shows no "View certificate" button, and an expired item shows as Expired automatically.

### Phase 8: My story

**Do:** The split layout with the sticky year, counter, progress line and radial tick background, plus the timeline with the moving dot and active-entry highlight.
**Ask me for:** every school and college I have attended (name, years, degree or class), all internships and freelance roles with start and end months and 1 to 3 factual bullets each, and a short bio.
**Accept when:** Scrolling syncs the left year with the right entry, and keyboard users can step through entries.

### Phase 9: Contact and footer

**Do:** The footer CTA panel, the "Hire me" modal flow (internship, freelance website, collaboration, question), the server action with Resend, rate limiting, spam protection, a mailto fallback, and the success state.
**Ask me for:** the destination email, a Resend decision, and the response-time wording (do not promise a time I haven't confirmed).
**Accept when:** A test message reaches my inbox, and the form works with JavaScript disabled via the fallback.

### Phase 10: Polish, accessibility, performance, security

**Do:** Run Lighthouse, axe and keyboard-only passes. Optimise images and video. Check the CSP, headers and dependencies. Add SEO: meta, Open Graph, sitemap, robots, structured data. Fix everything you find.
**Ask me for:** an Open Graph image (1200 by 630), a favicon source, and the resume PDF.
**Accept when:** Mobile Lighthouse is 90 or higher, axe reports no serious issues, and CI is green.

### Phase 11: Deploy and handover

**Do:** Deploy to Vercel, connect the Studio, set environment variables, connect my domain, and run a final checklist. Write the README handover with: how to add a project, certificate, hackathon and badge from a phone; how to rotate tokens; and how to restore from backup.
**Accept when:** I can make a content change on my phone and see it live.

---

## 4. Master asset checklist (ask for these at the right phase)

| Asset | Spec | Phase |
|---|---|---|
| Portrait cutout | Transparent PNG/WebP, grayscale, 1600px+ tall, half body | 3 |
| Roles for flip-card | 3 to 5 short titles | 3 |
| Ability-card content | Skills and focus areas | 3 |
| Door taglines and checklists | 4 to 5 lines per door | 4 |
| Project descriptions | In my own words, per project | 6 |
| Project screenshots | 1600x1000 desktop, 1170x2532 phone | 6 |
| Demo videos (optional) | MP4/WebM, under 20 MB | 6 |
| Client permissions | Yes/no per client site | 6 |
| Hackathon details and certificates | PDF/PNG plus bio | 7 |
| Certificate files and metadata | PDF/PNG plus dates, ID, URL | 7 |
| Badge images | Square PNG/SVG, 512px+ | 7 |
| Skill levels | Honest self-assessment | 7 |
| Education and experience details | Names, dates, bullets | 8 |
| Contact email and Resend account | Decision | 9 |
| OG image, favicon, resume PDF | 1200x630, source image, PDF | 10 |
| Domain name | Optional | 11 |

---

## 5. Open decisions to settle in Phase 0

1. What should the rope pull do?
2. Custom door illustrations, or CSS-built doors?
3. GSAP or Framer Motion? (Recommend one, with reasons.)
4. Which GitHub repos should be featured?
5. Does the site need a custom domain now or later?
6. Light mode needed, or dark only? (Default: dark only.)

---

## 6. Definition of done (whole project)

- Every page in the sitemap works on mobile and desktop.
- I can add and edit all content types from my phone.
- Nothing on the site is unverified or invented.
- Lighthouse, accessibility and security checks pass, and CI is green.
- `README.md`, `ASSETS.md`, `TODO.md` and `DECISIONS.md` are current.
