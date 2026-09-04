import React, { useState } from 'react';
import { HeartPulse, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Activity } from 'lucide-react';
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
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Evidence-Based Psychotherapy' : currentLang === 'hi' ? 'वैज्ञानिक साइकोथेरेपी' : 'વૈજ્ઞાનિક સાયકોથેરાપી'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.treatments}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Evidence-based psychotherapies are structured, clinically validated interventions designed to restructure distorted cognition, extinguish conditioned fear responses, and build emotional resilience.'
            : currentLang === 'hi'
            ? 'वैज्ञानिक साइकोथेरेपी केवल बातचीत नहीं है; यह मस्तिष्क के सोचने के तरीकों को बदलने और मानसिक लचीलापन विकसित करने की प्रमाणित चिकित्सा है।'
            : 'સાયકોથેરાપી માત્ર વાતચીત નથી પરંતુ મગજના નકારાત્મક વિચારો બદલવાની અને મનોબળ મજબૂત કરવાની વૈજ્ઞાનિક સારવાર છે.'}
        </p>
      </div>

      {/* Therapy Modalities Selector & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Modality List */}
        <div className="space-y-3 lg:col-span-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            {currentLang === 'en' ? 'Therapeutic Modalities' : currentLang === 'hi' ? 'थेरेपी के प्रकार' : 'થેરાપીના પ્રકારો'}
          </h2>
          {treatmentsData.map((th) => {
            const isSelected = selectedTherapy?.id === th.id;
            return (
              <div
                key={th.id}
                onClick={() => setSelectedTherapy(th)}
                className={`p-4 rounded-xl border transition cursor-pointer ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {th.shortName}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 mt-1.5">
                  {th.name[currentLang]}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {th.plainSummary[currentLang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Therapy In-Depth Display */}
        {selectedTherapy && (
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                {selectedTherapy.shortName}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                {selectedTherapy.name[currentLang]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {selectedTherapy.plainSummary[currentLang]}
              </p>
            </div>

            {/* How It Works */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                How It Works (Mechanism & Cognitive Principles)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedTherapy.howItWorks[currentLang]}
              </p>
            </div>

            {/* Conditions Used For */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Conditions It Is Indicated For
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 font-medium">
                {selectedTherapy.conditionsUsedFor[currentLang]}
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                What to Expect During Sessions
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedTherapy.whatToExpect[currentLang]}
              </p>
            </div>

            {/* Common Misconceptions */}
            <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-700">
              <strong>Medical Clarification:</strong> {selectedTherapy.misconceptions[currentLang]}
            </div>

            <div className="text-xs text-slate-400 font-mono pt-2 border-t border-slate-100">
              Last clinical review: {selectedTherapy.lastReviewed} • Dr. Raghav Suthar
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
