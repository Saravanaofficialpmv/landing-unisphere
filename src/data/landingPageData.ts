import { 
  PortalInfo, 
  FeatureItem, 
  MetricItem, 
  TechItem, 
  WhyReason, 
  RoleFlowItem, 
  RoleAccessItem 
} from '../types';

export const PORTALS_DATA: PortalInfo[] = [
  {
    id: 'student',
    name: 'Student Portal',
    tagline: 'Learn. Track. Grow.',
    description: 'Manage academics, attendance, exams, assignments, results, certifications and career activities.',
    color: '#2563EB',
    bgLight: 'rgba(37, 99, 235, 0.06)',
    borderLight: 'rgba(37, 99, 235, 0.2)',
    badge: 'Primary Academic Hub',
    iconName: 'GraduationCap',
    highlights: ['Attendance & Timetable', 'Exams & CGPA Tracker', 'Career & Certifications'],
    sampleMetric: {
      label: 'Attendance Rate',
      value: '92%',
      subtext: '4.0% above 85% requirement'
    }
  },
  {
    id: 'faculty',
    name: 'Faculty Portal',
    tagline: 'Teach. Manage. Guide.',
    description: 'Manage attendance, marks, assignments, submissions and academic workflows.',
    color: '#7C3AED',
    bgLight: 'rgba(124, 58, 237, 0.06)',
    borderLight: 'rgba(124, 58, 237, 0.2)',
    badge: 'Instruction & Workflows',
    iconName: 'BookOpenCheck',
    highlights: ['One-Tap Attendance', 'Gradebook Assessment', 'Submission Grading'],
    sampleMetric: {
      label: 'Active Batches',
      value: '12 Assignments',
      subtext: '94% timely submission rate'
    }
  },
  {
    id: 'hod',
    name: 'HOD Portal',
    tagline: 'Lead your department.',
    description: 'Manage department academics, staff, students, approvals, schedules and analytics.',
    color: '#D97706',
    bgLight: 'rgba(217, 119, 6, 0.06)',
    borderLight: 'rgba(217, 119, 6, 0.2)',
    badge: 'Department Leadership',
    iconName: 'Building2',
    highlights: ['Staff Allocations', 'Curriculum Progress', 'Real-Time Analytics'],
    sampleMetric: {
      label: 'Department Analytics',
      value: 'CSE / 18 Sections',
      subtext: '98.2% syllabus completion'
    }
  },
  {
    id: 'parent',
    name: 'Parent Portal',
    tagline: 'Stay connected.',
    description: 'Monitor attendance, academic performance, fees, exams and important updates.',
    color: '#059669',
    bgLight: 'rgba(5, 150, 105, 0.06)',
    borderLight: 'rgba(5, 150, 105, 0.2)',
    badge: 'Transparent Oversight',
    iconName: 'Users',
    highlights: ['Daily Attendance Alerts', 'CGPA & Marksheets', 'Instant Fee Clearance'],
    sampleMetric: {
      label: 'Overall CGPA',
      value: '8.84',
      subtext: 'Dean’s Honor Roll list'
    }
  },
  {
    id: 'admin',
    name: 'Admin Portal',
    tagline: 'Manage the institution.',
    description: 'Manage users, roles, departments, notifications, settings and institutional operations.',
    color: '#DC2626',
    bgLight: 'rgba(220, 38, 38, 0.06)',
    borderLight: 'rgba(220, 38, 38, 0.2)',
    badge: 'Campus Governance',
    iconName: 'ShieldCheck',
    highlights: ['RBAC Security Policy', 'Campus Broadcasts', 'System Audit Trails'],
    sampleMetric: {
      label: 'Active Campus Nodes',
      value: '248 Users',
      subtext: '99.98% uptime SLA'
    }
  }
];

export const TRUST_METRICS: MetricItem[] = [
  {
    id: 'portals',
    value: '5',
    label: 'Connected Portals',
    description: 'Tailored environments for every institutional persona.'
  },
  {
    id: 'modules',
    value: '12+',
    label: 'Academic & Campus Modules',
    description: 'From attendance tracking to career & placements.'
  },
  {
    id: 'platform',
    value: 'Cross-Platform',
    label: 'Experience',
    description: 'Native responsiveness on iOS, Android, and Web.'
  },
  {
    id: 'security',
    value: 'Role-Based',
    label: 'Access',
    description: 'Granular permissions ensuring strict data boundaries.'
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'academic-dashboard',
    title: 'Academic Dashboard',
    description: 'Unified high-level overview of courses, milestones, and daily routines.',
    iconName: 'LayoutDashboard',
    category: 'Academics'
  },
  {
    id: 'attendance-tracking',
    title: 'Attendance Tracking',
    description: 'Live subject-wise attendance logs, criteria warnings, and medical approvals.',
    iconName: 'CalendarCheck2',
    category: 'Academics'
  },
  {
    id: 'gradebook-cgpa',
    title: 'Gradebook & CGPA',
    description: 'Semester-by-semester SGPA/CGPA calculations and performance graphs.',
    iconName: 'TrendingUp',
    category: 'Academics'
  },
  {
    id: 'examinations',
    title: 'Examinations',
    description: 'Seat allocations, hall ticket downloads, schedules, and verified result releases.',
    iconName: 'FileSpreadsheet',
    category: 'Academics'
  },
  {
    id: 'assignments-tasks',
    title: 'Assignments & Tasks',
    description: 'Paperless assignment submissions, deadline countdowns, and instructor feedback.',
    iconName: 'CheckSquare',
    category: 'Academics'
  },
  {
    id: 'academic-schedule',
    title: 'Academic Schedule',
    description: 'Interactive weekly timetable with live room changes and faculty availability.',
    iconName: 'Clock',
    category: 'Academics'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Targeted broadcast channels for urgent department alerts and notices.',
    iconName: 'Bell',
    category: 'Campus Life'
  },
  {
    id: 'campus-events',
    title: 'Campus Events',
    description: 'Institutional symposiums, cultural fests, workshops, and guest lecture booking.',
    iconName: 'Sparkles',
    category: 'Campus Life'
  },
  {
    id: 'certifications',
    title: 'Certifications',
    description: 'Centralized repository for NPTEL, Coursera, and verifiable skill credentials.',
    iconName: 'Award',
    category: 'Career & Ops'
  },
  {
    id: 'hackathons-tech',
    title: 'Hackathons & Technology',
    description: 'Coding competition boards, team formation tools, and innovation grants.',
    iconName: 'Code2',
    category: 'Career & Ops'
  },
  {
    id: 'resume-career',
    title: 'Resume & Career',
    description: 'Automated academic resume builder and placement drive registration.',
    iconName: 'Briefcase',
    category: 'Career & Ops'
  },
  {
    id: 'fees-payments',
    title: 'Fees & Payments',
    description: 'Instant receipt generation, instalment tracking, and secure payment gate.',
    iconName: 'CreditCard',
    category: 'Career & Ops'
  }
];

