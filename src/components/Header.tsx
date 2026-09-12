import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Language, ActiveTab } from '../types';
import { translations, siteMetadata } from '../data/translations';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenSearch: () => void;
  onOpenCrisis?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenSearch,
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
    { id: 'articles', label: t.nav.articles },
    { id: 'resources', label: t.nav.resources },
    { id: 'emergency', label: t.nav.emergency },
    { id: 'outreach', label: t.nav.outreach },
    { id: 'about', label: t.nav.about },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] border-b border-stone-200 text-[#1c2430]">
      {/* Visual Identity Fine Top Accent: Teal to Marigold to Plum */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#115e59] via-[#b86b26] to-[#5e4a72]" aria-hidden="true" />

      {/* Main Brand & Controls Header */}
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Brand identity: Clean typography, no heavy visual noise */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none cursor-pointer py-1"
        >
          <div className="flex items-baseline gap-2">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
              {t.doctorName}
            </h1>
            <span className="text-xs text-stone-500 font-medium">
              MBBS, MD (Psychiatry)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            {siteMetadata.tagline[currentLang]}
          </p>
        </button>

        {/* Action Controls: Search, PWA Install, Language Switcher, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button: 44px tap target */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm border border-stone-200 transition cursor-pointer min-h-[44px]"
            title={t.search.placeholder}
            aria-label={t.search.placeholder}
          >
            <Search className="w-4 h-4 text-stone-500" />
            <span className="hidden sm:inline text-xs text-stone-600">
              {currentLang === 'en' ? 'Search topics' : currentLang === 'hi' ? 'खोजें...' : 'શોધો...'}
            </span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white text-stone-500 rounded border border-stone-200">
              /
            </kbd>
          </button>

          {/* PWA Install Button */}
          <PWAInstallButton currentLang={currentLang} variant="button" />

          {/* Language Switcher: 44px min tap targets */}
          <div className="flex items-center bg-stone-100 p-0.5 rounded-md border border-stone-200" role="group" aria-label="Language selection">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-2 text-xs font-semibold rounded transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                currentLang === 'en'
                  ? 'bg-[#115e59] text-white'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-3 py-2 text-xs font-semibold rounded transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                currentLang === 'hi'
                  ? 'bg-[#115e59] text-white'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => onLanguageChange('gu')}
              className={`px-3 py-2 text-xs font-semibold rounded transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                currentLang === 'gu'
                  ? 'bg-[#115e59] text-white'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              ગુજરાતી
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Bar: Quiet, horizontal, clear text */}
      <nav className="hidden lg:block border-t border-stone-200 bg-[#f6f8f7] px-4" aria-label="Primary Navigation">
        <div className="max-w-4xl mx-auto flex items-center gap-1 overflow-x-auto py-1 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2.5 rounded-md transition whitespace-nowrap cursor-pointer min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-[#115e59] font-semibold bg-teal-50/70 border-b-2 border-[#115e59]'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu: Large 48px tap targets for elderly accessibility */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-3 space-y-1" role="menu">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition cursor-pointer min-h-[48px] flex items-center ${
                  isActive
                    ? 'bg-teal-50 text-[#115e59] font-semibold border-l-4 border-[#115e59]'
                    : 'text-stone-800 hover:bg-stone-50'
                }`}
                role="menuitem"
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

