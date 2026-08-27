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
  TrendingUp 
} from 'lucide-react';

export const HeroDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'attendance' | 'schedule'>('overview');

  const floatingBadges = [
    {
      role: 'Student',
      metric: 'Attendance 92%',
      sub: 'CS401 · Data Structures',
      icon: GraduationCap,
      color: '#2563EB',
      bgLight: 'rgba(37, 99, 235, 0.08)',
      position: 'top-2 -left-4 sm:-left-10 lg:-left-12',
      delay: 0.1,
      yOffset: [0, -6, 0]
    },
    {
      role: 'Faculty',
      metric: '12 Assignments',
      sub: '48 Submissions Graded',
      icon: BookOpenCheck,
      color: '#7C3AED',
      bgLight: 'rgba(124, 58, 237, 0.08)',
      position: 'top-6 -right-4 sm:-right-8 lg:-right-10',
      delay: 0.2,
      yOffset: [0, 8, 0]
    },
    {
      role: 'Parent',
      metric: 'CGPA 8.84',
      sub: 'Semester VI Verified',
      icon: Users,
      color: '#059669',
      bgLight: 'rgba(5, 150, 105, 0.08)',
      position: 'bottom-20 -left-4 sm:-left-8 lg:-left-10',
      delay: 0.3,
      yOffset: [0, 7, 0]
    },
    {
      role: 'HOD',
      metric: 'Department Analytics',
      sub: '18 Batches Active',
      icon: Building2,
      color: '#D97706',
      bgLight: 'rgba(217, 119, 6, 0.08)',
      position: 'bottom-4 -right-4 sm:-right-6 lg:-right-8',
      delay: 0.4,
      yOffset: [0, -7, 0]
    },
    {
      role: 'Admin',
      metric: '248 Users',
      sub: 'RBAC Policy Enforced',
      icon: ShieldCheck,
      color: '#DC2626',
      bgLight: 'rgba(220, 38, 38, 0.08)',
      position: '-top-8 sm:-top-10 left-1/2 -translate-x-1/2',
      delay: 0.5,
      yOffset: [0, -5, 0]
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 lg:mt-0">
      {/* Ambient Blue Background Glow */}
      <div 
        className="absolute inset-0 -m-8 bg-gradient-to-tr from-primary/15 via-primary-light/10 to-transparent rounded-[3rem] blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Floating Role Cards */}
      {floatingBadges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.role}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: badge.yOffset
            }}
            transition={{
              opacity: { duration: 0.5, delay: badge.delay },
              scale: { duration: 0.5, delay: badge.delay },
              y: {
                repeat: Infinity,
                duration: 5 + idx,
                ease: "easeInOut"
              }
            }}
            className={`absolute ${badge.position} z-20 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl glass-card shadow-card-hover border border-white/80`}
          >
            <div 
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: badge.bgLight, color: badge.color }}
            >
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-content-tertiary">
                  {badge.role}
                </span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: badge.color }} />
              </div>
              <p className="text-xs font-extrabold text-content-primary leading-tight">
                {badge.metric}
              </p>
              <p className="text-[10px] text-content-secondary font-medium">
                {badge.sub}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Central Interactive Dashboard Device Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-3xl border border-border shadow-elevated overflow-hidden relative"
      >
        {/* Mockup Header / Browser-Style Frame */}
        <div className="bg-surface-soft px-4 py-3 border-b border-border/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[11px] font-medium text-content-tertiary ml-2 hidden sm:inline-block">
              app.unisphere.io/portal/dashboard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-border text-[11px] font-semibold text-content-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Campus Live</span>
            </div>
            <img src="/logo.png" alt="Unisphere Logo" className="w-6 h-6 rounded-md object-contain shadow-2xs" />
          </div>
        </div>

        {/* Mockup Body */}
        <div className="p-4 sm:p-6 bg-white space-y-5">
          {/* Top Bar inside app */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-primary-subtle text-primary">
                  STUDENT PORTAL
                </span>
                <span className="text-xs text-content-tertiary">Campus Cloud</span>
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-content-primary mt-1">
                Welcome back, Alex Morgan
              </h4>
            </div>

            {/* Sub-tabs inside mockup */}
            <div className="flex items-center gap-1 bg-surface-soft p-1 rounded-xl border border-border/70 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('attendance')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'attendance'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Attendance (92%)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('schedule')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'schedule'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Schedule
              </button>
            </div>
          </div>

          {/* Dynamic Mockup Content View */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Stat 1: Attendance */}
              <div className="p-3.5 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-content-secondary">Attendance</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Safe
                  </span>
                </div>
                <div className="my-2 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-content-primary">92%</span>
                  <span className="text-[11px] text-content-secondary">Req. 85%</span>
                </div>
                <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-1.5 rounded-full w-[92%]" />
                </div>
              </div>

              {/* Stat 2: CGPA */}
              <div className="p-3.5 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-content-secondary">Cumulative CGPA</span>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="my-2 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-content-primary">8.84</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">+0.12 vs Sem V</span>
                </div>
                <div className="flex gap-1 items-end h-3">
                  <div className="w-1/4 bg-primary/30 h-2 rounded-xs" />
                  <div className="w-1/4 bg-primary/50 h-2.5 rounded-xs" />
                  <div className="w-1/4 bg-primary/70 h-2.5 rounded-xs" />
                  <div className="w-1/4 bg-primary h-3 rounded-xs" />
                </div>
              </div>

              {/* Stat 3: Next Class */}
              <div className="p-3.5 rounded-2xl bg-surface-soft border border-border flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-content-secondary">Next Lecture</span>
                  <Clock className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="my-2">
                  <div className="text-xs font-bold text-content-primary">Advanced Algorithms</div>
                  <div className="text-[11px] text-content-secondary">Hall 402 · 11:30 AM</div>
                </div>
                <div className="text-[10px] text-primary font-bold flex items-center gap-1">
                  <span>Starts in 25 mins</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-2.5 bg-surface-soft rounded-xl border border-border text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-semibold text-content-primary">CS401 - Data Structures & Algorithms</span>
                </div>
                <span className="font-bold text-primary">94% (32/34)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-surface-soft rounded-xl border border-border text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-semibold text-content-primary">CS402 - Operating Systems Architecture</span>
                </div>
                <span className="font-bold text-primary">90% (27/30)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-surface-soft rounded-xl border border-border text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-semibold text-content-primary">CS403 - Database Engineering Lab</span>
                </div>
                <span className="font-bold text-primary">100% (16/16)</span>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2.5 bg-primary-subtle/50 rounded-xl border border-primary/20 text-xs">
                <span className="font-bold text-primary w-16">10:00 AM</span>
                <div className="flex-1 font-semibold text-content-primary">Cloud Computing Theory</div>
                <span className="text-[10px] text-content-secondary font-medium">Prof. Sharma · Lab 3</span>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-surface-soft rounded-xl border border-border text-xs">
                <span className="font-bold text-content-secondary w-16">11:30 AM</span>
                <div className="flex-1 font-semibold text-content-primary">Advanced Algorithms</div>
                <span className="text-[10px] text-content-secondary font-medium">Dr. Raman · Hall 402</span>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-surface-soft rounded-xl border border-border text-xs">
                <span className="font-bold text-content-secondary w-16">02:00 PM</span>
                <div className="flex-1 font-semibold text-content-primary">System Design Workshop</div>
                <span className="text-[10px] text-content-secondary font-medium">Tech Lab B</span>
              </div>
            </div>
          )}

          {/* Bottom quick banner inside mockup */}
          <div className="bg-surface-soft rounded-xl p-3 border border-border/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-content-secondary">
                Connected with <span className="font-semibold text-content-primary">Faculty & Parent sync</span>
              </span>
            </div>
            <span className="text-primary font-bold text-[11px] flex items-center gap-1">
              Synchronized <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
