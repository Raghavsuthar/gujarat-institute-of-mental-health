import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { doctorProfile } from '../data/about';
import { translations } from '../data/translations';

interface AboutViewProps {
  currentLang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Professional Profile & Medical Ethics' : currentLang === 'hi' ? 'चिकित्सक परिचय व आचार संहिता' : 'તબીબી પરિચય અને નૈતિકતા'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.about}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Meet Dr. Raghav Suthar, Consultant Psychiatrist, and understand the medical ethics, transparency, and clinical standards underpinning this multilingual public health portal.'
            : currentLang === 'hi'
            ? 'कंसल्टेंट मनोचिकित्सक डॉ. राघव सुथार का परिचय और इस लोक स्वास्थ्य पोर्टल के वैज्ञानिक सिद्धांतों व मेडिकल आचार संहिता की जानकारी।'
            : 'કન્સલ્ટન્ટ મનોચિકિત્સક ડૉ. રાઘવ સુથારનો પરિચય અને આ જાહેર આરોગ્ય પોર્ટલના વૈજ્ઞાનિક મૂલ્યો.'}
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 flex flex-col md:flex-row items-start gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-[#115e59] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shrink-0">
          RS
        </div>

        <div className="space-y-4 flex-1">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c2430]">
                {doctorProfile.name}
              </h2>
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-xs font-semibold">
                {doctorProfile.qualifications}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#115e59] mt-1">
              {doctorProfile.title[currentLang]}
            </p>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              {doctorProfile.registrationDetails[currentLang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
            <span className="font-semibold text-stone-900">Languages:</span>
            {doctorProfile.languagesSpoken.map((lang, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-stone-100 rounded text-stone-700">
                {lang}
              </span>
            ))}
          </div>

          {/* Special Interests */}
          <div className="pt-3 border-t border-stone-100 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Areas of Special Clinical Interest
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {doctorProfile.specialInterests.map((interest, i) => (
                <div key={i} className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-800">
                  <Award className="w-4 h-4 text-[#115e59] shrink-0" />
                  <span>{interest[currentLang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy of Care */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#f0fdfa] border border-[#ccfbf1] space-y-3">
        <h2 className="text-base sm:text-lg font-semibold text-[#115e59]">
          {currentLang === 'en' ? 'Clinical & Public Education Philosophy' : currentLang === 'hi' ? 'चिकित्सीय एवं जन-जागरूकता दृष्टिकोण' : 'તબીબી અને સામાજિક દ્રષ્ટિકોણ'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
          {doctorProfile.practicePhilosophy[currentLang]}
        </p>
      </div>

      {/* Medical Ethics & NMC Compliance Declaration */}
      <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-stone-600" />
          <h2 className="text-base sm:text-lg font-semibold text-[#1c2430]">
            {currentLang === 'en' ? 'Medical Ethics & NMC Compliance Declaration' : currentLang === 'hi' ? 'चिकित्सीय आचार संहिता एवं NMC अनुपालन' : 'તબીબી નૈતિકતા અને નિયમોનું પાલન'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          {doctorProfile.ethicalCommitment[currentLang]}
        </p>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900">Mandatory Notice Regarding Consultations:</strong> {doctorProfile.consultationNotice[currentLang]}
        </div>

        <div className="pt-3 border-t border-stone-100 grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-600">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
            <span>Strict non-diagnostic educational boundary</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
            <span>Zero sponsored content or commercial pharmaceutical promotion</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
            <span>Regularly audited against latest international psychiatric literature</span>
          </div>
        </div>
      </div>
    </div>
  );
};

