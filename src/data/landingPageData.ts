import { 
  PortalInfo, 
  FeatureItem, 
  MetricItem, 
  TechItem, 
  WhyReason, 
  RoleFlowItem, 
  RoleAccessItem,
  ProblemItem,
  GovernanceCard,
  ImplementationStep,
  FAQItem
} from '../types';

export const TRUST_METRICS: MetricItem[] = [
  {
    id: 'portals',
    value: '5',
    label: 'Connected Stakeholder Experiences',
    description: 'Tailored workspaces for students, faculty, HODs, parents, and administrators.'
  },
  {
    id: 'modules',
    value: '12',
    label: 'Academic & Campus Modules',
    description: 'Comprehensive coverage from lecture attendance to career placements and fees.'
  },
  {
    id: 'workflows',
    value: 'Role-Based',
    label: 'Institutional Workflows',
    description: 'Granular permissions and seamless data handoffs aligned to institutional hierarchy.'
  },
  {
    id: 'platform',
    value: 'One',
    label: 'Connected Platform',
    description: 'Unified ecosystem eliminating disparate tools, spreadsheets, and data silos.'
  }
];

export const PROBLEM_CARDS: ProblemItem[] = [
  {
    id: 'fragmented-info',
    title: 'Fragmented Information',
    description: 'Academic records, timetables, and student performance live across disparate spreadsheets, messaging groups, paper registers, and isolated portals.',
    iconName: 'FileSpreadsheet',
    impact: 'Causes data mismatch, lost records, and delays in academic reporting.'
  },
  {
    id: 'manual-workflows',
    title: 'Manual Workflows',
    description: 'Faculty and staff spend critical teaching hours on manual attendance marking, physical paper leave requests, and repetitive internal mark compilation.',
    iconName: 'ClipboardList',
    impact: 'Wastes administrative hours and slows institutional response times.'
  },
  {
    id: 'limited-visibility',
    title: 'Limited Visibility',
    description: 'College management, Deans, and HODs lack real-time departmental health indicators, syllabus completion pacing, and early student drop-out warnings.',
    iconName: 'BarChart3',
    impact: 'Prevents proactive academic interventions and timely administrative decisions.'
  },
  {
    id: 'disconnected-stakeholders',
    title: 'Disconnected Stakeholders',
    description: 'Parents discover attendance shortages only at semester end, while faculty, students, and administration operate without a unified communication loop.',
    iconName: 'UsersRound',
    impact: 'Weakens parental trust, student engagement, and institutional alignment.'
  }
];

