import { MedicationClass } from '../types';

export const medicationsData: MedicationClass[] = [
  {
    id: 'antidepressants',
    name: {
      en: 'Antidepressants (SSRIs, SNRIs & others)',
      hi: 'एंटीडिप्रेसेंट दवाएं (SSRIs, SNRIs आदि)',
      gu: 'એન્ટીડિપ્રેશન દવાઓ (SSRIs, SNRIs વગેરે)',
    },
    commonExamples: ['Escitalopram', 'Sertraline', 'Fluoxetine', 'Duloxetine', 'Venlafaxine', 'Mirtazapine'],
    indications: {
      en: 'Major Depressive Disorder, Generalized Anxiety Disorder, Panic Disorder, OCD, Social Anxiety Disorder, and PTSD.',
      hi: 'डिप्रेशन (अवसाद), जनरलाइज्ड एंग्जायटी, पैनिक अटैक, ओसीडी (OCD), और पीटीएसडी।',
      gu: 'ડિપ્રેશન, વધુ પડતી ચિંતા (GAD), પેનિક એટેક, ઓસીડી (OCD) અને માનસિક આઘાત (PTSD).',
    },
    mechanismPlain: {
      en: 'They help regulate communication between brain nerve cells by increasing the availability of chemical messengers like serotonin and noradrenaline in neural synapses.',
      hi: 'ये दवाएं मस्तिष्क की कोशिकाओं के बीच सेरोटोनिन (Serotonin) और नोरेड्रेनालाईन जैसे रासायनिक संदेशवाहकों के संतुलन को सामान्य करती हैं।',
      gu: 'આ દવાઓ મગજના જ્ઞાનતંતુઓ વચ્ચે સેરોટોનિન જેવા મહત્વના રસાયણોનું સંતુલન સુધારે છે જેથી મગજ શાંત અને સંતુલિત બને છે.',
    },
    commonSideEffects: {
      en: [
        'Mild nausea or stomach upset in the first 1-2 weeks',
        'Headache or lightheadedness during initiation',
        'Temporary sleep changes or vivid dreams',
        'Potential sexual side effects (delayed ejaculation or decreased libido)',
        'Dry mouth or mild changes in appetite',
      ],
      hi: [
        'शुरुआती 1-2 हफ्तों में हल्का जी मिचलाना या पेट में भारीपन',
        'शुरुआत में हल्का सिरदर्द या सुस्ती',
        'नींद में थोड़ा बदलाव या अधिक सपने आना',
        'यौन इच्छा में कमी या स्खलन में देरी',
        'मुंह सूखना या भूख में थोड़ा बदलाव',
      ],
      gu: [
        'શરૂઆતના ૧-૨ અઠવાડિયામાં સહેજ ઉબકા કે પેટમાં ભારેપણું',
        'શરૂઆતમાં હળવો માથાનો દુખાવો',
        'ઊંઘમાં થોડો ફેરફાર થવો',
        'જાતીય ઇચ્છામાં થોડો ઘટાડો',
        'મોં સૂકાવું',
      ],
    },
    seriousAdverseEffects: {
      en: 'Serotonin Syndrome (extremely rare, typically only when combined inappropriately with other serotonergic agents), allergic reactions, or paradoxical agitation in youth requiring prompt medical contact.',
      hi: 'सेरोटोनिन सिंड्रोम (अत्यंत दुर्लभ, विशेषकर जब अन्य दवाओं के साथ गलत तरीके से मिलाया जाए), या एलर्जी। ऐसा होने पर तुरंत डॉक्टर से संपर्क करें।',
      gu: 'સેરોટોનિન સિન્ડ્રોમ (ખૂબ જ દુર્લભ) અથવા એલર્જી. કોઈપણ તકલીફ જણાય તો તાત્કાલિક ડૉક્ટરનો સંપર્ક કરવો.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Antidepressants are addictive sleeping pills that change your personality." Fact: SSRIs are not addictive, do not cause cravings, and aim to restore your natural baseline functioning.',
      hi: 'भ्रांति: "एंटीडिप्रेसेंट नशीली गोलियां हैं जिनकी लत लग जाती है।" तथ्य: ये दवाएं नशीली नहीं होती हैं और इनकी कोई लत (Addiction) नहीं लगती।',
      gu: 'માન્યતા: "આ દવાઓ ઊંઘની ગોળીઓ છે અને તેની ટેવ પડી જાય છે." વાસ્તવિકતા: આ દવાઓ બિલકુલ નશાકારક નથી અને તેની કોઈ આદત પડતી નથી.',
    },
    importantPrecautions: {
      en: 'They typically take 2 to 4 weeks to show therapeutic effects. Never stop them suddenly because an abrupt discontinuation syndrome (dizziness, electric shock sensations, anxiety) can occur.',
      hi: 'इनका असर दिखने में 2 से 4 सप्ताह का समय लगता है। इन्हें कभी भी अचानक बंद न करें, अन्यथा चक्कर आना या बेचैनी जैसे लक्षण हो सकते हैं।',
      gu: 'આ દવાની અસર દેખાતા ૨ થી ૪ અઠવાડિયા લાગે છે. તેને ક્યારેય અચાનક બંધ ન કરવી, હંમેશા ડૉક્ટરની સલાહ મુજબ ધીમે ધીમે ઘટાડવી.',
    },
    whyMonitoringNeeded: {
      en: 'Your psychiatrist monitors symptom improvement, manages any early side effects, and adjusts treatment to the minimum effective maintenance regimen.',
      hi: 'मनोचिकित्सक आपकी प्रगति पर नजर रखते हैं ताकि यह सुनिश्चित हो सके कि दवा सही काम कर रही है और कोई असुविधा नहीं है।',
      gu: 'મનોચિકિત્સક દર્દીની પ્રગતિ તપાસીને ખાતરી કરે છે કે દવા યોગ્ય રીતે કામ કરી રહી છે.',
    },
    mandatoryWarning: {
      en: 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional.',
      hi: 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें।',
      gu: 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં.',
    },
    references: [
      {
        citation: 'Cipriani A, et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet. 2018.',
        source: 'The Lancet Meta-Analysis',
        year: '2018',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'antipsychotics',
    name: {
      en: 'Antipsychotics (Second-Generation & First-Generation)',
      hi: 'एंटीसाइकोटिक दवाएं (Antipsychotics)',
      gu: 'એન્ટિસાયકોટિક દવાઓ (Antipsychotics)',
    },
    commonExamples: ['Olanzapine', 'Risperidone', 'Aripiprazole', 'Quetiapine', 'Haloperidol', 'Clozapine'],
    indications: {
      en: 'Schizophrenia, Schizoaffective Disorder, Bipolar Mania, Severe Psychotic Depression, and Delirium management.',
      hi: 'सिज़ोफ्रेनिया, बायपोलर मेनिया, भ्रम या वहम की स्थिति, और गंभीर प्रलाप (Delirium)।',
      gu: 'સિઝોફ્રેનિયા, બાયપોલર મેનિયા, તીવ્ર વહેમ કે આભાસ અને ડેલીરિયમ.',
    },
    mechanismPlain: {
      en: 'Primarily balance dopamine and serotonin activity in specific brain pathways, reducing hallucinations, delusions, and severe agitation.',
      hi: 'यह दवाएं मस्तिष्क में डोपामाइन (Dopamine) और सेरोटोनिन के स्तर को संतुलित करती हैं, जिससे आवाजें आना और वहम दूर होते हैं।',
      gu: 'આ દવાઓ મગજમાં ડોપામાઇન જેવા રસાયણોને કંટ્રોલમાં લાવીને કાલ્પનિક અવાજો અને વહેમને શાંત કરે છે.',
    },
    commonSideEffects: {
      en: [
        'Drowsiness or sedation (especially initially)',
        'Weight gain or increased appetite',
        'Metabolic changes (blood sugar, cholesterol variations)',
        'Muscle stiffness, restlessness (akathisia), or mild tremors',
        'Dry mouth or constipation',
      ],
      hi: [
        'शुरुआत में अधिक नींद या सुस्ती आना',
        'वजन बढ़ना या भूख अधिक लगना',
        'ब्लड शुगर या कोलेस्ट्रॉल में बदलाव की संभावना',
        'मांसपेशियों में जकड़न या बेचैनी (Akathisia)',
        'मुंह सूखना या कब्ज होना',
      ],
      gu: [
        'શરૂઆતમાં ઘેન કે સુસ્તી આવવી',
        'વજન વધવું કે ભૂખ વધુ લાગવી',
        'બ્લડ શુગર કે કોલેસ્ટ્રોલમાં ફેરફાર થવાની શક્યતા',
        'સ્નાયુઓમાં જકડાઈ જવું કે બેચેની',
        'મોં સૂકાવું',
      ],
    },
    seriousAdverseEffects: {
      en: 'Neuroleptic Malignant Syndrome (rare medical emergency with high fever and severe muscle rigidity), Tardive Dyskinesia (involuntary movements with long-term use), or agranulocytosis (specific to clozapine, requiring mandatory blood tests).',
      hi: 'न्यूरोलेप्टिक मैलिग्नेंट सिंड्रोम (दुर्लभ बुखार व जकड़न), या लंबे समय में चेहरे/हाथों की अनैच्छिक हलचल। क्लोज़ापाइन के साथ नियमित ब्लड टेस्ट अनिवार्य हैं।',
      gu: 'ખૂબ જ દુર્લભ તાવ કે સ્નાયુઓની અક્કડતા. ક્લોઝાપાઈન દવા માટે નિયમિત બ્લડ ટેસ્ટ અનિવાર્ય હોય છે.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Antipsychotics are chemical straitjackets that turn people into zombies." Fact: Modern second-generation medications aim to clear confusing hallucinations while preserving cognition and quality of life.',
      hi: 'भ्रांति: "एंटीसाइकोटिक दवाएं मरीज को सुलाकर बेसुध कर देती हैं।" तथ्य: आधुनिक दवाएं भ्रम और आवाजों को मिटाकर मरीज को सामान्य सोचने-समझने में सक्षम बनाती हैं।',
      gu: 'માન્યતા: "આ દવાઓ માણસને બેભાન જેવો બનાવી દે છે." વાસ્તવિકતા: આધુનિક દવાઓ વહેમ અને અવાજો દૂર કરીને દર્દીને સામાન્ય જિંદગી જીવવા સક્ષમ બનાવે છે.',
    },
    importantPrecautions: {
      en: 'Regular weight, fasting blood glucose, lipid profile, and blood pressure monitoring. Never discontinue medication abruptly as psychotic symptoms usually return rapidly.',
      hi: 'नियमित रूप से वजन, ब्लड शुगर और बीपी की जांच कराते रहें। दवा कभी भी अचानक बंद न करें क्योंकि इससे बीमारी वापस लौट सकती है।',
      gu: 'નિયમિત વજન, બ્લડ શુગર અને પ્રેશર ચેક કરાવતા રહેવું. દવા ક્યારેય પોતાની મેળે બંધ ન કરવી.',
    },
    whyMonitoringNeeded: {
      en: 'Essential to balance therapeutic benefit against metabolic parameters and motor symptoms, ensuring optimal long-term physical health.',
      hi: 'शारीरिक स्वास्थ्य (शुगर, कोलेस्ट्रॉल) को सुरक्षित रखते हुए दिमागी संतुलन बनाए रखने के लिए डॉक्टर की नियमित निगरानी जरूरी है।',
      gu: 'શારીરિક સ્વાસ્થ્ય સલામત રહે અને માનસિક સ્થિરતા જળવાય તે માટે નિયમિત ચેકઅપ જરૂરી છે.',
    },
    mandatoryWarning: {
      en: 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional.',
      hi: 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें।',
      gu: 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં.',
    },
    references: [
      {
        citation: 'Huhn M, et al. Comparative efficacy and tolerability of 32 oral antipsychotics for the acute treatment of adults with multi-episode schizophrenia: a systematic review and network meta-analysis. Lancet. 2019.',
        source: 'The Lancet',
        year: '2019',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'mood-stabilizers',
    name: {
      en: 'Mood Stabilizers (Lithium, Valproate & others)',
      hi: 'मूड स्टेबलाइजर्स (लिथियम, वालप्रोएट आदि)',
      gu: 'મૂડ સ્ટેબિલાઇઝર્સ (લિથિયમ, વાલપ્રોએટ વગેરે)',
    },
    commonExamples: ['Lithium', 'Sodium Valproate / Divalproex', 'Carbamazepine', 'Lamotrigine'],
    indications: {
      en: 'Bipolar I and Bipolar II Disorder (mania, depression, and maintenance prevention), and augmentation in treatment-resistant depression.',
      hi: 'बायपोलर डिसऑर्डर (मेनिया और डिप्रेशन के दौरों को रोकना), और मूड के गंभीर उतार-चढ़ाव।',
      gu: 'બાયપોલર ડિસઓર્ડર (મેનિયા અને ડિપ્રેશનના હુમલા રોકવા) અને મૂડના ચડાવ-ઉતાર.',
    },
    mechanismPlain: {
      en: 'They modulate intracellular signaling cascades, neurotransmitter gene expression, and neuroprotective factors, preventing extreme highs and lows.',
      hi: 'ये दवाएं मस्तिष्क की कोशिकाओं के अंदर रासायनिक संकेतों को नियंत्रित करके मूड को स्थिर रखती हैं, जिससे अत्यधिक तेजी या गहरा अवसाद नहीं आता।',
      gu: 'આ દવાઓ મગજના કોષોની કાર્યપદ્ધતિને સ્થિર રાખીને મૂડને અતિશય વધવા કે અતિશય ઘટવા દેતી નથી.',
    },
    commonSideEffects: {
      en: [
        'Fine hand tremors',
        'Mild nausea, weight gain, or metallic taste (Lithium)',
        'Increased thirst and frequent urination (Lithium)',
        'Hair thinning or transient liver enzyme changes (Valproate)',
        'Fatigue or mild dizziness',
      ],
      hi: [
        'हाथों में हल्की कंपकंपी (Tremors)',
        'हल्की मिचली, वजन बढ़ना, या मुंह में कसैला स्वाद',
        'प्यास अधिक लगना और बार-बार पेशाब आना (लिथियम)',
        'बालों का झड़ना (वालप्रोएट में अस्थायी)',
        'हल्की सुस्ती या थकान',
      ],
      gu: [
        'હાથમાં હળવી ધ્રૂજારી',
        'વજન વધવું કે ઉબકા આવવા',
        'વધુ તરસ લાગવી અને વારંવાર પેશાબ જવું (લિથિયમ)',
        'વાળ ખરવા (વાલપ્રોએટમાં હંગામી)',
        'હળવી સુસ્તી',
      ],
    },
    seriousAdverseEffects: {
      en: 'Lithium Toxicity (nausea, vomiting, coarse tremor, ataxia, confusion — occurs if dehydrated or dose too high), thyroid/kidney dysfunction with lithium; severe rash (Stevens-Johnson syndrome, especially with lamotrigine); teratogenicity in pregnancy.',
      hi: 'लिथियम विषाक्तता (उल्टी, तेज कंपकंपी, लड़खड़ाहट - पानी की कमी से हो सकती है); थायरॉयड या किडनी पर असर; लेमोट्रिजिन के साथ त्वचा पर गंभीर चकत्ते।',
      gu: 'લિથિયમ ટોક્સિસિટી (ઝાડા-ઉલટી, ભારે ધ્રૂજારી - પાણી ઘટવાથી થાય); થાઇરોઇડ કે કીડની પર અસર; ચામડી પર એલર્જી.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Lithium is a heavy toxic metal to be avoided at all costs." Fact: Lithium is a naturally occurring element and remains one of the most effective, life-saving, suicide-protective medications in all of medicine when properly monitored.',
      hi: 'भ्रांति: "लिथियम बहुत जहरीली दवा है।" तथ्य: जब डॉक्टर के कहे अनुसार ब्लड टेस्ट से निगरानी रखी जाए, तो लिथियम बायपोलर के लिए सबसे सुरक्षित और जीवन रक्षक दवा साबित होती है।',
      gu: 'માન્યતા: "લિથિયમ ઝેરી દવા છે." વાસ્તવિકતા: ડૉક્ટરની દેખરેખ અને બ્લડ ટેસ્ટ સાથે લિથિયમ બાયપોલર માટે સૌથી અકસીર અને જીવન બચાવનારી દવા છે.',
    },
    importantPrecautions: {
      en: 'Mandatory regular blood tests (serum lithium levels, kidney function, thyroid function for Lithium; liver function and CBC for Valproate). Stay well-hydrated in hot Indian weather and avoid NSAID painkillers without checking with your doctor.',
      hi: 'समय-समय पर खून की जांच (सीरम लिथियम, किडनी व थायरॉयड टेस्ट) अनिवार्य है। गर्मियों में भरपूर पानी पिएं और बिना डॉक्टर से पूछे दर्द निवारक (पेनकिलर) न खाएं।',
      gu: 'સમયસર બ્લડ ટેસ્ટ (લિથિયમ લેવલ, કીડની અને થાઇરોઇડ રિપોર્ટ) અનિવાર્ય છે. ઉનાળામાં પૂરતું પાણી પીવું અને પેઇનકિલર્સ લેતા પહેલાં ડૉક્ટરને પૂછવું.',
    },
    whyMonitoringNeeded: {
      en: 'Lithium has a narrow therapeutic window: too little has no effect, too much causes toxicity. Blood monitoring guarantees the exact safe, therapeutic concentration.',
      hi: 'लिथियम का स्तर शरीर में बिल्कुल सही मात्रा में होना जरूरी है—कम होने पर फायदा नहीं होता और ज्यादा होने पर नुकसान। इसलिए ब्लड टेस्ट जरूरी है।',
      gu: 'લિથિયમનું પ્રમાણ શરીરમાં ચોક્કસ માત્રામાં હોવું જરૂરી છે. બ્લડ ટેસ્ટ દર્દીની સલામતીની ખાતરી આપે છે.',
    },
    mandatoryWarning: {
      en: 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional.',
      hi: 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें।',
      gu: 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં.',
    },
    references: [
      {
        citation: 'Malhi GS, et al. The science and practice of lithium therapy. Aust N Z J Psychiatry. 2020.',
        source: 'ANZJP Guidelines',
        year: '2020',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'anxiolytics-hypnotics',
    name: {
      en: 'Anxiolytics & Sleep Medications (Benzodiazepines & Z-drugs)',
      hi: 'चिंता-निवारक और अनिद्रा की दवाएं (Benzodiazepines व Z-drugs)',
      gu: 'ચિંતા-નિવારક અને ઊંઘની દવાઓ (Benzodiazepines અને Z-drugs)',
    },
    commonExamples: ['Clonazepam', 'Lorazepam', 'Alprazolam', 'Zolpidem', 'Zopiclone', 'Melatonin receptor agonists'],
    indications: {
      en: 'Short-term relief of acute severe anxiety, panic episodes, acute agitation, catatonia, and short-term severe insomnia.',
      hi: 'अत्यधिक तीव्र घबराहट, पैनिक अटैक का दौरा, या तीव्र अनिद्रा में अल्पकालिक (शॉर्ट-टर्म) राहत के लिए।',
      gu: 'તીવ્ર ગભરાટ, પેનિક એટેક કે થોડા દિવસો માટે ગંભીર અનિદ્રામાં તાત્કાલિક રાહત માટે.',
    },
    mechanismPlain: {
      en: 'Enhance the inhibitory action of GABA at GABAA receptors, rapidly calming brain overactivity.',
      hi: 'मस्तिष्क के मुख्य शांत करने वाले रसायन (GABA) के प्रभाव को बढ़ाकर दिमाग की अति-सक्रियता को तुरंत धीमा करती हैं।',
      gu: 'મગજના GABA નામના શાંતિ આપતા રસાયણને સક્રિય કરીને મગજની દોડધામને ઝડપથી શાંત પાડે છે.',
    },
    commonSideEffects: {
      en: [
        'Drowsiness, daytime sedation, and unsteadiness',
        'Impaired coordination and reaction time (risk of falls, especially in elderly)',
        'Short-term memory blunting',
      ],
      hi: [
        'दिन में सुस्ती या नींद जैसा महसूस होना',
        'संतुलन बिगड़ने का खतरा (विशेषकर बुजुर्गों में गिरने का जोखिम)',
        'हाल की बातें याद रखने में हल्की कठिनाई',
      ],
      gu: [
        'દિવસ દરમિયાન સુસ્તી કે ઘેન રહેવું',
        'શરીરનું સંતુલન બગડવું (વડીલોમાં લપસી પડવાનું જોખમ)',
        'યાદશક્તિમાં હંગામી ખામી',
      ],
    },
    seriousAdverseEffects: {
      en: 'Respiratory depression (especially if combined with alcohol or opioids), severe physiological dependence, tolerance, and withdrawal seizures if stopped suddenly.',
      hi: 'शराब के साथ लेने पर सांस रुकने का जानलेवा खतरा; लंबे समय तक लेने पर शारीरिक निर्भरता (लत) और अचानक बंद करने पर दौरे पड़ना।',
      gu: 'દારૂ સાથે લેવાથી શ્વાસ બંધ થવાનો ખતરો; લાંબા ગાળે આદત પડી જવી અને અચાનક બંધ કરવાથી ખેંચ (આંચકી) આવવી.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Taking a sleeping pill every night is harmless and the best way to treat insomnia." Fact: Long-term use alters natural sleep architecture and causes dependence; CBT for Insomnia (CBT-I) and addressing root causes are the true long-term solutions.',
      hi: 'भ्रांति: "रोज रात नींद की गोली खाना सामान्य और सुरक्षित है।" तथ्य: ये दवाएं केवल थोड़े समय (कुछ दिनों या हफ्तों) के लिए होती हैं। नींद की स्थायी समस्या का इलाज जीवनशैली और तनाव के कारण को ठीक करने से होता है।',
      gu: 'માન્યતા: "રોજ રાત્રે ઊંઘની ગોળી લેવી સામાન્ય છે." વાસ્તવિકતા: આ દવાઓ માત્ર ટૂંકા ગાળા માટે હોય છે. કાયમી ઊંઘ માટે જીવનશૈલી સુધારવી જરૂરી છે.',
    },
    importantPrecautions: {
      en: 'Strictly intended for SHORT-TERM use (usually days to a few weeks) under direct psychiatric supervision. Never combine with alcohol. Do not drive or operate machinery while taking these medications. Taper gradually under doctor direction.',
      hi: 'ये दवाएं केवल कुछ दिनों या हफ्तों के लिए डॉक्टर की सख्त निगरानी में दी जाती हैं। इनके साथ शराब कभी न पिएं। गाड़ी न चलाएं। कभी भी अपनी मर्जी से दवा न बढ़ाएं।',
      gu: 'આ દવાઓ માત્ર થોડા દિવસો કે અઠવાડિયા માટે ડૉક્ટરની કડક દેખરેખ હેઠળ લેવાની હોય છે. દારૂ સાથે ક્યારેય ન લેવી. વાહન ન ચલાવવું.',
    },
    whyMonitoringNeeded: {
      en: 'To prevent dose escalation, monitor for tolerance or dependence, and transition the patient to long-term non-addictive therapies (like SSRIs and psychotherapy).',
      hi: 'ताकि दवा की लत न लगे और मरीज को समय रहते सुरक्षित लंबी अवधि के इलाज (जैसे SSRIs या थेरेपी) पर स्थानांतरित किया जा सके।',
      gu: 'જેથી દર્દીને આદત ન પડે અને સમયસર સાચી સારવાર પર લાવી શકાય.',
    },
    mandatoryWarning: {
      en: 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional.',
      hi: 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें।',
      gu: 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં.',
    },
    references: [
      {
        citation: 'Baldwin DS, et al. Evidence-based pharmacological treatment of anxiety disorders, post-traumatic stress disorder and obsessive-compulsive disorder: A revision of the 2005 guidelines from the British Association for Psychopharmacology. J Psychopharmacol. 2014.',
        source: 'BAP Guidelines',
        year: '2014',
      },
    ],
    lastReviewed: '2026-08',
  },
];
