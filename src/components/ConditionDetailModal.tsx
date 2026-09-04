import React, { useState } from 'react';
import { X, Activity, BookOpen, AlertTriangle, ChevronDown, ChevronUp, ShieldCheck, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-900/80 text-teal-300 border border-teal-700/60">
                {condition.category.toUpperCase()}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {condition.medicalTerms[currentLang]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {condition.name[currentLang]}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {t.common.lastReviewed}: {condition.lastReviewed} • {t.doctorName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs within Modal */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-teal-600 text-teal-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.conditions.overview} & {t.conditions.symptoms}
          </button>
          <button
            onClick={() => setActiveTab('causes')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'causes'
                ? 'border-teal-600 text-teal-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.conditions.causes} & {t.conditions.diagnosis}
          </button>
          <button
            onClick={() => setActiveTab('treatment')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'treatment'
                ? 'border-teal-600 text-teal-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.conditions.treatment}
          </button>
          <button
            onClick={() => setActiveTab('recovery')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'recovery'
                ? 'border-teal-600 text-teal-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.conditions.recovery} & {t.conditions.urgentSigns}
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'faqs'
                ? 'border-teal-600 text-teal-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.common.faqs} & {t.common.myths}
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 leading-relaxed text-sm">
          {/* TAB 1: OVERVIEW & SYMPTOMS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.conditions.overview}
                </h3>
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800">
                  {condition.overview[currentLang]}
                </p>
              </div>

              {/* Common Symptoms */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.conditions.symptoms}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {condition.commonSymptoms[currentLang].map((symptom, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-slate-200/80 bg-white shadow-xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Life Impact */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.conditions.impact}
                </h3>
                <p className="text-slate-700 text-sm">
                  {condition.dailyLifeImpact[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CAUSES & DIAGNOSIS */}
          {activeTab === 'causes' && (
            <div className="space-y-6">
              {/* Causes (Bio-Psycho-Social) */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.conditions.causes} (Bio-Psycho-Social Model)
                </h3>
                <p className="text-slate-700 text-sm bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                  {condition.causes[currentLang]}
                </p>
              </div>

              {/* Risk Factors */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Risk Factors
                </h3>
                <ul className="space-y-2">
                  {condition.riskFactors[currentLang].map((rf, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>{rf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Assessment */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  How a Psychiatrist Diagnoses (Clinical Evaluation)
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mb-3">
                  {condition.psychiatricAssessment[currentLang]}
                </p>
                <div className="text-xs text-slate-600 border-t border-slate-200 pt-2.5">
                  <strong>Differential Considerations:</strong> {condition.differentialConsiderations[currentLang]}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT PLAN */}
          {activeTab === 'treatment' && (
            <div className="space-y-5">
              <h3 className="text-base font-bold text-slate-900">
                {t.conditions.treatment}
              </h3>

              <div className="grid gap-3.5">
                {/* Psychotherapy */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                    Psychotherapy & Psychological Interventions
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {condition.treatment.psychotherapy[currentLang]}
                  </p>
                </div>

                {/* Medications */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1">
                    Pharmacotherapy & Medical Management
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {condition.treatment.medications[currentLang]}
                  </p>
                </div>

                {/* Lifestyle & Psychoeducation */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Lifestyle, Sleep & Psychoeducation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {condition.treatment.lifestyleSupport[currentLang]}
                  </p>
                </div>

                {/* Family & Social */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    Family & Social Support System
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {condition.treatment.familySocialInterventions[currentLang]}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong>Treatment Goals:</strong> {condition.treatmentGoals[currentLang]}
              </div>
            </div>
          )}

          {/* TAB 4: RECOVERY & WARNING SIGNS */}
          {activeTab === 'recovery' && (
            <div className="space-y-6">
              {/* Recovery Outlook */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.conditions.recovery}
                </h3>
                <p className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-slate-800 text-sm">
                  {condition.recoveryOutlook[currentLang]}
                </p>
              </div>

              {/* Relapse Prevention */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Relapse Prevention & Early Detection
                </h3>
                <p className="text-slate-700 text-sm">
                  {condition.relapsePrevention[currentLang]}
                </p>
              </div>

              {/* Urgent Warning Signs */}
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-sm mb-1.5">
                  <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{t.conditions.urgentSigns}</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                  {condition.urgentWarningSigns[currentLang]}
                </p>
                <div className="mt-3 pt-2 border-t border-rose-200 flex items-center gap-2 text-xs font-semibold text-rose-800">
                  <span>Immediate Crisis Help:</span>
                  <a href="tel:14416" className="underline hover:text-rose-950 font-bold">
                    Tele-MANAS: 14416
                  </a>
                  <span>|</span>
                  <a href="tel:112" className="underline hover:text-rose-950 font-bold">
                    Emergency: 112
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQS & MYTHS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              {/* Myths vs Facts */}
              {condition.mythsVsFacts.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    {t.common.myths}
                  </h3>
                  <div className="space-y-3">
                    {condition.mythsVsFacts.map((mf, i) => (
                      <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                        <div className="text-xs font-semibold text-rose-800">
                          <span className="font-bold uppercase tracking-wider text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-rose-100">
                            Myth
                          </span>
                          "{mf.myth[currentLang]}"
                        </div>
                        <div className="text-xs font-semibold text-emerald-800">
                          <span className="font-bold uppercase tracking-wider text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-emerald-100">
                            Fact
                          </span>
                          {mf.fact[currentLang]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Accordion */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {t.common.faqs}
                </h3>
                <div className="space-y-2">
                  {condition.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 bg-white overflow-hidden transition"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition cursor-pointer"
                        >
                          <span>{faq.question[currentLang]}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-2 leading-relaxed bg-slate-50/50">
                            {faq.answer[currentLang]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scientific References */}
              {condition.references.length > 0 && (
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {t.common.references}
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-500 font-mono">
                    {condition.references.map((ref, i) => (
                      <li key={i}>• {ref.citation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Contextual Medical Disclaimer */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              {t.disclaimer.banner}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            {condition.name[currentLang]} • {t.doctorName}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition cursor-pointer"
          >
            {currentLang === 'en' ? 'Close Guide' : currentLang === 'hi' ? 'मार्गदर्शिका बंद करें' : 'માર્ગદર્શિકા બંધ કરો'}
          </button>
        </div>
      </div>
    </div>
  );
};