export const PORTALS_DATA: PortalInfo[] = [
  {
    id: 'student',
    name: 'Student Portal',
    tagline: 'Learn. Track. Grow.',
    description: 'Empowers students to track attendance percentages, inspect live schedules, download hall tickets, review CGPA curves, submit coursework, and build verified career resumes.',
    color: '#2563EB',
    bgLight: 'rgba(37, 99, 235, 0.06)',
    borderLight: 'rgba(37, 99, 235, 0.2)',
    badge: 'Student Experience',
    iconName: 'GraduationCap',
    highlights: [
      'Live timetable & room substitution updates',
      'Subject-wise attendance gauges & threshold alerts',
      'Continuous assessment gradebook & CGPA history',
      'Digital assignments, certifications & placement resume builder'
    ],
    sampleMetric: {
      label: 'Semester Attendance',
      value: '92%',
      subtext: 'Safely above 85% mandatory threshold'
    }
  },
  {
    id: 'faculty',
    name: 'Faculty Portal',
    tagline: 'Teach. Manage. Guide.',
    description: 'Enables professors and lecturers to record period attendance in seconds, manage internal assessments, evaluate paperless submissions with rubrics, and mentor assigned student batches.',
    color: '#7C3AED',
    bgLight: 'rgba(124, 58, 237, 0.06)',
    borderLight: 'rgba(124, 58, 237, 0.2)',
    badge: 'Teaching & Instruction',
    iconName: 'BookOpenCheck',
    highlights: [
      'One-tap classroom attendance recording',
      'Continuous internal assessment & marks entry',
      'Digital assignment distribution & grading rubrics',
      'Student mentoring batch directory & notes'
    ],
    sampleMetric: {
      label: 'Active Evaluation',
      value: '12 Assignments',
      subtext: '94% timely submission rate across batches'
    }
  },
  {
    id: 'hod',
    name: 'HOD Portal',
    tagline: 'Lead your department.',
    description: 'Gives Heads of Department real-time visibility into departmental academic health, section-wise syllabus pacing, faculty workload distributions, and student leave/certification approvals.',
    color: '#D97706',
    bgLight: 'rgba(217, 119, 6, 0.06)',
    borderLight: 'rgba(217, 119, 6, 0.2)',
    badge: 'Department Leadership',
    iconName: 'Building2',
    highlights: [
      'Department-wide academic health & attendance analytics',
      'Section-wise syllabus pacing & curriculum progress',
      'Faculty teaching workload balancing & timetable allocation',
      'Approval desk for student condonations & certifications'
    ],
    sampleMetric: {
      label: 'Department Health',
      value: 'CSE / 18 Sections',
      subtext: '98.2% syllabus completion tracking on schedule'
    }
  },
  {
    id: 'parent',
    name: 'Parent Portal',
    tagline: 'Stay connected.',
    description: 'Provides parents and guardians transparent, verified oversight of their ward’s daily attendance records, semester marksheets, urgent college circulars, and institutional fee installment payments.',
    color: '#059669',
    bgLight: 'rgba(5, 150, 105, 0.06)',
    borderLight: 'rgba(5, 150, 105, 0.2)',
    badge: 'Parent Oversight',
    iconName: 'Users',
    highlights: [
      'Daily attendance notification threshold monitors',
      'Semester progress reports, SGPA & exam hall tickets',
      'Secure digital tuition fee gateway & receipt ledger',
      'Official institutional notices & circular broadcasts'
    ],
    sampleMetric: {
      label: 'Cumulative CGPA',
      value: '8.84',
      subtext: 'Dean’s Honor Roll eligible'
    }
  },
  {
    id: 'admin',
    name: 'Administrator Portal',
    tagline: 'Manage the institution.',
    description: 'Central command for campus leadership to govern institutional Role-Based Access Control (RBAC), dispatch campus-wide emergency broadcasts, manage user directories, and maintain security audit logs.',
    color: '#DC2626',
    bgLight: 'rgba(220, 38, 38, 0.06)',
    borderLight: 'rgba(220, 38, 38, 0.2)',
    badge: 'Campus Governance',
    iconName: 'ShieldCheck',
    highlights: [
      'Campus-wide Role-Based Access Control (RBAC) governance',
      'Institution & department circular broadcast dispatch',
      'Staff, faculty, student & parent lifecycle management',
      'Comprehensive security audit trails & system monitoring'
    ],
    sampleMetric: {
      label: 'Campus Directory',
      value: 'Role-Secured',
      subtext: 'Zero unauthorized cross-role data access'
    }
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  // CATEGORY A: ACADEMICS
  {
    id: 'academic-dashboard',
    title: 'Academic Dashboard',
    description: 'Unified high-level overview of courses, milestones, and daily routines tailored to each academic persona.',
    outcome: 'Provides immediate clarity on daily schedules, deadlines, and academic priorities.',
    iconName: 'LayoutDashboard',
    category: 'Academics'
  },
  {
    id: 'attendance-tracking',
    title: 'Attendance Tracking',
    description: 'Live subject-wise attendance logs, criteria warnings, medical condonation workflows, and threshold alerts.',
    outcome: 'Eliminates attendance disputes and automatically warns students and parents before shortages occur.',
    iconName: 'CalendarCheck2',
    category: 'Academics'
  },
  {
    id: 'gradebook-cgpa',
    title: 'Gradebook & CGPA',
    description: 'Continuous internal assessment gradebook, automated credit tallies, and semester-by-semester SGPA/CGPA historical curves.',
    outcome: 'Delivers continuous performance visibility and accurate academic transcript projections.',
    iconName: 'TrendingUp',
    category: 'Academics'
  },
  {
    id: 'examinations',
    title: 'Examinations',
    description: 'Examination timetables, digital hall ticket generation, seat allocations, and verified grade publishing.',
    outcome: 'Streamlines semester examination administration from seating plans to instant result verification.',
    iconName: 'FileSpreadsheet',
    category: 'Academics'
  },
  {
    id: 'assignments-tasks',
    title: 'Assignments & Tasks',
    description: 'Paperless assignment submissions, deadline countdown timers, and faculty grading rubrics.',
    outcome: 'Accelerates assignment submission cycles and provides transparent rubric-based feedback.',
    iconName: 'CheckSquare',
    category: 'Academics'
  },
  {
    id: 'academic-schedule',
    title: 'Academic Schedule',
    description: 'Interactive weekly timetable with real-time lecture room substitutions and faculty availability updates.',
    outcome: 'Prevents lecture room clashes and keeps class timetables dynamically synchronized.',
    iconName: 'Clock',
    category: 'Academics'
  },

  // CATEGORY B: CAMPUS LIFE
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Targeted multi-tier broadcast system for urgent institutional alerts, department circulars, and notices.',
    outcome: 'Ensures urgent campus announcements reach intended cohorts instantly across mobile and web.',
    iconName: 'Bell',
    category: 'Campus Life'
  },
  {
    id: 'campus-events',
    title: 'Campus Events',
    description: 'Central calendar for institutional symposiums, technical fests, workshops, and guest lectures.',
    outcome: 'Coordinates co-curricular campus activities and drives active student participation.',
    iconName: 'Sparkles',
    category: 'Campus Life'
  },

  // CATEGORY C: CAREER & OPERATIONS
  {
    id: 'certifications',
    title: 'Certifications',
    description: 'Centralized repository for verified skill credentials (NPTEL, Coursera, AWS, Google Cloud).',
    outcome: 'Endorses student extra-curricular credentials with departmental verification for placement readiness.',
    iconName: 'Award',
    category: 'Career & Ops'
  },
  {
    id: 'hackathons-tech',
    title: 'Hackathons & Technology',
    description: 'Coding competition board, team formation tools, and student innovation project tracking.',
    outcome: 'Promotes interdisciplinary technical innovation and tracks college project milestones.',
    iconName: 'Code2',
    category: 'Career & Ops'
  },
  {
    id: 'resume-career',
    title: 'Resume & Career',
    description: 'Automated academic resume builder and university placement drive registration.',
    outcome: 'Generates standardized, verified academic resumes tailored for university campus recruitment.',
    iconName: 'Briefcase',
    category: 'Career & Ops'
  },
  {
    id: 'fees-payments',
    title: 'Fees & Payments',
    description: 'Secure digital tuition fee gateway, installment tracking, and downloadable tax receipts.',
    outcome: 'Simplifies institutional fee collections with transparent ledgers and immediate receipt downloads.',
    iconName: 'CreditCard',
    category: 'Career & Ops'
  }
];

