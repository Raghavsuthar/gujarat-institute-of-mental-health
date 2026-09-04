import React from 'react';
import { X, Pill, AlertTriangle, ShieldAlert, CheckCircle2, ShieldCheck } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-300 border border-indigo-700/60">
                PSYCHIATRIC MEDICATION CLASS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {medication.name[currentLang]}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Common Examples: {medication.commonExamples.join(', ')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-700 leading-relaxed text-sm">
          {/* MANDATORY WARNING BANNER */}
          <div className="p-4 bg-rose-50 border-2 border-rose-300 rounded-xl text-rose-900">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-rose-200 text-rose-900">
                  CRITICAL MEDICAL WARNING
                </span>
                <p className="font-bold text-sm mt-1 text-rose-950">
                  {medication.mandatoryWarning[currentLang]}
                </p>
              </div>
            </div>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              {t.medications.indications}
            </h3>
            <p className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 text-sm font-medium">
              {medication.indications[currentLang]}
            </p>
          </div>

          {/* Mechanism in Plain Language */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              {t.medications.mechanism}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {medication.mechanismPlain[currentLang]}
            </p>
          </div>

          {/* Common Side Effects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {t.medications.sideEffects}
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {medication.commonSideEffects[currentLang].map((se, i) => (
                <div key={i} className="p-2.5 rounded-lg border border-slate-200 bg-white flex items-start gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>{se}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Serious Adverse Effects */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Important Adverse Effects Requiring Prompt Medical Attention</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {medication.seriousAdverseEffects[currentLang]}
            </p>
          </div>

          {/* Precautions & Monitoring */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                {t.medications.precautions}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {medication.importantPrecautions[currentLang]}
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                Why Medical Monitoring Is Required
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {medication.whyMonitoringNeeded[currentLang]}
              </p>
            </div>
          </div>

          {/* Misconceptions */}
          <div className="p-3.5 bg-slate-100 rounded-xl text-xs text-slate-700">
            <strong>Common Misconception & Medical Fact:</strong> {medication.commonMisconceptions[currentLang]}
          </div>

          {/* References */}
          {medication.references.length > 0 && (
            <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 font-mono">
              <strong>Reference:</strong> {medication.references[0].citation}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            {t.common.lastReviewed}: {medication.lastReviewed} • {t.doctorName}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition cursor-pointer"
          >
            {currentLang === 'en' ? 'Close Guide' : currentLang === 'hi' ? 'मार्गदर्शिका बंद करें' : 'માર્ગદર્શિકા બંધ કરો'}
          </button>
        </div>
      </div>
    </div>
  );
};
