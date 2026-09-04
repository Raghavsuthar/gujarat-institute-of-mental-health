import React, { useState } from 'react';
import { X, AlertTriangle, ShieldAlert, CheckCircle2, ChevronDown, ChevronUp, Pill, HeartPulse, HelpCircle, ArrowRight } from 'lucide-react';
import { SubstanceInfo, Language } from '../types';
import { translations } from '../data/translations';

interface SubstanceDetailModalProps {
  substance: SubstanceInfo | null;
  onClose: () => void;
  currentLang: Language;
}

export const SubstanceDetailModal: React.FC<SubstanceDetailModalProps> = ({
  substance,
  onClose,
  currentLang,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'neuro' | 'signs' | 'treatment' | 'overdose' | 'faqs'>('neuro');

  if (!substance) return null;
  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-900/80 text-amber-300 border border-amber-700/60">
                DE-ADDICTION & SUBSTANCE EDUCATION
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {substance.medicalTerms[currentLang]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {substance.name[currentLang]}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {t.common.lastReviewed}: {substance.lastReviewed} • {t.doctorName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('neuro')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'neuro'
                ? 'border-amber-600 text-amber-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {currentLang === 'en' ? 'What It Is & Neurobiology' : currentLang === 'hi' ? 'परिचय व न्यूरोबायोलॉजी' : 'પરિચય અને ન્યુરોબાયોલોજી'}
          </button>
          <button
            onClick={() => setActiveTab('signs')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'signs'
                ? 'border-amber-600 text-amber-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {currentLang === 'en' ? 'Signs, Dependence & Withdrawal' : currentLang === 'hi' ? 'लक्षण, निर्भरता व विड्रॉल' : 'લક્ષણો, નિર્ભરતા અને વિડ્રોઅલ'}
          </button>
          <button
            onClick={() => setActiveTab('treatment')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'treatment'
                ? 'border-amber-600 text-amber-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.addiction.treatment} & Harm Reduction
          </button>
          <button
            onClick={() => setActiveTab('overdose')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'overdose'
                ? 'border-rose-600 text-rose-900 bg-white/70 font-bold'
                : 'border-transparent text-rose-700 hover:text-rose-950'
            }`}
          >
            ⚠️ {t.addiction.overdose}
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'faqs'
                ? 'border-amber-600 text-amber-900 bg-white/70'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.common.faqs} & {t.common.myths}
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 leading-relaxed text-sm">
          {/* TAB 1: NEUROBIOLOGY */}
          {activeTab === 'neuro' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {currentLang === 'en' ? 'What Is It?' : currentLang === 'hi' ? 'यह क्या है?' : 'આ શું છે?'}
                </h3>
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800">
                  {substance.whatIsIt[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {currentLang === 'en' ? 'Why Is It Addictive? (Neurobiology of Addiction)' : currentLang === 'hi' ? 'इसकी लत क्यों लगती है? (न्यूरोबायोलॉजी)' : 'આની આદત કેમ પડે છે? (ન્યુરોબાયોલોજી)'}
                </h3>
                <p className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 text-slate-800">
                  {substance.whyAddictive[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {currentLang === 'en' ? 'Short & Long-Term Brain-Body Effects' : currentLang === 'hi' ? 'दिमाग और शरीर पर प्रभाव' : 'મગજ અને શરીર પર અસર'}
                </h3>
                <p className="text-slate-700">
                  {substance.brainBodyEffects[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SIGNS & WITHDRAWAL */}
          {activeTab === 'signs' && (
            <div className="space-y-6">
              {/* Problematic Signs */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {currentLang === 'en' ? 'Signs of Problematic Use' : currentLang === 'hi' ? 'समस्याग्रस्त उपयोग के संकेत' : 'સમસ્યાજનક વપરાશના સંકેતો'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {substance.problematicUseSigns[currentLang].map((sign, i) => (
                    <div key={i} className="p-3 rounded-lg border border-slate-200 bg-white flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dependence Signs */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {currentLang === 'en' ? 'Signs of Physical / Psychological Dependence' : currentLang === 'hi' ? 'शारीरिक व मानसिक निर्भरता के संकेत' : 'શારીરિક અને માનસિક નિર્ભરતા'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {substance.dependenceSigns[currentLang].map((sign, i) => (
                    <div key={i} className="p-3 rounded-lg border border-slate-200 bg-white flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-800">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Withdrawal Symptoms */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {t.addiction.withdrawal}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  {substance.withdrawalSymptoms[currentLang]}
                </p>
              </div>

              {/* Medical & Psychiatric Complications */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">
                    Medical Complications
                  </h4>
                  <p className="text-xs text-slate-700">{substance.medicalComplications[currentLang]}</p>
                </div>
                <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1">
                    Psychiatric Complications
                  </h4>
                  <p className="text-xs text-slate-700">{substance.psychiatricComplications[currentLang]}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT & HARM REDUCTION */}
          {activeTab === 'treatment' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.addiction.treatment}
                </h3>
                <p className="bg-teal-50/60 p-4 rounded-xl border border-teal-100 text-slate-800 text-sm">
                  {substance.treatmentApproach[currentLang]}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                    Psychotherapy (Motivational Interviewing & CBT)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {substance.psychotherapyModalities[currentLang]}
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1">
                    Medication-Assisted Treatment (MAT)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {substance.medicationAssistedTreatment[currentLang]}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Understanding Detoxification Safely
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {substance.detoxificationConcepts[currentLang]}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Relapse Prevention & Harm Reduction
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {substance.relapsePrevention[currentLang]} • {substance.harmReduction[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OVERDOSE & EMERGENCY */}
          {activeTab === 'overdose' && (
            <div className="space-y-6">
              <div className="p-5 bg-rose-50 border-2 border-rose-300 rounded-xl">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-base mb-2">
                  <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0" />
                  <span>{t.addiction.overdose}</span>
                </div>
                <p className="text-sm font-semibold text-rose-950 mb-3 leading-relaxed">
                  {substance.overdoseWarningSigns[currentLang]}
                </p>

                <div className="p-4 bg-white rounded-lg border border-rose-200 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900">
                    Immediate Life-Saving Emergency First-Aid Advice:
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
                    {substance.emergencyAdvice[currentLang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rose-200 flex flex-wrap items-center gap-4 text-xs font-bold text-rose-900">
                  <a href="tel:112" className="px-3 py-1.5 rounded bg-rose-600 hover:bg-rose-700 text-white transition">
                    Call 112 (National Emergency Dispatch)
                  </a>
                  <a href="tel:14416" className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-900 text-white transition">
                    Call 14416 (Tele-MANAS)
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQS & MYTHS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              {substance.mythsVsFacts.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    {t.common.myths}
                  </h3>
                  <div className="space-y-3">
                    {substance.mythsVsFacts.map((mf, i) => (
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

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {t.common.faqs}
                </h3>
                <div className="space-y-2">
                  {substance.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden transition">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition cursor-pointer"
                        >
                          <span>{faq.question[currentLang]}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
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
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            {substance.name[currentLang]} • {t.doctorName}
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
