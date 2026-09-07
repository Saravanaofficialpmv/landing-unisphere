import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  BarChart3, 
  Workflow, 
  ShieldCheck, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export const WhyUnisphere: React.FC = () => {
  const valueCards = [
    {
      number: '01',
      title: 'Institutional Visibility',
      tag: 'Real-Time Governance',
      levelPercent: 20,
      description:
        'Get a clearer view of academic progress, department activity, and important institutional workflows.',
      icon: BarChart3
    },
    {
      number: '02',
      title: 'Connected Workflows',
      tag: 'Unified Campus Ecosystem',
      levelPercent: 40,
      description:
        'Bring everyday academic and administrative processes into one coordinated platform instead of managing them across disconnected systems.',
      icon: Workflow
    },
    {
      number: '03',
      title: 'Role-Based Control',
      tag: 'Granular Permissions',
      levelPercent: 60,
      description:
        'Give students, faculty, HODs, parents, and administrators access based on their responsibilities and institutional role.',
      icon: ShieldCheck
    },
    {
      number: '04',
      title: 'Audit & Accreditation',
      tag: 'Accreditation Benchmark',
      levelPercent: 80,
      description:
        'Generate verifiable academic audit trails, continuous marks logs, and syllabus pacing benchmarks with single-click reporting.',
      icon: CheckCircle2
    },
    {
      number: '05',
      title: 'Enterprise Campus Scale',
      tag: 'Multi-Department Resilience',
      levelPercent: 100,
      description:
        'Engineered for multi-department campuses with thousands of active stakeholders, high-throughput security, and institutional data privacy.',
      icon: Building2
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  // Mouse drag-to-swipe physics states
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollStartX = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocityX = useRef(0);
  const snapRestoreTimeout = useRef<number | null>(null);

  // Track scroll position to update active card
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Calculate which card is centered/visible
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length > 0) {
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let minDiff = Infinity;

      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const diff = Math.abs(containerCenter - childCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      });

      if (closestIdx !== activeIndexRef.current) {
        setActiveIndex(closestIdx);
      }
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    window.addEventListener('resize', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (snapRestoreTimeout.current) clearTimeout(snapRestoreTimeout.current);
    };
  }, [handleScroll]);

  // Scroll smoothly to a specific card index
  const scrollToIndex = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (!children[idx]) return;

    const targetChild = children[idx];
    const targetLeft = targetChild.offsetLeft - (el.clientWidth - targetChild.offsetWidth) / 2;

    el.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth'
    });
  }, []);

  // Mouse drag-to-swipe on the cards with smooth inertia / momentum flick
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;

    if (snapRestoreTimeout.current) {
      clearTimeout(snapRestoreTimeout.current);
      snapRestoreTimeout.current = null;
    }

    isMouseDown.current = true;
    isDragging.current = false;
    startX.current = e.pageX - el.offsetLeft;
    scrollStartX.current = el.scrollLeft;

    lastX.current = e.pageX;
    lastTime.current = performance.now();
    velocityX.current = 0;

    el.style.scrollSnapType = 'none';
    el.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();

    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 10) {
      velocityX.current = (e.pageX - lastX.current) / dt; // px per ms
      lastX.current = e.pageX;
      lastTime.current = now;
    }

    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 4) {
      isDragging.current = true;
    }
    el.scrollLeft = scrollStartX.current - walk;
  };

  const handleMouseUp = () => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    const el = scrollRef.current;
    if (!el) return;

    const v = velocityX.current; // px per ms
    const currentActive = activeIndexRef.current;

    // If flicked with velocity, glide smoothly in flick direction
    if (Math.abs(v) > 0.2) {
      const step = Math.abs(v) > 0.9 ? 2 : 1;
      const targetIdx = v < 0
        ? Math.min(valueCards.length - 1, currentActive + step)
        : Math.max(0, currentActive - step);
      scrollToIndex(targetIdx);
    } else {
      scrollToIndex(currentActive);
    }

    // Restore snap smoothly after inertia settles
    snapRestoreTimeout.current = window.setTimeout(() => {
      if (el) {
        el.style.scrollSnapType = 'x mandatory';
        el.style.scrollBehavior = 'smooth';
      }
      isDragging.current = false;
    }, 450);
  };

  return (
    <section id="institutions" className="py-16 sm:py-24 bg-surface-soft/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4 shadow-2xs">
            <Building2 className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Built for Institutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Built for the way your institution works.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Unisphere brings academic and institutional workflows into one structured platform, with role-based access that gives every stakeholder the information and actions they need.
          </p>
        </div>

        {/* Swipeable Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 px-2 sm:px-4 cursor-grab active:cursor-grabbing select-none touch-pan-x"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {valueCards.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={card.number}
                  onClick={() => {
                    if (!isDragging.current) {
                      scrollToIndex(idx);
                    }
                  }}
                  className={`w-[84vw] sm:w-[360px] md:w-[390px] shrink-0 snap-center sm:snap-start p-7 sm:p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-xl ${
                    isActive
                      ? 'border-primary/50 shadow-md shadow-primary/10 ring-2 ring-primary/20 scale-[1.01]'
                      : 'border-border/80 hover:border-primary/30'
                  }`}
                >
                  <div>
                    {/* Top Row: Number + Icon Pill */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-3xl font-extrabold font-mono tracking-tight transition-colors ${
                        isActive ? 'text-primary' : 'text-primary/35 group-hover:text-primary/80'
                      }`}>
                        {card.number}
                      </span>
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-2xs ${
                        isActive 
                          ? 'bg-primary text-white scale-105 shadow-sm shadow-primary/30' 
                          : 'bg-primary-subtle text-primary group-hover:scale-105'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Tag */}
                    <div className="mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary/80 bg-primary-subtle/60 px-2.5 py-0.5 rounded-full border border-primary/15">
                        {card.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-content-primary tracking-tight mt-2.5 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Level Fill Line: Fills from left with no front gap, raising 20% on each slide */}
                  <div className="mt-7 pt-2">
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToIndex(idx);
                      }}
                      className="relative h-2 w-full bg-slate-100 hover:bg-slate-200/80 rounded-full overflow-hidden cursor-pointer transition-colors group/track py-0.5"
                      title={`Slide ${card.number} Level: ${card.levelPercent}%`}
                    >
                      <div 
                        className={`absolute left-0 top-0 bottom-0 rounded-full transition-all duration-700 ease-out ${
                          isActive 
                            ? 'bg-primary shadow-xs shadow-primary/30' 
                            : 'bg-primary/50 group-hover:bg-primary/80'
                        }`}
                        style={{ 
                          width: `${card.levelPercent}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnisphere;
