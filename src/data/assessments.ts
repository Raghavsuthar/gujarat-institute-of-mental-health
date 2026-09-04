import { LocalizedString } from '../types';

export interface ScreenerQuestion {
  id: number;
  text: LocalizedString;
  isCrisisQuestion?: boolean;
}

export interface ScreenerTool {
  id: string;
  name: LocalizedString;
  purpose: LocalizedString;
  disclaimer: LocalizedString;
  frequencyOptions: {
    value: number;
    label: LocalizedString;
  }[];
  questions: ScreenerQuestion[];
  interpretations: {
    minScore: number;
    maxScore: number;
    level: LocalizedString;
    description: LocalizedString;
    recommendation: LocalizedString;
  }[];
}

export const screenersData: ScreenerTool[] = [
  {
    id: 'phq9',
    name: {
      en: 'Depression Symptom Reflection (PHQ-9 Educational Tool)',
      hi: 'डिप्रेशन लक्षण आत्म-अवलोकन (PHQ-9 शैक्षणिक टूल)',
      gu: 'ડિપ્રેશન લક્ષણોનું આત્મ-મૂલ્યાંકન (PHQ-9 શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Reflect on how often you have been bothered by common depressive symptoms over the past 2 weeks.',
      hi: 'पिछले 2 सप्ताह में आपने इनमें से किन लक्षणों को महसूस किया है, इसका निष्पक्ष अवलोकन करें।',
      gu: 'છેલ્લા ૨ અઠવાડિયામાં તમે આમાંથી કયા લક્ષણો અનુભવ્યા છે તેની નોંધ લો.',
    },
    disclaimer: {
      en: 'This tool is solely for educational self-reflection and mental health literacy. It is NOT a medical test and DOES NOT provide a psychiatric diagnosis. Many medical and emotional conditions cause these symptoms. Only a registered healthcare professional can diagnose psychiatric illnesses.',
      hi: 'यह टूल केवल शैक्षणिक समझ और आत्म-अवलोकन के लिए है। यह कोई मेडिकल जांच नहीं है और न ही कोई चिकित्सीय निदान प्रदान करता है। केवल एक पंजीकृत मनोचिकित्सक ही सही जांच कर सकते हैं।',
      gu: 'આ ટૂલ માત્ર શૈક્ષણિક સમજણ માટે છે. આ કોઈ તબીબી નિદાન નથી. સચોટ તપાસ માટે નિષ્ણાત ડૉક્ટરની મુલાકાત જરૂરી છે.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Not at all (0 days)', hi: 'बिल्कुल नहीं (0 दिन)', gu: 'બિલકુલ નહીં (૦ દિવસ)' } },
      { value: 1, label: { en: 'Several days', hi: 'कुछ दिन', gu: 'થોડા દિવસો' } },
      { value: 2, label: { en: 'More than half the days', hi: 'आधे से अधिक दिन', gu: 'અડધાથી વધુ દિવસો' } },
      { value: 3, label: { en: 'Nearly every day', hi: 'लगभग हर दिन', gu: 'લગભગ રોજ' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Little interest or pleasure in doing things you normally enjoy',
          hi: 'काम करने या सामान्य गतिविधियों में कम रुचि या कोई खुशी न होना',
          gu: 'રોજિંદા કામો કે શોખમાં ઓછો રસ કે આનંદ ન મળવો',
        },
      },
      {
        id: 2,
        text: {
          en: 'Feeling down, depressed, hopeless, or empty',
          hi: 'उदास, निराश, लाचार या मन में भारीपन महसूस होना',
          gu: 'ઉદાસી, નિરાશા કે મન ખાલી-ખાલી લાગવું',
        },
      },
      {
        id: 3,
        text: {
          en: 'Trouble falling asleep, staying asleep, or sleeping too much',
          hi: 'नींद आने में कठिनाई, बार-बार आंख खुलना, या बहुत ज्यादा सोना',
          gu: 'ઊંઘ આવવામાં તકલીફ, વારંવાર ઊંઘ ઊડી જવી કે વધુ પડતું સૂઈ રહેવું',
        },
      },
      {
        id: 4,
        text: {
          en: 'Feeling tired, exhausted, or having very little energy',
          hi: 'थकान, ऊर्जा की भारी कमी या कमजोरी महसूस होना',
          gu: 'થાક, અશક્તિ કે બિલકુલ ઊર્જા ન હોવી',
        },
      },
      {
        id: 5,
        text: {
          en: 'Poor appetite, skipping meals, or noticeable overeating',
          hi: 'भूख में कमी, खाना न पचना, या जरूरत से ज्यादा खाना',
          gu: 'ભૂખ ન લાગવી કે જરૂર કરતાં વધુ ખાવું',
        },
      },
      {
        id: 6,
        text: {
          en: 'Feeling bad about yourself — or that you are a failure or have let yourself or family down',
          hi: 'खुद को बुरा या असफल समझना, या ऐसा लगना कि आपने अपनों को निराश किया है',
          gu: 'પોતાને નિષ્ફળ સમજવા કે પરિવારને નિરાશ કર્યાની અપરાધભાવના',
        },
      },
      {
        id: 7,
        text: {
          en: 'Trouble concentrating on things, such as reading news, office work, or watching television',
          hi: 'चीजों पर ध्यान केंद्रित करने में कठिनाई (जैसे पढ़ना, ऑफिस का काम या टीवी देखना)',
          gu: 'વાંચવામાં, કામમાં કે ટીવી જોવામાં ધ્યાન ન લાગવું',
        },
      },
      {
        id: 8,
        text: {
          en: 'Moving or speaking so slowly that other people have noticed; or being so fidgety or restless that you move a lot',
          hi: 'इतनी धीमी गति से चलना या बोलना कि लोग टोकें; या अत्यधिक बेचैन होकर यहां-वहां टहलना',
          gu: 'બહુ ધીમા પડી જવું અથવા વધુ પડતી બેચેનીમાં આમતેમ આંટા મારવા',
        },
      },
      {
        id: 9,
        isCrisisQuestion: true,
        text: {
          en: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way',
          hi: 'ऐसे विचार कि मर जाना बेहतर होगा, या खुद को किसी तरह चोट पहुंचाने के विचार',
          gu: 'મરી જવું સારું કે પોતાને કોઈ નુકસાન પહોંચાડવાના વિચારો',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 4,
        level: { en: 'Minimal / Low Symptoms', hi: 'न्यूनतम / सामान्य स्तर', gu: 'સામાન્ય / ઓછા લક્ષણો' },
        description: {
          en: 'Your responses indicate minimal symptoms in the past two weeks. It is normal to experience temporary fluctuations in mood.',
          hi: 'आपके उत्तर पिछले दो सप्ताह में न्यूनतम लक्षणों का संकेत देते हैं। कभी-कभार मूड में हल्का बदलाव सामान्य है।',
          gu: 'તમારા જવાબો સામાન્ય સ્થિતિ દર્શાવે છે. ક્યારેક થોડો મૂડ બદલાવો સામાન્ય બાબત છે.',
        },
        recommendation: {
          en: 'Continue healthy daily habits: consistent sleep routines, balanced nutrition, daily physical movement, and social connections.',
          hi: 'स्वस्थ दिनचर्या जारी रखें: समय पर सोएं, पौष्टिक भोजन लें और नियमित व्यायाम करें।',
          gu: 'સ્વસ્થ જીવનશૈલી જાળવી રાખો: નિયમિત ઊંઘ, પૌષ્ટિક આહાર અને હળવો વ્યાયામ.',
        },
      },
      {
        minScore: 5,
        maxScore: 9,
        level: { en: 'Mild Symptom Presence', hi: 'हल्के स्तर के लक्षण', gu: 'હળવા લક્ષણો' },
        description: {
          en: 'Your responses reflect some mild symptoms of low mood or fatigue that may be related to recent stress or lifestyle pressures.',
          hi: 'आपके उत्तर हल्के लक्षणों का संकेत देते हैं जो हालिया तनाव या थकान से जुड़े हो सकते हैं।',
          gu: 'આ જવાબો હળવા તણાવ કે થાકના સંકેત આપે છે જે તાજેતરના દબાણથી હોઈ શકે છે.',
        },
        recommendation: {
          en: 'Pay attention to self-care and stress reduction. If these feelings persist for more than 2 weeks or worsen, consider scheduling a clinical evaluation.',
          hi: 'अपने आराम और तनाव पर ध्यान दें। यदि यह स्थिति 2 सप्ताह से अधिक रहे तो डॉक्टर से परामर्श लें।',
          gu: 'આરામ અને તણાવ નિવારણ પર ધ્યાન આપો. જો આ તકલીફ વધે તો ડૉક્ટરની સલાહ લો.',
        },
      },
      {
        minScore: 10,
        maxScore: 14,
        level: { en: 'Moderate Symptom Presence', hi: 'मध्यम स्तर के लक्षण', gu: 'મધ્યમ સ્તરના લક્ષણો' },
        description: {
          en: 'Your responses suggest several noticeable symptoms commonly seen in depressive episodes. This is not a diagnosis, but suggests your daily quality of life may be impacted.',
          hi: 'आपके उत्तर उन लक्षणों का संकेत देते हैं जो आमतौर पर डिप्रेशन में देखे जाते हैं। यह कोई अंतिम निदान नहीं है, लेकिन आपकी दिनचर्या प्रभावित हो सकती है।',
          gu: 'આ જવાબો ડિપ્રેશન સાથે સંકળાયેલા સામાન્ય લક્ષણો દર્શાવે છે. આ કોઈ નિદાન નથી, પણ તમારી કાર્યક્ષમતા પર અસર થઈ શકે છે.',
        },
        recommendation: {
          en: 'We strongly recommend having a confidential discussion with a qualified psychiatrist or medical professional for an objective clinical assessment.',
          hi: 'हम सलाह देते हैं कि किसी योग्य मनोचिकित्सक से मिलकर अपनी स्थिति पर निष्पक्ष चर्चा करें।',
          gu: 'અમે ભલામણ કરીએ છીએ કે તમે કોઈ અનુભવી મનોચિકિત્સક સાથે ચર્ચા કરીને યોગ્ય સલાહ લો.',
        },
      },
      {
        minScore: 15,
        maxScore: 27,
        level: { en: 'Moderately Severe to Severe Symptoms', hi: 'गंभीर स्तर के लक्षण', gu: 'ગંભીર સ્તરના લક્ષણો' },
        description: {
          en: 'Your responses reflect substantial distress and multiple symptoms that strongly impact functioning. Effective, scientific treatments are widely available.',
          hi: 'आपके उत्तर काफी तनाव और कई गंभीर लक्षणों का संकेत देते हैं जो दैनिक जीवन को प्रभावित कर रहे हैं। इनके लिए प्रभावी और सुरक्षित चिकित्सा उपलब्ध है।',
          gu: 'તમારા જવાબો ગંભીર તણાવ દર્શાવે છે જે જીવનને અસ્તવ્યસ્ત કરી શકે છે. આના માટે અકસીર તબીબી સારવાર ઉપલબ્ધ છે.',
        },
        recommendation: {
          en: 'Please arrange a comprehensive psychiatric evaluation promptly. If you are struggling with safety or despair, contact Tele-MANAS at 14416 (24x7, free).',
          hi: 'कृपया बिना देरी किए मनोचिकित्सक से संपर्क करें। यदि मन में कोई आत्मघाती विचार आ रहे हैं, तो तुरंत 14416 पर कॉल करें।',
          gu: 'કૃપા કરીને તરત જ મનોચિકિત્સકનો સંપર્ક કરો. જો મનમાં જીવન ટૂંકાવવાના વિચારો આવતા હોય તો ૧૪૪૧૬ પર કૉલ કરો.',
        },
      },
    ],
  },
  {
    id: 'gad7',
    name: {
      en: 'Anxiety Symptom Reflection (GAD-7 Educational Tool)',
      hi: 'चिंता व घबराहट लक्षण अवलोकन (GAD-7 शैक्षणिक टूल)',
      gu: 'ચિંતા અને ગભરાટનું આત્મ-મૂલ્યાંકન (GAD-7 શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Reflect on anxiety, worry, and nervous physical symptoms over the past 2 weeks.',
      hi: 'पिछले 2 सप्ताह में चिंता, घबराहट और शारीरिक तनाव के लक्षणों का अवलोकन करें।',
      gu: 'છેલ્લા ૨ અઠવાડિયામાં ચિંતા, બેચેની અને ગભરાટના લક્ષણોનું મૂલ્યાંકન કરો.',
    },
    disclaimer: {
      en: 'This tool is purely educational and non-diagnostic. Anxiety symptoms frequently overlap with medical conditions (like thyroid disorders or cardiac issues). Consult a medical doctor for proper diagnosis.',
      hi: 'यह टूल केवल शैक्षणिक जानकारी के लिए है। चिंता के लक्षण कई शारीरिक बीमारियों (जैसे थायरॉयड) से भी हो सकते हैं। सही जांच के लिए डॉक्टर से मिलें।',
      gu: 'આ ટૂલ માત્ર શૈક્ષણિક માહિતી માટે છે. ચિંતાના લક્ષણો અન્ય શારીરિક બીમારીઓથી પણ હોઈ શકે છે. સાચા નિદાન માટે ડૉક્ટરને મળો.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Not at all', hi: 'बिल्कुल नहीं', gu: 'બિલકુલ નહીં' } },
      { value: 1, label: { en: 'Several days', hi: 'कुछ दिन', gu: 'થોડા દિવસો' } },
      { value: 2, label: { en: 'More than half the days', hi: 'आधे से अधिक दिन', gu: 'અડધાથી વધુ દિવસો' } },
      { value: 3, label: { en: 'Nearly every day', hi: 'लगभग हर दिन', gu: 'લગભગ રોજ' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Feeling nervous, anxious, or on edge',
          hi: 'घबराहट, अत्यधिक चिंता या मन में बेचैनी महसूस होना',
          gu: 'ગભરાટ, અજંપો કે ચિંતાથી મન અસ્થિર રહેવું',
        },
      },
      {
        id: 2,
        text: {
          en: 'Not being able to stop or control worrying',
          hi: 'चिंताओं को रोकने या नियंत्रित करने में असमर्थ होना',
          gu: 'ચિંતાઓને રોકવામાં કે કાબૂમાં રાખવામાં અસમર્થતા',
        },
      },
      {
        id: 3,
        text: {
          en: 'Worrying too much about different things',
          hi: 'बहुत सी अलग-अलग बातों को लेकर बहुत ज्यादा सोचना',
          gu: 'વિવિધ બાબતો અંગે વધુ પડતી ચિંતા કરવી',
        },
      },
      {
        id: 4,
        text: {
          en: 'Trouble relaxing or sitting still',
          hi: 'शांत बैठने या आराम महसूस करने में परेशानी होना',
          gu: 'શાંતિથી બેસવામાં કે આરામ કરવામાં મુશ્કેલી',
        },
      },
      {
        id: 5,
        text: {
          en: 'Being so restless that it is hard to sit still',
          hi: 'इतनी बेचैनी होना कि एक जगह टिक कर बैठना मुश्किल हो',
          gu: 'એટલી બધી બેચેની કે એક જગ્યાએ બેસી ન શકાય',
        },
      },
      {
        id: 6,
        text: {
          en: 'Becoming easily annoyed or irritable',
          hi: 'छोटी-छोटी बातों पर बहुत जल्दी चिढ़ या गुस्सा आ जाना',
          gu: 'નાની બાબતોમાં તરત જ ચીડાઈ જવું કે ગુસ્સો આવવો',
        },
      },
      {
        id: 7,
        text: {
          en: 'Feeling afraid, as if something awful might happen',
          hi: 'ऐसा डर लगना जैसे कुछ बहुत बुरा या अनहोनी होने वाली है',
          gu: 'એવો ભય રહેવો કે કંઈક બહુ ખરાબ થવાનું છે',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 4,
        level: { en: 'Minimal Anxiety', hi: 'न्यूनतम चिंता', gu: 'સામાન્ય ચિંતા' },
        description: {
          en: 'Your responses suggest minimal or baseline anxiety symptoms.',
          hi: 'आपके उत्तर बहुत कम या सामान्य चिंता का संकेत देते हैं।',
          gu: 'તમારા જવાબો સામાન્ય સ્તરની ચિંતા દર્શાવે છે.',
        },
        recommendation: {
          en: 'Practice basic stress reduction: regular sleep, mindful breathing, and balanced workload.',
          hi: 'नियमित नींद और गहरी सांस लेने के अभ्यास से संतुलन बनाए रखें।',
          gu: 'ઊંડા શ્વાસ લેવાની કસરતો અને સંતુલિત દિનચર્યા રાખો.',
        },
      },
      {
        minScore: 5,
        maxScore: 9,
        level: { en: 'Mild Anxiety', hi: 'हल्की चिंता', gu: 'હળવી ચિંતા' },
        description: {
          en: 'Mild symptoms of anxiety noted, likely manageable with lifestyle pacing and relaxation.',
          hi: 'हल्की चिंता के लक्षण हैं, जो जीवनशैली और तनाव कम करने से ठीक हो सकते हैं।',
          gu: 'હળવા લક્ષણો છે, જે આરામ અને કસરતથી નિયંત્રિત થઈ શકે છે.',
        },
        recommendation: {
          en: 'Reduce caffeine intake and prioritize restorative sleep. If worry escalates, consider professional support.',
          hi: 'चाय-कॉफी कम करें और अच्छी नींद लें। चिंता बढ़े तो डॉक्टर की सलाह लें।',
          gu: 'ચા-કોફીનું પ્રમાણ ઘટાડો અને પૂરતી ઊંઘ લો.',
        },
      },
      {
        minScore: 10,
        maxScore: 14,
        level: { en: 'Moderate Anxiety', hi: 'मध्यम चिंता', gu: 'મધ્યમ ચિંતા' },
        description: {
          en: 'Noticeable symptoms of anxiety that may be disrupting your concentration, sleep, or peace of mind.',
          hi: 'चिंता के स्पष्ट लक्षण हैं जो नींद, एकाग्रता और काम को प्रभावित कर सकते हैं।',
          gu: 'ચિંતાના સ્પષ્ટ લક્ષણો જે ઊંઘ અને એકાગ્રતા પર અસર કરી રહ્યા છે.',
        },
        recommendation: {
          en: 'A clinical consultation is recommended to explore evidence-based therapies like CBT or medical guidance.',
          hi: 'मनोचिकित्सक से परामर्श लेकर CBT जैसी थेरेपी या मार्गदर्शन लेना उचित रहेगा।',
          gu: 'ડૉક્ટરની સલાહ લઈને યોગ્ય કાઉન્સેલિંગ મેળવવું હિતાવહ છે.',
        },
      },
      {
        minScore: 15,
        maxScore: 21,
        level: { en: 'Severe Anxiety', hi: 'गंभीर चिंता / घबराहट', gu: 'તીવ્ર ચિંતા / ગભરાટ' },
        description: {
          en: 'High level of anxiety symptoms. Remember that anxiety is highly treatable with modern medicine and structured therapy.',
          hi: 'तीव्र चिंता और घबराहट के लक्षण। याद रखें कि आधुनिक चिकित्सा और थेरेपी से चिंता पूरी तरह ठीक हो सकती है।',
          gu: 'તીવ્ર ચિંતા અને ગભરાટના લક્ષણો. યાદ રાખો કે આધુનિક સારવારથી આ સમસ્યા સંપૂર્ણ કાબૂમાં આવી શકે છે.',
        },
        recommendation: {
          en: 'Please schedule a medical evaluation with a psychiatrist for a full evaluation and personalized care plan.',
          hi: 'कृपया बिना झिझक मनोचिकित्सक से परामर्श लें ताकि वे उचित समाधान दे सकें।',
          gu: 'કૃપા કરીને યોગ્ય માર્ગદર્શન અને સારવાર માટે મનોચિકિત્સકનો સંપર્ક કરો.',
        },
      },
    ],
  },
];
