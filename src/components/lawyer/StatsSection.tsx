import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 12847, suffix: '+', label: 'Verified Lawyers' },
  { value: 98.7, suffix: '%', label: 'Accuracy Rate', decimals: 1 },
  { value: 250, suffix: 'K+', label: 'Verifications Made' },
  { value: 24, suffix: '/7', label: 'System Availability' },
];

const AnimatedNumber: React.FC<{ target: number; suffix: string; decimals?: number; isVisible: boolean }> = ({ target, suffix, decimals = 0, isVisible }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.min(increment * step, target));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-[#0f1a2e] via-[#162240] to-[#0f1a2e] py-12 sm:py-16 border-y border-[#d4af37]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ value, suffix, label, decimals }) => (
            <div key={label} className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d4af37] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

                <AnimatedNumber target={value} suffix={suffix} decimals={decimals} isVisible={isVisible} />
              </p>
              <p className="text-[#6b7fa3] text-xs sm:text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
