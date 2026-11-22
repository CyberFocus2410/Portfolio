export interface SeedProject {
  _id: string;
  title: string;
  slug: string;
  domain: "cybersecurity" | "healthcare-ai" | "web-freelance" | "ai-ml" | "apps";
  domainLabel: string;
  summary: string;
  body: string;
  stack: string[];
  role: string;
  mockupType: "monitor" | "phone" | "none";
  repoUrl?: string;
  liveUrl?: string;
  disclaimer?: string;
  featured: boolean;
}

export interface SeedCertificate {
  _id: string;
  title: string;
  issuer: string;
  type: "certification" | "exam" | "course" | "workshop";
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  filePath: string;
  published: boolean;
}

export interface SeedHackathon {
  _id: string;
  name: string;
  organiser: string;
  date: string;
  result: string;
  bio: string;
  projectSlug?: string;
  certificatePath?: string;
  published: boolean;
}

export interface SeedBadge {
  _id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  verifyUrl?: string;
  imagePath: string;
  published: boolean;
}

export interface SeedSkill {
  _id: string;
  name: string;
  category: "security" | "languages" | "frameworks" | "ai-ml" | "tools";
  level: "learning" | "working" | "strong";
  icon: string;
  relatedProjectSlugs: string[];
}

export interface SeedDoor {
  _id: string;
  title: string;
  domain: string;
  colour: string;
  tagline: string;
  checklist: string[];
  order: number;
}

export interface SeedRole {
  _id: string;
  title: string;
  order: number;
}

export const SEED_ROLES: SeedRole[] = [
  { _id: "role-1", title: "Web Developer", order: 1 },
  { _id: "role-2", title: "App developer", order: 2 },
  { _id: "role-3", title: "UI/UX designer", order: 3 },
  { _id: "role-4", title: "Freelancer", order: 4 },
  { _id: "role-5", title: "CyberSecurity Analyst", order: 5 },
  { _id: "role-6", title: "Penetration Tester", order: 6 },
  { _id: "role-7", title: "Blue Teaming in cybersecurity", order: 7 },
  { _id: "role-8", title: "Photographer", order: 8 },
];

export const SEED_DOORS: SeedDoor[] = [
  {
    _id: "door-1",
    title: "CyberSecurity Based Projects",
    domain: "cybersecurity",
    colour: "#1E3A5F",
    tagline: "DEFENSIVE OPERATIONS & SECURITY AUDITING",
    checklist: [
      "Vulnerability assessment & threat profiling",
      "Cryptographic cipher implementations (Krypta)",
      "Entropy-based password security analysis",
      "Breach exposure monitoring (HaveIBeenPwned API)",
      "Blue team defensive operations & penetration testing",
    ],
    order: 1,
  },
  {
    _id: "door-2",
    title: "Medical Based Projects",
    domain: "medical-ai",
    colour: "#4A1E28",
    tagline: "CLINICAL COMPUTER VISION & SYNTHETIC DIAGNOSTICS",
    checklist: [
      "Synthetic echocardiogram segmentation prototypes",
      "Pneumonia radiographic classification engine",
      "Client-side encrypted health telemetry storage",
      "Multi-label chest X-ray deep learning classifiers",
      "HIPAA-compliant synthetic test pipelines (Research only)",
    ],
    order: 2,
  },
  {
    _id: "door-3",
    title: "Freelancing Works",
    domain: "freelancing",
    colour: "#233D2D",
    tagline: "COMMERCIAL CLIENT PORTALS & DIGITAL COMMERCE",
    checklist: [
      "High-conversion bespoke cafe & restaurant portals",
      "Multi-tenant booking & customer inquiry funnels",
      "Sub-second Lighthouse performance optimizations",
      "Scalable responsive interfaces built with Next.js",
      "Client satisfaction across independent commissions",
    ],
    order: 3,
  },
  {
    _id: "door-4",
    title: "AI/ML Projects",
    domain: "ai-ml",
    colour: "#3D2B1E",
    tagline: "MULTIMODAL INTELLIGENCE & COMPUTER VISION",
    checklist: [
      "Real-time Indian Sign Language gesture translation",
      "Accessible regional education tooling (SamajhLe)",
      "Multimodal document summarization pipelines",
      "Edge-optimized inference architectures",
      "Fine-tuned lightweight open models on HuggingFace",
    ],
    order: 4,
  },
];

