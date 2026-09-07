import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock,
  Clock,
  TrendingUp,
  FileText,
  AlertCircle
} from 'lucide-react';
import { UserRole } from '../types';

export const AppShowcase: React.FC = () => {
  const [activePortal, setActivePortal] = useState<UserRole>('student');

  const portals = [
    { id: 'student' as UserRole, name: 'Student', icon: GraduationCap, color: '#2563EB', roleLabel: 'Student View', tagline: 'Learn. Track. Grow.' },
    { id: 'faculty' as UserRole, name: 'Faculty', icon: BookOpenCheck, color: '#7C3AED', roleLabel: 'Faculty View', tagline: 'Teach. Manage. Guide.' },
    { id: 'hod' as UserRole, name: 'HOD', icon: Building2, color: '#D97706', roleLabel: 'Department View', tagline: 'Lead your department.' },
    { id: 'parent' as UserRole, name: 'Parent', icon: Users, color: '#059669', roleLabel: 'Parent View', tagline: 'Stay connected.' },
    { id: 'admin' as UserRole, name: 'Admin', icon: ShieldCheck, color: '#DC2626', roleLabel: 'Institutional View', tagline: 'Manage the institution.' },
  ];

  const currentPortalConfig = portals.find(p => p.id === activePortal) || portals[0];

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-surface-soft/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Interactive Preview
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            See Unisphere from every role.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Switch between the five stakeholder views to see how information is tailored and scoped for each campus persona.
          </p>

          {/* Interactive Role Switcher Tabs (5 Roles) */}
          <div className="mt-8 flex items-center justify-center p-1.5 rounded-2xl bg-white border border-border shadow-xs max-w-3xl mx-auto overflow-x-auto gap-1">
            {portals.map((p) => {
              const Icon = p.icon;
              const isActive = activePortal === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePortal(p.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-sm shadow-primary/25'
                      : 'text-content-secondary hover:text-content-primary hover:bg-surface-soft'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Mockup Browser Frame */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            layout
            className="bg-white rounded-3xl border border-border shadow-elevated overflow-hidden"
          >
            {/* Window Browser Header */}
            <div className="bg-surface-soft px-4 sm:px-6 py-3.5 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 ml-4 px-3 py-1 rounded-lg bg-white border border-border/80 text-xs text-content-secondary">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>https://app.unisphere.edu/portal/{activePortal}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span 
                  className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                  style={{ 
                    backgroundColor: `${currentPortalConfig.color}15`, 
                    color: currentPortalConfig.color,
                    borderColor: `${currentPortalConfig.color}30`
                  }}
                >
                  {currentPortalConfig.roleLabel}
                </span>
                <span className="text-[10px] text-content-tertiary hidden md:inline">
                  Illustrative Demonstration UI
                </span>
              </div>
            </div>

            {/* Window Content Area with Role Transitions */}
            <div className="p-5 sm:p-8 min-h-[440px] bg-white">
              <AnimatePresence mode="wait">
                {/* 1. STUDENT VIEW */}
                {activePortal === 'student' && (
                  <motion.div
                    key="student"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-200/60">
                      <div>
                        <div className="text-xs font-bold text-primary uppercase">B.Tech Computer Science · Semester VI</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Alex Morgan (RA2111003010192)</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Next Class: Advanced Algorithms in Lecture Hall 402</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs font-semibold text-content-secondary">Cumulative CGPA</div>
                          <div className="text-2xl font-extrabold text-primary">8.84 / 10</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Subject Attendance</span>
                          <span className="text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded font-bold">92% Overall</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-content-secondary">
                            <span>CS401 Algorithms</span>
                            <span className="font-semibold text-content-primary">94% (32/34)</span>
                          </div>
                          <div className="flex justify-between text-content-secondary">
                            <span>CS402 Operating Systems</span>
                            <span className="font-semibold text-content-primary">90% (27/30)</span>
                          </div>
                          <div className="flex justify-between text-content-secondary">
                            <span>CS403 Database Eng Lab</span>
                            <span className="font-semibold text-content-primary">100% (16/16)</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Today's Timetable</span>
                          <Clock className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2.5 rounded-xl bg-white border border-border">
                            <div className="font-bold text-content-primary">10:00 AM · Cloud Arch</div>
                            <div className="text-[10px] text-content-secondary">Hall 301 · Dr. Kumar</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-border">
                            <div className="font-bold text-content-primary">11:30 AM · Advanced Algorithms</div>
                            <div className="text-[10px] text-content-secondary">Hall 402 · Prof. Rajiv Sharma</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Assignments & Resume</span>
                          <FileText className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2.5 rounded-xl bg-white border border-border">
                            <div className="font-bold text-content-primary">Distributed Systems Project</div>
                            <div className="text-[10px] text-amber-600 font-bold mt-0.5">Due Tomorrow · Rubric Verified</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-border flex items-center justify-between">
                            <span className="font-bold text-content-primary">Placement Resume v3</span>
                            <span className="text-[10px] text-emerald-600 font-bold">NPTEL Certified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. FACULTY VIEW */}
                {activePortal === 'faculty' && (
                  <motion.div
                    key="faculty"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-purple-50/50 border border-purple-200/60">
                      <div>
                        <div className="text-xs font-bold text-purple-600 uppercase">Faculty Dashboard · Department of CSE</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Prof. Rajiv Sharma (Associate Professor)</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Assigned Courses: CS401 Algorithms, CS602 Distributed Systems</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-xs">
                          One-Tap Attendance Ready
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Class Attendance</span>
                          <span className="text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded font-bold">Period 3</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">CS401 Section B (62 Students)</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">58 Present · 4 Absent logged</div>
                          </div>
                          <button type="button" className="w-full py-1.5 bg-purple-600 text-white font-bold rounded-lg text-[11px]">
                            Submit Period Attendance
                          </button>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Gradebook Assessment</span>
                          <span className="text-xs text-content-secondary">CIE Marks</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between p-2 bg-white rounded-lg border border-border">
                            <span>Mid-Term Exam II</span>
                            <span className="font-bold text-emerald-600">Graded (62/62)</span>
                          </div>
                          <div className="flex justify-between p-2 bg-white rounded-lg border border-border">
                            <span>Lab Practical Viva</span>
                            <span className="font-bold text-purple-600">Pending HOD Sync</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Student Advising Mentorship</span>
                          <span className="text-xs text-content-secondary">Batch 2024</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">22 Mentees Assigned</div>
                            <div className="text-[10px] text-content-secondary">2 students flagged below 75% attendance threshold</div>
                          </div>
                          <div className="text-[10px] text-purple-700 font-semibold">
                            Parent alert dispatched automatically
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. HOD VIEW */}
                {activePortal === 'hod' && (
                  <motion.div
                    key="hod"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
                      <div>
                        <div className="text-xs font-bold text-amber-700 uppercase">Head of Department Dashboard</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Dr. A. Ramanathan (Professor & HOD, CSE)</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Department: Computer Science & Engineering · 18 Active Batches</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-amber-600 text-white text-xs font-bold shadow-xs">
                          Department Health 98.2%
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Syllabus Completion Pacing</span>
                          <span className="text-amber-700 font-extrabold">Sem VI Pacing</span>
                        </div>
                        <div className="space-y-2.5 text-xs">
                          <div>
                            <div className="flex justify-between text-content-secondary mb-1">
                              <span>Theory Modules</span>
                              <span className="font-bold text-content-primary">98.2% on schedule</span>
                            </div>
                            <div className="w-full bg-border rounded-full h-1.5">
                              <div className="bg-amber-600 h-1.5 rounded-full w-[98.2%]" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-content-secondary mb-1">
                              <span>Laboratory Sessions</span>
                              <span className="font-bold text-content-primary">100% completed</span>
                            </div>
                            <div className="w-full bg-border rounded-full h-1.5">
                              <div className="bg-emerald-600 h-1.5 rounded-full w-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Faculty Workload Balancing</span>
                          <span className="text-xs text-content-secondary">24 Professors</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Average Teaching Hours: 14.2 hrs/wk</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">AICTE Workload Compliant</div>
                          </div>
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Leave Substitutions Mapped</div>
                            <div className="text-[10px] text-content-secondary">0 unscheduled lecture gaps</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Department Approval Desk</span>
                          <span className="text-amber-600 font-bold">4 Pending</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border flex justify-between items-center">
                            <div>
                              <div className="font-bold text-content-primary">Medical Condonation</div>
                              <div className="text-[10px] text-content-secondary">Student ID: RA2111003010192</div>
                            </div>
                            <button type="button" className="px-2 py-1 bg-amber-600 text-white font-bold rounded text-[10px]">
                              Approve
                            </button>
                          </div>
                          <div className="p-2 bg-white rounded-lg border border-border flex justify-between items-center">
                            <div>
                              <div className="font-bold text-content-primary">NPTEL Certification Verification</div>
                              <div className="text-[10px] text-content-secondary">AWS Cloud Solutions Architect</div>
                            </div>
                            <button type="button" className="px-2 py-1 bg-amber-600 text-white font-bold rounded text-[10px]">
                              Verify
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. PARENT VIEW */}
                {activePortal === 'parent' && (
                  <motion.div
                    key="parent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
                      <div>
                        <div className="text-xs font-bold text-emerald-700 uppercase">Parent Oversight Dashboard</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Mr. Morgan (Parent of Alex Morgan)</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Ward: B.Tech Computer Science & Engineering · Year III</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs">
                          Attendance Status: Safe (92%)
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Daily Attendance Monitor</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Today: All 4 Lectures Attended</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">Logged in real-time by Faculty</div>
                          </div>
                          <div className="text-[11px] text-content-secondary">
                            Semester Threshold: <strong>92% (Min. 85%)</strong>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Academic Marks & CGPA</span>
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between p-2 bg-white rounded-lg border border-border">
                            <span>Current Cumulative CGPA</span>
                            <span className="font-bold text-emerald-700">8.84 / 10</span>
                          </div>
                          <div className="flex justify-between p-2 bg-white rounded-lg border border-border">
                            <span>Semester VI Internal Marksheet</span>
                            <span className="font-bold text-content-primary">Verified</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Institutional Fee Ledger</span>
                          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">All Cleared</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border flex justify-between items-center">
                            <div>
                              <div className="font-bold text-content-primary">Semester VI Tuition</div>
                              <div className="text-[10px] text-content-secondary">Receipt #UNI-2026-8819</div>
                            </div>
                            <span className="text-primary font-bold text-[10px]">Download</span>
                          </div>
                          <div className="text-[10px] text-content-secondary">
                            Next installment: Semester VII (July 2026)
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 5. ADMIN VIEW */}
                {activePortal === 'admin' && (
                  <motion.div
                    key="admin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-200/60">
                      <div>
                        <div className="text-xs font-bold text-red-600 uppercase">Campus Administration & RBAC Governance</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Campus Systems Administrator Console</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Central Governance · Role-Based Scoping · Audit Trails</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-red-600 text-white text-xs font-bold shadow-xs">
                          Security Status: Verified
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>RBAC Security Matrix</span>
                          <ShieldCheck className="w-4 h-4 text-red-600" />
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">5 Discrete Role Boundaries</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">Strict least-privilege enforcement</div>
                          </div>
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Active Sessions</div>
                            <div className="text-[10px] text-content-secondary">Multi-factor token authentication active</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Campus Notification Center</span>
                          <span className="text-xs text-content-secondary">Multi-tier</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Latest Broadcast Dispatched</div>
                            <div className="text-[10px] text-content-secondary">"Semester VI Hall Ticket Downloads Live"</div>
                          </div>
                          <button type="button" className="w-full py-1.5 bg-red-600 text-white font-bold rounded-lg text-[11px]">
                            Dispatch Campus Alert
                          </button>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>System Audit Logs</span>
                          <AlertCircle className="w-4 h-4 text-red-600" />
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Grade Changes: 0 unauthorized</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">100% verified HOD sign-offs</div>
                          </div>
                          <div className="p-2 bg-white rounded-lg border border-border">
                            <div className="font-bold text-content-primary">Database Sync</div>
                            <div className="text-[10px] text-content-secondary">PostgreSQL & Firestore synchronized</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
