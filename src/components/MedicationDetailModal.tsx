import React from 'react';
import { X, AlertTriangle, ShieldAlert } from 'lucide-react';
import { MedicationClass, Language } from '../types';
import { translations } from '../data/translations';

interface MedicationDetailModalProps {
  medication: MedicationClass | null;
  onClose: () => void;
  currentLang: Language;
}

export const MedicationDetailModal: React.FC<MedicationDetailModalProps> = ({
  medication,
  onClose,
  currentLang,
}) => {
  if (!medication) return null;
  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                PSYCHIATRIC MEDICATION CLASS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
              {medication.name[currentLang]}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Common Examples: {medication.commonExamples.join(', ')}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-stone-700 leading-relaxed text-sm">
          {/* MANDATORY WARNING BANNER */}
          <div className="p-4 bg-[#fef2f2] border border-[#fecaca] rounded-lg text-[#991b1b]">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-[#991b1b] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white text-[#991b1b] border border-[#fecaca]">
                  CRITICAL MEDICAL WARNING
                </span>
                <p className="font-semibold text-sm mt-1 text-[#991b1b] leading-relaxed">
                  {medication.mandatoryWarning[currentLang]}
                </p>
              </div>
            </div>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              {t.medications.indications}
            </h3>
            <p className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-stone-800 text-sm font-medium">
              {medication.indications[currentLang]}
            </p>
          </div>

          {/* Mechanism in Plain Language */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              {t.medications.mechanism}
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              {medication.mechanismPlain[currentLang]}
            </p>
          </div>

          {/* Common Side Effects */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              {t.medications.sideEffects}
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {medication.commonSideEffects[currentLang].map((se, i) => (
                <div key={i} className="p-2.5 rounded-lg border border-stone-200 bg-white flex items-start gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                  <span className="text-stone-800">{se}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Serious Adverse Effects */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#991b1b] mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#991b1b]" />
              <span>Important Adverse Effects Requiring Prompt Medical Attention</span>
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              {medication.seriousAdverseEffects[currentLang]}
            </p>
          </div>

          {/* Precautions & Monitoring */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                {t.medications.precautions}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {medication.importantPrecautions[currentLang]}
              </p>
            </div>
            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Why Medical Monitoring Is Required
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {medication.whyMonitoringNeeded[currentLang]}
              </p>
            </div>
          </div>

          {/* Misconceptions */}
          <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed">
            <strong className="text-stone-900">Common Misconception & Medical Fact:</strong> {medication.commonMisconceptions[currentLang]}
          </div>

          {/* References */}
          {medication.references.length > 0 && (
            <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 font-mono">
              <strong>Reference:</strong> {medication.references[0].citation}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            {t.common.lastReviewed}: {medication.lastReviewed} • {t.doctorName}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition cursor-pointer min-h-[44px]"
          >
            {currentLang === 'en' ? 'Close Guide' : currentLang === 'hi' ? 'मार्गदर्शिका बंद करें' : 'માર્ગદર્શિકા બંધ કરો'}
          </button>
        </div>
      </div>
    </div>
  );
};