export const SEED_PROJECTS: SeedProject[] = [
  {
    _id: "proj-1",
    title: "SecureScan AI",
    slug: "securescan-ai",
    domain: "cybersecurity",
    domainLabel: "Cybersecurity",
    summary:
      "AI-augmented automated vulnerability assessment platform inspecting endpoints, open ports, and anomalous network patterns with blue-team defensive mitigation scripts.",
    body: "SecureScan AI leverages automated heuristic scanners coupled with intelligent threat-profiling models to identify OWASP Top 10 vulnerabilities, unauthorized network daemons, and insecure configuration postures.",
    stack: ["Python", "OWASP ZAP", "Scapy", "Docker", "FastAPI"],
    role: "Lead Architect & Security Engineer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/SecureScan-AI",
    featured: true,
  },
  {
    _id: "proj-2",
    title: "Password Strength Analyser",
    slug: "password-strength-analyser",
    domain: "cybersecurity",
    domainLabel: "Cybersecurity",
    summary:
      "Zero-knowledge entropy and breach-exposure auditing tool incorporating NIST SP 800-63B guidelines and HaveIBeenPwned k-anonymity SHA-1 hash checks.",
    body: "Engineered to eliminate client credential transmission by hashing prefixes using k-anonymity while calculating Shannon entropy and dictionary attack resilience in real time.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Web Crypto API"],
    role: "Full-Stack Security Developer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/Password-Strength-Analyser",
    featured: true,
  },
  {
    _id: "proj-3",
    title: "Krypta",
    slug: "krypta",
    domain: "cybersecurity",
    domainLabel: "Cybersecurity",
    summary:
      "Interactive cryptographic workbench and learning laboratory demonstrating classical ciphers through modern AES-GCM and RSA-OAEP public key encryption.",
    body: "Built to deconstruct mathematical foundations of ciphers for defensive blue-teaming and educational cryptanalysis.",
    stack: ["Python", "Cryptography.io", "React", "Tailwind CSS"],
    role: "Security Engineer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/Krypta",
    featured: false,
  },
  {
    _id: "proj-4",
    title: "CyberRiskIQ",
    slug: "cyberriskiq",
    domain: "cybersecurity",
    domainLabel: "Cybersecurity",
    summary:
      "Interactive threat modeling engine scoring organizational attack surfaces using CVSS v3.1 frameworks and threat intelligence feeds.",
    body: "Aggregates multi-vector infrastructure metrics into an actionable executive dashboard with compliance checklists for ISO 27001 and CIS benchmarks.",
    stack: ["Python", "Flask", "Chart.js", "SQLite"],
    role: "Security Analyst",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/CyberRiskIQ",
    featured: false,
  },
  {
    _id: "proj-5",
    title: "Cardiac Analyst",
    slug: "cardiac-analyst",
    domain: "healthcare-ai",
    domainLabel: "Medical AI",
    summary:
      "Research prototype exploring automated ECG waveform anomaly detection and synthetic myocardial arrhythmia classification.",
    body: "Applies 1D Convolutional Neural Networks on synthesized clinical ECG lead data to classify ventricular arrhythmia with cross-validated sensitivity metrics.",
    stack: ["Python", "PyTorch", "NumPy", "Matplotlib", "FastAPI"],
    role: "ML Researcher & Developer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/Cardiac-Analyst",
    disclaimer: "Research and educational prototype, not a medical device. Uses synthetic data only.",
    featured: true,
  },
  {
    _id: "proj-6",
    title: "PneumoVision",
    slug: "pneumovision",
    domain: "healthcare-ai",
    domainLabel: "Medical AI",
    summary:
      "Deep learning diagnostic assistant evaluating synthetic thoracic radiograph imagery for pulmonary opacities and bacterial pneumonia markers.",
    body: "Trained on synthetic and anonymized benchmarks utilizing transfer learning with Grad-CAM visual heatmaps explaining network focus.",
    stack: ["Python", "TensorFlow", "Grad-CAM", "OpenCV", "Streamlit"],
    role: "Computer Vision Engineer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/PneumoVision",
    disclaimer: "Research and educational prototype, not a medical device. Uses synthetic data only.",
    featured: false,
  },
  {
    _id: "proj-7",
    title: "Health Vault",
    slug: "health-vault",
    domain: "healthcare-ai",
    domainLabel: "Medical AI",
    summary:
      "Zero-knowledge encrypted client portal for decentralized personal health telemetry records with role-based emergency access grant tokens.",
    body: "Combines client-side AES-256-GCM encryption with QR emergency medical ID tokens accessible to first responders without central key exposure.",
    stack: ["Flutter", "Dart", "Firebase", "Web Crypto API"],
    role: "Mobile Architect & Security Engineer",
    mockupType: "phone",
    repoUrl: "https://github.com/CyberFocus2410/HealthVault",
    disclaimer: "Research and educational prototype, not a medical device. Uses synthetic data only.",
    featured: false,
  },
  {
    _id: "proj-8",
    title: "LaunchLens",
    slug: "launchlens",
    domain: "web-freelance",
    domainLabel: "Freelancing Works",
    summary:
      "Commercial SaaS landing page and client conversion portal with high-performance animations, lead capture forms, and Stripe integration.",
    body: "Designed and engineered as a turnkey solution for emerging venture startups and boutique agencies demanding sub-second load times.",
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Engineer & UI/UX Designer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/LaunchLens",
    featured: true,
  },
  {
    _id: "proj-9",
    title: "Artisan Cafe Digital Portal",
    slug: "artisan-cafe",
    domain: "web-freelance",
    domainLabel: "Freelancing Works",
    summary:
      "Bespoke cafe menu showcase, table booking system, and interactive story page delivered for an independent commercial client.",
    body: "Featuring an atmospheric dark aesthetic, real-time table reservation validation, and mobile-optimized ordering catalog.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    role: "Freelance Full-Stack Developer",
    mockupType: "monitor",
    featured: false,
  },
  {
    _id: "proj-10",
    title: "SamajhLe",
    slug: "samajhle",
    domain: "ai-ml",
    domainLabel: "AI / ML Projects",
    summary:
      "Accessible AI-powered regional education portal translating complex engineering concepts into bilingual conversational explanations.",
    body: "Utilizes multi-lingual LLM prompt chains to break down abstract computer science theories into vernacular analogies.",
    stack: ["Python", "Google Gemini API", "React", "FastAPI"],
    role: "AI Developer",
    mockupType: "monitor",
    repoUrl: "https://github.com/CyberFocus2410/SamajhLe",
    featured: true,
  },
  {
    _id: "proj-11",
    title: "Sign Bridge",
    slug: "sign-bridge",
    domain: "ai-ml",
    domainLabel: "AI / ML Projects",
    summary:
      "Computer vision application mapping Indian Sign Language hand gestures to real-time speech and textual captions via MediaPipe landmarks.",
    body: "Runs edge-inference on client webcam streams using MediaPipe Hands 21-point spatial landmarks fed into an LSTM sequence classifier.",
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "WebRTC"],
    role: "Computer Vision Engineer",
    mockupType: "monitor",
    featured: false,
  },
  {
    _id: "proj-12",
    title: "MindEase Companion",
    slug: "mindease",
    domain: "apps",
    domainLabel: "Apps & Mobile",
    summary:
      "Cross-platform Flutter mental wellness journal with local biometric authentication, mood tracking visualizers, and offline storage.",
    body: "Engineered with Flutter and SQLite for zero-cloud private journaling, ensuring complete client data sovereignty.",
    stack: ["Flutter", "Dart", "SQLite", "Local Auth"],
    role: "Mobile App Developer",
    mockupType: "phone",
    featured: false,
  },
];

