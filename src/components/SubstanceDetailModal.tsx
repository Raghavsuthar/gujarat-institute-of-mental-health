import React, { useState } from 'react';
import { X, AlertTriangle, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                DE-ADDICTION & SUBSTANCE EDUCATION
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {substance.medicalTerms[currentLang]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
              {substance.name[currentLang]}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {t.common.lastReviewed}: {substance.lastReviewed} • {t.doctorName}
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

        {/* Navigation Tabs */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'neuro'}
            onClick={() => setActiveTab('neuro')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'neuro'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {currentLang === 'en' ? 'What It Is & Neurobiology' : currentLang === 'hi' ? 'परिचय व न्यूरोबायोलॉजी' : 'પરિચય અને ન્યુરોબાયોલોજી'}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'signs'}
            onClick={() => setActiveTab('signs')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'signs'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {currentLang === 'en' ? 'Signs, Dependence & Withdrawal' : currentLang === 'hi' ? 'लक्षण, निर्भरता व विड्रॉल' : 'લક્ષણો, નિર્ભરતા અને વિડ્રોઅલ'}
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
            {t.addiction.treatment} & Harm Reduction
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'overdose'}
            onClick={() => setActiveTab('overdose')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center font-bold ${
              activeTab === 'overdose'
                ? 'border-[#991b1b] text-[#991b1b] bg-white'
                : 'border-transparent text-[#991b1b] hover:text-[#7f1d1d]'
            }`}
          >
            {t.addiction.overdose}
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

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-stone-700 leading-relaxed text-sm">
          {/* TAB 1: NEUROBIOLOGY */}
          {activeTab === 'neuro' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'What Is It?' : currentLang === 'hi' ? 'यह क्या है?' : 'આ શું છે?'}
                </h3>
                <p className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-800">
                  {substance.whatIsIt[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Why Is It Addictive? (Neurobiology of Addiction)' : currentLang === 'hi' ? 'इसकी लत क्यों लगती है? (न्यूरोबायोलॉजी)' : 'આની આદત કેમ પડે છે? (ન્યુરોબાયોલોજી)'}
                </h3>
                <p className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-stone-800">
                  {substance.whyAddictive[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Short & Long-Term Brain-Body Effects' : currentLang === 'hi' ? 'दिमाग और शरीर पर प्रभाव' : 'મગજ અને શરીર પર અસર'}
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  {substance.brainBodyEffects[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SIGNS & WITHDRAWAL */}
          {activeTab === 'signs' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Signs of Problematic Use' : currentLang === 'hi' ? 'समस्याग्रस्त उपयोग के संकेत' : 'સમસ્યાજનક વપરાશના સંકેતો'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {substance.problematicUseSigns[currentLang].map((sign, i) => (
                    <div key={i} className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Signs of Physical / Psychological Dependence' : currentLang === 'hi' ? 'शारीरिक व मानसिक निर्भरता के संकेत' : 'શારીરિક અને માનસિક નિર્ભરતા'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {substance.dependenceSigns[currentLang].map((sign, i) => (
                    <div key={i} className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-stone-800">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <h4 className="text-sm font-semibold text-[#1c2430] mb-1">
                  {t.addiction.withdrawal}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {substance.withdrawalSymptoms[currentLang]}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Medical Complications
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.medicalComplications[currentLang]}</p>
                </div>
                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Psychiatric Complications
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.psychiatricComplications[currentLang]}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT & HARM REDUCTION */}
          {activeTab === 'treatment' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.addiction.treatment}
                </h3>
                <p className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-800 text-sm leading-relaxed">
                  {substance.treatmentApproach[currentLang]}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Psychotherapy (Motivational Interviewing & CBT)
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {substance.psychotherapyModalities[currentLang]}
                  </p>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Medication-Assisted Treatment (MAT)
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {substance.medicationAssistedTreatment[currentLang]}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Understanding Detoxification Safely
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {substance.detoxificationConcepts[currentLang]}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Relapse Prevention & Harm Reduction
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {substance.relapsePrevention[currentLang]} • {substance.harmReduction[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OVERDOSE & EMERGENCY */}
          {activeTab === 'overdose' && (
            <div className="space-y-6">
              <div className="p-5 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
                <div className="flex items-center gap-2 text-[#991b1b] font-semibold text-base mb-2">
                  <ShieldAlert className="w-5 h-5 text-[#991b1b] shrink-0" />
                  <span>{t.addiction.overdose}</span>
                </div>
                <p className="text-sm font-semibold text-stone-900 mb-3 leading-relaxed">
                  {substance.overdoseWarningSigns[currentLang]}
                </p>

                <div className="p-4 bg-white rounded-lg border border-[#fecaca] space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#991b1b]">
                    Immediate Life-Saving Emergency First-Aid Advice:
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                    {substance.emergencyAdvice[currentLang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#fecaca] flex flex-wrap items-center gap-3 text-xs font-bold">
                  <a href="tel:112" className="px-4 py-2.5 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white transition min-h-[44px] flex items-center">
                    Call 112 (National Emergency Dispatch)
                  </a>
                  <a href="tel:14416" className="px-4 py-2.5 rounded-md bg-stone-800 hover:bg-stone-900 text-white transition min-h-[44px] flex items-center">
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
                  <h3 className="text-base font-semibold text-[#1c2430] mb-3">
                    {t.common.myths}
                  </h3>
                  <div className="space-y-3">
                    {substance.mythsVsFacts.map((mf, i) => (
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
                  {substance.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="rounded-lg border border-stone-200 bg-white overflow-hidden transition">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-[#1c2430] font-semibold text-xs sm:text-sm hover:bg-stone-50 transition cursor-pointer min-h-[44px]"
                        >
                          <span>{faq.question[currentLang]}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
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
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            {substance.name[currentLang]} • {t.doctorName}
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

