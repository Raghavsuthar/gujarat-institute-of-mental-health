import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Language, MythFact } from '../types';
import { mythsData } from '../data/myths';
import { translations } from '../data/translations';

interface MythsViewProps {
  currentLang: Language;
}

export const MythsView: React.FC<MythsViewProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const t = translations[currentLang];

  const categories = [
    { id: 'all', label: currentLang === 'en' ? 'All Myths' : currentLang === 'hi' ? 'सभी भ्रांतियां' : 'બધી માન્યતાઓ' },
    { id: 'general', label: currentLang === 'en' ? 'Stigma & Weakness' : currentLang === 'hi' ? 'मानसिक कमजोरी' : 'મનની નબળાઈ' },
    { id: 'medications', label: currentLang === 'en' ? 'Medication Myths' : currentLang === 'hi' ? 'दवाओं का सच' : 'દવાઓનું સત્ય' },
    { id: 'addiction', label: currentLang === 'en' ? 'Addiction & Willpower' : currentLang === 'hi' ? 'नशा व इच्छाशक्ति' : 'વ્યસન' },
    { id: 'therapy', label: currentLang === 'en' ? 'Psychotherapy' : currentLang === 'hi' ? 'थेरेपी' : 'થેરાપી' },
    { id: 'children', label: currentLang === 'en' ? 'Child Psychiatry' : currentLang === 'hi' ? 'बच्चों का स्वास्थ्य' : 'બાળકોનું સ્વાસ્થ્ય' },
  ];

  const filteredMyths = mythsData.filter(
    (m) => selectedCategory === 'all' || m.category === selectedCategory
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Public Stigma Eradication' : currentLang === 'hi' ? 'सामाजिक भ्रांतियों का निवारण' : 'ગેરમાન્યતાઓનું નિવારણ'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.nav.myths}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Stigma and misinformation prevent millions of people in India from seeking timely medical care for psychiatric conditions. Here are the 10 most common myths analyzed with medical facts.'
            : currentLang === 'hi'
            ? 'गलतफहमियां और सामाजिक झिझक लाखों लोगों को समय पर डॉक्टर के पास जाने से रोकती हैं। यहां 10 मुख्य भ्रांतियों का वैज्ञानिक सच प्रस्तुत है।'
            : 'ગેરમાન્યતાઓ અને સામાજિક સંકોચ લાખો લોકોને સારવાર લેતા રોકે છે. અહીં ૧૦ મુખ્ય અંધશ્રદ્ધાઓ સામે સાચું તબીબી સત્ય રજૂ કરેલ છે.'}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Myths Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {filteredMyths.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition"
            >
              <div className="space-y-3">
                {/* The Myth */}
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 px-1.5 py-0.5 rounded bg-rose-100">
                      COMMON MYTH
                    </span>
                    <p className="text-sm font-semibold text-rose-950 mt-1">
                      "{item.myth[currentLang]}"
                    </p>
                  </div>
                </div>

                {/* The Medical Fact */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 px-1.5 py-0.5 rounded bg-emerald-100">
                      MEDICAL FACT
                    </span>
                    <p className="text-sm font-bold text-emerald-950 mt-1">
                      {item.fact[currentLang]}
                    </p>
                  </div>
                </div>

                {/* Scientific Explanation */}
                <div className="pt-2">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Detailed Scientific Explanation' : 'Read Detailed Scientific Explanation'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed animate-fade-in">
                      {item.explanation[currentLang]}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
