import React from 'react';
import { Users, CheckCircle2, XCircle, HeartHandshake, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { caregiversData } from '../data/caregivers';
import { translations } from '../data/translations';

interface CaregiversViewProps {
  currentLang: Language;
}

export const CaregiversView: React.FC<CaregiversViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold">
          <Users className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Family Support & Communication' : currentLang === 'hi' ? 'परिवार व देखभालकर्ताओं के लिए' : 'પરિવાર અને સંભાળ રાખનાર માટે'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.caregivers}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Families in India play the most vital role in psychiatric recovery. Learn scientific communication skills, how to minimize high emotional tension at home, and how to protect your own mental well-being against burnout.'
            : currentLang === 'hi'
            ? 'भारतीय परिवारों की भूमिका मरीज के ठीक होने में सबसे महत्वपूर्ण होती है। घर में तानों और तनाव को कम करने, सही संवाद साधने और अपनी सेहत की रक्षा करने के वैज्ञानिक तरीके।'
            : 'દર્દીને સાજા કરવામાં પરિવારની ભૂમિકા સૌથી મોટી હોય છે. ઘરમાં ક્લેશ ઘટાડવા અને સંભાળ રાખનારની પોતાની તંદુરસ્તી જાળવવાના વ્યવહારુ ઉપાયો.'}
        </p>
      </div>

      {/* Guides List */}
      <div className="space-y-6">
        {caregiversData.map((guide) => (
          <div
            key={guide.id}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-6"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
                {guide.category.toUpperCase()} GUIDE
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                {guide.title[currentLang]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {guide.summary[currentLang]}
              </p>
            </div>

            {/* Core Action Points */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Key Caregiver Guidelines:
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {guide.keyPoints[currentLang].map((pt, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Say vs What to Avoid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {/* Say */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {currentLang === 'en' ? 'Helpful Things to Say' : currentLang === 'hi' ? 'क्या कहें (सहानुभूतिपूर्ण)' : 'શું કહેવું (પ્રેમપૂર્વક)'}
                </span>
                <ul className="space-y-2 text-xs text-emerald-950">
                  {guide.whatToSay[currentLang].map((phrase, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{phrase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Avoid */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
                <span className="text-xs font-bold text-rose-900 uppercase tracking-wide flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  {currentLang === 'en' ? 'Phrases That Harm / Invalidate' : currentLang === 'hi' ? 'क्या न कहें (हानिकारक ताने)' : 'શું ન કહેવું (ટોણાં)'}
                </span>
                <ul className="space-y-2 text-xs text-rose-950">
                  {guide.whatToAvoid[currentLang].map((phrase, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{phrase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