export const TECH_STACK_DATA: TechItem[] = [
  {
    id: 'flutter',
    name: 'Flutter',
    description: 'Cross-platform framework delivering native 60fps performance across iOS, Android, and Desktop environments.',
    category: 'Client Core',
    icon: 'Smartphone'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    description: 'Instant session authentication, real-time Firestore database synchronization, and cloud notifications.',
    category: 'Cloud Services',
    icon: 'Flame'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Scalable PostgreSQL relational database and edge infrastructure for complex institutional datasets and reports.',
    category: 'Relational Database',
    icon: 'Database'
  },
  {
    id: 'riverpod',
    name: 'Riverpod',
    description: 'Unidirectional, compile-safe reactive state management ensuring predictable application performance.',
    category: 'State Architecture',
    icon: 'Boxes'
  }
];

export const WHY_UNISPHERE_DATA: WhyReason[] = [
  {
    number: '01',
    title: 'One Platform',
    description: 'Bring academic, operational and communication workflows into one institutional ecosystem.',
    bullets: [
      'Eliminates fragmented departmental systems and disjointed login credentials',
      'Harmonizes records between classroom grading, student attendance, and university registrar',
      'Provides a single verified source of truth across all college departments'
    ]
  },
  {
    number: '02',
    title: 'Role-Based',
    description: 'Give every stakeholder a focused experience based on their responsibilities and permissions.',
    bullets: [
      'Dedicated workspaces for students, faculty, HODs, parents, and administrators',
      'Strict data scoping prevents information overload and safeguards student privacy',
      'Role-tailored workflow triggers matching the institution’s organizational hierarchy'
    ]
  },
  {
    number: '03',
    title: 'Connected',
    description: 'Connect students, faculty, HODs, parents and administrators without unnecessary complexity.',
    bullets: [
      'Real-time data flow from lecture attendance to parent notifications in seconds',
      'Department-wide syllabus pacing and performance aggregation for leadership',
      'Clean, modern Manrope typography and intuitive interactions built for everyday use'
    ]
  }
];

