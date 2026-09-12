import React, { useEffect } from 'react';
import { Pill, ShieldAlert, ArrowRight } from 'lucide-react';
import { Language, MedicationClass } from '../types';
import { medicationsData } from '../data/medications';
import { conditionsData } from '../data/conditions';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { CategoryIllustration, NeurotransmitterSynapseDiagram } from '../components/visuals';

interface MedicationsViewProps {
  currentLang: Language;
  onSelectMedication: (item: MedicationClass) => void;
}

export const MedicationsView: React.FC<MedicationsViewProps> = ({
  currentLang,
  onSelectMedication,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Psychiatric Medication Classes & Literacy' : currentLang === 'hi' ? 'मनोरोग दवाओं की वैज्ञानिक जानकारी' : 'મનોરોગની દવાઓની માહિતી',
      description: currentLang === 'en'
        ? 'Independent educational guide to antidepressants, antipsychotics, mood stabilizers, and anxiolytics in India.'
        : currentLang === 'hi'
        ? 'एंटीडिप्रेसेंट, एंटीसाइकोटिक और मूड स्टेबलाइजर दवाओं की निष्पक्ष जानकारी।'
        : 'એન્ટીડિપ્રેશન, એન્ટીસાયકોટિક અને મૂડ સ્ટેબિલાઇઝર દવાઓ વિશે શૈક્ષણિક માર્ગદર્શન.',
      path: 'medications',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Psychopharmacology Literacy' : currentLang === 'hi' ? 'मनोरोग दवाओं की जानकारी' : 'મનોરોગ દવાઓની માહિતી'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.medications}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Understanding psychiatric medications: how they work in the brain, common indications, anticipated side effects, precautions, and why regular clinical monitoring is essential.'
            : currentLang === 'hi'
            ? 'मानसिक स्वास्थ्य की दवाओं की वैज्ञानिक समझ: वे मस्तिष्क में कैसे कार्य करती हैं, उनके सामान्य दुष्प्रभाव और डॉक्टर की नियमित निगरानी क्यों अनिवार्य है।'
            : 'મનોરોગની દવાઓની વૈજ્ઞાનિક સમજ: તે મગજમાં કેવી રીતે કામ કરે છે, તેની આડઅસરો અને ડૉક્ટરની નિયમિત દેખરેખ શા માટે જરૂરી છે.'}
        </p>
      </div>

      {/* Visual Education Header Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-white">
        <CategoryIllustration
          category="medications"
          className="w-full h-36 sm:h-44"
          ariaLabel={
            currentLang === 'en'
              ? 'Educational clinical illustration of psychopharmacology, neurochemistry, and receptor modulation'
              : currentLang === 'hi'
              ? 'मनोरोग औषध विज्ञान और न्यूरोकेमिस्ट्री का शैक्षिक चित्रण'
              : 'મનોરોગ દવાઓ અને ન્યુરોકેમિસ્ટ્રીનું શૈક્ષણિક ચિત્ર'
          }
        />
      </div>

      {/* MANDATORY WARNING BANNER */}
      <div className="p-5 bg-[#fef2f2] border border-[#fecaca] rounded-xl text-stone-800 flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 text-[#991b1b] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#991b1b]">
            MANDATORY MEDICAL SAFETY RULE
          </span>
          <p className="font-semibold text-sm sm:text-base text-[#991b1b] leading-snug">
            {currentLang === 'en'
              ? 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional.'
              : currentLang === 'hi'
              ? 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें।'
              : 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં.'}
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {currentLang === 'en'
              ? 'Abrupt discontinuation of psychiatric medicines can trigger severe rebound symptoms, withdrawal syndromes, or rapid recurrence of the primary illness.'
              : currentLang === 'hi'
              ? 'दवा को अचानक बंद करने से बीमारी बहुत तेजी से वापस लौट सकती है और शरीर में गंभीर बेचैनी या चक्कर आ सकते हैं।'
              : 'દવાઓ અચાનક બંધ કરવાથી બીમારી ફરીથી ઉથલો મારી શકે છે.'}
          </p>
        </div>
      </div>

      {/* Interactive Neurotransmitter Synapse Educational Diagram */}
      <div className="space-y-3">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {currentLang === 'en'
              ? 'Mechanism of Action in the Brain'
              : currentLang === 'hi'
              ? 'मस्तिष्क में कार्यप्रणाली'
              : 'મગજમાં કાર્યપદ્ધતિ'}
          </span>
          <h2 className="text-xl font-semibold text-[#1c2430]">
            {currentLang === 'en'
              ? 'How Psychiatric Medications Act at Neural Synapses'
              : currentLang === 'hi'
              ? 'मनोरोग की दवाएं मस्तिष्क की कोशिकाओं में कैसे काम करती हैं'
              : 'મનોરોગની દવાઓ મગજના કોષો વચ્ચે કેવી રીતે કામ કરે છે'}
          </h2>
        </div>
        <NeurotransmitterSynapseDiagram currentLang={currentLang} />
      </div>

      {/* Medication Classes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {medicationsData.map((med) => (
          <div
            key={med.id}
            onClick={() => onSelectMedication(med)}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1 min-w-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
                    MEDICATION CLASS
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430]">
                    {med.name[currentLang]}
                  </h2>
                </div>
                <div className="w-14 h-11 shrink-0 rounded-lg overflow-hidden border border-teal-200/80 bg-stone-50">
                  <CategoryIllustration
                    category="medications"
                    className="w-full h-full object-cover"
                    ariaLabel=""
                  />
                </div>
              </div>

              <p className="text-xs text-stone-500 font-mono">
                Examples: {med.commonExamples.slice(0, 4).join(', ')}...
              </p>

              <div className="mt-3 text-xs sm:text-sm text-stone-600 space-y-2 pt-2 border-t border-stone-100">
                <div>
                  <strong className="text-[#1c2430] font-semibold">Indications:</strong> {med.indications[currentLang]}
                </div>
                <div>
                  <strong className="text-[#1c2430] font-semibold">How It Works:</strong> {med.mechanismPlain[currentLang]}
                </div>
              </div>

              {med.relatedIds && med.relatedIds.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase">
                    {currentLang === 'en' ? 'Indicated for:' : currentLang === 'hi' ? 'उपयोग:' : 'ઉપયોગ:'}
                  </span>
                  {med.relatedIds.slice(0, 3).map((relId) => {
                    const matchedCondition = conditionsData.find(
                      (c) => c.id === relId || c.slug === relId
                    );
                    return (
                      <span
                        key={relId}
                        className="text-[11px] px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-800 font-medium"
                      >
                        {matchedCondition ? matchedCondition.name[currentLang] : relId.replace(/-/g, ' ')}
                      </span>
                    );
                  })}
                  {med.relatedIds.length > 3 && (
                    <span className="text-[11px] text-stone-400">
                      +{med.relatedIds.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59] min-h-[44px]">
              <span>{currentLang === 'en' ? 'View Side Effects & Precautions' : currentLang === 'hi' ? 'दुष्प्रभाव व सावधानियां देखें' : 'આડઅસર અને સાવચેતી જુઓ'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Educational Note on Addiction & Brain Neurochemistry */}
      <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-2">
        <h3 className="font-semibold text-base text-[#1c2430]">
          {currentLang === 'en'
            ? 'Why Psychiatric Medications Are NOT "Sleeping Pills"'
            : currentLang === 'hi'
            ? 'मनोरोग की दवाएं "नींद की गोलियां" क्यों नहीं हैं?'
            : 'મનોરોગની દવાઓ માત્ર "ઊંઘની ગોળીઓ" કેમ નથી?'}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
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

