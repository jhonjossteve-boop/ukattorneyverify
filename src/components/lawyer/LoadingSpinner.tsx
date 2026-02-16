import React from 'react';
import { Scale } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fadeIn">
      {/* Outer ring */}
      <div className="relative w-24 h-24 mb-6">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#1a2744] border-t-[#d4af37] animate-spin" />
        {/* Inner ring */}
        <div className="absolute inset-2 rounded-full border-2 border-[#1a2744] border-b-[#d4af37]/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Scale className="w-8 h-8 text-[#d4af37] animate-pulse" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-white text-lg font-semibold mb-2">Verifying Credentials</p>
        <div className="flex items-center gap-1.5 justify-center">
          <span className="text-[#8a9cc0] text-sm">Accessing secure database</span>
          <span className="flex gap-0.5">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 w-64 h-1.5 bg-[#1a2744] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full animate-loadingBar" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