export const SEED_CERTIFICATES: SeedCertificate[] = [
  {
    _id: "cert-1",
    title: "CRTOM - Certified Red Team Operations Management",
    issuer: "Red Team Cyber Security",
    type: "certification",
    issueDate: "2025-11-15",
    filePath: "/certificates/CRTOM by Red Team.pdf",
    published: true,
  },
  {
    _id: "cert-2",
    title: "Vihaan 9.0 Hackathon - Offline Round Top 15 Finalist",
    issuer: "Delhi Technological University (DTU)",
    type: "workshop",
    issueDate: "2026-02-20",
    filePath: "/certificates/Vihaa9.0_OfflineRound.pdf",
    published: true,
  },
  {
    _id: "cert-3",
    title: "FoodScope IIIT-Delhi Hackathon Finalist",
    issuer: "Indraprastha Institute of Information Technology Delhi (IIIT-D)",
    type: "workshop",
    issueDate: "2026-02-14",
    filePath: "/certificates/FOODSCOPE_IIIT-D_HACKATHON.pdf",
    published: true,
  },
  {
    _id: "cert-4",
    title: "FoodScope Hackathon Certificate of Participation",
    issuer: "FoodScope Tech Initiative",
    type: "workshop",
    issueDate: "2026-01-28",
    filePath: "/certificates/FOODSCOPE_HACKATHON.pdf",
    published: true,
  },
  {
    _id: "cert-5",
    title: "SIH 2025 - Smart India Hackathon Regional Nominee",
    issuer: "Ministry of Education & AICTE",
    type: "workshop",
    issueDate: "2025-10-10",
    filePath: "/certificates/SIH2025.pdf",
    published: true,
  },
  {
    _id: "cert-6",
    title: "HackHazards '26 Participation Certificate",
    issuer: "HackHazards Tech Community",
    type: "workshop",
    issueDate: "2026-01-18",
    filePath: "/certificates/HACKHAZARDS 26 Participation Certificate.pdf",
    published: true,
  },
  {
    _id: "cert-7",
    title: "Thoughtworks HackFest Tech Finalist",
    issuer: "Thoughtworks Technologies",
    type: "workshop",
    issueDate: "2025-09-22",
    filePath: "/certificates/HackFest_ThoughtworksTech.pdf",
    published: true,
  },
  {
    _id: "cert-8",
    title: "Decode Labs Engineering Internship Offer Letter",
    issuer: "Decode Labs",
    type: "course",
    issueDate: "2026-01-05",
    filePath: "/certificates/Your Offer Letter _ Decode Labs.pdf",
    published: true,
  },
  {
    _id: "cert-9",
    title: "Indus Rise Student Researcher Offer Letter",
    issuer: "Indus Rise Research Foundation",
    type: "course",
    issueDate: "2025-12-12",
    filePath: "/certificates/INDUS RISE REASEARCHER OFFER LETTER.pdf",
    published: true,
  },
  {
    _id: "cert-10",
    title: "Dataverse Indus Rise Data Analytics",
    issuer: "Indus Rise",
    type: "workshop",
    issueDate: "2025-11-30",
    filePath: "/certificates/DATAVERSE INDUS RISE.pdf",
    published: true,
  },
  {
    _id: "cert-11",
    title: "Python Basic Certification",
    issuer: "HackerRank",
    type: "exam",
    issueDate: "2025-08-14",
    filePath: "/certificates/python_basic certificate.pdf",
    published: true,
  },
  {
    _id: "cert-12",
    title: "Agentic AI Workshop - Emerging Architectures",
    issuer: "Delhi Technical Campus (DTC)",
    type: "workshop",
    issueDate: "2026-02-08",
    filePath: "/certificates/AGENTIC AI WORKSHOP_DTC.pdf",
    published: true,
  },
  {
    _id: "cert-13",
    title: "Industrial IoT (IIoT) Workshop Certificate",
    issuer: "Delhi Technical Campus (DTC)",
    type: "workshop",
    issueDate: "2025-11-20",
    filePath: "/certificates/IIOT_DTC_WORKSHOP.pdf",
    published: true,
  },
  {
    _id: "cert-14",
    title: "Internet of Things (IoT) Semester Workshop",
    issuer: "Delhi Technical Campus (DTC)",
    type: "workshop",
    issueDate: "2025-05-18",
    filePath: "/certificates/IOT WORKSHOP_DTC_2NDSEM.pdf",
    published: true,
  },
  {
    _id: "cert-15",
    title: "Blockchain Technologies Workshop",
    issuer: "Delhi Technical Campus (DTC)",
    type: "workshop",
    issueDate: "2025-09-12",
    filePath: "/certificates/BLOCKCHAIN_DTC_WORKSHOP.pdf",
    published: true,
  },
  {
    _id: "cert-16",
    title: "Power BI Data Visualization & Analytics",
    issuer: "Delhi Technical Campus (DTC)",
    type: "workshop",
    issueDate: "2025-07-25",
    filePath: "/certificates/POWERBI_DTC_WORKSHOP.pdf",
    published: true,
  },
  {
    _id: "cert-17",
    title: "Bharat XR Extended Reality Developer Certificate",
    issuer: "BharatXR Initiative",
    type: "certification",
    issueDate: "2025-06-10",
    filePath: "/certificates/BharatXRCertificate.pdf",
    published: true,
  },
  {
    _id: "cert-18",
    title: "GeeksforGeeks DTC Coding Contest Distinction",
    issuer: "GeeksforGeeks Chapter DTC",
    type: "exam",
    issueDate: "2026-03-01",
    filePath: "/certificates/GFG_DTC_03-2026.png",
    published: true,
  },
  {
    _id: "cert-19",
    title: "Notion Essentials & Productivity Certification",
    issuer: "Notion Academy",
    type: "certification",
    issueDate: "2025-10-02",
    filePath: "/certificates/Notion Certificate.png",
    published: true,
  },
  {
    _id: "cert-20",
    title: "Happy Holidays Algorithm Challenge",
    issuer: "Tech Coding Platform",
    type: "exam",
    issueDate: "2025-12-28",
    filePath: "/certificates/HappyHolidays Contest.png",
    published: true,
  },
  {
    _id: "cert-21",
    title: "Suhang Education Innovation Event",
    issuer: "Suhang Education Society",
    type: "workshop",
    issueDate: "2025-04-15",
    filePath: "/certificates/SuhangEducation_Event.png",
    published: true,
  },
  {
    _id: "cert-22",
    title: "FoodScope Project Distinction Certificate",
    issuer: "FoodScope Foundation",
    type: "workshop",
    issueDate: "2026-01-30",
    filePath: "/certificates/FOODSCOPE_PARTICIPATION CERTIFICATE.pdf",
    published: true,
  },
];

