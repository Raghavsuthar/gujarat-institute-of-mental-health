import React, { useState, useMemo, useEffect } from 'react';
import { Search, Check } from 'lucide-react';
import { Language, Condition, ConditionCategory } from '../types';
import { conditionsData } from '../data/conditions';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { CategoryIllustration } from '../components/visuals';
import { CategoryBadge } from '../components/CategoryBadge';
import { getCategoryTheme } from '../data/categoryThemes';

interface ConditionsViewProps {
  currentLang: Language;
  onSelectCondition: (item: Condition) => void;
}

export const ConditionsView: React.FC<ConditionsViewProps> = ({
  currentLang,
  onSelectCondition,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Psychiatric Conditions Educational Library' : currentLang === 'hi' ? 'मानसिक विकार शैक्षणिक लाइब्रेरी' : 'માનસિક વિકારો વિશે શૈક્ષણિક માહિતી',
      description: currentLang === 'en'
        ? 'Clinical overviews of depression, anxiety, bipolar disorder, OCD, schizophrenia, PTSD, and geriatric psychiatry in English, Hindi, and Gujarati.'
        : currentLang === 'hi'
        ? 'डिप्रेशन, एंग्जायटी, ओसीडी, सिज़ोफ्रेनिया और बाइपोलर डिसऑर्डर पर वैज्ञानिक जानकारी।'
        : 'ડિપ્રેશન, ચિંતા, બાયપોલર, ઓસીડી અને સિઝોફ્રેનિયા વિશે વિગતવાર તબીબી સમજ.',
      path: 'conditions',
      lang: currentLang,
    });
  }, [currentLang]);

  const categories = [
    { id: 'all', label: currentLang === 'en' ? 'All Conditions' : currentLang === 'hi' ? 'सभी विषय' : 'બધી બીમારીઓ' },
    { id: 'mood', label: currentLang === 'en' ? 'Mood Disorders' : currentLang === 'hi' ? 'मूड विकार' : 'મૂડ વિકાર' },
    { id: 'anxiety', label: currentLang === 'en' ? 'Anxiety & Panic' : currentLang === 'hi' ? 'चिंता व घबराहट' : 'ચિંતા અને ગભરાટ' },
    { id: 'ocd', label: 'OCD' },
    { id: 'psychotic', label: currentLang === 'en' ? 'Schizophrenia & Psychosis' : currentLang === 'hi' ? 'सिज़ोफ्रेनिया' : 'સિઝોફ્રેનિયા' },
    { id: 'trauma', label: 'PTSD / Trauma' },
    { id: 'geriatric', label: currentLang === 'en' ? 'Geriatric Psychiatry' : currentLang === 'hi' ? 'बुजुर्गों का स्वास्थ्य' : 'વૃદ્ધાવસ્થા' },
  ];

  const filteredConditions = useMemo(() => {
    return conditionsData.filter((c) => {
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const text = `${c.name.en} ${c.name.hi} ${c.name.gu} ${c.medicalTerms.en} ${c.medicalTerms.hi} ${c.medicalTerms.gu} ${c.overview[currentLang]}`.toLowerCase();
      return matchesCategory && text.includes(q);
    });
  }, [selectedCategory, searchQuery, currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-teal-50 text-[#0d5d56] border border-teal-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#115e59]" aria-hidden="true" />
            {currentLang === 'en' ? 'Clinical Educational Library' : currentLang === 'hi' ? 'नैदानिक शैक्षणिक लाइब्रेरी' : 'શૈક્ષણિક માર્ગદર્શિકા'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.conditions}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Evidence-based psychiatric educational guides describing symptoms, causes, neurobiology, assessment methods, and multidisciplinary treatment approaches.'
            : currentLang === 'hi'
            ? 'मानसिक विकारों के लक्षण, जैविक कारण, मनोचिकित्सकीय जांच और वैज्ञानिक उपचार पद्धतियों का विस्तृत शैक्षणिक विवरण।'
            : 'માનસિક વિકૃતિઓના લક્ષણો, જૈવિક કારણો, તબીબી તપાસ અને વૈજ્ઞાનિક સારવાર પદ્ધતિઓની વિગતવાર શૈક્ષણિક માહિતી.'}
        </p>
      </div>

      {/* Dynamic Category Visual Education Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-white">
        <CategoryIllustration
          category={selectedCategory === 'all' ? 'mood' : (selectedCategory as ConditionCategory)}
          className="w-full h-36 sm:h-44"
          ariaLabel={
            currentLang === 'en'
              ? `Educational clinical illustration representing ${selectedCategory === 'all' ? 'mental health and emotional balance' : selectedCategory}`
              : currentLang === 'hi'
              ? 'मानसिक स्वास्थ्य और भावनात्मक संतुलन का शैक्षिक चित्रण'
              : 'માનસિક સ્વાસ્થ્ય અને ભાવનાત્મક સંતુલનનું શૈક્ષણિક ચિત્ર'
          }
        />
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3">
        {/* Category filter pills - accessible min 44px */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Category filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer min-h-[44px] flex items-center ${
                selectedCategory === cat.id
                  ? 'bg-[#115e59] text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLang === 'en' ? 'Filter conditions...' : currentLang === 'hi' ? 'बीमारियां खोजें...' : 'શોધો...'}
            className="w-full pl-10 pr-3 py-2.5 rounded-md border border-stone-300 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-[#115e59] min-h-[44px]"
          />
        </div>
      </div>

      {/* Conditions Grid */}
      {filteredConditions.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-xl border border-stone-200 text-stone-600">
          <p className="font-semibold text-stone-800">{t.search.noResults}</p>
          <p className="text-xs mt-1">Try clearing your search query or choosing another category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredConditions.map((cond) => {
            const theme = getCategoryTheme(cond.category);
            return (
              <div
                key={cond.id}
                onClick={() => onSelectCondition(cond)}
                style={{ borderTopColor: theme.hex.accent, borderTopWidth: '3px' }}
                className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <CategoryBadge category={cond.category} currentLang={currentLang} size="sm" />
                        <span className="font-mono text-[11px] text-stone-500">
                          {cond.medicalTerms[currentLang]}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430]">
                        {cond.name[currentLang]}
                      </h2>
                    </div>
                    {/* Small category illustration accent */}
                    <div className="w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-lg overflow-hidden border border-stone-200/80 bg-stone-50">
                      <CategoryIllustration
                        category={cond.category}
                        className="w-full h-full object-cover"
                        ariaLabel=""
                      />
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {cond.overview[currentLang]}
                  </p>

                  {/* Common Symptoms preview */}
                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                    <span className="text-xs font-semibold text-stone-700 block">
                      {t.conditions.symptoms}:
                    </span>
                    <div className="space-y-1.5">
                      {(cond.commonSymptoms[currentLang] || cond.commonSymptoms.en || []).slice(0, 3).map((symp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#115e59] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{symp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59] min-h-[44px]">
                  <span>{currentLang === 'en' ? 'Open Clinical Guide' : currentLang === 'hi' ? 'पूरी मार्गदर्शिका पढ़ें' : 'સંપૂર્ણ માહિતી વાંચો'}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

