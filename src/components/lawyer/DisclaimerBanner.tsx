import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

const DisclaimerBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#d4af37]/10 border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Info className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
          <p className="text-[#0f1a2e] text-xs sm:text-sm truncate">
            <span className="font-semibold">Official Notice:</span>{' '}
            <span className="text-[#4a5f82]">This portal provides verified lawyer identity confirmation. All data is encrypted and secure.</span>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-[#d4af37]/20 rounded transition-colors flex-shrink-0"
        >
          <X className="w-3.5 h-3.5 text-[#4a5f82]" />
        </button>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