export const SEED_HACKATHONS: SeedHackathon[] = [
  {
    _id: "hack-1",
    name: "Vihaan 9.0 Hackathon",
    organiser: "Delhi Technological University (DTU)",
    date: "2026-02-20",
    result: "Top 15 Finalist (Offline Round)",
    bio: "Selected among hundreds of pan-India collegiate teams to build and pitch an AI healthcare diagnostic system live at the DTU campus.",
    projectSlug: "cardiac-analyst",
    certificatePath: "/certificates/Vihaa9.0_OfflineRound.pdf",
    published: true,
  },
  {
    _id: "hack-2",
    name: "FoodScope Hackathon (IIIT Delhi)",
    organiser: "Indraprastha Institute of Information Technology Delhi (IIIT-D)",
    date: "2026-02-14",
    result: "Top 20 Finalist",
    bio: "Engineered an intelligent supply chain and food safety tracking framework under tight 36-hour sprint constraints at IIIT-D.",
    projectSlug: "securescan-ai",
    certificatePath: "/certificates/FOODSCOPE_IIIT-D_HACKATHON.pdf",
    published: true,
  },
  {
    _id: "hack-3",
    name: "HackHazards '26",
    organiser: "HackHazards Tech Initiative",
    date: "2026-01-18",
    result: "Participant & Security Track Pitch",
    bio: "Developed cryptographic authentication modules for zero-knowledge cloud credential storage.",
    projectSlug: "krypta",
    certificatePath: "/certificates/HACKHAZARDS 26 Participation Certificate.pdf",
    published: true,
  },
  {
    _id: "hack-4",
    name: "Smart India Hackathon (SIH 2025)",
    organiser: "Ministry of Education / AICTE",
    date: "2025-10-10",
    result: "Institute Nominee",
    bio: "Nominated by Delhi Technical Campus to architect automated digital threat monitoring pipelines.",
    projectSlug: "securescan-ai",
    certificatePath: "/certificates/SIH2025.pdf",
    published: true,
  },
];

