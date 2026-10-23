import type { Language } from '../types';

export interface EvidenceSource {
  title: string;
  organization: string;
  url: string;
  note: string;
}

export interface ConditionEvidenceGuide {
  title: Record<Language, string>;
  introduction: Record<Language, string>;
  findings: Array<{
    text: Record<Language, string>;
    limitation: Record<Language, string>;
  }>;
  sources: EvidenceSource[];
  reviewedNote: Record<Language, string>;
}

/**
 * Public-facing evidence summaries for the first Mindcare content-quality pilot.
 * These summaries explain guidance in plain language; they are not a substitute
 * for clinical review. Source pages should be checked again before future updates.
 */
export const conditionEvidenceGuides: Record<string, ConditionEvidenceGuide> = {
  depression: {
    title: {
      en: 'What research and guidelines say',
      hi: 'शोध और दिशानिर्देश क्या बताते हैं',
      gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે',
    },
    introduction: {
      en: 'Research supports several effective ways to treat depression. The best plan depends on symptom severity, safety, previous treatment, health needs, and the person’s preferences.',
      hi: 'शोध के अनुसार डिप्रेशन के उपचार के कई प्रभावी विकल्प हैं। सही योजना लक्षणों की गंभीरता, सुरक्षा, पहले हुए उपचार, स्वास्थ्य संबंधी जरूरतों और व्यक्ति की पसंद पर निर्भर करती है।',
      gu: 'સંશોધન મુજબ ડિપ્રેશન માટે અનેક અસરકારક સારવાર વિકલ્પો ઉપલબ્ધ છે. યોગ્ય યોજના લક્ષણોની ગંભીરતા, સલામતી, અગાઉની સારવાર, આરોગ્યની જરૂરિયાતો અને વ્યક્તિની પસંદગી પર આધાર રાખે છે.',
    },
    findings: [
      {
        text: {
          en: 'Evidence-based psychological therapies, including CBT and behavioural activation, can help reduce depressive symptoms.',
          hi: 'CBT और व्यवहार सक्रियण (behavioural activation) जैसी प्रमाण-आधारित मनोवैज्ञानिक थेरपी डिप्रेशन के लक्षण कम करने में मदद कर सकती हैं।',
          gu: 'CBT અને વર્તન સક્રિયકરણ (behavioural activation) જેવી પુરાવા આધારિત મનોવૈજ્ઞાનિક થેરાપી ડિપ્રેશનનાં લક્ષણો ઘટાડવામાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'Response varies; access, preferences, other conditions, and treatment intensity matter.',
          hi: 'लाभ हर व्यक्ति में अलग हो सकता है; उपलब्धता, पसंद, अन्य समस्याएँ और उपचार की तीव्रता भी मायने रखती हैं।',
          gu: 'દરેક વ્યક્તિમાં પ્રતિભાવ અલગ હોઈ શકે છે; ઉપલબ્ધતા, પસંદગી, અન્ય સમસ્યાઓ અને સારવારની તીવ્રતા પણ મહત્વ ધરાવે છે.',
        },
      },
      {
        text: {
          en: 'Depending on the clinical picture, options may include psychological treatment, antidepressant medication, or both. Shared decision-making and follow-up are important.',
          hi: 'स्थिति के अनुसार मनोवैज्ञानिक उपचार, एंटीडिप्रेसेंट दवा या दोनों विकल्प हो सकते हैं। मिलकर निर्णय लेना और नियमित फॉलो-अप जरूरी है।',
          gu: 'પરિસ્થિતિ મુજબ મનોવૈજ્ઞાનિક સારવાર, એન્ટીડિપ્રેસન્ટ દવા અથવા બંને વિકલ્પ હોઈ શકે છે. સાથે મળીને નિર્ણય લેવો અને નિયમિત ફોલો-અપ મહત્વપૂર્ણ છે.',
        },
        limitation: {
          en: 'No treatment guarantees complete recovery, and medication decisions should be made with a qualified clinician.',
          hi: 'कोई भी उपचार पूर्ण स्वस्थ होने की गारंटी नहीं देता। दवा संबंधी निर्णय योग्य चिकित्सक के साथ लेने चाहिए।',
          gu: 'કોઈ સારવાર સંપૂર્ણ સ્વસ્થ થવાની ખાતરી આપતી નથી. દવા અંગેના નિર્ણય લાયક તબીબ સાથે લેવા જોઈએ.',
        },
      },
    ],
    sources: [
      { title: 'Depression in adults: treatment and management (NG222)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng222', note: 'Clinical guideline; recommendations cover treatment choices and follow-up.' },
      { title: 'Depression fact sheet', organization: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/depression', note: 'Public overview of symptoms, contributing factors, and treatment.' },
    ],
    reviewedNote: {
      en: 'Guidelines can change. This summary is educational and should be reviewed by a clinician before being used as individualized advice.',
      hi: 'दिशानिर्देश बदल सकते हैं। यह जानकारी शिक्षा के लिए है; व्यक्तिगत सलाह के रूप में उपयोग से पहले चिकित्सकीय समीक्षा जरूरी है।',
      gu: 'માર્ગદર્શિકા બદલાઈ શકે છે. આ માહિતી શૈક્ષણિક હેતુ માટે છે; વ્યક્તિગત સલાહ તરીકે ઉપયોગ કરતાં પહેલાં તબીબી સમીક્ષા જરૂરી છે.',
    },
  },
  'anxiety-gad': {
    title: {
      en: 'What research and guidelines say',
      hi: 'शोध और दिशानिर्देश क्या बताते हैं',
      gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે',
    },
    introduction: {
      en: 'Treatment for generalized anxiety disorder is usually chosen according to how persistent the worry is and how much it affects everyday life. A clinician can help compare psychological treatment and medication options.',
      hi: 'सामान्यीकृत चिंता विकार का उपचार इस आधार पर चुना जाता है कि चिंता कितनी लगातार है और दैनिक जीवन पर कितना असर डालती है। चिकित्सक मनोवैज्ञानिक उपचार और दवा के विकल्पों पर चर्चा करने में मदद कर सकते हैं।',
      gu: 'સામાન્યીકૃત ચિંતા વિકારની સારવાર ચિંતા કેટલી સતત રહે છે અને દૈનિક જીવનને કેટલી અસર કરે છે તેના આધારે પસંદ કરવામાં આવે છે. તબીબ મનોવૈજ્ઞાનિક સારવાર અને દવાના વિકલ્પો સમજવામાં મદદ કરી શકે છે.',
    },
    findings: [
      {
        text: {
          en: 'CBT is an evidence-based psychological treatment for GAD. Guided self-help and other structured interventions may also be appropriate for some people.',
          hi: 'CBT, GAD के लिए प्रमाण-आधारित मनोवैज्ञानिक उपचार है। कुछ लोगों के लिए मार्गदर्शित स्व-सहायता और अन्य व्यवस्थित हस्तक्षेप भी उपयुक्त हो सकते हैं।',
          gu: 'CBT એ GAD માટે પુરાવા આધારિત મનોવૈજ્ઞાનિક સારવાર છે. કેટલાક લોકો માટે માર્ગદર્શિત સ્વ-સહાય અને અન્ય વ્યવસ્થિત ઉપાયો પણ યોગ્ય હોઈ શકે છે.',
        },
        limitation: {
          en: 'The type and intensity of support should reflect symptoms, functioning, access, and personal preference.',
          hi: 'सहायता का प्रकार और स्तर लक्षणों, कार्यक्षमता, उपलब्धता और व्यक्तिगत पसंद के अनुरूप होना चाहिए।',
          gu: 'સહાયનો પ્રકાર અને સ્તર લક્ષણો, કાર્યક્ષમતા, ઉપલબ્ધતા અને વ્યક્તિગત પસંદગી મુજબ હોવો જોઈએ.',
        },
      },
      {
        text: {
          en: 'Medication may be considered when symptoms or impairment are more marked, after discussing potential benefits, side effects, and discontinuation effects.',
          hi: 'लक्षण या दैनिक कामकाज पर असर अधिक होने पर दवा पर विचार किया जा सकता है; संभावित लाभ, दुष्प्रभाव और दवा बंद करने के प्रभावों पर पहले चर्चा करनी चाहिए।',
          gu: 'લક્ષણો અથવા દૈનિક કાર્યક્ષમતા પર અસર વધુ હોય ત્યારે દવા અંગે વિચાર કરી શકાય છે; સંભવિત લાભ, આડઅસર અને દવા બંધ કરવાના પ્રભાવ અંગે પહેલાં ચર્ચા કરવી જોઈએ.',
        },
        limitation: {
          en: 'Medication choice and stopping plans require individualized advice from a qualified prescriber.',
          hi: 'दवा का चुनाव और उसे बंद करने की योजना योग्य चिकित्सक की व्यक्तिगत सलाह से तय होनी चाहिए।',
          gu: 'દવાની પસંદગી અને તેને બંધ કરવાની યોજના લાયક તબીબની વ્યક્તિગત સલાહથી નક્કી થવી જોઈએ.',
        },
      },
    ],
    sources: [
      { title: 'Generalised anxiety disorder and panic disorder in adults (CG113)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg113', note: 'Stepped-care guidance for assessment and treatment.' },
      { title: 'Anxiety disorders', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders', note: 'Public information on anxiety disorders and available treatments.' },
    ],
    reviewedNote: {
      en: 'Guidelines may be updated. This page is general education, not a diagnosis or personal treatment plan.',
      hi: 'दिशानिर्देश अपडेट हो सकते हैं। यह सामान्य जानकारी है, निदान या व्यक्तिगत उपचार योजना नहीं।',
      gu: 'માર્ગદર્શિકા અપડેટ થઈ શકે છે. આ સામાન્ય માહિતી છે, નિદાન અથવા વ્યક્તિગત સારવાર યોજના નથી.',
    },
  },
  ocd: {
    title: {
      en: 'What research and guidelines say',
      hi: 'शोध और दिशानिर्देश क्या बताते हैं',
      gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે',
    },
    introduction: {
      en: 'OCD is treatable. Evidence-based care can include a form of CBT called exposure and response prevention (ERP), medication, or a combination, depending on symptoms and individual needs.',
      hi: 'OCD का उपचार संभव है। लक्षणों और व्यक्तिगत जरूरतों के अनुसार उपचार में एक्सपोज़र एंड रिस्पॉन्स प्रिवेंशन (ERP) नामक CBT, दवा या दोनों शामिल हो सकते हैं।',
      gu: 'OCD ની સારવાર શક્ય છે. લક્ષણો અને વ્યક્તિગત જરૂરિયાત મુજબ સારવારમાં એક્સ્પોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP) નામની CBT, દવા અથવા બંને સામેલ થઈ શકે છે.',
    },
    findings: [
      {
        text: {
          en: 'ERP helps people gradually face appropriate anxiety triggers while learning to reduce compulsive rituals, with support from a trained therapist.',
          hi: 'ERP में प्रशिक्षित थेरपिस्ट की मदद से व्यक्ति धीरे-धीरे उपयुक्त चिंता पैदा करने वाली स्थितियों का सामना करना और कम्पल्शन कम करना सीखता है।',
          gu: 'ERPમાં તાલીમપ્રાપ્ત થેરાપિસ્ટની મદદથી વ્યક્તિ ધીમે ધીમે યોગ્ય ચિંતા ઊભી કરતી પરિસ્થિતિઓનો સામનો કરવાનું અને કમ્પલ્શન ઘટાડવાનું શીખે છે.',
        },
        limitation: {
          en: 'Exposure should be planned collaboratively and adjusted to the person; do not force or improvise distressing exercises.',
          hi: 'एक्सपोज़र की योजना व्यक्ति के साथ मिलकर बनानी चाहिए। किसी को मजबूर न करें और बिना मार्गदर्शन के कठिन अभ्यास न करें।',
          gu: 'એક્સ્પોઝરની યોજના વ્યક્તિ સાથે મળીને બનાવવી જોઈએ. દબાણ ન કરવું અને માર્ગદર્શન વગર મુશ્કેલ અભ્યાસ ન કરવો.',
        },
      },
      {
        text: {
          en: 'Medication, psychological therapy, or both may be considered based on symptom severity, previous treatment, and the person’s preferences.',
          hi: 'लक्षणों की गंभीरता, पहले के उपचार और व्यक्ति की पसंद के आधार पर दवा, मनोवैज्ञानिक उपचार या दोनों पर विचार किया जा सकता है।',
          gu: 'લક્ષણોની ગંભીરતા, અગાઉની સારવાર અને વ્યક્તિની પસંદગીના આધારે દવા, મનોવૈજ્ઞાનિક સારવાર અથવા બંને અંગે વિચાર કરી શકાય છે.',
        },
        limitation: {
          en: 'NICE guideline CG31 is the current published guideline while an update is in development; check for newer final recommendations.',
          hi: 'NICE का CG31 वर्तमान प्रकाशित दिशानिर्देश है और इसका अपडेट तैयार हो रहा है; नए अंतिम सुझावों की जाँच करें।',
          gu: 'NICEનું CG31 હાલનું પ્રકાશિત માર્ગદર્શન છે અને તેનું અપડેટ તૈયાર થઈ રહ્યું છે; નવા અંતિમ સૂચનો તપાસો.',
        },
      },
    ],
    sources: [
      { title: 'Obsessive-compulsive disorder: when unwanted thoughts or repetitive behaviors take over', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over', note: 'Public overview of symptoms and treatment.' },
      { title: 'Obsessive-compulsive disorder and body dysmorphic disorder (CG31)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg31', note: 'Published clinical guideline; update status should be checked.' },
    ],
    reviewedNote: {
      en: 'ERP should be delivered or guided by a suitably trained professional. This information is not a substitute for individualized care.',
      hi: 'ERP उपयुक्त प्रशिक्षण प्राप्त पेशेवर द्वारा या उसके मार्गदर्शन में किया जाना चाहिए। यह जानकारी व्यक्तिगत उपचार का विकल्प नहीं है।',
      gu: 'ERP યોગ્ય તાલીમપ્રાપ્ત નિષ્ણાત દ્વારા અથવા તેમના માર્ગદર્શન હેઠળ કરવું જોઈએ. આ માહિતી વ્યક્તિગત સારવારનો વિકલ્પ નથી.',
    },
  },
  schizophrenia: {
    title: {
      en: 'What research and guidelines say',
      hi: 'शोध और दिशानिर्देश क्या बताते हैं',
      gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે',
    },
    introduction: {
      en: 'Schizophrenia can affect perception, thinking, communication, motivation, and daily functioning. Effective care is usually broader than medication alone and should be tailored to the person.',
      hi: 'स्किज़ोफ्रेनिया अनुभव, सोच, संवाद, प्रेरणा और दैनिक कामकाज को प्रभावित कर सकता है। प्रभावी देखभाल में अक्सर दवा से अधिक चीजें शामिल होती हैं और इसे व्यक्ति के अनुसार तय करना चाहिए।',
      gu: 'સ્કિઝોફ્રેનિયા અનુભવ, વિચાર, વાતચીત, પ્રેરણા અને દૈનિક કાર્યક્ષમતાને અસર કરી શકે છે. અસરકારક સંભાળમાં ઘણી વાર માત્ર દવા કરતાં વધુ બાબતો સામેલ હોય છે અને તે વ્યક્તિ મુજબ હોવી જોઈએ.',
    },
    findings: [
      {
        text: {
          en: 'Care may combine antipsychotic medication with psychological support, family education, rehabilitation, and help with education, work, and physical health.',
          hi: 'देखभाल में एंटीसाइकोटिक दवाओं के साथ मनोवैज्ञानिक सहयोग, परिवार को जानकारी, पुनर्वास तथा पढ़ाई, काम और शारीरिक स्वास्थ्य में मदद शामिल हो सकती है।',
          gu: 'સંભાળમાં એન્ટિસાયકોટિક દવાઓ સાથે મનોવૈજ્ઞાનિક સહયોગ, પરિવારને માહિતી, પુનર્વસન અને અભ્યાસ, કામ તથા શારીરિક આરોગ્યમાં મદદ સામેલ થઈ શકે છે.',
        },
        limitation: {
          en: 'Treatment should be chosen collaboratively, with discussion of benefits, side effects, and the person’s own goals.',
          hi: 'उपचार का चुनाव मिलकर करना चाहिए और लाभ, दुष्प्रभाव तथा व्यक्ति के अपने लक्ष्यों पर चर्चा करनी चाहिए।',
          gu: 'સારવારની પસંદગી સાથે મળીને કરવી જોઈએ અને લાભ, આડઅસર તથા વ્યક્તિના પોતાના લક્ષ્યો અંગે ચર્ચા કરવી જોઈએ.',
        },
      },
      {
        text: {
          en: 'Coordinated specialty care after an early episode of psychosis can support symptoms, quality of life, and participation in work or education.',
          hi: 'मनोविकृति के शुरुआती दौर के बाद समन्वित विशेष देखभाल लक्षणों, जीवन की गुणवत्ता और काम या पढ़ाई में भागीदारी में मदद कर सकती है।',
          gu: 'મનોવિકૃતિના શરૂઆતના તબક્કા પછી સંકલિત વિશેષ સંભાળ લક્ષણો, જીવનની ગુણવત્તા અને કામ અથવા અભ્યાસમાં ભાગીદારીમાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'Outcomes differ between people; do not stop or change prescribed medication without consulting the treating clinician.',
          hi: 'परिणाम हर व्यक्ति में अलग होते हैं। उपचार करने वाले चिकित्सक से सलाह लिए बिना निर्धारित दवा बंद या न बदलें।',
          gu: 'દરેક વ્યક્તિમાં પરિણામ અલગ હોઈ શકે છે. સારવાર કરતા તબીબની સલાહ વિના નિર્ધારિત દવા બંધ ન કરો કે બદલો નહીં.',
        },
      },
    ],
    sources: [
      { title: 'Schizophrenia fact sheet', organization: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/schizophrenia', note: 'Public overview of symptoms, treatment, and care gaps.' },
      { title: 'Schizophrenia', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/publications/schizophrenia', note: 'Public information on symptoms and treatment.' },
      { title: 'Recovery After an Initial Schizophrenia Episode (RAISE)', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/schizophrenia', note: 'Information on coordinated early-psychosis care and recovery support.' },
    ],
    reviewedNote: {
      en: 'Recovery and treatment response vary. Medication changes should be discussed with the treating clinician.',
      hi: 'सुधार और उपचार का प्रभाव हर व्यक्ति में अलग हो सकता है। दवा में बदलाव पर उपचार करने वाले चिकित्सक से चर्चा करें।',
      gu: 'સુધારો અને સારવારનો પ્રતિભાવ દરેક વ્યક્તિમાં અલગ હોઈ શકે છે. દવામાં ફેરફાર અંગે સારવાર કરતા તબીબ સાથે ચર્ચા કરો.',
    },
  },

  bipolar: {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Bipolar disorder involves episodes of depression and mania or hypomania. Assessment over time helps distinguish it from other causes of mood changes and guides an individual care plan.',
      hi: 'बाइपोलर डिसऑर्डर में अवसाद और उन्माद या हाइपोमेनिया के दौर हो सकते हैं। समय के साथ मूल्यांकन से अन्य कारणों से अंतर समझने और व्यक्तिगत उपचार योजना बनाने में मदद मिलती है।',
      gu: 'બાઇપોલર ડિસઓર્ડરમાં ડિપ્રેશન અને મેનિયા અથવા હાઇપોમેનિયાના એપિસોડ થઈ શકે છે. સમયાંતરે મૂલ્યાંકન અન્ય કારણોથી તેને અલગ પાડવામાં અને વ્યક્તિગત સારવાર યોજના બનાવવામાં મદદ કરે છે.',
    },
    findings: [
      {
        text: {
          en: 'Treatment may include mood-stabilising medication, psychological support, education about early warning signs, and regular sleep and daily routines.',
          hi: 'उपचार में मूड स्थिर करने वाली दवाएँ, मनोवैज्ञानिक सहायता, शुरुआती चेतावनी संकेतों की जानकारी और नियमित नींद व दिनचर्या शामिल हो सकती है।',
          gu: 'સારવારમાં મૂડ સ્થિર કરતી દવાઓ, મનોવૈજ્ઞાનિક સહાય, શરૂઆતના ચેતવણી સંકેતો અંગે શિક્ષણ અને નિયમિત ઊંઘ તથા દૈનિક રૂટિનનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'Treatment differs by episode, past response, physical health, pregnancy considerations, and safety needs; there is no single plan for everyone.',
          hi: 'उपचार वर्तमान दौर, पिछली प्रतिक्रिया, शारीरिक स्वास्थ्य, गर्भावस्था संबंधी पहलुओं और सुरक्षा की जरूरतों के अनुसार बदलता है; सबके लिए एक ही योजना उपयुक्त नहीं होती।',
          gu: 'સારવાર હાલના એપિસોડ, અગાઉના પ્રતિભાવ, શારીરિક આરોગ્ય, ગર્ભાવસ્થા સંબંધિત બાબતો અને સલામતીની જરૂરિયાત મુજબ બદલાય છે; દરેક માટે એક જ યોજના યોગ્ય નથી.',
        },
      },
      {
        text: {
          en: 'Keeping track of mood, sleep, energy, and changes in behaviour can help a person and clinician recognise patterns and discuss a relapse-prevention plan.',
          hi: 'मूड, नींद, ऊर्जा और व्यवहार में बदलाव दर्ज करने से व्यक्ति और चिकित्सक पैटर्न पहचानकर दोबारा एपिसोड से बचाव की योजना पर चर्चा कर सकते हैं।',
          gu: 'મૂડ, ઊંઘ, ઊર્જા અને વર્તનમાં થતા ફેરફારો નોંધવાથી વ્યક્તિ અને તબીબ પેટર્ન ઓળખી શકે છે અને ફરી એપિસોડ થતો અટકાવવાની યોજના અંગે ચર્ચા કરી શકે છે.',
        },
        limitation: {
          en: 'Tracking supports but does not replace clinical assessment. Do not start, stop, or alter medication without the prescriber.',
          hi: 'रिकॉर्ड रखना मददगार है, लेकिन चिकित्सकीय मूल्यांकन का विकल्प नहीं। चिकित्सक की सलाह के बिना दवा शुरू, बंद या परिवर्तित न करें।',
          gu: 'નોંધ રાખવી મદદરૂપ છે, પરંતુ તે તબીબી મૂલ્યાંકનનો વિકલ્પ નથી. તબીબની સલાહ વિના દવા શરૂ, બંધ કે બદલો નહીં.',
        },
      },
    ],
    sources: [
      { title: 'Bipolar disorder: assessment and management (CG185)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg185', note: 'Clinical guidance on assessment, treatment, and longer-term care.' },
      { title: 'Bipolar disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/publications/bipolar-disorder', note: 'Public information on symptoms, diagnosis, and treatment.' },
    ],
    reviewedNote: {
      en: 'This is general education, not a diagnosis or a personal treatment plan. Urgent help is important for severe mood changes, unsafe behaviour, or thoughts of suicide.',
      hi: 'यह सामान्य शैक्षिक जानकारी है, निदान या व्यक्तिगत उपचार योजना नहीं। गंभीर मूड बदलाव, असुरक्षित व्यवहार या आत्महत्या के विचार आने पर तुरंत सहायता लें।',
      gu: 'આ સામાન્ય શૈક્ષણિક માહિતી છે, નિદાન કે વ્યક્તિગત સારવાર યોજના નથી. મૂડમાં ગંભીર ફેરફાર, અસુરક્ષિત વર્તન અથવા આત્મહત્યાના વિચારો હોય તો તાત્કાલિક મદદ લો.',
    },
  },
  'panic-disorder': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Panic disorder involves recurrent unexpected panic attacks and ongoing concern or behaviour changes related to further attacks. Physical symptoms can feel frightening, and new or unusual symptoms may need medical assessment.',
      hi: 'पैनिक डिसऑर्डर में बार-बार अचानक पैनिक अटैक और आगे अटैक आने की चिंता या व्यवहार में बदलाव शामिल हो सकते हैं। शारीरिक लक्षण डरावने लग सकते हैं; नए या असामान्य लक्षणों का चिकित्सकीय मूल्यांकन जरूरी हो सकता है।',
      gu: 'પેનિક ડિસઓર્ડરમાં વારંવાર અચાનક પેનિક એટેક અને ફરી એટેક આવશે તેવી ચિંતા અથવા વર્તનમાં ફેરફાર થઈ શકે છે. શારીરિક લક્ષણો ડરામણા લાગી શકે છે; નવા અથવા અસામાન્ય લક્ષણોનું તબીબી મૂલ્યાંકન જરૂરી હોઈ શકે છે.',
    },
    findings: [
      {
        text: {
          en: 'CBT is an evidence-based treatment for panic disorder. It can help people understand the panic cycle and gradually change fear-driven responses.',
          hi: 'CBT पैनिक डिसऑर्डर का प्रमाण-आधारित उपचार है। इससे पैनिक चक्र को समझने और डर से प्रेरित प्रतिक्रियाओं को धीरे-धीरे बदलने में मदद मिल सकती है।',
          gu: 'CBT પેનિક ડિસઓર્ડર માટે પુરાવા આધારિત સારવાર છે. તે પેનિકના ચક્રને સમજવામાં અને ડરથી પ્રેરિત પ્રતિક્રિયાઓ ધીમે ધીમે બદલવામાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'The pace and approach should be tailored to the person; therapy is not a test of willpower.',
          hi: 'उपचार की गति और तरीका व्यक्ति के अनुसार होना चाहिए; थेरपी इच्छाशक्ति की परीक्षा नहीं है।',
          gu: 'સારવારની ગતિ અને રીત વ્યક્તિ મુજબ હોવી જોઈએ; થેરાપી ઇચ્છાશક્તિની કસોટી નથી.',
        },
      },
      {
        text: {
          en: 'Medication may be considered after discussing likely benefits, adverse effects, and how long treatment may be needed. Regular review supports safe care.',
          hi: 'संभावित लाभ, दुष्प्रभाव और उपचार की अवधि पर चर्चा के बाद दवा पर विचार किया जा सकता है। नियमित समीक्षा सुरक्षित उपचार में मदद करती है।',
          gu: 'સંભવિત લાભ, આડઅસર અને સારવાર કેટલો સમય જરૂરી હોઈ શકે તે અંગે ચર્ચા કર્યા પછી દવા અંગે વિચાર કરી શકાય છે. નિયમિત સમીક્ષા સુરક્ષિત સારવારમાં મદદ કરે છે.',
        },
        limitation: {
          en: 'A clinician should assess new chest pain, fainting, or other concerning physical symptoms rather than assuming they are panic.',
          hi: 'सीने में नया दर्द, बेहोशी या अन्य चिंताजनक शारीरिक लक्षणों को केवल पैनिक मानने के बजाय चिकित्सक से जाँच कराएँ।',
          gu: 'છાતીમાં નવો દુખાવો, બેભાન થવું અથવા અન્ય ચિંતાજનક શારીરિક લક્ષણોને માત્ર પેનિક માની લેવાને બદલે તબીબ દ્વારા તપાસ કરાવો.',
        },
      },
    ],
    sources: [
      { title: 'Generalised anxiety disorder and panic disorder in adults (CG113)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg113', note: 'Guidance includes recognition and treatment of panic disorder.' },
      { title: 'Panic disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms', note: 'Public explanation of panic attacks and treatment options.' },
    ],
    reviewedNote: {
      en: 'Educational information only. If symptoms are severe, new, or medically concerning, seek timely professional assessment.',
      hi: 'यह केवल शैक्षिक जानकारी है। लक्षण गंभीर, नए या चिकित्सकीय रूप से चिंताजनक हों तो समय पर पेशेवर जाँच कराएँ।',
      gu: 'આ માહિતી માત્ર શૈક્ષણિક હેતુ માટે છે. લક્ષણો ગંભીર, નવા અથવા તબીબી રીતે ચિંતાજનક હોય તો સમયસર વ્યાવસાયિક તપાસ કરાવો.',
    },
  },
  ptsd: {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Post-traumatic stress disorder can develop after traumatic experiences and may affect sleep, mood, memories, and a sense of safety. People respond to trauma differently, and support should be respectful and paced with the person.',
      hi: 'आघात के बाद पोस्ट-ट्रॉमेटिक स्ट्रेस डिसऑर्डर हो सकता है और इससे नींद, मूड, यादों तथा सुरक्षा की भावना पर असर पड़ सकता है। हर व्यक्ति की प्रतिक्रिया अलग होती है; सहायता सम्मानजनक और व्यक्ति की गति के अनुसार होनी चाहिए।',
      gu: 'આઘાતજનક અનુભવ પછી પોસ્ટ-ટ્રોમેટિક સ્ટ્રેસ ડિસઓર્ડર થઈ શકે છે અને ઊંઘ, મૂડ, યાદો તથા સુરક્ષાની લાગણી પર અસર પડી શકે છે. દરેક વ્યક્તિની પ્રતિક્રિયા અલગ હોય છે; સહાય સન્માનપૂર્ણ અને વ્યક્તિની ગતિ મુજબ હોવી જોઈએ.',
    },
    findings: [
      {
        text: {
          en: 'Trauma-focused psychological therapies, including trauma-focused CBT and EMDR in appropriate circumstances, are recommended treatments for PTSD.',
          hi: 'उपयुक्त परिस्थितियों में ट्रॉमा-फोकस्ड CBT और EMDR सहित आघात-केंद्रित मनोवैज्ञानिक थेरपी PTSD के अनुशंसित उपचार हैं।',
          gu: 'યોગ્ય પરિસ્થિતિમાં ટ્રોમા-ફોકસ્ડ CBT અને EMDR સહિત આઘાત-કેન્દ્રિત મનોવૈજ્ઞાનિક થેરાપી PTSD માટે ભલામણ કરાયેલ સારવાર છે.',
        },
        limitation: {
          en: 'A trained clinician should discuss suitability, preferences, readiness, and safety; people should not be pressured to describe trauma before they are ready.',
          hi: 'प्रशिक्षित चिकित्सक को उपयुक्तता, पसंद, तैयारी और सुरक्षा पर चर्चा करनी चाहिए; तैयार होने से पहले किसी पर आघात का विवरण देने का दबाव नहीं होना चाहिए।',
          gu: 'પ્રશિક્ષિત તબીબે યોગ્યતા, પસંદગી, તૈયારી અને સલામતી અંગે ચર્ચા કરવી જોઈએ; વ્યક્તિ તૈયાર ન હોય ત્યારે આઘાતનું વર્ણન કરવા દબાણ ન કરવું જોઈએ.',
        },
      },
      {
        text: {
          en: 'Practical support, treatment of co-occurring difficulties, and follow-up can be part of recovery-focused care.',
          hi: 'व्यावहारिक सहायता, साथ मौजूद अन्य समस्याओं का उपचार और फॉलो-अप, सुधार-केंद्रित देखभाल का हिस्सा हो सकते हैं।',
          gu: 'વ્યવહારુ સહાય, સાથે રહેલી અન્ય મુશ્કેલીઓની સારવાર અને ફોલો-અપ સુધારા-કેન્દ્રિત સંભાળનો ભાગ હોઈ શકે છે.',
        },
        limitation: {
          en: 'There is no required timetable for recovery. Treatment should be adapted to the person and their circumstances.',
          hi: 'सुधार के लिए कोई अनिवार्य समय-सीमा नहीं है। उपचार व्यक्ति और उसकी परिस्थितियों के अनुसार होना चाहिए।',
          gu: 'સુધારા માટે કોઈ ફરજિયાત સમયમર્યાદા નથી. સારવાર વ્યક્તિ અને તેની પરિસ્થિતિ મુજબ હોવી જોઈએ.',
        },
      },
    ],
    sources: [
      { title: 'Post-traumatic stress disorder (NG116)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng116', note: 'Clinical recommendations for assessment and treatment of PTSD.' },
      { title: 'Post-traumatic stress disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd', note: 'Public information on PTSD and available care.' },
    ],
    reviewedNote: {
      en: 'This page is educational and does not replace trauma-informed professional care. Seek urgent help if there is immediate danger or risk of harm.',
      hi: 'यह पृष्ठ शैक्षिक है और आघात-संवेदनशील पेशेवर देखभाल का विकल्प नहीं है। तत्काल खतरे या नुकसान के जोखिम में तुरंत सहायता लें।',
      gu: 'આ પાનું શૈક્ષણિક છે અને ટ્રોમા-સંવેદનશીલ વ્યાવસાયિક સંભાળનો વિકલ્પ નથી. તાત્કાલિક જોખમ અથવા નુકસાનની શક્યતા હોય તો તરત મદદ લો.',
    },
  },
  adhd: {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'ADHD is a neurodevelopmental condition that can affect attention, activity level, and impulse control. Assessment considers development, functioning in more than one setting, and other possible explanations for symptoms.',
      hi: 'ADHD एक न्यूरो-विकासात्मक स्थिति है जो ध्यान, सक्रियता और आवेग नियंत्रण को प्रभावित कर सकती है। मूल्यांकन में विकास का इतिहास, एक से अधिक परिस्थितियों में कामकाज और लक्षणों के अन्य संभावित कारण देखे जाते हैं।',
      gu: 'ADHD એક ન્યુરો-વિકાસાત્મક સ્થિતિ છે, જે ધ્યાન, સક્રિયતા અને આવેગ નિયંત્રણને અસર કરી શકે છે. મૂલ્યાંકનમાં વિકાસનો ઇતિહાસ, એકથી વધુ પરિસ્થિતિમાં કાર્યક્ષમતા અને લક્ષણોના અન્ય સંભવિત કારણો ધ્યાનમાં લેવાય છે.',
    },
    findings: [
      {
        text: {
          en: 'Support may combine environmental adjustments, practical strategies, parent or school support for children, and medication when clinically appropriate.',
          hi: 'सहायता में वातावरण में बदलाव, व्यावहारिक रणनीतियाँ, बच्चों के लिए माता-पिता या स्कूल का सहयोग और उपयुक्त होने पर दवा शामिल हो सकती है।',
          gu: 'સહાયમાં પર્યાવરણમાં ફેરફાર, વ્યવહારુ રીતો, બાળકો માટે માતા-પિતા અથવા શાળાનો સહકાર અને તબીબી રીતે યોગ્ય હોય ત્યારે દવાનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'The plan depends on age, needs, co-occurring conditions, preferences, and a qualified assessment; not everyone needs the same intervention.',
          hi: 'योजना उम्र, जरूरतों, साथ मौजूद स्थितियों, पसंद और योग्य मूल्यांकन पर निर्भर करती है; सभी को एक जैसी सहायता की जरूरत नहीं होती।',
          gu: 'યોજના ઉંમર, જરૂરિયાતો, સાથે રહેલી સ્થિતિઓ, પસંદગી અને યોગ્ય મૂલ્યાંકન પર આધારિત છે; દરેકને એકસરખી સહાયની જરૂર હોતી નથી.',
        },
      },
      {
        text: {
          en: 'Clear routines, breaking tasks into manageable steps, reducing avoidable distractions, and positive feedback can support daily functioning.',
          hi: 'नियमित दिनचर्या, काम को छोटे चरणों में बाँटना, अनावश्यक ध्यान भटकाने वाली चीजें कम करना और सकारात्मक प्रतिक्रिया दैनिक कामकाज में मदद कर सकते हैं।',
          gu: 'નિયમિત રૂટિન, કામને નાના પગલાંમાં વહેંચવું, ટાળી શકાય તેવા વિક્ષેપો ઘટાડવા અને સકારાત્મક પ્રતિસાદ દૈનિક કાર્યક્ષમતામાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'These strategies can help but are not a substitute for assessment when symptoms cause persistent difficulty or distress.',
          hi: 'ये तरीके मदद कर सकते हैं, लेकिन लगातार कठिनाई या परेशानी होने पर मूल्यांकन का विकल्प नहीं हैं।',
          gu: 'આ રીતો મદદરૂપ થઈ શકે છે, પરંતુ સતત મુશ્કેલી અથવા તકલીફ હોય ત્યારે મૂલ્યાંકનનો વિકલ્પ નથી.',
        },
      },
    ],
    sources: [
      { title: 'Attention deficit hyperactivity disorder: diagnosis and management (NG87)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng87', note: 'Guidance on ADHD assessment, support, and treatment.' },
      { title: 'Attention-deficit/hyperactivity disorder (ADHD)', organization: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/adhd/about/index.html', note: 'Public overview of ADHD signs, evaluation, and support.' },
    ],
    reviewedNote: {
      en: 'This is general educational content, not a diagnostic checklist. A qualified professional should assess persistent concerns and discuss appropriate support.',
      hi: 'यह सामान्य शैक्षिक सामग्री है, निदान की चेकलिस्ट नहीं। लगातार चिंता होने पर योग्य पेशेवर से मूल्यांकन और उचित सहायता पर चर्चा करें।',
      gu: 'આ સામાન્ય શૈક્ષણિક સામગ્રી છે, નિદાન માટેની ચેકલિસ્ટ નથી. સતત ચિંતા હોય તો લાયક વ્યાવસાયિક દ્વારા મૂલ્યાંકન અને યોગ્ય સહાય અંગે ચર્ચા કરો.',
    },
  },

  bipolar: {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Bipolar disorder involves episodes of depression and mania or hypomania. Ongoing care aims to reduce episodes, support recovery, and protect daily functioning.',
      hi: 'बाइपोलर डिसऑर्डर में अवसाद और उन्माद या हाइपोमेनिया के एपिसोड हो सकते हैं। उपचार का उद्देश्य एपिसोड कम करना, सुधार में मदद करना और दैनिक कामकाज को सहारा देना है।',
      gu: 'બાઇપોલર ડિસઓર્ડરમાં ડિપ્રેશન અને મેનિયા અથવા હાઇપોમેનિયાના એપિસોડ થઈ શકે છે. સારવારનો હેતુ એપિસોડ ઘટાડવો, પુનઃપ્રાપ્તિમાં મદદ કરવી અને દૈનિક કાર્યક્ષમતાને ટેકો આપવાનો છે.',
    },
    findings: [
      {
        text: {
          en: 'Treatment is individualized and may include mood-stabilizing medication, psychological support, education about early warning signs, and regular follow-up.',
          hi: 'उपचार व्यक्ति के अनुसार तय होता है। इसमें मूड स्थिर करने वाली दवाएँ, मनोवैज्ञानिक सहायता, शुरुआती चेतावनी संकेतों की जानकारी और नियमित फॉलो-अप शामिल हो सकते हैं।',
          gu: 'સારવાર વ્યક્તિગત રીતે નક્કી થાય છે. તેમાં મૂડ સ્થિર કરતી દવા, મનોવૈજ્ઞાનિક સહાય, શરૂઆતના ચેતવણી સંકેતો અંગે શિક્ષણ અને નિયમિત ફોલો-અપનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'Medication choice depends on episode type, past response, other health conditions, and safety considerations.',
          hi: 'दवा का चुनाव एपिसोड के प्रकार, पहले के उपचार के प्रभाव, अन्य स्वास्थ्य समस्याओं और सुरक्षा पर निर्भर करता है।',
          gu: 'દવાની પસંદગી એપિસોડના પ્રકાર, અગાઉના પ્રતિભાવ, અન્ય આરોગ્ય સમસ્યાઓ અને સલામતી પર આધાર રાખે છે.',
        },
      },
      {
        text: {
          en: 'Keeping a routine, protecting sleep, avoiding recreational drugs, and involving trusted supports can complement clinical treatment.',
          hi: 'नियमित दिनचर्या, नींद की सुरक्षा, नशीले पदार्थों से बचाव और भरोसेमंद लोगों का सहयोग उपचार में मदद कर सकते हैं।',
          gu: 'નિયમિત દિનચર્યા, ઊંઘનું ધ્યાન, નશીલા પદાર્થોથી દૂર રહેવું અને વિશ્વાસુ લોકોનો સહકાર સારવારને મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'Lifestyle measures support care but do not replace prescribed treatment or urgent assessment when symptoms escalate.',
          hi: 'जीवनशैली के उपाय उपचार में सहायक हैं, लेकिन निर्धारित उपचार या लक्षण बढ़ने पर तत्काल मूल्यांकन का विकल्प नहीं हैं।',
          gu: 'જીવનશૈલીના ઉપાયો સારવારમાં મદદરૂપ છે, પરંતુ નિર્ધારિત સારવાર અથવા લક્ષણો વધે ત્યારે તાત્કાલિક મૂલ્યાંકનનો વિકલ્પ નથી.',
        },
      },
    ],
    sources: [
      { title: 'Bipolar disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder', note: 'Public overview of symptoms and treatment.' },
      { title: 'Bipolar disorder: assessment and management (CG185)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg185', note: 'Clinical guideline for assessment and management.' },
    ],
    reviewedNote: {
      en: 'Do not stop or change prescribed medication without speaking to the treating clinician. Severe mood changes, psychosis, or immediate safety concerns need urgent help.',
      hi: 'चिकित्सक से बात किए बिना निर्धारित दवा बंद या न बदलें। गंभीर मूड बदलाव, मनोविकृति या तत्काल सुरक्षा चिंता में तुरंत सहायता लें।',
      gu: 'સારવાર કરતા તબીબ સાથે વાત કર્યા વિના દવા બંધ ન કરો કે બદલો નહીં. મૂડમાં ગંભીર ફેરફાર, મનોભ્રમ અથવા તાત્કાલિક સલામતીની ચિંતા હોય તો તરત મદદ લો.',
    },
  },
  'panic-disorder': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Panic disorder involves recurrent panic attacks and concern or behaviour changes related to further attacks. The symptoms are real and treatable; assessment can also check for physical causes when appropriate.',
      hi: 'पैनिक डिसऑर्डर में बार-बार पैनिक अटैक और दोबारा अटैक की चिंता या उससे जुड़े व्यवहार में बदलाव हो सकते हैं। लक्षण वास्तविक और उपचार योग्य हैं; जरूरत पड़ने पर शारीरिक कारणों का मूल्यांकन भी किया जा सकता है।',
      gu: 'પેનિક ડિસઓર્ડરમાં વારંવાર પેનિક એટેક અને ફરી એટેક આવવાની ચિંતા અથવા વર્તનમાં ફેરફાર થઈ શકે છે. લક્ષણો વાસ્તવિક અને સારવારયોગ્ય છે; જરૂર પડે ત્યારે શારીરિક કારણોનું મૂલ્યાંકન પણ થઈ શકે છે.',
    },
    findings: [
      {
        text: {
          en: 'CBT is an evidence-based treatment for panic disorder. Treatment may include learning about panic symptoms, reducing avoidance, and practising skills with a trained professional.',
          hi: 'CBT पैनिक डिसऑर्डर का प्रमाण-आधारित उपचार है। इसमें पैनिक के लक्षण समझना, बचने वाले व्यवहार को कम करना और प्रशिक्षित पेशेवर के साथ कौशल का अभ्यास शामिल हो सकता है।',
          gu: 'CBT પેનિક ડિસઓર્ડર માટે પુરાવા આધારિત સારવાર છે. તેમાં પેનિકનાં લક્ષણો સમજવા, ટાળવાની વર્તણૂક ઘટાડવા અને પ્રશિક્ષિત નિષ્ણાત સાથે કૌશલ્યનો અભ્યાસ સામેલ હોઈ શકે છે.',
        },
        limitation: {
          en: 'Treatment pace should be collaborative; exposure-based work is best planned with an appropriately trained clinician.',
          hi: 'उपचार की गति सहमति से तय होनी चाहिए; एक्सपोज़र आधारित काम प्रशिक्षित चिकित्सक के साथ योजनाबद्ध करना बेहतर है।',
          gu: 'સારવારની ગતિ સહમતીથી નક્કી થવી જોઈએ; એક્સપોઝર આધારિત કાર્ય પ્રશિક્ષિત તબીબ સાથે આયોજન કરવું યોગ્ય છે.',
        },
      },
      {
        text: {
          en: 'Medication may be considered after discussing likely benefits, side effects, and the time needed for benefit. Follow-up helps review response and ongoing needs.',
          hi: 'संभावित लाभ, दुष्प्रभाव और असर दिखने में लगने वाले समय पर चर्चा के बाद दवा पर विचार किया जा सकता है। फॉलो-अप से प्रतिक्रिया और जरूरतों की समीक्षा होती है।',
          gu: 'સંભવિત લાભ, આડઅસર અને અસર દેખાવા માટે લાગતા સમય અંગે ચર્ચા કર્યા પછી દવા અંગે વિચાર કરી શકાય છે. ફોલો-અપથી પ્રતિભાવ અને જરૂરિયાતોની સમીક્ષા થાય છે.',
        },
        limitation: {
          en: 'Do not self-start, increase, or abruptly stop medication; seek urgent care for new or severe physical symptoms.',
          hi: 'दवा स्वयं शुरू, बढ़ाएँ या अचानक बंद न करें; नए या गंभीर शारीरिक लक्षणों में तत्काल चिकित्सा लें।',
          gu: 'પોતે દવા શરૂ ન કરો, માત્રા ન વધારો કે અચાનક બંધ ન કરો; નવા અથવા ગંભીર શારીરિક લક્ષણો હોય તો તાત્કાલિક સારવાર લો.',
        },
      },
    ],
    sources: [
      { title: 'Generalised anxiety disorder and panic disorder in adults (CG113)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg113', note: 'Assessment and treatment recommendations.' },
      { title: 'Panic disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms', note: 'Patient-friendly information about panic disorder.' },
    ],
    reviewedNote: {
      en: 'A panic attack can feel frightening, but similar symptoms can occur with medical problems. New, severe, or unusual symptoms warrant medical assessment.',
      hi: 'पैनिक अटैक डरावना लग सकता है, लेकिन ऐसे लक्षण कुछ शारीरिक बीमारियों में भी हो सकते हैं। नए, गंभीर या असामान्य लक्षणों में चिकित्सकीय जाँच कराएँ।',
      gu: 'પેનિક એટેક ભયજનક લાગી શકે છે, પરંતુ આવા લક્ષણો કેટલીક શારીરિક બીમારીઓમાં પણ થઈ શકે છે. નવા, ગંભીર અથવા અસામાન્ય લક્ષણો માટે તબીબી તપાસ કરાવો.',
    },
  },
  ptsd: {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Post-traumatic stress disorder can develop after experiencing or witnessing traumatic events. People respond differently to trauma, and symptoms can improve with appropriate support and treatment.',
      hi: 'आघातकारी घटना का अनुभव करने या उसे देखने के बाद PTSD हो सकता है। हर व्यक्ति की प्रतिक्रिया अलग होती है और उचित सहायता व उपचार से लक्षणों में सुधार हो सकता है।',
      gu: 'આઘાતજનક ઘટના અનુભવ્યા પછી અથવા જોઈ લીધા પછી PTSD થઈ શકે છે. દરેક વ્યક્તિની પ્રતિક્રિયા અલગ હોય છે અને યોગ્ય સહાય તથા સારવારથી લક્ષણોમાં સુધારો થઈ શકે છે.',
    },
    findings: [
      {
        text: {
          en: 'Trauma-focused psychological therapies, including trauma-focused CBT and EMDR where appropriate, are recommended options for many people with PTSD.',
          hi: 'PTSD में कई लोगों के लिए ट्रॉमा-फोकस्ड CBT और उपयुक्त होने पर EMDR जैसी आघात-केंद्रित मनोवैज्ञानिक थेरपी अनुशंसित विकल्प हैं।',
          gu: 'PTSD ધરાવતા ઘણા લોકો માટે ટ્રોમા-ફોકસ્ડ CBT અને યોગ્ય હોય ત્યારે EMDR જેવી આઘાત-કેન્દ્રિત મનોવૈજ્ઞાનિક થેરાપી ભલામણ કરાયેલા વિકલ્પો છે.',
        },
        limitation: {
          en: 'Therapy should be delivered by a suitably trained professional and paced with attention to consent, safety, and readiness.',
          hi: 'थेरपी प्रशिक्षित पेशेवर द्वारा दी जानी चाहिए और सहमति, सुरक्षा तथा तैयारी का ध्यान रखते हुए आगे बढ़नी चाहिए।',
          gu: 'થેરાપી યોગ્ય રીતે પ્રશિક્ષિત નિષ્ણાત દ્વારા આપવી જોઈએ અને સંમતિ, સલામતી તથા તૈયારીનું ધ્યાન રાખીને આગળ વધવી જોઈએ.',
        },
      },
      {
        text: {
          en: 'Supportive care can include practical help, attention to sleep and other health needs, and treatment of co-occurring depression, anxiety, or substance-use problems.',
          hi: 'सहायक देखभाल में व्यावहारिक मदद, नींद व अन्य स्वास्थ्य जरूरतों पर ध्यान और साथ मौजूद अवसाद, चिंता या पदार्थ-उपयोग की समस्याओं का उपचार शामिल हो सकता है।',
          gu: 'સહાયક સંભાળમાં વ્યવહારુ મદદ, ઊંઘ અને અન્ય આરોગ્ય જરૂરિયાતોનું ધ્યાન તથા સાથે રહેલી ડિપ્રેશન, ચિંતા અથવા પદાર્થ-ઉપયોગની સમસ્યાઓની સારવારનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'No one should be pressured to describe traumatic details before they feel safe and ready; treatment plans are individual.',
          hi: 'सुरक्षित और तैयार महसूस करने से पहले किसी पर आघात के विवरण बताने का दबाव नहीं डालना चाहिए; उपचार योजना व्यक्तिगत होती है।',
          gu: 'વ્યક્તિ સુરક્ષિત અને તૈયાર અનુભવે તે પહેલાં તેને આઘાતની વિગતો કહેવા દબાણ ન કરવું જોઈએ; સારવાર યોજના વ્યક્તિગત હોય છે.',
        },
      },
    ],
    sources: [
      { title: 'Post-traumatic stress disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd', note: 'Public information about symptoms and treatment.' },
      { title: 'Post-traumatic stress disorder (NG116)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng116', note: 'Clinical guideline on recognition and management.' },
    ],
    reviewedNote: {
      en: 'If there is immediate danger, severe dissociation, inability to care for basic needs, or risk of harm, seek urgent professional help.',
      hi: 'तत्काल खतरे, गंभीर डिसोसिएशन, बुनियादी जरूरतें पूरी न कर पाने या नुकसान के जोखिम में तुरंत पेशेवर सहायता लें।',
      gu: 'તાત્કાલિક જોખમ, ગંભીર ડિસોસિએશન, મૂળભૂત જરૂરિયાતો પૂરી ન કરી શકવાની સ્થિતિ અથવા નુકસાનના જોખમમાં તરત વ્યાવસાયિક મદદ લો.',
    },
  },
  'geriatric-dementia-delirium': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Memory or thinking changes in older adults can have different causes. Dementia usually develops over time, while delirium often begins suddenly and may signal an urgent medical problem.',
      hi: 'बुजुर्गों में याददाश्त या सोच में बदलाव के कई कारण हो सकते हैं। डिमेंशिया आमतौर पर धीरे-धीरे बढ़ता है, जबकि डिलीरियम अक्सर अचानक शुरू होता है और तत्काल चिकित्सकीय समस्या का संकेत हो सकता है।',
      gu: 'વૃદ્ધોમાં યાદશક્તિ અથવા વિચારશક્તિમાં ફેરફારનાં અનેક કારણો હોઈ શકે છે. ડિમેન્શિયા સામાન્ય રીતે ધીમે ધીમે વિકસે છે, જ્યારે ડિલીરિયમ ઘણીવાર અચાનક શરૂ થાય છે અને તાત્કાલિક તબીબી સમસ્યાનો સંકેત હોઈ શકે છે.',
    },
    findings: [
      {
        text: {
          en: 'A structured assessment can review the timeline, daily functioning, medicines, mood, sleep, sensory problems, and potentially treatable medical contributors.',
          hi: 'व्यवस्थित मूल्यांकन में बदलाव की समय-रेखा, दैनिक कामकाज, दवाएँ, मूड, नींद, देखने-सुनने की समस्याएँ और उपचार योग्य चिकित्सकीय कारण देखे जा सकते हैं।',
          gu: 'વ્યવસ્થિત મૂલ્યાંકનમાં ફેરફારનો સમયક્રમ, દૈનિક કાર્યક્ષમતા, દવાઓ, મૂડ, ઊંઘ, જોવાની-સાંભળવાની સમસ્યાઓ અને સારવારયોગ્ય તબીબી કારણો તપાસી શકાય છે.',
        },
        limitation: {
          en: 'Memory symptoms alone do not establish dementia; assessment should consider the person’s baseline and cultural and language context.',
          hi: 'केवल याददाश्त के लक्षणों से डिमेंशिया तय नहीं होता; व्यक्ति की पहले की क्षमता, भाषा और सांस्कृतिक संदर्भ को ध्यान में रखना चाहिए।',
          gu: 'માત્ર યાદશક્તિના લક્ષણોથી ડિમેન્શિયાનું નિદાન નક્કી થતું નથી; વ્યક્તિની અગાઉની ક્ષમતા, ભાષા અને સાંસ્કૃતિક સંદર્ભ ધ્યાનમાં લેવા જોઈએ.',
        },
      },
      {
        text: {
          en: 'For people living with dementia, respectful communication, predictable routines, meaningful activity, caregiver education, and attention to safety can support quality of life.',
          hi: 'डिमेंशिया से जी रहे लोगों के लिए सम्मानजनक संवाद, नियमित दिनचर्या, अर्थपूर्ण गतिविधियाँ, देखभालकर्ता शिक्षा और सुरक्षा पर ध्यान जीवन की गुणवत्ता में मदद कर सकते हैं।',
          gu: 'ડિમેન્શિયા સાથે જીવતા લોકો માટે સન્માનપૂર્ણ સંવાદ, નિયમિત દિનચર્યા, અર્થપૂર્ણ પ્રવૃત્તિ, સંભાળ રાખનારનું શિક્ષણ અને સલામતી પર ધ્યાન જીવનની ગુણવત્તામાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'Sudden confusion, reduced alertness, or a rapid change in behaviour needs urgent medical assessment, not just a routine memory appointment.',
          hi: 'अचानक भ्रम, सतर्कता में कमी या व्यवहार में तेजी से बदलाव होने पर नियमित याददाश्त अपॉइंटमेंट की बजाय तत्काल चिकित्सकीय मूल्यांकन जरूरी है।',
          gu: 'અચાનક ગૂંચવણ, સતર્કતામાં ઘટાડો અથવા વર્તનમાં ઝડપથી ફેરફાર થાય તો નિયમિત યાદશક્તિની મુલાકાતની રાહ જોવાને બદલે તાત્કાલિક તબીબી મૂલ્યાંકન જરૂરી છે.',
        },
      },
    ],
    sources: [
      { title: 'Dementia', organization: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/dementia', note: 'Public overview of dementia and care.' },
      { title: 'Delirium: prevention, diagnosis and management (CG103)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg103', note: 'Clinical guidance on delirium.' },
      { title: 'Dementia: assessment, management and support (NG97)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng97', note: 'Guidance on assessment and support.' },
    ],
    reviewedNote: {
      en: 'Sudden confusion is a medical warning sign. Seek urgent care, especially when accompanied by fever, weakness, falls, dehydration, or a recent medication change.',
      hi: 'अचानक भ्रम एक चेतावनी संकेत है। विशेषकर बुखार, कमजोरी, गिरने, निर्जलीकरण या हाल में दवा बदलने के साथ हो तो तुरंत चिकित्सा लें।',
      gu: 'અચાનક ગૂંચવણ તબીબી ચેતવણીનો સંકેત છે. ખાસ કરીને તાવ, નબળાઈ, પડી જવું, ડિહાઇડ્રેશન અથવા તાજેતરમાં દવા બદલાઈ હોય તો તાત્કાલિક સારવાર લો.',
    },
  },
};
