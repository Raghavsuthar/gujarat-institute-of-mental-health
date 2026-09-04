import { TherapyModality } from '../types';

export const treatmentsData: TherapyModality[] = [
  {
    id: 'cbt',
    shortName: 'CBT',
    name: {
      en: 'Cognitive Behavioural Therapy (CBT)',
      hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT - संज्ञानात्मक व्यवहार थेरेपी)',
      gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT)',
    },
    plainSummary: {
      en: 'A structured, practical psychotherapy focused on identifying and restructuring unhelpful thought patterns and negative behavioral habits.',
      hi: 'एक व्यावहारिक और संरचित मनोवैज्ञानिक थेरेपी जो नकारात्मक विचारों और हानिकारक व्यवहार के पैटर्न को पहचानकर उन्हें बदलने में मदद करती है।',
      gu: 'એક વ્યવહારુ વૈજ્ઞાનિક પદ્ધતિ જે નકારાત્મક વિચારો અને નુકસાનકારક ટેવોને ઓળખીને તેને સ્વસ્થ અને સકારાત્મક બનાવવામાં મદદ કરે છે.',
    },
    howItWorks: {
      en: 'Our thoughts, emotions, bodily sensations, and behaviors are deeply interconnected. When we learn to identify automatic cognitive distortions (like "catastrophizing" or "all-or-nothing thinking"), we can test them against reality and choose healthier behavioral responses.',
      hi: 'हमारे विचार, भावनाएं और व्यवहार आपस में जुड़े हैं। जब हम गलत और अतिशयोक्तिपूर्ण विचारों (जैसे "सब कुछ बर्बाद हो जाएगा") को पहचानकर उन्हें चुनौती देते हैं, तो हमारा तनाव अपने आप कम होने लगता है।',
      gu: 'આપણા વિચારો, લાગણીઓ અને વર્તન એકબીજા સાથે જોડાયેલા છે. જ્યારે આપણે ખોટા ભયજનક વિચારોને વાસ્તવિકતાની એરણે ચકાસીએ છીએ ત્યારે મન હળવું થાય છે.',
    },
    conditionsUsedFor: {
      en: 'Major Depressive Disorder, Generalized Anxiety Disorder, Panic Disorder, Phobias, OCD (via ERP), and Insomnia (CBT-I).',
      hi: 'डिप्रेशन, सामान्य चिंता (GAD), पैनिक अटैक, फोबिया, ओसीडी और अनिद्रा (Insomnia)।',
      gu: 'ડિપ્રેશન, વધુ પડતી ચિંતા, પેનિક એટેક, ડર (ફોબિયા), ઓસીડી અને અનિદ્રા.',
    },
    whatToExpect: {
      en: 'Collaborative, goal-oriented sessions (usually 8 to 20 weekly sessions) with active homework assignments, thought diaries, and behavioral experiments.',
      hi: 'यह बातचीत कोई उपदेश नहीं है; इसमें थेरेपिस्ट और मरीज मिलकर काम करते हैं। इसमें कुछ व्यावहारिक होमवर्क (जैसे विचारों की डायरी लिखना) दिए जाते हैं।',
      gu: 'આમાં થેરાપિસ્ટ અને દર્દી સાથે મળીને લક્ષ્યો નક્કી કરે છે. રોજિંદા જીવન માટે કેટલીક વ્યવહારુ કસરતો અને ડાયરી લખવાનું શીખવવામાં આવે છે.',
    },
    misconceptions: {
      en: 'It is not "just positive thinking" or superficial advice; it is rigorous, scientific training in cognitive flexibility and behavioral resilience.',
      hi: 'यह सिर्फ "सकारात्मक सोचो" जैसा कोई सतही ज्ञान नहीं है, बल्कि मस्तिष्क को तार्किक और व्यावहारिक बनाने का वैज्ञानिक प्रशिक्षण है।',
      gu: 'આ માત્ર "પોઝિટિવ વિચારો" જેવી સામાન્ય સલાહ નથી, પણ મગજને તાર્કિક બનાવવાની સંપૂર્ણ વૈજ્ઞાનિક તાલીમ છે.',
    },
    lastReviewed: '2026-08',
  },
  {
    id: 'erp',
    shortName: 'ERP',
    name: {
      en: 'Exposure and Response Prevention (ERP)',
      hi: 'एक्सपोजर एंड रिस्पॉन्स प्रिवेंशन (ERP)',
      gu: 'એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP)',
    },
    plainSummary: {
      en: 'The specialized gold-standard psychotherapy for Obsessive-Compulsive Disorder (OCD) and severe phobias.',
      hi: 'ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD) और गंभीर फोबिया के इलाज के लिए दुनिया की सबसे प्रभावी मनोवैज्ञानिक पद्धति।',
      gu: 'ઓસીડી (OCD - વહેમ) અને ગંભીર ડરની સારવાર માટે વિશ્વની સૌથી અકસીર સાયકોથેરાપી.',
    },
    howItWorks: {
      en: 'The patient deliberately exposes themselves to fear-triggering thoughts or situations (Exposure) while strictly choosing not to perform the ritual or compulsion (Response Prevention). Over repeated practices, the brain learns that anxiety naturally subsides on its own (Habituation) without catastrophe.',
      hi: 'मरीज को धीरे-धीरे उन चीजों या विचारों का सामना कराया जाता है जिनसे डर लगता है (जैसे किसी चीज को छूना), लेकिन हाथ धोने या जांचने जैसे काम करने से रोका जाता है। धीरे-धीरे दिमाग समझ जाता है कि बिना हाथ धोए भी कोई अनहोनी नहीं होती।',
      gu: 'દર્દીને જે બાબતનો ડર લાગતો હોય તેનો ધીમે ધીમે સામનો કરાવાય છે, પરંતુ હાથ ધોવા કે ચેક કરવા જેવી ટેવ અટકાવાય છે. સમય જતાં મગજ સમજી જાય છે કે ડર ખોટો હતો.',
    },
    conditionsUsedFor: {
      en: 'Obsessive-Compulsive Disorder, Specific Phobias, Illness Anxiety Disorder.',
      hi: 'ओसीडी (OCD), गंभीर फोबिया, और बीमारी का अत्यधिक वहम।',
      gu: 'ઓસીડી (OCD), ફોબિયા અને બીમારીનો વહેમ.',
    },
    whatToExpect: {
      en: 'Constructing a gradual "Fear Hierarchy" from easiest to hardest, practiced collaboratively with the therapist before independent home practice.',
      hi: 'मरीज के साथ मिलकर डर की एक सीढ़ी (कम डर से ज्यादा डर) बनाई जाती है और धीरे-धीरे एक-एक कदम पर विजय पाई जाती है।',
      gu: 'ડરની ક્રમશઃ યાદી બનાવીને સૌથી સહેલાથી શરૂ કરીને સૌથી અઘરા ડર પર ધીમે ધીમે વિજય મેળવાય છે.',
    },
    misconceptions: {
      en: 'It is never dangerous, forceful, or sudden; the pace is always fully agreed upon and controlled collaboratively.',
      hi: 'यह कोई जबरदस्ती या डराने वाला तरीका नहीं है; मरीज की सहमति और गति के अनुसार ही अभ्यास होता है।',
      gu: 'આમાં કોઈ બળજબરી હોતી નથી; દર્દીની સંપૂર્ણ સંમતિ અને અનુકૂળતા મુજબ જ આગળ વધાય છે.',
    },
    lastReviewed: '2026-08',
  },
  {
    id: 'dbt',
    shortName: 'DBT',
    name: {
      en: 'Dialectical Behaviour Therapy (DBT)',
      hi: 'डायलेक्टिकल बिहेवियर थेरेपी (DBT)',
      gu: 'ડાયલેક્ટિકલ બિહેવિયર થેરાપી (DBT)',
    },
    plainSummary: {
      en: 'An evidence-based therapy emphasizing emotional regulation, distress tolerance, and interpersonal effectiveness.',
      hi: 'तीव्र भावनाओं को नियंत्रित करने, मानसिक तनाव बर्दाश्त करने और रिश्तों को सुधारने की विशेष थेरेपी।',
      gu: 'તીવ્ર લાગણીઓને કાબૂમાં રાખવા, ભારે તણાવ સહન કરવા અને સંબંધો સુધારવાની વિશેષ પદ્ધતિ.',
    },
    howItWorks: {
      en: 'Balances the apparent opposites of radical acceptance of oneself while committing to constructive behavioral change. Teaches 4 core skill modules: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness.',
      hi: 'यह 4 मुख्य कौशल सिखाती है: माइंडफुलनेस (वर्तमान में रहना), संकट सहना (Distress Tolerance), भावनाओं का नियमन (Emotion Regulation), और रिश्तों में प्रभावी बातचीत।',
      gu: 'આમાં ૪ મુખ્ય કૌશલ્યો શીખવાય છે: માઇન્ડફુલનેસ (હાલની ક્ષણમાં રહેવું), તણાવ સહન કરવાની શક્તિ, આવેગો પર કાબૂ અને વાતચીતની કળા.',
    },
    conditionsUsedFor: {
      en: 'Borderline Personality Disorder, Chronic Self-Harm tendencies, Treatment-Resistant Depression, Eating Disorders.',
      hi: 'बॉर्डरलाइन पर्सनालिटी डिसऑर्डर, खुद को चोट पहुंचाने की आदत, अत्यधिक भावनात्मक उतार-चढ़ाव।',
      gu: 'લાગણીઓના ભારે ઉછાળા, પોતાને નુકસાન કરવાની વૃત્તિ અને ઈટિંગ ડિસઓર્ડર.',
    },
    whatToExpect: {
      en: 'Combination of individual therapy, group skills training sessions, and between-session coaching for crisis moments.',
      hi: 'व्यक्तिगत बातचीत के साथ-साथ कौशल सीखने के सत्र और संकट के समय मन को शांत रखने की तकनीकें।',
      gu: 'વ્યક્તિગત સત્રો અને તણાવની ક્ષણોમાં મન શાંત રાખવાની વ્યવહારુ તાલીમ.',
    },
    misconceptions: {
      en: 'It is not only for severe personality disorders; its mindfulness and distress tolerance tools benefit anyone overwhelmed by intense emotions.',
      hi: 'यह केवल गंभीर मामलों के लिए नहीं है; तीव्र भावनाओं और गुस्से से परेशान कोई भी व्यक्ति इससे लाभ पा सकता है।',
      gu: 'તીવ્ર ગુસ્સો કે લાગણીઓથી પરેશાન કોઈપણ વ્યક્તિ આ કૌશલ્યોથી મોટો ફાયદો મેળવી શકે છે.',
    },
    lastReviewed: '2026-08',
  },
  {
    id: 'supportive',
    shortName: 'Supportive Therapy',
    name: {
      en: 'Supportive Psychotherapy & Counseling',
      hi: 'सपोर्टिव साइकोथेरेपी और काउंसलिंग',
      gu: 'સપોર્ટિવ સાયકોથેરાપી અને કાઉન્સેલિંગ',
    },
    plainSummary: {
      en: 'A compassionate, stabilizing therapeutic approach designed to reduce acute distress, restore self-esteem, and bolster existing adaptive coping mechanisms.',
      hi: 'एक सहानुभूतिपूर्ण और संबल देने वाली थेरेपी जो कठिन समय में मानसिक सहारा देती है और व्यक्ति के आत्मविश्वास को फिर से जगाती है।',
      gu: 'એક હૂંફાળો અને ટેકો આપતો અભિગમ જે મુશ્કેલ સમયમાં માનસિક આશરો પૂરો પાડે છે અને આત્મવિશ્વાસ પુનર્જીવિત કરે છે.',
    },
    howItWorks: {
      en: 'The clinician provides active listening, non-judgmental validation, reality testing, problem-solving assistance, and adaptive advice, creating a safe emotional harbor.',
      hi: 'चिकित्सक बिना किसी पूर्वाग्रह के मरीज की पूरी बात ध्यान से सुनते हैं, उनकी भावनाओं का सम्मान करते हैं और जीवन की समस्याओं को सुलझाने में मार्गदर्शन करते हैं।',
      gu: 'થેરાપિસ્ટ દર્દીની વાત ધ્યાનપૂર્વક સાંભળે છે, સહાનુભૂતિ આપે છે અને વ્યવહારુ માર્ગદર્શન પૂરું પાડે છે.',
    },
    conditionsUsedFor: {
      en: 'Life crises, bereavement, adjustment to severe medical illnesses, chronic psychiatric stabilization, caregiver burnout.',
      hi: 'किसी प्रियजन के खोने का दुख, गंभीर बीमारी से तालमेल, अत्यधिक जीवन तनाव, देखभाल करने वालों की थकान।',
      gu: 'સ્વજનનું અવસાન, મોટી શારીરિક બીમારી સાથે જીવવું, ભારે પારિવારિક તણાવ.',
    },
    whatToExpect: {
      en: 'A warm, conversational environment where you feel deeply heard and supported in navigating life challenges.',
      hi: 'एक सुरक्षित और सम्मानजनक माहौल जहां आप खुलकर अपनी बात रख सकते हैं और मन हल्का कर सकते हैं।',
      gu: 'એક સુરક્ષિત અને આદરપૂર્ણ વાતાવરણ જ્યાં તમે મુક્ત મને મનની વાત કરી શકો છો.',
    },
    misconceptions: {
      en: 'It is not "just a casual chat with a friend"; it is professional, clinically structured emotional stabilization with ethical boundaries.',
      hi: 'यह केवल "दोस्तों जैसी गपशप" नहीं है, बल्कि एक प्रशिक्षित पेशेवर द्वारा दी गई वैज्ञानिक और नैतिक सहायता है।',
      gu: 'આ માત્ર મિત્રો જેવી સામાન્ય વાતચીત નથી, પણ નિષ્ણાત ડૉક્ટર દ્વારા અપાતો માનસિક ટેકો છે.',
    },
    lastReviewed: '2026-08',
  },
  {
    id: 'family-therapy',
    shortName: 'Family Therapy',
    name: {
      en: 'Family & Couples Therapy',
      hi: 'पारिवारिक और युगल थेरेपी (Family & Couples Therapy)',
      gu: 'પારિવારિક અને દંપતી થેરાપી (Family Therapy)',
    },
    plainSummary: {
      en: 'Addresses interactional dynamics, communication barriers, and high emotional tension within family units.',
      hi: 'परिवार के सदस्यों के बीच आपसी संवाद, गलतफहमियों और तनाव को दूर करने की मनोवैज्ञानिक थेरेपी।',
      gu: 'કુટુંબના સભ્યો વચ્ચેની ગેરસમજો, અસહકાર અને તણાવ દૂર કરવાની વિશેષ પદ્ધતિ.',
    },
    howItWorks: {
      en: 'Treats the family as an interconnected system rather than placing blame on a single individual. Reduces "High Expressed Emotion" (criticism, hostility) which is a leading trigger for psychiatric relapse.',
      hi: 'यह किसी एक व्यक्ति को दोषी ठहराने के बजाय पूरे परिवार को साथ लेकर चलती है। घर में ताने मारने, चिल्लाने या अत्यधिक हस्तक्षेप को कम करके शांत माहौल बनाती है।',
      gu: 'કોઈ એક વ્યક્તિને દોષ આપવાના બદલે આખા કુટુંબમાં પ્રેમ અને સંવાદનું વાતાવરણ ઊભું કરે છે.',
    },
    conditionsUsedFor: {
      en: 'Schizophrenia relapse prevention, Bipolar disorder home stability, Adolescent behavioral issues, Marital distress.',
      hi: 'सिज़ोफ्रेनिया और बायपोलर में बीमारी का दोबारा लौटना रोकना, वैवाहिक समस्याएं, बच्चों के व्यवहार संबंधी मुद्दे।',
      gu: 'સિઝોફ્રેનિયા કે બાયપોલરમાં બીમારી ફરીથી ઉથલો ન મારે તે માટે, લગ્નજીવનના પ્રશ્નો.',
    },
    whatToExpect: {
      en: 'Joint sessions where everyone has equal space to speak safely, learning structured listening and mutual problem-solving.',
      hi: 'संयुक्त बैठकें जहां परिवार के हर सदस्य को बिना डर के अपनी बात कहने का समान अवसर मिलता है।',
      gu: 'સંયુક્ત બેઠકો જ્યાં દરેક સભ્યને શાંતિથી પોતાની વાત રજૂ કરવાની અને સાંભળવાની તક મળે છે.',
    },
    misconceptions: {
      en: 'The therapist is not a judge taking sides or assigning blame; they are an objective mediator facilitating understanding.',
      hi: 'थेरेपिस्ट कोई जज नहीं हैं जो किसी एक का पक्ष लेंगे; वे निष्पक्ष रहकर रिश्ते सुधारने में मदद करते हैं।',
      gu: 'થેરાપિસ્ટ કોઈ ન્યાયાધીશ નથી જે કોઈ એકનો પક્ષ લે; તેઓ તટસ્થ રહીને સંબંધો સુધારવામાં મદદ કરે છે.',
    },
    lastReviewed: '2026-08',
  },
  {
    id: 'motivational-interviewing',
    shortName: 'MI',
    name: {
      en: 'Motivational Interviewing (MI)',
      hi: 'मोटिवेशनल इंटरव्यूइंग (नशा मुक्ति व बदलाव के लिए)',
      gu: 'મોટિવેશનલ ઇન્ટરવ્યુઇંગ (વ્યસન મુક્તિ માટે કાઉન્સેલિંગ)',
    },
    plainSummary: {
      en: 'A collaborative, goal-oriented communication method designed to strengthen personal motivation and commitment to change.',
      hi: 'एक विशेष संवाद शैली जो व्यक्ति के अंदर से बदलाव और नशा छोड़ने की अपनी इच्छाशक्ति को जगाती है।',
      gu: 'એક ખાસ સંવાદ પદ્ધતિ જે વ્યક્તિમાં અંદરથી જ વ્યસન છોડવાની અને સુધરવાની દ્રઢ ઇચ્છા જગાડે છે.',
    },
    howItWorks: {
      en: 'Rather than lecturing, arguing, or imposing external rules, the clinician helps the individual explore their own ambivalence about their habits (e.g., alcohol, tobacco) and discover their own reasons for health and recovery.',
      hi: 'भाषण देने या डांटने के बजाय डॉक्टर मरीज की दुविधा को समझते हैं और मरीज को खुद यह अहसास करने में मदद करते हैं कि नशा छोड़ने से उसका और उसके परिवार का क्या फायदा होगा।',
      gu: 'ભાષણ કે ઉપદેશ આપવાના બદલે ડૉક્ટર દર્દીને જાતે જ એ સમજવામાં મદદ કરે છે કે નશો છોડવાથી તેને શું મોટો લાભ થશે.',
    },
    conditionsUsedFor: {
      en: 'Alcohol use disorder, Tobacco cessation, Substance use disorders, Medication non-adherence.',
      hi: 'शराब, तंबाकू और अन्य नशों को छोड़ना; नियमित दवाएं लेने की आदत बनाना।',
      gu: 'દારૂ, તમાકુ કે અન્ય નશામાંથી મુક્તિ અને દવાઓ નિયમિત લેવાની ટેવ.',
    },
    whatToExpect: {
      en: 'Reflective listening, open-ended questions, and affirming the individual\'s autonomy and values.',
      hi: 'खुली बातचीत जहां व्यक्ति को कोई डांटता या नीचा नहीं दिखाता, बल्कि उसकी अच्छाइयों को उभारा जाता है।',
      gu: 'ખુલ્લા મને વાતચીત જ્યાં દર્દીનું અપમાન કર્યા વિના તેના આત્મસન્માનને જગાડવામાં આવે છે.',
    },
    misconceptions: {
      en: 'It is not coercive persuasion or guilt-tripping; genuine lasting recovery only occurs when the motivation arises from within.',
      hi: 'यह जबरदस्ती दबाव डालना नहीं है; इंसान तभी बदलता है जब इच्छा उसके अपने भीतर से पैदा होती है।',
      gu: 'આ કોઈ દબાણ કે શરમમાં નાખવાની રીત નથી; સાચું પરિવર્તન વ્યક્તિની પોતાની ઈચ્છાથી જ આવે છે.',
    },
    lastReviewed: '2026-08',
  },
];
