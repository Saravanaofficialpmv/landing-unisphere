export type UserRole = 'student' | 'faculty' | 'hod' | 'parent' | 'admin';

export interface PortalInfo {
  id: UserRole;
  name: string;
  tagline: string;
  description: string;
  color: string;
  bgLight: string;
  borderLight: string;
  badge: string;
  iconName: string;
  highlights: string[];
  sampleMetric: {
    label: string;
    value: string;
    subtext: string;
  };
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  impact: string;
}

export interface ImplementationStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
