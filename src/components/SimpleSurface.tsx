import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarCheck2, 
  TrendingUp, 
  BellRing, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  FileCheck,
  Compass
} from 'lucide-react';

export const SimpleSurface: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface-soft/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Design Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Simple on the surface. Powerful underneath.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal">
            Every component is carefully engineered with clear typography, intuitive feedback, and delightful micro-interactions.
          </p>
        </div>

        {/* 6 Realistic UI Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* UI 1: Attendance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                  <CalendarCheck2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-content-primary">Attendance Tracker</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                92.4% Overall
              </span>
            </div>

            <div className="flex items-center justify-between my-2">
              <div>
                <div className="text-2xl font-extrabold text-content-primary">146 / 158</div>
                <div className="text-[11px] text-content-secondary font-medium">Lectures attended this term</div>
              </div>
              {/* Circular mini gauge */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-border"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary"
                    strokeDasharray="92, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-primary">92%</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-secondary">
              <span>Next Class: 11:30 AM</span>
              <span className="font-bold text-primary">Status: Present</span>
            </div>
          </motion.div>

          {/* UI 2: CGPA & Marks Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-content-primary">Gradebook & CGPA</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-subtle text-primary border border-primary/20">
                Sem VI Verified
              </span>
            </div>

            <div className="flex items-baseline justify-between mb-3">
              <div>
                <span className="text-3xl font-extrabold text-content-primary tracking-tight">8.84</span>
                <span className="text-xs font-semibold text-content-secondary ml-1.5">/ 10.0</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                +0.14 SGPA
              </span>
            </div>

            <div className="grid grid-cols-6 gap-1 items-end h-10 pt-2">
              <div className="bg-primary/20 rounded-xs h-6 text-[9px] text-center" title="Sem 1: 8.2" />
              <div className="bg-primary/40 rounded-xs h-7 text-[9px] text-center" title="Sem 2: 8.4" />
              <div className="bg-primary/60 rounded-xs h-8 text-[9px] text-center" title="Sem 3: 8.6" />
              <div className="bg-primary/70 rounded-xs h-7 text-[9px] text-center" title="Sem 4: 8.5" />
              <div className="bg-primary/85 rounded-xs h-9 text-[9px] text-center" title="Sem 5: 8.7" />
              <div className="bg-primary rounded-xs h-10 text-[9px] text-center shadow-xs" title="Sem 6: 8.84" />
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-secondary">
              <span>Department Rank: #14</span>
              <span className="font-bold text-content-primary">Dean's List</span>
            </div>
          </motion.div>

          {/* UI 3: Live Notification Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <BellRing className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-content-primary">Campus Circulars</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100/70 text-amber-800">
                1 New
              </span>
            </div>

            <div className="p-3 bg-surface-soft rounded-2xl border border-border">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-extrabold text-content-primary">
                    End Semester Hall Tickets Released
                  </h4>
                  <p className="text-[11px] text-content-secondary mt-0.5 leading-snug">
                    Download verified examination pass from Student Portal.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-secondary">
              <span>Issued by Controller of Exams</span>
              <span className="font-bold text-primary">Tap to view</span>
            </div>
          </motion.div>

          {/* UI 4: Academic Schedule Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-content-primary">Timetable Timeline</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                Thursday
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-primary-subtle/50 border border-primary/20 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-primary">11:30 AM · Advanced Algorithms</div>
                  <div className="text-[10px] text-content-secondary">Tech Park · Hall 402</div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white">
                  Live
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-content-primary">02:00 PM · Cloud Computing Lab</div>
                  <div className="text-[10px] text-content-tertiary">Lab Complex · Room 204</div>
                </div>
                <span className="text-[10px] font-medium text-content-tertiary">Upcoming</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-secondary">
              <span>Daily Load: 4 Hours</span>
              <span className="font-bold text-content-primary">Full Schedule</span>
            </div>
          </motion.div>

          {/* UI 5: Progress & Milestone Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-content-primary">Degree Milestone</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                75% Complete
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-content-secondary">Earned Credits</span>
                  <span className="text-content-primary font-bold">120 / 160 Credits</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-600 h-2 rounded-full w-3/4" />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-content-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>All mandatory core courses cleared</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-secondary">
              <span>Graduation: May 2027</span>
              <span className="font-bold text-emerald-600">On Track</span>
            </div>
          </motion.div>

          {/* UI 6: Navigation & Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-content-primary">Universal Navigation</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-soft text-content-secondary border border-border">
                Fast Switcher
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-primary-subtle/40 border border-primary/20 flex items-center gap-2 text-xs font-bold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Academics</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center gap-2 text-xs font-semibold text-content-secondary">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Assignments</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center gap-2 text-xs font-semibold text-content-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Gradebook</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-soft border border-border flex items-center gap-2 text-xs font-semibold text-content-secondary">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Exam Pass</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-content-secondary">
              <span>Keyboard Command: ⌘ + K</span>
              <span className="font-bold text-primary">Quick Search</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
