import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Layers,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const HeroDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'academics' | 'actions'>('overview');

  const stakeholderNodes = [
    { role: 'Student', color: '#2563EB', icon: GraduationCap, metric: '92% Attendance' },
    { role: 'Faculty', color: '#7C3AED', icon: BookOpenCheck, metric: '12 Batches' },
    { role: 'HOD', color: '#D97706', icon: Building2, metric: '98.2% Pacing' },
    { role: 'Parent', color: '#059669', icon: Users, metric: '8.84 CGPA' },
    { role: 'Admin', color: '#DC2626', icon: ShieldCheck, metric: 'RBAC Enforced' },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Ambient Blue Background Glow */}
      <div 
        className="absolute inset-0 -m-8 bg-gradient-to-tr from-primary/15 via-primary-light/10 to-transparent rounded-[3rem] blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Institutional Stakeholder Connection Ribbon */}
      <div className="mb-4 sm:mb-6 hidden sm:flex items-center justify-center">
        <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-full bg-white/90 backdrop-blur-md border border-border shadow-xs">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-content-tertiary mr-1">
            Connected Layer:
          </span>
          {stakeholderNodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <React.Fragment key={node.role}>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: `${node.color}10`, color: node.color }}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{node.role}</span>
                </div>
                {idx < stakeholderNodes.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-content-tertiary" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Main Dashboard Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-3xl border border-border shadow-elevated overflow-hidden relative"
      >
        {/* Mockup Header / Institutional Browser Bar */}
        <div className="bg-surface-soft px-4 sm:px-6 py-3.5 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-border/70 text-xs text-content-secondary font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>institution.unisphere.edu/academic-console</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-border text-[11px] font-bold text-content-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden xs:inline">Campus System Active</span>
              <span className="xs:hidden">Live</span>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20">
              SRM CORE
            </span>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-4 sm:p-7 space-y-6">
          {/* Top Bar: Campus Title + Navigation Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/70">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-blue-50 text-primary border border-primary/20 uppercase tracking-wide">
                  Institutional Console
                </span>
                <span className="text-xs text-content-tertiary">Semester VI Academic Cycle</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-content-primary mt-1">
                Campus Overview & Institutional Workflows
              </h3>
            </div>

            {/* Console Sub-tabs */}
            <div className="flex items-center gap-1 bg-surface-soft p-1 rounded-xl border border-border/80 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Campus Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('academics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'academics'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Academic Progress
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('actions')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'actions'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Pending Actions (3)
              </button>
            </div>
          </div>

          {/* Institutional KPI Grid: Students, Faculty, Departments, Attendance */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* KPI 1: Students */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-content-secondary">Enrolled Students</span>
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xl sm:text-2xl font-extrabold text-content-primary">Active Cohorts</div>
                <div className="text-[11px] text-content-secondary font-medium mt-0.5">Undergraduate & Postgrad</div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Directories</span>
              </div>
            </div>

            {/* KPI 2: Faculty */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-content-secondary">Faculty & Mentors</span>
                <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <BookOpenCheck className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xl sm:text-2xl font-extrabold text-content-primary">Full Allocation</div>
                <div className="text-[11px] text-content-secondary font-medium mt-0.5">Sections & Lab Batches</div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-purple-600 flex items-center gap-1">
                <span>100% Workload Mapped</span>
              </div>
            </div>

            {/* KPI 3: Departments */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-content-secondary">Departments</span>
                <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xl sm:text-2xl font-extrabold text-content-primary">Multi-Branch</div>
                <div className="text-[11px] text-content-secondary font-medium mt-0.5">Engineering & Allied</div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-amber-700 flex items-center gap-1">
                <span>HOD Supervision Active</span>
              </div>
            </div>

            {/* KPI 4: Attendance Health */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-content-secondary">Campus Attendance</span>
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-content-primary">92%</span>
                <span className="text-[11px] font-bold text-emerald-600">Above Min. 85%</span>
              </div>
              <div className="mt-2 w-full bg-border rounded-full h-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-1.5 rounded-full w-[92%]" />
              </div>
            </div>
          </div>

          {/* Tabbed View Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Academic Pacing & Progress */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border/70">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-xs font-extrabold text-content-primary">Academic Pacing & Progress</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    On Schedule
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between text-content-secondary mb-1">
                      <span>Curriculum Syllabus Coverage (Sem VI)</span>
                      <span className="font-bold text-content-primary">98.2%</span>
                    </div>
                    <div className="w-full bg-surface-soft rounded-full h-2 overflow-hidden border border-border/50">
                      <div className="bg-primary h-2 rounded-full w-[98.2%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-content-secondary mb-1">
                      <span>Continuous Internal Assessments (CIE)</span>
                      <span className="font-bold text-content-primary">Completed (3/3)</span>
                    </div>
                    <div className="w-full bg-surface-soft rounded-full h-2 overflow-hidden border border-border/50">
                      <div className="bg-purple-600 h-2 rounded-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-content-secondary mb-1">
                      <span>Semester CGPA Average</span>
                      <span className="font-bold text-content-primary">8.84 / 10</span>
                    </div>
                    <div className="w-full bg-surface-soft rounded-full h-2 overflow-hidden border border-border/50">
                      <div className="bg-emerald-600 h-2 rounded-full w-[88.4%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Workflow Synchronization Chain */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border/70">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-extrabold text-content-primary">Active Workflow Loop</span>
                  </div>
                  <span className="text-[10px] font-bold text-content-tertiary">Real-Time Sync</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div>
                        <div className="font-bold text-content-primary">Student Coursework Submissions</div>
                        <div className="text-[10px] text-content-secondary">248 submissions pushed to Faculty evaluation queue</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">Synced</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div>
                        <div className="font-bold text-content-primary">Faculty Continuous Marks</div>
                        <div className="text-[10px] text-content-secondary">Internal assessment marks validated for HOD review</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-600">Verified</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <div className="font-bold text-content-primary">Parent Notification Dispatch</div>
                        <div className="text-[10px] text-content-secondary">Weekly attendance thresholds and marksheets notified</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600">Dispatched</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'academics' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-soft border border-border space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-content-primary pb-2 border-b border-border/80">
                <span>Department Syllabus & Examination Readiness</span>
                <span className="text-primary">Department of Computer Science & Engineering</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-border">
                  <div className="text-content-secondary font-medium">CS401 Data Structures</div>
                  <div className="text-base font-extrabold text-content-primary mt-1">94% Attendance</div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-1">Syllabus Complete</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-border">
                  <div className="text-content-secondary font-medium">CS402 Operating Systems</div>
                  <div className="text-base font-extrabold text-content-primary mt-1">90% Attendance</div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-1">Syllabus Complete</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-border">
                  <div className="text-content-secondary font-medium">CS403 Database Engineering</div>
                  <div className="text-base font-extrabold text-content-primary mt-1">100% Attendance</div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-1">Lab Viva Ready</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'actions' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-soft border border-border space-y-2.5 text-xs">
              <div className="text-xs font-bold text-content-primary pb-2 border-b border-border/80">
                Institutional Pending Approvals
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-content-primary">Condonation Approval: 4 Medical Leave Requests</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  HOD Review
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-content-primary">Hall Ticket Generation: Semester VI End-Sem Exams</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-primary border border-primary/20">
                  Ready to Issue
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-content-primary">Faculty Timetable Substitution: Lab Hall 302</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                  Scheduled
                </span>
              </div>
            </div>
          )}

          {/* Bottom Trust Status Bar inside console */}
          <div className="bg-surface-soft rounded-2xl p-3.5 border border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                One platform connecting <strong className="text-content-primary font-bold">Students, Faculty, HODs, Parents & Administrators</strong>
              </span>
            </div>
            <span className="text-[11px] font-bold text-primary flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Unified Campus Database
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroDashboard;
