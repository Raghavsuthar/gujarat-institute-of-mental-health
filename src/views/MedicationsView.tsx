import React from 'react';
import { Pill, ShieldAlert, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language, MedicationClass } from '../types';
import { medicationsData } from '../data/medications';
import { translations } from '../data/translations';

interface MedicationsViewProps {
  currentLang: Language;
  onSelectMedication: (item: MedicationClass) => void;
}

export const MedicationsView: React.FC<MedicationsViewProps> = ({
  currentLang,
  onSelectMedication,
}) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-semibold">
          <Pill className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Psychopharmacology Literacy' : currentLang === 'hi' ? 'मनोरोग दवाओं की जानकारी' : 'મનોરોગ દવાઓની માહિતી'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.medications}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Understanding psychiatric medications: how they work in the brain, common indications, anticipated side effects, precautions, and why regular clinical monitoring is essential.'
            : currentLang === 'hi'
            ? 'मानसिक स्वास्थ्य की दवाओं की वैज्ञानिक समझ: वे मस्तिष्क में कैसे कार्य करती हैं, उनके सामान्य दुष्प्रभाव और डॉक्टर की नियमित निगरानी क्यों अनिवार्य है।'
            : 'મનોરોગની દવાઓની વૈજ્ઞાનિક સમજ: તે મગજમાં કેવી રીતે કામ કરે છે, તેની આડઅસરો અને ડૉક્ટરની નિયમિત દેખરેખ શા માટે જરૂરી છે.'}
        </p>
      </div>

      {/* MANDATORY WARNING BANNER */}
      <div className="p-5 bg-rose-50 border-2 border-rose-300 rounded-2xl text-rose-950 flex items-start gap-3.5">
        <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-200 text-rose-900">
            MANDATORY MEDICAL SAFETY RULE
          </span>
          <p className="font-bold text-sm sm:text-base leading-snug">
            {currentLang === 'en'
              ? 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional.'
              : currentLang === 'hi'
              ? 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें।'
              : 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં.'}
          </p>
          <p className="text-xs text-rose-900/80 leading-relaxed">
            {currentLang === 'en'
              ? 'Abrupt discontinuation of psychiatric medicines can trigger severe rebound symptoms, withdrawal syndromes, or rapid recurrence of the primary illness.'
              : currentLang === 'hi'
              ? 'दवा को अचानक बंद करने से बीमारी बहुत तेजी से वापस लौट सकती है और शरीर में गंभीर बेचैनी या चक्कर आ सकते हैं।'
              : 'દવાઓ અચાનક બંધ કરવાથી બીમારી ફરીથી ઉથલો મારી શકે છે.'}
          </p>
        </div>
      </div>

      {/* Medication Classes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {medicationsData.map((med) => (
          <div
            key={med.id}
            onClick={() => onSelectMedication(med)}
            className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-500 hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-100">
                  MEDICATION CLASS
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition">
                {med.name[currentLang]}
              </h2>

              <p className="text-xs text-slate-500 font-mono mt-1">
                Examples: {med.commonExamples.slice(0, 4).join(', ')}...
              </p>

              <div className="mt-3 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>
                  <strong className="text-slate-900">Indications:</strong> {med.indications[currentLang]}
                </div>
                <div>
                  <strong className="text-slate-900">How It Works:</strong> {med.mechanismPlain[currentLang]}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>{currentLang === 'en' ? 'View Side Effects & Precautions' : currentLang === 'hi' ? 'दुष्प्रभाव व सावधानियां देखें' : 'આડઅસર અને સાવચેતી જુઓ'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
            </div>
          </div>
        ))}
      </div>

      {/* Educational Note on Addiction & Brain Neurochemistry */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <h3 className="font-bold text-base text-slate-900">
          {currentLang === 'en'
            ? 'Why Psychiatric Medications Are NOT "Sleeping Pills"'
            : currentLang === 'hi'
            ? 'मनोरोग की दवाएं "नींद की गोलियां" क्यों नहीं हैं?'
            : 'મનોરોગની દવાઓ માત્ર "ઊંઘની ગોળીઓ" કેમ નથી?'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {currentLang === 'en'
            ? 'A widespread misconception in India is that all psychiatric drugs merely drug the brain into sleep. In reality, modern medications (such as SSRIs and mood stabilizers) do not cause sedation as their primary mechanism. Instead, they promote neuroplasticity, stimulate brain-derived neurotrophic factor (BDNF), and regulate neurotransmitter receptor sensitivity to restore clear, wakeful cognitive stability.'
            : currentLang === 'hi'
            ? 'एक आम भ्रांति है कि मनोरोग की दवाएं सिर्फ सुलाने के लिए होती हैं। वास्तव में, SSRIs और मूड स्टेबलाइजर्स नींद की दवाएं नहीं हैं; वे मस्तिष्क के नर्वस सिस्टम को मजबूत बनाती हैं और सोचने-समझने की शक्ति को वापस सामान्य करती हैं।'
            : 'એક સામાન્ય ગેરસમજ છે કે આ બધી ઊંઘની દવાઓ છે. હકીકતમાં આ દવાઓ મગજના રસાયણોને કુદરતી રીતે સંતુલિત કરે છે જેથી દર્દી શાંતિથી જીવી શકે.'}
        </p>
      </div>
    </div>
  );
};
