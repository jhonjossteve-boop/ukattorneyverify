import React from 'react';
import { KeyRound, Search, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: KeyRound,
    step: '01',
    title: 'Obtain Code',
    description: 'Request the unique verification code from the lawyer or their legal firm.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Enter Code',
    description: 'Input the verification code into the secure search field above.',
  },
  {
    icon: UserCheck,
    step: '03',
    title: 'View Profile',
    description: 'Instantly view the verified lawyer profile with confirmed credentials.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#0f1a2e] py-16 sm:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider">Simple Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

            How Verification Works
          </h2>
          <p className="text-[#6b7fa3] text-sm sm:text-base max-w-lg mx-auto">
            Three simple steps to verify a lawyer's identity and credentials.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-8">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <div key={step} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#d4af37]/40 to-[#d4af37]/10" />
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a2e4a] to-[#0f1a2e] border border-[#d4af37]/20 mb-5 group-hover:border-[#d4af37]/50 transition-all duration-300">
                <Icon className="w-8 h-8 text-[#d4af37]" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center">
                  <span className="text-[#0f1a2e] text-[10px] font-black">{step}</span>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-[#6b7fa3] text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
