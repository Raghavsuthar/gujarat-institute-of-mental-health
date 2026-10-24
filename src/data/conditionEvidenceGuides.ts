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

  'geriatric-dementia-delirium': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Dementia describes a progressive decline in memory or other thinking abilities that affects daily life. Delirium is different: it usually develops over hours or days, causes a change in attention or awareness, and can signal an urgent medical problem. Both deserve respectful assessment rather than being dismissed as normal ageing.',
      hi: 'डिमेंशिया में याददाश्त या अन्य सोचने की क्षमताओं में धीरे-धीरे गिरावट आती है, जिससे दैनिक जीवन प्रभावित होता है। डिलीरियम अलग है: यह अक्सर कुछ घंटों या दिनों में शुरू होता है, ध्यान या जागरूकता बदल देता है और किसी जरूरी चिकित्सकीय समस्या का संकेत हो सकता है। दोनों का सम्मानपूर्वक मूल्यांकन जरूरी है; इन्हें सामान्य बुढ़ापा मानकर न टालें।',
      gu: 'ડિમેન્શિયામાં યાદશક્તિ અથવા અન્ય વિચારશક્તિમાં ધીમે ધીમે ઘટાડો થાય છે, જે દૈનિક જીવનને અસર કરે છે. ડિલિરિયમ અલગ છે: તે સામાન્ય રીતે કલાકો કે દિવસોમાં શરૂ થાય છે, ધ્યાન અથવા જાગૃતિમાં ફેરફાર કરે છે અને તાત્કાલિક તબીબી સમસ્યાનું ચિહ્ન હોઈ શકે છે. બંનેનું સન્માનપૂર્વક મૂલ્યાંકન કરવું જોઈએ; તેને સામાન્ય વૃદ્ધાવસ્થા માનીને અવગણશો નહીં.',
    },
    findings: [
      {
        text: {
          en: 'Dementia assessment may include history from the person and someone who knows them, review of medicines and physical health, cognitive assessment, and selected tests to look for treatable contributors.',
          hi: 'डिमेंशिया के मूल्यांकन में व्यक्ति और उसे अच्छी तरह जानने वाले किसी व्यक्ति से इतिहास, दवाओं व शारीरिक स्वास्थ्य की समीक्षा, संज्ञानात्मक जाँच और उपचार योग्य कारणों की तलाश के लिए आवश्यक परीक्षण शामिल हो सकते हैं।',
          gu: 'ડિમેન્શિયાના મૂલ્યાંકનમાં વ્યક્તિ અને તેને સારી રીતે ઓળખતી વ્યક્તિ પાસેથી ઇતિહાસ, દવાઓ તથા શારીરિક આરોગ્યની સમીક્ષા, જ્ઞાનાત્મક મૂલ્યાંકન અને સારવાર કરી શકાય એવા કારણો શોધવા માટે જરૂરી તપાસનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'Memory problems have many possible causes. A screening result alone cannot establish a diagnosis, and care should account for language, education, hearing, vision, and the person’s usual abilities.',
          hi: 'याददाश्त की समस्या के कई कारण हो सकते हैं। केवल स्क्रीनिंग से निदान तय नहीं होता; भाषा, शिक्षा, सुनने-देखने की क्षमता और व्यक्ति की पहले की कार्यक्षमता को ध्यान में रखना चाहिए।',
          gu: 'યાદશક્તિની સમસ્યાના ઘણા સંભવિત કારણો હોય છે. માત્ર સ્ક્રીનિંગથી નિદાન નક્કી થતું નથી; ભાષા, શિક્ષણ, સાંભળવાની-જોવાની ક્ષમતા અને વ્યક્તિની અગાઉની કાર્યક્ષમતાને ધ્યાનમાં લેવી જોઈએ.',
        },
      },
      {
        text: {
          en: 'A sudden change in attention, awareness, behaviour, or alertness may be delirium. Prompt medical assessment is important because infection, medicines, dehydration, pain, and other acute illnesses can contribute.',
          hi: 'ध्यान, जागरूकता, व्यवहार या सतर्कता में अचानक बदलाव डिलीरियम हो सकता है। शीघ्र चिकित्सकीय जाँच जरूरी है, क्योंकि संक्रमण, दवाएँ, पानी की कमी, दर्द या अन्य तीव्र बीमारियाँ इसका कारण बन सकती हैं।',
          gu: 'ધ્યાન, જાગૃતિ, વર્તન અથવા સતર્કતામાં અચાનક ફેરફાર ડિલિરિયમ હોઈ શકે છે. તાત્કાલિક તબીબી તપાસ મહત્વપૂર્ણ છે, કારણ કે ચેપ, દવાઓ, પાણીની અછત, દુખાવો અથવા અન્ય તીવ્ર બીમારીઓ કારણ બની શકે છે.',
        },
        limitation: {
          en: 'Do not wait for a routine appointment if confusion begins suddenly or the person is difficult to wake, severely unwell, or unsafe. Seek urgent medical help.',
          hi: 'यदि भ्रम अचानक शुरू हो, व्यक्ति को जगाना कठिन हो, वह बहुत बीमार लगे या सुरक्षित न हो, तो नियमित अपॉइंटमेंट का इंतजार न करें। तुरंत चिकित्सा सहायता लें।',
          gu: 'જો ગૂંચવણ અચાનક શરૂ થાય, વ્યક્તિને જગાડવી મુશ્કેલ હોય, તે ગંભીર રીતે બીમાર લાગે અથવા સલામત ન હોય, તો નિયમિત મુલાકાતની રાહ ન જુઓ. તાત્કાલિક તબીબી મદદ લો.',
        },
      },
    ],
    sources: [
      { title: 'Dementia: assessment, management and support for people living with dementia and their carers (NG97)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng97', note: 'Clinical guidance on dementia assessment, care, and support.' },
      { title: 'Delirium: prevention, diagnosis and management in hospital and long-term care (CG103)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg103', note: 'Guidance on recognising and managing delirium.' },
    ],
    reviewedNote: {
      en: 'Educational information only. Sudden confusion or a rapid change in awareness is urgent and needs prompt medical assessment.',
      hi: 'यह केवल शैक्षिक जानकारी है। अचानक भ्रम या जागरूकता में तेजी से बदलाव एक आपात स्थिति हो सकती है और शीघ्र चिकित्सकीय जाँच जरूरी है।',
      gu: 'આ માહિતી માત્ર શૈક્ષણિક હેતુ માટે છે. અચાનક ગૂંચવણ અથવા જાગૃતિમાં ઝડપથી ફેરફાર તાત્કાલિક સ્થિતિ હોઈ શકે છે અને તબીબી તપાસ જરૂરી છે.',
    },
  },
  'anorexia-nervosa': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Anorexia nervosa is an eating disorder involving restrictive eating and significant concern about weight, shape, or their effects. It can affect people at different body sizes and may cause serious physical complications; appearance alone cannot tell whether someone is unwell.',
      hi: 'एनोरेक्सिया नर्वोसा एक ईटिंग डिसऑर्डर है जिसमें भोजन सीमित करना और वजन, शरीर के आकार या उनके प्रभावों को लेकर गहरी चिंता शामिल हो सकती है। यह अलग-अलग शरीर आकार वाले लोगों को प्रभावित कर सकता है और गंभीर शारीरिक जटिलताएँ पैदा कर सकता है; केवल दिखावट से बीमारी का पता नहीं चलता।',
      gu: 'એનોરેક્સિયા નર્વોસા એક આહાર સંબંધિત વિકાર છે, જેમાં ખોરાક પર ગંભીર નિયંત્રણ અને વજન, શરીરના આકાર અથવા તેના પ્રભાવ અંગે તીવ્ર ચિંતા હોઈ શકે છે. તે વિવિધ શરીરાકાર ધરાવતા લોકોને અસર કરી શકે છે અને ગંભીર શારીરિક જટિલતાઓ ઊભી કરી શકે છે; દેખાવ પરથી જ કોઈની તબિયત નક્કી કરી શકાતી નથી.',
    },
    findings: [
      {
        text: {
          en: 'Care commonly combines medical monitoring and nutritional rehabilitation with psychological treatment. Family involvement may be helpful for children and adolescents when appropriate.',
          hi: 'देखभाल में अक्सर चिकित्सकीय निगरानी और पोषण बहाली के साथ मनोवैज्ञानिक उपचार शामिल होते हैं। उपयुक्त होने पर बच्चों और किशोरों के उपचार में परिवार की भागीदारी सहायक हो सकती है।',
          gu: 'સંભાળમાં સામાન્ય રીતે તબીબી દેખરેખ અને પોષણ પુનઃસ્થાપન સાથે મનોવૈજ્ઞાનિક સારવારનો સમાવેશ થાય છે. યોગ્ય હોય ત્યારે બાળકો અને કિશોરોની સારવારમાં પરિવારની ભાગીદારી મદદરૂપ થઈ શકે છે.',
        },
        limitation: {
          en: 'Treatment should be individualised and coordinated across relevant professionals. The degree of medical risk cannot be judged from weight or appearance alone.',
          hi: 'उपचार व्यक्ति के अनुसार होना चाहिए और संबंधित पेशेवरों के बीच समन्वय जरूरी है। केवल वजन या दिखावट से चिकित्सकीय जोखिम का आकलन नहीं किया जा सकता।',
          gu: 'સારવાર વ્યક્તિગત જરૂરિયાત મુજબ અને સંબંધિત નિષ્ણાતોના સંકલનથી થવી જોઈએ. માત્ર વજન અથવા દેખાવ પરથી તબીબી જોખમ નક્કી કરી શકાતું નથી.',
        },
      },
      {
        text: {
          en: 'Early, compassionate assessment can help identify physical risks and support recovery without blame or shame.',
          hi: 'जल्दी और संवेदनशील मूल्यांकन शारीरिक जोखिम पहचानने और दोष या शर्म दिए बिना सुधार में मदद कर सकता है।',
          gu: 'વહેલું અને સંવેદનશીલ મૂલ્યાંકન શારીરિક જોખમ ઓળખવામાં અને દોષારોપણ કે શરમ આપ્યા વિના સુધારામાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'Fainting, chest symptoms, severe weakness, dehydration, or inability to maintain intake may require urgent medical care.',
          hi: 'बेहोशी, सीने के लक्षण, अत्यधिक कमजोरी, पानी की कमी या पर्याप्त भोजन-पानी न ले पाना तत्काल चिकित्सा की आवश्यकता पैदा कर सकता है।',
          gu: 'બેભાન થવું, છાતીના લક્ષણો, ભારે નબળાઈ, પાણીની અછત અથવા પૂરતો ખોરાક-પ્રવાહી ન લઈ શકવું તાત્કાલિક તબીબી સારવારની જરૂરિયાત દર્શાવી શકે છે.',
        },
      },
    ],
    sources: [
      { title: 'Eating disorders: recognition and treatment (NG69)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng69', note: 'Guidance on assessment and treatment of eating disorders.' },
      { title: 'Eating Disorders', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/eating-disorders', note: 'Public information on eating disorders and treatment.' },
    ],
    reviewedNote: {
      en: 'This page is educational, not a diagnostic tool or meal plan. Eating disorders can be serious at any body size; seek professional assessment when concerned.',
      hi: 'यह पृष्ठ शैक्षिक है, निदान का साधन या भोजन योजना नहीं। किसी भी शरीर आकार में ईटिंग डिसऑर्डर गंभीर हो सकता है; चिंता होने पर पेशेवर जाँच कराएँ।',
      gu: 'આ પાનું શૈક્ષણિક છે, નિદાનનું સાધન કે ભોજન યોજના નથી. કોઈપણ શરીરાકારમાં આહાર વિકાર ગંભીર હોઈ શકે છે; ચિંતા હોય તો વ્યાવસાયિક મૂલ્યાંકન કરાવો.',
    },
  },
  'bulimia-nervosa': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Bulimia nervosa can involve repeated episodes of eating with a sense of loss of control followed by attempts to compensate, such as vomiting, fasting, or excessive exercise. People may experience it at any body size and may feel shame, so a non-judgemental approach matters.',
      hi: 'बुलिमिया नर्वोसा में कभी-कभी नियंत्रण खोने की अनुभूति के साथ अधिक खाना और उसके बाद उल्टी, उपवास या अत्यधिक व्यायाम जैसे तरीकों से इसकी भरपाई करने की कोशिश शामिल हो सकती है। यह किसी भी शरीर आकार के व्यक्ति को हो सकता है; शर्म महसूस हो सकती है, इसलिए बिना निर्णय किए सहायता देना महत्वपूर्ण है।',
      gu: 'બુલિમિયા નર્વોસામાં ક્યારેક નિયંત્રણ ગુમાવ્યાની લાગણી સાથે વધુ ખાવાના પ્રસંગો અને ત્યારબાદ ઊલટી, ઉપવાસ અથવા અતિશય કસરત દ્વારા તેની ભરપાઈ કરવાનો પ્રયાસ હોઈ શકે છે. તે કોઈપણ શરીરાકાર ધરાવતા વ્યક્તિને થઈ શકે છે અને શરમ અનુભવાઈ શકે છે, તેથી નિષ્પક્ષ સહાય મહત્વપૂર્ણ છે.',
    },
    findings: [
      {
        text: {
          en: 'Evidence-based psychological treatment, guided self-help in suitable cases, and regular review can help. Medical assessment may be needed to check complications and overall health.',
          hi: 'प्रमाण-आधारित मनोवैज्ञानिक उपचार, उपयुक्त मामलों में निर्देशित स्व-सहायता और नियमित समीक्षा मदद कर सकती है। जटिलताओं और समग्र स्वास्थ्य की जाँच के लिए चिकित्सकीय मूल्यांकन जरूरी हो सकता है।',
          gu: 'પુરાવા આધારિત મનોવૈજ્ઞાનિક સારવાર, યોગ્ય કિસ્સામાં માર્ગદર્શિત સ્વ-સહાય અને નિયમિત સમીક્ષા મદદરૂપ થઈ શકે છે. જટિલતાઓ અને એકંદર આરોગ્ય તપાસવા તબીબી મૂલ્યાંકન જરૂરી હોઈ શકે છે.',
        },
        limitation: {
          en: 'The appropriate approach depends on age, symptoms, medical status, and preferences. Self-help resources do not replace care when symptoms are persistent or physical risk is present.',
          hi: 'उपयुक्त तरीका उम्र, लक्षणों, चिकित्सकीय स्थिति और पसंद पर निर्भर करता है। लगातार लक्षण या शारीरिक जोखिम होने पर स्व-सहायता संसाधन उपचार का विकल्प नहीं हैं।',
          gu: 'યોગ્ય રીત ઉંમર, લક્ષણો, તબીબી સ્થિતિ અને પસંદગી પર આધારિત છે. લક્ષણો સતત રહે અથવા શારીરિક જોખમ હોય ત્યારે સ્વ-સહાય સંસાધનો સારવારનો વિકલ્પ નથી.',
        },
      },
      {
        text: {
          en: 'Recovery support can include identifying triggers, reducing shame, and building regular, flexible eating patterns with professional guidance.',
          hi: 'सुधार में ट्रिगर पहचानना, शर्म कम करना और पेशेवर मार्गदर्शन के साथ नियमित व लचीले भोजन पैटर्न बनाना शामिल हो सकता है।',
          gu: 'સુધારામાં ટ્રિગર ઓળખવા, શરમ ઘટાડવા અને વ્યાવસાયિક માર્ગદર્શન સાથે નિયમિત તથા લવચીક ખાવાની રીત વિકસાવવાનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'Avoid compensatory behaviours and rigid food rules; a qualified team can help plan safe next steps without blame.',
          hi: 'भरपाई करने वाले व्यवहार और कठोर भोजन नियमों से बचें; योग्य टीम बिना दोष दिए सुरक्षित अगले कदम तय करने में मदद कर सकती है।',
          gu: 'ભરપાઈ કરવા માટેના વર્તનો અને કઠોર ખોરાકના નિયમો ટાળો; લાયક ટીમ દોષારોપણ વિના સલામત આગળના પગલાં નક્કી કરવામાં મદદ કરી શકે છે.',
        },
      },
    ],
    sources: [
      { title: 'Eating disorders: recognition and treatment (NG69)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng69', note: 'Guidance on bulimia assessment and treatment.' },
      { title: 'Eating Disorders', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/eating-disorders', note: 'Public information on treatment and recovery.' },
    ],
    reviewedNote: {
      en: 'Educational information only. Purging, fainting, blood in vomit, chest pain, or severe weakness needs prompt medical advice or urgent care.',
      hi: 'यह केवल शैक्षिक जानकारी है। उल्टी कर भोजन निकालना, बेहोशी, उल्टी में खून, सीने में दर्द या अत्यधिक कमजोरी होने पर शीघ्र चिकित्सकीय सलाह या आपात सहायता लें।',
      gu: 'આ માહિતી માત્ર શૈક્ષણિક હેતુ માટે છે. ઊલટી દ્વારા ખોરાક કાઢવો, બેભાન થવું, ઊલટીમાં લોહી, છાતીમાં દુખાવો અથવા ભારે નબળાઈ હોય તો તાત્કાલિક તબીબી સલાહ અથવા ઇમરજન્સી મદદ લો.',
    },
  },
  'binge-eating-disorder': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Binge-eating disorder involves recurrent episodes of eating unusually large amounts with a sense of loss of control and distress, without regular compensatory behaviours. It is not a lack of willpower, and body size alone does not establish whether someone has an eating disorder.',
      hi: 'बिंज-ईटिंग डिसऑर्डर में बार-बार बहुत अधिक भोजन करना, नियंत्रण खोने की अनुभूति और उससे परेशानी शामिल हो सकती है; इसके बाद नियमित रूप से भरपाई करने वाले व्यवहार नहीं होते। यह इच्छाशक्ति की कमी नहीं है, और केवल शरीर के आकार से ईटिंग डिसऑर्डर तय नहीं होता।',
      gu: 'બિંજ-ઈટિંગ ડિસઓર્ડરમાં વારંવાર ખૂબ વધારે ખાવું, નિયંત્રણ ગુમાવ્યાની લાગણી અને તેનાથી તકલીફ અનુભવવી સામેલ હોઈ શકે છે; ત્યારબાદ નિયમિત ભરપાઈ કરતું વર્તન હોતું નથી. આ ઇચ્છાશક્તિની ખામી નથી અને માત્ર શરીરાકાર પરથી આહાર વિકાર નક્કી થતો નથી.',
    },
    findings: [
      {
        text: {
          en: 'Guided self-help and psychological treatments such as CBT may help reduce binge-eating episodes and distress. Care can also address sleep, mood, stress, and other health needs.',
          hi: 'निर्देशित स्व-सहायता और CBT जैसे मनोवैज्ञानिक उपचार अधिक खाने के दौर और उससे होने वाली परेशानी कम करने में मदद कर सकते हैं। देखभाल में नींद, मूड, तनाव और अन्य स्वास्थ्य जरूरतों पर भी ध्यान दिया जा सकता है।',
          gu: 'માર્ગદર્શિત સ્વ-સહાય અને CBT જેવી મનોવૈજ્ઞાનિક સારવાર વધુ ખાવાના પ્રસંગો અને તેનાથી થતી તકલીફ ઘટાડવામાં મદદ કરી શકે છે. સંભાળમાં ઊંઘ, મૂડ, તણાવ અને અન્ય આરોગ્ય જરૂરિયાતો પર પણ ધ્યાન આપી શકાય છે.',
        },
        limitation: {
          en: 'Treatment should avoid shame and weight stigma. A clinician can help choose an approach based on symptoms, preferences, and co-occurring conditions.',
          hi: 'उपचार में शर्म और वजन संबंधी कलंक से बचना चाहिए। चिकित्सक लक्षणों, पसंद और साथ मौजूद स्थितियों के आधार पर तरीका चुनने में मदद कर सकता है।',
          gu: 'સારવારમાં શરમ અને વજન સંબંધિત કલંક ટાળવો જોઈએ. તબીબ લક્ષણો, પસંદગી અને સાથે રહેલી સ્થિતિઓના આધારે યોગ્ય રીત પસંદ કરવામાં મદદ કરી શકે છે.',
        },
      },
      {
        text: {
          en: 'Regular nourishment, noticing emotional or situational triggers, and practising coping strategies can support recovery when developed with appropriate guidance.',
          hi: 'उचित मार्गदर्शन के साथ नियमित पोषण, भावनात्मक या परिस्थितिजन्य ट्रिगर पहचानना और सामना करने की रणनीतियों का अभ्यास सुधार में मदद कर सकता है।',
          gu: 'યોગ્ય માર્ગદર્શન સાથે નિયમિત પોષણ, ભાવનાત્મક અથવા પરિસ્થિતિજન્ય ટ્રિગર ઓળખવા અને સામનો કરવાની રીતોનો અભ્યાસ સુધારામાં મદદ કરી શકે છે.',
        },
        limitation: {
          en: 'Restrictive dieting can worsen cycles for some people. Seek professional support if episodes recur, cause distress, or affect health and daily life.',
          hi: 'कुछ लोगों में अत्यधिक भोजन-प्रतिबंध इन चक्रों को बिगाड़ सकता है। यदि ऐसे दौर बार-बार हों, परेशानी दें या स्वास्थ्य व दैनिक जीवन प्रभावित करें तो पेशेवर सहायता लें।',
          gu: 'કેટલાક લોકોમાં ખોરાક પર અતિશય નિયંત્રણ આ ચક્રને વધુ ખરાબ કરી શકે છે. આવા પ્રસંગો વારંવાર થાય, તકલીફ આપે અથવા આરોગ્ય અને દૈનિક જીવનને અસર કરે તો વ્યાવસાયિક સહાય લો.',
        },
      },
    ],
    sources: [
      { title: 'Eating disorders: recognition and treatment (NG69)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/ng69', note: 'Guidance includes binge-eating disorder treatment.' },
      { title: 'Eating Disorders', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/eating-disorders', note: 'Public information about eating disorders.' },
    ],
    reviewedNote: {
      en: 'This is educational content, not a diagnosis or diet plan. Help is available, and eating disorders can affect people at any body size.',
      hi: 'यह शैक्षिक सामग्री है, निदान या डाइट प्लान नहीं। सहायता उपलब्ध है और ईटिंग डिसऑर्डर किसी भी शरीर आकार के व्यक्ति को प्रभावित कर सकता है।',
      gu: 'આ શૈક્ષણિક સામગ્રી છે, નિદાન કે ડાયેટ પ્લાન નથી. સહાય ઉપલબ્ધ છે અને આહાર વિકાર કોઈપણ શરીરાકાર ધરાવતા વ્યક્તિને અસર કરી શકે છે.',
    },
  },
  'autism-spectrum-disorder': {
    title: { en: 'What research and guidelines say', hi: 'शोध और दिशानिर्देश क्या बताते हैं', gu: 'સંશોધન અને માર્ગદર્શિકા શું કહે છે' },
    introduction: {
      en: 'Autism is a neurodevelopmental difference that can influence communication, social interaction, sensory experiences, interests, and routines. Autistic people have varied strengths and support needs; autism is not caused by poor parenting and should not be reduced to a stereotype.',
      hi: 'ऑटिज़्म एक न्यूरो-विकासात्मक भिन्नता है जो संवाद, सामाजिक संपर्क, संवेदनात्मक अनुभव, रुचियों और दिनचर्या को प्रभावित कर सकती है। ऑटिस्टिक लोगों की क्षमताएँ और सहायता की जरूरतें अलग-अलग होती हैं; ऑटिज़्म खराब परवरिश के कारण नहीं होता और इसे रूढ़ छवि तक सीमित नहीं करना चाहिए।',
      gu: 'ઓટિઝમ એક ન્યુરો-વિકાસાત્મક ભિન્નતા છે, જે સંવાદ, સામાજિક પરસ્પર ક્રિયા, સંવેદનાત્મક અનુભવો, રસ અને રૂટિનને અસર કરી શકે છે. ઓટિસ્ટિક લોકોની શક્તિઓ અને સહાયની જરૂરિયાતો અલગ અલગ હોય છે; ઓટિઝમ ખરાબ ઉછેરને કારણે થતું નથી અને તેને રૂઢિચુસ્ત છબી સુધી મર્યાદિત ન કરવું જોઈએ.',
    },
    findings: [
      {
        text: {
          en: 'Assessment considers developmental history, communication and behaviour patterns, daily functioning, strengths, and support needs. Input from the person and, when appropriate, family or carers can be useful.',
          hi: 'मूल्यांकन में विकास का इतिहास, संवाद और व्यवहार के पैटर्न, दैनिक कामकाज, क्षमताएँ और सहायता की जरूरतें देखी जाती हैं। व्यक्ति तथा उपयुक्त होने पर परिवार या देखभालकर्ताओं की जानकारी उपयोगी हो सकती है।',
          gu: 'મૂલ્યાંકનમાં વિકાસનો ઇતિહાસ, સંવાદ અને વર્તનના પેટર્ન, દૈનિક કાર્યક્ષમતા, શક્તિઓ અને સહાયની જરૂરિયાતો ધ્યાનમાં લેવાય છે. વ્યક્તિ તથા યોગ્ય હોય ત્યારે પરિવાર અથવા સંભાળ રાખનારની માહિતી ઉપયોગી થઈ શકે છે.',
        },
        limitation: {
          en: 'No single questionnaire or online quiz can confirm autism. Assessment should be respectful of culture, language, age, masking, and co-occurring conditions.',
          hi: 'कोई एक प्रश्नावली या ऑनलाइन क्विज़ ऑटिज़्म की पुष्टि नहीं कर सकता। मूल्यांकन में संस्कृति, भाषा, उम्र, लक्षण छिपाने की प्रवृत्ति और साथ मौजूद स्थितियों का सम्मानपूर्वक ध्यान रखना चाहिए।',
          gu: 'એક પ્રશ્નાવલી અથવા ઑનલાઇન ક્વિઝ ઓટિઝમની પુષ્ટિ કરી શકતી નથી. મૂલ્યાંકનમાં સંસ્કૃતિ, ભાષા, ઉંમર, લક્ષણો છુપાવવાની રીત અને સાથે રહેલી સ્થિતિઓને સન્માનપૂર્વક ધ્યાનમાં લેવી જોઈએ.',
        },
      },
      {
        text: {
          en: 'Support may include communication accommodations, sensory adjustments, practical skills support, and help with co-occurring health or mental-health needs.',
          hi: 'सहायता में संवाद के अनुकूल बदलाव, संवेदनात्मक जरूरतों के अनुसार वातावरण, व्यावहारिक कौशल सहायता और साथ मौजूद शारीरिक या मानसिक स्वास्थ्य जरूरतों की देखभाल शामिल हो सकती है।',
          gu: 'સહાયમાં સંવાદ માટે અનુકૂળ ફેરફારો, સંવેદનાત્મક જરૂરિયાત મુજબ પર્યાવરણમાં ફેરફાર, વ્યવહારુ કૌશલ્ય સહાય અને સાથે રહેલી શારીરિક અથવા માનસિક આરોગ્ય જરૂરિયાતોની સંભાળનો સમાવેશ થઈ શકે છે.',
        },
        limitation: {
          en: 'Support should focus on wellbeing, autonomy, communication, and meaningful participation—not forcing a person to hide harmless autistic traits.',
          hi: 'सहायता का लक्ष्य स्वास्थ्य, स्वायत्तता, संवाद और सार्थक भागीदारी होना चाहिए—हानिरहित ऑटिस्टिक विशेषताओं को छिपाने के लिए मजबूर करना नहीं।',
          gu: 'સહાયનો હેતુ સુખાકારી, સ્વાયત્તતા, સંવાદ અને અર્થપૂર્ણ ભાગીદારી હોવો જોઈએ—નિર્દોષ ઓટિસ્ટિક લક્ષણો છુપાવવા માટે દબાણ કરવું નહીં.',
        },
      },
    ],
    sources: [
      { title: 'Autism spectrum disorder in under 19s: recognition, referral and diagnosis (CG128)', organization: 'NICE', url: 'https://www.nice.org.uk/guidance/cg128', note: 'Guidance on recognition and diagnostic assessment in children and young people.' },
      { title: 'Autism', organization: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/autism/about/index.html', note: 'Public information on autism and support.' },
    ],
    reviewedNote: {
      en: 'This page is educational and not a diagnostic checklist. If developmental or support concerns persist, a qualified professional can help assess needs and options.',
      hi: 'यह पृष्ठ शैक्षिक है और निदान की चेकलिस्ट नहीं। विकास या सहायता को लेकर लगातार चिंता हो तो योग्य पेशेवर जरूरतों और विकल्पों का मूल्यांकन कर सकता है।',
      gu: 'આ પાનું શૈક્ષણિક છે અને નિદાન માટેની ચેકલિસ્ટ નથી. વિકાસ અથવા સહાય અંગે સતત ચિંતા હોય તો લાયક વ્યાવસાયિક જરૂરિયાતો અને વિકલ્પોનું મૂલ્યાંકન કરી શકે છે.',
    },
  },
};
