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

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  outcome?: string;
  iconName: string;
  category: 'Academics' | 'Campus Life' | 'Career & Ops';
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TechItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface WhyReason {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface RoleFlowItem {
  role: string;
  key: UserRole;
  title: string;
  color: string;
  responsibilities: string[];
  workflowOutputs: string;
}

export interface RoleAccessItem {
  role: string;
  focus: string;
  description: string;
  color: string;
  features: string[];
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  impact: string;
}

export interface GovernanceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
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

export interface DemoRequestData {
  institutionName: string;
  institutionType: string;
  city: string;
  state: string;
  country: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  modules: string[];
  preferredTime: 'Morning' | 'Afternoon' | 'Evening';
  notes?: string;
}
