import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Language, ActiveTab, Condition, SubstanceInfo, MedicationClass } from './types';
import { Header } from './components/Header';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CrisisModal } from './components/CrisisModal';
import { ScreenerModal } from './components/ScreenerModal';
import { ConditionDetailModal } from './components/ConditionDetailModal';
import { SubstanceDetailModal } from './components/SubstanceDetailModal';
import { MedicationDetailModal } from './components/MedicationDetailModal';

// Views
import { HomeView } from './views/HomeView';
import { ConditionsView } from './views/ConditionsView';
import { AddictionView } from './views/AddictionView';
import { MedicationsView } from './views/MedicationsView';
import { TreatmentsView } from './views/TreatmentsView';
import { MythsView } from './views/MythsView';
import { SymptomsView } from './views/SymptomsView';
import { CaregiversView } from './views/CaregiversView';
import { InteractiveView } from './views/InteractiveView';
import { EmergencyView } from './views/EmergencyView';
import { AboutView } from './views/AboutView';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('dr_raghav_lang');
      if (saved === 'hi' || saved === 'gu' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCrisisOpen, setIsCrisisOpen] = useState<boolean>(false);
  const [isScreenerOpen, setIsScreenerOpen] = useState<boolean>(false);

  // Selected items for detail modals
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [selectedSubstance, setSelectedSubstance] = useState<SubstanceInfo | null>(null);
  const [selectedMedication, setSelectedMedication] = useState<MedicationClass | null>(null);

  // Handle language switch
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('dr_raghav_lang', lang);
    } catch {
      // ignore
    }
  };

  // Handle tab switch
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#1c2430] selection:bg-teal-100 selection:text-teal-900">
      {/* Top Persistent Medical Disclaimer Banner */}
      <DisclaimerBanner currentLang={currentLang} />

      {/* Main Header & Navigation */}
      <Header
        currentLang={currentLang}
        activeTab={activeTab}
        onLanguageChange={handleLanguageChange}
        onTabChange={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCrisis={() => setIsCrisisOpen(true)}
      />

      {/* Main Body Content: Centered, spacious, calm max-width column */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {activeTab === 'home' && (
          <HomeView
            currentLang={currentLang}
            onTabChange={handleTabChange}
            onSelectCondition={(cond) => setSelectedCondition(cond)}
            onSelectSubstance={(sub) => setSelectedSubstance(sub)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenCrisis={() => setIsCrisisOpen(true)}
            onOpenScreener={() => setIsScreenerOpen(true)}
          />
        )}

        {activeTab === 'conditions' && (
          <ConditionsView
            currentLang={currentLang}
            onSelectCondition={(cond) => setSelectedCondition(cond)}
          />
        )}

        {activeTab === 'addiction' && (
          <AddictionView
            currentLang={currentLang}
            onSelectSubstance={(sub) => setSelectedSubstance(sub)}
            onOpenCrisis={() => setIsCrisisOpen(true)}
          />
        )}

        {activeTab === 'medications' && (
          <MedicationsView
            currentLang={currentLang}
            onSelectMedication={(med) => setSelectedMedication(med)}
          />
        )}

        {activeTab === 'treatments' && (
          <TreatmentsView currentLang={currentLang} />
        )}

        {activeTab === 'myths' && (
          <MythsView currentLang={currentLang} />
        )}

        {activeTab === 'symptoms' && (
          <SymptomsView currentLang={currentLang} />
        )}

        {activeTab === 'caregivers' && (
          <CaregiversView currentLang={currentLang} />
        )}

        {activeTab === 'interactive' && (
          <InteractiveView
            currentLang={currentLang}
            onOpenScreener={() => setIsScreenerOpen(true)}
            onOpenCrisis={() => setIsCrisisOpen(true)}
          />
        )}

        {activeTab === 'emergency' && (
          <EmergencyView currentLang={currentLang} />
        )}

        {activeTab === 'about' && (
          <AboutView currentLang={currentLang} />
        )}
      </main>

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentLang={currentLang}
        onSelectCondition={(item) => setSelectedCondition(item)}
        onSelectSubstance={(item) => setSelectedSubstance(item)}
        onSelectMedication={(item) => setSelectedMedication(item)}
        onNavigateTab={(tab) => handleTabChange(tab)}
      />

      <CrisisModal
        isOpen={isCrisisOpen}
        onClose={() => setIsCrisisOpen(false)}
        currentLang={currentLang}
      />

      <ScreenerModal
        isOpen={isScreenerOpen}
        onClose={() => setIsScreenerOpen(false)}
        currentLang={currentLang}
        onOpenCrisis={() => {
          setIsScreenerOpen(false);
          setIsCrisisOpen(true);
        }}
      />

      <ConditionDetailModal
        condition={selectedCondition}
        onClose={() => setSelectedCondition(null)}
        currentLang={currentLang}
        onOpenCrisis={() => {
          setSelectedCondition(null);
          setIsCrisisOpen(true);
        }}
      />

      <SubstanceDetailModal
        substance={selectedSubstance}
        onClose={() => setSelectedSubstance(null)}
        currentLang={currentLang}
      />

      <MedicationDetailModal
        medication={selectedMedication}
        onClose={() => setSelectedMedication(null)}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onTabChange={handleTabChange}
        onOpenCrisis={() => setIsCrisisOpen(true)}
      />

      {/* Floating Emergency Icon (Left Lower Corner) */}
      <button
        id="floating-emergency-icon"
        onClick={() => setIsCrisisOpen(true)}
        aria-label={
          currentLang === 'en'
            ? 'Emergency Crisis Support - Tele-MANAS 14416 (24x7)'
            : currentLang === 'hi'
            ? 'आपातकालीन संकट सहायता - टेली-मानस 14416 (24x7)'
            : 'ઇમરજન્સી સંકટ સહાય - ટેલી-માનસ ૧૪૪૧૬ (૨૪x૭)'
        }
        title={
          currentLang === 'en'
            ? 'Emergency Crisis Support (Tele-MANAS 14416 / 112)'
            : currentLang === 'hi'
            ? 'आपातकालीन संकट सहायता (टेली-मानस 14416 / 112)'
            : 'ઇમરજન્સી સંકટ સહાય (ટેલી-માનસ ૧૪૪૧૬ / ૧૧૨)'
        }
        className="fixed bottom-5 left-5 z-40 group flex items-center gap-2.5 bg-[#991b1b] hover:bg-[#7f1d1d] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-red-950/25 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200 cursor-pointer min-h-[48px] min-w-[48px]"
      >
        <span className="relative flex items-center justify-center">
          <Phone className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
          </span>
        </span>
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          {currentLang === 'en' ? 'Emergency 14416' : currentLang === 'hi' ? 'आपातकालीन 14416' : 'ઇમરજન્સી ૧૪૪૧૬'}
        </span>
      </button>
    </div>
  );
}
