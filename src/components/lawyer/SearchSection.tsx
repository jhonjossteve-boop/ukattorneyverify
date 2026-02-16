import React, { useState, useRef } from 'react';
import { Search, ArrowRight, Shield, AlertCircle, X } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (code: string) => void;
  isLoading: boolean;
  hasError: boolean;
  onClearError: () => void;
}

const HERO_BG = 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771275684061_72ba4467.jpg';

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, isLoading, hasError, onClearError }) => {
  const [code, setCode] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() && !isLoading) {
      onSearch(code.trim());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase());
    if (hasError) onClearError();
  };

  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a2e]/95 via-[#0f1a2e]/90 to-[#0f1a2e]/98" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Shield Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 mb-6 sm:mb-8">
          <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37]" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

          Lawyer Identity
          <span className="block text-[#d4af37]">Verification Portal</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#8a9cc0] text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
          Enter the unique verification code to confirm the identity and credentials of a registered legal professional.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
          <div className={`relative flex items-center bg-white/[0.07] backdrop-blur-md rounded-2xl border transition-all duration-300 ${
            hasError 
              ? 'border-red-400/60 shadow-[0_0_30px_rgba(239,68,68,0.15)]' 
              : 'border-white/10 focus-within:border-[#d4af37]/50 focus-within:shadow-[0_0_30px_rgba(212,175,55,0.15)]'
          }`}>
            <div className="pl-4 sm:pl-5 flex-shrink-0">
              <Search className={`w-5 h-5 transition-colors ${hasError ? 'text-red-400' : 'text-[#8a9cc0]'}`} />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={handleChange}
              placeholder="Enter verification code..."
              className="flex-1 bg-transparent text-white placeholder-[#5a6f94] text-sm sm:text-base py-4 sm:py-5 px-3 sm:px-4 outline-none font-mono tracking-wider"
              disabled={isLoading}
              autoFocus
            />
            {code && (
              <button
                type="button"
                onClick={() => { setCode(''); onClearError(); inputRef.current?.focus(); }}
                className="p-2 mr-1 text-[#5a6f94] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              disabled={!code.trim() || isLoading}
              className="m-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#d4af37] to-[#e8c84a] text-[#0f1a2e] rounded-xl font-bold text-sm flex items-center gap-2 hover:from-[#e8c84a] hover:to-[#f0d060] transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97] shadow-lg shadow-[#d4af37]/20"
            >
              <span className="hidden sm:inline">Verify</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Error Message */}
          {hasError && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-400 animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm font-medium">
                No lawyer found with this verification code. Please check and try again.
              </p>
            </div>
          )}
        </form>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {[
            { icon: Shield, text: 'Secure Verification' },
            { icon: Search, text: 'Instant Results' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[#4a5f82]">
              <Icon className="w-3.5 h-3.5 text-[#d4af37]/60" />
              <span className="text-xs font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* Sample Code Hint */}
        <div className="mt-6">
          <p className="text-[#3a4f72] text-xs">
            Demo code: <button
              type="button"
              onClick={() => { setCode('56BAC56829'); onClearError(); }}
              className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors font-mono underline underline-offset-2 decoration-dotted"
            >
              56BAC56829
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
