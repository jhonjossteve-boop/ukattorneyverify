import React from 'react';
import { Shield, Scale, Lock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0f1a2e] border-b border-[#d4af37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center shadow-lg">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f1a2e]" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f1a2e] flex items-center justify-center">
                <Shield className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-white text-sm sm:text-lg font-bold tracking-wide leading-tight">
                Lawyer Identity
              </h1>
              <p className="text-[#d4af37] text-[10px] sm:text-xs font-medium tracking-widest uppercase">
                Verification Portal
              </p>
            </div>
          </div>

          {/* Security Indicator */}
          <div className="hidden sm:flex items-center gap-2 bg-[#1a2744]/80 px-4 py-2 rounded-full border border-[#2a3a5c]">
            <Lock className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-400 text-xs font-medium">Secure Connection</span>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Mobile Security Badge */}
          <div className="sm:hidden flex items-center gap-1.5 bg-[#1a2744]/80 px-3 py-1.5 rounded-full border border-[#2a3a5c]">
            <Lock className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-[10px] font-medium">Secure</span>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </header>
  );
};

export default Header;
