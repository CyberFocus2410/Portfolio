# Vivan Mittal — Engineering Portfolio & CMS

Personal portfolio and engineering showcase for **Vivan Mittal**, B.Tech CSE student at Delhi Technical Campus (GGSIPU), specializing in Cybersecurity, Blue Teaming, AI/ML, Healthcare AI, and Modern Web Applications.

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS 3D transforms
- **Animations**: Framer Motion
- **CMS**: Sanity Studio v3 (embedded at `/studio`)
- **Theme**: Dark mode only (`#1A1818` background, `#FFFFFF` crisp text, warm ambient lighting)
- **Deployment**: Vercel

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ (tested on Node.js 20+)
- npm 9+

### Setup
```bash
# Clone the repository
git clone https://github.com/CyberFocus2410/Portfolio.git
cd Portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎛️ Sanity Studio & Content Management

The portfolio includes an embedded Sanity Studio located at [`/studio`](http://localhost:3000/studio).

### 9 Document Schemas Configured:
1. **Projects (`project`)**: Title, domain category, summary, case study body, tech stack, device mockup frame (`monitor` | `phone`), screenshots gallery, demo video, GitHub repo, live URL, and research disclaimer.
2. **Hackathons (`hackathon`)**: Name, organizer, date, result/distinction, 2-3 sentence bio, project reference, and certificate file upload.
3. **Certificates (`certificate`)**: Title, issuer, certificate type, issue date, optional expiry date, credential ID, verification link, and PDF/image upload.
4. **Badges (`badge`)**: Title, issuer, graphic asset, issue date, and verification link.
5. **Skills (`skill`)**: Skill name, category (Security, Languages, Frameworks, AI/ML, Tools), proficiency level, and related projects.
6. **Experience (`experience`)**: Organization, role, start/end dates, current flag, and impact bullet points.
7. **Education (`education`)**: Institution, degree, field of study, dates, CGPA, and coursework highlights.
8. **Doors (`door`)**: Title, domain slug, accent color, uppercase monospace tagline, checklist items, and display order.
9. **Roles (`role`)**: Role title for the desk-calendar hero flip-card and sequence order.
10. **Site Settings (`siteSettings`)**: Hero headline, bio, status badges, portrait cutouts, resume PDF, and contact links.

---

## 📱 Phone Browser Editing Guide (Editing Sanity Studio on Mobile)

You can manage, edit, and publish content directly from your smartphone browser (Safari on iOS or Chrome on Android) without needing a laptop:

### Step 1: Open the Studio on Your Phone
- Once deployed to Vercel, navigate to `https://<your-portfolio-domain>/studio` in your mobile browser.
- In local development over your local Wi-Fi, open `http://<your-computer-ip>:3000/studio`.

### Step 2: Sign In
- Tap the **Sign in with Google** or **GitHub** button to authenticate with your Sanity credentials.
- Mobile browsers will persist your login session in cookies so you don't need to re-login every time.

### Step 3: Navigating Document Lists
- Tap the **hamburger menu (☰)** in the top left to open the schema selector drawer.
- Select the collection you want to edit (e.g., **Certificates**, **Projects**, or **Hackathons**).
- Tap the **`+` (Plus)** button in the top right header to create a new entry, or tap any existing item in the list to edit it.

### Step 4: Uploading Certificate PDFs or Photos from Your Phone
- In any document with an image or file field (like `certificate.file` or `project.cover`):
  - Tap **Select** or **Upload**.
  - Your phone will prompt: **Take Photo**, **Photo Library**, or **Choose File** (Files app / Google Drive).
  - Select your newly received certificate PDF or screenshot. It uploads directly to the Sanity asset CDN.

### Step 5: Publishing
- Tap the green **Publish** button at the bottom right.
- Sanity's webhook will automatically ping `/api/revalidate`, purging the cache and making your changes visible on the live website within seconds!

---

## 🔄 Revalidation Webhook (`/api/revalidate`)

To keep static pages fast while instantly showing updates:
- **Endpoint**: `POST /api/revalidate`
- **Header**: `Authorization: Bearer <SANITY_REVALIDATE_SECRET>` or query parameter `?secret=<SANITY_REVALIDATE_SECRET>`
- Automatically revalidates homepage (`/`), work directory (`/work`), `/certificates`, `/hackathons`, and individual project slugs.

---

## 📜 Compliance & Disclaimers

All healthcare AI prototypes (`Cardiac Analyst`, `PneumoVision`, `Health Vault`) include the mandatory banner:
> *"Research and educational prototype, not a medical device. Uses synthetic data only."*
