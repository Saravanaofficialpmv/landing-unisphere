# UNISPHERE SRM — Project Knowledge Base

> **Platform**: UNISPHERE SRM — Academic Management & Campus Super-App  
> **Tagline**: *One Campus. One Connected Experience.*  
> **Brand / Publisher**: [HeyDigital](https://heydigital.work) (`heydigital.work`)  
> **Repository**: [Saravanaofficialpmv/landing-unisphere](https://github.com/Saravanaofficialpmv/landing-unisphere.git)  
> **Last Updated**: September 2026  

---

## 1. Executive Summary & Overview

**UNISPHERE SRM** is a production-quality, responsive academic management platform and campus landing super-app designed for higher education institutions. It connects five primary institutional stakeholders into a unified, coherent digital workspace:

1. **Students**: Track attendance, academic timetables, exam marks, CGPA, paperless assignments, certifications, hackathons, and placement preparation.
2. **Faculty**: Take attendance in seconds, manage assignments and submissions, grade continuous assessments, and mentor student batches.
3. **Heads of Department (HODs)**: Supervise department academic health, allocate faculty workloads, pace syllabus progress, and approve student and staff requests.
4. **Parents**: Monitor daily attendance thresholds, review semester progress and marksheets, clear institutional fee installments, and receive critical alerts.
5. **Administrators**: Govern campus-wide Role-Based Access Control (RBAC), dispatch urgent institutional broadcasts, manage user directories, and audit platform security.

---

## 2. Technology Stack & Architectural Specifications

### 2.1 Web Application Architecture (This Repository)

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^18.3.1` | Component-based UI layer |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.6.3` | Strict type safety across components and data schemas |
| **Bundler & Tooling** | [Vite](https://vitejs.dev/) | `^5.4.10` | High-performance HMR and production bundling |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.14` | Utility-first CSS with custom tokens and typography |
| **Animation Engine** | [Framer Motion](https://www.framer.com/motion/) | `^11.11.11` | Viewport-triggered micro-interactions and modal transitions |
| **Iconography** | [Lucide React](https://lucide.dev/) | `^0.454.0` | Consistent, clean icon set |
| **Routing** | [React Router DOM](https://reactrouter.com/) | `^7.18.2` | Client-side routing with automatic scroll-to-top |
| **Typography** | [Google Fonts: Manrope](https://fonts.google.com/specimen/Manrope) | 300–800 | Apple-inspired clean modern typography |

### 2.2 Showcased Target Ecosystem (Mobile & Backend)

The landing page features the underlying technology stack of the Unisphere mobile client application:
- **Flutter**: Cross-platform application framework delivering native 60fps UI on iOS, Android, and Desktop.
- **Riverpod**: Unidirectional, compile-safe reactive state management.
- **Firebase**: Instant authentication, real-time Firestore database synchronization, and cloud notifications.
- **Supabase**: Scalable PostgreSQL relational database and edge infrastructure for complex institutional datasets and reporting.

---

## 3. The 5 Stakeholder Portals

Unisphere strictly scopes data and workflows to eliminate cognitive overload and protect sensitive student records:

```
                          ┌───────────────────────────┐
                          │   UNISPHERE SRM ECOSYSTEM │
                          └─────────────┬─────────────┘
                                        │
      ┌────────────────┬────────────────┼────────────────┬────────────────┐
      ▼                ▼                ▼                ▼                ▼
┌───────────┐    ┌───────────┐    ┌───────────┐    ┌───────────┐    ┌───────────┐
│  Student  │    │  Faculty  │    │    HOD    │    │  Parent   │    │   Admin   │
│  #2563EB  │    │  #7C3AED  │    │  #D97706  │    │  #059669  │    │  #DC2626  │
└─────┬─────┘    └─────┬─────┘    └─────┬─────┘    └─────┬─────┘    └─────┬─────┘
      │                │                │                │                │
Coursework &      Classroom &      Department       Ward Progress    Campus RBAC &
Attendance Logs   Grading Tasks    Health & Pacing  & Fee Clearance  Broadcast Ops
```

### Detailed Breakdown

| Portal | Theme Color | Tagline | Primary Modules & Focus |
| :--- | :--- | :--- | :--- |
| **Student** | `#2563EB` | *Learn. Track. Grow.* | Live schedule, subject-wise attendance gauge (e.g. 92%), exam seat allocations, hall tickets, SGPA/CGPA historical curves, assignment deadlines, NPTEL/Coursera certifications, hackathons, and placement resume generator. |
| **Faculty** | `#7C3AED` | *Teach. Manage. Guide.* | Quick one-tap attendance marking, continuous assessment gradebook, digital assignment reviews, rubrics, and student advising batch directory. |
| **HOD** | `#D97706` | *Lead your department.* | Departmental health dashboard, section-wise syllabus progress (e.g. 98.2%), faculty workload balancing, leave requests, and certification approvals. |
| **Parent** | `#059669` | *Stay connected.* | Daily attendance threshold monitors (<75% / 85%), semester progress marksheets, digital tuition fee installments, and instant receipt archives. |
| **Admin** | `#DC2626` | *Manage the institution.* | Role-based access control (RBAC), campus notification broadcast centre, staff/student account lifecycle, security audits, and 99.98% SLA monitoring. |

---

## 4. 12 Academic & Campus Modules

Structured in `src/data/landingPageData.ts` and categorized across three institutional domains:

### Category A: Academics
1. **Academic Dashboard**: High-level overview of courses, milestones, and daily routines.
2. **Attendance Tracking**: Subject-wise attendance records, medical condonation tracking, and criteria warnings.
3. **Gradebook & CGPA**: Real-time internal marksheets, credit tallies, and semester-by-semester SGPA/CGPA curves.
4. **Examinations**: Exam schedules, digital hall ticket generation, seat allocations, and verified grade releases.
5. **Assignments & Tasks**: Paperless submissions, deadline countdown timers, and instructor feedback rubrics.
6. **Academic Schedule**: Interactive weekly timetable with real-time class room substitutions and faculty availability.

### Category B: Campus Life
7. **Notifications**: Targeted multi-tier broadcast system for urgent institutional alerts, club notices, and circulars.
8. **Campus Events**: Central calendar for symposiums, cultural fests, technical workshops, and guest lectures.

### Category C: Career & Operations
9. **Certifications**: Repository for verified skill credentials (NPTEL, Coursera, AWS, Google Cloud).
10. **Hackathons & Technology**: Coding competition notice board, team formation tools, and innovation project grant tracking.
11. **Resume & Career**: Automated academic resume builder tailored for university placement drives.
12. **Fees & Payments**: Secure digital tuition fee gateway, installment tracking, and downloadable tax receipts.

---

## 5. Application Routing & Page Structure

Configured in `src/App.tsx` with smooth scroll position recovery via `src/components/ScrollToTop.tsx`:

```
/ (Root)
│
├── /                      ───> LandingPage.tsx (Interactive 13-section flagship page)
├── /privacy-policy        ───> PrivacyPolicy.tsx (13-section legal policy with scrollspy TOC)
├── /terms-of-service      ───> TermsOfService.tsx (14-section institutional service agreement)
└── * (Wildcard)           ───> Redirects to /
```

---

## 6. Component Directory & File Map

```
src/
├── App.tsx                      # Primary router setup and top-level route orchestration
├── main.tsx                     # React 18 DOM mount entry point
├── index.css                    # Tailwind directives, glassmorphic styles, custom scrollbars
│
├── types/
│   └── index.ts                 # Type contracts (UserRole, PortalInfo, FeatureItem, etc.)
│
├── data/
│   └── landingPageData.ts       # Central source of truth for portals, features, and metrics
│
├── pages/
│   ├── LandingPage.tsx          # Main landing page assembling all sections & modal states
│   ├── PrivacyPolicy.tsx        # GDPR/DPDP compliant policy with dynamic scroll navigation
│   └── TermsOfService.tsx       # Institutional terms of service agreement
│
└── components/
    ├── Navbar.tsx               # Glassmorphic header with navigation links & mobile drawer
    ├── Hero.tsx                 # Headline, primary CTAs, trust badges
    ├── HeroDashboard.tsx        # Central interactive device preview with 5 floating role badges
    ├── TrustStrip.tsx           # 4 key platform indicators
    ├── AboutUnisphere.tsx       # Core platform philosophy and unified operational model
    ├── PortalCards.tsx          # 5 role-tailored feature cards with direct login links
    ├── FeatureGrid.tsx          # 12-feature responsive grid with filter tabs
    ├── AppShowcase.tsx          # Simulated browser mockup with live role viewport switching
    ├── EcosystemFlow.tsx        # 5-node continuous connected institutional data pipeline
    ├── Technology.tsx           # Interactive cards showcasing Flutter, Firebase, Supabase, Riverpod
    ├── WhyUnisphere.tsx         # 3 high-impact pillar cards (One Platform, Role-Based, Modern)
    ├── SimpleSurface.tsx        # 6 realistic micro-UI widgets (Attendance, CGPA, Timetable, etc.)
    ├── RoleAccess.tsx           # Granular permission comparison matrix for all 5 roles
    ├── FinalCTA.tsx             # Ambient blue glow conversion banner
    ├── Footer.tsx               # Navigation links, copyright, policy links, back-to-top button
    ├── AuthModal.tsx            # Role-based login modal with 1-click test credentials
    ├── DemoRequestModal.tsx     # Institutional demo booking form with field validation
    └── ScrollToTop.tsx          # Route change scroll-reset handler
```

---

## 7. Interactive Built-in Demo Credentials

The interactive sign-in modal (`src/components/AuthModal.tsx`) includes 1-click test credentials for evaluation:

| Persona | Pre-configured Name | Demo Email | Sample Password |
| :--- | :--- | :--- | :--- |
| **Student** | Alex Morgan | `alex.morgan@unisphere.edu` | `••••••••••••` |
| **Faculty** | Prof. Rajiv Sharma | `prof.rajiv@unisphere.edu` | `••••••••••••` |
| **HOD** | Dr. A. Ramanathan | `hod.cse@unisphere.edu` | `••••••••••••` |
| **Parent** | Mr. Morgan | `parent.morgan@gmail.com` | `••••••••••••` |
| **Admin** | Campus Systems Admin | `admin@unisphere.edu` | `••••••••••••` |

---

## 8. Design System & Style Tokens

Configured in `tailwind.config.js` and `src/index.css`:

### Color Palette
- **Primary**:
  - Default: `#2563EB`
  - Light: `#3B82F6`
  - Dark: `#1D4ED8`
  - Subtle: `#EEF2FF`
- **Surface**:
  - Default: `#FFFFFF`
  - Soft: `#F8FAFC`
  - Muted: `#F1F5F9`
- **Content / Text**:
  - Primary: `#0F172A` (Slate 900)
  - Secondary: `#64748B` (Slate 500)
  - Tertiary: `#94A3B8` (Slate 400)
- **Role Accents**:
  - Student: `#2563EB`
  - Faculty: `#7C3AED`
  - HOD: `#D97706`
  - Parent: `#059669`
  - Admin: `#DC2626`

### Shadows & Glassmorphism
- `shadow-card`: `0 4px 20px -2px rgba(15, 23, 42, 0.05)`
- `shadow-card-hover`: `0 12px 32px -4px rgba(15, 23, 42, 0.08)`
- `shadow-elevated`: `0 20px 40px -8px rgba(37, 99, 235, 0.12)`
- `shadow-glow-primary`: `0 0 35px -5px rgba(37, 99, 235, 0.25)`
- `glass-panel`: Translucent white background with `backdrop-blur-md` and `border-white/20`.

---

## 9. Developer & Operational Commands

All commands execute from the repository root:

```bash
# Install project dependencies
npm install

# Start local development server (Vite HMR on http://localhost:3000)
npm run dev

# Run TypeScript type validation and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 10. Legal, Privacy & Attribution

- **Official Website**: [heydigital.work](https://heydigital.work)
- **Contact Support**: `support@heydigital.work`
- **Legal Compliance**:
  - Privacy policy complies with institutional student privacy safeguards, GDPR principles, and the Digital Personal Data Protection (DPDP) Act.
  - Institutional Terms of Service govern role licensing, acceptable use, academic data ownership, and system availability.
- **Copyright**: © 2026 Unisphere SRM. All rights reserved.
