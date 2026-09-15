import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';
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
    <footer className="bg-white text-stone-700 border-t border-stone-200 text-sm">
      {/* Top Crisis Reminder Bar - Quiet, high contrast */}
      <div className="bg-[#fef2f2] px-4 py-3.5 border-b border-[#fecaca]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#991b1b] shrink-0" />
            <div>
              <p className="font-semibold text-[#991b1b] text-sm">
                {currentLang === 'en'
                  ? 'Immediate Crisis Helpline (India)'
                  : currentLang === 'hi'
                  ? 'तत्काल मानसिक स्वास्थ्य हेल्पलाइन (भारत)'
                  : 'તાત્કાલિક માનસિક સ્વાસ્થ્ય હેલ્પલાઇન (ભારત)'}
              </p>
              <p className="text-stone-700 text-xs mt-0.5">
                Tele-MANAS: <span className="font-bold text-[#1c2430]">14416</span> | Police & Ambulance: <span className="font-bold text-[#1c2430]">112</span> (24x7 Toll-Free)
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCrisis}
            className="px-4 py-2 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold transition text-xs min-h-[44px] cursor-pointer flex items-center"
          >
            {currentLang === 'en' ? 'Open Crisis Guide' : currentLang === 'hi' ? 'आपातकालीन मार्गदर्शिका' : 'ઇમરજન્સી માર્ગદર્શિકા'}
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Doctor Profile */}
        <div className="space-y-2 md:col-span-1">
          <h3 className="text-[#1c2430] font-semibold text-base">{t.doctorName}</h3>
          <p className="text-xs text-stone-600 font-medium">MBBS, MD (Psychiatry)</p>
          <p className="text-stone-600 text-xs leading-relaxed mt-2">
            {currentLang === 'en'
              ? 'Evidence-based, ethical psychiatric public education dedicated to reducing stigma and empowering communities in India.'
              : currentLang === 'hi'
              ? 'प्रमाण-आधारित, नैतिक मानसिक स्वास्थ्य लोक शिक्षण, जिसका उद्देश्य समाज से भ्रांतियों को मिटाना और जागरूकता फैलाना है।'
              : 'પુરાવા-આધારિત, નૈતિક માનસિક શિક્ષણ, જે સમાજમાંથી અંધશ્રદ્ધા દૂર કરવા અને જાગૃતિ લાવવા માટે સમર્પિત છે.'}
          </p>
          <p className="text-[11px] text-stone-500 font-mono pt-1">
            NMC Registered Medical Practitioner
          </p>
        </div>

        {/* Col 2: Education Libraries */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c2430]">
            {currentLang === 'en' ? 'Educational Libraries' : currentLang === 'hi' ? 'शैक्षणिक विषय' : 'શૈક્ષણિક વિષયો'}
          </h4>
          <ul className="space-y-1 text-xs text-stone-600">
            <li>
              <button
                onClick={() => onTabChange('conditions')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.conditions}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('addiction')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.addiction}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('treatments')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.treatments}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('symptoms')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.symptoms}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Resources & Tools */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c2430]">
            {currentLang === 'en' ? 'Resources & Articles' : currentLang === 'hi' ? 'संसाधन व लेख' : 'સાધનો અને લેખો'}
          </h4>
          <ul className="space-y-1 text-xs text-stone-600">
            <li>
              <button
                onClick={() => onTabChange('articles')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.articles}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('resources')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.resources}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('outreach')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.outreach}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('interactive')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.interactive} (PHQ-9 / GAD-7)
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('myths')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.myths}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('caregivers')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.caregivers}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('emergency')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.emergency}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('about')}
                className="hover:text-[#115e59] py-1 transition cursor-pointer text-left"
              >
                {t.nav.about}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Mandatory Disclaimer, Privacy & Language */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c2430] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-stone-600" />
            <span>{t.disclaimer.title}</span>
          </h4>
          <p className="text-stone-600 text-xs leading-relaxed">
            {currentLang === 'en'
              ? 'This portal is purely for educational purposes and mental health literacy in India. It does not provide individual diagnosis, prescription, or medical advice.'
              : currentLang === 'hi'
              ? 'यह पोर्टल केवल सार्वजनिक शिक्षा और जागरूकता के लिए है। यह व्यक्तिगत इलाज, निदान या ऑनलाइन प्रिस्क्रिप्शन प्रदान नहीं करता।'
              : 'આ પોર્ટલ ફક્ત જાહેર શિક્ષણ માટે છે. આ કોઈ વ્યક્તિગત નિદાન કે દવાઓનું પ્રિસ્ક્રિપ્શન આપતું નથી.'}
          </p>

          <p className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded border border-teal-100 leading-normal">
            🛡️ <strong>Privacy First:</strong> Zero tracking cookies, zero advertising pixels, and no visitor data collection. Your browsing is strictly confidential.
          </p>

          <div className="pt-2">
            <span className="text-xs text-stone-600 block mb-1 font-medium">Select Language:</span>
            <div className="flex items-center gap-1.5" role="group" aria-label="Footer language selector">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded text-xs transition cursor-pointer min-h-[44px] ${
                  currentLang === 'en' ? 'bg-[#115e59] text-white font-semibold' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-3 py-1.5 rounded text-xs transition cursor-pointer min-h-[44px] ${
                  currentLang === 'hi' ? 'bg-[#115e59] text-white font-semibold' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => onLanguageChange('gu')}
                className={`px-3 py-1.5 rounded text-xs transition cursor-pointer min-h-[44px] ${
                  currentLang === 'gu' ? 'bg-[#115e59] text-white font-semibold' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Compliance */}
      <div className="border-t border-stone-200 px-4 py-4 text-stone-500 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {t.doctorName}. Public Psychiatry Education Portal. All content evidence-based.</p>
          <p>Complies with National Medical Commission (NMC) Medical Ethics Regulations.</p>
        </div>
      </div>
    </footer>
  );
};