export const TECH_STACK_DATA: TechItem[] = [
  {
    id: 'flutter',
    name: 'Flutter',
    description: 'Cross-platform application framework delivering 60fps native UI across mobile and desktop.',
    category: 'Frontend Core',
    icon: 'Smartphone'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    description: 'Robust authentication, real-time Firestore synchronization, and secure cloud storage.',
    category: 'Backend Services',
    icon: 'Flame'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Scalable PostgreSQL relational database and edge infrastructure for complex data queries.',
    category: 'Relational Database',
    icon: 'Database'
  },
  {
    id: 'riverpod',
    name: 'Riverpod',
    description: 'Compile-safe, reactive state management ensuring predictable application performance.',
    category: 'State Architecture',
    icon: 'Boxes'
  }
];

export const WHY_UNISPHERE_DATA: WhyReason[] = [
  {
    number: '01',
    title: 'One Platform',
    description: 'Everything important in one connected ecosystem.',
    bullets: [
      'Eliminates fragmented portals and disjointed login credentials',
      'Harmonizes records between classroom grading and university registrar',
      'Zero latency sync across devices and role viewports'
    ]
  },
  {
    number: '02',
    title: 'Role-Based',
    description: 'Every user gets an experience designed around their responsibilities.',
    bullets: [
      'Tailored workspaces for students, faculty, HODs, parents, and admins',
      'Granular data scoping prevents information overload and privacy leaks',
      'Dedicated workflow triggers matching institutional hierarchy'
    ]
  },
  {
    number: '03',
    title: 'Modern Experience',
    description: 'Powerful academic tools presented through a clean and intuitive interface.',
    bullets: [
      'Apple-inspired minimal design with clear typographic hierarchy',
      'Micro-interactions that turn tedious administrative steps into seconds',
      'Fast, accessible, and delightful to use on any screen'
    ]
  }
];

export const ECOSYSTEM_FLOW_DATA: RoleFlowItem[] = [
  {
    role: 'Student',
    key: 'student',
    title: 'Academic & Learning',
    color: '#2563EB',
    responsibilities: [
      'Attends lectures & logs attendance',
      'Submits assignments & projects',
      'Tracks exam hall tickets & CGPA'
    ],
    workflowOutputs: 'Submits coursework & triggers evaluation'
  },
  {
    role: 'Faculty',
    key: 'faculty',
    title: 'Teaching & Assessment',
    color: '#7C3AED',
    responsibilities: [
      'Marks real-time period attendance',
      'Evaluates assessments & internal marks',
      'Mentors student batches'
    ],
    workflowOutputs: 'Sends internal marks & attendance alerts'
  },
  {
    role: 'HOD',
    key: 'hod',
    title: 'Department Leadership',
    color: '#D97706',
    responsibilities: [
      'Approves syllabus schedules & timetables',
      'Monitors faculty & student analytics',
      'Endorses leave & certification requests'
    ],
    workflowOutputs: 'Validates department metrics for administration'
  },
  {
    role: 'Parent',
    key: 'parent',
    title: 'Oversight & Support',
    color: '#059669',
    responsibilities: [
      'Monitors daily attendance thresholds',
      'Reviews semester progress reports',
      'Clears institutional fee dues'
    ],
    workflowOutputs: 'Maintains verified student support loop'
  },
  {
    role: 'Admin',
    key: 'admin',
    title: 'Governance & Infrastructure',
    color: '#DC2626',
    responsibilities: [
      'Manages security roles & permissions',
      'Executes campus-wide broadcasts',
      'Audits operations & compliance reports'
    ],
    workflowOutputs: 'Ensures campus-wide operational integrity'
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
    description: 'A transparent, trustworthy view into your ward’s daily attendance, academic achievements, fee installments, and university circulars.',
    color: '#059669',
    features: ['Attendance Feed', 'CGPA Reports', 'Fee Receipt Ledger', 'Exam Alerts']
  },
  {
    role: 'Admin',
    focus: 'Institutional Management',
    description: 'Unified management of campus infrastructure, user roles, security access levels, department setup, and global campus announcements.',
    color: '#DC2626',
    features: ['RBAC Security', 'Audit Trail', 'Broadcast Center', 'Campus Database']
  }
];
