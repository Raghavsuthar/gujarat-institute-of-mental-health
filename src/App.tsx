import React, { useState, useEffect, useMemo } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Phone } from 'lucide-react';
import {
  Language,
  ActiveTab,
  Condition,
  SubstanceInfo,
  MedicationClass,
} from './types';
import { Header } from './components/Header';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
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
import { ArticlesView } from './views/ArticlesView';
import { ResourcesView } from './views/ResourcesView';
import { OutreachView } from './views/OutreachView';
import { AboutView } from './views/AboutView';
import { AdminAnalyticsView } from './views/AdminAnalyticsView';
import { EducationalQAAssistant } from './components/EducationalQAAssistant';

// Data for deep linking lookups
import { conditionsData } from './data/conditions';
import { substancesData } from './data/substances';
import { medicationsData } from './data/medications';
import { recordPageView } from './utils/analytics';

const VALID_LANGS: Language[] = ['en', 'hi', 'gu'];

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('dr_raghav_lang');
    if (saved === 'hi' || saved === 'gu' || saved === 'en') return saved;
  } catch {
    // ignore
  }
  return 'en';
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current language from URL (e.g. /en/..., /hi/..., /gu/...)
  const pathParts = location.pathname.split('/').filter(Boolean);
  const urlLang = pathParts[0] as Language | undefined;
  const currentLang: Language = VALID_LANGS.includes(urlLang as Language)
    ? (urlLang as Language)
    : getInitialLanguage();

  // Save detected lang to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dr_raghav_lang', currentLang);
    } catch {
      // ignore
    }
  }, [currentLang]);

  // Record aggregate, privacy-first page view
  useEffect(() => {
    recordPageView(location.pathname, currentLang);
  }, [location.pathname, currentLang]);

  // Determine active tab from URL path
  const activeTab: ActiveTab = useMemo(() => {
    const section = pathParts[1] || 'home';
    if (section === 'conditions') return 'conditions';
    if (section === 'addiction' || section === 'substances') return 'addiction';
    if (section === 'medications') return 'medications';
    if (section === 'treatments') return 'treatments';
    if (section === 'symptoms') return 'symptoms';
    if (section === 'myths') return 'myths';
    if (section === 'caregivers') return 'caregivers';
    if (section === 'interactive') return 'interactive';
    if (section === 'emergency') return 'emergency';
    if (section === 'articles') return 'articles';
    if (section === 'resources') return 'resources';
    if (section === 'outreach') return 'outreach';
    if (section === 'about') return 'about';
    return 'home';
  }, [pathParts]);

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCrisisOpen, setIsCrisisOpen] = useState(false);
  const [isScreenerOpen, setIsScreenerOpen] = useState(false);

  // Deep linking modal items derived from route params
  const conditionSlug = pathParts[1] === 'conditions' && pathParts[2] ? pathParts[2] : null;
  const substanceSlug = pathParts[1] === 'substances' && pathParts[2] ? pathParts[2] : null;
  const medicationId = pathParts[1] === 'medications' && pathParts[2] ? pathParts[2] : null;

  const deepLinkedCondition = useMemo(() => {
    if (!conditionSlug) return null;
    return conditionsData.find(
      (c) => c.slug === conditionSlug || c.id === conditionSlug
    ) || null;
  }, [conditionSlug]);

  const deepLinkedSubstance = useMemo(() => {
    if (!substanceSlug) return null;
    return substancesData.find(
      (s) => s.slug === substanceSlug || s.id === substanceSlug
    ) || null;
  }, [substanceSlug]);

  const deepLinkedMedication = useMemo(() => {
    if (!medicationId) return null;
    return medicationsData.find((m) => m.id === medicationId) || null;
  }, [medicationId]);

  // Language switcher: replaces the current /:lang prefix while maintaining remaining path
  const handleLanguageChange = (newLang: Language) => {
    try {
      localStorage.setItem('dr_raghav_lang', newLang);
    } catch {
      // ignore
    }

    if (VALID_LANGS.includes(urlLang as Language)) {
      const restOfPath = pathParts.slice(1).join('/');
      const newPath = `/${newLang}${restOfPath ? `/${restOfPath}` : ''}`;
      navigate(newPath);
    } else {
      navigate(`/${newLang}`);
    }
  };

  // Tab navigation
  const handleTabChange = (tab: ActiveTab) => {
    if (tab === 'home') {
      navigate(`/${currentLang}`);
    } else {
      navigate(`/${currentLang}/${tab}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K
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
    <div className="min-h-screen flex flex-col bg-[#f6f8f7] text-[#1c2430] selection:bg-teal-100 selection:text-teal-900">
      {/* Offline Status Warning when disconnected */}
      <OfflineIndicator currentLang={currentLang} />

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

      {/* Main Body Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Routes>
          {/* Root redirect to language prefix */}
          <Route path="/" element={<Navigate to={`/${getInitialLanguage()}`} replace />} />

          {/* Language Root Routes */}
          <Route
            path="/:lang"
            element={
              <HomeView
                currentLang={currentLang}
                onTabChange={handleTabChange}
                onSelectCondition={(cond) => navigate(`/${currentLang}/conditions/${cond.slug}`)}
                onSelectSubstance={(sub) => navigate(`/${currentLang}/substances/${sub.slug || sub.id}`)}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
                onOpenScreener={() => setIsScreenerOpen(true)}
              />
            }
          />

          {/* Conditions & Deep-linked Condition */}
          <Route
            path="/:lang/conditions"
            element={
              <ConditionsView
                currentLang={currentLang}
                onSelectCondition={(cond) => navigate(`/${currentLang}/conditions/${cond.slug}`)}
              />
            }
          />
          <Route
            path="/:lang/conditions/:slug"
            element={
              <ConditionsView
                currentLang={currentLang}
                onSelectCondition={(cond) => navigate(`/${currentLang}/conditions/${cond.slug}`)}
              />
            }
          />

          {/* Addiction & Deep-linked Substance */}
          <Route
            path="/:lang/addiction"
            element={
              <AddictionView
                currentLang={currentLang}
                onSelectSubstance={(sub) => navigate(`/${currentLang}/substances/${sub.slug || sub.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />
          <Route
            path="/:lang/substances/:slug"
            element={
              <AddictionView
                currentLang={currentLang}
                onSelectSubstance={(sub) => navigate(`/${currentLang}/substances/${sub.slug || sub.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />

          {/* Medications & Deep-linked Medication */}
          <Route
            path="/:lang/medications"
            element={
              <MedicationsView
                currentLang={currentLang}
                onSelectMedication={(med) => navigate(`/${currentLang}/medications/${med.id}`)}
              />
            }
          />
          <Route
            path="/:lang/medications/:id"
            element={
              <MedicationsView
                currentLang={currentLang}
                onSelectMedication={(med) => navigate(`/${currentLang}/medications/${med.id}`)}
              />
            }
          />

          {/* Treatments */}
          <Route path="/:lang/treatments" element={<TreatmentsView currentLang={currentLang} />} />

          {/* Symptoms */}
          <Route path="/:lang/symptoms" element={<SymptomsView currentLang={currentLang} />} />

          {/* Myths */}
          <Route path="/:lang/myths" element={<MythsView currentLang={currentLang} />} />

          {/* Caregivers */}
          <Route path="/:lang/caregivers" element={<CaregiversView currentLang={currentLang} />} />

          {/* Interactive Screeners */}
          <Route
            path="/:lang/interactive"
            element={
              <InteractiveView
                currentLang={currentLang}
                onOpenScreener={() => setIsScreenerOpen(true)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />

          {/* Articles & Deep-linked Article */}
          <Route path="/:lang/articles" element={<ArticlesView currentLang={currentLang} />} />
          <Route path="/:lang/articles/:slug" element={<ArticlesView currentLang={currentLang} />} />

          {/* Resources & Helplines */}
          <Route path="/:lang/resources" element={<ResourcesView currentLang={currentLang} />} />

          {/* Outreach & Printable Flyers */}
          <Route path="/:lang/outreach" element={<OutreachView currentLang={currentLang} />} />

          {/* Emergency Helplines */}
          <Route path="/:lang/emergency" element={<EmergencyView currentLang={currentLang} />} />

          {/* About Dr. Raghav Suthar */}
          <Route path="/:lang/about" element={<AboutView currentLang={currentLang} />} />

          {/* Owner Analytics Portal (Password-protected, noindex) */}
          <Route path="/:lang/admin" element={<AdminAnalyticsView currentLang={currentLang} />} />
          <Route path="/admin" element={<Navigate to={`/${currentLang}/admin`} replace />} />

          {/* Fallback for un-prefixed or broken routes */}
          <Route path="*" element={<Navigate to={`/${getInitialLanguage()}`} replace />} />
        </Routes>
      </main>

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentLang={currentLang}
        onSelectCondition={(item) => navigate(`/${currentLang}/conditions/${item.slug}`)}
        onSelectSubstance={(item) => navigate(`/${currentLang}/substances/${item.slug || item.id}`)}
        onSelectMedication={(item) => navigate(`/${currentLang}/medications/${item.id}`)}
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

      {/* Bidirectionally URL-synced Condition Detail Modal */}
      <ConditionDetailModal
        condition={deepLinkedCondition}
        onClose={() => navigate(`/${currentLang}/conditions`)}
        currentLang={currentLang}
        onOpenCrisis={() => {
          navigate(`/${currentLang}/conditions`);
          setIsCrisisOpen(true);
        }}
      />

      {/* Bidirectionally URL-synced Substance Detail Modal */}
      <SubstanceDetailModal
        substance={deepLinkedSubstance}
        onClose={() => navigate(`/${currentLang}/addiction`)}
        currentLang={currentLang}
      />

      {/* Bidirectionally URL-synced Medication Detail Modal */}
      <MedicationDetailModal
        medication={deepLinkedMedication}
        onClose={() => navigate(`/${currentLang}/medications`)}
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

      {/* Educational Q&A Assistant (Strictly bounded, crisis short-circuiting) */}
      <EducationalQAAssistant
        currentLang={currentLang}
        onOpenCrisis={() => setIsCrisisOpen(true)}
      />
    </div>
  );
}
