import React, { useState } from 'react';
import { X, ShieldAlert, RotateCcw, Phone } from 'lucide-react';
import { Language } from '../types';
import { screenersData, ScreenerTool } from '../data/assessments';
import { translations } from '../data/translations';

interface ScreenerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenCrisis: () => void;
}

export const ScreenerModal: React.FC<ScreenerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenCrisis,
}) => {
  const [selectedToolId, setSelectedToolId] = useState<'phq9' | 'gad7'>('phq9');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;
  const t = translations[currentLang];
  const activeTool: ScreenerTool = screenersData.find((t) => t.id === selectedToolId) || screenersData[0];

  const handleAnswer = (questionId: number, val: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = activeTool.questions.length;
  const isComplete = answeredCount === totalQuestions;

  // Total score calculation safely typed
  let totalScore = 0;
  for (const key of Object.keys(answers)) {
    totalScore += answers[Number(key)] || 0;
  }

  // Check crisis question (Question 9 in PHQ-9)
  const isCrisisTriggered = selectedToolId === 'phq9' && typeof answers[9] === 'number' && answers[9] > 0;

  // Find interpretation safely
  const interpretation = activeTool.interpretations.find(
    (item) => totalScore >= item.minScore && totalScore <= item.maxScore
  ) || activeTool.interpretations[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-900/80 text-teal-300 border border-teal-700/60">
              {currentLang === 'en' ? 'Educational Self-Reflection' : currentLang === 'hi' ? 'शैक्षणिक आत्म-अवलोकन' : 'શૈક્ષણિક આત્મ-મૂલ્યાંકન'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1.5">
              {activeTool.name[currentLang]}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {activeTool.purpose[currentLang]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Screener Selector Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedToolId('phq9');
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedToolId === 'phq9'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              PHQ-9 (Depression Reflection)
            </button>
            <button
              onClick={() => {
                setSelectedToolId('gad7');
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedToolId === 'gad7'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              GAD-7 (Anxiety Reflection)
            </button>
          </div>

          <button
            onClick={handleReset}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* MANDATORY NON-DIAGNOSTIC DISCLAIMER */}
        <div className="p-3 bg-amber-50 border-b border-amber-200 text-xs text-amber-900 flex items-start gap-2 shrink-0">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{t.disclaimer.title}:</strong> {activeTool.disclaimer[currentLang]}
          </p>
        </div>

        {/* Scrollable Questions or Results */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {!showResults ? (
            <>
              {/* Question list */}
              <div className="space-y-4">
                {activeTool.questions.map((q, idx) => {
                  const currentVal = answers[q.id];
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border transition ${
                        q.isCrisisQuestion
                          ? 'border-rose-200 bg-rose-50/40'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 mb-3">
                        <span className="text-xs font-bold text-slate-400 mt-0.5">
                          #{idx + 1}
                        </span>
                        <p className="text-sm font-semibold text-slate-800 leading-snug">
                          {q.text[currentLang]}
                        </p>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {activeTool.frequencyOptions.map((opt) => {
                          const isSelected = currentVal === opt.value;
                          return (
                            <button
                              key={opt.value}
                              onClick={() => handleAnswer(q.id, opt.value)}
                              className={`p-2 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
                                isSelected
                                  ? 'bg-teal-600 text-white border-teal-600 font-bold shadow-xs'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <span>{opt.label[currentLang]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {answeredCount} of {totalQuestions} answered
                </span>
                <button
                  disabled={!isComplete}
                  onClick={() => setShowResults(true)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isComplete
                      ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {currentLang === 'en'
                    ? 'View Educational Reflection'
                    : currentLang === 'hi'
                    ? 'शैक्षणिक परिणाम देखें'
                    : 'શૈક્ષણિક પરિણામ જુઓ'}
                </button>
              </div>
            </>
          ) : (
            /* Results View */
            <div className="space-y-6">
              {/* Crisis Alert Banner if Question 9 is endorsed */}
              {isCrisisTriggered && (
                <div className="p-5 bg-rose-600 text-white rounded-xl shadow-lg space-y-3 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-6 h-6 text-amber-300 shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <h3 className="text-base font-bold">
                        {currentLang === 'en'
                          ? 'Immediate Crisis Support Is Here For You'
                          : currentLang === 'hi'
                          ? 'तत्काल मानसिक संकट सहायता उपलब्ध है'
                          : 'તાત્કાલિક સહાય ઉપલબ્ધ છે'}
                      </h3>
                      <p className="text-xs sm:text-sm text-rose-100 mt-1 leading-relaxed">
                        {currentLang === 'en'
                          ? 'You mentioned experiencing thoughts of death or hurting yourself. Please know that your life has tremendous value, and confidential medical support is available 24 hours a day.'
                          : currentLang === 'hi'
                          ? 'आपने खुद को चोट पहुंचाने या मृत्यु के विचारों का संकेत दिया है। आपका जीवन अत्यंत मूल्यवान है और निःशुल्क सरकारी सहायता 24 घंटे उपलब्ध है।'
                          : 'તમે પોતાને નુકસાન પહોંચાડવાના વિચારો દર્શાવ્યા છે. તમારું જીવન ખૂબ કિંમતી છે અને સહાય ચોવીસે કલાક ઉપલબ્ધ છે.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href="tel:14416"
                      className="px-4 py-2 rounded-lg bg-white text-rose-700 font-bold text-xs hover:bg-rose-50 transition shadow-sm inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Tele-MANAS (14416)</span>
                    </a>
                    <button
                      onClick={onOpenCrisis}
                      className="px-3 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs transition underline"
                    >
                      Open Emergency Guide
                    </button>
                  </div>
                </div>
              )}

              {/* Score Display Card */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Total Educational Score
                </span>
                <div className="text-4xl font-extrabold text-slate-900">
                  {totalScore} <span className="text-lg text-slate-400 font-normal">/ {totalQuestions * 3}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                  {interpretation.level[currentLang]}
                </div>
              </div>

              {/* Reflection Interpretation */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-sm font-bold text-slate-900">
                  {currentLang === 'en' ? 'What Your Responses Suggest:' : currentLang === 'hi' ? 'आपके उत्तर क्या दर्शाते हैं:' : 'તમારા જવાબો શું દર્શાવે છે:'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {interpretation.description[currentLang]}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                    {currentLang === 'en' ? 'Educational Guidance:' : currentLang === 'hi' ? 'शैक्षणिक मार्गदर्शन:' : 'શૈક્ષણિક માર્ગદર્શન:'}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {interpretation.recommendation[currentLang]}
                  </p>
                </div>
              </div>

              {/* Strictly Non-Diagnostic Clinical Note */}
              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                <p className="font-semibold mb-1">
                  Important Note on Medical Self-Reflection:
                </p>
                {currentLang === 'en'
                  ? 'Your responses suggest you may be experiencing symptoms commonly associated with mood or anxiety difficulties. This is NOT a diagnosis. Many medical and emotional conditions share these symptoms (including thyroid issues, anemia, stress, or grief). We encourage you to discuss these experiences with a qualified healthcare professional.'
                  : currentLang === 'hi'
                  ? 'आपके उत्तर दर्शाते हैं कि आप मूड या चिंता से जुड़े लक्षणों का अनुभव कर रहे हैं। यह कोई मेडिकल जांच या बीमारी का नाम नहीं है। कई शारीरिक कारणों (जैसे थायरॉयड या एनीमिया) से भी ऐसे लक्षण हो सकते हैं। कृपया किसी योग्य डॉक्टर से चर्चा करें।'
                  : 'તમારા જવાબો દર્શાવે છે કે તમે મૂડ કે ચિંતાના લક્ષણો અનુભવી રહ્યા છો. આ કોઈ ચોક્કસ નિદાન નથી. થાઇરોઇડ કે એનિમિયા જેવી શારીરિક બીમારીઓ પણ આવા લક્ષણો પેદા કરી શકે છે. નિષ્ણાત ડૉક્ટરની સલાહ લો.'}
              </div>

              {/* Reset / Retake */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
                >
                  {currentLang === 'en' ? 'Retake Reflection' : currentLang === 'hi' ? 'दोबारा करें' : 'ફરીથી શરૂ કરો'}
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition cursor-pointer"
                >
                  {currentLang === 'en' ? 'Finished' : currentLang === 'hi' ? 'समाप्त' : 'પૂર્ણ'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
