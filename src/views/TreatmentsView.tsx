import React, { useState } from 'react';
import { Language, TherapyModality } from '../types';
import { treatmentsData } from '../data/treatments';
import { translations } from '../data/translations';

interface TreatmentsViewProps {
  currentLang: Language;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({ currentLang }) => {
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyModality | null>(treatmentsData[0]);
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Evidence-Based Psychotherapy' : currentLang === 'hi' ? 'वैज्ञानिक साइकोथेरेपी' : 'વૈજ્ઞાનિક સાયકોથેરાપી'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.treatments}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Evidence-based psychotherapies are structured, clinically validated interventions designed to restructure distorted cognition, extinguish conditioned fear responses, and build emotional resilience.'
            : currentLang === 'hi'
            ? 'वैज्ञानिक साइकोथेरेपी केवल बातचीत नहीं है; यह मस्तिष्क के सोचने के तरीकों को बदलने और मानसिक लचीलापन विकसित करने की प्रमाणित चिकित्सा है।'
            : 'સાયકોથેરાપી માત્ર વાતચીત નથી પરંતુ મગજના નકારાત્મક વિચારો બદલવાની અને મનોબળ મજબૂત કરવાની વૈજ્ઞાનિક સારવાર છે.'}
        </p>
      </div>

      {/* Therapy Modalities Selector & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Modality List */}
        <div className="space-y-2.5 lg:col-span-1">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
            {currentLang === 'en' ? 'Therapeutic Modalities' : currentLang === 'hi' ? 'थेरेपी के प्रकार' : 'થેરાપીના પ્રકારો'}
          </h2>
          {treatmentsData.map((th) => {
            const isSelected = selectedTherapy?.id === th.id;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => setSelectedTherapy(th)}
                className={`w-full text-left p-4 rounded-xl border transition cursor-pointer min-h-[44px] ${
                  isSelected
                    ? 'border-[#115e59] bg-white ring-1 ring-[#115e59]'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {th.shortName}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-[#1c2430] mt-1">
                  {th.name[currentLang]}
                </h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                  {th.plainSummary[currentLang]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Therapy In-Depth Display */}
        {selectedTherapy && (
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white border border-stone-200 rounded-xl space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#115e59]">
                {selectedTherapy.shortName}
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] mt-1">
                {selectedTherapy.name[currentLang]}
              </h2>
              <p className="text-sm text-stone-700 mt-3 leading-relaxed bg-stone-50 p-4 rounded-lg border border-stone-200">
                {selectedTherapy.plainSummary[currentLang]}
              </p>
            </div>

            {/* How It Works */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                How It Works (Mechanism & Principles)
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedTherapy.howItWorks[currentLang]}
              </p>
            </div>

            {/* Conditions Used For */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Conditions Indicated For
              </h3>
              <p className="text-sm text-stone-800 bg-stone-50 p-3.5 rounded-lg border border-stone-200 font-medium">
                {selectedTherapy.conditionsUsedFor[currentLang]}
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                What to Expect During Sessions
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedTherapy.whatToExpect[currentLang]}
              </p>
            </div>

            {/* Common Misconceptions */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-700">
              <strong className="text-[#1c2430]">Medical Clarification:</strong> {selectedTherapy.misconceptions[currentLang]}
            </div>

            <div className="text-xs text-stone-400 font-mono pt-2 border-t border-stone-100">
              Last clinical review: {selectedTherapy.lastReviewed} • Dr. Raghav Suthar
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

