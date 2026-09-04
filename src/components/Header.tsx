import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Search, Globe, Menu, X, HeartHandshake } from 'lucide-react';
import { Language, ActiveTab } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenSearch: () => void;
  onOpenCrisis: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenCrisis,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = translations[currentLang];

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'conditions', label: t.nav.conditions },
    { id: 'addiction', label: t.nav.addiction },
    { id: 'medications', label: t.nav.medications },
    { id: 'treatments', label: t.nav.treatments },
    { id: 'symptoms', label: t.nav.symptoms },
    { id: 'myths', label: t.nav.myths },
    { id: 'caregivers', label: t.nav.caregivers },
    { id: 'interactive', label: t.nav.interactive },
    { id: 'emergency', label: t.nav.emergency },
    { id: 'about', label: t.nav.about },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-slate-100 shadow-md">
      {/* Top Urgent Crisis Helpline Ticker */}
      <div className="bg-rose-900/90 border-b border-rose-700/50 px-4 py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-rose-100">
            <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 animate-pulse" />
            <span className="font-semibold">{t.emergency.bannerTitle}:</span>
            <span>{t.emergency.bannerSubtitle}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:14416"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-700 hover:bg-rose-600 text-white font-bold transition text-xs shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Tele-MANAS: 14416</span>
            </a>
            <button
              onClick={onOpenCrisis}
              className="underline text-rose-200 hover:text-white text-xs font-medium cursor-pointer"
            >
              {currentLang === 'en' ? 'Crisis Info & 112' : currentLang === 'hi' ? 'आपातकालीन सहायता व 112' : 'ઇમરજન્સી સહાય અને ૧૧૨'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Controls Header */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-inner group-hover:bg-teal-500 transition">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-teal-200 transition">
                {t.doctorName}
              </h1>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-teal-900/80 text-teal-300 border border-teal-700/60">
                MBBS, MD
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium line-clamp-1">
              {t.subTitle}
            </p>
          </div>
        </button>

        {/* Action Controls: Search, Language Switcher, Emergency trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm border border-slate-700 transition cursor-pointer"
            title={t.search.placeholder}
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline text-xs text-slate-400">
              {currentLang === 'en' ? 'Search topics...' : currentLang === 'hi' ? 'खोजें...' : 'શોધો...'}
            </span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-900 text-slate-400 rounded border border-slate-700">
              /
            </kbd>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700">
            <Globe className="w-3.5 h-3.5 text-teal-400 ml-1.5 mr-1 hidden sm:block" />
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-teal-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition cursor-pointer ${
                currentLang === 'hi'
                  ? 'bg-teal-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => onLanguageChange('gu')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition cursor-pointer ${
                currentLang === 'gu'
                  ? 'bg-teal-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ગુજરાતી
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Secondary Navigation Bar */}
      <nav className="hidden lg:block bg-slate-800/90 border-t border-slate-700/80 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-1 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-teal-600 text-white font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition cursor-pointer ${
                  isActive
                    ? 'bg-teal-600 text-white font-semibold'
                    : 'text-slate-200 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
