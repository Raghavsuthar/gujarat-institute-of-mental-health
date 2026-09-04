import React from 'react';
import { Award, ShieldCheck, CheckCircle2, UserCheck, HeartHandshake, Globe, BookOpen } from 'lucide-react';
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
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <UserCheck className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Professional Profile & Medical Ethics' : currentLang === 'hi' ? 'चिकित्सक परिचय व आचार संहिता' : 'તબીબી પરિચય અને નૈતિકતા'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.about}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Meet Dr. Raghav Suthar, Consultant Psychiatrist, and understand the medical ethics, transparency, and clinical standards underpinning this multilingual public health portal.'
            : currentLang === 'hi'
            ? 'कंसल्टेंट मनोचिकित्सक डॉ. राघव सुथार का परिचय और इस लोक स्वास्थ्य पोर्टल के वैज्ञानिक सिद्धांतों व मेडिकल आचार संहिता की जानकारी।'
            : 'કન્સલ્ટન્ટ મનોચિકિત્સક ડૉ. રાઘવ સુથારનો પરિચય અને આ જાહેર આરોગ્ય પોર્ટલના વૈજ્ઞાનિક મૂલ્યો.'}
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-8">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-extrabold text-4xl shrink-0 shadow-md">
          RS
        </div>

        <div className="space-y-4 flex-1">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {doctorProfile.name}
              </h2>
              <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold">
                {doctorProfile.qualifications}
              </span>
            </div>
            <p className="text-sm font-semibold text-teal-900 mt-1">
              {doctorProfile.title[currentLang]}
            </p>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              {doctorProfile.registrationDetails[currentLang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Languages:</span>
            {doctorProfile.languagesSpoken.map((lang, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded-md border border-slate-200">
                {lang}
              </span>
            ))}
          </div>

          {/* Special Interests */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Areas of Special Clinical Interest:
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {doctorProfile.specialInterests.map((interest, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-medium text-slate-800">
                  <Award className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{interest[currentLang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy of Care */}
      <div className="p-6 sm:p-8 rounded-3xl bg-teal-50/60 border border-teal-200/80 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-600 text-white shadow-xs">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-teal-950">
            {currentLang === 'en' ? 'Clinical & Public Education Philosophy' : currentLang === 'hi' ? 'चिकित्सीय एवं जन-जागरूकता दृष्टिकोण' : 'તબીબી અને સામાજિક દ્રષ્ટિકોણ'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
          {doctorProfile.practicePhilosophy[currentLang]}
        </p>
      </div>

      {/* Medical Ethics & NMC Compliance Declaration */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            {currentLang === 'en' ? 'Medical Ethics & NMC Compliance Declaration' : currentLang === 'hi' ? 'चिकित्सीय आचार संहिता एवं NMC अनुपालन' : 'તબીબી નૈતિકતા અને નિયમોનું પાલન'}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {doctorProfile.ethicalCommitment[currentLang]}
        </p>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
          <strong>Mandatory Notice Regarding Consultations:</strong> {doctorProfile.consultationNotice[currentLang]}
        </div>

        <div className="pt-3 border-t border-slate-100 grid sm:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Strict non-diagnostic educational boundary</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Zero sponsored content or commercial pharmaceutical promotion</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Regularly audited against latest international psychiatric literature</span>
          </div>
        </div>
      </div>
    </div>
  );
};
