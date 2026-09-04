import React from 'react';
import {
  Brain,
  Pill,
  HeartPulse,
  AlertCircle,
  HelpCircle,
  Users,
  Phone,
  ArrowRight,
  BookOpen,
  Search,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { Language, ActiveTab, Condition, SubstanceInfo } from '../types';
import { translations } from '../data/translations';
import { conditionsData } from '../data/conditions';

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
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* Hero Section: Quiet, dignified typography */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 space-y-6">
        <div className="space-y-3 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {t.home.heroTagline}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#1c2430]">
            {t.home.heroTitle}
          </h1>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            {t.home.heroDescription}
          </p>
        </div>

        {/* Immediate Crisis Notice Box */}
        <div className="p-4 rounded-xl bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Phone className="w-4 h-4 shrink-0 text-[#991b1b]" />
            <span>
              {currentLang === 'en'
                ? 'In acute emotional distress or crisis? Help is free, confidential, and 24x7.'
                : currentLang === 'hi'
                ? 'यदि आप या कोई परिजन गंभीर मानसिक संकट में हैं, तो तत्काल 24 घंटे सहायता उपलब्ध है।'
                : 'જો તમે કે તમારા સ્વજન ગંભીર માનસિક સંકટમાં હોવ, તો તાત્કાલિક સહાય ઉપલબ્ધ છે.'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:14416"
              className="px-3.5 py-2 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-semibold transition min-h-[44px] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Tele-MANAS: 14416</span>
            </a>
            <button
              onClick={onOpenCrisis}
              className="px-3 py-2 rounded-md text-xs font-semibold text-[#991b1b] hover:bg-rose-100 transition min-h-[44px] flex items-center"
            >
              {currentLang === 'en' ? 'All Crisis Numbers & 112' : currentLang === 'hi' ? 'सभी हेल्पलाइन व 112' : 'તમામ હેલ્પલાઇન અને ૧૧૨'}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onTabChange('conditions')}
            className="px-5 py-2.5 rounded-md bg-[#115e59] hover:bg-[#0f4f4a] text-white text-sm font-semibold transition flex items-center gap-2 cursor-pointer min-h-[44px]"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.home.exploreConditions}</span>
          </button>

          <button
            onClick={onOpenScreener}
            className="px-5 py-2.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-semibold border border-stone-300 transition flex items-center gap-2 cursor-pointer min-h-[44px]"
          >
            <Activity className="w-4 h-4 text-stone-600" />
            <span>{currentLang === 'en' ? 'Self-Reflection Tools' : currentLang === 'hi' ? 'आत्म-मूल्यांकन (PHQ-9 / GAD-7)' : 'આત્મ-મૂલ્યાંકન ટૂલ'}</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="px-4 py-2.5 rounded-md bg-white hover:bg-stone-50 text-stone-700 text-sm font-medium border border-stone-200 transition flex items-center gap-2 cursor-pointer min-h-[44px]"
          >
            <Search className="w-4 h-4 text-stone-500" />
            <span>{currentLang === 'en' ? 'Search All Topics' : currentLang === 'hi' ? 'विषय खोजें' : 'બધા વિષયો શોધો'}</span>
          </button>
        </div>
      </section>

      {/* Core Philosophy Banner: EDUCATE — DO NOT DIAGNOSE */}
      <section className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
        <div className="flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-[#115e59] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-semibold text-[#1c2430]">
              {t.home.corePhilosophy}
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.home.corePhilosophyDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Primary Educational Libraries Grid: Clean unified cards */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
            {currentLang === 'en' ? 'Educational Libraries' : currentLang === 'hi' ? 'शैक्षणिक विषय श्रेणियां' : 'શૈક્ષણિક વિષય શ્રેણીઓ'}
          </h2>
          <p className="text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Evidence-based psychiatric knowledge written in accessible language.'
              : currentLang === 'hi'
              ? 'डॉ. राघव सुथार द्वारा तैयार वैज्ञानिक और प्रमाण-आधारित मानसिक स्वास्थ्य ज्ञान'
              : 'ડૉ. રાઘવ સુથાર દ્વારા તૈયાર કરાયેલ વૈજ્ઞાનિક અને પુરાવા-આધારિત શિક્ષણ'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Conditions */}
          <div
            onClick={() => onTabChange('conditions')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.conditions}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Comprehensive guides on Depression, Bipolar, Anxiety, OCD, Schizophrenia, PTSD, and Geriatric Psychiatry.'
                  : currentLang === 'hi'
                  ? 'डिप्रेशन, बायपोलर, चिंता, ओसीडी, सिज़ोफ्रेनिया और बुजुर्गों की मानसिक समस्याओं की विस्तृत समझ।'
                  : 'ડિપ્રેશન, બાયપોલર, ચિંતા, ઓસીડી, સિઝોફ્રેનિયા અને વડીલોના માનસિક રોગોની સંપૂર્ણ માહિતી.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
              <span>{currentLang === 'en' ? 'Browse Conditions' : currentLang === 'hi' ? 'बीमारियां देखें' : 'બીમારીઓ જુઓ'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Addiction */}
          <div
            onClick={() => onTabChange('addiction')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.addiction}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Understanding addiction as a brain disease. Overdose first aid, alcohol, nicotine, cannabis, and opioids.'
                  : currentLang === 'hi'
                  ? 'नशा मस्तिष्क की बीमारी क्यों है? शराब, तंबाकू, गांजा व अफीम के दुष्प्रभाव, विड्रॉल व ओवरडोज सुरक्षा।'
                  : 'વ્યસન મગજનો રોગ કેમ છે? દારૂ, તમાકુ, ગાંજો અને ઓપિયોઇડ્સથી મુક્તિના તબીબી ઉપાયો.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
              <span>{currentLang === 'en' ? 'De-Addiction Medicine' : currentLang === 'hi' ? 'नशा मुक्ति मार्गदर्शन' : 'વ્યસન મુક્તિ માર્ગદર્શન'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Medications */}
          <div
            onClick={() => onTabChange('medications')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center">
                <Pill className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.medications}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Antidepressants, Antipsychotics, Mood Stabilizers, and Anxiolytics. Mechanisms, side effects, and strict safety rules.'
                  : currentLang === 'hi'
                  ? 'एंटीडिप्रेसेंट्स, एंटीसाइकोटिक्स और मूड स्टेबलाइजर्स कैसे काम करते हैं? दुष्प्रभाव और सुरक्षा नियम।'
                  : 'દવાઓ કેવી રીતે કામ કરે છે? આડઅસરો, સલામતીના નિયમો અને અંધશ્રદ્ધાનું નિવારણ.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
              <span>{currentLang === 'en' ? 'Medication Facts' : currentLang === 'hi' ? 'दवाओं की जानकारी' : 'દવાઓની માહિતી'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Treatments */}
          <div
            onClick={() => onTabChange('treatments')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.treatments}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Evidence-based psychotherapies: CBT, ERP for OCD, DBT, Supportive Counseling, and Family Therapy.'
                  : currentLang === 'hi'
                  ? 'मनोवैज्ञानिक थेरेपी: सीबीटी (CBT), ईआरपी (ERP), डीबीटी (DBT), पारिवारिक और युगल थेरेपी।'
                  : 'સાયકોથેરાપી: CBT, ERP, DBT, ફેમિલી થેરાપી અને કાઉન્સેલિંગની વૈજ્ઞાનિક પદ્ધતિઓ.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
              <span>{currentLang === 'en' ? 'Explore Therapies' : currentLang === 'hi' ? 'थेरेपी विधियां' : 'થેરાપી પદ્ધતિઓ'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 5: Myths */}
          <div
            onClick={() => onTabChange('myths')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.myths}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Debunking 10 harmful myths: willpower, medication addiction, split personality, and psychiatric stigma.'
                  : currentLang === 'hi'
                  ? '10 बड़ी भ्रांतियां बनाम सच: "कमजोरी", "दवाओं की लत", "पागलपन", और सिज़ोफ्रेनिया का सच।'
                  : '૧૦ મોટી ગેરમાન્યતાઓ સામે વૈજ્ઞાનિક સત્ય: માનસિક રોગ, નશો અને સામાજિક કલંક.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
              <span>{currentLang === 'en' ? 'Bust Mental Health Myths' : currentLang === 'hi' ? 'भ्रांतियां दूर करें' : 'માન્યતાઓ તપાસો'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 6: Caregivers */}
          <div
            onClick={() => onTabChange('caregivers')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.caregivers}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Practical communication guidance for families: what to say, what to avoid, preventing relapse and caregiver burnout.'
                  : currentLang === 'hi'
                  ? 'परिवारों के लिए जरूरी सलाह: क्या कहें और क्या न कहें, घर में तनाव घटाना और देखभालकर्ताओं का स्वास्थ्य।'
                  : 'પરિવાર માટે માર્ગદર્શન: શું કહેવું અને શું ન કહેવું, ક્લેશ ઘટાડવો અને વડીલોની સંભાળ.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
              <span>{currentLang === 'en' ? 'Caregiver Guidance' : currentLang === 'hi' ? 'देखभालकर्ताओं की मदद' : 'સંભાળ રાખનાર માટે'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Self-Reflection Banner (PHQ-9 / GAD-7) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {currentLang === 'en' ? 'Non-Diagnostic Reflection' : currentLang === 'hi' ? 'आत्म-अवलोकन' : 'આત્મ-મૂલ્યાંકન'}
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1c2430]">
            {currentLang === 'en'
              ? 'Educational Symptom Reflection (PHQ-9 & GAD-7)'
              : currentLang === 'hi'
              ? 'डिप्रेशन व चिंता लक्षण आत्म-अवलोकन (PHQ-9 व GAD-7)'
              : 'ડિપ્રેશન અને ચિંતાના લક્ષણોનું આત્મ-મૂલ્યાંકન'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {currentLang === 'en'
              ? 'Standardized psychological questionnaires used for education and tracking. Learn what your symptoms may signify and how to discuss them with a doctor.'
              : currentLang === 'hi'
              ? 'प्रश्नावली की सहायता से समझें कि आपके लक्षण क्या संकेत दे रहे हैं और डॉक्टर से इस विषय में कैसे बात करें।'
              : 'પ્રશ્નાવલિની મદદથી સમજો કે તમારા લક્ષણો શું દર્શાવે છે અને ડૉક્ટર સાથે કેવી રીતે ચર્ચા કરવી.'}
          </p>
        </div>

        <button
          onClick={onOpenScreener}
          className="px-5 py-2.5 rounded-md bg-[#115e59] hover:bg-[#0f4f4a] text-white font-semibold text-sm transition shrink-0 flex items-center gap-2 cursor-pointer min-h-[44px]"
        >
          <span>{currentLang === 'en' ? 'Start Reflection Tool' : currentLang === 'hi' ? 'टूल शुरू करें' : 'ટૂલ શરૂ કરો'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Featured Psychiatric Conditions Quick Shelf */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1c2430]">
              {currentLang === 'en' ? 'Frequently Researched Conditions' : currentLang === 'hi' ? 'सामान्य मानसिक विकार' : 'સામાન્ય માનસિક વિકૃતિઓ'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              {currentLang === 'en' ? 'Evidence-based overviews written for the public' : currentLang === 'hi' ? 'जनता के लिए निष्पक्ष वैज्ञानिक जानकारी' : 'જાહેર જનતા માટે સરળ ભાષામાં માર્ગદર્શન'}
            </p>
          </div>
          <button
            onClick={() => onTabChange('conditions')}
            className="text-xs sm:text-sm font-semibold text-[#115e59] hover:text-[#0f4f4a] transition flex items-center gap-1 cursor-pointer min-h-[44px]"
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
              className="p-5 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-xs text-stone-500 font-medium">
                  {cond.category}
                </span>
                <h4 className="font-semibold text-sm text-[#1c2430]">
                  {cond.name[currentLang]}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {cond.overview[currentLang]}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
                <span>{currentLang === 'en' ? 'Read Guide' : currentLang === 'hi' ? 'पढ़ें' : 'વાંચો'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Dr. Raghav Suthar Snippet */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-start gap-6">
        <div className="w-16 h-16 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center font-bold text-xl shrink-0 border border-stone-200">
          RS
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1c2430]">{t.doctorName}</h3>
            <span className="text-xs text-stone-500 font-medium">
              MBBS, MD (Psychiatry)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
            {currentLang === 'en'
              ? 'Consultant Psychiatrist registered under the National Medical Commission (NMC). This public education portal is maintained to provide scientifically validated, destigmatizing psychiatric information in English, Hindi, and Gujarati.'
              : currentLang === 'hi'
              ? 'राष्ट्रीय चिकित्सा आयोग (NMC) के अंतर्गत पंजीकृत कंसल्टेंट मनोचिकित्सक। यह पोर्टल अंग्रेजी, हिन्दी और गुजराती में प्रमाण-आधारित मानसिक स्वास्थ्य ज्ञान प्रदान करने के लिए समर्पित है।'
              : 'નેશનલ મેડિકલ કમિશન (NMC) હેઠળ નોંધાયેલ કન્સલ્ટન્ટ મનોચિકિત્સક. આ પોર્ટલ અંગ્રેજી, હિન્દી અને ગુજરાતીમાં પુરાવા-આધારિત જ્ઞાન પૂરું પાડે છે.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onTabChange('about')}
              className="text-xs font-semibold text-[#115e59] hover:underline cursor-pointer min-h-[44px] flex items-center"
            >
              {currentLang === 'en' ? 'Read Full Professional Profile & Ethics Compliance' : currentLang === 'hi' ? 'पूरा प्रोफाइल व आचार संहिता देखें' : 'સંપૂર્ણ પ્રોફાઇલ જુઓ'} →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

