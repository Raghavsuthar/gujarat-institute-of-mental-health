import React, { useEffect } from 'react';
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
  ShieldCheck,
  FileText,
  BookmarkCheck,
  Printer,
  GraduationCap,
  Heart
} from 'lucide-react';
import { Language, ActiveTab, Condition, SubstanceInfo } from '../types';
import { translations } from '../data/translations';
import { conditionsData } from '../data/conditions';
import { updatePageSEO } from '../utils/seo';
import { MythOfTheDay } from '../components/MythOfTheDay';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { CategoryBadge } from '../components/CategoryBadge';
import { getCategoryTheme } from '../data/categoryThemes';
import { PortalHeroVisual } from '../components/visuals';

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

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en'
        ? 'Public Psychiatry Education Portal'
        : currentLang === 'hi'
        ? 'जन मनोरोग शिक्षा पोर्टल'
        : 'જાહેર મનોચિકિત્સા શિક્ષણ પોર્ટલ',
      description: currentLang === 'en'
        ? 'Evidence-based psychiatric education for patients and families in India. Conditions, medications, treatments, and helplines in English, Hindi, and Gujarati.'
        : currentLang === 'hi'
        ? 'डॉ. राघव सुथार द्वारा मानसिक स्वास्थ्य, विकार, दवाएं और उपचार पर प्रमाण-आधारित निःशुल्क जानकारी।'
        : 'ડૉ. રાઘવ સુથાર દ્વારા માનસિક સ્વાસ્થ્ય, દવાઓ અને સારવાર વિશે પુરાવા-આધારિત માહિતી.',
      path: '',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* Hero Section: The single bold, vivid moment anchoring the portal */}
      <section className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden">
        {/* Fine Top Accent Line: Nilgiri Teal to Marigold to Jamun Plum */}
        <div className="h-1 w-full bg-gradient-to-r from-[#115e59] via-[#b86b26] to-[#5e4a72]" aria-hidden="true" />

        <div className="p-6 sm:p-10 space-y-6">
          {/* Header Typography & Culturally Grounded Credential Badges */}
          <div className="space-y-3.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#fdf7ed] text-[#9a5212] border border-[#f5dcb7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b86b26]" aria-hidden="true" />
                {t.home.heroTagline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#f0fbf9] text-[#0d5d56] border border-[#c6ece6]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#115e59]" />
                {currentLang === 'en' ? 'Evidence-Based Public Education' : currentLang === 'hi' ? 'प्रमाण-आधारित जन शिक्षा' : 'પુરાવા-આધારિત જાહેર શિક્ષણ'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#1c2430]">
              {t.home.heroTitle}
            </h1>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              {t.home.heroDescription}
            </p>
          </div>

          {/* Central Vivid Visual Moment: Dawn Sanctuary Artwork */}
          <PortalHeroVisual currentLang={currentLang} className="w-full h-40 sm:h-52 md:h-60" />

          {/* Immediate Crisis Notice Box: Strictly Reserved Emergency Treatment */}
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
          <div className="flex flex-wrap items-center gap-3 pt-1">
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
        </div>
      </section>

      {/* Core Philosophy Banner */}
      <section className="p-6 rounded-xl bg-white border border-stone-200 space-y-2">
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

      {/* Myth of the Day: Daily Shareable Destigmatization */}
      <MythOfTheDay
        currentLang={currentLang}
        onNavigateToMyths={() => onTabChange('myths')}
      />

      {/* Primary Educational Libraries Grid: Intentional, cohesive wayfinding icons */}
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
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f0fbf9] text-[#0d5d56] border border-[#c6ece6] flex items-center justify-center">
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
            </div>
          </div>

          {/* Card: Child & Adolescent Mental Health */}
          <div
            onClick={() => onTabChange('child-psychiatry')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-sky-500 transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.childPsychiatry}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Evidence-based guidance for parents & teachers: ADHD, Autism, Exam Anxiety, Learning, Tech Overuse & School Refusal.'
                  : currentLang === 'hi'
                  ? 'माता-पिता व शिक्षकों हेतु मार्गदर्शन: एडीएचडी, ऑटिज्म, परीक्षा तनाव, सीखने के विकार और मोबाइल की लत।'
                  : 'માતા-પિતા અને શિક્ષકો માટે માર્ગદર્શન: ADHD, ઓટિઝમ, પરીક્ષાનો ડર, સ્કૂલ જવાનો ડર અને મોબાઈલની લત.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-sky-700">
              <span>{currentLang === 'en' ? 'Child Psychiatry Guide' : currentLang === 'hi' ? 'बाल मनोरोग मार्गदर्शिका' : 'બાળ મનોચિકિત્સા માર્ગદર્શિકા'}</span>
            </div>
          </div>

          {/* Card: Women's Mental Health */}
          <div
            onClick={() => onTabChange('womens-mental-health')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-rose-500 transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.womensMentalHealth}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Perinatal depression, postpartum psychosis, PMDD, perimenopause, PCOS, caregiver burden, and gender-informed care.'
                  : currentLang === 'hi'
                  ? 'प्रसवोत्तर अवसाद, पीएमडीडी, रजोनिवृत्ति (मेनोपॉज), पीसीओएस और महिलाओं के विशिष्ट मानसिक स्वास्थ्य की समझ।'
                  : 'ગર્ભાવસ્થા અને પ્રસૂતિ પછીનું ડિપ્રેશન, PMDD, મેનોપોઝ, PCOS અને મહિલા માનસિક સ્વાસ્થ્ય માર્ગદર્શન.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-rose-700">
              <span>{currentLang === 'en' ? "Women's Health Guide" : currentLang === 'hi' ? 'महिला स्वास्थ्य मार्गदर्शिका' : 'મહિલા સ્વાસ્થ્ય માર્ગદર્શિકા'}</span>
            </div>
          </div>

          {/* Card 2: Addiction */}
          <div
            onClick={() => onTabChange('addiction')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#b86b26] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#fdf7ed] text-[#9a5212] border border-[#f5dcb7] flex items-center justify-center">
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
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#9a5212]">
              <span>{currentLang === 'en' ? 'De-Addiction Medicine' : currentLang === 'hi' ? 'नशा मुक्ति मार्गदर्शन' : 'વ્યસન મુક્તિ માર્ગદર્શન'}</span>
            </div>
          </div>

          {/* Card 3: Medications */}
          <div
            onClick={() => onTabChange('medications')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#565a9f] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f2f2fa] text-[#3b3e79] border border-[#d7d8ee] flex items-center justify-center">
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
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#3b3e79]">
              <span>{currentLang === 'en' ? 'Medication Facts' : currentLang === 'hi' ? 'दवाओं की जानकारी' : 'દવાઓની માહિતી'}</span>
            </div>
          </div>

          {/* Card 4: Treatments */}
          <div
            onClick={() => onTabChange('treatments')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#387971] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#eff7f6] text-[#225852] border border-[#cee5e2] flex items-center justify-center">
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
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#225852]">
              <span>{currentLang === 'en' ? 'Explore Therapies' : currentLang === 'hi' ? 'थेरेपी विधियां' : 'થેરાપી પદ્ધતિઓ'}</span>
            </div>
          </div>

          {/* Card 5: Myths */}
          <div
            onClick={() => onTabChange('myths')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#734b7f] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f8f2f9] text-[#54335c] border border-[#e8d7ec] flex items-center justify-center">
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
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#54335c]">
              <span>{currentLang === 'en' ? 'Bust Mental Health Myths' : currentLang === 'hi' ? 'भ्रांतियां दूर करें' : 'માન્યતાઓ તપાસો'}</span>
            </div>
          </div>

          {/* Card 6: Caregivers */}
          <div
            onClick={() => onTabChange('caregivers')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#c4722b] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#fef8f0] text-[#8c4610] border border-[#f4deca] flex items-center justify-center">
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
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8c4610]">
              <span>{currentLang === 'en' ? 'Caregiver Guidance' : currentLang === 'hi' ? 'देखभालकर्ताओं की मदद' : 'સંભાળ રાખનાર માટે'}</span>
            </div>
          </div>

          {/* Card 7: Clinical Articles */}
          <div
            onClick={() => onTabChange('articles')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#486581] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f0f4f8] text-[#2e4663] border border-[#d9e2ec] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.articles}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'In-depth clinical essays on first psychiatric appointments, depression vs grief, and youth digital habits.'
                  : currentLang === 'hi'
                  ? 'मनोरोग विशेषज्ञ द्वारा लिखित विस्तृत लेख: पहली बार डॉक्टर से मिलना, डिप्रेशन बनाम उदासी, और युवाओं में तनाव।'
                  : 'પ્રથમ મુલાકાત, ડિપ્રેશન વિરુદ્ધ દુઃખ અને યુવાનોના માનસિક સ્વાસ્થ્ય પર ઊંડાણપૂર્વકના લેખો.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#2e4663]">
              <span>{currentLang === 'en' ? 'Read Articles' : currentLang === 'hi' ? 'लेख पढ़ें' : 'લેખો વાંચો'}</span>
            </div>
          </div>

          {/* Card 8: Helplines & Resources */}
          <div
            onClick={() => onTabChange('resources')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#2b6cb0] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#eef5fa] text-[#1b4a75] border border-[#cce0ef] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.resources}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Verified national directory: Tele-MANAS (14416), ERSS 112, NIMHANS, AIIMS, and hospital crisis services.'
                  : currentLang === 'hi'
                  ? 'प्रमाणित राष्ट्रीय हेल्पलाइन डायरेक्टरी: टेली-मानस (14416), 112, निमहंस और प्रमुख सरकारी सहायता केंद्र।'
                  : 'પ્રમાણિત રાષ્ટ્રીય હેલ્પલાઇન ડિરેક્ટરી: ટેલી-માનસ (૧૪૪૧૬), ૧૧૨ અને સરકારી હોસ્પિટલો.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#1b4a75]">
              <span>{currentLang === 'en' ? 'Directory of Helplines' : currentLang === 'hi' ? 'हेल्पलाइन देखें' : 'હેલ્પલાઇન જુઓ'}</span>
            </div>
          </div>

          {/* Card 9: Outreach Materials */}
          <div
            onClick={() => onTabChange('outreach')}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#3d7b52] transition cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f0f7f2] text-[#225434] border border-[#cde5d5] flex items-center justify-center">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1c2430]">
                {t.nav.outreach}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Printable clinic flyers and noticeboard posters with QR codes for waiting rooms and community outreach.'
                  : currentLang === 'hi'
                  ? 'क्लीनिक, अस्पतालों और कम्युनिटी सेंटर के लिए प्रिंटेबल नोटिस और क्यूआर कोड सामग्री।'
                  : 'વેઇટિંગ રૂમ અને ક્લિનિક માટે પ્રિન્ટ કરી શકાય તેવા પોસ્ટર અને ક્યૂઆર કોડ સાહિત્ય.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#225434]">
              <span>{currentLang === 'en' ? 'Printable Posters' : currentLang === 'hi' ? 'पोस्टर व क्यूआर' : 'પોસ્ટર અને ક્યૂઆર'}</span>
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
          {conditionsData.slice(0, 4).map((cond) => {
            const theme = getCategoryTheme(cond.category);
            return (
              <div
                key={cond.id}
                onClick={() => onSelectCondition(cond)}
                style={{ borderTopColor: theme.hex.accent, borderTopWidth: '3px' }}
                className="p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 transition cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div>
                    <CategoryBadge category={cond.category} currentLang={currentLang} size="xs" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#1c2430]">
                    {cond.name[currentLang]}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {cond.overview[currentLang]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59]">
                  <span>{currentLang === 'en' ? 'Read Guide' : currentLang === 'hi' ? 'मार्गदर्शिका पढ़ें' : 'માર્ગદર્શિકા વાંચો'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Install App as Offline PWA Banner */}
      <PWAInstallButton currentLang={currentLang} variant="banner" />

      {/* About Dr. Raghav Suthar Snippet */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-start gap-6">
        <div className="w-16 h-16 rounded-xl bg-teal-50 text-[#115e59] flex items-center justify-center font-bold text-xl shrink-0 border border-teal-200">
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
              {currentLang === 'en' ? 'Read Full Professional Profile & Ethics Compliance' : currentLang === 'hi' ? 'पूरा प्रोफाइल व आचार संहिता देखें' : 'સંપૂર્ણ પ્રોફાઇલ જુઓ'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

