import React from 'react';
import { 
  FileSpreadsheet, 
  ClipboardList, 
  BarChart3, 
  UsersRound, 
  AlertTriangle,
  AlertCircle,
  Clock,
  EyeOff
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { WobbleCard } from './ui/wobble-card';

interface ProblemSectionProps {
  onExploreSolutions?: () => void;
  onBookDemoClick?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              The Campus Disconnect
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Your campus shouldn't run on disconnected systems.
          </h2>

          <div className="mt-6 max-w-3xl mx-auto">
            <ScrollReveal
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={1}
              blurStrength={5}
              containerClassName="my-2"
              textClassName="text-base sm:text-xl md:text-2xl font-bold text-content-secondary leading-relaxed text-balance"
              wordAnimationEnd="bottom bottom-=15%"
            >
              Academic information often lives across spreadsheets, messaging groups, paper workflows, isolated portals, and disconnected systems. Unisphere brings the people, information, and workflows of your institution into one connected experience.
            </ScrollReveal>
          </div>
        </div>

        {/* Wobble Cards Bento Grid - Preserved on Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6 max-w-7xl mx-auto w-full">
          {/* Card 1: Fragmented Information (Deep Navy/Blue - Span 2) */}
          <WobbleCard
            containerClassName="col-span-2 lg:col-span-2 bg-[#172554] border border-blue-400/20 shadow-xl shadow-blue-950/20 min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]"
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6">
              <div className="max-w-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 sm:mb-5 text-amber-400 shadow-sm">
                  <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-left text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                  Fragmented Information
                </h3>

                <p className="mt-2 sm:mt-3 text-left text-xs sm:text-sm lg:text-base text-neutral-200 leading-relaxed">
                  Academic records, timetables, and student performance live across disparate spreadsheets, messaging groups, paper registers, and isolated portals.
                </p>

                <div className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-md border border-amber-400/30 text-amber-200 text-[11px] sm:text-xs font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Causes data mismatch, lost records, and reporting delays</span>
                </div>
              </div>

              {/* Mobile Micro-Badge */}
              <div className="flex sm:hidden items-center justify-between px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-[11px] text-neutral-200 mt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                  Excel • Registers • WhatsApp
                </span>
                <span className="text-[10px] text-red-400 font-mono bg-red-950/70 px-1.5 py-0.5 rounded border border-red-800/60">
                  Unsynced
                </span>
              </div>

              {/* Decorative Glass Badge for Tablet/Desktop */}
              <div className="hidden lg:flex flex-col gap-2.5 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 w-64 shadow-xl shrink-0">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-200 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                    Siloed Data Sources
                  </span>
                  <span className="text-[10px] text-red-400 bg-red-950/70 px-2 py-0.5 rounded-full border border-red-800/60 font-mono">
                    Mismatch
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] text-neutral-300">
                  <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg">
                    <span>Attendance Spreadsheets</span>
                    <span className="text-amber-300 font-mono text-[10px]">Unsynced</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg">
                    <span>Physical Mark Registers</span>
                    <span className="text-red-300 font-mono text-[10px]">Manual</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg">
                    <span>Student Profile Folders</span>
                    <span className="text-amber-300 font-mono text-[10px]">3 Versions</span>
                  </div>
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* Card 2: Manual Workflows (Deep Crimson/Maroon - Span 1) */}
          <WobbleCard
            containerClassName="col-span-1 bg-[#4c0519] border border-rose-400/20 shadow-xl shadow-rose-950/20 min-h-[220px] sm:min-h-[260px] lg:min-h-[340px]"
            className="flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2.5 sm:mb-5 text-rose-300 shadow-sm">
                <ClipboardList className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-left text-sm sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-snug">
                Manual Workflows
              </h3>

              <p className="mt-1.5 sm:mt-3 text-left text-[11px] sm:text-xs lg:text-sm text-neutral-200 leading-snug sm:leading-relaxed">
                Faculty and staff spend critical teaching hours on manual attendance marking, physical paper leaves, and repetitive marks compilation.
              </p>
            </div>

            <div className="mt-3 sm:mt-6">
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-md border border-rose-400/30 text-rose-200 text-[10px] sm:text-xs font-semibold">
                <Clock className="w-3 h-3 text-rose-400 shrink-0" />
                <span>Wastes admin hours</span>
              </div>
            </div>
          </WobbleCard>

          {/* Card 3: Limited Visibility (Deep Oceanic Cyan - Span 1) */}
          <WobbleCard
            containerClassName="col-span-1 bg-[#0c4a6e] border border-cyan-400/20 shadow-xl shadow-cyan-950/20 min-h-[220px] sm:min-h-[260px] lg:min-h-[340px]"
            className="flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2.5 sm:mb-5 text-cyan-300 shadow-sm">
                <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-left text-sm sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-snug">
                Limited Visibility
              </h3>

              <p className="mt-1.5 sm:mt-3 text-left text-[11px] sm:text-xs lg:text-sm text-neutral-200 leading-snug sm:leading-relaxed">
                Management, Deans, and HODs lack real-time departmental health indicators, syllabus pacing, and early student drop-out warnings.
              </p>
            </div>

            <div className="mt-3 sm:mt-6">
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-md border border-cyan-400/30 text-cyan-200 text-[10px] sm:text-xs font-semibold">
                <EyeOff className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>Data blindspots</span>
              </div>
            </div>
          </WobbleCard>

          {/* Card 4: Disconnected Stakeholders (Deep Indigo/Purple - Span 2) */}
          <WobbleCard
            containerClassName="col-span-2 lg:col-span-2 bg-[#1e1b4b] border border-indigo-400/20 shadow-xl shadow-indigo-950/20 min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]"
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6">
              <div className="max-w-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 sm:mb-5 text-indigo-300 shadow-sm">
                  <UsersRound className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-left text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                  Disconnected Stakeholders
                </h3>

                <p className="mt-2 sm:mt-3 text-left text-xs sm:text-sm lg:text-base text-neutral-200 leading-relaxed">
                  Parents discover attendance shortages only at semester end, while faculty, students, and administration operate without a unified communication loop.
                </p>

                <div className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-md border border-indigo-400/30 text-indigo-200 text-[11px] sm:text-xs font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Weakens parental trust & institutional alignment</span>
                </div>
              </div>

              {/* Mobile Micro-Badge */}
              <div className="flex sm:hidden items-center justify-between px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-[11px] text-neutral-200 mt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <UsersRound className="w-3.5 h-3.5 text-indigo-400" />
                  Parents • Faculty • Admin
                </span>
                <span className="text-[10px] text-amber-400 font-mono bg-amber-950/70 px-1.5 py-0.5 rounded border border-amber-800/60">
                  Fragmented
                </span>
              </div>

              {/* Decorative Glass Badge for Tablet/Desktop */}
              <div className="hidden lg:flex flex-col gap-2.5 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 w-64 shadow-xl shrink-0">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-200 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5">
                    <UsersRound className="w-3.5 h-3.5 text-indigo-400" />
                    Communication Loop
                  </span>
                  <span className="text-[10px] text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-800/60 font-mono">
                    Fragmented
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] text-neutral-300">
                  <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg">
                    <span>Parents</span>
                    <span className="text-red-300 font-mono text-[10px]">Semester End Only</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg">
                    <span>Faculty & Staff</span>
                    <span className="text-amber-300 font-mono text-[10px]">Notice Boards</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg">
                    <span>Administration</span>
                    <span className="text-indigo-300 font-mono text-[10px]">Isolated Loop</span>
                  </div>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

