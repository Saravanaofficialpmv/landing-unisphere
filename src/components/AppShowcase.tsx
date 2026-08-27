import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activePortal, setActivePortal] = useState<'student' | 'faculty' | 'parent' | 'admin'>('student');

  const portals = [
    { id: 'student', name: 'Student Dashboard', icon: GraduationCap, color: '#2563EB', roleLabel: 'Student View' },
    { id: 'faculty', name: 'Faculty Dashboard', icon: BookOpenCheck, color: '#7C3AED', roleLabel: 'Faculty View' },
    { id: 'parent', name: 'Parent Dashboard', icon: Users, color: '#059669', roleLabel: 'Parent View' },
    { id: 'admin', name: 'Admin Dashboard', icon: ShieldCheck, color: '#DC2626', roleLabel: 'Institutional View' },
  ] as const;

  return (
    <section className="py-20 sm:py-28 bg-surface-soft/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              The Unisphere Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Designed for everyday campus life.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal">
            A modern interface that keeps important academic information accessible without overwhelming the user.
          </p>

          {/* Interactive Portal Switcher Tabs */}
          <div className="mt-8 flex items-center justify-center p-1.5 rounded-2xl bg-white border border-border shadow-xs max-w-2xl mx-auto overflow-x-auto">
            {portals.map((p) => {
              const Icon = p.icon;
              const isActive = activePortal === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePortal(p.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 shrink-0 ${
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

        {/* Dashboard Mockup Container */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            layout
            className="bg-white rounded-3xl border border-border shadow-elevated overflow-hidden"
          >
            {/* Window Browser Header */}
            <div className="bg-surface-soft px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 ml-4 px-3 py-1 rounded-lg bg-white border border-border/80 text-xs text-content-secondary">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>https://app.unisphere.io/portal/{activePortal}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary-subtle text-primary border border-primary/20">
                  {portals.find(p => p.id === activePortal)?.roleLabel}
                </span>
              </div>
            </div>

            {/* Window Content Area */}
            <div className="p-5 sm:p-8 min-h-[420px]">
              <AnimatePresence mode="wait">
                {activePortal === 'student' && (
                  <motion.div
                    key="student"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Welcome Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-primary-subtle via-white to-white border border-primary/20">
                      <div>
                        <div className="text-xs font-bold text-primary uppercase">B.Tech Computer Science · Sem VI</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Hello, Alex Morgan (RA2111003010192)</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Next Class: Advanced Algorithms in 20 mins</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs font-semibold text-content-secondary">Overall CGPA</div>
                          <div className="text-2xl font-extrabold text-primary">8.84 / 10</div>
                        </div>
                      </div>
                    </div>

                    {/* 3 Widgets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Attendance Card */}
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Semester Attendance</span>
                          <span className="text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded">92.4%</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-content-secondary">
                            <span>CS401 Algorithms</span>
                            <span className="font-semibold text-content-primary">94% (32/34)</span>
                          </div>
                          <div className="flex justify-between text-content-secondary">
                            <span>CS402 Operating Sys</span>
                            <span className="font-semibold text-content-primary">90% (27/30)</span>
                          </div>
                          <div className="flex justify-between text-content-secondary">
                            <span>CS403 Database Eng</span>
                            <span className="font-semibold text-content-primary">100% (16/16)</span>
                          </div>
                        </div>
                      </div>

                      {/* Today's Schedule */}
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Today's Classes</span>
                          <span className="text-primary font-medium">3 Pending</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 rounded-lg bg-white border border-border flex justify-between items-center">
                            <div>
                              <div className="font-bold text-content-primary">10:00 AM · Cloud Arch</div>
                              <div className="text-[10px] text-content-tertiary">Hall 301 · Dr. Kumar</div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <div className="p-2 rounded-lg bg-white border border-border flex justify-between items-center">
                            <div>
                              <div className="font-bold text-content-primary">11:30 AM · Algorithms</div>
                              <div className="text-[10px] text-content-tertiary">Hall 402 · Prof. Iyer</div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                          </div>
                        </div>
                      </div>

                      {/* Pending Assignments */}
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="flex items-center justify-between text-xs font-bold text-content-primary mb-3">
                          <span>Active Assignments</span>
                          <span className="text-primary font-medium">2 Due Soon</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 rounded-lg bg-white border border-border">
                            <div className="font-bold text-content-primary">Distributed Systems Project</div>
                            <div className="text-[10px] text-red-500 font-semibold mt-0.5">Due Tomorrow, 11:59 PM</div>
                          </div>
                          <div className="p-2 rounded-lg bg-white border border-border">
                            <div className="font-bold text-content-primary">Compiler Design Lab 4</div>
                            <div className="text-[10px] text-content-secondary mt-0.5">Due in 4 days</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activePortal === 'faculty' && (
                  <motion.div
                    key="faculty"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Faculty Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-white border border-purple-200">
                      <div>
                        <div className="text-xs font-bold text-purple-700 uppercase">Faculty Portal · Dept. of Computer Science</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Prof. Rajiv Raman (Faculty ID: FAC-8841)</h4>
                        <p className="text-xs text-content-secondary mt-0.5">4 Sections · 210 Students Registered</p>
                      </div>
                      <button 
                        type="button"
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors self-start sm:self-auto"
                      >
                        + Post Coursework
                      </button>
                    </div>

                    {/* Faculty Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-2">Live Period Attendance</div>
                        <p className="text-xs text-content-secondary mb-3">CSE Section B · Advanced Algorithms (11:30 AM)</p>
                        <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-border">
                          <span className="text-xs font-bold text-emerald-600">58 Present / 2 Absent</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-md">
                            Submitted
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-2">Pending Submissions</div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-content-secondary">Lab Assignment 3</span>
                            <span className="font-bold text-purple-700">48 / 60 Graded</span>
                          </div>
                          <div className="w-full bg-border rounded-full h-1.5">
                            <div className="bg-purple-600 h-1.5 rounded-full w-[80%]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-2">Academic Workflow</div>
                        <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold p-2 bg-emerald-50 rounded-xl border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Internal Marks Approved by HOD</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activePortal === 'parent' && (
                  <motion.div
                    key="parent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Parent Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-white border border-emerald-200">
                      <div>
                        <div className="text-xs font-bold text-emerald-700 uppercase">Parent Oversight · Student: Alex Morgan</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Ward Academic Overview</h4>
                        <p className="text-xs text-content-secondary mt-0.5">University Campus</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-xl border border-emerald-300">
                          Status: In Good Standing
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-2">Attendance Health</div>
                        <div className="text-2xl font-extrabold text-emerald-700">92.4%</div>
                        <p className="text-[11px] text-content-secondary mt-1">No attendance warning alerts</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-2">Academic Standing</div>
                        <div className="text-2xl font-extrabold text-content-primary">8.84 CGPA</div>
                        <p className="text-[11px] text-emerald-600 font-semibold mt-1">Top 5% of Department</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-2">Fee Ledger</div>
                        <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>All Semester Dues Cleared</span>
                        </div>
                        <p className="text-[11px] text-content-secondary mt-1">Receipt #UNI-2026-8891</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activePortal === 'admin' && (
                  <motion.div
                    key="admin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Admin Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-red-50 via-white to-white border border-red-200">
                      <div>
                        <div className="text-xs font-bold text-red-700 uppercase">Institutional Admin Console</div>
                        <h4 className="text-xl font-extrabold text-content-primary mt-1">Central Management Server</h4>
                        <p className="text-xs text-content-secondary mt-0.5">Role-Based Access Control & System Health</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-xl bg-red-100 text-red-700 border border-red-200 self-start sm:self-auto">
                        All Nodes Operational
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-1">Campus User Directory</div>
                        <div className="text-2xl font-extrabold text-content-primary">24,850</div>
                        <div className="text-[11px] text-content-secondary mt-1">Students, Faculty & Staff</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-1">Broadcast Center</div>
                        <div className="text-xs font-semibold text-content-primary mt-1">Last Circular: Exam Schedule 2026</div>
                        <div className="text-[11px] text-emerald-600 font-bold mt-1">Delivered to 100% recipients</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                        <div className="text-xs font-bold text-content-primary mb-1">RBAC Security Policy</div>
                        <div className="text-xs font-semibold text-content-primary mt-1">5 Tier Granular Isolation</div>
                        <div className="text-[11px] text-content-secondary mt-1">Zero permission escalations</div>
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
