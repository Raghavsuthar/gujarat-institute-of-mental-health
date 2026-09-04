import React from 'react';
import {
  Brain,
  Pill,
  HeartPulse,
  AlertCircle,
  HelpCircle,
  Users,
  Sparkles,
  Phone,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Search,
  CheckCircle2,
  Activity,
  HeartHandshake
} from 'lucide-react';
import { Language, ActiveTab, Condition, SubstanceInfo } from '../types';
import { translations } from '../data/translations';
import { conditionsData } from '../data/conditions';
import { substancesData } from '../data/substances';

interface HomeViewProps {
  currentLang: Language;
  onTabChange: (tab: ActiveTab) => void;
  onSelectCondition: (item: Condition) => void;
  onSelectSubstance: (item: SubstanceInfo) => void;
  onOpenSearch: () => void;
  onOpenCrisis: () => void;
  onOpenScreener: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentLang,
  onTabChange,
  onSelectCondition,
  onSelectSubstance,
  onOpenSearch,
  onOpenCrisis,
  onOpenScreener,
}) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-10 md:p-14 shadow-xl border border-slate-700/60">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-600/50 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.home.heroTagline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            {t.home.heroTitle}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            {t.home.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onTabChange('conditions')}
              className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold transition shadow-md flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.home.exploreConditions}</span>
            </button>

            <button
              onClick={onOpenSearch}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-600 transition flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span>{currentLang === 'en' ? 'Search All Topics' : currentLang === 'hi' ? 'विषय खोजें' : 'બધા વિષયો શોધો'}</span>
            </button>

            <button
              onClick={onOpenCrisis}
              className="px-4 py-3 rounded-xl bg-rose-900/60 hover:bg-rose-800/80 text-rose-200 text-xs sm:text-sm font-semibold border border-rose-700/60 transition flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-rose-300" />
              <span>{currentLang === 'en' ? 'Crisis Helplines (14416)' : currentLang === 'hi' ? 'हेल्पलाइन (14416)' : 'હેલ્પલાઇન (૧૪૪૧૬)'}</span>
            </button>
          </div>
        </div>

        {/* Decorative subtle background gradient aura */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Core Philosophy Banner: EDUCATE — DO NOT DIAGNOSE */}
      <section className="p-6 rounded-2xl bg-teal-50 border border-teal-200/80 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-teal-600 text-white shrink-0 mt-0.5 shadow-sm">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-teal-950">
              {t.home.corePhilosophy}
            </h2>
            <p className="text-xs sm:text-sm text-teal-900/90 leading-relaxed max-w-4xl">
              {t.home.corePhilosophyDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Primary Educational Libraries Grid */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {currentLang === 'en' ? 'Explore Educational Libraries' : currentLang === 'hi' ? 'शैक्षणिक विषय श्रेणियां' : 'શૈક્ષણિક વિષય શ્રેણીઓ'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {currentLang === 'en'
                ? 'Curated, scientifically rigorous psychiatric education by Dr. Raghav Suthar'
                : currentLang === 'hi'
                ? 'डॉ. राघव सुथार द्वारा तैयार वैज्ञानिक और प्रमाण-आधारित मानसिक स्वास्थ्य ज्ञान'
                : 'ડૉ. રાઘવ સુથાર દ્વારા તૈયાર કરાયેલ વૈજ્ઞાનિક અને પુરાવા-આધારિત શિક્ષણ'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1: Conditions */}
          <div
            onClick={() => onTabChange('conditions')}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-teal-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition">
                {t.nav.conditions}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {currentLang === 'en'
                  ? 'Comprehensive guides on Depression, Bipolar, Anxiety, OCD, Schizophrenia, PTSD, and Geriatric Psychiatry.'
                  : currentLang === 'hi'
                  ? 'डिप्रेशन, बायपोलर, चिंता, ओसीडी, सिज़ोफ्रेनिया और बुजुर्गों की मानसिक समस्याओं की विस्तृत समझ।'
                  : 'ડિપ્રેશન, બાયપોલર, ચિંતા, ઓસીડી, સિઝોફ્રેનિયા અને વડીલોના માનસિક રોગોની સંપૂર્ણ માહિતી.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
              <span>{currentLang === 'en' ? 'Browse Conditions' : currentLang === 'hi' ? 'बीमारियां देखें' : 'બીમારીઓ જુઓ'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 2: Addiction */}
          <div
            onClick={() => onTabChange('addiction')}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-800 transition">
                {t.nav.addiction}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {currentLang === 'en'
                  ? 'Understanding addiction as a brain disease. Overdose first aid, alcohol, nicotine, cannabis, and opioids.'
                  : currentLang === 'hi'
                  ? 'नशा मस्तिष्क की बीमारी क्यों है? शराब, तंबाकू, गांजा व अफीम के दुष्प्रभाव, विड्रॉल व ओवरडोज सुरक्षा।'
                  : 'વ્યસન મગજનો રોગ કેમ છે? દારૂ, તમાકુ, ગાંજો અને ઓપિયોઇડ્સથી મુક્તિના તબીબી ઉપાયો.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>{currentLang === 'en' ? 'De-Addiction Medicine' : currentLang === 'hi' ? 'नशा मुक्ति मार्गदर्शन' : 'વ્યસન મુક્તિ માર્ગદર્શન'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 3: Medications */}
          <div
            onClick={() => onTabChange('medications')}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Pill className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-700 transition">
                {t.nav.medications}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {currentLang === 'en'
                  ? 'Antidepressants, Antipsychotics, Mood Stabilizers, and Anxiolytics. Mechanisms, side effects, and strict safety rules.'
                  : currentLang === 'hi'
                  ? 'एंटीडिप्रेसेंट्स, एंटीसाइकोटिक्स और मूड स्टेबलाइजर्स कैसे काम करते हैं? दुष्प्रभाव और सुरक्षा नियम।'
                  : 'દવાઓ કેવી રીતે કામ કરે છે? આડઅસરો, સલામતીના નિયમો અને અંધશ્રદ્ધાનું નિવારણ.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-700">
              <span>{currentLang === 'en' ? 'Medication Facts' : currentLang === 'hi' ? 'दवाओं की जानकारी' : 'દવાઓની માહિતી'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 4: Treatments & Psychotherapy */}
          <div
            onClick={() => onTabChange('treatments')}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition">
                {t.nav.treatments}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {currentLang === 'en'
                  ? 'Evidence-based psychotherapies: CBT, ERP for OCD, DBT, Supportive Counseling, and Family Therapy.'
                  : currentLang === 'hi'
                  ? 'मनोवैज्ञानिक थेरेपी: सीबीटी (CBT), ईआरपी (ERP), डीबीटी (DBT), पारिवारिक और युगल थेरेपी।'
                  : 'સાયકોથેરાપી: CBT, ERP, DBT, ફેમિલી થેરાપી અને કાઉન્સેલિંગની વૈજ્ઞાનિક પદ્ધતિઓ.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>{currentLang === 'en' ? 'Explore Therapies' : currentLang === 'hi' ? 'थेरेपी विधियां' : 'થેરાપી પદ્ધતિઓ'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 5: Myths vs Facts */}
          <div
            onClick={() => onTabChange('myths')}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-purple-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-700 transition">
                {t.nav.myths}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {currentLang === 'en'
                  ? 'Debunking 10 harmful myths: willpower, medication addiction, split personality, and psychiatric stigma.'
                  : currentLang === 'hi'
                  ? '10 बड़ी भ्रांतियां बनाम सच: "कमजोरी", "दवाओं की लत", "पागलपन", और सिज़ोफ्रेनिया का सच।'
                  : '૧૦ મોટી ગેરમાન્યતાઓ સામે વૈજ્ઞાનિક સત્ય: માનસિક રોગ, નશો અને સામાજિક કલંક.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-700">
              <span>{currentLang === 'en' ? 'Bust Mental Health Myths' : currentLang === 'hi' ? 'भ्रांतियां दूर करें' : 'માન્યતાઓ તપાસો'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 6: For Families & Caregivers */}
          <div
            onClick={() => onTabChange('caregivers')}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition">
                {t.nav.caregivers}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {currentLang === 'en'
                  ? 'Practical communication guidance for families: what to say, what to avoid, preventing relapse and caregiver burnout.'
                  : currentLang === 'hi'
                  ? 'परिवारों के लिए जरूरी सलाह: क्या कहें और क्या न कहें, घर में तनाव घटाना और देखभालकर्ताओं का स्वास्थ्य।'
                  : 'પરિવાર માટે માર્ગદર્શન: શું કહેવું અને શું ન કહેવું, ક્લેશ ઘટાડવો અને વડીલોની સંભાળ.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>{currentLang === 'en' ? 'Caregiver Guidance' : currentLang === 'hi' ? 'देखभालकर्ताओं की मदद' : 'સંભાળ રાખનાર માટે'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Self-Reflection Banner (PHQ-9 / GAD-7) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg border border-slate-800">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-900/80 text-teal-300 text-xs font-bold border border-teal-700/60">
            <Activity className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Non-Diagnostic Reflection' : currentLang === 'hi' ? 'आत्म-अवलोकन' : 'આત્મ-મૂલ્યાંકન'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {currentLang === 'en'
              ? 'Educational Symptom Reflection (PHQ-9 & GAD-7)'
              : currentLang === 'hi'
              ? 'डिप्रेशन व चिंता लक्षण आत्म-अवलोकन (PHQ-9 व GAD-7)'
              : 'ડિપ્રેશન અને ચિંતાના લક્ષણોનું આત્મ-મૂલ્યાંકન'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? 'Standardized psychological questionnaires used for education and tracking. Learn what your symptoms may signify and how to discuss them with a doctor.'
              : currentLang === 'hi'
              ? 'प्रश्नावली की सहायता से समझें कि आपके लक्षण क्या संकेत दे रहे हैं और डॉक्टर से इस विषय में कैसे बात करें।'
              : 'પ્રશ્નાવલિની મદદથી સમજો કે તમારા લક્ષણો શું દર્શાવે છે અને ડૉક્ટર સાથે કેવી રીતે ચર્ચા કરવી.'}
          </p>
        </div>

        <button
          onClick={onOpenScreener}
          className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm transition shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span>{currentLang === 'en' ? 'Start Reflection Tool' : currentLang === 'hi' ? 'टूल शुरू करें' : 'ટૂલ શરૂ કરો'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Featured Psychiatric Conditions Quick Shelf */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {currentLang === 'en' ? 'Frequently Researched Conditions' : currentLang === 'hi' ? 'सामान्य मानसिक विकार' : 'સામાન્ય માનસિક વિકૃતિઓ'}
            </h3>
            <p className="text-xs text-slate-500">
              {currentLang === 'en' ? 'Evidence-based overviews written for the public' : currentLang === 'hi' ? 'जनता के लिए निष्पक्ष वैज्ञानिक जानकारी' : 'જાહેર જનતા માટે સરળ ભાષામાં માર્ગદર્શન'}
            </p>
          </div>
          <button
            onClick={() => onTabChange('conditions')}
            className="text-xs font-bold text-teal-700 hover:text-teal-900 transition flex items-center gap-1 cursor-pointer"
          >
            <span>{currentLang === 'en' ? 'View All 8 Guides' : currentLang === 'hi' ? 'सभी 8 देखें' : 'તમામ ૮ જુઓ'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditionsData.slice(0, 4).map((cond) => (
            <div
              key={cond.id}
              onClick={() => onSelectCondition(cond)}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-sm transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 px-2 py-0.5 rounded bg-teal-50">
                  {cond.category}
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-2 group-hover:text-teal-700 transition line-clamp-1">
                  {cond.name[currentLang]}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {cond.overview[currentLang]}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                <span>{currentLang === 'en' ? 'Read Guide' : currentLang === 'hi' ? 'पढ़ें' : 'વાંચો'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Dr. Raghav Suthar Snippet */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-inner">
          RS
        </div>
        <div className="space-y-2 flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h3 className="text-xl font-bold text-slate-900">{t.doctorName}</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
              MBBS, MD (Psychiatry)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {currentLang === 'en'
              ? 'Consultant Psychiatrist registered under the National Medical Commission (NMC). This public education portal is maintained to provide scientifically validated, destigmatizing psychiatric information in English, Hindi, and Gujarati.'
              : currentLang === 'hi'
              ? 'राष्ट्रीय चिकित्सा आयोग (NMC) के अंतर्गत पंजीकृत कंसल्टेंट मनोचिकित्सक। यह पोर्टल अंग्रेजी, हिन्दी और गुजराती में प्रमाण-आधारित मानसिक स्वास्थ्य ज्ञान प्रदान करने के लिए समर्पित है।'
              : 'નેશનલ મેડિકલ કમિશન (NMC) હેઠળ નોંધાયેલ કન્સલ્ટન્ટ મનોચિકિત્સક. આ પોર્ટલ અંગ્રેજી, હિન્દી અને ગુજરાતીમાં પુરાવા-આધારિત જ્ઞાન પૂરું પાડે છે.'}
          </p>
          <div className="pt-1">
            <button
              onClick={() => onTabChange('about')}
              className="text-xs font-bold text-teal-700 hover:text-teal-900 underline cursor-pointer"
            >
              {currentLang === 'en' ? 'Read Full Professional Profile & Ethics Compliance' : currentLang === 'hi' ? 'पूरा प्रोफाइल व आचार संहिता देखें' : 'સંપૂર્ણ પ્રોફાઇલ જુઓ'} →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
