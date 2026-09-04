import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Check } from 'lucide-react';
import { Language, Condition } from '../types';
import { conditionsData } from '../data/conditions';
import { translations } from '../data/translations';

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
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Clinical Educational Library' : currentLang === 'hi' ? 'नैदानिक शैक्षणिक पुस्तकालय' : 'શૈક્ષણિક માર્ગદર્શિકા'}
        </span>
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
          {filteredConditions.map((cond) => (
            <div
              key={cond.id}
              onClick={() => onSelectCondition(cond)}
              className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-medium uppercase tracking-wider">
                    {cond.category}
                  </span>
                  <span className="font-mono text-[11px]">
                    {cond.medicalTerms[currentLang]}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430]">
                  {cond.name[currentLang]}
                </h2>

                <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {cond.overview[currentLang]}
                </p>

                {/* Common Symptoms preview */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                    {t.conditions.symptoms}:
                  </span>
                  <div className="space-y-1.5">
                    {cond.commonSymptoms[currentLang].slice(0, 3).map((symp, i) => (
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
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

