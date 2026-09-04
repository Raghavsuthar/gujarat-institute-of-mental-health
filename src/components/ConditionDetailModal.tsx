import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Condition, Language } from '../types';
import { translations } from '../data/translations';

interface ConditionDetailModalProps {
  condition: Condition | null;
  onClose: () => void;
  currentLang: Language;
}

export const ConditionDetailModal: React.FC<ConditionDetailModalProps> = ({
  condition,
  onClose,
  currentLang,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'causes' | 'treatment' | 'recovery' | 'faqs'>('overview');

  if (!condition) return null;
  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-white border-b border-stone-200 p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {condition.category.toUpperCase()}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {condition.medicalTerms[currentLang]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
              {condition.name[currentLang]}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {t.common.lastReviewed}: {condition.lastReviewed} • {t.doctorName}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs within Modal */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'overview'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.overview} & {t.conditions.symptoms}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'causes'}
            onClick={() => setActiveTab('causes')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'causes'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.causes} & {t.conditions.diagnosis}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'treatment'}
            onClick={() => setActiveTab('treatment')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'treatment'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.treatment}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'recovery'}
            onClick={() => setActiveTab('recovery')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'recovery'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.recovery} & {t.conditions.urgentSigns}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'faqs'}
            onClick={() => setActiveTab('faqs')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'faqs'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.common.faqs} & {t.common.myths}
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-stone-700 leading-relaxed text-sm">
          {/* TAB 1: OVERVIEW & SYMPTOMS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.overview}
                </h3>
                <p className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-800">
                  {condition.overview[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.symptoms}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {condition.commonSymptoms[currentLang].map((symptom, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.impact}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {condition.dailyLifeImpact[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CAUSES & DIAGNOSIS */}
          {activeTab === 'causes' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.causes} (Bio-Psycho-Social Model)
                </h3>
                <p className="text-stone-800 text-sm bg-stone-50 p-4 rounded-lg border border-stone-200">
                  {condition.causes[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  Risk Factors
                </h3>
                <ul className="space-y-2">
                  {condition.riskFactors[currentLang].map((rf, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                      <span>{rf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
                <h4 className="text-sm font-semibold text-[#1c2430]">
                  How a Psychiatrist Diagnoses (Clinical Evaluation)
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {condition.psychiatricAssessment[currentLang]}
                </p>
                <div className="text-xs text-stone-600 border-t border-stone-200 pt-2">
                  <strong className="text-stone-800">Differential Considerations:</strong> {condition.differentialConsiderations[currentLang]}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT PLAN */}
          {activeTab === 'treatment' && (
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-[#1c2430]">
                {t.conditions.treatment}
              </h3>

              <div className="grid gap-3.5">
                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Psychotherapy & Psychological Interventions
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {condition.treatment.psychotherapy[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Pharmacotherapy & Medical Management
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {condition.treatment.medications[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Lifestyle, Sleep & Psychoeducation
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {condition.treatment.lifestyleSupport[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Family & Social Support System
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {condition.treatment.familySocialInterventions[currentLang]}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700">
                <strong className="text-stone-900">Treatment Goals:</strong> {condition.treatmentGoals[currentLang]}
              </div>
            </div>
          )}

          {/* TAB 4: RECOVERY & WARNING SIGNS */}
          {activeTab === 'recovery' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.recovery}
                </h3>
                <p className="bg-[#f0fdfa] p-4 rounded-lg border border-[#ccfbf1] text-stone-800 text-sm leading-relaxed">
                  {condition.recoveryOutlook[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  Relapse Prevention & Early Detection
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {condition.relapsePrevention[currentLang]}
                </p>
              </div>

              <div className="p-4 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
                <div className="flex items-center gap-2 text-[#991b1b] font-semibold text-sm mb-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#991b1b] shrink-0" />
                  <span>{t.conditions.urgentSigns}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {condition.urgentWarningSigns[currentLang]}
                </p>
                <div className="mt-3 pt-2 border-t border-[#fecaca] flex items-center gap-2 text-xs font-semibold text-[#991b1b]">
                  <span>Immediate Crisis Help:</span>
                  <a href="tel:14416" className="underline font-bold">
                    Tele-MANAS: 14416
                  </a>
                  <span>|</span>
                  <a href="tel:112" className="underline font-bold">
                    Emergency: 112
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQS & MYTHS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              {condition.mythsVsFacts.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-[#1c2430] mb-3">
                    {t.common.myths}
                  </h3>
                  <div className="space-y-3">
                    {condition.mythsVsFacts.map((mf, i) => (
                      <div key={i} className="p-3.5 rounded-lg border border-stone-200 bg-stone-50 space-y-1.5">
                        <div className="text-xs font-semibold text-stone-700">
                          <span className="font-semibold uppercase tracking-wider text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">
                            Myth
                          </span>
                          "{mf.myth[currentLang]}"
                        </div>
                        <div className="text-xs font-medium text-stone-800">
                          <span className="font-semibold uppercase tracking-wider text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-[#ccfbf1] text-[#115e59]">
                            Fact
                          </span>
                          {mf.fact[currentLang]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-3">
                  {t.common.faqs}
                </h3>
                <div className="space-y-2">
                  {condition.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-lg border border-stone-200 bg-white overflow-hidden transition"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-[#1c2430] font-semibold text-xs sm:text-sm hover:bg-stone-50 transition cursor-pointer min-h-[44px]"
                        >
                          <span>{faq.question[currentLang]}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-2 leading-relaxed bg-stone-50">
                            {faq.answer[currentLang]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {condition.references.length > 0 && (
                <div className="pt-4 border-t border-stone-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    {t.common?.references || 'Scientific References'}
                  </h4>
                  <ul className="space-y-1 text-xs text-stone-500 font-mono">
                    {condition.references.map((ref, i) => (
                      <li key={i}>• {ref.citation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Contextual Medical Disclaimer */}
          <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700 leading-relaxed">
            <span>
              {t.disclaimer?.banner || t.disclaimer?.text || ''}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            {condition.name[currentLang]} • {t.doctorName}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition cursor-pointer min-h-[44px]"
          >
            {currentLang === 'en' ? 'Close Guide' : currentLang === 'hi' ? 'मार्गदर्शिका बंद करें' : 'માર્ગદર્શિકા બંધ કરો'}
          </button>
        </div>
      </div>
    </div>
  );
};