export const GOVERNANCE_CARDS: GovernanceCard[] = [
  {
    id: 'rbac',
    title: 'Role-Based Access',
    description: 'Granular permissions ensure students, faculty, HODs, parents, and administrators only access authorized views and operations.',
    iconName: 'ShieldCheck',
    capabilities: [
      'Strict role isolation and least-privilege scoping',
      'Credentialed portal access for each persona',
      'Session-level verification on every action'
    ]
  },
  {
    id: 'data-boundaries',
    title: 'Institutional Data Boundaries',
    description: 'Student academic records, marks, and parent financial transactions are strictly segregated with department-level isolation.',
    iconName: 'Lock',
    capabilities: [
      'Department-scoped student record separation',
      'Confidential internal assessment marksheets',
      'Restricted parent-to-ward data binding'
    ]
  },
  {
    id: 'central-admin',
    title: 'Central Administration',
    description: 'Campus administrators manage user lifecycles, configure departmental structures, and dispatch campus-wide circulars.',
    iconName: 'Building',
    capabilities: [
      'Bulk student and faculty provisioning',
      'Department and course catalogue configuration',
      'Multi-tier broadcast center for urgent circulars'
    ]
  },
  {
    id: 'audit-governance',
    title: 'Audit & Governance',
    description: 'Comprehensive audit logging for attendance submissions, grade changes, leave approvals, and administrative broadcasts.',
    iconName: 'FileCheck',
    capabilities: [
      'Immutable mark update and attendance logs',
      'Approval records for medical condonations',
      'Institutional accountability and compliance trail'
    ]
  }
];

export const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your institution, departments, roles and requirements.',
    details: [
      'Institutional structure and department audit',
      'Academic calendar and examination cycle review',
      'Stakeholder role requirements and approval hierarchies'
    ]
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Structure users, departments, academic workflows and permissions.',
    details: [
      'Department, programme, and course catalogue setup',
      'Role-based permission schemas and grading scales',
      'Timetable structures, attendance rules, and notification criteria'
    ]
  },
  {
    number: '03',
    title: 'Onboard',
    description: 'Bring stakeholders into their appropriate Unisphere experiences.',
    details: [
      'Secure bulk provisioning for students, faculty, and staff',
      'Hands-on orientation for HODs and administrative teams',
      'Parent portal access credentials and onboarding guide'
    ]
  },
  {
    number: '04',
    title: 'Go Live',
    description: 'Launch the connected digital campus experience.',
    details: [
      'Seamless transition to real-time attendance & grading',
      'Active campus broadcast and notification dispatch',
      'Ongoing institutional support and feature refinement'
    ]
  }
];

export const ECOSYSTEM_FLOW_DATA: RoleFlowItem[] = [
  {
    role: 'Student',
    key: 'student',
    title: 'Attends & Engages',
    color: '#2563EB',
    responsibilities: [
      'Attends lectures and tracks attendance percentage',
      'Submits coursework and completes assignments',
      'Monitors exam hall tickets and SGPA progress'
    ],
    workflowOutputs: 'Triggers attendance logging and faculty submission queue'
  },
  {
    role: 'Faculty',
    key: 'faculty',
    title: 'Evaluates & Mentors',
    color: '#7C3AED',
    responsibilities: [
      'Takes period attendance in seconds',
      'Evaluates assessments and enters continuous marks',
      'Mentors student batches on academic progress'
    ],
    workflowOutputs: 'Sends internal marks and updates department syllabus register'
  },
  {
    role: 'HOD',
    key: 'hod',
    title: 'Supervises Department',
    color: '#D97706',
    responsibilities: [
      'Reviews section-wise syllabus pacing and attendance health',
      'Balances faculty teaching workloads and allocations',
      'Approves student condonations and certifications'
    ],
    workflowOutputs: 'Validates department analytics for institution leadership'
  },
  {
    role: 'Parent',
    key: 'parent',
    title: 'Monitors & Supports',
    color: '#059669',
    responsibilities: [
      'Monitors daily attendance against minimum thresholds',
      'Reviews semester marksheets and academic performance',
      'Clears institutional fee installments digitally'
    ],
    workflowOutputs: 'Maintains verified student support loop with the institution'
  },
  {
    role: 'Admin',
    key: 'admin',
    title: 'Governs Campus',
    color: '#DC2626',
    responsibilities: [
      'Enforces Role-Based Access Control (RBAC) security',
      'Dispatches campus-wide circulars and urgent broadcasts',
      'Maintains user directories and platform audit logs'
    ],
    workflowOutputs: 'Preserves institutional integrity, security, and continuity'
  }
];

