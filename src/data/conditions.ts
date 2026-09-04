import { Condition } from '../types';

export const conditionsData: Condition[] = [
  {
    id: 'depression',
    slug: 'major-depressive-disorder',
    category: 'mood',
    name: {
      en: 'Major Depressive Disorder (Depression)',
      hi: 'मेजर डिप्रेसिव डिसऑर्डर (अवसाद / डिप्रेशन)',
      gu: 'મેજર ડિપ્રેશન (ડિપ્રેશન / ગંભીર ઉદાસીનતા)',
    },
    medicalTerms: {
      en: 'Clinical Depression, Unipolar Depression',
      hi: 'क्लिनिकल डिप्रेशन (Clinical Depression), यूनीपोलर डिप्रेशन',
      gu: 'ક્લિનિકલ ડિપ્રેશન (Clinical Depression)',
    },
    overview: {
      en: 'Depression is a common, serious medical illness that negatively affects how a person feels, thinks, and acts. It is much more than ordinary sadness or grief; it is persistent and impairs daily functioning.',
      hi: 'डिप्रेशन एक वास्तविक और उपचार योग्य चिकित्सा स्थिति है जो व्यक्ति के सोचने, महसूस करने और दैनिक गतिविधियों को प्रभावित करती है। यह केवल सामान्य उदासी या कमजोरी नहीं है।',
      gu: 'ડિપ્રેશન એ એક સામાન્ય અને ગંભીર તબીબી બીમારી છે જે વ્યક્તિના વિચારવાની, અનુભવવાની અને રોજિંદા કામ કરવાની ક્ષમતા પર ઊંડી અસર કરે છે. તે માત્ર ક્ષણિક ઉદાસી નથી.',
    },
    commonSymptoms: {
      en: [
        'Persistent sad, empty, or irritable mood lasting for at least 2 weeks',
        'Marked loss of interest or pleasure in activities once enjoyed (anhedonia)',
        'Significant changes in appetite or weight (unintentional loss or gain)',
        'Insomnia (difficulty sleeping) or hypersomnia (excessive sleeping)',
        'Fatigue, exhaustion, or low energy nearly every day',
        'Feelings of worthlessness or excessive, inappropriate guilt',
        'Difficulty thinking, concentrating, or making everyday decisions',
        'Recurrent thoughts of death or suicidal ideas',
      ],
      hi: [
        'लगातार 2 सप्ताह या उससे अधिक समय तक उदासी, खालीपन या चिड़चिड़ापन रहना',
        'पसंदीदा गतिविधियों और शौक में रुचि पूरी तरह खत्म हो जाना (Anhedonia)',
        'भूख या वजन में अचानक अनपेक्षित कमी या बढ़ोतरी',
        'नींद न आना (Insomnia) या अत्यधिक नींद आना',
        'हर समय अत्यधिक थकान और ऊर्जा की कमी महसूस होना',
        'स्वयं को दोषी या बेकार महसूस करना',
        'एकाग्रता में कमी और निर्णय लेने में कठिनाई',
        'मृत्यु के विचार या जीवन समाप्त करने की इच्छा आना',
      ],
      gu: [
        'સતત 2 અઠવાડિયા કે તેથી વધુ સમય સુધી ઉદાસી, ખાલીપો અથવા ચીડિયાપણું રહેવું',
        'પહેલાં ગમતી પ્રવૃત્તિઓમાં રસ સાવ ઘટી જવો (Anhedonia)',
        'ભૂખ અથવા વજનમાં અનપેક્ષિત મોટો ફેરફાર',
        'ઊંઘ ન આવવી અથવા જરૂર કરતાં વધારે ઊંઘ આવવી',
        'શરીરમાં સતત થાક અને નબળાઈ અનુભવવી',
        'પોતાને નકામા ગણવા અથવા કારણ વિના અપરાધભાવ અનુભવવો',
        'ધ્યાન કેન્દ્રિત કરવામાં કે રોજિંદા નિર્ણયો લેવામાં મુશ્કેલી',
        'મૃત્યુના વિચારો અથવા જીવન ટૂંકાવવાની ઈચ્છા થવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Depression can profoundly disrupt work performance, academic learning, parenting, intimate relationships, physical self-care, and sleep quality. Simple daily tasks like bathing, cooking, or answering messages may feel overwhelming.',
      hi: 'अवसाद के कारण कार्यक्षमता, पढ़ाई, पारिवारिक रिश्ते, व्यक्तिगत स्वच्छता और सामाजिक जीवन गंभीर रूप से प्रभावित हो सकता है। रोजमर्रा के छोटे-छोटे काम भी भारी लग सकते हैं।',
      gu: 'ડિપ્રેશનથી નોકરી, અભ્યાસ, પારિવારિક સંબંધો અને વ્યક્તિગત દેખભાળ પર ગંભીર અસર પડે છે. રોજિંદા સામાન્ય કામો પણ અત્યંત મુશ્કેલ લાગે છે.',
    },
    causes: {
      en: 'Depression does not have a single cause. It arises from an interplay of biological factors (neurotransmitter regulation, genetics, medical illnesses like hypothyroidism), psychological factors (coping styles, chronic stress), and social environmental factors (bereavement, trauma, relationship conflict, financial hardship).',
      hi: 'डिप्रेशन किसी एक कारण से नहीं होता। यह जैविक कारणों (मस्तिष्क रसायन, आनुवंशिकी, थायरॉयड जैसी बीमारियां), मनोवैज्ञानिक कारणों (तनाव, आघात) और सामाजिक परिस्थितियों (पारिवारिक विवाद, अकेलापन, आर्थिक कठिनाई) के जटिल तालमेल से उत्पन्न होता है।',
      gu: 'ડિપ્રેશનનું કોઈ એક કારણ નથી હોતું. તે જૈવિક (મગજના રસાયણો, વારસાગત પરિબળો), મનોવૈજ્ઞાનિક (લાંબા ગાળાનો તણાવ) અને સામાજિક (નુકસાન, પારિવારિક મુશ્કેલીઓ) પરિબળોના સંગમથી થાય છે.',
    },
    riskFactors: {
      en: [
        'Family history of mood disorders',
        'Major life stressors, grief, or childhood adversity',
        'Chronic medical conditions (diabetes, cardiac illness, chronic pain)',
        'Substance misuse (alcohol or sedatives)',
        'Lack of social support or severe isolation',
      ],
      hi: [
        'परिवार में मानसिक बीमारी या डिप्रेशन का इतिहास',
        'गंभीर जीवन तनाव, किसी प्रियजन का खोना या बचपन का आघात',
        'पुरानी शारीरिक बीमारियां (मधुमेह, हृदय रोग, पुराना दर्द)',
        'शराब या अन्य नशीले पदार्थों का सेवन',
        'सामाजिक सहारे की कमी और अकेलापन',
      ],
      gu: [
        'પરિવારમાં મૂડ ડિસઓર્ડરનો ઇતિહાસ',
        'જીવનમાં મોટો તણાવ, સ્વજનનું અવસાન કે આઘાત',
        'લાંબા સમયની શારીરિક બીમારીઓ (ડાયાબિટીસ, હૃદયરોગ)',
        'દારૂ કે અન્ય નશીલા પદાર્થોનું સેવન',
        'સામાજિક ટેકાનો અભાવ અને એકલતા',
      ],
    },
    psychiatricAssessment: {
      en: 'A comprehensive evaluation includes a clinical interview assessing symptom history, medical history, family psychiatric history, substance use, suicide risk assessment, and screening for medical mimickers (e.g., thyroid function, vitamin B12 / D levels).',
      hi: 'मनोचिकित्सक विस्तृत बातचीत के माध्यम से लक्षणों के इतिहास, पारिवारिक पृष्ठभूमि, शारीरिक स्वास्थ्य (जैसे थायरॉयड व विटामिन की जांच), और तनाव के कारणों का गहन मूल्यांकन करते हैं।',
      gu: 'મનોચિકિત્સક દર્દી અને પરિવાર સાથે વિગતવાર વાતચીત કરીને લક્ષણો, જૂની બીમારીઓ, પારિવારિક ઇતિહાસ અને જરૂરી લેબ ટેસ્ટ્સ (જેમ કે થાઇરોઇડ) દ્વારા સાચી સ્થિતિ સમજે છે.',
    },
    diagnosisExplanation: {
      en: 'A valid psychiatric diagnosis requires a formal in-person clinical assessment by a qualified doctor using standardized criteria (such as DSM-5-TR or ICD-11). It cannot and should never be made through internet checklists.',
      hi: 'डिप्रेशन का वास्तविक निदान किसी योग्य मनोचिकित्सक द्वारा क्लिनिकल परीक्षण (DSM-5-TR या ICD-11) के आधार पर ही संभव है। इंटरनेट चेकलिस्ट से स्वयं निदान न करें।',
      gu: 'સાચું નિદાન ફક્ત લાયકાત ધરાવતા મનોચિકિત્સક દ્વારા જ શક્ય છે. ઇન્ટરનેટની ચેકલિસ્ટ જોઈને જાતે નિદાન કરવું જોખમી હોઈ શકે છે.',
    },
    differentialConsiderations: {
      en: 'Bipolar disorder, hypothyroidism, anemia, vitamin B12 deficiency, side effects of certain medications (e.g., steroids, beta-blockers), chronic fatigue syndrome, and complicated grief.',
      hi: 'बायपोलर डिसऑर्डर, थायरॉयड विकार (Hypothyroidism), एनीमिया, विटामिन B12 की कमी, तथा कुछ दवाओं के दुष्प्रभाव।',
      gu: 'બાયપોલર ડિસઓર્ડર, થાઇરોઇડની ખામી, એનિમિયા, વિટામિન B12 ની ઊણપ અને અન્ય શારીરિક રોગો.',
    },
    treatment: {
      psychoeducation: {
        en: 'Helping the person and their family understand depression as a real medical disorder, reducing guilt and stigma.',
        hi: 'रोगी और परिवार को यह समझाना कि डिप्रेशन एक वास्तविक चिकित्सा स्थिति है, न कि कोई कमजोरी या आलस्य।',
        gu: 'દર્દી અને પરિવારને સમજાવવું કે આ એક સાચી તબીબી બીમારી છે, કોઈ નબળાઈ કે આળસ નથી.',
      },
      lifestyleSupport: {
        en: 'Structured daily routine, graded physical activity (walking), sleep hygiene, and balanced nutrition.',
        hi: 'दैनिक दिनचर्या बनाना, नियमित पैदल चलना, पर्याप्त नींद और संतुलित आहार।',
        gu: 'રોજિંદી નિયમિત દિનચર્યા, હળવી કસરત કે ચાલવું, પૂરતી ઊંઘ અને પૌષ્ટિક આહાર.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioural Therapy (CBT), Interpersonal Therapy (IPT), and Behavioural Activation.',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT), इंटरपर्सनल थेरेपी (IPT) और बिहेवियरल एक्टिवेशन।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) અને વાતચીત આધારિત સાયકોથેરાપી.',
      },
      medications: {
        en: 'Antidepressants (such as SSRIs or SNRIs) may be prescribed by a psychiatrist when symptoms are moderate to severe. Medications take 2 to 4 weeks to show noticeable effects.',
        hi: 'मध्यम से गंभीर डिप्रेशन में मनोचिकित्सक एंटीडिप्रेसेंट दवाएं (जैसे SSRIs) लिख सकते हैं। इनका असर दिखने में 2 से 4 सप्ताह का समय लग सकता है।',
        gu: 'મધ્યમથી ગંભીર સ્થિતિમાં મનોચિકિત્સક યોગ્ય દવાઓ સૂચવી શકે છે. આ દવાની અસર દેખાતા 2 થી 4 અઠવાડિયા લાગે છે.',
      },
      familySocialInterventions: {
        en: 'Caregiver guidance, supportive listening without lecturing, and gradual encouragement of social reconnection.',
        hi: 'परिवार का भावनात्मक सहयोग, बिना ताने मारे धैर्यपूर्वक सुनना और सामाजिक जुड़ाव बनाए रखना।',
        gu: 'પરિવારનો સાથ, કોઈ પણ ટોણા માર્યા વિના સહાનુભૂતિપૂર્વક સાંભળવું અને સામાજિક ટેકો આપવો.',
      },
    },
    treatmentGoals: {
      en: 'Symptom reduction, restoration of daily social and occupational functioning, prevention of future relapses, and improved quality of life.',
      hi: 'लक्षणों को पूरी तरह ठीक करना, दैनिक व कामकाजी जीवन को सामान्य बनाना और भविष्य में बीमारी को दोबारा लौटने से रोकना।',
      gu: 'લક્ષણોમાં રાહત, રોજિંદા કામકાજમાં પુનઃ સક્રિય થવું અને બીમારી ફરીથી ન ઉથલો મારે તેની તકેદારી રાખવી.',
    },
    recoveryOutlook: {
      en: 'Depression is highly treatable. With evidence-based medical and psychological care, the majority of people experience substantial improvement and return to full lives.',
      hi: 'डिप्रेशन पूरी तरह से उपचार योग्य है। उचित चिकित्सा और परामर्श से अधिकांश लोग पूरी तरह स्वस्थ होकर सामान्य जीवन जीते हैं।',
      gu: 'ડિપ્રેશન સંપૂર્ણપણે સાધ્ય છે. સમયસરની સારવાર અને યોગ્ય માર્ગદર્શનથી મોટાભાગના લોકો સંપૂર્ણ સ્વસ્થ થઈ શકે છે.',
    },
    relapsePrevention: {
      en: 'Completing the full prescribed course of medication (do not stop when feeling better), continuing self-care routines, monitoring early warning signs, and maintaining regular psychiatric follow-up.',
      hi: 'दवा का कोर्स पूरा करना (अच्छा लगने पर भी अचानक बंद न करना), नियमित नींद रखना और तनाव प्रबंधन की तकनीकें अपनाना।',
      gu: 'દવાઓનો કોર્સ પૂરો કરવો (સારું લાગવા છતાં અચાનક બંધ ન કરવી), પૂરતી ઊંઘ અને ડૉક્ટરની નિયમિત મુલાકાત રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Expressions of wanting to die, giving away possessions, sudden unexplained calm after severe depression, severe self-harm, or complete refusal of food and water.',
      hi: 'आत्महत्या या मरने की बातें करना, अपनी चीजें दूसरों को सौंपना, अचानक शांत हो जाना, या खाना-पीना पूरी तरह छोड़ देना।',
      gu: 'આત્મહત્યાના વિચારો વ્યક્ત કરવા, પોતાની ચીજવસ્તુઓ વહેંચી દેવી, અથવા ખાવા-પીવાનું સાવ બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Depression is just sadness that you can snap out of if you have strong willpower.',
          hi: 'डिप्रेशन सिर्फ एक सामान्य उदासी है जिसे इंसान अपनी इच्छाशक्ति से ठीक कर सकता है।',
          gu: 'ડિપ્રેશન એ માત્ર ક્ષણિક ઉદાસી છે જે મનોબળથી તરત જ મટાડી શકાય છે.',
        },
        fact: {
          en: 'Depression is a medical condition involving brain circuitry and biology. One cannot simply "snap out of it" any more than one could with diabetes.',
          hi: 'डिप्रेशन एक वास्तविक न्यूरोबायोलॉजिकल चिकित्सा स्थिति है। इच्छाशक्ति से डायबिटीज या फ्रैक्चर ठीक नहीं होता, वैसे ही डिप्रेशन के लिए भी उपचार आवश्यक है।',
          gu: 'ડિપ્રેશન મગજના રસાયણો અને બાયોલોજી સાથે જોડાયેલી બીમારી છે. ડાયાબિટીસની જેમ જ તેના માટે યોગ્ય તબીબી સારવાર જરૂરી છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Will taking antidepressant medication change my personality or make me permanently dependent?',
          hi: 'क्या एंटीडिप्रेसेंट दवाओं की लत लग जाती है या ये मेरा व्यक्तित्व बदल देंगी?',
          gu: 'શું ડિપ્રેશનની દવાઓની આદત પડી જાય છે કે તે મારું વ્યક્તિત્વ બદલી નાખશે?',
        },
        answer: {
          en: 'Standard antidepressants (like SSRIs) are not addictive and do not cause cravings or tolerance. Under a psychiatrist\'s guidance, they are tapered safely when appropriate.',
          hi: 'एंटीडिप्रेसेंट दवाएं नशीली नहीं होती हैं और इनकी कोई शारीरिक लत नहीं लगती। मनोचिकित्सक की देखरेख में इन्हें धीरे-धीरे सुरक्षित तरीके से कम करके बंद किया जाता है।',
          gu: 'ડિપ્રેશનની માન્ય દવાઓ (SSRIs) બિલકુલ નશાકારક નથી હોતી અને તેની કોઈ લત લાગતી નથી. ડૉક્ટરના માર્ગદર્શન હેઠળ યોગ્ય સમયે તેને ધીમે ધીમે બંધ કરી શકાય છે.',
        },
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'World Health Organization. Comprehensive Mental Health Action Plan 2013-2030. Geneva: WHO, 2021.',
        source: 'World Health Organization',
        year: '2021',
      },
      {
        citation: 'National Institute of Mental Health and Neurosciences (NIMHANS). Clinical Practice Guidelines for Depression. Bengaluru, India.',
        source: 'NIMHANS Guidelines',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'bipolar',
    slug: 'bipolar-disorder',
    category: 'mood',
    name: {
      en: 'Bipolar Disorder',
      hi: 'बायपोलर डिसऑर्डर (Bipolar Disorder)',
      gu: 'બાયપોલર ડિસઓર્ડર (Bipolar Disorder)',
    },
    medicalTerms: {
      en: 'Bipolar I, Bipolar II, Manic-Depressive Illness',
      hi: 'बायपोलर I, बायपोलर II, मैनिक-डिप्रेसिव इलनेस',
      gu: 'બાયપોલર I, બાયપોલર II (મેનિક-ડિપ્રેસિવ)',
    },
    overview: {
      en: 'Bipolar disorder is characterized by extreme shifts in mood, energy, activity levels, and concentration. These shifts range from periods of unusually intense energy, elation, or irritability (mania or hypomania) to periods of deep sadness and hopelessness (depression).',
      hi: 'बायपोलर डिसऑर्डर एक मानसिक स्थिति है जिसमें व्यक्ति के मूड, ऊर्जा और व्यवहार में अत्यधिक उतार-चढ़ाव आते हैं। इसमें अत्यधिक ऊर्जा और उत्तेजना (Mania) तथा गहरे अवसाद (Depression) के अलग-अलग दौर आते हैं।',
      gu: 'બાયપોલર ડિસઓર્ડરમાં વ્યક્તિના મૂડ અને ઊર્જામાં મોટા ચડાવ-ઉતાર આવે છે. જેમાં એક તરફ અત્યંત ઉત્સાહ, અતિશય ઊર્જા (મેનિયા) અને બીજી તરફ ઊંડી ઉદાસીનતા (ડિપ્રેશન) જોવા મળે છે.',
    },
    commonSymptoms: {
      en: [
        'Manic Phase: Abnormally elevated, expansive, or irritable mood',
        'Decreased need for sleep (e.g., feeling rested after only 2-3 hours)',
        'Rapid, pressured speech; racing thoughts and jumping between ideas',
        'Inflated self-esteem or grandiosity (unrealistic beliefs in one\'s abilities)',
        'Impulsive or risky behaviors (extravagant spending, reckless driving)',
        'Depressive Phase: Extreme low energy, loss of interest, severe sadness',
      ],
      hi: [
        'मैनिक अवस्था (Mania): असामान्य रूप से अत्यधिक ऊर्जा, उत्तेजना या अत्यधिक चिड़चिड़ापन',
        'नींद की जरूरत बहुत कम होना (2-3 घंटे सोकर भी तरोताजा महसूस करना)',
        'बहुत तेज और लगातार बोलना; विचारों का तेजी से दौड़ना',
        'खुद को बहुत असाधारण या सर्वशक्तिमान समझना (Grandiosity)',
        'लापरवाह और जोखिम भरे काम करना (फिजूलखर्ची, खतरनाक ड्राइविंग)',
        'डिप्रेसिव अवस्था: अत्यधिक उदासी, निराशा और ऊर्जा का अभाव',
      ],
      gu: [
        'મેનિયા તબક્કો: અતિશય ઊર્જા, જરૂર કરતાં વધારે ઉત્સાહ કે અત્યંત ગુસ્સો',
        'ઊંઘની જરૂરિયાત ખૂબ ઘટી જવી (માત્ર 2-3 કલાક સૂઈને પણ તાજગી અનુભવવી)',
        'ખૂબ ઝડપથી બોલવું અને મગજમાં વિચારોની દોડધામ ચાલવી',
        'પોતાને અતિશય મહાન કે ચમત્કારી સમજવા (Grandiosity)',
        'જોખમી અને અવિચારી નિર્ણયો લેવા (ખૂબ પૈસા ઉડાવવા, બેપરવાહ ડ્રાઇવિંગ)',
        'ડિપ્રેશન તબક્કો: ઊંડી નિરાશા, ભારે થાક અને લાચારી',
      ],
    },
    dailyLifeImpact: {
      en: 'Unmanaged mood swings can severely strain marriages, disrupt careers, lead to sudden financial depletion during manic episodes, or result in severe withdrawal during depressive periods.',
      hi: 'उपचार न मिलने पर बायपोलर डिसऑर्डर वैवाहिक संबंधों, करियर और वित्तीय स्थिति को भारी नुकसान पहुंचा सकता है।',
      gu: 'જો યોગ્ય સારવાર ન મળે તો આ બીમારી પારિવારિક જીવન, નોકરી અને આર્થિક સ્થિતિને ગંભીર નુકસાન પહોંચાડી શકે છે.',
    },
    causes: {
      en: 'Strong biological and genetic predisposition, with significant involvement of neurochemical systems in the brain. Environmental stressors or severe sleep disruption often trigger episodes.',
      hi: 'इस बीमारी में आनुवंशिक (जेनेटिक) और मस्तिष्क के रासायनिक असंतुलन की प्रमुख भूमिका होती है। अत्यधिक तनाव या नींद की भारी कमी इसके दौरों को ट्रिगर कर सकती है।',
      gu: 'મગજના રસાયણો અને જનીની (વારસાગત) પરિબળો આમાં મુખ્ય છે. વધુ પડતો તણાવ કે ઊંઘનો અભાવ આ એપિસોડ્સને ઉત્તેજિત કરી શકે છે.',
    },
    riskFactors: {
      en: [
        'First-degree relative with bipolar disorder',
        'Periods of extreme psychological stress or disruption of circadian rhythms',
        'Misuse of stimulant substances or alcohol',
      ],
      hi: [
        'परिवार में किसी को बायपोलर डिसऑर्डर होना',
        'अत्यधिक मानसिक तनाव या नींद के चक्र में गंभीर गड़बड़ी',
        'नशीले पदार्थों या शराब का सेवन',
      ],
      gu: [
        'પરિવારમાં કોઈને બાયપોલર ડિસઓર્ડર હોય',
        'માનસિક આઘાત અથવા ઊંઘના સમયપત્રકમાં ગંભીર અનિયમિતતા',
        'નશીલા દ્રવ્યો કે આલ્કોહોલનું સેવન',
      ],
    },
    psychiatricAssessment: {
      en: 'Careful longitudinal history taking from both the patient and family members to identify subtle hypomanic episodes, rule out medical causes, and evaluate medication history.',
      hi: 'रोगी और परिजनों से विस्तृत इतिहास लेकर यह जांचना कि क्या पहले कभी असामान्य तेजी (Hypomania) का दौर आया था, और अन्य शारीरिक कारणों की जांच करना।',
      gu: 'દર્દી અને પરિવારજનો પાસેથી જૂની તમામ વિગતો મેળવીને ચકાસવું કે ભૂતકાળમાં ક્યારેય અતિશય ઉત્સાહ કે ઊર્જાનો સમયગાળો આવ્યો હતો કે કેમ.',
    },
    diagnosisExplanation: {
      en: 'Requires detailed clinical evaluation differentiating between unipolar depression and bipolar spectrum, as treatments differ fundamentally.',
      hi: 'बायपोलर का सही निदान केवल एक अनुभवी मनोचिकित्सक ही कर सकते हैं, क्योंकि साधारण डिप्रेशन और बायपोलर के उपचार में बहुत बड़ा अंतर होता है।',
      gu: 'આનું સાચું નિદાન મનોચિકિત્સક દ્વારા જ થાય છે, કારણ કે સાદા ડિપ્રેશન અને બાયપોલરની દવાઓમાં ખૂબ મોટો તફાવત હોય છે.',
    },
    differentialConsiderations: {
      en: 'Major Depressive Disorder, ADHD, Borderline Personality Disorder, substance-induced mood disorder, hyperthyroidism.',
      hi: 'यूनिपोलर डिप्रेशन, एडीएचडी (ADHD), बॉर्डरलाइन पर्सनालिटी डिसऑर्डर, नशीले पदार्थों का प्रभाव, हाइपरथायरायडिज्म।',
      gu: 'સામાન્ય ડિપ્રેશન, ADHD, થાઇરોઇડનો અતિરેક અથવા નશાની આડઅસર.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating patient and family about early warning signs of mood shifts and the paramount importance of regular sleep.',
        hi: 'मरीज और परिवार को बीमारी के शुरुआती लक्षणों की पहचान करना और नियमित नींद का महत्व सिखाना।',
        gu: 'દર્દી અને પરિવારને લક્ષણોની શરૂઆતી ઓળખ અને નિયમિત ઊંઘનું મહત્વ સમજાવવું.',
      },
      lifestyleSupport: {
        en: 'Strict circadian rhythm management (regular sleep and wake times), avoidance of alcohol and caffeine, stress management.',
        hi: 'सोने और जागने का पक्का समय तय रखना, नशा और कैफीन से बचना।',
        gu: 'ઊંઘવાનો અને જાગવાનો સમય એકસરખો રાખવો, આલ્કોહોલ કે વધુ પડતી ચા-કોફીથી દૂર રહેવું.',
      },
      psychotherapy: {
        en: 'Social Rhythm Therapy, Family-Focused Therapy, and Cognitive Behavioural Therapy alongside medication.',
        hi: 'सोशल रिदम थेरेपी, फैमिली-फोक्स्ड थेरेपी और कॉग्निटिव बिहेवियरल थेरेपी।',
        gu: 'ફેમિલી-ફોકસ્ડ થેરાપી અને કાઉન્સેલિંગ દવાઓની સાથે ખૂબ મદદરૂપ બને છે.',
      },
      medications: {
        en: 'Mood stabilizers (such as lithium or divalproex) and atypical antipsychotics as prescribed by a psychiatrist. Regular blood monitoring is required for certain mood stabilizers.',
        hi: 'मूड स्टेबलाइजर्स (जैसे लिथियम या सोडियम वालप्रोएट) और एंटीसाइकोटिक्स। कुछ दवाओं के लिए नियमित ब्लड टेस्ट जरूरी होते हैं।',
        gu: 'મૂડ સ્ટેબિલાઇઝર દવાઓ (જેમ કે લિથિયમ) અને અન્ય દવાઓ. કેટલીક દવાઓ માટે નિયમિત બ્લડ ટેસ્ટ જરૂરી હોય છે.',
      },
      familySocialInterventions: {
        en: 'Safety plans for manic episodes, managing financial access during periods of high risk, and caregiver support networks.',
        hi: 'मैनिक दौरों के दौरान सुरक्षा योजना बनाना, आर्थिक लेन-देन पर ध्यान रखना और परिवार को भावनात्मक संबल देना।',
        gu: 'મેનિયા દરમિયાન સુરક્ષાનું આયોજન, નાણાકીય નિર્ણયો પર દેખરેખ અને પરિવારને સહયોગ.',
      },
    },
    treatmentGoals: {
      en: 'Mood stabilization, preventing new manic or depressive episodes, preserving cognitive functioning, and enabling a fulfilling lifestyle.',
      hi: 'मूड को स्थिर रखना, नए दौरों को रोकना और सामान्य जीवनशैली बनाए रखना।',
      gu: 'મૂડને સ્થિર રાખવો, નવા હુમલા અટકાવવા અને સામાન્ય સ્વસ્થ જીવન જીવવું.',
    },
    recoveryOutlook: {
      en: 'With consistent maintenance treatment and good sleep habits, people with bipolar disorder can lead successful, productive, and meaningful lives.',
      hi: 'नियमित उपचार और सही जीवनशैली से बायपोलर से पीड़ित व्यक्ति पूरी तरह सफल और खुशहाल जीवन जी सकते हैं।',
      gu: 'નિયમિત સારવાર અને સારી દિનચર્યાથી બાયપોલર ધરાવતી વ્યક્તિ પણ સફળ અને સુખી જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Never abruptly stopping mood stabilizers, preserving nighttime sleep, and seeking early psychiatric consultation at the first sign of mood change.',
      hi: 'दवाएं कभी बीच में न छोड़ना, रात की नींद से समझौता न करना और बदलाव दिखते ही डॉक्टर से मिलना।',
      gu: 'દવાઓ ક્યારેય અચાનક બંધ ન કરવી, ઊંઘ બરાબર લેવી અને ફેરફાર દેખાય કે તરત ડૉક્ટરનો સંપર્ક કરવો.',
    },
    urgentWarningSigns: {
      en: 'Severe insomnia combined with escalating agitation, delusional beliefs, recklessness, or suicidal intent.',
      hi: 'कई दिनों तक बिल्कुल न सोना, अत्यधिक उत्तेजना, असामान्य वहम या खुद को नुकसान पहुंचाने के विचार।',
      gu: 'સતત ઊંઘ ન આવવી, અતિશય આક્રમકતા, વિચિત્ર વહેમો અથવા આત્મહત્યાના વિચારો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Bipolar disorder is just mood swings that change within minutes throughout the day.',
          hi: 'बायपोलर डिसऑर्डर का मतलब है दिन में हर मिनट में मूड बदलना।',
          gu: 'બાયપોલર એટલે દિવસમાં દર થોડી મિનિટે બદલાતો મૂડ.',
        },
        fact: {
          en: 'True bipolar episodes typically last weeks or months at a time, not rapid moment-to-moment emotional reactions.',
          hi: 'बायपोलर में मूड के दौर आमतौर पर कई हफ्तों या महीनों तक लगातार बने रहते हैं, यह मिनटों का बदलाव नहीं होता।',
          gu: 'સાચા બાયપોલર એપિસોડ્સ અઠવાડિયા કે મહિનાઓ સુધી ચાલે છે, તે ક્ષણિક ગુસ્સો કે ચિડચિડાટ નથી.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can a person with bipolar disorder work and have a family?',
          hi: 'क्या बायपोलर डिसऑर्डर वाला व्यक्ति नौकरी कर सकता है और परिवार संभाल सकता है?',
          gu: 'શું બાયપોલર ડિસઓર્ડર ધરાવતી વ્યક્તિ નોકરી અને પારિવારિક જીવન જીવી શકે?',
        },
        answer: {
          en: 'Yes. With proper ongoing medical management, mood stabilization, and healthy sleep habits, many people thrive in their careers and family lives.',
          hi: 'हाँ, बिल्कुल। सही उपचार और नियमित दवाओं के साथ व्यक्ति अपनी नौकरी, पढ़ाई और पारिवारिक जिम्मेदारियां बखूबी निभा सकता है।',
          gu: 'હા, ચોક્કસ. નિયમિત સારવાર અને સ્વસ્થ જીવનશૈલી સાથે વ્યક્તિ પોતાની કારકિર્દી અને પરિવાર ખૂબ સારી રીતે સંભાળી શકે છે.',
        },
      },
    ],
    references: [
      {
        citation: 'Goodwin GM, et al. Evidence-based guidelines for treating bipolar disorder: Revised third edition recommendations from the BAP. J Psychopharmacol. 2016.',
        source: 'British Association for Psychopharmacology (BAP)',
        year: '2016',
      },
      {
        citation: 'NIMHANS Guidelines for the Management of Bipolar Disorder. Bengaluru.',
        source: 'NIMHANS Guidelines',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'anxiety-gad',
    slug: 'generalized-anxiety-disorder',
    category: 'anxiety',
    name: {
      en: 'Generalized Anxiety Disorder (GAD)',
      hi: 'सामान्यीकृत चिंता विकार (GAD)',
      gu: 'સામાન્યકૃત ચિંતા વિકાર (GAD - વધુ પડતી ચિંતા)',
    },
    medicalTerms: {
      en: 'GAD, Chronic Anxiety Neurosis',
      hi: 'जनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD)',
      gu: 'જનરલાઇઝ્ડ એન્ઝાયટી ડિસઓર્ડર (GAD)',
    },
    overview: {
      en: 'Generalized Anxiety Disorder involves persistent, excessive, and unrealistic worry about everyday things (finances, health, family, work) that is difficult to control and lasts for at least 6 months.',
      hi: 'जनरलाइज्ड एंग्जायटी डिसऑर्डर में व्यक्ति रोजमर्रा की बातों (स्वास्थ्य, परिवार, नौकरी, धन) को लेकर लगातार अत्यधिक और अनियंत्रित चिंता में रहता है।',
      gu: 'આ બીમારીમાં વ્યક્તિ રોજિંદી બાબતો (સ્વાસ્થ્ય, પરિવાર, નાણાં, નોકરી) અંગે સતત, અતિશય અને નિયંત્રણ બહારની ચિંતા કરે છે, જે ઓછામાં ઓછા 6 મહિના સુધી ચાલુ રહે છે.',
    },
    commonSymptoms: {
      en: [
        'Persistent, uncontrollable worry nearly every day',
        'Restlessness, feeling keyed up or on edge',
        'Muscle tension, aches, or soreness (especially neck and shoulders)',
        'Difficulty concentrating or mind going blank',
        'Fatigue and irritability',
        'Sleep difficulties (trouble falling asleep due to racing worries)',
        'Physical symptoms: trembling, sweating, palpitations, stomach upset',
      ],
      hi: [
        'हर छोटी-बड़ी बात पर लगातार अनियंत्रित चिंता बने रहना',
        'बेचैनी और हमेशा तनाव में (on edge) महसूस करना',
        'मांसपेशियों में खिंचाव या दर्द (विशेषकर गर्दन और कंधों में)',
        'एकाग्रता में कमी या दिमाग सुन्न हो जाना',
        'जल्दी थकान और चिड़चिड़ापन होना',
        'चिंताओं के कारण रात में नींद आने में परेशानी होना',
        'शारीरिक लक्षण: दिल की धड़कन तेज होना, पसीना आना, पेट में मरोड़',
      ],
      gu: [
        'રોજિંદી નાની-મોટી બાબતો અંગે સતત બેચેની અને ચિંતા',
        'શરીરમાં સતત અજંપો અને તણાવ રહેવો',
        'સ્નાયુઓમાં દુખાવો કે જકડાઈ જવું (ખાસ કરીને ગરદન અને ખભામાં)',
        'ધ્યાન ન લાગવું અથવા મગજ બહેર મારી જવું',
        'ઝડપથી થાકી જવું અને સ્વભાવ ચીડિયો થઈ જવો',
        'ચિંતાઓના કારણે રાત્રે ઊંઘ ન આવવી',
        'શારીરિક લક્ષણો: ધબકારા વધવા, પરસેવો વળવો, પેટમાં ગરબડ',
      ],
    },
    dailyLifeImpact: {
      en: 'Interferes with productivity, makes decision-making agonizing, causes frequent absenteeism or medical consultations for somatic complaints, and strains relationships.',
      hi: 'यह निर्णय लेने की क्षमता को कमजोर करता है, बार-बार शारीरिक लक्षणों के लिए डॉक्टरों के चक्कर लगाने पड़ते हैं और कार्यक्षमता घट जाती है।',
      gu: 'નિર્ણય લેવામાં ખૂબ ડર લાગે છે, વારંવાર શારીરિક તકલીફો માટે ડૉક્ટરો પાસે જવું પડે છે અને કામકાજ ખોરવાય છે.',
    },
    causes: {
      en: 'Combination of biological genetic vulnerability, hyperreactive amygdala activity, chronic stress exposure, and cognitive habits of catastrophic thinking.',
      hi: 'मस्तिष्क की सतर्कता प्रणाली (Amygdala) की अति-सक्रियता, आनुवंशिकी और जीवन के लंबे तनावपूर्ण अनुभवों का मेल।',
      gu: 'મગજની ચિંતા નિયંત્રણ પ્રણાલીની અતિસંવેદનશીલતા, વારસાગત કારણો અને લાંબા ગાળાનો તણાવ.',
    },
    riskFactors: {
      en: [
        'Family history of anxiety disorders',
        'History of chronic childhood or adult stress',
        'High caffeine or nicotine intake',
        'Co-occurring physical conditions like thyroid disorders',
      ],
      hi: [
        'परिवार में किसी को अत्यधिक चिंता की समस्या होना',
        'बचपन में या लंबे समय तक भारी तनाव का अनुभव',
        'अत्यधिक चाय, कॉफी या तंबाकू का सेवन',
        'थायरॉयड या हृदय संबंधी समस्याएं',
      ],
      gu: [
        'કુટુંબમાં ચિંતાની બીમારીનો ઇતિહાસ',
        'લાંબા સમયથી ચાલતો પારિવારિક કે આર્થિક તણાવ',
        'વધુ પડતી ચા, કૉફી કે તમાકુનું સેવન',
        'થાઇરોઇડ જેવી શારીરિક સમસ્યાઓ',
      ],
    },
    psychiatricAssessment: {
      en: 'Systematic clinical interview to differentiate GAD from panic disorder, phobias, depression, or medical causes like hyperthyroidism or cardiac arrhythmias.',
      hi: 'विस्तृत बातचीत द्वारा यह समझना कि क्या यह चिंता थायरॉयड, हृदय रोग या डिप्रेशन से जुड़ी है या फिर स्वतंत्र एंग्जायटी डिसऑर्डर है।',
      gu: 'મનોચિકિત્સક દ્વારા સંપૂર્ણ તપાસ જેમાં ચકાસાય છે કે આ ચિંતા થાઇરોઇડ, હૃદયરોગ કે સાદા ડિપ્રેશનથી અલગ છે કે નહીં.',
    },
    diagnosisExplanation: {
      en: 'Diagnosed clinically when excessive anxiety and worry occur more days than not for at least 6 months, causing clinically significant distress or impairment.',
      hi: 'जब चिंता कम से कम 6 महीने तक ज्यादातर दिनों में बनी रहे और दैनिक जीवन को बाधित करे, तब मनोचिकित्सक इसका निदान करते हैं।',
      gu: 'જ્યારે અતિશય ચિંતા 6 મહિનાથી વધુ સમય માટે મોટાભાગના દિવસોમાં રહે અને રોજિંદા જીવનમાં અડચણરૂપ બને ત્યારે આ નિદાન થાય છે.',
    },
    differentialConsiderations: {
      en: 'Hyperthyroidism, pheochromocytoma, caffeine toxicity, major depression, panic disorder, adult ADHD.',
      hi: 'थायरॉयड अतिसक्रियता (Hyperthyroidism), अत्यधिक कैफीन, डिप्रेशन, पैनिक डिसऑर्डर।',
      gu: 'થાઇરોઇડની અતિસક્રિયતા, વધુ પડતું કેફીન, પેનિક ડિસઓર્ડર અથવા ડિપ્રેશન.',
    },
    treatment: {
      psychoeducation: {
        en: 'Explaining the fight-or-flight response, bodily sensations of anxiety, and distinguishing helpful worry from chronic debilitating anxiety.',
        hi: 'चिंता के समय शरीर में होने वाली प्रतिक्रियाओं (जैसे धड़कन बढ़ना) को समझाना ताकि डर कम हो सके।',
        gu: 'શરીરમાં ચિંતા વખતે થતી શારીરિક પ્રતિક્રિયાઓ (ધબકારા વધવા વગેરે) વિશે વૈજ્ઞાનિક સમજ આપવી.',
      },
      lifestyleSupport: {
        en: 'Gradual reduction of caffeine and nicotine, daily aerobic walking, relaxation exercises (deep diaphragmatic breathing, Jacobson progressive muscle relaxation).',
        hi: 'कैफीन और तंबाकू छोड़ना, रोज 30 मिनट तेज टहलना, गहरी सांस लेने के व्यायाम और प्राणायाम।',
        gu: 'ચા-કોફી ઓછી કરવી, રોજ ચાલવું, ઊંડા શ્વાસ લેવાની કસરતો અને રિલેક્સેશન ટેકનિક્સ.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioural Therapy (CBT) is highly effective, targeting worry beliefs, catastrophic interpretations, and avoidance behaviors.',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT), जो नकारात्मक विचारों और अत्यधिक आशंकाओं को संतुलित करने में मदद करती है।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) જે નકારાત્મક ચિંતાઓને યોગ્ય રીતે નિયંત્રિત કરવાનું શીખવે છે.',
      },
      medications: {
        en: 'SSRIs or SNRIs are first-line medications prescribed by a psychiatrist. Short-term medications may be used cautiously during the initial titration under strict supervision.',
        hi: 'मनोचिकित्सक द्वारा सुझाई गई प्रथम श्रेणी की दवाएं (जैसे SSRIs)। दवाएं हमेशा डॉक्टर की सलाह से ही लेनी चाहिए।',
        gu: 'મનોચિકિત્સક દ્વારા સૂચવાયેલી SSRI જેવી દવાઓ. આ દવાઓ નિયમિત અને ડૉક્ટરના કહ્યા મુજબ જ લેવી.',
      },
      familySocialInterventions: {
        en: 'Helping family avoid excessive reassurance-seeking loops while remaining emotionally supportive.',
        hi: 'परिवार को यह समझाना कि बार-बार "कुछ नहीं होगा" कहकर तसल्ली देने के बजाय मरीज को आत्मनिर्भर बनने में मदद करें।',
        gu: 'પરિવારને સમજાવવું કે દર્દીને વારંવાર ખાતરી આપવાના બદલે તેને હિંમતપૂર્વક સ્થિતિનો સામનો કરવા પ્રોત્સાહિત કરે.',
      },
    },
    treatmentGoals: {
      en: 'Substantial reduction of worry frequency, elimination of physical muscle tension, sound sleep, and fearless engagement in daily life.',
      hi: 'चिंताओं में कमी, मांसपेशियों के तनाव से राहत, अच्छी नींद और सामान्य आत्मविश्वास वापस पाना।',
      gu: 'ચિંતાઓમાં નોંધપાત્ર ઘટાડો, સ્નાયુઓના તણાવમાંથી મુક્તિ અને શાંત ઊંઘ મેળવવી.',
    },
    recoveryOutlook: {
      en: 'Very favorable with combined psychological strategies and medical therapy. Most patients regain high functional control.',
      hi: 'सही चिकित्सा और CBT से अधिकांश लोग सामान्य और तनावमुक्त जीवन जीने में पूरी तरह सक्षम हो जाते हैं।',
      gu: 'યોગ્ય સારવાર અને કાઉન્સેલિંગથી મોટાભાગના લોકો સામાન્ય અને શાંત જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Maintaining stress management routines, continuing cognitive reframing techniques, and avoiding stimulant overuse.',
      hi: 'तनाव प्रबंधन की तकनीकों का नियमित अभ्यास और कैफीन या नशे से परहेज।',
      gu: 'રિલેક્સેશન કસરતો ચાલુ રાખવી અને તણાવ વધે ત્યારે તરત સાવચેતી રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Development of severe depressive symptoms, suicidal thoughts, or unmanageable panic episodes.',
      hi: 'गंभीर अवसाद की शुरुआत, खुद को नुकसान पहुंचाने के विचार या लगातार पैनिक अटैक आना।',
      gu: 'ગંભીર ઉદાસીનતા, પોતાને નુકસાન પહોંચાડવાના વિચારો અથવા વારંવાર પેનિક એટેક આવવા.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Anxiety is just overreacting; a strong person should be able to control their nerves without help.',
          hi: 'चिंता सिर्फ नखरे या कमजोरी है, समझदार इंसान को इसे खुद ही संभाल लेना चाहिए।',
          gu: 'ચિંતા એ માત્ર નબળા મનની નિશાની છે, માણસે જાતે જ નિયંત્રિત કરી લેવું જોઈએ.',
        },
        fact: {
          en: 'Anxiety disorders involve measurable neurocircuitry dysregulation. Seeking evidence-based treatment is a sign of proactive health management, not weakness.',
          hi: 'एंग्जायटी डिसऑर्डर मस्तिष्क के जैविक तंत्र से जुड़ी वास्तविक बीमारी है। डॉक्टर की मदद लेना बुद्धिमानी है, कमजोरी नहीं।',
          gu: 'એન્ઝાયટી ડિસઓર્ડર એ મગજની જૈવિક વ્યવસ્થા સાથે જોડાયેલી સાચી બીમારી છે. મદદ માંગવી એ સમજદારી છે, નબળાઈ નથી.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Why do I have physical symptoms like chest tightness and upset stomach if it is an anxiety disorder?',
          hi: 'अगर यह सिर्फ चिंता है, तो मुझे सीने में जकड़न और पेट खराब होने जैसे शारीरिक लक्षण क्यों होते हैं?',
          gu: 'જો આ માત્ર ચિંતા છે, તો મને છાતીમાં દબાણ અને પેટમાં ગરબડ જેવા શારીરિક લક્ષણો કેમ થાય છે?',
        },
        answer: {
          en: 'The autonomic nervous system connects the brain to the heart, gut, and muscles. When the brain senses threat, it releases stress hormones that cause rapid heartbeat, shallow breathing, and altered gut motility.',
          hi: 'मस्तिष्क और शरीर तंत्रिका तंत्र द्वारा आपस में जुड़े हैं। चिंता होने पर एड्रेनालाईन जैसे हार्मोन निकलते हैं, जो दिल की धड़कन तेज करते हैं और पेट व मांसपेशियों को प्रभावित करते हैं।',
          gu: 'મગજ અને શરીર એકબીજા સાથે ચેતાતંત્રથી જોડાયેલા છે. ચિંતા થાય ત્યારે શરીરમાં હોર્મોન્સ છૂટે છે, જેનાથી ધબકારા વધે છે અને પેટમાં ગરબડ થાય છે.',
        },
      },
    ],
    references: [
      {
        citation: 'NICE Guidelines: Generalised anxiety disorder and panic disorder in adults: management (CG113). National Institute for Health and Care Excellence, UK.',
        source: 'NICE Guidelines (UK)',
        year: '2019',
      },
      {
        citation: 'Bandelow B, et al. Guidelines for the pharmacological treatment of anxiety disorders, obsessive-compulsive disorder and posttraumatic stress disorder in primary care. Int J Psychiatry Clin Pract. 2012.',
        source: 'WFSBP Clinical Guidelines',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'panic-disorder',
    slug: 'panic-disorder',
    category: 'anxiety',
    name: {
      en: 'Panic Disorder & Panic Attacks',
      hi: 'पैनिक डिसऑर्डर और पैनिक अटैक (Panic Disorder)',
      gu: 'પેનિક ડિસઓર્ડર અને પેનિક એટેક (Panic Attacks)',
    },
    medicalTerms: {
      en: 'Panic Disorder, Episodic Paroxysmal Anxiety',
      hi: 'पैनिक अटैक, एक्यूट एंग्जायटी अटैक',
      gu: 'પેનિક એટેક (તીવ્ર ગભરાટનો હુમલો)',
    },
    overview: {
      en: 'Panic disorder involves recurrent unexpected panic attacks — sudden surges of intense fear or overwhelming discomfort that reach a peak within minutes, accompanied by intense physical sensations and fear of dying or losing control.',
      hi: 'पैनिक डिसऑर्डर में अचानक तीव्र डर, घबराहट और बेचैनी का तेज दौरा (Panic Attack) पड़ता है जो कुछ ही मिनटों में चरम पर पहुंच जाता है। इसमें ऐसा लगता है मानो दिल का दौरा पड़ने वाला है या जान जाने वाली है।',
      gu: 'પેનિક ડિસઓર્ડરમાં અચાનક ખૂબ જ તીવ્ર ગભરાટ અને ડરનો હુમલો આવે છે, જે થોડી જ મિનિટોમાં ચરમસીમાએ પહોંચી જાય છે. દર્દીને લાગે છે કે હાર્ટ એટેક આવ્યો છે કે જીવ જતો રહેશે.',
    },
    commonSymptoms: {
      en: [
        'Sudden intense pounding heart, racing pulse (palpitations)',
        'Sweating, trembling, or shaking',
        'Shortness of breath or sensations of smothering/choking',
        'Chest pain, discomfort, or tightness',
        'Nausea, abdominal distress, or dizziness',
        'Chills or heat sensations; numbness or tingling (paresthesias)',
        'Feelings of unreality (derealization) or being detached from oneself (depersonalization)',
        'Fear of losing control, "going crazy," or imminent death',
        'Persistent anticipatory fear of future attacks',
      ],
      hi: [
        'अचानक दिल की धड़कन अत्यधिक तेज होना (Palpitations)',
        'सांस लेने में भारी कठिनाई या दम घुटने का अहसास होना',
        'सीने में तेज जकड़न या दर्द (जिससे दिल के दौरे का भ्रम होता है)',
        'हाथ-पैरों में कंपकंपी और पसीना आना',
        'चक्कर आना, सिर घूमना या बेहोश होने जैसा लगना',
        'हाथों या होठों में झनझनाहट या सुन्नपन (Tingling)',
        'ऐसा लगना कि अपनी सुध-बुध खो रहे हैं या मृत्यु निकट है',
        'अगले दौरे का लगातार गहरा डर बने रहना (Anticipatory Anxiety)',
      ],
      gu: [
        'અચાનક ધબકારા ખૂબ વધી જવા (છાતીમાં ધડકન સંભળાવી)',
        'શ્વાસ લેવામાં તકલીફ અથવા ગૂંગળામણ થવી',
        'છાતીમાં દુખાવો કે ભારે દબાણ (હાર્ટ એટેક જેવો ભાસ)',
        'ધ્રુજારી આવવી અને પરસેવે રેબઝેબ થઈ જવું',
        'ચક્કર આવવા અથવા બેભાન થઈ જવાનો ડર લાગવો',
        'હાથ-પગ સુન્ન થઈ જવા કે કીડીઓ ચડતી હોય તેવું લાગવું',
        'પોતાનો કાબૂ ગુમાવી દેવાનો અથવા મરી જવાનો તીવ્ર ભય',
        'ફરીથી આવો હુમલો આવશે તેનો સતત ડર રહેવો',
      ],
    },
    dailyLifeImpact: {
      en: 'Fear of having attacks often leads people to repeatedly visit emergency rooms, avoid crowded places, driving, elevators, or traveling alone (which can develop into Agoraphobia).',
      hi: 'बार-बार इमरजेंसी वार्ड के चक्कर लगाने पड़ते हैं। व्यक्ति अकेले बाहर जाने, भीड़भाड़, लिफ्ट या गाड़ी चलाने से डरने लगता है (Agoraphobia)।',
      gu: 'વારંવાર હોસ્પિટલના ઇમરજન્સી વિભાગમાં દોડવું પડે છે અને એકલા બહાર જવાનો કે ભીડવાળી જગ્યાએ જવાનો ડર પેસી જાય છે.',
    },
    causes: {
      en: 'A hypersensitive "suffocation alarm" system in the brainstem, genetic predisposition, paired with catastrophic misinterpretation of normal harmless bodily sensations (e.g., interpreting a fast heartbeat as a heart attack).',
      hi: 'मस्तिष्क के सुरक्षा अलार्म का अत्यधिक संवेदनशील होना और शरीर के सामान्य लक्षणों (जैसे थोड़ी तेज धड़कन) को जानलेवा समझ लेने का डर।',
      gu: 'મગજના એલાર્મ સેન્ટરની અતિસંવેદનશીલતા અને સામાન્ય શારીરિક ફેરફારોને ગંભીર બીમારી માની લેવાની માનસિક ભૂલ.',
    },
    riskFactors: {
      en: [
        'Family history of panic disorder or anxiety',
        'Recent severe life stress or trauma',
        'High stimulant use (energy drinks, caffeine, tobacco)',
        'History of childhood separation anxiety',
      ],
      hi: [
        'परिवार में किसी को पैनिक या एंग्जायटी होना',
        'गंभीर तनाव या किसी करीबी की बीमारी/मृत्यु',
        'अधिक कैफीन या तंबाकू का सेवन',
      ],
      gu: [
        'પરિવારમાં પેનિક એટેકનો ઇતિહાસ',
        'તાજેતરનો મોટો માનસિક આઘાત કે તણાવ',
        'ચા, કોફી કે તમાકુનું વધુ પડતું સેવન',
      ],
    },
    psychiatricAssessment: {
      en: 'Initial medical workup (ECG, basic blood tests) to confirm cardiovascular safety, followed by structured clinical interview for panic disorder and agoraphobia.',
      hi: 'पहले ईसीजी (ECG) जैसी सामान्य जांच से यह सुनिश्चित किया जाता है कि दिल पूरी तरह स्वस्थ है, फिर मनोचिकित्सक पैनिक अटैक का मूल्यांकन करते हैं।',
      gu: 'પ્રથમ ECG વગેરે દ્વારા હૃદય સંપૂર્ણ સુરક્ષિત છે તેની ખાતરી કરવામાં આવે છે, ત્યારબાદ મનોચિકિત્સક વિગતવાર તપાસ કરે છે.',
    },
    diagnosisExplanation: {
      en: 'Requires recurrent unexpected panic attacks followed by at least one month of persistent worry about additional attacks or maladaptive behavioral changes.',
      hi: 'जब बार-बार अचानक दौरे आएं और व्यक्ति को कम से कम एक महीने तक अगले दौरे का लगातार डर सताए, तब इसका निदान होता है।',
      gu: 'વારંવાર અચાનક પેનિક એટેક આવે અને એક મહિનાથી વધુ સમય સુધી ફરી હુમલો આવવાનો ડર રહે ત્યારે આનું નિદાન થાય છે.',
    },
    differentialConsiderations: {
      en: 'Cardiac arrhythmias, angina, asthma, pulmonary embolism, hyperthyroidism, hypoglycemia, pheochromocytoma.',
      hi: 'हृदय रोग (Arrhythmia), अस्थमा, थायरॉयड, ब्लड शुगर कम होना (Hypoglycemia)।',
      gu: 'હૃદયરોગ, અસ્થમા, થાઇરોઇડની ખામી કે લોહીમાં શુગર ઓછી થવી.',
    },
    treatment: {
      psychoeducation: {
        en: 'Crucial reassurance: panic attacks are physically harmless and self-limiting (they cannot cause a heart attack or suffocation).',
        hi: 'यह समझना सबसे जरूरी है कि पैनिक अटैक से कभी मौत या दिल का दौरा नहीं पड़ता; यह कुछ मिनटों में अपने आप शांत हो जाता है।',
        gu: 'સૌથી મહત્વની સમજ: પેનિક એટેકથી ક્યારેય હાર્ટ એટેક આવતો નથી કે જીવ જતો નથી; તે થોડી મિનિટોમાં આપમેળે શમી જાય છે.',
      },
      lifestyleSupport: {
        en: 'Strict elimination of excess caffeine and nicotine, regular slow breathing techniques (4-7-8 breathing), gentle exercise.',
        hi: 'कैफीन व तंबाकू पूरी तरह बंद करना, धीमी और गहरी सांस लेने का अभ्यास करना।',
        gu: 'ચા-કોફી અને તમાકુ બંધ કરવા અને ધીમા ઊંડા શ્વાસ લેવાની પદ્ધતિ શીખવી.',
      },
      psychotherapy: {
        en: 'CBT with interoceptive exposure (gradually exposing the patient to safe physical sensations like fast breathing to extinguish panic alarms).',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT), जिसमें शरीर के लक्षणों से डरना बंद करने का विशेष वैज्ञानिक अभ्यास कराया जाता है।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) જેમાં શારીરિક સંવેદનાઓથી ન ડરવાની વિશેષ તાલીમ આપવામાં આવે છે.',
      },
      medications: {
        en: 'SSRIs are the gold-standard preventive maintenance medication. Short-term rescue medications may be used very selectively under strict psychiatric guidance.',
        hi: 'नियमित बचाव के लिए मनोचिकित्सक SSRIs जैसी दवाएं देते हैं जो मस्तिष्क के अलार्म को शांत करती हैं।',
        gu: 'લાંબા ગાળાના રક્ષણ માટે મનોચિકિત્સક યોગ્ય SSRI દવાઓ સૂચવે છે જે મગજના ખોટા એલાર્મને શાંત કરે છે.',
      },
      familySocialInterventions: {
        en: 'Educating family members not to rush the patient to emergency rooms repeatedly once cardiac safety is established, and how to remain calmly present.',
        hi: 'परिवार को सिखाया जाता है कि दौरा पड़ने पर घबराएं नहीं, शांत रहें और मरीज को धीरे-धीरे सांस लेने में मदद करें।',
        gu: 'પરિવારજનોને શીખવવામાં આવે છે કે હુમલા વખતે પોતે ગભરાયા વિના શાંત રહીને દર્દીને ધીમા શ્વાસ લેવામાં સાથ આપે.',
      },
    },
    treatmentGoals: {
      en: 'Complete cessation or drastic reduction of panic attacks, elimination of fear of bodily sensations, and full return to unconstrained daily activities.',
      hi: 'पैनिक अटैक को पूरी तरह रोकना, शारीरिक लक्षणों का डर खत्म करना और निडर होकर कहीं भी आना-जाना।',
      gu: 'પેનિક એટેક બંધ કરવા, શરીરના સામાન્ય લક્ષણોનો ડર દૂર કરવો અને સામાન્ય જિંદગી જીવવી.',
    },
    recoveryOutlook: {
      en: 'Excellent. With modern CBT and proper medication, the majority of patients achieve complete freedom from panic attacks.',
      hi: 'उचित चिकित्सा और CBT से 80-90% मरीज पूरी तरह ठीक हो जाते हैं और सामान्य जीवन में लौट आते हैं।',
      gu: 'આધુનિક સારવાર અને CBT દ્વારા મોટાભાગના દર્દીઓ પેનિક એટેકમાંથી સંપૂર્ણપણે મુક્ત થઈ શકે છે.',
    },
    relapsePrevention: {
      en: 'Continuing slow breathing exercises, avoiding catastrophic self-talk when heartbeat naturally rises during exertion.',
      hi: 'व्यायाम के दौरान धड़कन बढ़ने पर घबराने के बजाय उसे सामान्य मानना, और तनाव कम रखना।',
      gu: 'કસરત વખતે સામાન્ય ધબકારા વધે ત્યારે ડરવું નહીં અને રિલેક્સેશન ટેકનિક્સ ચાલુ રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Severe acute chest pain with genuine cardiac risk factors, fainting, or intense suicidal despair.',
      hi: 'हृदय रोग के ज्ञात जोखिम के साथ अचानक नया छाती का दर्द, बेहोशी आना, या अत्यधिक निराशा।',
      gu: 'હૃદયરોગના જૂના ઇતિહાસ સાથે છાતીમાં તીવ્ર દુખાવો, બેભાન થવું કે આત્મહત્યાના વિચારો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'A panic attack can cause a fatal heart attack or cause you to stop breathing.',
          hi: 'पैनिक अटैक से इंसान को हार्ट अटैक आ सकता है या उसकी सांस रुक सकती है।',
          gu: 'પેનિક એટેકથી હાર્ટ એટેક આવી શકે છે કે શ્વાસ બંધ થઈને મોત થઈ શકે છે.',
        },
        fact: {
          en: 'A panic attack cannot cause a heart attack or asphyxiation. It is the body\'s natural protective surge functioning at the wrong time.',
          hi: 'पैनिक अटैक से कभी दिल का दौरा नहीं पड़ता। यह शरीर की प्राकृतिक सुरक्षा प्रणाली का केवल एक "गलत अलार्म" है।',
          gu: 'પેનિક એટેકથી ક્યારેય હાર્ટ એટેક આવતો નથી. તે શરીરની કુદરતી સુરક્ષા વ્યવસ્થાનો માત્ર એક "ખોટો એલાર્મ" છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What should I do right in the middle of a panic attack?',
          hi: 'पैनिक अटैक आने के ठीक उसी समय मुझे क्या करना चाहिए?',
          gu: 'પેનિક એટેક આવી રહ્યો હોય ત્યારે તત્કાલ શું કરવું જોઈએ?',
        },
        answer: {
          en: 'Sit comfortably. Remind yourself: "This is a panic attack, it is uncomfortable but not dangerous, and it will peak and pass within minutes." Breathe slowly through your nose and out gently through pursed lips.',
          hi: 'शांति से बैठ जाएं। खुद को याद दिलाएं: "यह सिर्फ एक पैनिक अटैक है, यह खतरनाक नहीं है और कुछ ही मिनटों में बीत जाएगा।" नाक से धीरे-धीरे सांस लें और मुंह से धीरे-धीरे छोड़ें।',
          gu: 'શાંતિથી બેસી જાઓ. મનમાં યાદ કરો: "આ માત્ર પેનિક એટેક છે, તે અગવડભર્યો છે પણ જોખમી નથી, થોડીવારમાં શાંત થઈ જશે." ધીમેથી નાકથી શ્વાસ લો અને મોંથી ધીમેથી બહાર કાઢો.',
        },
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Panic Disorder. 2009.',
        source: 'APA Practice Guidelines',
      },
      {
        citation: 'Craske MG, Stein MB. Anxiety. Lancet. 2016;388(10063):3048-3059.',
        source: 'The Lancet',
        year: '2016',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'ocd',
    slug: 'obsessive-compulsive-disorder',
    category: 'ocd',
    name: {
      en: 'Obsessive-Compulsive Disorder (OCD)',
      hi: 'ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD)',
      gu: 'ઓબ્સેસિવ-કમ્પલ્સિવ ડિસઓર્ડર (OCD - વહેમ અને વારંવાર કરવાની ટેવ)',
    },
    medicalTerms: {
      en: 'OCD, Anankastic Neurosis',
      hi: 'ओसीडी (OCD), विचार-बाध्यता विकार',
      gu: 'ઓસીડી (OCD)',
    },
    overview: {
      en: 'OCD is characterized by unreasonable, unwanted, recurrent thoughts, urges, or mental images (obsessions) that cause severe distress, leading the person to perform repetitive physical or mental behaviors (compulsions) in an attempt to neutralize the anxiety.',
      hi: 'OCD एक ऐसी स्थिति है जिसमें व्यक्ति के मन में अनचाहे, बार-बार आने वाले परेशान करने वाले विचार (Obsessions) आते हैं। इन विचारों की बेचैनी को शांत करने के लिए व्यक्ति बार-बार एक ही काम (Compulsions, जैसे बार-बार हाथ धोना, जांचना) करने को मजबूर हो जाता है।',
      gu: 'OCD એ એક માનસિક સ્થિતિ છે જેમાં વ્યક્તિના મગજમાં ન જોઈતા, વારંવાર આવતા પરેશાન કરનારા વિચારો કે વહેમ (Obsessions) આવે છે, અને તેનાથી બચવા વ્યક્તિ વારંવાર એકનું એક કામ (જેમ કે હાથ ધોવા, તાળા તપાસવા) કરવા મજબૂર બને છે.',
    },
    commonSymptoms: {
      en: [
        'Obsessions: Fear of contamination, dirt, or germs',
        'Fears of causing harm to loved ones or oneself accidentally',
        'Intrusive forbidden or taboo aggressive, sexual, or blasphemous thoughts',
        'Need for symmetrical arrangement, precision, or perfection',
        'Compulsions: Excessive hand washing, cleaning, or showering',
        'Repeatedly checking locks, stoves, switches, or appliances',
        'Mental rituals (counting numbers, repeating specific phrases silently)',
        'Excessive reassurance-seeking from family members',
      ],
      hi: [
        'ऑब्सेशन्स: गंदगी, कीटाणुओं या बीमारी का अत्यधिक डर',
        'अनजाने में किसी अपने को नुकसान पहुंचाने का गहरा अनचाहा डर',
        'अवांछित आक्रामक, यौन या धार्मिक ईशनिंदा के विचार आना (जिससे अपराधबोध हो)',
        'चीजों को बिल्कुल सीध में या सटीक क्रम में रखने की जिद',
        'कंपल्शन्स: बार-बार हाथ धोना, नहाना या सफाई करते रहना',
        'ताले, गैस सिलेंडर, बिजली के स्विच बार-बार जाकर जांचना',
        'मन ही मन गिनती गिनना या खास शब्दों को दोहराना',
        'परिवार वालों से बार-बार यह पूछना कि "सब ठीक है न?"',
      ],
      gu: [
        'ઓબ્સેશન્સ: ગંદકી, કીટાણુઓ કે ચેપ લાગવાનો સતત અતિશય ડર',
        'પોતાના હાથે કોઈને નુકસાન થઈ જશે તેવો વણજોઇતો ડર',
        'મનમાં અનિચ્છનીય ધાર્મિક, અશ્લીલ કે હિંસક વિચારો આવીને પરેશાન કરવા',
        'વસ્તુઓ એકદમ સરખી લાઈનમાં કે ચોક્કસ ક્રમમાં ગોઠવવાનો આગ્રહ',
        'કમ્પલ્શન્સ: વારંવાર હાથ ધોવા, કલાકો સુધી નહાવું કે સફાઈ કરવી',
        'તાળાં, ગેસ, સ્વીચ વારંવાર જઈને ચેક કરવા',
        'મનમાં મંત્રો કે ગણતરીઓ વારંવાર બોલવી',
        'પરિવારના સભ્યો પાસે વારંવાર ખાતરી માંગવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Compulsions can consume hours every day, causing severe skin breakdown from washing, extreme delays leaving home, inability to hold a job, and enormous distress to family members.',
      hi: 'सफाई और जांच में रोज कई घंटे बर्बाद होते हैं। हाथों की त्वचा छिल सकती है, समय पर घर से निकलना असंभव हो जाता है और पूरा परिवार परेशान रहता है।',
      gu: 'હાથ ધોવા અને ચેક કરવામાં રોજ કલાકો બગડે છે. હાથની ચામડી છોલાઈ જાય છે, ક્યાંય સમયસર પહોંચાતું નથી અને આખો પરિવાર પરેશાન થાય છે.',
    },
    causes: {
      en: 'Dysregulation in the cortico-striato-thalamo-cortical (CSTC) neurocircuitry, genetic predisposition, and altered serotonin and glutamate signaling.',
      hi: 'मस्तिष्क के न्यूरल सर्किट (CSTC लूप) में रासायनिक और कार्यप्रणाली असंतुलन, आनुवंशिकी और तनाव।',
      gu: 'મગજના ચોક્કસ ન્યુરોન સર્કિટ અને રસાયણો (સેરોટોનિન)માં ખામી તથા વારસાગત પરિબળો.',
    },
    riskFactors: {
      en: [
        'Family history of OCD or tic disorders',
        'Perfectionistic personality traits and high harm-avoidance',
        'Childhood trauma or severe acute psychological stress',
      ],
      hi: [
        'परिवार में किसी को ओसीडी या टिक्स की समस्या होना',
        'अत्यधिक पूर्णतावादी (Perfectionist) स्वभाव',
        'बचपन का आघात या गंभीर तनाव',
      ],
      gu: [
        'પરિવારમાં કોઈને OCD ની બીમારી હોવી',
        'અતિશય પરફેક્ટ કામ કરવાનો સ્વભાવ',
        'મોટો માનસિક તણાવ કે આઘાત',
      ],
    },
    psychiatricAssessment: {
      en: 'Detailed assessment using tools like the Yale-Brown Obsessive Compulsive Scale (Y-BOCS), evaluating insight and identifying all overt and mental rituals.',
      hi: 'मनोचिकित्सक येल-ब्राउन ओसीडी स्केल (Y-BOCS) जैसी विधियों से यह मापते हैं कि विचार कितने तीव्र हैं और दिन का कितना समय इनमें व्यर्थ हो रहा है।',
      gu: 'મનોચિકિત્સક ખાસ સ્કેલ (Y-BOCS) દ્વારા માપે છે કે ઓસીડી કેટલો ગંભીર છે અને દર્દીનો કેટલો સમય તેમાં વેડફાય છે.',
    },
    diagnosisExplanation: {
      en: 'Diagnosed when obsessions or compulsions are time-consuming (taking more than 1 hour a day) or cause clinically significant distress or functional impairment.',
      hi: 'जब ये विचार या क्रियाएं दिन में 1 घंटे से अधिक समय लें या जीवन को बुरी तरह प्रभावित करें, तब इसका निदान किया जाता है।',
      gu: 'જ્યારે આવા વિચારો કે વારંવાર કરવાના કામો રોજ 1 કલાકથી વધુ સમય લે અથવા જીવનમાં ભારે તકલીફ ઊભી કરે ત્યારે આનું નિદાન થાય છે.',
    },
    differentialConsiderations: {
      en: 'Generalized anxiety disorder, major depressive rumination, body dysmorphic disorder, illness anxiety disorder, Tourette syndrome, psychotic disorders.',
      hi: 'जनरलाइज्ड एंग्जायटी, डिप्रेशन, इलनेस एंग्जायटी डिसऑर्डर, टिक्स (Tourette syndrome)।',
      gu: 'સામાન્ય ચિંતા, ડિપ્રેશનના વિચારો, શારીરિક ખામીનો વહેમ અથવા સાયકોસિસ.',
    },
    treatment: {
      psychoeducation: {
        en: 'Explaining that intrusive thoughts happen to almost everyone; the problem in OCD is the brain falsely labeling them as dangerous emergencies.',
        hi: 'यह समझना कि अनचाहे विचार हर किसी के मन में आते हैं; ओसीडी में मस्तिष्क उन्हें गलती से गंभीर खतरा मान लेता है।',
        gu: 'સમજવું કે નકામા વિચારો દરેકને આવે છે; પરંતુ OCD માં મગજ તેને અતિશય ગંભીર માનીને ડરાવે છે.',
      },
      lifestyleSupport: {
        en: 'Stress management, maintaining consistent daily routines, and not structuring daily living around rituals.',
        hi: 'तनाव कम करना, दिनचर्या को अनुशासित रखना और घर के माहौल को ओसीडी के अनुकूल न ढालना।',
        gu: 'તણાવ ઘટાડવો, યોગ્ય દિનચર્યા રાખવી અને ઘરના નિયમોને વહેમ પ્રમાણે ન બદલવા.',
      },
      psychotherapy: {
        en: 'Exposure and Response Prevention (ERP) is the gold-standard psychotherapy. The person deliberately faces the fear without performing the compulsion until anxiety subsides naturally.',
        hi: 'एक्सपोजर एंड रिस्पॉन्स प्रिवेंशन (ERP), जो ओसीडी की सबसे प्रभावी मनोवैज्ञानिक थेरेपी है। इसमें मरीज को डर का सामना कराया जाता है बिना हाथ धोए या जांच किए।',
        gu: 'એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP) થેરાપી, જેમાં દર્દીને હાથ ધોયા વગર કે ચેક કર્યા વગર ડર સહન કરવાની પ્રેક્ટિસ કરાવાય છે.',
      },
      medications: {
        en: 'High-dose SSRIs (e.g., fluoxetine, sertraline, fluvoxamine) or clomipramine under strict psychiatric supervision. Typically requires 8 to 12 weeks to show maximum benefit.',
        hi: 'मनोचिकित्सक द्वारा निर्धारित SSRIs दवाएं। ओसीडी में दवाओं की खुराक डिप्रेशन से अधिक हो सकती है और असर दिखने में 8 से 12 सप्ताह लग सकते हैं।',
        gu: 'મનોચિકિત્સક દ્વારા સૂચવાયેલી વિશિષ્ટ SSRI દવાઓ. આ દવાઓની સંપૂર્ણ અસર દેખાવામાં 8 થી 12 અઠવાડિયાનો સમય લાગે છે.',
      },
      familySocialInterventions: {
        en: 'Training family to cease participating in compulsions (e.g., stopping answering repetitive reassurance questions).',
        hi: 'परिवार को यह सिखाना कि वे मरीज के कहने पर ताले न जांचें और न ही बार-बार तसल्ली दें, क्योंकि इससे ओसीडी बढ़ता है।',
        gu: 'પરિવારને શીખવવું કે દર્દીના કહ્યા પ્રમાણે વારંવાર સફાઈ કે ચેકિંગમાં ભાગ ન લેવો, કારણ કે તેનાથી બીમારી વધે છે.',
      },
    },
    treatmentGoals: {
      en: 'Marked reduction in compulsion time, ability to tolerate intrusive thoughts without performing rituals, and reclamation of daily functioning.',
      hi: 'बार-बार हाथ धोने या जांचने के समय में भारी कमी, अनचाहे विचारों को नजरअंदाज करने की क्षमता और सामान्य जीवन।',
      gu: 'વારંવાર તપાસવા કે હાથ ધોવાના સમયમાં મોટો ઘટાડો અને વહેમો વચ્ચે પણ શાંતિથી જીવવાની ક્ષમતા.',
    },
    recoveryOutlook: {
      en: 'With ERP and proper psychiatric medication, approximately 60-70% of individuals achieve substantial, life-changing symptom reduction.',
      hi: 'ERP थेरेपी और सही दवाओं के संयोजन से अधिकांश मरीजों में भारी सुधार आता है और वे सामान्य जीवन जी पाते हैं।',
      gu: 'ERP થેરાપી અને યોગ્ય દવાઓથી 60 થી 70 ટકા દર્દીઓમાં મોટો સુધારો થાય છે.',
    },
    relapsePrevention: {
      en: 'Continuing daily ERP maintenance practice and never resuming avoidance or "just this once" rituals.',
      hi: 'ERP तकनीकों का अभ्यास जारी रखना और "बस इस एक बार धो लेता हूँ" जैसी गलती से बचना।',
      gu: 'દવાઓ ચાલુ રાખવી અને "ચાલ આજે એક વાર હાથ ધોઈ લઉં" એવી છૂટછાટ ન આપવી.',
    },
    urgentWarningSigns: {
      en: 'Severe depression secondary to OCD exhaustion, skin infections from extreme chemical washing, or severe nutritional compromise.',
      hi: 'ओसीडी की थकान से गहरा डिप्रेशन, हाथ धोने के लिए फिनाइल या एसिड जैसे रसायनों का खतरनाक इस्तेमाल, या भोजन छोड़ देना।',
      gu: 'થાકથી ભારે ડિપ્રેશન, હાથ ધોવા માટે જોખમી કેમિકલ્સ વાપરવા અથવા ખાવા-પીવાનું બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'OCD is just being very neat, tidy, and clean.',
          hi: 'ओसीडी का मतलब सिर्फ चीजों को साफ-सुथरा और व्यवस्थित रखना है।',
          gu: 'OCD એટલે માત્ર બધી વસ્તુઓ ચોખ્ખી અને વ્યવસ્થિત રાખવાની સારી ટેવ.',
        },
        fact: {
          en: 'OCD is not a quirky personality trait. It is a tormenting medical illness driven by intense anxiety and exhausting unwanted thoughts.',
          hi: 'ओसीडी कोई शौक या खूबी नहीं है। यह एक अत्यंत पीड़ादायक मानसिक बीमारी है जिसमें व्यक्ति अपने ही अनचाहे विचारों से लाचार महसूस करता है।',
          gu: 'OCD કોઈ શોખ નથી. તે મનને અત્યંત પીડા આપતી ગંભીર બીમારી છે જેમાં વ્યક્તિ અસહાય બની જાય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'If I have bad intrusive thoughts about hurting someone, does it mean I am an evil person or that I will act on them?',
          hi: 'अगर मेरे मन में किसी को चोट पहुंचाने या गलत काम करने के गंदे विचार आते हैं, तो क्या मैं एक बुरा इंसान हूँ?',
          gu: 'જો મારા મનમાં કોઈને નુકસાન પહોંચાડવાના કે ખરાબ વિચારો આવે, તો શું હું ખરાબ માણસ છું?',
        },
        answer: {
          en: 'No. The fact that these thoughts cause you immense distress and disgust proves they are "ego-dystonic" — the exact opposite of your true values. People with OCD do not act on their intrusive obsessions.',
          hi: 'बिल्कुल नहीं! ये विचार आपको परेशान इसलिए करते हैं क्योंकि ये आपके संस्कारों के बिल्कुल विपरीत हैं। ओसीडी के मरीज इन विचारों पर कभी अमल नहीं करते।',
          gu: 'બિલકુલ નહીં! આ વિચારો તમને એટલા માટે ડરાવે છે કારણ કે તમે સારા માણસ છો અને આવા વિચારો નથી ઈચ્છતા. OCD ના દર્દીઓ આવા વિચારો પર ક્યારેય અમલ કરતા નથી.',
        },
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Obsessive-Compulsive Disorder. 2007 (with updates).',
        source: 'APA Practice Guidelines',
      },
      {
        citation: 'NICE Clinical Guideline 31: Obsessive-compulsive disorder and body dysmorphic disorder: treatment. UK, 2005.',
        source: 'NICE Guidelines',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'schizophrenia',
    slug: 'schizophrenia',
    category: 'psychotic',
    name: {
      en: 'Schizophrenia & Psychotic Disorders',
      hi: 'सिज़ोफ्रेनिया और साइकोटिक विकार (Schizophrenia)',
      gu: 'સિઝોફ્રેનિયા અને સાયકોટિક ડિસઓર્ડર (Schizophrenia)',
    },
    medicalTerms: {
      en: 'Schizophrenia, Psychosis, Thought Disorder',
      hi: 'सिज़ोफ्रेनिया (Schizophrenia), मनोविदलता',
      gu: 'સિઝોફ્રેનિયા (Schizophrenia)',
    },
    overview: {
      en: 'Schizophrenia is a chronic, treatable neurodevelopmental psychiatric illness that affects how a person perceives reality, thinks, expresses emotions, and behaves. It involves positive symptoms (hallucinations, delusions) and negative symptoms (social withdrawal, low motivation).',
      hi: 'सिज़ोफ्रेनिया मस्तिष्क की एक गंभीर लेकिन उपचार योग्य बीमारी है जो व्यक्ति के सोचने, वास्तविकता को समझने और भावनाओं को व्यक्त करने के तरीके को प्रभावित करती है। इसमें भ्रम (Delusions) और मतिभ्रम (Hallucinations, जैसे आवाजें सुनाई देना) हो सकते हैं।',
      gu: 'સિઝોફ્રેનિયા એ મગજની એક ગંભીર છતાં સારવાર યોગ્ય બીમારી છે, જેમાં વ્યક્તિની વાસ્તવિકતા સમજવાની, વિચારવાની અને લાગણીઓ દર્શાવવાની ક્ષમતા ખોરવાય છે. જેમાં વહેમ (Delusions) અને આભાસ (Hallucinations - અવાજો સંભળાવવા) થાય છે.',
    },
    commonSymptoms: {
      en: [
        'Auditory Hallucinations (hearing voices talking when no one is there)',
        'Delusions (firmly held false beliefs not shared by culture, e.g., feeling spied on or plotted against)',
        'Disorganized speech (jumping randomly between unrelated topics, incoherent speech)',
        'Disorganized or unusual motor behavior',
        'Negative symptoms: reduced emotional expression, apathy, lack of initiative',
        'Social withdrawal and neglect of basic hygiene',
        'Impaired cognitive functioning (working memory, processing speed)',
      ],
      hi: [
        'मतिभ्रम (Hallucinations): ऐसी आवाजें सुनाई देना जो दूसरों को नहीं सुनाई देतीं',
        'वहम या भ्रम (Delusions): ऐसे दृढ़ विश्वास जो सच नहीं हैं (जैसे शक होना कि कोई उनके खिलाफ साजिश कर रहा है या कैमरे से नजर रख रहा है)',
        'असंगत बातचीत: बातों में कोई सिर-पैर न होना, एक बात से दूसरी बेतुकी बात पर कूदना',
        'असामान्य व्यवहार या अजीब मुद्राएं बनाना',
        'नकारात्मक लक्षण: भावनाओं की कमी, बातचीत बंद कर देना, अकेले रहना',
        'व्यक्तिगत स्वच्छता और नहाने-धोने की पूरी तरह उपेक्षा करना',
        'सोचने-समझने और याद रखने की क्षमता में गिरावट आना',
      ],
      gu: [
        'આભાસ (Hallucinations): કોઈ ન હોવા છતાં કાનમાં અવાજો સંભળાવવા',
        'તીવ્ર વહેમ (Delusions): અવાસ્તવિક શંકાઓ (જેમ કે કોઈ મારી પાછળ પડ્યું છે, કેમેરાથી નજર રખાય છે કે જાદુટોણો કર્યો છે)',
        'અસંબદ્ધ બોલવું: વાતોમાં કોઈ તાલમેલ ન હોવો, એક વાતમાંથી અચાનક બીજી વાતમાં જવું',
        'વિચિત્ર વર્તન કે અયોગ્ય હાવભાવ',
        'નકારાત્મક લક્ષણો: લાગણીઓ બિલકુલ ન દર્શાવવી, સામાજિક રીતે સાવ અલગ થઈ જવું',
        'પોતાની સ્વચ્છતા કે કપડાંની બિલકુલ કાળજી ન રાખવી',
        'યાદશક્તિ અને નિર્ણયશક્તિ નબળી પડવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Without treatment, individuals often drop out of education or jobs, suffer severe social isolation, and encounter severe family caregiver distress.',
      hi: 'बिना इलाज के पढ़ाई या नौकरी छूट जाती है, व्यक्ति समाज से पूरी तरह कट जाता है और परिवार पर भारी भावनात्मक और आर्थिक बोझ पड़ता है।',
      gu: 'સારવાર વગર અભ્યાસ કે નોકરી છૂટી જાય છે, દર્દી એકલવાયો બની જાય છે અને પરિવારજનો ભારે મુશ્કેલીમાં મુકાય છે.',
    },
    causes: {
      en: 'Complex interplay of multiple genetic risk alleles affecting neurodevelopment, synaptic pruning, and neurotransmitter balance (dopamine, glutamate), often exacerbated by environmental factors like cannabis misuse during adolescence.',
      hi: 'मस्तिष्क के विकास और डोपामाइन (Dopamine) जैसे रसायनों के असंतुलन से जुड़ा रोग। किशोरावस्था में गांजा या चरस का सेवन इसके खतरे को कई गुना बढ़ा देता है।',
      gu: 'મગજના રસાયણો (ડોપામાઇન) અને જનીની પરિબળોની ગરબડ. કિશોરાવસ્થામાં ગાંજો કે ચરસનું સેવન આ બીમારીનું જોખમ ઘણું વધારી દે છે.',
    },
    riskFactors: {
      en: [
        'Family history of schizophrenia or psychosis',
        'Cannabis or synthetic stimulant use in adolescence',
        'Birth complications with hypoxia or maternal prenatal infections',
      ],
      hi: [
        'परिवार में सिज़ोफ्रेनिया या अन्य साइकोसिस का इतिहास',
        'कम उम्र में गांजा, भांग या अन्य नशों का सेवन',
        'जन्म के समय ऑक्सीजन की कमी या गर्भावस्था के संक्रमण',
      ],
      gu: [
        'પરિવારમાં કોઈને સિઝોફ્રેનિયાની બીમારી હોવી',
        'નાની ઉંમરે ગાંજો, ચરસ કે અન્ય નશીલા પદાર્થોનું સેવન',
        'જન્મ સમયે મગજમાં ઓક્સિજનની ખામી',
      ],
    },
    psychiatricAssessment: {
      en: 'Thorough psychiatric history, physical and neurological examination, toxicological screen, and brain imaging (MRI/CT) or EEG when indicated to rule out medical conditions (encephalitis, brain tumors, epilepsy).',
      hi: 'मनोचिकित्सक विस्तृत क्लिनिकल जांच करते हैं। कई बार दिमागी संक्रमण (Encephalitis), ट्यूमर या मिर्गी की संभावना को खारिज करने के लिए MRI या EEG भी कराई जाती है।',
      gu: 'મનોચિકિત્સક દ્વારા ઊંડાણપૂર્વક તપાસ થાય છે. મગજનો સોજો, ટ્યુમર કે વાઈ જેવી શારીરિક બીમારીઓ નકારી કાઢવા માટે જરૂર પડ્યે MRI કે બ્લડ ટેસ્ટ કરાવાય છે.',
    },
    diagnosisExplanation: {
      en: 'Diagnosed under DSM-5-TR / ICD-11 when characteristic symptoms persist for significant periods (at least 6 months with 1 month of active symptoms), with major functional decline.',
      hi: 'जब ये लक्षण कम से कम 6 महीने तक बने रहें और दैनिक कार्यक्षमता पूरी तरह ठप हो जाए, तब डॉक्टर इसका औपचारिक निदान करते हैं।',
      gu: 'જ્યારે આવા લક્ષણો ઓછામાં ઓછા 6 મહિના સુધી રહે અને સામાન્ય જીવન અસ્તવ્યસ્ત થઈ જાય ત્યારે તેનું નિદાન કરવામાં આવે છે.',
    },
    differentialConsiderations: {
      en: 'Bipolar disorder with psychotic features, major depression with psychosis, substance-induced psychotic disorder, autoimmune encephalitis, temporal lobe epilepsy.',
      hi: 'बायपोलर डिसऑर्डर, नशीले पदार्थों के कारण साइकोसिस, ऑटोइम्यून एन्सेफलाइटिस, मिर्गी।',
      gu: 'બાયપોલર ડિસઓર્ડર, નશાને કારણે થતો સાયકોસિસ, મગજનો ચેપ કે વાઈ.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating family that symptoms are biological brain phenomena, not bad behavior, spirit possession, black magic, or laziness.',
        hi: 'परिवार को यह समझाना कि यह कोई भूत-प्रेत, जादू-टोना या ऊपरी साया नहीं है, बल्कि मस्तिष्क की एक वास्तविक जैविक बीमारी है।',
        gu: 'પરિવારને વૈજ્ઞાનિક સમજ આપવી કે આ કોઈ ભૂત-પ્રેત, વળગાડ કે મેલીવિદ્યા નથી, પરંતુ મગજની જૈવિક બીમારી છે.',
      },
      lifestyleSupport: {
        en: 'Structured daily routine, supported housing, avoidance of cannabis and all illicit substances, regular sleep hours.',
        hi: 'नियमित दिनचर्या, किसी भी प्रकार के नशे (विशेषकर गांजे) से पूर्ण परहेज और शांत पारिवारिक माहौल।',
        gu: 'રોજિંદી સામાન્ય દિનચર્યા, ગાંજા કે કોઈપણ નશાથી સંપૂર્ણ દૂર રહેવું અને શાંત વાતાવરણ.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioural Therapy for Psychosis (CBTp), Social Skills Training, and Cognitive Remediation.',
        hi: 'सीधी समझ और सामाजिक कौशल की थेरेपी (Social Skills Training) तथा संज्ञानात्मक सुधार।',
        gu: 'સોશિયલ સ્કિલ્સ ટ્રેનિંગ અને કાઉન્સેલિંગ જે દર્દીને સમાજમાં હળવા-મળવામાં મદદ કરે છે.',
      },
      medications: {
        en: 'Antipsychotics are the essential foundation of treatment, balancing dopamine transmission. Long-acting injectable formulations are available for patients struggling with daily oral pills.',
        hi: 'एंटीसाइकोटिक दवाएं (Antipsychotics) उपचार की मुख्य रीढ़ हैं। जो मरीज रोज गोली नहीं खा पाते, उनके लिए लंबे समय तक असर करने वाले मासिक इंजेक्शन (Depot injections) भी उपलब्ध हैं।',
        gu: 'એન્ટિસાયકોટિક દવાઓ આ સારવારનો મુખ્ય પાયો છે. જે દર્દીઓ રોજ ગોળી ન લઈ શકતા હોય તેમના માટે મહિનામાં એક વાર અપાતા ઇન્જેક્શન પણ ઉપલબ્ધ હોય છે.',
      },
      familySocialInterventions: {
        en: 'Family Intervention Therapy to reduce High Expressed Emotion (criticism, hostility, over-involvement) which drastically cuts relapse rates.',
        hi: 'पारिवारिक थेरेपी: परिवार को सिखाना कि मरीज पर चिल्लाएं नहीं, ताने न मारें और ज्यादा बहस न करें। इससे बीमारी का दोबारा लौटना रुकता है।',
        gu: 'પરિવારને તાલીમ કે દર્દી પર ગુસ્સો ન કરવો, ટોણા ન મારવા અને શાંતિથી તેની સંભાળ રાખવી.',
      },
    },
    treatmentGoals: {
      en: 'Remission of hallucinations and delusions, prevention of hospitalization, preservation of cognitive skills, and independent community living.',
      hi: 'आवाजों और वहमों को पूरी तरह शांत करना, अस्पताल में भर्ती होने से बचाना और मरीज को आत्मनिर्भर बनाना।',
      gu: 'અવાજો અને વહેમ બંધ કરવા, હોસ્પિટલમાં દાખલ થવું ન પડે અને દર્દી પોતાનું કામ જાતે કરી શકે.',
    },
    recoveryOutlook: {
      en: 'Early intervention yields significantly better outcomes. With modern medications and social rehabilitation, many individuals maintain stability and employment.',
      hi: 'जितनी जल्दी इलाज शुरू होगा, परिणाम उतने ही बेहतर होंगे। सही दवा से कई लोग सामान्य रूप से काम करने में सक्षम होते हैं।',
      gu: 'જેટલું વહેલું નિદાન અને સારવાર થશે તેટલું સારું પરિણામ મળશે. યોગ્ય દવાથી ઘણા દર્દીઓ સામાન્ય જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Strict continuity of maintenance antipsychotic medications; never stopping medicines abruptly, avoiding all substances, and maintaining low-stress environments.',
      hi: 'दवा कभी बंद न करना (ठीक होने के बाद भी डॉक्टर के कहे अनुसार लंबे समय तक दवा जरूरी होती है) और किसी भी प्रकार के नशे से दूर रहना।',
      gu: 'દવાઓ ક્યારેય પોતાની મેળે બંધ ન કરવી (સારું થઈ ગયા પછી પણ લાંબો સમય દવા જરૂરી છે) અને નશાથી દૂર રહેવું.',
    },
    urgentWarningSigns: {
      en: 'Command auditory hallucinations instructing harm, severe paranoia preventing eating or drinking, acute catatonia, or severe agitation.',
      hi: 'कानों में ऐसी आवाजें आना जो किसी को नुकसान पहुंचाने का आदेश दें, जहर के डर से खाना-पीना छोड़ देना, या अत्यधिक आक्रामकता।',
      gu: 'કાનમાં કોઈને નુકસાન પહોંચાડવાના આદેશ સંભળાવવા, ઝેર આપવાના વહેમથી અન્ન-જળ ત્યજી દેવા અથવા હિંસક બનવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Schizophrenia means having a "split personality" or multiple personalities.',
          hi: 'सिज़ोफ्रेनिया का मतलब "स्प्लिट पर्सनालिटी" या एक शरीर में कई आत्माएं/व्यक्तित्व होना है।',
          gu: 'સિઝોફ્રેનિયા એટલે "સ્પ્લિટ પર્સનાલિટી" કે એક જ શરીરમાં બે અલગ અલગ માણસો હોવા.',
        },
        fact: {
          en: 'Schizophrenia is not multiple personality disorder. The word refers to a fragmentation of thought processes and disconnection from reality.',
          hi: 'सिज़ोफ्रेनिया कोई मल्टीपल पर्सनालिटी नहीं है। यह मस्तिष्क की एक बीमारी है जिसमें विचारों और वास्तविकता का तारतम्य टूट जाता है।',
          gu: 'સિઝોફ્રેનિયા એ મલ્ટીપલ પર્સનાલિટી નથી. તે વાસ્તવિકતા અને વિચારો વચ્ચેનો સંપર્ક તૂટી જવાની મગજની બીમારી છે.',
        },
      },
      {
        myth: {
          en: 'People with schizophrenia are inherently violent and dangerous.',
          hi: 'सिज़ोफ्रेनिया के सभी मरीज खतरनाक और हिंसक होते हैं।',
          gu: 'સિઝોફ્રેનિયા ધરાવતા તમામ લોકો હિંસક અને જોખમી હોય છે.',
        },
        fact: {
          en: 'The vast majority of individuals with schizophrenia are not violent. They are far more likely to be victims of violence, stigma, and exploitation.',
          hi: 'अधिकांश मरीज बिल्कुल भी हिंसक नहीं होते। वास्तव में, वे खुद समाज के भेदभाव और शोषण का शिकार होते हैं।',
          gu: 'મોટાભાગના દર્દીઓ હિંસક હોતા નથી. હકીકતમાં તેઓ પોતે સમાજના ભેદભાવ અને અન્યાયનો ભોગ બનતા હોય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Why do psychiatric medicines need to be continued even after the voices and hallucinations have stopped?',
          hi: 'जब आवाजें आना और शक होना बंद हो जाए, तो क्या दवा तुरंत बंद कर सकते हैं?',
          gu: 'જ્યારે અવાજો સંભળાવવાના બંધ થઈ જાય અને વહેમ મટી જાય, ત્યારે શું દવા બંધ કરી શકાય?',
        },
        answer: {
          en: 'No. Antipsychotics work by keeping neurotransmitters balanced. Abruptly stopping medicine almost inevitably leads to a severe relapse within months. Long-term maintenance protects brain health.',
          hi: 'बिल्कुल नहीं! दवाएं मस्तिष्क के रसायनों को संतुलित रखती हैं। दवा अचानक बंद करने से कुछ ही महीनों में बीमारी और अधिक गंभीर रूप में वापस आ सकती है।',
          gu: 'ના, બિલકુલ નહીં! દવાઓ મગજના રસાયણોને કંટ્રોલમાં રાખે છે. અચાનક દવા બંધ કરવાથી થોડા જ મહિનામાં બીમારી ફરીથી ગંભીર સ્વરૂપે પાછી આવી શકે છે.',
        },
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Schizophrenia. 3rd edition, 2020.',
        source: 'APA Practice Guidelines',
        year: '2020',
      },
      {
        citation: 'Indian Psychiatric Society (IPS). Clinical Practice Guidelines for the Management of Schizophrenia. Indian J Psychiatry.',
        source: 'Indian Psychiatric Society',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'ptsd',
    slug: 'post-traumatic-stress-disorder',
    category: 'trauma',
    name: {
      en: 'Post-Traumatic Stress Disorder (PTSD)',
      hi: 'पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (PTSD)',
      gu: 'પોસ્ટ-ટ્રોમેટિક સ્ટ્રેસ ડિસઓર્ડર (PTSD - આઘાતજનક તણાવ)',
    },
    medicalTerms: {
      en: 'PTSD, Traumatic Neurosis',
      hi: 'पीटीएसडी (PTSD), आघातजन्य तनाव विकार',
      gu: 'પીટીએસડી (PTSD)',
    },
    overview: {
      en: 'PTSD develops in some individuals who have experienced or witnessed a traumatic event involving actual or threatened death, serious injury, or sexual violence. Symptoms include intrusive memories, avoidance, negative mood alterations, and hyperarousal.',
      hi: 'PTSD किसी भीषण हादसे, प्राकृतिक आपदा, गंभीर दुर्घटना या शारीरिक/मानसिक आघात का सामना करने के बाद होने वाली स्थिति है। इसमें उस घटना की डरावनी यादें बार-बार आकर व्यक्ति को झकझोर देती हैं।',
      gu: 'જીવનમાં કોઈ ગંભીર અકસ્માત, કુદરતી હોનારત, હિંસા કે મોટો આઘાત અનુભવ્યા પછી PTSD થઈ શકે છે. જેમાં તે ઘટનાની ડરામણી યાદો વારંવાર મનમાં આવીને વ્યક્તિને ધ્રુજાવી દે છે.',
    },
    commonSymptoms: {
      en: [
        'Intrusive memories, recurrent distressing nightmares of the event',
        'Dissociative flashbacks (feeling or acting as if the traumatic event were recurring)',
        'Intense psychological and physiological distress when exposed to trauma reminders',
        'Persistent avoidance of memories, thoughts, feelings, places, or people associated with the event',
        'Persistent negative emotional state (fear, horror, anger, guilt, shame)',
        'Feelings of detachment or estrangement from others; emotional numbness',
        'Hypervigilance (constantly scanning the environment for threats)',
        'Exaggerated startle response, irritability, and insomnia',
      ],
      hi: [
        'घटना की भयावह यादें और बुरे सपने बार-बार आना (Flashbacks)',
        'ऐसा महसूस होना मानो वह भयानक घटना अभी दोबारा घट रही हो',
        'हादसे से जुड़ी जगहों, लोगों या बातों से पूरी तरह दूर भागना (Avoidance)',
        'हमेशा चौंकना, डरना और हर समय किसी खतरे की आशंका में रहना (Hypervigilance)',
        'भावनात्मक रूप से सुन्न हो जाना, अपनों से कटाव महसूस होना',
        'गहरा अपराधबोध या खुद को हादसे का जिम्मेदार मानना',
        'रात को नींद न आना और अचानक तेज गुस्सा आना',
      ],
      gu: [
        'ઘટનાની ભયાનક યાદો અને રાત્રે ખરાબ સપના વારંવાર આવવા (Flashbacks)',
        'એવું લાગવું કે તે ખરાબ ઘટના અત્યારે ફરીથી બની રહી છે',
        'તે ઘટના સાથે જોડાયેલા સ્થળો, લોકો કે વાતોથી દૂર ભાગવું',
        'સતત ડરેલા રહેવું અને સામાન્ય અવાજથી પણ ચમકી જવું (Hypervigilance)',
        'લાગણીહીન થઈ જવું, સ્વજનોથી અલિપ્ત થઈ જવું',
        'અપરાધભાવ કે ઊંડો અફસોસ રહેવો',
        'ઊંઘ ન આવવી અને અતિશય ચીડિયાપણું રહેવું',
      ],
    },
    dailyLifeImpact: {
      en: 'Strains marriages, impedes return to work (e.g., inability to drive after a major road accident), and frequently leads to secondary alcohol or sedative misuse to self-medicate hyperarousal.',
      hi: 'व्यक्ति सामान्य काम पर नहीं लौट पाता (जैसे सड़क हादसे के बाद गाड़ी में बैठने से डरना), रिश्ते बिखरने लगते हैं और कई बार नींद पाने के लिए शराब या नशे का सहारा लेने लगते हैं।',
      gu: 'રોજિંદા કામકાજ પર અસર થાય છે (જેમ કે અકસ્માત પછી વાહન ચલાવવાનો ભય), સંબંધો બગડે છે અને ઊંઘ મેળવવા દારૂ કે નશાનો સહારો લેવાનું જોખમ રહે છે.',
    },
    causes: {
      en: 'Failure of trauma memory integration in the hippocampus and hyperactivation of the amygdala, impairing the brain’s ability to recognize that the past threat is over.',
      hi: 'मस्तिष्क में आघात की यादों का सही तालमेल न बैठ पाना। मस्तिष्क का डर केंद्र (Amygdala) यह समझ नहीं पाता कि खतरा अब टल चुका है।',
      gu: 'મગજના ડર કેન્દ્ર (Amygdala) ની અતિસંવેદનશીલતા, જેના લીધે મગજ સમજી શકતું નથી કે ભૂતકાળનો ખતરો હવે પૂરો થઈ ગયો છે.',
    },
    riskFactors: {
      en: [
        'Severity, duration, and proximity of the traumatic event',
        'Lack of social support after the event',
        'History of prior childhood trauma or prior psychiatric conditions',
      ],
      hi: [
        'हादसे की भयावहता और गंभीरता',
        'हादसे के बाद परिवार या समाज से भावनात्मक सहारा न मिलना',
        'पहले से तनाव या मानसिक समस्या का इतिहास',
      ],
      gu: [
        'આઘાતજનક ઘટનાની તીવ્રતા',
        'ઘટના પછી પરિવાર કે મિત્રોના ટેકાનો અભાવ',
        'બાળપણમાં કોઈ ખરાબ અનુભવ થયો હોય',
      ],
    },
    psychiatricAssessment: {
      en: 'Careful, non-retraumatizing trauma history evaluation, assessing co-morbid depression, substance use, and suicide risk.',
      hi: 'मनोचिकित्सक संवेदनशीलता से मरीज की स्थिति का मूल्यांकन करते हैं, बिना उन्हें दोबारा उस भयानक अनुभव में धकेले।',
      gu: 'મનોચિકિત્સક દર્દીને ફરીથી દુઃખી કર્યા વિના ખૂબ જ સંવેદનશીલતાથી આખી પરિસ્થિતિનું મૂલ્યાંકન કરે છે.',
    },
    diagnosisExplanation: {
      en: 'Diagnosed when symptoms from all four clusters (intrusion, avoidance, negative alterations in mood/cognition, hyperarousal) persist for more than 1 month and cause significant distress.',
      hi: 'जब हादसे के 1 महीने बाद भी ये लक्षण लगातार बने रहें और जीवन को अस्त-व्यस्त कर दें, तब PTSD का निदान किया जाता है।',
      gu: 'જ્યારે ઘટનાના 1 મહિના પછી પણ આ ડરામણા લક્ષણો ચાલુ રહે અને સામાન્ય જીવન મુશ્કેલ બને ત્યારે આનું નિદાન થાય છે.',
    },
    differentialConsiderations: {
      en: 'Acute Stress Disorder (under 1 month), Generalized Anxiety Disorder, Major Depression, adjustment disorders, head injury sequelae.',
      hi: 'एक्यूट स्ट्रेस डिसऑर्डर (1 महीने से कम), डिप्रेशन, सिर की चोट का असर।',
      gu: 'એક્યુટ સ્ટ્રેસ ડિસઓર્ડર (ટૂંકા ગાળાનો તણાવ), ડિપ્રેશન અથવા માથાની ઈજા.',
    },
    treatment: {
      psychoeducation: {
        en: 'Normalizing symptoms as the brain\'s protective response stuck in overdrive, instilling hope for recovery.',
        hi: 'रोगी को यह समझाना कि उसका शरीर खतरे की पुरानी यादों से खुद को बचाने की कोशिश कर रहा है और यह ठीक हो सकता है।',
        gu: 'દર્દીને સમજાવવું કે આ મગજની સામાન્ય સુરક્ષા પ્રણાલીની ભૂલભરેલી પ્રતિક્રિયા છે અને તે સંપૂર્ણ મટી શકે છે.',
      },
      lifestyleSupport: {
        en: 'Grounding techniques (5-4-3-2-1 sensory exercises), breathing retraining, structured routines, avoiding alcohol.',
        hi: 'ग्राउंडिंग तकनीकें (आंखें खोलकर वर्तमान की 5 चीजें देखना), गहरी सांस लेना और शराब से पूर्ण दूरी।',
        gu: 'ગ્રાઉન્ડિંગ કસરતો (વર્તમાનમાં ધ્યાન કેન્દ્રિત કરવું), ઊંડા શ્વાસ અને નશાથી અંતર.',
      },
      psychotherapy: {
        en: 'Trauma-Focused Cognitive Behavioural Therapy (TF-CBT) and Eye Movement Desensitization and Reprocessing (EMDR).',
        hi: 'ट्रॉमा-फोक्स्ड सीबीटी (TF-CBT) और ईएमडीआर (EMDR), जो आघात की कड़वी यादों के दर्द को कम करती हैं।',
        gu: 'ટ્રોમા-ફોકસ્ડ CBT અને EMDR થેરાપી જે જૂની કડવી યાદોની પીડાને કાયમ માટે શાંત કરવામાં મદદ કરે છે.',
      },
      medications: {
        en: 'SSRIs or SNRIs may be prescribed by a psychiatrist to alleviate chronic hyperarousal, depression, and anxiety.',
        hi: 'मनोचिकित्सक द्वारा सुझाई गई दवाएं (जैसे SSRIs) जो अत्यधिक घबराहट, चिड़चिड़ेपन और बुरे सपनों को कम करती हैं।',
        gu: 'મનોચિકિત્સક દ્વારા સૂચવાયેલી SSRI દવાઓ જે અતિશય ગભરાટ અને ખરાબ સપનાઓને કાબૂમાં લાવે છે.',
      },
      familySocialInterventions: {
        en: 'Guiding family members on how to avoid triggering trauma reminders and providing a secure, patient home environment.',
        hi: 'परिवार को सिखाना कि मरीज को बार-बार उस घटना को याद करने के लिए मजबूर न करें और धैर्यपूर्वक साथ दें।',
        gu: 'પરિવારને માર્ગદર્શન કે દર્દીને જૂની ઘટના વારંવાર યાદ ન કરાવવી અને શાંત હૂંફાળું વાતાવરણ પૂરું પાડવું.',
      },
    },
    treatmentGoals: {
      en: 'Processing traumatic memories so they no longer trigger acute terror, ending hypervigilance, and restoring connection to loved ones.',
      hi: 'हादसे की यादों के डर को खत्म करना, सामान्य नींद पाना और अपनों के साथ खुशहाल जीवन में लौटना।',
      gu: 'જૂની યાદોનો ડર દૂર કરવો, શાંત ઊંઘ મેળવવી અને પરિવાર સાથે સામાન્ય સંબંધો પુનઃસ્થાપિત કરવા.',
    },
    recoveryOutlook: {
      en: 'With evidence-based trauma psychotherapy and psychiatric support, significant symptom remission is achieved for most individuals.',
      hi: 'सही मनोवैज्ञानिक परामर्श और दवाओं से अधिकांश लोग आघात से पूरी तरह उबर जाते हैं।',
      gu: 'યોગ્ય સાયકોથેરાપી અને તબીબી સારવારથી મોટાભાગના લોકો આઘાતમાંથી સંપૂર્ણ બહાર આવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Anticipating anniversary reactions (dates of the event) and applying learned coping mechanisms proactively.',
      hi: 'हादसे की तारीख या बरसी के समय तनाव बढ़ने पर पहले से सीखे गए उपायों को अपनाना।',
      gu: 'ઘટનાની તારીખ કે યાદ અપાવે તેવા પ્રસંગો વખતે અગાઉથી સાવચેત રહીને શાંતિ રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Severe dissociation leading to unsafe behavior, intense suicidal urges driven by guilt or trauma memories.',
      hi: 'अत्यधिक निराशा, खुद को नुकसान पहुंचाने के विचार या वास्तविकता से पूरी तरह संपर्क टूट जाना।',
      gu: 'અતિશય હતાશા, આત્મહત્યાના વિચારો અથવા વાસ્તવિકતાનું સાવ ભાન ભૂલી જવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Only soldiers in war zones get PTSD; ordinary civilians cannot get it.',
          hi: 'PTSD केवल युद्ध लड़ने वाले सैनिकों को होता है, आम नागरिकों को नहीं।',
          gu: 'PTSD માત્ર યુદ્ધમાં લડતા સૈનિકોને જ થાય છે, સામાન્ય લોકોને નહીં.',
        },
        fact: {
          en: 'Anyone can develop PTSD after road accidents, physical assaults, natural disasters, medical crises, or domestic violence.',
          hi: 'सड़क दुर्घटना, गंभीर बीमारी, प्राकृतिक आपदा या किसी भी बड़े आघात के बाद किसी भी आम नागरिक को PTSD हो सकता है।',
          gu: 'કોઈપણ સામાન્ય વ્યક્તિને ગંભીર અકસ્માત, હોનારત, હિંસા કે મોટી બીમારી પછી PTSD થઈ શકે છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Will talking about the trauma in therapy make me feel worse?',
          hi: 'क्या थेरेपी में उस भयानक हादसे के बारे में बात करने से मेरी तकलीफ और बढ़ जाएगी?',
          gu: 'શું થેરાપીમાં તે ખરાબ ઘટના વિશે વાત કરવાથી મારી તકલીફ વધી જશે?',
        },
        answer: {
          en: 'Trauma therapy is conducted in a structured, gradual, and supportive way. The therapist ensures you have strong grounding skills before any trauma processing begins.',
          hi: 'थेरेपिस्ट बहुत धीरे-धीरे और सुरक्षित तरीके से काम करते हैं। वे पहले आपको मन शांत रखने की तकनीकें सिखाते हैं ताकि आप सुरक्षित महसूस करें।',
          gu: 'થેરાપિસ્ટ ખૂબ જ ધીમે ધીમે અને સુરક્ષિત રીતે આગળ વધે છે. પહેલાં તમને મન શાંત રાખવાની ટેકનિક્સ શીખવવામાં આવે છે.',
        },
      },
    ],
    references: [
      {
        citation: 'NICE Guideline NG116: Post-traumatic stress disorder. UK, 2018.',
        source: 'NICE Guidelines',
        year: '2018',
      },
      {
        citation: 'World Health Organization. Guidelines for the management of conditions specifically related to stress. Geneva: WHO, 2013.',
        source: 'WHO Guidelines',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'geriatric-dementia-delirium',
    slug: 'geriatric-psychiatry-dementia-delirium',
    category: 'geriatric',
    name: {
      en: 'Geriatric Psychiatry: Dementia, Delirium & Late-Life Depression',
      hi: 'वृद्धावस्था मनोरोग: डिमेंशिया, प्रलाप (Delirium) और बुढ़ापे का अवसाद',
      gu: 'વૃદ્ધાવસ્થા મનોરોગ: ડિમેન્શિયા (યાદશક્તિની ખામી), ડેલીરિયમ અને ડિપ્રેશન',
    },
    medicalTerms: {
      en: 'Dementia, Delirium, Late-Life Depression (The 3 Ds)',
      hi: 'डिमेंशिया (मनोभ्रंश), डेलिरियम (Delirium), वृद्धावस्था अवसाद',
      gu: 'ડિમેન્શિયા (Dementia), ડેલીરિયમ (Delirium), ડિપ્રેશન',
    },
    overview: {
      en: 'Mental health in older adults requires special clinical nuance. Dementia is a chronic, progressive decline in cognitive functions; Delirium is an acute, fluctuating medical emergency of confusion; Late-Life Depression is a treatable mood disorder that can mimic dementia ("pseudodementia").',
      hi: 'बुजुर्गों में मानसिक स्वास्थ्य की समझ अत्यंत महत्वपूर्ण है। डिमेंशिया (Dementia) याददाश्त की धीमी और स्थायी कमी है; डेलिरियम (Delirium) अचानक शारीरिक बीमारी के कारण होने वाला गंभीर भटकाव (Emergency) है; और बुढ़ापे का अवसाद (Depression) पूरी तरह इलाज योग्य है।',
      gu: 'વડીલોના માનસિક સ્વાસ્થ્યમાં ડિમેન્શિયા (ધીમે ધીમે યાદશક્તિ ઘટવી), ડેલીરિયમ (અચાનક શારીરિક બીમારીના કારણે મગજ ભટકી જવું - મેડિકલ ઇમરજન્સી) અને વૃદ્ધાવસ્થાના ડિપ્રેશન વચ્ચેનો તફાવત સમજવો અત્યંત જરૂરી છે.',
    },
    commonSymptoms: {
      en: [
        'Dementia: Gradual, progressive memory loss (forgetting recent events first, repeating questions)',
        'Difficulty with familiar tasks (handling money, taking medicines, cooking)',
        'Disorientation to time and place, getting lost in familiar surroundings',
        'Behavioral and Psychological Symptoms of Dementia (BPSD): agitation, wandering, suspiciousness',
        'Delirium: Sudden onset (hours/days) of fluctuating confusion, inattention, altered consciousness',
        'Depression in older adults: somatic complaints, memory complaints ("pseudodementia"), apathy rather than overt sadness',
      ],
      hi: [
        'डिमेंशिया (Dementia): हाल की बातें भूलना, एक ही सवाल बार-बार पूछना, रास्ते भूल जाना',
        'रोजमर्रा के कामों में कठिनाई: पैसे गिनना, दवाएं लेना या खाना बनाने में भूल करना',
        'व्यवहार में बदलाव: चिड़चिड़ापन, शक करना (जैसे चोरी का शक), रात को भटकना',
        'डेलिरियम (Delirium): अचानक कुछ घंटों या दिनों में अत्यधिक भ्रमित हो जाना, पहचान न पाना, बेहोशी जैसी स्थिति (यह मेडिकल इमरजेंसी है)',
        'बुजुर्गों में डिप्रेशन: शरीर में दर्द या कमजोरी की शिकायतें, उदासी के बजाय एकांतप्रियता और याददाश्त कमजोर लगने का भ्रम',
      ],
      gu: [
        'ડિમેન્શિયા: તાજેતરની વાતો ભૂલી જવી, એકનો એક સવાલ વારંવાર પૂછવો, પરિચિત રસ્તાઓ ભૂલી જવા',
        'રોજિંદા કામમાં તકલીફ: પૈસાની ગણતરીમાં ભૂલ, દવાઓ લેવાનું ભૂલી જવું',
        'વર્તનમાં ફેરફાર: વહેમ કરવો (જેમ કે વસ્તુઓ ચોરાઈ ગઈ છે), રાત્રે ભટકવું',
        'ડેલીરિયમ: અચાનક થોડા કલાકોમાં ભારે ગૂંચવાડો, ઓળખી ન શકવું (આ તાત્કાલિક મેડિકલ ઇમરજન્સી છે)',
        'વડીલોમાં ડિપ્રેશન: ઉદાસી કરતા શરીરમાં દુખાવાની વધુ ફરિયાદો, એકલવાયા થઈ જવું',
      ],
    },
    dailyLifeImpact: {
      en: 'Dementia leads to progressive loss of autonomy, safety hazards (leaving gas on, wandering outside), and profound caregiver exhaustion.',
      hi: 'मरीज की सुरक्षा खतरे में पड़ सकती है (जैसे गैस खुली छोड़ देना, रास्ता भूल जाना) और देखभाल करने वाले परिवारजनों को अत्यधिक मानसिक और शारीरिक थकान होती है।',
      gu: 'વડીલની સુરક્ષા જોખમાય છે (ગેસ ચાલુ રહી જવો, રસ્તો ભૂલી જવો) અને સંભાળ રાખનાર પરિવાર પર મોટો બોજો આવે છે.',
    },
    causes: {
      en: 'Dementia: Neurodegenerative diseases (Alzheimer’s, Lewy Body, Vascular). Delirium: Acute medical triggers (urinary tract infection, electrolyte imbalance, pneumonia, medications). Depression: Vascular changes, bereavement, chronic illness.',
      hi: 'डिमेंशिया: अल्जाइमर जैसी दिमागी बीमारियां। डेलिरियम: यूरिनरी इन्फेक्शन (UTI), सोडियम की कमी, बुखार या दवाओं की प्रतिक्रिया। डिप्रेशन: अकेलापन, शारीरिक रोग।',
      gu: 'ડિમેન્શિયા: અલ્ઝાઈમર જેવી મગજની બીમારીઓ. ડેલીરિયમ: પેશાબમાં ઈન્ફેક્શન (UTI), લોહીમાં ક્ષાર (સોડિયમ) ઘટવું કે દવાઓની આડઅસર.',
    },
    riskFactors: {
      en: [
        'Advanced age and cardiovascular risk factors (hypertension, diabetes, stroke)',
        'Polypharmacy (taking multiple interacting medications)',
        'Social isolation and sensory deficits (uncorrected hearing or vision loss)',
      ],
      hi: [
        'बढ़ती उम्र, हाई ब्लड प्रेशर, डायबिटीज या ब्रेन स्ट्रोक',
        'एक साथ बहुत सारी दवाओं का सेवन',
        'अकेलापन, सुनने या देखने में कमी का इलाज न होना',
      ],
      gu: [
        'વધતી ઉંમર, બ્લડ પ્રેશર, ડાયાબિટીસ કે લકવો (સ્ટ્રોક)',
        'ઘણી બધી દવાઓ એકસાથે ચાલતી હોવી',
        'એકલતા, ઓછું સંભળાવું કે ઓછું દેખાવું',
      ],
    },
    psychiatricAssessment: {
      en: 'Cognitive testing (MMSE, MoCA), differentiating Delirium vs Dementia vs Depression, review of all medications, lab work (electrolytes, thyroid, B12, urine routine), and neuroimaging.',
      hi: 'मनोचिकित्सक द्वारा याददाश्त की जांच (MMSE), सभी दवाओं की समीक्षा, यूरिन व ब्लड टेस्ट (सोडियम, B12) और ब्रेन स्कैन द्वारा सही कारण का पता लगाया जाता है।',
      gu: 'યાદશક્તિની વિશેષ તપાસ (MMSE), તમામ દવાઓની ચકાસણી, પેશાબ અને લોહીના રિપોર્ટ્સ (સોડિયમ વગેરે) અને મગજનો સ્કેન.',
    },
    diagnosisExplanation: {
      en: 'Distinguishing Delirium from Dementia is critical: Delirium comes on suddenly and is a medical emergency; Dementia develops insidiously over years.',
      hi: 'डेलिरियम और डिमेंशिया में अंतर समझना बहुत जरूरी है: डेलिरियम अचानक आता है और तुरंत अस्पताल ले जाना पड़ता है; डिमेंशिया धीरे-धीरे सालों में बढ़ता है।',
      gu: 'ડેલીરિયમ અચાનક થોડા કલાકોમાં થાય છે અને તે ઇમરજન્સી છે; જ્યારે ડિમેન્શિયા વર્ષોમાં ધીમે ધીમે વધે છે.',
    },
    differentialConsiderations: {
      en: 'Delirium (acute medical), Dementia (chronic neurodegenerative), Late-life depression (treatable mood disorder), Normal pressure hydrocephalus, Subdural hematoma.',
      hi: 'डेलिरियम, डिमेंशिया, बुढ़ापे का अवसाद (डिप्रेशन), सिर में अंदरूनी चोट (Subdural hematoma), थायरॉयड।',
      gu: 'ડેલીરિયમ, ડિમેન્શિયા, ડિપ્રેશન અથવા માથામાં અંદર રક્તસ્ત્રાવ.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating families that memory loss and forgetfulness are not the patient\'s fault, and teaching non-confrontational communication strategies.',
        hi: 'परिवार को यह समझाना कि बुजुर्ग जानबूझकर नहीं भूल रहे हैं, उनसे बहस न करें और प्यार व धैर्य से पेश आएं।',
        gu: 'પરિવારને સમજાવવું કે વડીલ જાણીજોઈને ભૂલતા નથી, તેમની સાથે જીભાજોડી ન કરવી અને પ્રેમથી સાચવવા.',
      },
      lifestyleSupport: {
        en: 'Consistent daily schedules, safe home environment (nightlights, grab bars, removing rugs), memory aids (calendars, clocks).',
        hi: 'घर में पर्याप्त रोशनी रखना, फिसलने से बचाना, बाथरूम में रेलिंग लगवाना और दिनचर्या को शांत व सरल रखना।',
        gu: 'ઘરમાં સારી લાઈટ રાખવી, બાથરૂમમાં ટેકાના હેન્ડલ લગાવવા અને સરળ શાંત દિનચર્યા રાખવી.',
      },
      psychotherapy: {
        en: 'Reminiscence therapy, gentle validation therapy, and supportive cognitive stimulation.',
        hi: 'रेमिनिसेंस थेरेपी (पुरानी सुखद यादों पर बात करना) और संगीत या हल्की बातचीत।',
        gu: 'જૂની સારી યાદો તાજી કરાવવી, હળવું સંગીત અને પ્રેમાળ વાર્તાલાપ.',
      },
      medications: {
        en: 'Cognitive enhancers (cholinesterase inhibitors, memantine) may slow cognitive decline in Alzheimer\'s. Low-dose medications for severe agitation only when non-pharmacological methods fail.',
        hi: 'अल्जाइमर के लिए याददाश्त धीमी करने वाली दवाएं (जैसे Donapezil)। बेचैनी के लिए दवाएं बहुत सावधानी से और कम मात्रा में दी जाती हैं।',
        gu: 'અલ્ઝાઈમરમાં યાદશક્તિ જાળવી રાખવાની દવાઓ. અતિશય અજંપા માટે ખૂબ ઓછી માત્રામાં સાવચેતીપૂર્વક દવાઓ.',
      },
      familySocialInterventions: {
        en: 'Caregiver respite care, caregiver support groups, and planning long-term care needs.',
        hi: 'देखभाल करने वालों को खुद के आराम के लिए समय निकालना और परिवार में जिम्मेदारियों का बंटवारा करना।',
        gu: 'સંભાળ રાખનાર વ્યક્તિએ પણ પોતાના આરામનું ધ્યાન રાખવું અને કામ વહેંચી લેવું.',
      },
    },
    treatmentGoals: {
      en: 'Preserving quality of life, maximizing remaining cognitive functioning, ensuring physical safety, and preventing caregiver burnout.',
      hi: 'बुजुर्ग के जीवन की गुणवत्ता बनाए रखना, उनकी सुरक्षा सुनिश्चित करना और परिवार को तनाव से बचाना।',
      gu: 'વડીલનું જીવન શાંતિપૂર્ણ રહે, તેમની સલામતી જળવાય અને પરિવારજનો થાકી ન જાય.',
    },
    recoveryOutlook: {
      en: 'Delirium and depression are reversible with proper medical care. Dementia is progressive, but symptoms can be significantly stabilized.',
      hi: 'डेलिरियम और डिप्रेशन पूरी तरह ठीक हो सकते हैं। डिमेंशिया को सही देखभाल से काफी हद तक संभाला जा सकता है।',
      gu: 'ડેલીરિયમ અને ડિપ્રેશન યોગ્ય સારવારથી સંપૂર્ણ મટી શકે છે. ડિમેન્શિયાને સારી સંભાળથી ઘણો સ્થિર રાખી શકાય છે.',
    },
    relapsePrevention: {
      en: 'Regular hydration, monitoring for subtle infections, prompt treatment of physical illness, and frequent review of medications.',
      hi: 'पर्याप्त पानी पिलाना, पेशाब में संक्रमण पर तुरंत ध्यान देना और समय-समय पर डॉक्टर को दिखाना।',
      gu: 'પૂરતું પાણી પીવડાવવું, પેશાબના ઈન્ફેક્શનનું તાત્કાલિક નિદાન અને નિયમિત ચેકઅપ.',
    },
    urgentWarningSigns: {
      en: 'Sudden change in alertness or confusion over hours, fever with delirium, refusal to eat or drink, or sudden weakness.',
      hi: 'अचानक कुछ ही घंटों में अत्यधिक भ्रम या बेहोशी जैसी स्थिति, तेज बुखार के साथ प्रलाप (Delirium), या अचानक कमजोरी।',
      gu: 'અચાનક થોડા કલાકોમાં ભારે ગૂંચવાડો, તાવ સાથે બકબક કરવી કે અન્ન-જળ સાવ બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Severe memory loss and confusion are just a normal part of getting old that nothing can be done about.',
          hi: 'गंभीर याददाश्त जाना और भ्रमित होना बुढ़ापे की सामान्य बात है और इसका कुछ नहीं हो सकता।',
          gu: 'ભારે ભૂલકણાપણું અને વહેમ એ તો ઘડપણની સામાન્ય વાત છે, તેમાં કશું ન થઈ શકે.',
        },
        fact: {
          en: 'Severe cognitive impairment is not normal aging; it is a symptom of a medical illness requiring prompt evaluation and support.',
          hi: 'गंभीर याददाश्त जाना सामान्य बुढ़ापा नहीं है; यह एक बीमारी का संकेत है जिसकी तुरंत जांच और सही देखभाल आवश्यक है।',
          gu: 'ગંભીર ભૂલકણાપણું એ સામાન્ય ઘડપણ નથી; તે એક બીમારીનું લક્ષણ છે જેની યોગ્ય તપાસ અને સારવાર જરૂરી છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What is the immediate difference between Delirium and Dementia?',
          hi: 'डेलिरियम (Delirium) और डिमेंशिया (Dementia) में मुख्य अंतर क्या है?',
          gu: 'ડેલીરિયમ અને ડિમેન્શિયા વચ્ચે મુખ્ય તફાવત શું છે?',
        },
        answer: {
          en: 'Delirium starts suddenly over hours or days, fluctuates wildly, and is usually caused by an acute physical illness (like a urine infection or salt imbalance) — it is an urgent medical emergency. Dementia develops very slowly over months and years.',
          hi: 'डेलिरियम अचानक कुछ ही घंटों या दिनों में आता है और किसी शारीरिक बीमारी (जैसे यूरिन इन्फेक्शन या नमक की कमी) के कारण होता है। यह इमरजेंसी है। डिमेंशिया कई सालों में धीरे-धीरे बढ़ता है।',
          gu: 'ડેલીરિયમ અચાનક થોડા કલાકો કે દિવસોમાં થાય છે અને શારીરિક બીમારીથી થાય છે, જે ઇમરજન્સી છે. ડિમેન્શિયા વર્ષો સુધી ધીમે ધીમે વધે છે.',
        },
      },
    ],
    references: [
      {
        citation: 'APA Guidelines for the Evaluation of Dementia and Age-Related Cognitive Decline. Am Psychol. 2021.',
        source: 'American Psychological Association',
        year: '2021',
      },
      {
        citation: 'WHO Guidelines on Risk Reduction of Cognitive Decline and Dementia. Geneva: WHO, 2019.',
        source: 'World Health Organization',
        year: '2019',
      },
    ],
    lastReviewed: '2026-08',
  },
];
