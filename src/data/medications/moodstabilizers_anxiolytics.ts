import { MedicationClass } from '../../types';

export const moodstabilizersAnxiolyticsData: MedicationClass[] = [
  {
    id: 'mood-stabilizers',
    name: {
      en: 'Mood Stabilizers (Lithium, Valproate & others)',
      hi: 'मूड स्टेबलाइजर्स (लिथियम, वैलप्रोएट आदि)',
      gu: 'મૂડ સ્ટેબિલાઇઝર્સ (લિથિયમ, વાલ્પ્રોએટ વગેરે)',
    },
    commonExamples: [
      'Lithium Carbonate',
      'Sodium Valproate / Divalproex',
      'Lamotrigine',
      'Carbamazepine',
    ],
    indications: {
      en: 'Foundational maintenance and acute treatment for Bipolar I and Bipolar II Disorders (mania, hypomania, and bipolar depression), prevention of future affective episodes, mood dysregulation in schizoaffective disorder, and anti-suicidal augmentation in treatment-resistant major depression.',
      hi: 'बायपोलर डिसऑर्डर (मेनिया, हाइपोमेनिया और डिप्रेशन के उतार-चढ़ाव) के इलाज और रोकथाम के लिए यह सबसे महत्वपूर्ण आधारभूत दवा है। स्किज़ोअफेक्टिव डिसऑर्डर और गंभीर डिप्रेशन में आत्महत्या के जोखिम को कम करने में भी यह अत्यंत प्रभावी है।',
      gu: 'બાયપોલર ડિસઓર્ડર (અતિશય ખુશી કે અતિશય ઉદાસીના મોટા હુમલા) ના કાયમી નિયંત્રણ અને સારવાર માટે આ પાયાની દવા છે. માનસિક આવેગોને શાંત કરવા અને ગંભીર ડિપ્રેશનમાં આત્મહત્યાના વિચારો અટકાવવા માટે આ ખૂબ અસરકારક છે.',
    },
    mechanismPlain: {
      en: 'Mood stabilizers act through multifaceted intracellular signaling pathways to temper pathological fluctuations between mania and depression. Lithium influences inositol depletion, inhibits glycogen synthase kinase-3 (GSK-3), and promotes neuroprotective factors, effectively smoothing neural excitability. Anticonvulsant mood stabilizers (such as valproate and lamotrigine) enhance gamma-aminobutyric acid (GABA) inhibitory transmission and modulate voltage-gated sodium and calcium ion channels, stabilizing hyper-excitable cortical circuits.',
      hi: 'मूड स्टेबलाइजर्स मस्तिष्क की कोशिकाओं के अंदर रासायनिक संदेशों और आयन चैनलों को स्थिर करके काम करते हैं। लिथियम मस्तिष्क के न्यूरोप्रोटेक्टिव कारकों को बढ़ाता है और तंत्रिका तंत्र की अत्यधिक उत्तेजना को शांत करता है। वैलप्रोएट और लेमोट्रिजिन जैसी दवाएं मस्तिष्क में गाबा (GABA) नामक शांत करने वाले रसायन को बढ़ावा देकर मूड के तेज उतार-चढ़ाव को रोकती हैं।',
      gu: 'મૂડ સ્ટેબિલાઇઝર્સ મગજના ચેતાતંત્રની અનિયંત્રિત ઉત્તેજનાને શાંત પાડે છે. લિથિયમ મગજના કોષોને સુરક્ષા આપે છે અને લાગણીઓના અતિશય આવેગોને નિયંત્રિત કરે છે. વાલ્પ્રોએટ અને લેમોટ્રિજીન જેવી દવાઓ મગજના શાંતિ આપતા રસાયણો (GABA) ને ઉત્તેજિત કરીને લાગણીઓના ગંભીર હિલોળા રોકે છે.',
    },
    commonSideEffects: {
      en: [
        'Mild hand tremor, especially during early treatment or dose adjustments',
        'Increased thirst (polydipsia) and more frequent urination (with lithium)',
        'Mild digestive upset or temporary nausea during initiation',
        'Mild weight gain or metabolic changes (dependent on the specific agent)',
        'Mild fatigue, dizziness, or temporary hair thinning (reversible)',
      ],
      hi: [
        'शुरुआत में हाथों में हल्का कंपन महसूस होना',
        'अधिक प्यास लगना और बार-बार पेशाब आना (विशेषकर लिथियम में)',
        'शुरुआती दिनों में पेट में हल्का भारीपन या जी मिचलाना',
        'वजन में थोड़ी वृद्धि (दवा के प्रकार पर निर्भर)',
        'हल्की थकान या सिर चकराना',
      ],
      gu: [
        'શરૂઆતમાં હાથમાં સહેજ ધ્રૂજારી લાગવી',
        'વધુ તરસ લાગવી અને વારંવાર પેશાબ જવું (ખાસ કરીને લિથિયમમાં)',
        'શરૂઆતના દિવસોમાં પેટમાં હળવી અસ્વસ્થતા કે ઉબકા',
        'વજનમાં થોડો વધારો થવો',
        'હળવો થાક કે ચક્કર આવવાં',
      ],
    },
    seriousAdverseEffects: {
      en: 'Lithium Toxicity (marked by severe coarse tremors, persistent vomiting, slurred speech, confusion, and unsteadiness, which requires urgent medical care), hepatotoxicity or pancreatitis (valproate), or severe dermatological reactions like Stevens-Johnson Syndrome (requiring immediate cessation of lamotrigine if any unexplained rash develops).',
      hi: 'लिथियम टॉक्सिसिटी (अत्यधिक हाथ कांपना, उल्टी, लड़खड़ाहट और भ्रम होना, जिसमें तुरंत डॉक्टर के पास जाना चाहिए), लिवर पर असर (वैलप्रोएट), या त्वचा पर अचानक गंभीर लाल दाने या फफोले निकलना। ऐसा कोई भी लक्षण दिखने पर तुरंत संपर्क करें।',
      gu: 'લિથિયમ ટોક્સિસિટી (હાથમાં ખૂબ ધ્રૂજારી, ઊલટી, અસંતુલન કે ઘેન ચડવું, જેમાં તાત્કાલિક હોસ્પિટલ પહોંચવું જરૂરી છે), લિવર પર અસર, અથવા ચામડી પર અચાનક ફોલ્લા પડવા. આવા કોઈપણ લક્ષણે તાત્કાલિક ડૉક્ટરનો સંપર્ક કરવો.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Once my manic episode ends and I feel energetic and normal, I am cured and can safely stop taking my mood stabilizer." Clinical Fact: Bipolar disorder is a recurring neurobiological condition; continuing maintenance mood stabilization keeps you well and protects against devastating future relapses.',
      hi: 'भ्रांति: "जब दौरा ठीक हो गया और मैं बिल्कुल सामान्य महसूस कर रहा हूं, तो दवा बंद कर देनी चाहिए।" तथ्य: बायपोलर डिसऑर्डर में बीमारी ठीक लगने के बाद भी दवा जारी रखना जरूरी होता है ताकि भविष्य में कोई नया दौरा न पड़े।',
      gu: 'માન્યતા: "મને હવે સારું લાગે છે અને હું એકદમ સામાન્ય છું એટલે હવે દવા લેવાની કોઈ જરૂર નથી." વાસ્તવિકતા: બાયપોલરમાં સારું થયા પછી પણ દવા ચાલુ રાખવી પડે છે જેથી ભવિષ્યમાં બીમારીનો ઉથલો આવતો અટકાવી શકાય.',
    },
    importantPrecautions: {
      en: 'Therapeutic drug level monitoring via scheduled morning blood draws is an absolute medical requirement for medications like lithium and valproate to ensure safety and therapeutic efficacy. Maintain adequate hydration, avoid severe salt restriction or crash diets without consultation, and inform your psychiatrist before starting any NSAID painkillers or blood pressure medications.',
      hi: 'लिथियम और वैलप्रोएट जैसी दवाओं में समय-समय पर खाली पेट ब्लड टेस्ट (Serum Level Monitoring) कराना अनिवार्य है ताकि दवा का स्तर सुरक्षित सीमा में रहे। पर्याप्त पानी पिएं, बिना सलाह के नमक एकदम कम न करें और कोई भी दर्द निवारक गोली लेने से पहले डॉक्टर से पूछें।',
      gu: 'લિથિયમ અને વાલ્પ્રોએટમાં સમયાંતરે સવારે ભૂખ્યા પેટે લોહીની તપાસ (બ્લડ લેવલ) કરાવવી અત્યંત આવશ્યક છે જેથી દવા સલામત મર્યાદામાં રહે. પૂરતું પાણી પીવું, મીઠું સાવ બંધ ન કરવું અને કોઈપણ દુખાવાની ગોળી લેતાં પહેલાં ડૉક્ટરની મંજૂરી લેવી.',
    },
    whyMonitoringNeeded: {
      en: 'Regular laboratory monitoring (serum drug levels, renal function tests, thyroid profile, liver function, and complete blood counts) guarantees the medication remains in the precise therapeutic window where it stabilizes mood while fully safeguarding organ health.',
      hi: 'नियमित खून की जांच (दवा का स्तर, किडनी, थायरॉयड और लिवर टेस्ट) यह सुनिश्चित करती है कि दवा का स्तर पूरी तरह सुरक्षित रहे और शरीर के किसी अंग पर कोई गलत असर न पड़े।',
      gu: 'નિયમિત લેબ તપાસ (લોહીમાં દવાનું પ્રમાણ, કિડની, થાઇરોઇડ અને લિવર ટેસ્ટ) દ્વારા ખાતરી થાય છે કે દવા યોગ્ય રીતે કામ કરી રહી છે અને શરીરનાં તમામ અંગો સંપૂર્ણ સલામત છે.',
    },
    mandatoryWarning: {
      en: 'Mandatory clinical precaution: Therapeutic drug monitoring through blood tests is required for lithium and valproate. Never adjust doses independently or discontinue treatment abruptly.',
      hi: 'अनिवार्य चिकित्सकीय सावधानी: लिथियम और वैलप्रोएट के लिए समय-समय पर ब्लड टेस्ट द्वारा दवा का स्तर जांचना अनिवार्य है। अपनी मर्जी से दवा की मात्रा न बदलें और न ही अचानक दवा बंद करें।',
      gu: 'ફરજિયાત તબીબી સાવચેતી: લિથિયમ અને વાલ્પ્રોએટ માટે લોહીની તપાસ કરાવવી અનિવાર્ય છે. ડૉક્ટરની સલાહ વગર ક્યારેય ડોઝ બદલવો કે દવા બંધ કરવી નહીં.',
    },
    references: [
      {
        citation: 'Goodwin GM, et al. Evidence-based guidelines for treating bipolar disorder: Revised third edition recommendations from the British Association for Psychopharmacology. J Psychopharmacol. 2016.',
        source: 'British Association for Psychopharmacology',
        year: '2016',
      },
      {
        citation: 'Yatham LN, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018.',
        source: 'CANMAT / ISBD',
        year: '2018',
      },
    ],
    discontinuationGuidance: {
      en: 'Never discontinue a mood stabilizer without clinical guidance. Abrupt cessation carries a very high risk of precipitating an acute manic or depressive relapse; any adjustments must be carefully planned and monitored by your psychiatrist.',
      hi: 'डॉक्टर की सलाह के बिना कभी भी दवा बंद न करें। अचानक दवा रोकने से मेनिया या गंभीर डिप्रेशन का तीव्र दौरा पड़ने का भारी जोखिम रहता है।',
      gu: 'ડૉક્ટરની સલાહ વગર ક્યારેય મૂડ સ્ટેબિલાઇઝર બંધ ન કરવું. અચાનક દવા બંધ કરવાથી ફરીથી ઉગ્ર હુમલો આવવાનું મોટું જોખમ રહે છે.',
    },
    illustrativeExample: {
      en: 'Jignesh, a 33-year-old diamond polisher in Surat, was admitted to a psychiatric facility following a severe manic episode involving three nights of zero sleep, grandiose plans to purchase three diamond factories, and reckless spending of his family’s savings. Following clinical stabilization with a mood stabilizer, Jignesh felt his racing thoughts settle and his grounded, loving nature return. His psychiatrist carefully explained the necessity of quarterly therapeutic blood monitoring and adequate hydration during hot summer months. Two years later, Jignesh attends his routine lab visits religiously, has experienced zero mood episodes, manages his workshop successfully, and enjoys financial stability with his supportive family.',
      hi: 'सूरत के 33 वर्षीय हीरा कारीगर जिग्नेश को अचानक बायपोलर मेनिया का दौरा पड़ा, जिसमें वे तीन रातों तक सोए नहीं और परिवार की सारी जमा पूंजी लगाकर तीन नई फैक्ट्रियां खरीदने की हवा-हवाई योजनाएं बनाने लगे। मनोचिकित्सक ने अस्पताल में उनका इलाज कर मूड स्टेबलाइजर दवा शुरू की, जिससे उनकी अनियंत्रित उत्तेजना शांत हुई। डॉक्टर ने उन्हें हर तीन महीने में ब्लड टेस्ट कराने और गर्मियों में भरपूर पानी पीने का महत्व समझाया। दो साल बाद भी जिग्नेश नियमित दवा और जांच करा रहे हैं, उन्हें दोबारा कोई दौरा नहीं पड़ा और वे अपने परिवार के साथ खुशहाल जीवन जी रहे हैं।',
      gu: 'સુરતના ૩૩ વર્ષીય હીરા ઘસુ જીગ્નેશભાઈને બાયપોલર મેનિયાનો ગંભીર હુમલો આવ્યો હતો, જેમાં તેઓ ત્રણ રાત જાગ્યા અને પરિવારની બચત વાપરીને ત્રણ હીરાના કારખાના ખરીદવાની વાતો કરવા માંડ્યા. મનોચિકિત્સકે તેમને મૂડ સ્ટેબિલાઇઝર દવા શરૂ કરી, જેથી તેમના મગજના અતિશય વિચારો શાંત થયા. ડૉક્ટરે તેમને દર ત્રણ મહિને લોહીની તપાસ કરાવવાનું અને ઉનાળામાં પૂરતું પાણી પીવાનું સમજાવ્યું. બે વર્ષ પછી પણ જીગ્નેશભાઈ નિયમિત તપાસ કરાવે છે, તેમને ફરી કોઈ હુમલો આવ્યો નથી અને તેઓ સુખી જીવન જીવે છે.',
    },
    lastReviewed: '2026-09',
    // TODO(video): short, vetted clinical explainer on Mood Stabilizers (Lithium, Valproate) and therapeutic blood level monitoring
    youtubeVideoId: undefined,
    relatedIds: [
      'bipolar-disorder',
      'major-depressive-disorder',
      'schizophrenia',
    ],
  },
  {
    id: 'anxiolytics-hypnotics',
    name: {
      en: 'Anxiolytics & Sleep Medications (Benzodiazepines & Z-drugs)',
      hi: 'एंग्जियोलिटिक्स एवं नींद की दवाएं (बेंजोडायजेपाइन व Z-दवाएं)',
      gu: 'એન્ઝાયોલિટિક્સ અને ઊંઘની દવાઓ (બેન્ઝોડાયાઝેપાઇન્સ અને Z-દવાઓ)',
    },
    commonExamples: [
      'Clonazepam',
      'Lorazepam',
      'Alprazolam',
      'Zolpidem',
      'Zopiclone',
      'Eszopiclone',
    ],
    indications: {
      en: 'Short-term relief of acute overwhelming anxiety, acute panic attacks, severe short-term insomnia, catatonia, medical management of alcohol withdrawal, and brief acute calming during severe psychiatric emergencies.',
      hi: 'अचानक उठे तीव्र पैनिक अटैक, अत्यधिक चिंता, कुछ दिनों की गंभीर अनिद्रा, शराब छोड़ने पर होने वाली कंपकंपी (Alcohol Withdrawal), और आपातकालीन मानसिक तनाव को तुरंत शांत करने के लिए अल्पकालिक उपयोग।',
      gu: 'અચાનક આવેલા તીવ્ર પેનિક એટેક, અતિશય ગભરાટ, થોડા દિવસોની ગંભીર અનિદ્રા, દારૂ છોડતી વખતે થતી ધ્રૂજારી અને કટોકટીના સમયે મગજને તાત્કાલિક શાંત કરવા માટે ટૂંકા ગાળાનો ઉપયોગ.',
    },
    mechanismPlain: {
      en: 'These agents act as positive allosteric modulators of the gamma-aminobutyric acid type A (GABA-A) receptor complex in the central nervous system. By enhancing the inhibitory action of GABA—the brain’s primary calming neurotransmitter—they increase chloride ion conductance into neurons, hyperpolarizing cell membranes and rapidly dampening overactive neuronal firing in circuits responsible for panic, vigilance, and insomnia.',
      hi: 'ये दवाएं मस्तिष्क में गाबा (GABA-A) रिसेप्टर्स की क्रियाशीलता को तुरंत बढ़ा देती हैं। गाबा मस्तिष्क का मुख्य शांत करने वाला रसायन है। इसके सक्रिय होने से तंत्रिका तंत्र की अत्यधिक घबराहट, डर और बेचैनी कुछ ही मिनटों में शांत हो जाती है और प्राकृतिक रूप से नींद आने में मदद मिलती है।',
      gu: 'આ દવાઓ મગજના ગાબા (GABA) નામના શાંતિ આપતા રસાયણની અસરને તાત્કાલિક વધારી દે છે. ગાબા સક્રિય થતાં જ મગજના વધુ પડતા ભય અને ગભરાટના તરંગો થોડી જ મિનિટોમાં શાંત થઈ જાય છે અને દર્દીને રાહત તથા ઊંઘ મળે છે.',
    },
    commonSideEffects: {
      en: [
        'Drowsiness, sedation, or daytime fatigue following use',
        'Impaired motor coordination, slowed reaction times, or unsteadiness',
        'Mild temporary forgetfulness or anterograde amnesia',
        'Dizziness, especially when rising from bed in the night',
        'Potential paradoxical excitement or disinhibition (uncommon)',
      ],
      hi: [
        'दवा लेने के बाद सुस्ती, उनींदापन या दिन में थकान',
        'शरीर के संतुलन और प्रतिक्रिया की गति में थोड़ी कमी',
        'दवा के असर के दौरान की बातें याद न रहना',
        'रात को उठने पर चक्कर आना',
        'दुर्लभ मामलों में बेचैनी बढ़ना',
      ],
      gu: [
        'દવા લીધા પછી સુસ્તી, ઘેન કે દિવસ દરમિયાન થાક',
        'શરીરનું સંતુલન ધીમું થવું',
        'દવાની અસર દરમિયાનની બાબતો ભૂલી જવી',
        'રાત્રે પથારીમાંથી ઊઠતાં ચક્કર આવવાં',
        'ક્યારેક સામાન્ય કરતાં વધુ અજંપો થવો',
      ],
    },
    seriousAdverseEffects: {
      en: 'Severe respiratory depression (especially when co-ingested with alcohol or opioid medications), physical dependence and severe withdrawal seizures upon abrupt cessation after prolonged unmonitored use, complex sleep-related behaviors (such as sleep-driving), and heightened fall risk in elderly individuals.',
      hi: 'सांस की गति का अत्यधिक धीमा होना (विशेषकर यदि शराब या नशीली दवाओं के साथ लिया जाए), लंबे समय तक बिना सलाह लेने के बाद अचानक बंद करने पर दौरे पड़ना, नींद में चलने की आदत, और बुजुर्गों में गिरकर चोट लगने का जोखिम।',
      gu: 'શ્વાસ ધીમો પડી જવો (ખાસ કરીને દારૂ સાથે લેવાથી), લાંબા સમય પછી અચાનક બંધ કરવાથી આંચકી આવવી, ઊંઘમાં ચાલવું અને વૃદ્ધોમાં પડી જવાનું જોખમ.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Sleep pills and anxiety tablets should be taken continuously every night for years whenever I feel stressed." Clinical Fact: In modern psychiatric practice, these medications are designed as short-term bridge treatments (usually 2 to 4 weeks) while definitive root-cause therapies (like SSRIs and CBT) take effect, preventing tolerance and dependence.',
      hi: 'भ्रांति: "नींद या चिंता की गोलियां सालों तक रोज रात को अपनी मर्जी से खाते रहना चाहिए।" तथ्य: ये दवाएं केवल थोड़े समय (2 से 4 हफ्ते) के लिए अस्थायी राहत देने के लिए होती हैं, जब तक कि मुख्य दवाएं (जैसे एंटीडिप्रेसेंट) और काउंसलिंग अपना असर न दिखा दें।',
      gu: 'માન્યતા: "ઊંઘની કે ચિંતાની ગોળીઓ વર્ષો સુધી રોજ રાત્રે પોતાની મેળે લીધા કરવી જોઈએ." વાસ્તવિકતા: આ દવાઓ માત્ર ૨ થી ૪ અઠવાડિયાના ટૂંકા ગાળા માટે કામચલાઉ રાહત આપવા વપરાય છે, જેથી તેની ટેવ ન પડે.',
    },
    importantPrecautions: {
      en: 'Strictly avoid alcohol consumption while taking these medications due to potentially fatal synergy causing profound central nervous system depression. Avoid driving or operating machinery while experiencing sedation. Store securely away from family members and never share psychiatric prescriptions.',
      hi: 'इन दवाओं के साथ शराब का सेवन बिल्कुल न करें, यह जानलेवा हो सकता है। दवा के असर के दौरान गाड़ी न चलाएं। इन्हें हमेशा सुरक्षित रखें और कभी भी अपनी दवा किसी दूसरे को न दें।',
      gu: 'આ દવાઓ સાથે દારૂનું સેવન બિલકુલ ન કરવું, તે જીવલેણ બની શકે છે. દવા લીધા પછી વાહન ન ચલાવવું અને પોતાની દવા ક્યારેય બીજા કોઈને ન આપવી.',
    },
    whyMonitoringNeeded: {
      en: 'Close psychiatric oversight ensures these agents remain restricted to their brief therapeutic window, monitors for emerging tolerance, and prevents unintentional psychological or physical dependence.',
      hi: 'डॉक्टर की निरंतर निगरानी यह सुनिश्चित करती है कि दवा सीमित समय तक ही चले, शरीर इसकी आदत न बनाए और समय रहते इसे सुरक्षित रूप से बंद किया जा सके।',
      gu: 'ડૉક્ટરની સતત દેખરેખ જરૂરી છે જેથી દવા મર્યાદિત સમય માટે જ વપરાય અને દર્દીને તેની કોઈ આદત ન પડે.',
    },
    mandatoryWarning: {
      en: 'Important safety warning: Benzodiazepines and hypnotic sedatives carry a risk of tolerance, dependence, and sedation. They are indicated strictly for short-term use under direct psychiatric prescription. Do not combine with alcohol.',
      hi: 'महत्वपूर्ण सुरक्षा चेतावनी: बेंजोडायजेपाइन और नींद की दवाओं से शारीरिक निर्भरता और सुस्ती का जोखिम रहता है। इन्हें केवल मनोचिकित्सक की सख्त देखरेख में थोड़े समय के लिए ही लिया जाना चाहिए। शराब के साथ कभी न लें।',
      gu: 'મહત્વપૂર્ણ સલામતી ચેતવણી: આ દવાઓની ટેવ પડવાનું અને સુસ્તી આવવાનું જોખમ રહેલું છે. તે માત્ર ટૂંકા ગાળા માટે મનોચિકિત્સકની સલાહ મુજબ જ લેવી જોઈએ. દારૂ સાથે બિલકુલ ન લેવી.',
    },
    references: [
      {
        citation: 'Baldwin DS, et al. Evidence-based pharmacological treatment of anxiety disorders, post-traumatic stress disorder and obsessive-compulsive disorder: A revision of the 2005 guidelines from the British Association for Psychopharmacology. J Psychopharmacol. 2014.',
        source: 'British Association for Psychopharmacology',
        year: '2014',
      },
      {
        citation: 'NICE Guideline [NG133]. Hypertension in adults: diagnosis and management / Generalised anxiety disorder and panic disorder in adults: management (CG113).',
        source: 'National Institute for Health and Care Excellence',
        year: '2019',
      },
    ],
    discontinuationGuidance: {
      en: 'Never discontinue benzodiazepines abruptly after continuous daily use, as dangerous rebound anxiety, insomnia, autonomic instability, and seizures can occur. Your psychiatrist will devise a gradual tapering schedule to ensure complete safety and comfort.',
      hi: 'लगातार कई हफ्तों तक लेने के बाद इसे कभी भी अचानक बंद न करें, अन्यथा गंभीर घबराहट और दौरे पड़ सकते हैं। डॉक्टर हमेशा धीरे-धीरे घटाकर ही इसे बंद करते हैं।',
      gu: 'લાંબો સમય લીધા પછી ક્યારેય અચાનક બંધ ન કરવી. ડૉક્ટરની સલાહથી ધીમે ધીમે ઘટાડીને જ બંધ કરવી જોઈએ જેથી કોઈ તકલીફ ન થાય.',
    },
    illustrativeExample: {
      en: 'Asha, a 29-year-old software tester in Vadodara, experienced violent nocturnal panic attacks that woke her gasping for air, her heart pounding at 160 bpm, leaving her terrified of going to bed. Her psychiatrist prescribed an SSRI as the long-term definitive treatment and a low-dose benzodiazepine as a brief, two-week temporary safety bridge. The psychiatrist clearly explained: "The calming tablet is our fire extinguisher for acute nights while the long-term medicine builds its foundation." Reassured, Asha took the tablet only when nocturnal panic peaked during the first week. By week three, as the SSRI achieved therapeutic coverage, her psychiatrist tapered off the calming tablet completely. Asha now sleeps peacefully, empowered with CBT breathing tools without any medication dependence.',
      hi: 'वडोदरा की 29 वर्षीया सॉफ्टवेयर टेस्टर आशा को रात में अचानक भयानक पैनिक अटैक आते थे, जिसमें दिल तेजी से धड़कता था और दम घुटने लगता था। मनोचिकित्सक ने उन्हें मुख्य इलाज के लिए एक एंटीडिप्रेसेंट दी और साथ ही पहले दो हफ्तों के लिए रात की घबराहट शांत करने के लिए एक अल्पकालिक दवा दी। डॉक्टर ने स्पष्ट समझाया: "यह शांत करने वाली गोली केवल आग बुझाने वाले यंत्र की तरह है, मुख्य काम लंबे समय की दवा करेगी।" तीसरे हफ्ते जब मुख्य दवा का असर शुरू हुआ, तो डॉक्टर ने शांत करने वाली गोली पूरी तरह बंद करा दी। आशा अब बिना किसी डर और बिना किसी लत के आराम से सोती हैं।',
      gu: 'વડોદરાની ૨૯ વર્ષીય આશાને રાત્રે અચાનક પેનિક એટેક આવતા અને શ્વાસ રૂંધાવા લાગતો હતો. મનોચિકિત્સકે તેને મુખ્ય સારવાર તરીકે એન્ટીડિપ્રેશન દવા અને શરૂઆતના બે અઠવાડિયા પૂરતી હળવી ઊંઘની દવા આપી. ડૉક્ટરે સ્પષ્ટ સમજાવ્યું: "આ ગોળી માત્ર આગ ઓલવવા જેવી કામચલાઉ છે, અસલ કામ મુખ્ય દવા કરશે." ત્રીજા અઠવાડિયે મુખ્ય દવાની અસર શરૂ થતાં જ ડૉક્ટરે ઊંઘની દવા સંપૂર્ણપણે બંધ કરાવી દીધી. આશા હવે કોઈપણ દવા પર આધાર રાખ્યા વિના શાંતિથી ઊંઘે છે.',
    },
    lastReviewed: '2026-09',
    // TODO(video): short, vetted video on Benzodiazepines safe short-term use and avoiding dependence
    youtubeVideoId: undefined,
    relatedIds: [
      'panic-disorder',
      'generalized-anxiety-disorder',
      'insomnia-disorder',
      'social-anxiety-disorder',
    ],
  },
];
