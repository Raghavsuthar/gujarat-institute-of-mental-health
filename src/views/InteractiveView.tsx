import React from 'react';
import { Activity, ShieldAlert, CheckCircle2, ArrowRight, HelpCircle, HeartPulse } from 'lucide-react';
import { Language } from '../types';
import { screenersData } from '../data/assessments';
import { translations } from '../data/translations';

interface InteractiveViewProps {
  currentLang: Language;
  onOpenScreener: () => void;
  onOpenCrisis: () => void;
}

export const InteractiveView: React.FC<InteractiveViewProps> = ({
  currentLang,
  onOpenScreener,
  onOpenCrisis,
}) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Activity className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Validated Reflection Instruments' : currentLang === 'hi' ? 'प्रमाणित आत्म-मूल्यांकन' : 'સ્વ-મૂલ્યાંકન સાધનો'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.interactive}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Standardized psychological self-report instruments (PHQ-9 for depressive symptoms and GAD-7 for generalized anxiety). These tools are provided strictly for education and structured reflection to help you prepare for clinical discussions with a doctor.'
            : currentLang === 'hi'
            ? 'डिप्रेशन के लक्षणों के लिए PHQ-9 और चिंता के लिए GAD-7। यह टूल केवल आत्म-अवलोकन के लिए है ताकि आप समझ सकें कि डॉक्टर से अपने मन की स्थिति कैसे साझा करें।'
            : 'ડિપ્રેશન માટે PHQ-9 અને ચિંતા માટે GAD-7. આ ટૂલ માત્ર તમારા લક્ષણો સમજવા અને ડૉક્ટર સમક્ષ રજૂ કરવા માટે છે.'}
        </p>
      </div>

      {/* Mandatory Non-Diagnostic Clinical Notice */}
      <div className="p-5 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-start gap-3.5 text-amber-950">
        <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-900">
            NON-DIAGNOSTIC LEGAL & MEDICAL NOTICE
          </span>
          <p className="font-bold text-sm sm:text-base leading-snug">
            {currentLang === 'en'
              ? 'This tool does not provide a medical diagnosis, nor does a high score prove the presence of a clinical disorder.'
              : currentLang === 'hi'
              ? 'यह टूल कोई मेडिकल डायग्नोसिस या बीमारी का प्रमाण नहीं है।'
              : 'આ ટૂલ કોઈ તબીબી નિદાન નથી.'}
          </p>
          <p className="text-xs text-amber-900/80 leading-relaxed">
            {currentLang === 'en'
              ? 'Scores reflect subjective emotional distress over the past 2 weeks. Comprehensive psychiatric evaluations require direct clinical interview, exploration of medical history, and exclusion of endocrine or neurological conditions.'
              : currentLang === 'hi'
              ? 'यह केवल पिछले 2 सप्ताह की मानसिक स्थिति का सारांश है। सही जांच के लिए डॉक्टर से व्यक्तिगत परामर्श जरूरी है।'
              : 'આ માત્ર છેલ્લા ૨ અઠવાડિયાની સ્થિતિ દર્શાવે છે. સાચી તપાસ માટે ડૉક્ટરને રૂબરૂ મળવું જરૂરી છે.'}
          </p>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenersData.map((tool) => (
          <div
            key={tool.id}
            className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-md transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-teal-50 text-teal-800 border border-teal-100">
                  {tool.id.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400">
                  {tool.questions.length} Standardized Questions
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {tool.name[currentLang]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tool.purpose[currentLang]}
              </p>

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                <strong>Frequency Scale:</strong> 0 (Not at all) to 3 (Nearly every day)
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenScreener}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Launch Reflection Tool' : currentLang === 'hi' ? 'प्रश्नावली शुरू करें' : 'પ્રશ્નાવલિ શરૂ કરો'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* How to prepare for a psychiatric consultation */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          {currentLang === 'en'
            ? 'How to Prepare for Your First Psychiatric Consultation in India'
            : currentLang === 'hi'
            ? 'मनोचिकित्सक से पहली मुलाकात की तैयारी कैसे करें'
            : 'મનોચિકિત્સકની પ્રથમ મુલાકાત માટેની તૈયારી'}
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 block text-sm">1. Note Your Timeline</strong>
            <p>Write down when symptoms began, whether they are continuous or episodic, and any recent life stressors.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 block text-sm">2. Bring Medical Records</strong>
            <p>Include all previous blood tests (thyroid, B12, iron), prescriptions, and past medical or surgical history.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 block text-sm">3. Involve a Trusted Person</strong>
            <p>Bringing a family member or close friend can provide crucial collateral history and emotional comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
