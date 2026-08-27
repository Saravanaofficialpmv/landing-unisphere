# UNISPHERE SRM — Landing Page

> A production-quality, responsive landing page for the **UNISPHERE SRM** academic management platform connecting Students, Faculty, HODs, Parents, and Administrators.

![Unisphere Preview](https://img.shields.io/badge/Platform-Unisphere%20SRM-2563EB?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite%20%7C%20Tailwind-blue?style=for-the-badge)

---

## 🌟 Highlights & Features

- **Apple-Inspired Aesthetic**: Modern typography with Google Fonts *Manrope*, spacious layouts, minimal color accents, and subtle glassmorphism.
- **Central Interactive Dashboard**: Live interactive timetable, attendance gauge, and course status surrounded by 5 floating role cards with Framer Motion animations.
- **5 Dedicated Portals**:
  - 🎓 **Student**: Learn. Track. Grow.
  - 📚 **Faculty**: Teach. Manage. Guide.
  - 🏛️ **HOD**: Lead your department.
  - 👨‍👩‍👧 **Parent**: Stay connected.
  - 🛡️ **Admin**: Manage the institution.
- **12 Academic Modules**: Interactive categorized feature grid covering attendance, gradebook, exams, assignments, timetable, certifications, hackathons, and fees.
- **Multi-Portal Application Showcase**: Realistic browser mockup allowing instant switching between Student, Faculty, Parent, and Admin views.
- **Connected Role Pipeline**: Visual 5-node continuous workflow loop with animated data flows.
- **Technology Stack Section**: Flutter, Firebase, Supabase, Riverpod, and modern Dart ecosystem.
- **Interactive Modals**:
  - Role-based **Authentication Modal** with 1-click demo login credentials for all 5 roles.
  - Institutional **Get Started / Demo Request Modal**.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Bundler / Dev Server**: Vite

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Saravanaofficialpmv/landing-unisphere.git

# Navigate to project directory
cd landing-unisphere

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
landing-unisphere/
├── index.html                 # Manrope font, favicon & SEO meta tags
├── package.json               # Dependencies & build scripts
├── vite.config.ts             # Vite build configuration
├── tailwind.config.js         # Custom Unisphere color tokens & theme
├── tsconfig.json              # Strict TypeScript config
└── src/
    ├── index.css              # Global styles, glass utilities & scrollbars
    ├── main.tsx               # Application entry
    ├── App.tsx                # Page layout assembly & modal state
    ├── types/                 # TypeScript interfaces & types
    ├── data/                  # Structured landing page data
    └── components/            # Modular React components
        ├── Navbar.tsx         # Sticky navigation with mobile drawer
        ├── Hero.tsx           # Hero section & CTA triggers
        ├── HeroDashboard.tsx  # Central dashboard & floating role cards
        ├── TrustStrip.tsx     # 4 platform metrics
        ├── AboutUnisphere.tsx # Two-column about section + pipeline
        ├── PortalCards.tsx    # 5 tailored portal cards
        ├── FeatureGrid.tsx    # 12-feature responsive grid
        ├── AppShowcase.tsx    # Interactive dashboard previews
        ├── EcosystemFlow.tsx  # Continuous 5-role connected workflow
        ├── Technology.tsx     # Technology stack cards
        ├── WhyUnisphere.tsx   # 3 high-impact value cards
        ├── SimpleSurface.tsx  # 6 realistic micro-UI widgets
        ├── RoleAccess.tsx     # 5 persona governance columns
        ├── FinalCTA.tsx       # Ambient glow call to action
        ├── Footer.tsx         # Modern footer with links & back to top
        ├── AuthModal.tsx      # Interactive sign-in modal
        └── DemoRequestModal.tsx # Demo scheduling modal
```

---

## 📄 License

© 2026 Unisphere. All rights reserved.
