import { MedicationClass } from '../../types';

export const antidepressantsAntipsychoticsData: MedicationClass[] = [
  {
    id: 'antidepressants',
    name: {
      en: 'Antidepressants (SSRIs, SNRIs & others)',
      hi: 'एंटीडिप्रेसेंट दवाएं (SSRIs, SNRIs आदि)',
      gu: 'એન્ટીડિપ્રેશન દવાઓ (SSRIs, SNRIs વગેરે)',
    },
    commonExamples: [
      'Escitalopram',
      'Sertraline',
      'Fluoxetine',
      'Duloxetine',
      'Venlafaxine',
      'Mirtazapine',
      'Bupropion',
    ],
    indications: {
      en: 'Primary first-line medical therapy for Major Depressive Disorder, Generalized Anxiety Disorder (GAD), Panic Disorder, Obsessive-Compulsive Disorder (OCD), Social Anxiety Disorder, Post-Traumatic Stress Disorder (PTSD), and Premenstrual Dysphoric Disorder (PMDD). They are also utilized adjunctively in chronic neuropathic pain and persistent depressive disorder.',
      hi: 'मेजर डिप्रेशन, जनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD), पैनिक अटैक, ओसीडी (OCD), सोशल एंग्जायटी, पीटीएसडी (PTSD) और पीएमडीडी (PMDD) के लिए यह पहली पसंद की मुख्य चिकित्सा है। नसों के पुराने दर्द और क्रोनिक डिप्रेशन में भी इनका उपयोग किया जाता है।',
      gu: 'મેજર ડિપ્રેશન, વધુ પડતી ચિંતા (GAD), પેનિક એટેક, ઓસીડી (OCD), સોશિયલ એન્ઝાયટી, માનસિક આઘાત (PTSD) અને PMDD માટે આ પ્રથમ હરોળની મુખ્ય સારવાર છે. જૂના શારીરિક દુખાવા અને લાંબા ગાળાના ડિપ્રેશનમાં પણ તે ખૂબ ઉપયોગી સાબિત થાય છે.',
    },
    mechanismPlain: {
      en: 'Antidepressants work by modulating chemical neurotransmitters in the synaptic junctions between brain neurons. Selective Serotonin Reuptake Inhibitors (SSRIs) and Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs) selectively block the reabsorption of serotonin and noradrenaline, allowing these vital messengers to remain active longer. Over subsequent weeks, this triggers neuroplasticity, stimulating the production of Brain-Derived Neurotrophic Factor (BDNF) and restoring healthier communication across emotional circuits in the hippocampus and prefrontal cortex.',
      hi: 'एंटीडिप्रेसेंट दवाएं मस्तिष्क के न्यूरॉन्स के बीच रासायनिक संदेशवाहकों को संतुलित करने का काम करती हैं। SSRI और SNRI दवाएं सेरोटोनिन और नोरेड्रेनालाईन के पुनर्शोषण को रोकती हैं, जिससे ये जरूरी रसायन तंत्रिका तंत्र में अधिक समय तक सक्रिय रहते हैं। कुछ हफ्तों के निरंतर उपयोग से यह मस्तिष्क में नए न्यूरोनल कनेक्शन (Neuroplasticity) और बीडीएनएफ (BDNF) को बढ़ावा देती हैं, जिससे मन शांत और स्थिर होता है।',
      gu: 'આ દવાઓ મગજના જ્ઞાનતંતુઓ વચ્ચે રાસાયણિક સંદેશવાહકોને પુનઃસંતુલિત કરે છે. SSRI અને SNRI દવાઓ સેરોટોનિન અને નોરેડ્રેનાલાઇન રસાયણોનું શોષણ ધીમું કરીને તેને જ્ઞાનતંતુઓમાં લાંબો સમય સક્રિય રાખે છે. થોડા અઠવાડિયાના નિયમિત સેવનથી મગજમાં નવા ન્યુરલ જોડાણો બને છે અને લાગણીઓનું સંતુલન જાળવતાં કેન્દ્રો પુનર્જીવિત થાય છે.',
    },
    commonSideEffects: {
      en: [
        'Transient nausea, mild stomach upset, or loose stools during the first 1 to 2 weeks',
        'Mild morning headache or lightheadedness during treatment initiation',
        'Temporary changes in sleep architecture, including vivid dreams or mild initial drowsiness',
        'Potential sexual side effects (such as delayed climax or reduced libido), which should be discussed with your psychiatrist',
        'Dry mouth, mild sweating, or transient changes in appetite',
      ],
      hi: [
        'शुरुआती 1 से 2 हफ्तों में हल्का जी मिचलाना, पेट में भारीपन या हल्के दस्त',
        'दवा शुरू करने पर शुरुआत में हल्का सिरदर्द या सुस्ती',
        'नींद में थोड़ा बदलाव या अधिक सपने आना',
        'यौन इच्छा में कमी या स्खलन में देरी (इसके बारे में डॉक्टर से खुलकर बात करें)',
        'मुंह सूखना, हल्का पसीना आना या भूख में थोड़ा बदलाव',
      ],
      gu: [
        'શરૂઆતના ૧ થી ૨ અઠવાડિયામાં સહેજ ઉબકા કે પેટમાં ભારેપણું',
        'સારવારની શરૂઆતમાં હળવો માથાનો દુખાવો કે સુસ્તી',
        'ઊંઘમાં થોડો ફેરફાર અથવા વધુ સપનાં આવવાં',
        'જાતીય ઇચ્છામાં ઘટાડો (ડૉક્ટર સાથે નિઃસંકોચ ચર્ચા કરી શકાય છે)',
        'મોં સૂકાવું, પરસેવો થવો કે ભૂખમાં સામાન્ય ફેરફાર',
      ],
    },
    seriousAdverseEffects: {
      en: 'Serotonin Syndrome (a rare, potentially severe condition typically resulting only from dangerous polypharmacy combining multiple serotonergic agents), allergic skin reactions, hyponatremia in elderly patients, or unexpected motor restlessness (akathisia). Any severe rash, high fever, or intense inner agitation demands immediate medical contact.',
      hi: 'सेरोटोनिन सिंड्रोम (एक दुर्लभ स्थिति जो आमतौर पर कई दवाओं को बिना डॉक्टरी सलाह के मिलाने से होती है), गंभीर एलर्जी, बुजुर्गों में सोडियम की कमी, या अत्यधिक बेचैनी। तेज बुखार, दाने या अत्यधिक घबराहट होने पर तुरंत डॉक्टर से संपर्क करें।',
      gu: 'સેરોટોનિન સિન્ડ્રોમ (ખૂબ જ દુર્લભ સ્થિતિ, જે ડૉક્ટરની સલાહ વિના બીજી દવાઓ મિક્સ કરવાથી થાય છે), એલર્જી, વૃદ્ધોમાં સોડિયમ ઘટી જવું અથવા અતિશય બેચેની. તાવ, ચકામા કે ગભરાટ જણાય તો તાત્કાલિક ડૉક્ટરનો સંપર્ક કરવો.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Antidepressants are addictive sedatives that alter your core personality, make you a zombie, and must be taken forever." Clinical Fact: Modern antidepressants are non-habit forming, do not produce physiological cravings or euphoric highs, and do not change your fundamental values; they relieve paralyzing neurochemical distress so your authentic self can re-emerge.',
      hi: 'भ्रांति: "एंटीडिप्रेसेंट नशीली दवाएं हैं जिनकी लत लग जाती है, ये इंसान को सुस्त बना देती हैं और इन्हें जिंदगी भर खाना पड़ता है।" तथ्य: आधुनिक एंटीडिप्रेसेंट नशीली नहीं होती हैं, इनकी कोई लत (Addiction) नहीं पड़ती और ये आपका व्यक्तित्व नहीं बदलतीं; ये केवल बीमारी के कारण आई उदासी को दूर करके आपको सामान्य बनाती हैं।',
      gu: 'માન્યતા: "આ દવાઓ ઊંઘની નશાકારક ગોળીઓ છે, તેની ટેવ પડી જાય છે અને આખી જિંદગી લેવી પડે છે." વાસ્તવિકતા: આધુનિક એન્ટીડિપ્રેશન દવાઓ બિલકુલ નશાકારક નથી હોતી, તેની કોઈ લત પડતી નથી અને તે તમારો સ્વભાવ બદલતી નથી; તે માત્ર મગજના રસાયણો સુધારીને તમને સ્વસ્થ કરે છે.',
    },
    importantPrecautions: {
      en: 'Antidepressants do not produce overnight relief; therapeutic clinical response typically develops gradually over 2 to 6 weeks. Never alter the treatment plan or cease medication abruptly without psychiatric consultation, as sudden cessation can trigger an uncomfortable antidepressant discontinuation syndrome or symptom relapse.',
      hi: 'एंटीडिप्रेसेंट का पूरा असर दिखने में 2 से 6 सप्ताह का समय लगता है। डॉक्टर की सलाह के बिना कभी भी दवा की मात्रा न बदलें और न ही अचानक दवा बंद करें, क्योंकि अचानक बंद करने से चक्कर आना, घबराहट या बीमारी के दोबारा लौटने का जोखिम रहता है।',
      gu: 'આ દવાની સંપૂર્ણ અસર દેખાતાં ૨ થી ૬ અઠવાડિયા લાગે છે. ડૉક્ટરની સલાહ વગર ક્યારેય દવા બંધ ન કરવી કે ફેરફાર ન કરવો, કારણ કે અચાનક બંધ કરવાથી ચક્કર આવવા, બેચેની થવી કે બીમારી ફરીથી ઉથલો મારવાનું જોખમ રહે છે.',
    },
    whyMonitoringNeeded: {
      en: 'Routine follow-up appointments enable the psychiatrist to assess clinical response, objectively evaluate side-effect tolerability, verify emotional stabilization, screen for any emergent hypomanic switches, and ensure treatment duration follows international guidelines.',
      hi: 'नियमित फॉलो-अप से डॉक्टर यह जांचते हैं कि दवा कितनी असरदार साबित हो रही है, कोई साइड इफेक्ट तो नहीं है, मूड पूरी तरह स्थिर हुआ है या नहीं, और उपचार को अंतरराष्ट्रीय गाइडलाइंस के अनुसार सही समय तक जारी रखा जा सके।',
      gu: 'નિયમિત ફોલો-અપથી ડૉક્ટર ખાતરી કરે છે કે દવા યોગ્ય રીતે કામ કરી રહી છે કે નહીં, કોઈ આડઅસર છે કે નહીં, અને દર્દીનું માનસિક સંતુલન સંપૂર્ણપણે સામાન્ય થઈ રહ્યું છે કે નહીં.',
    },
    discontinuationGuidance: {
      en: 'Discontinuation is never executed abruptly. When full clinical remission has been stably maintained for the guideline-recommended period, the treating psychiatrist supervises a gradual, step-down tapering schedule to ensure physical comfort and verify continued long-term stability.',
      hi: 'दवा कभी भी अचानक बंद नहीं की जाती। जब मरीज पूरी तरह ठीक हो जाता है और निर्धारित समय तक स्थिर रहता है, तब मनोचिकित्सक की देखरेख में धीरे-धीरे दवा की मात्रा घटाकर बंद की जाती है ताकि कोई परेशानी न हो।',
      gu: 'દવા ક્યારેય એકાએક બંધ કરવામાં આવતી નથી. જ્યારે દર્દી સંપૂર્ણ સાજો થઈ જાય અને યોગ્ય સમયગાળો પૂરો થાય, ત્યારે મનોચિકિત્સકની દેખરેખ હેઠળ ધીમે ધીમે ઘટાડીને જ બંધ કરાય છે.',
    },
    mandatoryWarning: {
      en: 'Educational information only. Never start, stop, or modify psychiatric medications without direct consultation and ongoing supervision from a qualified psychiatrist. Self-medication or abrupt cessation can cause dangerous complications.',
      hi: 'केवल शैक्षिक जानकारी। किसी योग्य मनोरोग विशेषज्ञ के प्रत्यक्ष परामर्श और निरंतर देखरेख के बिना दवाएं कभी भी शुरू, बंद या उनमें बदलाव न करें। बिना सलाह के दवा लेना या अचानक बंद करना खतरनाक हो सकता है।',
      gu: 'માત્ર શૈક્ષણિક માહિતી. લાયકાત ધરાવતા મનોચિકિત્સકની સીધી સલાહ અને દેખરેખ વિના ક્યારેય દવા શરૂ, બંધ કે તેમાં ફેરફાર કરવો નહીં. જાતે દવા લેવી કે અચાનક બંધ કરવી જોખમી બની શકે છે.',
    },
    references: [
      {
        citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients with Major Depressive Disorder. 3rd ed.',
        source: 'American Psychiatric Association',
        year: '2019',
      },
      {
        citation: 'Cleare A, et al. Evidence-based guidelines for treating depressive disorders with antidepressants: A revision of 2008 British Association for Psychopharmacology guidelines. J Psychopharmacol. 2015.',
        source: 'British Association for Psychopharmacology',
        year: '2015',
      },
    ],
    illustrativeExample: {
      en: 'Suresh, a 41-year-old school administrator in Surat, had suffered from debilitating major depression and panic attacks for five months, leaving him bedridden on weekends and struggling to concentrate at work. After comprehensive evaluation, his psychiatrist prescribed a first-line SSRI antidepressant. During the first ten days, Suresh noticed mild morning nausea and dry mouth, but his doctor had prepared him for this initial adaptation window, reassuring him that it would pass. By week three, Suresh noticed his sleep had deepened and the terrifying morning panic knots in his stomach were softening. By week six, his concentration and motivation returned, enabling him to participate enthusiastically in his daughter’s school annual function. Working closely with his psychiatrist over monthly check-ins, Suresh maintained stable recovery without side effects.',
      hi: 'सूरत के 41 वर्षीय स्कूल एडमिनिस्ट्रेटर सुरेश पिछले पांच महीनों से गंभीर डिप्रेशन और पैनिक अटैक से जूझ रहे थे, जिसके कारण वे सप्ताहांत पर बिस्तर पर पड़े रहते थे और काम पर ध्यान नहीं दे पा रहे थे। मनोचिकित्सक से परामर्श के बाद उन्हें एक आधुनिक SSRI एंटीडिप्रेसेंट दवा शुरू की गई। पहले दस दिनों में सुरेश को सुबह हल्का जी मिचलाना और मुंह सूखना महसूस हुआ, लेकिन डॉक्टर ने उन्हें पहले ही बता दिया था कि यह कुछ दिनों में ठीक हो जाएगा। तीसरे हफ्ते तक सुरेश की नींद गहरी हो गई और सुबह की घबराहट कम होने लगी। छठे हफ्ते तक उनका ध्यान और ऊर्जा पूरी तरह लौट आई और वे बेटी के स्कूल कार्यक्रम में खुशी-खुशी शामिल हुए। नियमित फॉलो-अप के साथ सुरेश पूरी तरह स्वस्थ हो गए।',
      gu: 'સુરતના ૪૧ વર્ષીય સ્કૂલ એડમિનિસ્ટ્રેટર સુરેશભાઈ પાંચ મહિનાથી ગંભીર ડિપ્રેશન અને પેનિક એટેકથી પીડાતા હતા, જેના લીધે તેઓ શનિ-રવિ પથારીમાં પડ્યા રહેતા અને નોકરીમાં ધ્યાન નહોતું અપાતું. મનોચિકિત્સકની સલાહથી તેમને આધુનિક SSRI એન્ટીડિપ્રેશન દવા શરૂ કરવામાં આવી. શરૂઆતના દસ દિવસ હળવા ઉબકા અને મોં સૂકાવાની ફરિયાદ રહી, પરંતુ ડૉક્ટરે અગાઉથી સમજાવ્યું હોવાથી સુરેશભાઈએ ધીરજ રાખી. ત્રીજા અઠવાડિયે ઊંઘ સુધરી અને સવારનો ગભરાટ ઘટ્યો. છઠ્ઠા અઠવાડિયે તેમનું ધ્યાન અને ઉત્સાહ પાછાં આવ્યાં અને તેઓ દીકરીના વાર્ષિક ઉત્સવમાં આનંદપૂર્વક સામેલ થયા. ડૉક્ટરની નિયમિત દેખરેખ હેઠળ સુરેશભાઈ સંપૂર્ણ સાજા થઈ ગયા.',
    },
    lastReviewed: '2026-09',
    // TODO(video): short, vetted clinical overview on how SSRIs/SNRIs regulate serotonin and neuroplasticity
    youtubeVideoId: undefined,
    relatedIds: [
      'major-depressive-disorder',
      'generalized-anxiety-disorder',
      'panic-disorder',
      'obsessive-compulsive-disorder',
      'social-anxiety-disorder',
      'post-traumatic-stress-disorder',
      'premenstrual-dysphoric-disorder-pmdd',
      'persistent-depressive-disorder-dysthymia',
    ],
  },
  {
    id: 'antipsychotics',
    name: {
      en: 'Antipsychotics (Second-Generation & First-Generation)',
      hi: 'एंटीसाइकोटिक दवाएं (नई एवं पुरानी पीढ़ी की दवाएं)',
      gu: 'એન્ટીસાયકોટિક દવાઓ (નવી અને જૂની પેઢીની દવાઓ)',
    },
    commonExamples: [
      'Olanzapine',
      'Risperidone',
      'Aripiprazole',
      'Quetiapine',
      'Haloperidol',
      'Clozapine',
    ],
    indications: {
      en: 'Indispensable primary pharmacotherapy for Schizophrenia, Schizoaffective Disorder, Acute Bipolar Mania, and Psychotic Depression. Selected second-generation agents are also approved as adjunctive treatments in treatment-resistant unipolar depression and severe agitation in dementia under careful clinical supervision.',
      hi: 'सिज़ोफ्रेनिया, स्किज़ोअफेक्टिव विकार, बायपोलर मेनिया के तीव्र दौरे, और साइकोटिक डिप्रेशन के लिए यह सबसे महत्वपूर्ण और अनिवार्य दवा है। गंभीर डिप्रेशन में जहां अन्य दवाएं काम न करें, वहां भी डॉक्टर इनका सहायक रूप से उपयोग करते हैं।',
      gu: 'સિઝોફ્રેનિયા, બાયપોલર મેનિયા (અતિશય ઉત્તેજના), અને સાયકોટિક ડિપ્રેશન માટે આ અનિવાર્ય અને મુખ્ય દવાઓ છે. દવાઓથી કાબૂમાં ન આવતા ગંભીર ડિપ્રેશનમાં પણ મનોચિકિત્સક આ દવાઓનો સહાયક તરીકે ઉપયોગ કરે છે.',
    },
    mechanismPlain: {
      en: 'Antipsychotics primarily work by modulating neurotransmission in dopamine pathways within the brain. Second-Generation (Atypical) Antipsychotics act as antagonists or partial agonists at dopamine D2 receptors and serotonin 5-HT2A receptors. By dampening excessive dopamine signaling in the mesolimbic pathway, they resolve hallucinations and delusions ("positive symptoms"), while their balanced serotonergic action helps minimize motor side effects and supports mood stability.',
      hi: 'एंटीसाइकोटिक दवाएं मस्तिष्क में डोपामाइन (Dopamine) और सेरोटोनिन रसायनों के संतुलन को ठीक करती हैं। नई पीढ़ी की दवाएं डोपामाइन D2 रिसेप्टर्स को नियंत्रित करती हैं, जिससे मस्तिष्क में बेवजह सुनाई देने वाली आवाजें (Hallucinations) और झूठे पक्के वहम (Delusions) शांत हो जाते हैं। साथ ही यह मूड को स्थिर रखने में मदद करती हैं।',
      gu: 'આ દવાઓ મગજમાં ડોપામાઇન અને સેરોટોનિન રસાયણોની વધઘટને નિયંત્રિત કરે છે. નવી પેઢીની દવાઓ ડોપામાઇનના અતિશય પ્રવાહને શાંત પાડે છે, જેથી કાલ્પનિક અવાજો સંભળાવા કે ખોટા વહેમ થવા જેવાં ગંભીર લક્ષણો ઝડપથી કાબૂમાં આવે છે અને દર્દીનું મગજ વાસ્તવિકતા સાથે જોડાય છે.',
    },
    commonSideEffects: {
      en: [
        'Sedation or daytime drowsiness, especially during initial dose titration',
        'Metabolic shifts, including increased appetite, weight gain, and altered lipid profiles (agent-dependent)',
        'Mild postural dizziness or lightheadedness when standing up quickly',
        'Dry mouth, constipation, or mild transient nasal congestion',
        'Mild extrapyramidal symptoms such as minor muscle stiffness or subtle tremor',
      ],
      hi: [
        'शुरुआत में अधिक नींद या दिन में सुस्ती महसूस होना',
        'भूख बढ़ना और वजन में वृद्धि होना (दवा के प्रकार पर निर्भर)',
        'अचानक खड़े होने पर हल्का चक्कर आना',
        'मुंह सूखना या कब्ज की शिकायत होना',
        'मांसपेशियों में हल्का खिंचाव या हाथों में मामूली कंपन',
      ],
      gu: [
        'શરૂઆતમાં ઊંઘ વધુ આવવી કે સુસ્તી લાગવી',
        'ભૂખ વધવી અને વજન વધવું (દવાના પ્રકાર પર આધારિત)',
        'અચાનક ઊભા થતાં ચક્કર આવવાં',
        'મોં સૂકાવું કે કબજિયાત થવી',
        'સ્નાયુઓમાં થોડી જકડન કે હાથમાં સામાન્ય ધ્રૂજારી',
      ],
    },
    seriousAdverseEffects: {
      en: 'Neuroleptic Malignant Syndrome (NMS - an exceedingly rare medical emergency marked by high fever, severe rigidity, and autonomic instability), severe metabolic dysregulation (new-onset diabetes), or tardive dyskinesia (involuntary movements after prolonged exposure). Any severe muscle stiffness accompanied by fever requires emergency medical attention.',
      hi: 'न्यूरोलेप्टिक मैलिग्नेंट सिंड्रोम (NMS - एक अत्यंत दुर्लभ आपातकालीन स्थिति जिसमें तेज बुखार और मांसपेशियों में भारी अकड़न होती है), शुगर बढ़ना, या चेहरे व जीभ का अनियंत्रित हिलना (Tardive Dyskinesia)। तेज बुखार और अकड़न होने पर तुरंत अस्पताल जाएं।',
      gu: 'ન્યુરોલેપ્ટિક મેલિગ્નન્ટ સિન્ડ્રોમ (NMS - અતિ દુર્લભ સ્થિતિ જેમાં તાવ અને સ્નાયુઓમાં સખત જકડન થાય છે), બ્લડ શુગર વધવું, અથવા લાંબા ગાળે ચહેરાના અનૈચ્છિક હલનચલન. તાવ સાથે સ્નાયુ જકડાય તો તાત્કાલિક હોસ્પિટલ પહોંચવું.',
    },
    commonMisconceptions: {
      en: 'Misconception: "Antipsychotics are chemical straitjackets given only to silence individuals permanently." Fact: When prescribed thoughtfully and monitored responsibly, modern antipsychotics restore cognitive clarity, protect neural integrity, and allow people with severe psychiatric conditions to study, hold jobs, and build fulfilling family lives.',
      hi: 'भ्रांति: "एंटीसाइकोटिक दवाएं केवल मरीज को बेहोश या सुस्त रखने के लिए दी जाती हैं।" तथ्य: सही मात्रा और डॉक्टर की देखरेख में ये दवाएं मरीज की सोचने-समझने की शक्ति लौटाती हैं और सिज़ोफ्रेनिया जैसे गंभीर रोगों से पीड़ित व्यक्ति को नौकरी करने और सामान्य सामाजिक जीवन जीने में सक्षम बनाती हैं।',
      gu: 'માન્યતા: "આ દવાઓ દર્દીને સાવ સુવડાવી દેવા કે બહેરા જેવો બનાવી દેવા માટે અપાય છે." વાસ્તવિકતા: યોગ્ય માત્રામાં અપાતી આ દવાઓ દર્દીના મગજમાંથી ભ્રમ દૂર કરીને સામાન્ય વિચારશક્તિ પાછી લાવે છે, જેથી દર્દી નોકરી કરી શકે છે અને સુખી કૌટુંબિક જીવન જીવી શકે છે.',
    },
    importantPrecautions: {
      en: 'Regular metabolic screening (fasting blood glucose, lipid profile, weight, and blood pressure) is an essential component of clinical care. Never modify or discontinue therapy without psychiatric direction, as antipsychotic discontinuation is the leading cause of relapse and psychiatric rehospitalization.',
      hi: 'नियमित स्वास्थ्य जांच (ब्लड शुगर, लिपिड प्रोफाइल, वजन और ब्लड प्रेशर) कराना बहुत जरूरी है। डॉक्टर की अनुमति के बिना कभी भी दवा बंद न करें, क्योंकि अचानक दवा छोड़ना बीमारी के दोबारा लौटने का सबसे बड़ा कारण है।',
      gu: 'સમયાંતરે બ્લડ શુગર, કોલેસ્ટ્રોલ, વજન અને બ્લડ પ્રેશરની તપાસ કરાવવી ખૂબ જરૂરી છે. ડૉક્ટરની સલાહ વિના ક્યારેય દવા બંધ ન કરવી, કારણ કે અચાનક દવા છોડવાથી બીમારી ફરીથી ગંભીર રૂપ ધારણ કરી શકે છે.',
    },
    whyMonitoringNeeded: {
      en: 'Proactive clinical monitoring allows the healthcare team to balance symptom control against tolerability, adjust agent choice if metabolic parameters shift, screen for subtle movement symptoms, and maintain the minimum effective dose over time.',
      hi: 'नियमित जांच से डॉक्टर यह सुनिश्चित करते हैं कि मरीज पूरी तरह स्वस्थ रहे, वजन या शुगर का कोई नकारात्मक असर न पड़े, और दवा की न्यूनतम सुरक्षित मात्रा से बीमारी को पूरी तरह नियंत्रण में रखा जा सके।',
      gu: 'નિયમિત ચેક-અપથી ડૉક્ટર દર્દીના વજન અને શુગર પર નજર રાખે છે અને દવાના ઓછામાં ઓછા ડોઝથી બીમારીને સંપૂર્ણ કાબૂમાં રાખીને લાંબાગાળાનું સ્વાસ્થ્ય સુનિશ્ચિત કરે છે.',
    },
    discontinuationGuidance: {
      en: 'Any medication adjustment or planned discontinuation must occur under strict psychiatric supervision through a slow, personalized step-down process while continuously monitoring for early warning signs of breakthrough symptoms.',
      hi: 'दवा में कोई भी बदलाव या उसे बंद करने का निर्णय केवल मनोरोग विशेषज्ञ की सख्त देखरेख में ही धीरे-धीरे लिया जाना चाहिए, ताकि बीमारी के कोई भी लक्षण दोबारा न उभरें।',
      gu: 'દવામાં કોઈપણ ફેરફાર કે ઘટાડો માત્ર મનોચિકિત્સકની સતત દેખરેખ હેઠળ ધીમે ધીમે જ થવો જોઈએ જેથી બીમારી ફરીથી ઉથલો ન મારે.',
    },
    mandatoryWarning: {
      en: 'Educational information only. Antipsychotics must be initiated, monitored, and adjusted exclusively by a licensed psychiatrist. Abrupt discontinuation carries a severe risk of immediate psychotic relapse.',
      hi: 'केवल शैक्षिक जानकारी। एंटीसाइकोटिक दवाएं केवल एक प्रमाणित मनोरोग विशेषज्ञ द्वारा ही शुरू, जांची और बदली जानी चाहिए। अचानक दवा बंद करने से बीमारी के तीव्र दौरे का गंभीर जोखिम रहता है।',
      gu: 'માત્ર શૈક્ષણિક માહિતી. આ દવાઓ માત્ર નિષ્ણાત મનોચિકિત્સકની સલાહથી જ લેવી જોઈએ. અચાનક દવા બંધ કરવાથી બીમારીનો ગંભીર હુમલો આવવાનું મોટું જોખમ રહે છે.',
    },
    references: [
      {
        citation: 'Keepers GA, et al. The American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia. Am J Psychiatry. 2020.',
        source: 'American Psychiatric Association',
        year: '2020',
      },
      {
        citation: 'Barnes TR, et al. Evidence-based guidelines for the pharmacological treatment of schizophrenia: Updated recommendations from the British Association for Psychopharmacology. J Psychopharmacol. 2020.',
        source: 'British Association for Psychopharmacology',
        year: '2020',
      },
    ],
    illustrativeExample: {
      en: 'Hitesh, a 26-year-old engineering graduate in Rajkot, began hearing threatening voices whispering that his neighbors were conspiring against him. He stopped eating home-cooked meals fearing poisoning and barricaded himself in his bedroom. His alarmed family consulted a psychiatrist, who diagnosed an acute psychotic episode and prescribed a modern second-generation antipsychotic alongside supportive counseling. During the first two weeks, Hitesh felt drowsy in the afternoons and noticed an increased appetite, which his doctor addressed with scheduled dietary counseling and baseline metabolic blood panels. By week four, the terrifying auditory hallucinations ceased entirely, and the suspicious thoughts melted away into insight. By month three, Hitesh resumed his software job interview preparation, maintaining his wellness through monthly psychiatric follow-ups.',
      hi: 'राजकोट के 26 वर्षीय इंजीनियर हितेश को अचानक कानों में डरावनी आवाजें सुनाई देने लगीं कि पड़ोसी उसके खिलाफ साजिश रच रहे हैं। जहर के डर से उसने खाना छोड़ दिया और खुद को कमरे में बंद कर लिया। परिवार उन्हें मनोचिकित्सक के पास ले गया, जिन्होंने बीमारी पहचानकर नई पीढ़ी की एंटीसाइकोटिक दवा शुरू की। शुरुआती दो हफ्तों में हितेश को दोपहर में हल्की सुस्ती महसूस हुई और भूख बढ़ी, जिसके लिए डॉक्टर ने खानपान की सही सलाह दी और ब्लड टेस्ट कराए। चौथे हफ्ते तक कानों में आवाजें आना पूरी तरह बंद हो गया और हितेश को समझ आया कि वह एक बीमारी का असर था। तीन महीने में हितेश पूरी तरह सामान्य हो गए और नौकरी की तैयारी में जुट गए।',
      gu: 'રાજકોટના ૨૬ વર્ષીય એન્જિનિયર હિતેશને કાલ્પનિક અવાજો સંભળાવા લાગ્યા કે પડોશીઓ તેને મારી નાખવા માંગે છે. ઝેરના ડરથી તેણે જમવાનું છોડી દીધું અને રૂમમાં પુરાઈ રહ્યો. પરિવારે મનોચિકિત્સકની સલાહ લઈ આધુનિક એન્ટીસાયકોટિક દવા શરૂ કરાવી. પ્રથમ બે અઠવાડિયા બપોરે સુસ્તી લાગી અને ભૂખ વધી, જેના માટે ડૉક્ટરે યોગ્ય આહારની સલાહ અને લેબ ટેસ્ટ કરાવ્યા. ચોથા અઠવાડિયે અવાજો આવવાનું સદંતર બંધ થયું અને વહેમ ઓગળી ગયો. ત્રણ મહિનામાં હિતેશ સંપૂર્ણ સ્વસ્થ થઈને નોકરીની પરીક્ષાની તૈયારીમાં લાગી ગયો.',
    },
    lastReviewed: '2026-09',
    // TODO(video): short, vetted explainer on Second-Generation Antipsychotics, dopamine regulation, and metabolic monitoring
    youtubeVideoId: undefined,
    relatedIds: [
      'schizophrenia',
      'bipolar-disorder',
      'geriatric-psychiatry-dementia-delirium',
    ],
  },
];