export const ROLE_ACCESS_DATA: RoleAccessItem[] = [
  {
    role: 'Student',
    focus: 'Personal Academic Experience',
    description: 'A focused environment to track lectures, submit coursework, inspect semester grades, and prepare for campus placement drives.',
    color: '#2563EB',
    features: ['Live Timetable', 'Attendance Tracker', 'Internal Marksheet', 'Resume Builder']
  },
  {
    role: 'Faculty',
    focus: 'Teaching & Academic Management',
    description: 'Streamlined academic tools to conduct daily attendance in seconds, curate digital assignments, and enter continuous assessments.',
    color: '#7C3AED',
    features: ['Quick Attendance', 'Gradebook Matrix', 'Assignment Manager', 'Student Directory']
  },
  {
    role: 'HOD',
    focus: 'Department Management',
    description: 'High-level departmental command center with aggregate academic health, staff allocation, syllabus pacing, and formal approvals.',
    color: '#D97706',
    features: ['Curriculum Audit', 'Faculty Workload', 'Batch Analytics', 'Approval Desk']
  },
  {
    role: 'Parent',
    focus: 'Student Progress & Updates',
    description: 'A transparent view into your ward’s daily attendance, academic achievements, fee installments, and university circulars.',
    color: '#059669',
    features: ['Attendance Feed', 'CGPA Reports', 'Fee Receipt Ledger', 'Exam Alerts']
  },
  {
    role: 'Admin',
    focus: 'Institutional Management',
    description: 'Unified governance of campus infrastructure, user roles, security access levels, department setup, and global announcements.',
    color: '#DC2626',
    features: ['RBAC Security', 'Audit Trail', 'Broadcast Center', 'Campus Database']
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is Unisphere SRM?',
    answer: 'Unisphere SRM is a connected college academic management and campus platform designed specifically for higher-education institutions. It brings students, faculty, Heads of Department (HODs), parents, and administrators together into one coherent role-based digital workspace, unifying everyday campus workflows, academic progress tracking, institutional communications, and administrative operations.'
  },
  {
    question: 'Who is Unisphere SRM for?',
    answer: 'Unisphere SRM is built for higher-education decision-makers and campus communities—including College Management, Principals, Directors, Deans, HODs, Academic Administrators, and IT Administrators seeking to replace fragmented spreadsheets, paper forms, and isolated departmental portals with a unified institutional platform.'
  },
  {
    question: 'What can institutions manage with Unisphere?',
    answer: 'Institutions can manage 12 integrated academic and campus modules: Academic Dashboards, Subject-wise Attendance Tracking, Continuous Assessment Gradebooks & CGPA calculations, Semester Examination Management & Hall Tickets, Assignments & Rubrics, Academic Schedules & Timetables, Campus Notifications & Broadcasts, Campus Events, Verifiable Student Certifications, Hackathons & Technical Competitions, Placement Resume Generation, and Institutional Fees & Payments.'
  },
  {
    question: 'Does Unisphere support different user roles?',
    answer: 'Yes. Unisphere provides five dedicated, role-tailored portal experiences: Student (Learn. Track. Grow.), Faculty (Teach. Manage. Guide.), HOD (Lead your department.), Parent (Stay connected.), and Administrator (Manage the institution.). Each role only sees the features and data appropriate to their responsibilities.'
  },
  {
    question: 'Can an institution request a product demonstration?',
    answer: 'Yes. Institution leaders, Deans, HODs, and administrators can request a comprehensive institutional demonstration through the "Book an Institutional Demo" form. Our platform team will coordinate a guided walkthrough tailored to your institution’s size, programmes, and academic workflows.'
  },
  {
    question: 'Is Unisphere suitable for engineering colleges?',
    answer: 'Yes. Unisphere SRM is ideally architected for engineering colleges, autonomous universities, and multi-department institutions. It natively handles engineering-specific academic workflows such as subject-wise period attendance, continuous internal evaluations (CIE), laboratory marks, technical hackathons, NPTEL/Coursera certification approvals, and placement resume generation.'
  },
  {
    question: 'Can Unisphere support multiple departments?',
    answer: 'Yes. Unisphere is built to support multi-department campus structures. Each department operates under its respective HOD with departmental health metrics, section-wise syllabus pacing, and faculty allocations, while campus administrators retain central institutional oversight.'
  },
  {
    question: 'How does Unisphere handle role-based access?',
    answer: 'Unisphere enforces strict Role-Based Access Control (RBAC). Data boundaries ensure that students and parents access only their own academic records and fee ledgers, faculty manage only their assigned course batches, HODs supervise their department, and administrators govern campus-wide policies with comprehensive audit trails.'
  }
];
