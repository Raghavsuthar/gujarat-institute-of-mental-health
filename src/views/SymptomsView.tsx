import React from 'react';
import { Activity, AlertTriangle, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Language, SymptomEducation } from '../types';
import { symptomsData } from '../data/symptoms';
import { translations } from '../data/translations';

interface SymptomsViewProps {
  currentLang: Language;
}

export const SymptomsView: React.FC<SymptomsViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Activity className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Symptom Literacy' : currentLang === 'hi' ? 'लक्षणों की समझ' : 'લક્ષણોની સમજ'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.symptoms}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'A single psychiatric symptom does not automatically equal a specific illness. Symptoms frequently cross diagnostic boundaries and can also arise from thyroid disorders, nutritional deficiencies, or life stress.'
            : currentLang === 'hi'
            ? 'किसी एक लक्षण का मतलब कोई निश्चित बीमारी नहीं होता। थायरॉयड, खून की कमी या अत्यधिक तनाव से भी ऐसे लक्षण हो सकते हैं। लक्षणों का निष्पक्ष विश्लेषण समझें।'
            : 'કોઈ એક લક્ષણનો અર્થ ચોક્કસ બીમારી નથી હોતો. શારીરિક કારણોથી પણ આવા ફેરફાર થઈ શકે છે.'}
        </p>
      </div>

      {/* Mandatory Non-Diagnostic Rule Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-900 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>{t.disclaimer.title}:</strong>{' '}
          {currentLang === 'en'
            ? 'A symptom can occur in multiple conditions and can also occur due to medical, medication-related, or substance-related causes. Do not self-diagnose based on a symptom checklist.'
            : currentLang === 'hi'
            ? 'एक लक्षण कई अलग-अलग बीमारियों या शारीरिक कारणों (जैसे थायरॉयड) से भी हो सकता है। केवल लक्षणों को देखकर खुद की बीमारी तय न करें।'
            : 'એક લક્ષણ અનેક કારણોથી હોઈ શકે છે. જાતે નિદાન કરવાને બદલે ડૉક્ટરની સલાહ લો.'}
        </div>
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {symptomsData.map((sym) => (
          <div
            key={sym.id}
            className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-teal-400 hover:shadow-xs transition space-y-4"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 px-2 py-0.5 rounded bg-teal-50">
                SYMPTOM EDUCATION
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-2">
                {sym.symptomName[currentLang]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {sym.plainDescription[currentLang]}
              </p>
            </div>

            {/* Possible Causes */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
              <strong className="text-slate-900 block mb-1">Possible Clinical & Medical Causes:</strong>
              <p className="text-slate-700 leading-relaxed">{sym.possibleCauses[currentLang]}</p>
            </div>

            {/* When to Consult & Self-Care */}
            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-teal-900">When to Seek Medical Evaluation:</strong>{' '}
                <span className="text-slate-700">{sym.whenToConsult[currentLang]}</span>
              </div>
              <div>
                <strong className="text-emerald-900">Healthy Self-Care Routine:</strong>{' '}
                <span className="text-slate-700">{sym.selfCareSupport[currentLang]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
