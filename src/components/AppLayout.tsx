import React, { useState, useCallback, useRef } from 'react';
import Header from './lawyer/Header';
import DisclaimerBanner from './lawyer/DisclaimerBanner';
import SearchSection from './lawyer/SearchSection';
import LoadingSpinner from './lawyer/LoadingSpinner';
import ProfileCard from './lawyer/ProfileCard';
import FeaturesSection from './lawyer/FeaturesSection';
import HowItWorks from './lawyer/HowItWorks';
import StatsSection from './lawyer/StatsSection';
import Footer from './lawyer/Footer';
import { findLawyerByCode, Lawyer } from './lawyer/lawyerData';

type ViewState = 'search' | 'loading' | 'profile' | 'error';

const AppLayout: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('search');
  const [hasError, setHasError] = useState(false);
  const [foundLawyer, setFoundLawyer] = useState<Lawyer | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback((code: string) => {
    setHasError(false);
    const lawyer = findLawyerByCode(code);

    if (lawyer) {
      setViewState('loading');
      setTimeout(() => {
        setFoundLawyer(lawyer);
        setViewState('profile');
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }, 2500);
    } else {
      setHasError(true);
      setViewState('search');
    }
  }, []);

  const handleReset = useCallback(() => {
    setViewState('search');
    setHasError(false);
    setFoundLawyer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleClearError = useCallback(() => {
    setHasError(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col">
      <DisclaimerBanner />
      <Header />
      <main className="flex-1">
        {viewState !== 'profile' && (
          <SearchSection
            onSearch={handleSearch}
            isLoading={viewState === 'loading'}
            hasError={hasError}
            onClearError={handleClearError}
          />
        )}
        {viewState === 'loading' && (
          <section className="bg-[#0f1a2e] py-4 pb-16">
            <LoadingSpinner />
          </section>
        )}
        {viewState === 'profile' && foundLawyer && (
          <section ref={resultsRef} className="bg-gradient-to-b from-[#0f1a2e] to-[#162240] py-12 sm:py-16 px-4">
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <p className="text-[#8a9cc0] text-sm mb-2">Verification Result</p>
              <h2 className="text-white text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Lawyer Profile Found
              </h2>
            </div>
            <ProfileCard lawyer={foundLawyer} onReset={handleReset} />
          </section>
        )}
        {viewState === 'search' && (
          <>
            <StatsSection />
            <HowItWorks />
            <FeaturesSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
