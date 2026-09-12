import React from 'react';
import { Link } from 'react-router-dom';
import { X, AlertTriangle, ShieldAlert, ArrowRight, Info } from 'lucide-react';
import { MedicationClass, Language, ShareCardData } from '../types';
import { conditionsData } from '../data/conditions';
import { translations } from '../data/translations';
import { SocialShareBar } from './SocialShareBar';
import { AudioReadAloud } from './AudioReadAloud';
import { YouTubeEmbed } from './YouTubeEmbed';
import { CategoryIllustration, NeurotransmitterSynapseDiagram } from './visuals';

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

  const cardData: ShareCardData = {
    type: 'medication',
    kind: 'medication',
    title: medication.name[currentLang],
    category: 'PSYCHOTROPIC MEDICATION GUIDE',
    keyPoints: [
      medication.indications[currentLang],
      medication.mechanismPlain[currentLang],
      medication.mandatoryWarning[currentLang],
    ],
    points: [
      medication.indications[currentLang],
      medication.mechanismPlain[currentLang],
      medication.mandatoryWarning[currentLang],
    ],
    path: `medications/${medication.id}`,
  };

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

        {/* Category Educational Illustration Banner */}
        <div className="w-full border-b border-stone-200 bg-stone-50 shrink-0">
          <CategoryIllustration
            category="medications"
            className="w-full h-32 sm:h-40"
            ariaLabel={`Educational clinical illustration for ${medication.name[currentLang]}`}
          />
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-stone-700 leading-relaxed text-sm">
          {/* Audio Read-Aloud & Fast Sharing */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <AudioReadAloud
              text={`${medication.name[currentLang]}. ${medication.mechanismPlain[currentLang]}. Warning: ${medication.mandatoryWarning[currentLang]}`}
              currentLang={currentLang}
              title={medication.name[currentLang]}
            />
            <SocialShareBar
              title={medication.name[currentLang]}
              subtitle={medication.indications[currentLang]}
              path={`medications/${medication.id}`}
              currentLang={currentLang}
              variant="compact"
            />
          </div>

          {/* Educational Video Embed if curated */}
          {medication.youtubeVideoId && (
            <div className="my-2">
              <YouTubeEmbed
                videoId={medication.youtubeVideoId}
                title={medication.name[currentLang]}
                currentLang={currentLang}
              />
            </div>
          )}

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
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              {t.medications.mechanism}
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              {medication.mechanismPlain[currentLang]}
            </p>
            <NeurotransmitterSynapseDiagram currentLang={currentLang} className="mt-3" />
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

          {/* Discontinuation & Safe Tapering Guidance */}
          {medication.discontinuationGuidance && (
            <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg text-xs sm:text-sm">
              <h4 className="font-semibold text-amber-950 uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-800" />
                <span>
                  {currentLang === 'hi'
                    ? 'दवा बंद करने और धीरे-धीरे कम करने का सुरक्षित नियम'
                    : currentLang === 'gu'
                    ? 'દવા બંધ કરવા અને ઘટાડવાની સુરક્ષિત રીત'
                    : 'Safe Discontinuation & Step-Down Tapering Guidance'}
                </span>
              </h4>
              <p className="text-amber-900 leading-relaxed">
                {medication.discontinuationGuidance[currentLang]}
              </p>
            </div>
          )}

          {/* Misconceptions */}
          <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed">
            <strong className="text-stone-900">Common Misconception & Medical Fact:</strong> {medication.commonMisconceptions[currentLang]}
          </div>

          {/* Illustrative Case Vignette */}
          {medication.illustrativeExample && (
            <div className="p-4 sm:p-5 rounded-xl bg-teal-50/40 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-semibold text-xs">
                <span className="w-2 h-2 rounded-full bg-[#115e59]" />
                <span>
                  {currentLang === 'hi'
                    ? 'काल्पनिक केस उदाहरण (दवा कैसे मदद करती है)'
                    : currentLang === 'gu'
                    ? 'કાલ્પનિક કેસ ઉદાહરણ (દવા કેવી રીતે મદદ કરે છે)'
                    : 'Illustrative Clinical Vignette (How Medication Helps)'}
                </span>
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                "{medication.illustrativeExample[currentLang]}"
              </p>
              <p className="text-[11px] text-stone-500 border-t border-teal-100/60 pt-2 font-medium">
                {currentLang === 'hi'
                  ? 'ℹ️ यह एक काल्पनिक, समझाने के उद्देश्य से बनाया गया उदाहरण है — कोई वास्तविक मरीज नहीं।'
                  : currentLang === 'gu'
                  ? 'ℹ️ આ સમજૂતી માટેનું એક કાલ્પનિક ઉદાહરણ છે — કોઈ વાસ્તવિક દર્દી નથી.'
                  : 'ℹ️ This is a fictional, illustrative clinical example — not a real patient.'}
              </p>
            </div>
          )}

          {/* Related Clinical Conditions Cross-Links */}
          {medication.relatedIds && medication.relatedIds.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {currentLang === 'en' ? 'Related Clinical Conditions' : currentLang === 'hi' ? 'संबंधित मानसिक स्वास्थ्य स्थितियां' : 'સંબંધિત માનસિક સ્વાસ્થ્ય સ્થિતિઓ'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {medication.relatedIds.map((relId) => {
                  const matchedCondition = conditionsData.find(
                    (c) => c.id === relId || c.slug === relId
                  );
                  if (matchedCondition) {
                    return (
                      <Link
                        key={relId}
                        to={`/${currentLang}/conditions/${matchedCondition.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-teal-200 bg-teal-50/50 hover:bg-teal-100 text-teal-900 text-xs font-medium transition cursor-pointer"
                      >
                        <span>{matchedCondition.name[currentLang]}</span>
                        <ArrowRight className="w-3 h-3 text-teal-700" />
                      </Link>
                    );
                  }
                  return (
                    <span
                      key={relId}
                      className="inline-flex items-center px-2.5 py-1 rounded-md border border-stone-200 bg-stone-50 text-stone-700 text-xs font-medium capitalize"
                    >
                      {relId.replace(/-/g, ' ')}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* References */}
          {medication.references && medication.references.length > 0 && (
            <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 font-mono space-y-1">
              <strong className="text-stone-700">Scientific Guidelines & References:</strong>
              <ul className="space-y-0.5 list-disc list-inside">
                {medication.references.map((ref, i) => (
                  <li key={i}>{ref.citation}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Share Bar with Image Card */}
          <SocialShareBar
            title={medication.name[currentLang]}
            subtitle={medication.indications[currentLang]}
            path={`medications/${medication.id}`}
            currentLang={currentLang}
            cardData={cardData}
          />
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

