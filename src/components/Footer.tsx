import React from 'react';
import { ShieldCheck, HeartHandshake, Phone, Globe, AlertTriangle } from 'lucide-react';
import { Language, ActiveTab } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onTabChange: (tab: ActiveTab) => void;
  onOpenCrisis: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onTabChange,
  onOpenCrisis,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      {/* Top Crisis Reminder Bar */}
      <div className="bg-slate-950 px-4 py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-950/80 text-rose-300 border border-rose-800/60 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {currentLang === 'en'
                  ? 'Immediate Crisis Helpline (India)'
                  : currentLang === 'hi'
                  ? 'तत्काल मानसिक स्वास्थ्य हेल्पलाइन (भारत)'
                  : 'તાત્કાલિક માનસિક સ્વાસ્થ્ય હેલ્પલાઇન (ભારત)'}
              </p>
              <p className="text-slate-400 text-xs">
                Tele-MANAS: <span className="font-bold text-teal-300">14416</span> | Police & Ambulance: <span className="font-bold text-rose-300">112</span> (24x7, Toll-Free)
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCrisis}
            className="px-4 py-2 rounded-lg bg-rose-700 hover:bg-rose-600 text-white font-bold transition text-xs shadow-sm cursor-pointer"
          >
            {currentLang === 'en' ? 'Open Crisis Guide' : currentLang === 'hi' ? 'आपातकालीन मार्गदर्शिका' : 'ઇમરજન્સી માર્ગદર્શિકા'}
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Doctor Profile */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">{t.doctorName}</h3>
              <p className="text-[11px] text-teal-400 font-medium">MBBS, MD (Psychiatry)</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed text-xs">
            {currentLang === 'en'
              ? 'Evidence-based, ethical psychiatric public education dedicated to reducing stigma and empowering communities in India.'
              : currentLang === 'hi'
              ? 'प्रमाण-आधारित, नैतिक मानसिक स्वास्थ्य लोक शिक्षण, जिसका उद्देश्य समाज से भ्रांतियों को मिटाना और जागरूकता फैलाना है।'
              : 'પુરાવા-આધારિત, નૈતિક માનસિક શિક્ષણ, જે સમાજમાંથી અંધશ્રદ્ધા દૂર કરવા અને જાગૃતિ લાવવા માટે સમર્પિત છે.'}
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            NMC & GMC Registered Medical Practitioner
          </div>
        </div>

        {/* Col 2: Education Libraries */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            {currentLang === 'en' ? 'Educational Libraries' : currentLang === 'hi' ? 'शैक्षणिक विषय' : 'શૈક્ષણિક વિષયો'}
          </h4>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <button
                onClick={() => onTabChange('conditions')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.conditions}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('addiction')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.addiction}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('medications')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.medications}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('treatments')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.treatments}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('symptoms')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.symptoms}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Resources & Tools */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            {currentLang === 'en' ? 'Self-Help & Resources' : currentLang === 'hi' ? 'संसाधन व टूल' : 'સાધનો અને ટૂલ્સ'}
          </h4>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <button
                onClick={() => onTabChange('interactive')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.interactive} (PHQ-9 / GAD-7)
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('myths')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.myths}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('caregivers')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.caregivers}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('emergency')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.emergency}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('about')}
                className="hover:text-teal-300 transition cursor-pointer"
              >
                {t.nav.about}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Mandatory Disclaimer & Language */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{t.disclaimer.title}</span>
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            {currentLang === 'en'
              ? 'This portal is purely for educational purposes and mental health literacy in India. It does not provide individual diagnosis, prescription, or medical advice.'
              : currentLang === 'hi'
              ? 'यह पोर्टल केवल सार्वजनिक शिक्षा और जागरूकता के लिए है। यह व्यक्तिगत इलाज, निदान या ऑनलाइन प्रिस्क्रिप्शन प्रदान नहीं करता।'
              : 'આ પોર્ટલ ફક્ત જાહેર શિક્ષણ માટે છે. આ કોઈ વ્યક્તિગત નિદાન કે દવાઓનું પ્રિસ્ક્રિપ્શન આપતું નથી.'}
          </p>

          <div className="pt-2">
            <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">Select Language:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded text-xs transition cursor-pointer ${
                  currentLang === 'en' ? 'bg-teal-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1 rounded text-xs transition cursor-pointer ${
                  currentLang === 'hi' ? 'bg-teal-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => onLanguageChange('gu')}
                className={`px-2.5 py-1 rounded text-xs transition cursor-pointer ${
                  currentLang === 'gu' ? 'bg-teal-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Compliance */}
      <div className="bg-slate-950 px-4 py-4 border-t border-slate-800/80 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {t.doctorName}. Public Psychiatry Education Portal. All content evidence-based.</p>
          <p>Adheres strictly to the National Medical Commission (NMC) Medical Ethics Regulations.</p>
        </div>
      </div>
    </footer>
  );
};
