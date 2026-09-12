import { MedicationClass } from '../../types';

export const adhdSubstanceData: MedicationClass[] = [
  {
    id: 'stimulant-adhd-medications',
    name: {
      en: 'ADHD Medications (Stimulants & Non-Stimulants)',
      hi: 'एडीएचडी दवाएं (उत्तेजक एवं गैर-उत्तेजक दवाएं)',
      gu: 'ADHD ની દવાઓ (સ્ટીમ્યુલન્ટ અને નોન-સ્ટીમ્યુલન્ટ દવાઓ)',
    },
    commonExamples: [
      'Methylphenidate (Immediate & Extended Release)',
      'Atomoxetine',
      'Clonidine',
      'Modafinil (adjunctive in select sleep/executive disorders)',
    ],
    indications: {
      en: 'Attention-Deficit/Hyperactivity Disorder (ADHD) across pediatric, adolescent, and adult populations; Narcolepsy; and targeted executive dysfunction augmentation under specialized psychiatric care.',
      hi: 'बच्चों, किशोरों और वयस्कों में अटेंशन-डेफिसिट/हाइपरएक्टिविटी डिसऑर्डर (ADHD - ध्यान की कमी और अति-सक्रियता), नार्कोलेप्सी (दिन में अत्यधिक नींद की बीमारी), और ध्यान केंद्रित करने की गंभीर समस्याओं के लिए।',
      gu: 'બાળકો, કિશોરો અને પુખ્ત વયના લોકોમાં ધ્યાનની અતિશય ખામી અને ચંચળતા (ADHD), દિવસ દરમિયાન વધુ પડતી ઊંઘ (નાર્કોલેપ્સી) અને એકાગ્રતાની ગંભીર મુશ્કેલીઓ માટે.',
    },
    mechanismPlain: {
      en: 'ADHD medications enhance catecholaminergic neurotransmission within the prefrontal cortex—the brain’s central executive controller. Stimulants (such as methylphenidate) selectively block the dopamine active transporter (DAT) and norepinephrine transporter (NET), increasing dopamine and noradrenaline levels in cortical synapses. Non-stimulants (such as atomoxetine) selectively inhibit noradrenaline reuptake. This optimized prefrontal signaling sharpens cognitive filtering, improves sustained attention, bolsters working memory, and dampens motor restlessness and impulsivity.',
      hi: 'ये दवाएं मस्तिष्क के प्रीफ्रॉन्टल कॉर्टेक्स (निर्णय और ध्यान के केंद्र) में डोपामाइन और नोरेड्रेनालाईन जैसे महत्वपूर्ण रसायनों के स्तर को संतुलित करती हैं। इससे दिमाग अनावश्यक भटकावों को छानकर अलग कर पाता है, जिससे एकाग्रता बढ़ती है, काम को अधूरा छोड़ने की आदत कम होती है और मन की बेचैनी शांत होती है।',
      gu: 'આ દવાઓ મગજના ધ્યાન અને વિચાર કેન્દ્રમાં ડોપામાઇન અને નોરેડ્રેનાલાઇન રસાયણોનું પ્રમાણ સુધારે છે. આનાથી મગજ આસપાસના બિનજરૂરી વિક્ષેપોને અવગણીને મુખ્ય કામ પર ધ્યાન કેન્દ્રિત કરી શકે છે, જેથી વ્યક્તિની એકાગ્રતા વધે છે અને અધીરાઈ ઘટે છે.',
    },
    commonSideEffects: {
      en: [
        'Mild suppression of appetite, particularly during the middle of the day',
        'Difficulty falling asleep if taken too late in the afternoon or evening',
        'Mild transient increases in resting pulse rate or blood pressure',
        'Mild dry mouth, headache, or stomach ache during early initiation',
        'Mild rebound irritability when short-acting formulations wear off in the evening',
      ],
      hi: [
        'दोपहर के समय भूख में थोड़ी कमी लगना',
        'शाम को देर से दवा लेने पर रात में नींद आने में देरी',
        'हृदय की धड़कन या ब्लड प्रेशर में हल्की वृद्धि',
        'शुरुआत में हल्का सिरदर्द, मुंह सूखना या पेट दर्द',
        'शाम को दवा का असर खत्म होने पर हल्का चिड़चिड़ापन',
      ],
      gu: [
        'બપોરે ભૂખ ઓછી લાગવી',
        'મોડેથી દવા લેવાથી રાત્રે ઊંઘ આવવામાં વાર લાગવી',
        'ધબકારા કે બ્લડ પ્રેશરમાં સામાન્ય વધારો',
        'શરૂઆતમાં હળવો માથાનો દુખાવો કે પેટમાં તકલીફ',
        'સાંજે દવાની અસર ઓછી થતાં સહેજ ચીડિયાપણું',
      ],
    },
    seriousAdverseEffects: {
      en: 'Significant cardiovascular stress in individuals with underlying occult cardiac malformations (requiring thorough baseline medical screening), severe growth deceleration in children without dietary monitoring, or precipitation of tics or psychotic agitation in susceptible individuals.',
      hi: 'हृदय की पुरानी समस्याओं वाले व्यक्तियों में हृदय पर दबाव (इसलिए पहले पूरी मेडिकल जांच जरूरी है), बच्चों के विकास और वजन में रुकावट (यदि पोषण पर ध्यान न दिया जाए), या अत्यधिक बेचैनी।',
      gu: 'હૃદયની છૂપી તકલીફ હોય તેવા દર્દીઓમાં જોખમ (જેથી અગાઉથી તબીબી તપાસ જરૂરી છે), બાળકોના વજન અને શારીરિક વિકાસમાં અવરોધ (ખોરાકનું ધ્યાન ન રખાય તો), અથવા વધુ પડતી બેચેની.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Prescribing ADHD medication to children or adults turns them into addicts or is just legal speed." Clinical Fact: Large-scale international cohort studies confirm that properly treating ADHD with indicated medications actually reduces the lifetime risk of substance abuse by normalizing reward-deficiency circuits and improving functional life stability.',
      hi: 'भ्रांति: "ADHD की दवाएं बच्चों को नशेड़ी बना देती हैं या यह केवल नशीली गोलियां हैं।" तथ्य: दुनिया भर के वैज्ञानिक शोध साबित करते हैं कि डॉक्टर की देखरेख में सही दवा लेने से बच्चे भविष्य में नशे की लत से बचते हैं, क्योंकि उनका ध्यान स्थिर रहता है और वे जीवन में सफल होते हैं।',
      gu: 'માન્યતા: "આ દવાઓ બાળકોને વ્યસની બનાવી દે છે." વાસ્તવિકતા: મોટા વૈજ્ઞાનિક અભ્યાસો દર્શાવે છે કે યોગ્ય સારવાર લેવાથી ભવિષ્યમાં વ્યસન થવાનું જોખમ ઘણું ઘટી જાય છે કારણ કે બાળકનું મગજ સ્થિર અને સક્ષમ બને છે.',
    },
    importantPrecautions: {
      en: 'Cardiovascular screening (family history, baseline pulse, blood pressure, and ECG where indicated) must precede initiation. In pediatric patients, height and weight percentiles are plotted on growth charts at regular intervals. Maintain regular meal schedules before morning doses.',
      hi: 'दवा शुरू करने से पहले हृदय, ब्लड प्रेशर और नाड़ी की पूरी जांच जरूरी है। बच्चों में हर 3 महीने में लंबाई और वजन की निगरानी की जाती है ताकि शारीरिक विकास पर कोई असर न पड़े। सुबह नाश्ते के बाद ही दवा लें।',
      gu: 'દવા શરૂ કરતાં પહેલાં હૃદય, નાડી અને બ્લડ પ્રેશરની તપાસ જરૂરી છે. બાળકોની ઊંચાઈ અને વજનની નિયમિત નોંધ રાખવામાં આવે છે જેથી વિકાસ બરાબર થતો રહે. દવા હંમેશા પૌષ્ટિક નાસ્તા પછી લેવી.',
    },
    whyMonitoringNeeded: {
      en: 'Regular clinical follow-ups enable the psychiatrist to assess real-world improvements in academic or occupational functioning, track growth parameters in young individuals, monitor cardiovascular indicators, and optimize the treatment regimen.',
      hi: 'नियमित जांच से डॉक्टर यह देखते हैं कि पढ़ाई या नौकरी में ध्यान कितना सुधरा है, बच्चे का वजन और लंबाई सही बढ़ रही है या नहीं, और दवा पूरी तरह सुरक्षित तरीके से काम कर रही है।',
      gu: 'નિયમિત ચેક-અપથી ડૉક્ટર બાળકની પ્રગતિ, શાળાનું પરિણામ, વજન અને ઊંચાઈનું મૂલ્યાંકન કરે છે જેથી દવા સંપૂર્ણપણે નિર્દોષ રીતે મદદ કરી શકે.',
    },
    mandatoryWarning: {
      en: 'Mandatory clinical warning: ADHD medications are strictly scheduled medications requiring specialized psychiatric evaluation, baseline cardiovascular check, and ongoing growth monitoring in children.',
      hi: 'अनिवार्य चिकित्सकीय चेतावनी: एडीएचडी दवाएं केवल अधिकृत मनोरोग विशेषज्ञ द्वारा संपूर्ण हृदय व शारीरिक जांच के बाद ही शुरू की जाती हैं। बच्चों में नियमित लंबाई और वजन की निगरानी आवश्यक है।',
      gu: 'ફરજિયાત તબીબી ચેતવણી: આ દવાઓ માત્ર નિષ્ણાત મનોચિકિત્સકની સલાહથી અને હૃદય તથા વજનની નિયમિત તપાસ સાથે જ લેવી જોઈએ.',
    },
    references: [
      {
        citation: 'Cortese S, et al. Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. Lancet Psychiatry. 2018.',
        source: 'Lancet Psychiatry',
        year: '2018',
      },
      {
        citation: 'NICE Guideline [NG87]. Attention deficit hyperactivity disorder: diagnosis and management.',
        source: 'National Institute for Health and Care Excellence',
        year: '2019',
      },
    ],
    discontinuationGuidance: {
      en: 'Discontinuation decisions are made collaboratively based on developmental milestones and seasonal academic needs. The psychiatrist guides any planned holiday or step-down review to ensure continuous executive support.',
      hi: 'दवा बंद करने का फैसला डॉक्टर के साथ मिलकर बच्चे की पढ़ाई और उम्र के अनुसार किया जाता है। डॉक्टर की सलाह के बिना अचानक दवा बंद न करें।',
      gu: 'દવા ઘટાડવા કે બંધ કરવાનો નિર્ણય ડૉક્ટરની સલાહ મુજબ યોગ્ય સમયે જ લેવો જોઈએ જેથી બાળકના શિક્ષણમાં કોઈ વિક્ષેપ ન પડે.',
    },
    illustrativeExample: {
      en: 'Rohan, an 8-year-old boy in Ahmedabad, was on the verge of school expulsion due to extreme restlessness, inability to remain seated for five minutes, and impulsive classroom disruptions. His parents initially resisted psychiatric evaluation, fearing medications would stunt his growth. After comprehensive diagnostic testing and pediatric cardiovascular clearance, the psychiatrist initiated an extended-release stimulant medication alongside behavioral classroom support. His mother ensured Rohan ate a hearty breakfast before his morning dose. Within three weeks, Rohan’s teachers reported remarkable improvement: he sat calmly through math lessons, raised his hand before speaking, and finished homework in 30 minutes instead of agonizing four-hour battles. His growth curve remained completely normal over regular quarterly pediatrician checks, transforming his academic journey into a joyful success.',
      hi: 'अहमदाबाद के 8 वर्षीय रोहन को स्कूल से निकालने की नौबत आ गई थी क्योंकि वह कक्षा में 5 मिनट भी शांत नहीं बैठ पाता था और लगातार भागता-दौड़ता रहता था। माता-पिता दवा के नाम से डरते थे कि कहीं बच्चे का विकास न रुक जाए। मनोचिकित्सक ने पूरी जांच और दिल की तसल्ली के बाद रोहन को सही दवा और माता-पिता को काउंसलिंग दी। मां ने सुबह अच्छा नाश्ता कराकर दवा देना शुरू किया। तीन ही हफ्तों में स्कूल से तारीफ आने लगी: रोहन अब शांति से बैठता था, हाथ उठाकर जवाब देता था और जो होमवर्क पहले 4 घंटे में रो-रोकर होता था, वह आधे घंटे में पूरा होने लगा। रोहन का वजन और लंबाई बिल्कुल सामान्य रही और वह पढ़ाई में अव्वल आने लगा।',
      gu: 'અમદાવાદના ૮ વર્ષીય રોહનને શાળામાંથી કાઢી મૂકવાની નોબત આવી હતી કારણ કે તે પાંચ મિનિટ પણ શાંતિથી બેસી શકતો નહોતો અને ખૂબ તોફાન કરતો હતો. માતા-પિતા દવાના નામથી ગભરાતા હતા. મનોચિકિત્સકે સંપૂર્ણ તપાસ બાદ યોગ્ય દવા અને વર્તન સુધારણાનું માર્ગદર્શન આપ્યું. માતાએ પૌષ્ટિક નાસ્તા સાથે દવા શરૂ કરાવી. ત્રણ જ અઠવાડિયામાં ચમત્કારિક સુધારો થયો: રોહન શાંતિથી ભણવા લાગ્યો અને જે હોમવર્ક ચાર કલાકમાં નહોતું પતતું તે ૩૦ મિનિટમાં પૂરું કરવા માંડ્યો. તેનું વજન અને ઊંચાઈ એકદમ સામાન્ય રહ્યાં અને તે અભ્યાસમાં આગળ વધ્યો.',
    },
    lastReviewed: '2026-09',
    // TODO(video): short, vetted explainer on ADHD medications (stimulants and non-stimulants) mechanism and myth-busting
    youtubeVideoId: undefined,
    relatedIds: [
      'attention-deficit-hyperactivity-disorder-adhd',
      'autism-spectrum-disorder-asd',
    ],
  },
  {
    id: 'medications-for-substance-use-disorders',
    name: {
      en: 'Medications for Substance Use Disorders (Addiction Pharmacotherapy)',
      hi: 'नशा मुक्ति की दवाएं (Addiction Pharmacotherapy)',
      gu: 'વ્યસન મુક્તિ માટેની દવાઓ (Addiction Pharmacotherapy)',
    },
    commonExamples: [
      'Naltrexone (Opioid & Alcohol Antagonist)',
      'Acamprosate (GABA/Glutamate Modulator for Alcohol)',
      'Buprenorphine (+ Naloxone) for Opioid Use Disorder',
      'Nicotine Replacement Therapy (NRT: Patches, Gums) & Varenicline',
      'Disulfiram (Aversive therapy in carefully selected patients)',
    ],
    indications: {
      en: 'Evidence-based medical management for Alcohol Use Disorder (maintaining abstinence, reducing heavy drinking days, and craving suppression), Opioid Use Disorder (maintenance and harm reduction), and Tobacco / Nicotine Dependence.',
      hi: 'शराब की लत (शराब की तलब मिटाने और दोबारा शुरू होने से रोकने के लिए), अफीम, स्मैक व अन्य नशीले पदार्थों की लत से मुक्ति, और बीड़ी, सिगरेट व तंबाकू छोड़ने के लिए वैज्ञानिक चिकित्सा।',
      gu: 'દારૂનું વ્યસન (દારૂની તલપ ઘટાડવા અને ફરીથી શરૂ થતું અટકાવવા), અફીણ કે અન્ય નશામાંથી મુક્તિ, અને તમાકુ-સિગારેટનું વ્યસન કાયમ માટે છોડવા માટે આ આધુનિક વૈજ્ઞાનિક સારવાર છે.',
    },
    mechanismPlain: {
      en: 'Addiction pharmacotherapies target neurochemical reward and craving circuits in the brain. Naltrexone blocks mu-opioid receptors, eliminating the euphoric "buzz" of alcohol and opioids and dismantling conditioned reward associations. Acamprosate restores balance between inhibitory GABA and excitatory glutamate neurotransmission disrupted by chronic alcohol exposure, soothing protracted withdrawal anxiety. Nicotine replacements and varenicline stimulate nicotinic acetylcholine receptors enough to stave off physical withdrawal pangs without the carcinogenic toxins of tobacco smoke.',
      hi: 'ये दवाएं मस्तिष्क के रिवॉर्ड और तलब (Craving) के केंद्रों पर काम करती हैं। नाल्ट्रैक्सोन मस्तिष्क के उन रिसेप्टर्स को ब्लॉक कर देती है जो नशे से मिलने वाले झूठे आनंद का अहसास कराते हैं, जिससे शराब पीने की इच्छा समाप्त हो जाती है। एकैम्प्रोसेट शराब छोड़ने के बाद होने वाली आंतरिक बेचैनी को शांत करती है। निकोटीन रिप्लेसमेंट शरीर को बिना किसी धुएं या कैंसर के खतरे के तंबाकू की तलब से बचाती है।',
      gu: 'આ દવાઓ મગજના આનંદ અને તલપના કેન્દ્રો પર કાર્ય કરે છે. નાલ્ટ્રેક્સોન દવા નશાથી મળતા નકલી સુખના તરંગોને બ્લોક કરી દે છે, જેથી દારૂ પીવાની તીવ્ર ઇચ્છા શાંત થઈ જાય છે. એકામ્પ્રોસેટ દારૂ છોડ્યા પછી થતી અકળામણ દૂર કરે છે. નિકોટિન ગમ તમાકુ વિના શરીરની તલપ શાંત પાડે છે.',
    },
    commonSideEffects: {
      en: [
        'Mild nausea, abdominal cramping, or decreased appetite (naltrexone/acamprosate)',
        'Mild headache or fatigue during early treatment days',
        'Local skin redness with nicotine patches or mouth tingling with nicotine gums',
        'Vivid dreams or temporary sleep disruptions',
        'Mild constipation or transient metallic taste',
      ],
      hi: [
        'शुरुआत में हल्का जी मिचलाना, पेट में मरोड़ या भूख कम लगना',
        'शुरुआती दिनों में हल्का सिरदर्द या थकान',
        'निकोटीन पैच लगाने की जगह हल्की लाली या गम से मुंह में झनझनाहट',
        'सपने अधिक आना या नींद में हल्का बदलाव',
        'मुंह में हल्का कड़वापन',
      ],
      gu: [
        'શરૂઆતમાં હળવા ઉબકા કે પેટમાં ચૂક આવવી',
        'શરૂઆતના દિવસોમાં માથાનો દુખાવો કે થાક',
        'ચામડી પર પેચ લગાવવાથી લાલાશ કે ગમથી મોંમાં ઝણઝણાટી',
        'ઊંઘમાં થોડો ફેરફાર',
        'મોંમાં સામાન્ય કડવાશ લાગવી',
      ],
    },
    seriousAdverseEffects: {
      en: 'Precipitated acute opioid withdrawal (if naltrexone is administered while opioids remain in the bloodstream—requiring verified abstinence periods before starting), hepatotoxicity with naltrexone in active liver failure, or dangerous disulfiram-ethanol reactions (severe vomiting, hypotension, arrhythmias if alcohol is consumed on disulfiram).',
      hi: 'अफीम की मौजूदगी में नाल्ट्रैक्सोन लेने पर अचानक भयानक बेचैनी (इसलिए डॉक्टर जांच के बाद ही देते हैं), लिवर की गंभीर बीमारी में समस्या, या डाइसल्फिरम के साथ शराब पीने पर जानलेवा उल्टियां और बीपी गिरना।',
      gu: 'અફીણ શરીરમાં હોય ત્યારે આ દવા લેવાથી અચાનક ગંભીર બેચેની, લિવરની બીમારીમાં જોખમ, અથવા ડાઈસલ્ફિરમ ચાલતી હોય ત્યારે દારૂ પીવાથી જીવલેણ ઊલટીઓ અને બ્લડ પ્રેશર ઘટી જવું.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Taking medication for addiction is just swapping one addiction for another; true recovery only counts if done through sheer willpower alone." Clinical Fact: Medical addiction pharmacotherapies do not produce euphoria or compulsive cravings; they repair damaged neurochemistry, protect against fatal overdoses, and provide the neurobiological stability necessary for counseling to succeed.',
      hi: 'भ्रांति: "नशा मुक्ति की दवा लेना एक नशे को दूसरे नशे से बदलना है; असली बहादुरी सिर्फ इच्छाशक्ति से नशा छोड़ना है।" तथ्य: ये दवाएं कोई नशा नहीं करातीं; ये मस्तिष्क के क्षतिग्रस्त रसायनों को ठीक करती हैं और मरीज की जान बचाती हैं ताकि वह सामान्य जीवन में लौट सके।',
      gu: 'માન્યતા: "વ્યસન મુક્તિ માટે દવા લેવી એટલે એક નશો છોડી બીજો નશો પકડવો; ખરી બહાદુરી માત્ર મનોબળથી વ્યસન છોડવામાં છે." વાસ્તવિકતા: આ દવાઓ કોઈ નશો નથી ચડાવતી; તે મગજના તૂટેલા રસાયણોનું સમારકામ કરીને દર્દીને સામાન્ય જિંદગી જીવવા સક્ષમ બનાવે છે.',
    },
    importantPrecautions: {
      en: 'Baseline liver function testing (LFT) is routinely conducted prior to initiating anti-craving medications. Carry medical alert identification if taking naltrexone so emergency personnel avoid using opioid anesthetics during unexpected surgery. Always combine medications with behavioral counseling and family support.',
      hi: 'दवा शुरू करने से पहले लिवर की जांच (LFT) कराई जाती है। नाल्ट्रैक्सोन लेने वालों को एक मेडिकल कार्ड साथ रखना चाहिए ताकि इमरजेंसी में डॉक्टर अफीम वाली दवाएं न दें। दवा के साथ काउंसलिंग और परिवार का साथ होना बहुत जरूरी है।',
      gu: 'દવા શરૂ કરતાં પહેલાં લિવરની તપાસ (LFT) કરાવાય છે. આ દવા લેતા દર્દીઓએ સાથે કાર્ડ રાખવું જોઈએ જેથી ઇમરજન્સીમાં ડૉક્ટરને ખબર પડે. દવાની સાથે કાઉન્સેલિંગ અને પરિવારનો પ્રેમ ખૂબ જરૂરી છે.',
    },
    whyMonitoringNeeded: {
      en: 'Continuous clinical partnership tracks reduction in cravings, monitors liver enzymes, supports relapse prevention strategies, and addresses psychosocial triggers as lifestyle stability strengthens.',
      hi: 'डॉक्टर से नियमित मिलने से तलब में कमी की जांच होती है, लिवर सुरक्षित रहता है और मरीज को दोबारा नशे की तरफ जाने से रोकने के लिए मनोवैज्ञानिक संबल मिलता है।',
      gu: 'ડૉક્ટરની નિયમિત મુલાકાતથી તલપ ઘટી રહી છે તેની ખાતરી થાય છે, લિવર સુરક્ષિત રહે છે અને દર્દી ફરીથી નશા તરફ લલચાય નહીં તેનું ધ્યાન રખાય છે.',
    },
    mandatoryWarning: {
      en: 'Mandatory clinical warning: Addiction pharmacotherapy must always be integrated with comprehensive medical monitoring, addiction counseling, and psychosocial relapse prevention.',
      hi: 'अनिवार्य चिकित्सीय चेतावनी: नशा मुक्ति की दवाएं हमेशा संपूर्ण चिकित्सकीय निगरानी, काउंसलिंग और परिवार के सहयोग के साथ ही ली जानी चाहिए।',
      gu: 'ફરજિયાત તબીબી ચેતવણી: વ્યસન મુક્તિ માટેની દવાઓ હંમેશા ડૉક્ટરની દેખરેખ, કાઉન્સેલિંગ અને પરિવારના સાથ સાથે જ લેવી જોઈએ.',
    },
    references: [
      {
        citation: 'Lingford-Hughes AR, et al. BAP updated guidelines: evidence-based guidelines for the pharmacological management of substance use, harmful use, addiction and comorbidity: recommendations from BAP. J Psychopharmacol. 2012.',
        source: 'British Association for Psychopharmacology',
        year: '2012',
      },
      {
        citation: 'American Society of Addiction Medicine (ASAM). National Practice Guideline for the Treatment of Opioid Use Disorder. 2020 Focused Update.',
        source: 'American Society of Addiction Medicine',
        year: '2020',
      },
    ],
    discontinuationGuidance: {
      en: 'Addiction pharmacotherapies are maintained comfortably for months to years until solid sobriety, psychological stability, and social rebuilding are achieved. Discontinuation is planned collaboratively with the psychiatrist.',
      hi: 'ये दवाएं कई महीनों तक सुरक्षित रूप से जारी रखी जाती हैं जब तक कि मरीज का जीवन पूरी तरह व्यवस्थित न हो जाए। बंद करने का निर्णय डॉक्टर के साथ मिलकर ही लिया जाता है।',
      gu: 'આ દવાઓ ઘણા મહિનાઓ સુધી ચાલુ રખાય છે જ્યાં સુધી દર્દીનું જીવન સંપૂર્ણ સ્થિર ન થઈ જાય. ડૉક્ટરની સલાહ મુજબ જ યોગ્ય સમયે દવા બંધ કરાય છે.',
    },
    illustrativeExample: {
      en: 'Mahesh, a 46-year-old contractor in Surat, had tried to quit alcohol six times over a decade through sheer willpower, only to suffer agonizing physical cravings every evening at 7:00 PM that inevitably drove him back to country liquor. Ashamed, financially strained, and suffering from fatty liver, Mahesh consulted a de-addiction psychiatrist. After a safe medical outpatient detoxification, the doctor initiated naltrexone as an anti-craving medication alongside Motivational Interviewing sessions. Mahesh was astonished: for the first time in ten years, the overwhelming, obsessive evening urges for alcohol quieted to a faint whisper. Freed from constant mental wrestling, he spent evenings taking his daughter to badminton practice. One year later, Mahesh celebrates twelve continuous months of complete sobriety, his liver enzymes have normalized, and his business is thriving.',
      hi: 'सूरत के 46 वर्षीय ठेकेदार महेश ने 10 साल में छह बार केवल इच्छाशक्ति से शराब छोड़ने की कोशिश की, लेकिन हर शाम 7 बजे ऐसी असहनीय तलब उठती थी कि वे शराब की दुकान पर पहुंच जाते थे। लिवर में खराबी और पैसों की तंगी के बाद वे नशा मुक्ति विशेषज्ञ के पास पहुंचे। सुरक्षित डिटॉक्स के बाद डॉक्टर ने तलब मिटाने वाली नाल्ट्रैक्सोन दवा और काउंसलिंग शुरू की। महेश हैरान रह गए: 10 साल में पहली बार शाम 7 बजे उठने वाला भयानक खिंचाव शांत हो गया। जब दिमाग की जंग खत्म हुई, तो वे शाम को बेटी को बैडमिंटન सिखाने जाने लगे। आज एक साल से महेश ने शराब को हाथ नहीं लगाया है, उनका लिवर स्वस्थ हो गया है और व्यापार तरक्की कर रहा है।',
      gu: 'સુરતના ૪૬ વર્ષીય કોન્ટ્રાક્ટર મહેશભાઈએ ૧૦ વર્ષમાં છ વખત મનોબળથી દારૂ છોડવાનો પ્રયત્ન કર્યો, પરંતુ દરરોજ સાંજે ૭ વાગ્યે એવી અસહ્ય તલપ ઉપડતી કે તેઓ દેશી દારૂના પીઠે પહોંચી જતા. લિવરમાં સોજો આવતાં તેઓ મનોચિકિત્સક પાસે પહોંચ્યા. ડૉક્ટરે યોગ્ય સારવાર આપીને તલપ શાંત કરવાની નાલ્ટ્રેક્સોન દવા અને કાઉન્સેલિંગ શરૂ કરાવ્યું. મહેશભાઈને આશ્ચર્ય થયું: ૧૦ વર્ષમાં પહેલીવાર સાંજના સમયે દારૂ પીવાની તીવ્ર ઇચ્છા સાવ શાંત થઈ ગઈ. મન હળવું થતાં તેઓ સાંજે દીકરીને બેડમિન્ટન રમાડવા લઈ જવા લાગ્યા. આજે એક વર્ષથી મહેશભાઈએ દારૂને અડ્યો પણ નથી, તેમનું લિવર સાજું થઈ ગયું છે અને ધંધો ખૂબ સારો ચાલે છે.',
    },
    lastReviewed: '2026-09',
    // TODO(video): short, vetted video on Addiction Pharmacotherapy (Naltrexone, Buprenorphine, Acamprosate) anti-craving science
    youtubeVideoId: undefined,
    relatedIds: [
      'major-depressive-disorder',
      'bipolar-disorder',
      'generalized-anxiety-disorder',
    ],
  },
];
