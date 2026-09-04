import React from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DisclaimerBannerProps {
  currentLang: Language;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ currentLang }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const t = translations[currentLang];

  return (
    <aside aria-label="Medical Disclaimer" className="bg-amber-50 border-b border-amber-200 text-amber-950 transition">
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs uppercase tracking-wide px-2 py-0.5 bg-amber-200/80 text-amber-900 rounded border border-amber-300">
                  {t.disclaimer.title}
                </span>
                <span className="text-xs font-semibold text-amber-900">
                  {currentLang === 'en'
                    ? 'Educational Resource — Not Medical Advice or Diagnosis'
                    : currentLang === 'hi'
                    ? 'शैक्षणिक संसाधन — यह मेडिकल सलाह या जांच नहीं है'
                    : 'શૈક્ષણિક સાધન — આ કોઈ તબીબી સલાહ કે નિદાન નથી'}
                </span>
              </div>
              {!collapsed && (
                <p className="mt-1 text-xs sm:text-sm text-amber-900 leading-relaxed max-w-5xl">
                  {t.disclaimer.banner}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-amber-800 hover:text-amber-950 p-1 rounded hover:bg-amber-100 transition shrink-0 cursor-pointer"
            aria-label={collapsed ? 'Expand disclaimer' : 'Collapse disclaimer'}
          >
            {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </aside>
  );
};
