import { 
  PortalInfo, 
  MetricItem, 
  ProblemItem,
  ImplementationStep,
  FAQItem
} from '../types';

export const TRUST_METRICS: MetricItem[] = [
  {
    id: 'campus',
    value: '01',
    label: 'One Campus',
    description: 'Everything connected in one digital ecosystem.'
  },
  {
    id: 'roles',
    value: '02',
    label: 'Every Role',
    description: 'Purpose-built experiences for every campus stakeholder.'
  },
  {
    id: 'workflows',
    value: '03',
    label: 'Every Workflow',
    description: 'From attendance and academics to fees and careers.'
  },
  {
    id: 'experience',
    value: '04',
    label: 'One Experience',
    description: 'A unified platform built around your institution.'
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
    answer: 'Yes. Institution leaders, Deans, HODs, and administrators can request a comprehensive institutional demonstration through the "Book a Free Demo" link. Our platform team will coordinate a guided walkthrough tailored to your institution’s size, programmes, and academic workflows.'
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