export const SEED_BADGES: SeedBadge[] = [
  {
    _id: "badge-1",
    title: "CRTOM Operator",
    issuer: "Red Team Cyber Security",
    issueDate: "2025-11-15",
    imagePath: "/certificates/CRTOM by Red Team.pdf",
    published: true,
  },
  {
    _id: "badge-2",
    title: "Python Basic Certified",
    issuer: "HackerRank",
    issueDate: "2025-08-14",
    imagePath: "/certificates/python_basic certificate.pdf",
    published: true,
  },
  {
    _id: "badge-3",
    title: "GFG Collegiate Distinction",
    issuer: "GeeksforGeeks DTC",
    issueDate: "2026-03-01",
    imagePath: "/certificates/GFG_DTC_03-2026.png",
    published: true,
  },
  {
    _id: "badge-4",
    title: "Notion Certified Professional",
    issuer: "Notion",
    issueDate: "2025-10-02",
    imagePath: "/certificates/Notion Certificate.png",
    published: true,
  },
];

export const SEED_SKILLS: SeedSkill[] = [
  { _id: "s-1", name: "Kali Linux", category: "security", level: "strong", icon: "shield", relatedProjectSlugs: ["securescan-ai", "krypta"] },
  { _id: "s-2", name: "Linux / POSIX", category: "security", level: "strong", icon: "terminal", relatedProjectSlugs: ["securescan-ai"] },
  { _id: "s-3", name: "Wireshark", category: "security", level: "working", icon: "network", relatedProjectSlugs: ["securescan-ai"] },
  { _id: "s-4", name: "OWASP Top 10", category: "security", level: "working", icon: "shield-alert", relatedProjectSlugs: ["securescan-ai", "password-strength-analyser"] },
  { _id: "s-5", name: "Python", category: "languages", level: "strong", icon: "code", relatedProjectSlugs: ["securescan-ai", "cardiac-analyst", "krypta"] },
  { _id: "s-6", name: "C", category: "languages", level: "working", icon: "code", relatedProjectSlugs: [] },
  { _id: "s-7", name: "TypeScript", category: "languages", level: "strong", icon: "code", relatedProjectSlugs: ["password-strength-analyser", "launchlens"] },
  { _id: "s-8", name: "Dart", category: "languages", level: "working", icon: "code", relatedProjectSlugs: ["health-vault", "mindease"] },
  { _id: "s-9", name: "HTML5 & CSS3", category: "languages", level: "strong", icon: "code", relatedProjectSlugs: ["launchlens", "artisan-cafe"] },
  { _id: "s-10", name: "Flutter", category: "frameworks", level: "working", icon: "smartphone", relatedProjectSlugs: ["health-vault", "mindease"] },
  { _id: "s-11", name: "React / Next.js", category: "frameworks", level: "strong", icon: "globe", relatedProjectSlugs: ["password-strength-analyser", "launchlens"] },
  { _id: "s-12", name: "MySQL / Relational DBs", category: "frameworks", level: "working", icon: "database", relatedProjectSlugs: ["cyberriskiq"] },
  { _id: "s-13", name: "Firebase", category: "frameworks", level: "working", icon: "flame", relatedProjectSlugs: ["health-vault"] },
  { _id: "s-14", name: "Git & GitHub", category: "frameworks", level: "strong", icon: "git-branch", relatedProjectSlugs: ["securescan-ai", "launchlens"] },
  { _id: "s-15", name: "OpenAI GPT-4o", category: "ai-ml", level: "working", icon: "bot", relatedProjectSlugs: ["samajhle"] },
  { _id: "s-16", name: "Google Gemini", category: "ai-ml", level: "working", icon: "sparkles", relatedProjectSlugs: ["samajhle"] },
  { _id: "s-17", name: "Scikit-Learn", category: "ai-ml", level: "working", icon: "cpu", relatedProjectSlugs: ["cardiac-analyst", "pneumovision"] },
];
