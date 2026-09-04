import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, AlertCircle, Pill, Activity, HelpCircle, HeartPulse, ArrowRight } from 'lucide-react';
import { Language, Condition, SubstanceInfo, MedicationClass, TherapyModality, MythFact, SymptomEducation } from '../types';
import { conditionsData } from '../data/conditions';
import { substancesData } from '../data/substances';
import { medicationsData } from '../data/medications';
import { treatmentsData } from '../data/treatments';
import { mythsData } from '../data/myths';
import { symptomsData } from '../data/symptoms';
import { translations } from '../data/translations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectCondition: (item: Condition) => void;
  onSelectSubstance: (item: SubstanceInfo) => void;
  onSelectMedication: (item: MedicationClass) => void;
  onSelectTherapy: (item: TherapyModality) => void;
  onSelectSymptom: (item: SymptomEducation) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectCondition,
  onSelectSubstance,
  onSelectMedication,
  onSelectTherapy,
  onSelectSymptom,
}) => {
  const [query, setQuery] = useState('');
  const t = translations[currentLang];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matched: Array<{
      id: string;
      type: 'condition' | 'substance' | 'medication' | 'therapy' | 'myth' | 'symptom';
      title: string;
      snippet: string;
      rawItem: any;
    }> = [];

    // Search Conditions
    conditionsData.forEach((c) => {
      const title = c.name[currentLang] || c.name.en;
      const terms = c.medicalTerms[currentLang] || '';
      const text = `${c.name.en} ${c.name.hi} ${c.name.gu} ${c.medicalTerms.en} ${c.medicalTerms.hi} ${c.medicalTerms.gu} ${c.overview[currentLang]}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `c-${c.id}`,
          type: 'condition',
          title: `${title} (${terms})`,
          snippet: c.overview[currentLang].slice(0, 140) + '...',
          rawItem: c,
        });
      }
    });

    // Search Substances
    substancesData.forEach((s) => {
      const title = s.name[currentLang] || s.name.en;
      const terms = s.medicalTerms[currentLang] || '';
      const text = `${s.name.en} ${s.name.hi} ${s.name.gu} ${s.medicalTerms.en} ${s.medicalTerms.hi} ${s.medicalTerms.gu} ${s.whatIsIt[currentLang]}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `s-${s.id}`,
          type: 'substance',
          title: `${title} (${terms})`,
          snippet: s.whatIsIt[currentLang].slice(0, 140) + '...',
          rawItem: s,
        });
      }
    });

    // Search Medications
    medicationsData.forEach((m) => {
      const title = m.name[currentLang] || m.name.en;
      const examples = m.commonExamples.join(', ');
      const text = `${m.name.en} ${m.name.hi} ${m.name.gu} ${examples} ${m.indications[currentLang]}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `m-${m.id}`,
          type: 'medication',
          title: `${title} (${examples})`,
          snippet: m.indications[currentLang].slice(0, 140) + '...',
          rawItem: m,
        });
      }
    });

    // Search Therapies
    treatmentsData.forEach((th) => {
      const title = th.name[currentLang] || th.name.en;
      const text = `${th.name.en} ${th.name.hi} ${th.name.gu} ${th.shortName} ${th.plainSummary[currentLang]}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `th-${th.id}`,
          type: 'therapy',
          title: `${title} (${th.shortName})`,
          snippet: th.plainSummary[currentLang].slice(0, 140) + '...',
          rawItem: th,
        });
      }
    });

    // Search Symptoms
    symptomsData.forEach((sym) => {
      const title = sym.symptomName[currentLang] || sym.symptomName.en;
      const text = `${sym.symptomName.en} ${sym.symptomName.hi} ${sym.symptomName.gu} ${sym.plainDescription[currentLang]}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `sym-${sym.id}`,
          type: 'symptom',
          title: title,
          snippet: sym.plainDescription[currentLang].slice(0, 140) + '...',
          rawItem: sym,
        });
      }
    });

    return matched;
  }, [query, currentLang]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-16 sm:pt-24 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Header */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-teal-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search.placeholder}
            autoFocus
            className="w-full text-base sm:text-lg outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-2 divide-y divide-slate-100">
          {!query && (
            <div className="py-8 text-center text-slate-500 text-sm">
              <p className="font-medium text-slate-700">
                {currentLang === 'en'
                  ? 'Search across conditions, medications, addiction, therapies & symptoms'
                  : currentLang === 'hi'
                  ? 'बीमारियों, दवाओं, नशा मुक्ति, थेरेपी और लक्षणों को खोजें'
                  : 'બીમારીઓ, દવાઓ, વ્યસન મુક્તિ અને લક્ષણો શોધો'}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {currentLang === 'en'
                  ? 'Example: "Depression", "CBT", "Alcohol", "Sleep", "SSRIs"'
                  : currentLang === 'hi'
                  ? 'उदाहरण: "डिप्रेशन", "चिंता", "शराब", "नींद", "CBT"'
                  : 'ઉદાહરણ: "ડિપ્રેશન", "ચિંતા", "દારૂ", "ઊંઘ", "CBT"'}
              </p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-10 text-center text-slate-500">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="font-semibold text-slate-700">{t.search.noResults}</p>
              <p className="text-xs text-slate-400 mt-1">
                {currentLang === 'en'
                  ? 'Try searching with English, Hindi, or Gujarati terms'
                  : currentLang === 'hi'
                  ? 'अंग्रेजी, हिन्दी या गुजराती शब्दों में खोजें'
                  : 'અંગ્રેજી, હિન્દી કે ગુજરાતી શબ્દો વડે શોધો'}
              </p>
            </div>
          )}

          {results.map((res) => {
            let Icon = BookOpen;
            let typeLabel = 'Topic';
            let badgeBg = 'bg-slate-100 text-slate-700';

            if (res.type === 'condition') {
              Icon = Activity;
              typeLabel = t.nav.conditions;
              badgeBg = 'bg-teal-50 text-teal-700 border-teal-200';
            } else if (res.type === 'substance') {
              Icon = AlertCircle;
              typeLabel = t.nav.addiction;
              badgeBg = 'bg-amber-50 text-amber-800 border-amber-200';
            } else if (res.type === 'medication') {
              Icon = Pill;
              typeLabel = t.nav.medications;
              badgeBg = 'bg-indigo-50 text-indigo-700 border-indigo-200';
            } else if (res.type === 'therapy') {
              Icon = HeartPulse;
              typeLabel = t.nav.treatments;
              badgeBg = 'bg-emerald-50 text-emerald-700 border-emerald-200';
            } else if (res.type === 'symptom') {
              Icon = HelpCircle;
              typeLabel = t.nav.symptoms;
              badgeBg = 'bg-purple-50 text-purple-700 border-purple-200';
            }

            return (
              <div
                key={res.id}
                onClick={() => {
                  if (res.type === 'condition') onSelectCondition(res.rawItem);
                  if (res.type === 'substance') onSelectSubstance(res.rawItem);
                  if (res.type === 'medication') onSelectMedication(res.rawItem);
                  if (res.type === 'therapy') onSelectTherapy(res.rawItem);
                  if (res.type === 'symptom') onSelectSymptom(res.rawItem);
                  onClose();
                }}
                className="pt-2 pb-2 px-3 hover:bg-slate-50 rounded-xl transition cursor-pointer group flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-teal-100 text-slate-600 group-hover:text-teal-700 transition mt-0.5 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded border ${badgeBg}`}>
                        {typeLabel}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition">
                        {res.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 shrink-0 mt-2 transition" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
