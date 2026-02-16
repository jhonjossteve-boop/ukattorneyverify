import React from 'react';
import { Shield, Clock, Lock, FileCheck, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Credentials',
    description: 'Every lawyer profile is thoroughly vetted and verified against official legal registries.',
  },
  {
    icon: Clock,
    title: 'Instant Verification',
    description: 'Get real-time results within seconds. No waiting, no delays in confirming identity.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: '256-bit SSL encryption protects all data transmissions and verification queries.',
  },
  {
    icon: FileCheck,
    title: 'Official Records',
    description: 'Connected to authorised legal databases for accurate and up-to-date information.',
  },
  {
    icon: Users,
    title: 'Trusted by Firms',
    description: 'Used by leading law firms and organisations for identity confirmation.',
  },
  {
    icon: Globe,
    title: 'UK-Wide Coverage',
    description: 'Comprehensive coverage across England, Wales, Scotland, and Northern Ireland.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0f1a2e]/5 px-4 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <span className="text-[#0f1a2e] text-xs font-semibold uppercase tracking-wider">Why Trust Our Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1a2e] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

            Secure & Reliable Verification
          </h2>
          <p className="text-[#6b7fa3] text-sm sm:text-base max-w-lg mx-auto">
            Our platform is built on the highest standards of security and accuracy to ensure trustworthy identity verification.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0f1a2e]/5 group-hover:bg-gradient-to-br group-hover:from-[#d4af37]/10 group-hover:to-[#d4af37]/5 flex items-center justify-center mb-4 transition-all duration-300">
                <Icon className="w-6 h-6 text-[#0f1a2e] group-hover:text-[#d4af37] transition-colors duration-300" />

              </div>
              <h3 className="text-[#0f1a2e] font-bold text-base mb-2">{title}</h3>
              <p className="text-[#6b7fa3] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
