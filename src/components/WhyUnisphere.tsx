import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers, Check, BookOpenCheck } from 'lucide-react';

interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  renderMockup: () => React.ReactNode;
}

export const WhyUnisphere: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 1. Mockup for "Connected Campus Workflows" (Blends Image 1 Design Depth with Image 2 Academic Content)
  const renderWorkflowsMockup = () => (
    <div className="relative w-full h-[290px] sm:h-[330px] md:h-[350px] flex items-center justify-center select-none overflow-visible">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"
        />
      </div>

      {/* Back Dark Card (Prominently exposed to the left, tilted like Image 1) */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [-8, -9.5, -8]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{
          rotate: -11,
          x: -10,
          transition: { duration: 0.25 }
        }}
        className="absolute z-10 w-[195px] sm:w-[215px] md:w-[230px] bg-[#111317] text-white rounded-[22px] sm:rounded-[24px] p-4.5 sm:p-5 border border-white/10 shadow-[0_22px_45px_rgba(0,0,0,0.35)] -translate-x-18 sm:-translate-x-22 md:-translate-x-26 -translate-y-5 sm:-translate-y-7 cursor-pointer"
      >
        {/* Performance Header with live sparkline tracer */}
        <div className="flex items-center justify-between">
          <span className="text-[12px] sm:text-[13px] font-bold text-white tracking-wide">
            Performance
          </span>
          <div className="relative">
            <svg className="w-5 h-3.5 overflow-visible" viewBox="0 0 24 16" fill="none">
              <motion.path
                d="M1 13L8 6L14 10L23 2"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
            <motion.span
              className="absolute -right-0.5 -top-0.5 w-1.5 h-1.5 rounded-full bg-[#00B2FE] shadow-[0_0_8px_#00B2FE]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
        </div>
        <p className="text-[9.5px] text-white/50 mt-1">In the past 7 days</p>

        {/* Big Metric (50+ like Image 1) */}
        <div className="mt-4 sm:mt-5">
          <span className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-none font-sans">
            50+
          </span>
          <p className="text-[9.5px] text-white/50 mt-1.5">Campus Workflows</p>
        </div>
      </motion.div>

      {/* Front Light Card (Overlapping to the right, exactly like Image 1 styling with Image 2 content) */}
      <motion.div
        animate={{
          y: [0, 6, 0],
          rotate: [1.5, 0.5, 1.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4
        }}
        whileHover={{
          rotate: 0,
          y: 2,
          scale: 1.02,
          transition: { duration: 0.25 }
        }}
        className="relative z-20 w-[245px] sm:w-[275px] md:w-[290px] bg-[#ffffff] text-slate-800 rounded-[24px] sm:rounded-[28px] p-4.5 sm:p-5.5 border border-slate-100 shadow-[0_24px_50px_rgba(0,0,0,0.12)] translate-x-8 sm:translate-x-12 md:translate-x-14 translate-y-3 sm:translate-y-5 cursor-pointer"
      >
        <div className="text-left">
          {/* Header */}
          <span className="text-[11.5px] sm:text-[12.5px] font-bold text-slate-800 tracking-tight">
            Semester Workflows
          </span>
          <div className="flex items-baseline gap-1 mt-1 font-sans">
            <span className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">4,850</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-400">/ 5,000 tasks</span>
          </div>

          {/* Animated Cyan Progress Bar (97% filled like 4,850/5,000) */}
          <div className="w-full h-2 bg-[#EFF1F4] rounded-full mt-2.5 overflow-hidden">
            <motion.div
              className="h-full bg-[#00B2FE] rounded-full shadow-[0_0_8px_rgba(0,178,254,0.4)]"
              initial={{ width: '0%' }}
              whileInView={{ width: '97%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>

          {/* 3 Distinct Rounded Card Container Rows (Image 1 Style + Image 2 Content) */}
          <div className="mt-3.5 space-y-2">
            {/* Row 1: Period Attendance -> Synced */}
            <motion.div
              whileHover={{ x: 2 }}
              className="bg-[#F4F5F7] hover:bg-[#EBEEF2] rounded-[14px] p-2.5 sm:p-3 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#181A20] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <div>
                  <p className="text-[11.5px] sm:text-xs font-bold text-slate-900 leading-tight">
                    Period Attendance
                  </p>
                  <p className="text-[9px] sm:text-[9.5px] text-slate-400 font-medium leading-tight mt-0.5">
                    CSE-A • 96% Verified
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Synced
              </span>
            </motion.div>

            {/* Row 2: Continuous Assessment -> 48/50 */}
            <motion.div
              whileHover={{ x: 2 }}
              className="bg-[#F4F5F7] hover:bg-[#EBEEF2] rounded-[14px] p-2.5 sm:p-3 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#181A20] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <BookOpenCheck className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                </div>
                <div>
                  <p className="text-[11.5px] sm:text-xs font-bold text-slate-900 leading-tight">
                    Continuous Assessment
                  </p>
                  <p className="text-[9px] sm:text-[9.5px] text-slate-400 font-medium leading-tight mt-0.5">
                    CIE Marks Compiled
                  </p>
                </div>
              </div>
              <span className="text-[12px] sm:text-[13px] font-extrabold text-slate-900 font-mono tracking-tight pr-1">
                48/50
              </span>
            </motion.div>

            {/* Row 3: Digital Hall Tickets -> Issued */}
            <motion.div
              whileHover={{ x: 2 }}
              className="bg-[#F4F5F7] hover:bg-[#EBEEF2] rounded-[14px] p-2.5 sm:p-3 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#181A20] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Layers className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                </div>
                <div>
                  <p className="text-[11.5px] sm:text-xs font-bold text-slate-900 leading-tight">
                    Digital Hall Tickets
                  </p>
                  <p className="text-[9px] sm:text-[9.5px] text-slate-400 font-medium leading-tight mt-0.5">
                    Semester Exam Clearances
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/50 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Issued
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // 2. Mockup for "Data analytics & insights" (Card 2 in Screenshot: Expertise dark card + Intelligence in Every Decision rising bars)
  const renderAnalyticsMockup = () => (
    <div className="relative w-full h-[280px] sm:h-[310px] md:h-[330px] flex items-center justify-center select-none overflow-visible">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-56 h-56 bg-blue-100/50 rounded-full blur-3xl"
        />
      </div>

      {/* Back Dark Card (Tilted left like screenshot) */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [-8, -9.5, -8]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{
          rotate: -11,
          x: -6,
          transition: { duration: 0.25 }
        }}
        className="absolute z-10 w-[185px] sm:w-[205px] md:w-[220px] bg-[#111317] text-white rounded-[22px] p-4.5 sm:p-5 border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35)] -translate-x-14 sm:-translate-x-18 md:-translate-x-20 -translate-y-4 sm:-translate-y-5 cursor-pointer"
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[13px] sm:text-sm font-bold text-white tracking-tight">Expertise</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#A3E635] text-slate-950 text-[8px] font-extrabold shadow-sm shadow-[#A3E635]/50"
          >
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </motion.span>
          <span className="text-[13px] sm:text-sm font-bold text-white tracking-tight">that</span>
        </div>
        <p className="text-[12px] sm:text-[13px] font-bold text-white/90 leading-tight">
          Combines
        </p>
        <p className="text-[12px] sm:text-[13px] font-bold text-white/90 leading-tight">
          Strategy, Design
        </p>
        <p className="text-[12px] sm:text-[13px] font-bold text-white/90 leading-tight">
          and Artificial
        </p>
        <p className="text-[12px] sm:text-[13px] font-bold text-white/90 leading-tight">
          Intelligence.
        </p>
      </motion.div>

      {/* Front Light Card (Tilted right with Rising Bar Chart like screenshot) */}
      <motion.div
        animate={{
          y: [0, 6, 0],
          rotate: [4, 2.5, 4]
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6
        }}
        whileHover={{
          rotate: 2,
          y: 2,
          scale: 1.02,
          transition: { duration: 0.25 }
        }}
        className="relative z-20 w-[225px] sm:w-[250px] md:w-[265px] bg-[#ffffff] text-slate-800 rounded-[24px] p-4.5 sm:p-5 border border-slate-100 shadow-[0_22px_45px_rgba(0,0,0,0.12)] translate-x-8 sm:translate-x-12 md:translate-x-14 translate-y-3 sm:translate-y-4 cursor-pointer"
      >
        <div className="text-left">
          <div className="mb-3.5">
            <p className="text-[13px] sm:text-sm font-black text-slate-900 leading-tight">
              Intelligence in
            </p>
            <p className="text-[13px] sm:text-sm font-black text-slate-900 leading-tight">
              Every Decision
            </p>
          </div>

          {/* Animated Rising Bar Chart (2019 - 2025) */}
          <div className="flex items-end justify-between h-[95px] px-1 gap-1.5 sm:gap-2">
            {[
              { label: '2019', height: '24%' },
              { label: '2020', height: '36%' },
              { label: '2021', height: '48%' },
              { label: '2022', height: '58%' },
              { label: '2023', height: '70%' },
              { label: '2024', height: '84%' },
              { label: '2025', height: '100%', isAccent: true }
            ].map((bar, idx) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center h-full justify-end">
                <motion.div
                  initial={{ height: '0%' }}
                  whileInView={{ height: bar.height }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                  className={`w-full rounded-t-sm transition-all duration-300 ${
                    bar.isAccent
                      ? 'bg-[#00B2FE] shadow-[0_0_12px_rgba(0,178,254,0.5)]'
                      : 'bg-slate-200/90 hover:bg-slate-300'
                  }`}
                >
                  {bar.isAccent && (
                    <motion.div
                      className="w-full h-full bg-white/20 rounded-t-sm"
                      animate={{ opacity: [0, 0.45, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Year labels */}
          <div className="flex justify-between text-[7px] sm:text-[7.5px] font-mono text-slate-400 mt-2 px-0.5">
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span className="font-bold text-slate-800">2025</span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // 3. Mockup for "Enterprise scale & security" (Card 3 in Screenshot: Avatars dark card + Performance 49% +2.5%)
  const renderScaleMockup = () => (
    <div className="relative w-full h-[280px] sm:h-[310px] md:h-[330px] flex items-center justify-center select-none overflow-visible">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-56 h-56 bg-slate-300/40 rounded-full blur-3xl"
        />
      </div>

      {/* Back Dark Card (Floating bobbing animation with Stakeholder Avatars) */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [7, 8.5, 7]
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{
          rotate: 10,
          x: 6,
          transition: { duration: 0.25 }
        }}
        className="absolute z-10 w-[190px] sm:w-[210px] md:w-[225px] bg-[#111317] text-white rounded-[22px] p-4 sm:p-5 border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35)] translate-x-12 sm:translate-x-16 md:translate-x-18 -translate-y-6 sm:-translate-y-8 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {/* Overlapping stakeholder avatars */}
          <div className="flex -space-x-1.5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
              alt="User 1"
              className="w-5 h-5 rounded-full object-cover border border-white/30"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
              alt="User 2"
              className="w-5 h-5 rounded-full object-cover border border-white/30"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
              alt="User 3"
              className="w-5 h-5 rounded-full object-cover border border-white/30"
              loading="lazy"
            />
          </div>
          <span className="text-[10px] font-semibold text-white/85">+5,000 customers</span>
        </div>

        <p className="text-[11px] font-bold text-white/95 mt-2.5 leading-snug">
          Smart Campus Scale
        </p>
      </motion.div>

      {/* Front Light Card (Performance Banner + 49% +2.5% Metric like Screenshot) */}
      <motion.div
        animate={{
          y: [0, 6, 0],
          rotate: [-1, 0.5, -1]
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4
        }}
        whileHover={{
          rotate: 0,
          y: 2,
          scale: 1.02,
          transition: { duration: 0.25 }
        }}
        className="relative z-20 w-[225px] sm:w-[250px] md:w-[265px] bg-[#ffffff] text-slate-800 rounded-[24px] p-4 sm:p-5 border border-slate-100 shadow-[0_22px_45px_rgba(0,0,0,0.12)] -translate-x-6 sm:-translate-x-10 md:-translate-x-12 translate-y-3 sm:translate-y-5 cursor-pointer"
      >
        <div className="text-left">
          {/* Inner Dark Performance Header */}
          <div className="bg-[#12141A] text-white rounded-[16px] p-3 border border-white/10 mb-3 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white tracking-wide">Performance</span>
              <div className="relative">
                <svg className="w-4 h-3 overflow-visible" viewBox="0 0 24 16" fill="none">
                  <motion.path
                    d="M1 13L8 6L14 10L23 2"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                </svg>
                <motion.span
                  className="absolute -right-0.5 -top-0.5 w-1.5 h-1.5 rounded-full bg-[#00B2FE] shadow-[0_0_8px_#00B2FE]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              </div>
            </div>
            <p className="text-[9px] text-white/50 mt-0.5">In the past 7 days</p>
          </div>

          {/* Big Stat + Green Pill Badge */}
          <div className="flex items-baseline justify-between px-1">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              49%
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16a34a] bg-[#dcfce7] px-2.5 py-0.5 rounded-full">
              +2.5%
            </span>
          </div>

          {/* Status Row */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Campus SLA
            </span>
            <span className="font-bold text-slate-800 font-mono">99.98% Streak</span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // 4. Mockup for "Role-Based Stakeholder Control" (Mathematically Perfect Continuous Orbiting Motion)
  const renderRolesMockup = () => (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] flex items-center justify-center select-none overflow-hidden rounded-2xl">
      {/* 3 Visible Concentric Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 3 (Outer) */}
        <div className="w-[290px] h-[290px] rounded-full border border-slate-200/80 absolute" />
        {/* Ring 2 (Middle) */}
        <div className="w-[220px] h-[220px] rounded-full border border-slate-200/80 absolute" />
        {/* Ring 1 (Inner) */}
        <div className="w-[150px] h-[150px] rounded-full border border-slate-200/80 absolute" />
      </div>

      {/* Orbit 1: Inner Ring (Lindsey Press) - Radius 75px, Diameter 150px */}
      <div className="absolute inset-0 m-auto w-[150px] h-[150px] pointer-events-none">
        <motion.div
          className="w-full h-full relative"
          initial={{ rotate: -15 }}
          animate={{ rotate: 345 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <motion.div
              initial={{ rotate: 15 }}
              animate={{ rotate: -345 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear'
              }}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 shadow-[0_12px_28px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-2 sm:gap-2.5 cursor-pointer whitespace-nowrap select-none hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face"
                alt="Lindsey Press"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover shrink-0"
              />
              <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                Lindsey Press
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-extrabold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                +5%
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Orbit 2: Middle Ring (Ann Stanton) - Radius 110px, Diameter 220px */}
      <div className="absolute inset-0 m-auto w-[220px] h-[220px] pointer-events-none">
        <motion.div
          className="w-full h-full relative"
          initial={{ rotate: 80 }}
          animate={{ rotate: 440 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <motion.div
              initial={{ rotate: -80 }}
              animate={{ rotate: -440 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 shadow-[0_12px_28px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-2 sm:gap-2.5 cursor-pointer whitespace-nowrap select-none hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=face"
                alt="Ann Stanton"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover shrink-0"
              />
              <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                Ann Stanton
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-extrabold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                +2.5%
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Orbit 3: Outer Ring (Livia Curtis) - Radius 145px, Diameter 290px */}
      <div className="absolute inset-0 m-auto w-[290px] h-[290px] pointer-events-none">
        <motion.div
          className="w-full h-full relative"
          initial={{ rotate: 215 }}
          animate={{ rotate: 575 }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <motion.div
              initial={{ rotate: -215 }}
              animate={{ rotate: -575 }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: 'linear'
              }}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 shadow-[0_12px_28px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-2 sm:gap-2.5 cursor-pointer whitespace-nowrap select-none hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
                alt="Livia Curtis"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover shrink-0"
              />
              <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                Livia Curtis
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-extrabold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                +6%
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Center Platform Hub (Unisphere Official Logo) */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{ scale: 1.12 }}
        className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer select-none shadow-[0_10px_25px_rgba(37,99,235,0.25)]"
      >
        <img
          src="/logo-original.png"
          alt="Unisphere SRM Logo"
          className="w-full h-full object-contain pointer-events-none select-none rounded-2xl"
        />
      </motion.div>
    </div>
  );

  const featureCards: FeatureCardData[] = [
    {
      id: 'workflows',
      title: 'Automation & optimization',
      description:
        'Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.',
      renderMockup: renderWorkflowsMockup
    },
    {
      id: 'analytics',
      title: 'Data analytics & insights',
      description:
        'Transform raw data into strategic insight using advanced analytics, dashboards, and predictive modeling.',
      renderMockup: renderAnalyticsMockup
    },
    {
      id: 'scale',
      title: 'Enterprise scale & security',
      description:
        'Engineered for autonomous engineering colleges and multi-department institutions with high concurrency, ISO 27001 data isolation, and 99.98% uptime.',
      renderMockup: renderScaleMockup
    },
    {
      id: 'roles',
      title: 'Role-Based Control',
      description:
        'Give students, faculty, HODs, parents, and administrators access based on their responsibilities with granular permissions.',
      renderMockup: renderRolesMockup
    }
  ];

  // Mobile carousel navigation handlers
  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : featureCards.length - 1));
  };

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev < featureCards.length - 1 ? prev + 1 : 0));
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentCard = featureCards[activeCardIndex];

  return (
    <section id="institutions" className="py-16 sm:py-24 bg-[#f3f3f3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Top Label / Kicker: Sleek Dot + Category */}
          <div className="flex items-center justify-center gap-1.5 mb-3.5">
            <span className="text-slate-800 text-sm font-black select-none">•</span>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-slate-800">
              Built for Institutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-[1.12] text-balance font-display">
            Built for the way your institution works.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance leading-relaxed max-w-2xl mx-auto">
            Unisphere brings academic and institutional workflows into one structured platform, with role-based access that gives every stakeholder the information and actions they need.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< md): SINGLE CARD CAROUSEL WITH SQUIRCLE BUTTONS            */}
        {/* ========================================================================= */}
        <div className="block md:hidden w-full max-w-[440px] mx-auto">
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="touch-pan-y"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.985 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="bg-[#ffffff] border border-[#eaedf0] rounded-[32px] sm:rounded-[36px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[510px]"
              >
                {/* Visual Mockup Area */}
                <div className="w-full pt-2 pb-4">
                  {currentCard.renderMockup()}
                </div>

                {/* Card Title & Description */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">
                    {currentCard.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-500 font-normal leading-relaxed text-balance">
                    {currentCard.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Below Card (Squircle Buttons + Dots) */}
          <div className="flex flex-col items-center justify-center gap-3 mt-7">
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-12 h-12 rounded-xl bg-[#EDEDED] hover:bg-[#DFE2E6] active:scale-95 text-slate-800 flex items-center justify-center transition-all shadow-2xs border border-slate-200/50 cursor-pointer"
              >
                <ArrowLeft className="w-4.5 h-4.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next card"
                className="w-12 h-12 rounded-xl bg-[#EDEDED] hover:bg-[#DFE2E6] active:scale-95 text-slate-800 flex items-center justify-center transition-all shadow-2xs border border-slate-200/50 cursor-pointer"
              >
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Indicator dots */}
            <div className="flex items-center gap-1.5 pt-1">
              {featureCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCardIndex(idx)}
                  aria-label={`Go to card ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === idx ? 'w-6 bg-slate-800' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= md): UNIFIED BENTO CONTAINER WITH INTERIOR DIVIDERS      */}
        {/* ========================================================================= */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="bg-[#ffffff] border border-[#eaedf0] rounded-[36px] sm:rounded-[44px] lg:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="grid grid-cols-2">
              {featureCards.map((card, idx) => {
                const isLeftColumn = idx % 2 === 0;
                const isTopRow = idx < 2;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                    className={`p-8 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[520px] lg:min-h-[560px] transition-colors hover:bg-slate-50/40 ${
                      isLeftColumn ? 'border-r border-[#eaedf0]' : ''
                    } ${isTopRow ? 'border-b border-[#eaedf0]' : ''}`}
                  >
                    {/* Visual Mockup Area */}
                    <div className="w-full pt-2 pb-6 flex items-center justify-center min-h-[310px] overflow-visible select-none">
                      {card.renderMockup()}
                    </div>

                    {/* Card Title & Description */}
                    <div className="text-center mt-6">
                      <h3 className="text-2xl lg:text-[28px] font-extrabold text-slate-900 tracking-tight font-display">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 sm:mt-3 text-sm lg:text-[15px] text-slate-500 font-normal leading-relaxed max-w-md mx-auto text-balance">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnisphere;
