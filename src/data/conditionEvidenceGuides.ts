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
};
