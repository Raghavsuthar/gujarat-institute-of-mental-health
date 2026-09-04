import React from 'react';
import { Phone, ShieldAlert, CheckCircle2, XCircle, Building2, Check } from 'lucide-react';
import { Language } from '../types';
import { officialHelplines, crisisWarningSigns, whatToDoInCrisis, whatNotToDoInCrisis } from '../data/emergency';
import { translations } from '../data/translations';

interface EmergencyViewProps {
  currentLang: Language;
}

export const EmergencyView: React.FC<EmergencyViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header with High-Visibility Crisis Notice */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-bold animate-pulse">
          <ShieldAlert className="w-4 h-4 text-rose-700" />
          <span>{currentLang === 'en' ? 'Emergency Crisis Assistance (India)' : currentLang === 'hi' ? 'आपातकालीन संकट सहायता (भारत)' : 'ઇમરજન્સી સહાય (ભારત)'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.emergency}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'If you or someone you know is in acute distress, experiencing thoughts of self-harm, severe agitation, delirium, or an overdose, help is available immediately. These official government and non-profit helplines are toll-free, confidential, and available 24 hours a day.'
            : currentLang === 'hi'
            ? 'यदि आप या कोई परिजन अत्यधिक मानसिक संकट, आत्महत्या के विचारों या नशीले पदार्थों के ओवरडोज से जूझ रहे हैं, तो तुरंत सहायता उपलब्ध है। ये सभी नंबर 24 घंटे निःशुल्क और गोपनीय हैं।'
            : 'જો તમે કે તમારા સ્વજન ગંભીર માનસિક સંકટ કે આત્મહત્યાના વિચારો અનુભવી રહ્યા હોવ, તો તાત્કાલિક સહાય ઉપલબ્ધ છે. આ તમામ સેવાઓ ચોવીસે કલાક વિનામૂલ્યે ઉપલબ્ધ છે.'}
        </p>
      </div>

      {/* Primary Helplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {officialHelplines.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition ${
              idx === 0
                ? 'bg-rose-50/70 border-rose-300 shadow-sm'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-white">
                  {item.availableHours[currentLang]}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                  {item.name[currentLang]}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {item.operatedBy}
                </p>
              </div>

              <a
                href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                className="p-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-md transition shrink-0 flex items-center justify-center cursor-pointer"
                title={`Call ${item.number}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/80">
              <a
                href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                className="text-2xl font-black text-rose-700 hover:text-rose-800 tracking-tight font-mono block"
              >
                {item.number}
              </a>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {item.description[currentLang]}
              </p>
              <div className="mt-2 text-[11px] text-slate-500 space-y-0.5">
                <div><strong>Languages:</strong> {item.languages[currentLang]}</div>
                <div><strong>Cost:</strong> {item.cost[currentLang]} • Verified: {item.verifiedDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Immediate DOs and DON'Ts in a Psychiatric Crisis */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* DOs */}
        <div className="p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{currentLang === 'en' ? 'DO in a Mental Health Crisis:' : currentLang === 'hi' ? 'क्या करें (What to Do):' : 'શું કરવું:'}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 leading-relaxed">
            {whatToDoInCrisis.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                <span>{item[currentLang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DON'Ts */}
        <div className="p-6 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-base">
            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>{currentLang === 'en' ? 'DO NOT in a Mental Health Crisis:' : currentLang === 'hi' ? 'क्या न करें (What to Avoid):' : 'શું ન કરવું:'}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-rose-950 leading-relaxed">
            {whatNotToDoInCrisis.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-600 font-bold mt-0.5">•</span>
                <span>{item[currentLang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Acute Crisis Warning Signs */}
      <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-amber-950">
          {currentLang === 'en' ? 'Critical Warning Signs Requiring Immediate Medical Intervention:' : currentLang === 'hi' ? 'खतरे के गंभीर संकेत जिन पर तुरंत ध्यान देना जरूरी है:' : 'તાત્કાલિક સારવારની જરૂર દર્શાવતા ગંભીર સંકેતો:'}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {crisisWarningSigns.map((sign, idx) => (
            <div key={idx} className="p-3 bg-white rounded-xl border border-amber-200 flex items-start gap-2 text-xs text-amber-950">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <span>{sign[currentLang]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What Happens in a Hospital Emergency Department */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {currentLang === 'en'
              ? 'What to Expect in a Hospital Emergency Department (Casualty)'
              : currentLang === 'hi'
              ? 'अस्पताल के आपातकालीन कक्ष (कैजुअल्टी) में क्या होता है?'
              : 'હોસ્પિટલના ઇમરજન્સી વિભાગમાં શું પ્રક્રિયા થાય છે?'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {currentLang === 'en'
            ? 'When you arrive at a hospital casualty department for a psychiatric emergency in India: (1) Immediate Triage: The medical officer evaluates airway, breathing, blood pressure, blood sugar, and vitals; (2) Medical Exclusion: Blood tests and ECG are performed to rule out medical intoxications or organ failure; (3) Psychiatric Assessment: The on-call psychiatrist conducts a rapid crisis interview to determine immediate safety and safety planning; (4) Supportive Observation: The person is kept in a quiet, safe environment until acute agitation or distress subsides.'
            : currentLang === 'hi'
            ? 'अस्पताल पहुंचने पर सबसे पहले ब्लड प्रेशर, शुगर व ईसीजी की जांच की जाती है ताकि शारीरिक कारणों की पहचान हो सके। इसके बाद ऑन-कॉल मनोचिकित्सक मरीज की स्थिति का मूल्यांकन कर तत्काल दवा या निगरानी का निर्णय लेते हैं।'
            : 'હોસ્પિટલમાં સૌથી પહેલા બીપી, શુગર અને જરૂરી રિપોર્ટ કરીને શારીરિક તપાસ થાય છે. ત્યારબાદ મનોચિકિત્સક દર્દીની સ્થિતિનું મૂલ્યાંકન કરે છે.'}
        </p>
      </div>
    </div>
  );
};
