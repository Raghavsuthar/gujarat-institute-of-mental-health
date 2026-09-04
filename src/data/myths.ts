import { MythFact } from '../types';

export const mythsData: MythFact[] = [
  {
    id: 'weakness',
    category: 'general',
    myth: {
      en: 'Having a psychiatric condition means a person is mentally weak, lazy, or lacking in character.',
      hi: 'मानसिक बीमारी होना यह दर्शाता है कि व्यक्ति कमजोर इरादों वाला, आलसी या मानसिक रूप से कमजोर है।',
      gu: 'માનસિક રોગ થવો એ દર્શાવે છે કે વ્યક્તિ નબળા મનનો, આળસુ કે કાયર છે.',
    },
    fact: {
      en: 'Mental disorders are real, legitimate medical illnesses shaped by complex biological, genetic, and environmental factors.',
      hi: 'मानसिक विकार वास्तविक चिकित्सीय बीमारियां हैं जो मस्तिष्क के न्यूरोबायोलॉजी और तनाव से जुड़ी हैं, किसी की कमजोरी से नहीं।',
      gu: 'માનસિક બીમારીઓ મગજના જૈવિક ફેરફારો અને સામાજિક તણાવથી થતા વાસ્તવિક રોગો છે, કોઈ નબળાઈ નથી.',
    },
    explanation: {
      en: 'Just as diabetes is not caused by weak willpower in the pancreas, depression, bipolar disorder, and schizophrenia are not flaws of personality. They involve alterations in neural circuitry and neurotransmitters and respond to evidence-based medical treatment.',
      hi: 'जैसे डायबिटीज या ब्लड प्रेशर इच्छाशक्ति की कमी से नहीं होते, वैसे ही डिप्रेशन या अन्य मानसिक बीमारियां किसी के चरित्र की कमी नहीं हैं। इनके लिए दवा और डॉक्टर का परामर्श आवश्यक है।',
      gu: 'જેમ ડાયાબિટીસ થવો એ કોઈ ચારિત્ર્યની ખામી નથી, તેમ જ ડિપ્રેશન કે એન્ઝાયટી થવી એ કોઈ મનની નબળાઈ નથી. તે તબીબી સારવારથી સાજી થઈ શકે છે.',
    },
  },
  {
    id: 'medication-addiction',
    category: 'medications',
    myth: {
      en: 'All psychiatric medications are addictive sleeping pills that you will have to take for life.',
      hi: 'मनोरोग की सभी दवाएं नशीली होती हैं जिनकी जीवनभर के लिए लत लग जाती है।',
      gu: 'મનોરોગની બધી દવાઓ ઊંઘ લાવનારી નશાકારક ગોળીઓ હોય છે જે આખી જિંદગી લેવી પડે છે.',
    },
    fact: {
      en: 'The vast majority of psychiatric medications (such as SSRI antidepressants and mood stabilizers) are non-addictive.',
      hi: 'अधिकांश मनोरोग दवाएं (जैसे एंटीडिप्रेसेंट्स) बिल्कुल भी नशीली नहीं होती हैं और इनकी कोई लत नहीं लगती।',
      gu: 'મોટાભાગની માન્ય દવાઓ (જેમ કે એન્ટીડિપ્રેશન દવાઓ) બિલકુલ નશાકારક નથી અને તેની કોઈ આદત પડતી નથી.',
    },
    explanation: {
      en: 'Standard antidepressants and antipsychotics do not produce tolerance or craving. When a treatment course is completed, the psychiatrist tapers the medication gradually and safely. Only certain short-term medications (like benzodiazepines) carry dependence risks, which is why psychiatrists use them selectively and short-term.',
      hi: 'एंटीडिप्रेसेंट दवाएं मस्तिष्क के रसायनों को सामान्य करती हैं। जब मरीज ठीक हो जाता है, तो डॉक्टर धीरे-धीरे खुराक कम करके दवा बंद कर देते हैं। अपनी मर्जी से दवा बंद न करें।',
      gu: 'આ દવાઓ મગજના રસાયણોને બેલેન્સ કરે છે. દર્દી સાજો થઈ જાય પછી ડૉક્ટર ધીમે ધીમે ડોઝ ઘટાડીને દવા બંધ કરી દે છે.',
    },
  },
  {
    id: 'schizo-split',
    category: 'general',
    myth: {
      en: 'People with schizophrenia have multiple personalities or a "split personality".',
      hi: 'सिज़ोफ्रेनिया के मरीजों में "दोहरा व्यक्तित्व" (Split Personality) या एक शरीर में कई आत्माएं होती हैं।',
      gu: 'સિઝોફ્રેનિયાના દર્દીઓમાં એક જ શરીરમાં બે અલગ અલગ વ્યક્તિત્વ કે વળગાડ હોય છે.',
    },
    fact: {
      en: 'Schizophrenia has nothing to do with multiple personalities; it is an illness affecting perception and thought organization.',
      hi: 'सिज़ोफ्रेनिया का दोहरे व्यक्तित्व से कोई संबंध नहीं है; यह सोच और वास्तविकता के तारतम्य टूटने का रोग है।',
      gu: 'સિઝોફ્રેનિયાને મલ્ટીપલ પર્સનાલિટી સાથે કોઈ લેવાદેવા નથી; તે વાસ્તવિકતા અને વિચારો વચ્ચેનો તાલમેલ તૂટવાની બીમારી છે.',
    },
    explanation: {
      en: 'The word "schizophrenia" historically meant "split mind," referring to the disconnection between thought, emotion, and reality. Multiple personality disorder is an entirely distinct, rare dissociative condition (Dissociative Identity Disorder).',
      hi: 'सिज़ोफ्रेनिया में व्यक्ति को कानों में आवाजें आना (Hallucinations) या गहरा वहम (Delusions) होता है। इसे सही दवाओं से पूरी तरह शांत किया जा सकता है।',
      gu: 'સિઝોફ્રેનિયામાં દર્દીને કાલ્પનિક અવાજો સંભળાય છે કે વહેમ થાય છે. તે કોઈ ભૂત-પ્રેત નથી, મગજની બીમારી છે જે દવાથી મટી શકે છે.',
    },
  },
  {
    id: 'depression-just-sadness',
    category: 'general',
    myth: {
      en: 'Depression is just normal everyday sadness; anyone can snap out of it if they go for a vacation or think positive.',
      hi: 'डिप्रेशन केवल सामान्य उदासी है; कोई भी इंसान घूमने जाकर या सकारात्मक सोचकर इसे ठीक कर सकता है।',
      gu: 'ડિપ્રેશન એટલે માત્ર સાદી ઉદાસી; ફરવા જવાથી કે પોઝિટિવ વિચારવાથી તરત મટી જાય છે.',
    },
    fact: {
      en: 'Clinical depression is a pervasive, persistent medical condition that impairs sleep, appetite, energy, and cognition.',
      hi: 'क्लिनिकल डिप्रेशन एक गंभीर बीमारी है जो व्यक्ति की नींद, भूख, ऊर्जा और सोचने की क्षमता को हफ्तों या महीनों तक पंगु बना देती है।',
      gu: 'ડિપ્રેશન એક ગંભીર તબીબી સ્થિતિ છે જે ઊંઘ, ભૂખ, શારીરિક શક્તિ અને વિચારવાની ક્ષમતાને અઠવાડિયાઓ સુધી ખોરવી નાખે છે.',
    },
    explanation: {
      en: 'Ordinary sadness passes as circumstances change or with comfort. Depression persists regardless of positive events and robs a person of the biological ability to feel pleasure (anhedonia). Professional medical care is essential.',
      hi: 'सामान्य उदासी अच्छी खबर मिलने या दोस्तों से मिलने पर दूर हो जाती है। लेकिन डिप्रेशन में व्यक्ति खुश होने की क्षमता ही खो बैठता है। इसके लिए इलाज जरूरी है।',
      gu: 'સામાન્ય ઉદાસી સંજોગો બદલાતા દૂર થઈ જાય છે. પરંતુ ડિપ્રેશનમાં મગજમાંથી આનંદ અનુભવવાની ક્ષમતા જ ગાયબ થઈ જાય છે. તેના માટે સારવાર અનિવાર્ય છે.',
    },
  },
  {
    id: 'addiction-willpower',
    category: 'addiction',
    myth: {
      en: 'Addiction is simply a moral failure or lack of discipline; addicts choose to destroy their lives.',
      hi: 'नशा केवल चरित्र की खराबी या अनुशासन की कमी है; नशेड़ी जानबूझकर अपना जीवन बर्बाद करते हैं।',
      gu: 'વ્યસન એ માત્ર ચારિત્ર્યની નબળાઈ છે; નશાખોરો જાણીજોઈને પોતાનું જીવન બરબાદ કરે છે.',
    },
    fact: {
      en: 'Addiction is a chronic, relapsing brain disorder affecting neurological circuits of reward, stress, and impulse inhibition.',
      hi: 'व्यसन मस्तिष्क के न्यूरोलॉजिकल सर्किट की एक क्रोनिक बीमारी है, जो इच्छाशक्ति को कमजोर कर देती है।',
      gu: 'વ્યસન મગજના સંવેદનશીલ ન્યુરોન્સનો એક ક્રોનિક રોગ છે, જે વ્યક્તિના આત્મનિયંત્રણને નબળું પાડી દે છે.',
    },
    explanation: {
      en: 'While the first use may be voluntary, chronic substance exposure physically rewires dopamine pathways and frontal cortical control. Individuals lose the physiological capacity to control intake without medical detoxification and structured therapy.',
      hi: 'लगातार नशा करने से दिमाग के फैसले लेने वाले हिस्से कमजोर हो जाते हैं। व्यक्ति चाहकर भी नशा नहीं रोक पाता। इसलिए उन्हें डांटने के बजाय डॉक्टर के इलाज की जरूरत होती है।',
      gu: 'સતત નશાથી મગજની નિર્ણયશક્તિ ખોરવાઈ જાય છે. વ્યક્તિ ઈચ્છવા છતાં નશો રોકી શકતી નથી. તેથી તેમને સજા આપવા કરતાં ડૉક્ટર પાસે લઈ જવા જરૂરી છે.',
    },
  },
  {
    id: 'seeing-psychiatrist-crazy',
    category: 'general',
    myth: {
      en: 'Seeing a psychiatrist means a person is "crazy" or has completely lost their mind.',
      hi: 'मनोचिकित्सक (Psychiatrist) के पास जाने का मतलब है कि इंसान "पागल" हो चुका है।',
      gu: 'મનોચિકિત્સક (Psychiatrist) પાસે જવાનો અર્થ એ છે કે માણસ "ગાંડો" થઈ ગયો છે.',
    },
    fact: {
      en: 'Psychiatrists treat a broad spectrum of common conditions including stress, insomnia, anxiety, grief, and depression.',
      hi: 'मनोचिकित्सक तनाव, अनिद्रा, चिंता, डिप्रेशन, सिरदर्द और रिश्तों के तनाव जैसी आम समस्याओं का भी इलाज करते हैं।',
      gu: 'મનોચિકિત્સક તણાવ, ઊંઘ ન આવવી, ચિંતા, ડિપ્રેશન જેવી ખૂબ સામાન્ય અને રોજિંદી સમસ્યાઓનું પણ નિદાન અને સારવાર કરે છે.',
    },
    explanation: {
      en: 'The vast majority of people visiting a psychiatrist are working professionals, students, parents, and everyday individuals seeking help for insomnia, worry, low mood, or life transitions. Seeking help is a mature step toward well-being.',
      hi: 'मनोचिकित्सक के पास आने वाले 80-90% लोग सामान्य नौकरीपेशा, छात्र और गृहणियां होती हैं जो अनिद्रा, घबराहट या तनाव का समाधान चाहती हैं। डॉक्टर से मिलना बुद्धिमानी है।',
      gu: 'મનોચિકિત્સક પાસે આવતા મોટાભાગના લોકો સામાન્ય નોકરીયાત, વિદ્યાર્થીઓ અને ગૃહિણીઓ હોય છે જે ઊંઘ કે ચિંતાની સારવાર લે છે.',
    },
  },
  {
    id: 'stop-medicines-suddenly',
    category: 'medications',
    myth: {
      en: 'Once you start feeling better, you should immediately stop all psychiatric medications.',
      hi: 'जैसे ही आपको थोड़ा अच्छा महसूस होने लगे, आपको तुरंत सारी दवाएं बंद कर देनी चाहिए।',
      gu: 'જેવું તમને સારું લાગવા માંડે કે તરત જ બધી દવાઓ બંધ કરી દેવી જોઈએ.',
    },
    fact: {
      en: 'Stopping psychiatric medications abruptly carries high risks of severe relapse and uncomfortable withdrawal symptoms.',
      hi: 'दवा अचानक बंद करने से बीमारी के बहुत तेजी से और अधिक गंभीर रूप में वापस लौटने का भारी जोखिम होता है।',
      gu: 'દવાઓ અચાનક બંધ કરવાથી બીમારી ફરીથી ઉથલો મારવાનું અને ગંભીર લક્ષણો થવાનું ભારે જોખમ રહે છે.',
    },
    explanation: {
      en: 'You feel better precisely because the medication is stabilizing your brain chemistry. Continuing the prescribed maintenance course solidifies recovery and protects against relapse. Tapering must always be planned with your psychiatrist.',
      hi: 'आपको अच्छा इसलिए लग रहा है क्योंकि दवा अपना काम कर रही है। ठीक होने के बाद भी कुछ समय दवा लेना जरूरी होता है ताकि बीमारी दोबारा न आए। हमेशा डॉक्टर की सलाह से ही दवा घटाएं।',
      gu: 'તમને સારું એટલા માટે લાગે છે કારણ કે દવા કામ કરી રહી છે. સંપૂર્ણ સાજા થવા માટે ડૉક્ટરે કહેલો કોર્સ પૂરો કરવો જરૂરી છે.',
    },
  },
  {
    id: 'therapy-just-talking',
    category: 'therapy',
    myth: {
      en: 'Psychotherapy is just expensive chatting that anyone could do with a friend or family member.',
      hi: 'साइकोथेरेपी सिर्फ एक महंगी गपशप है, इससे बेहतर तो किसी दोस्त से बात कर लेना है।',
      gu: 'સાયકોથેરાપી એટલે માત્ર મોંઘી વાતો, એના કરતાં કોઈ મિત્ર સાથે વાત કરી લેવી સારી.',
    },
    fact: {
      en: 'Evidence-based psychotherapy is structured, objective, scientifically validated clinical treatment.',
      hi: 'मनोवैज्ञानिक थेरेपी एक वैज्ञानिक और व्यवस्थित चिकित्सा है जो मस्तिष्क के सोचने के तरीकों को बदलती है।',
      gu: 'સાયકોથેરાપી એક વ્યવસ્થિત અને વૈજ્ઞાનિક તબીબી પદ્ધતિ છે જે વિચારવાની રીતને સકારાત્મક બનાવે છે.',
    },
    explanation: {
      en: 'Friends offer personal opinions and emotional closeness, but a trained clinical psychologist or psychiatrist uses specialized neurocognitive techniques (like CBT, ERP, DBT) to rewire maladaptive thinking patterns without personal bias or judgment.',
      hi: 'दोस्त अपनी राय दे सकते हैं, लेकिन एक प्रशिक्षित थेरेपिस्ट निष्पक्ष रहकर वैज्ञानिक तकनीकों (जैसे CBT) से आपके अवचेतन विचारों और व्यवहार को ठीक करता है।',
      gu: 'મિત્રો પોતાની અંગત સલાહ આપે છે, જ્યારે નિષ્ણાત ડૉક્ટર વૈજ્ઞાનિક પદ્ધતિઓથી દર્દીના મનમાં ચાલતા ઊંડા ભય અને ટેવોને સુધારે છે.',
    },
  },
  {
    id: 'children-depression',
    category: 'children',
    myth: {
      en: 'Children have no responsibilities, so they cannot suffer from mental health conditions like depression or anxiety.',
      hi: 'बच्चों को कोई जिम्मेदारी या तनाव नहीं होता, इसलिए उन्हें डिप्रेशन या मानसिक बीमारी नहीं हो सकती।',
      gu: 'બાળકોને વળી શેની ચિંતા હોય? બાળકોને ક્યારેય ડિપ્રેશન કે માનસિક રોગ ન થઈ શકે.',
    },
    fact: {
      en: 'Children and adolescents can and do experience anxiety, depression, ADHD, OCD, and mood difficulties.',
      hi: 'बच्चों और किशोरों में भी चिंता, डिप्रेशन, एडीएचडी (ADHD) और व्यवहार संबंधी समस्याएं हो सकती हैं।',
      gu: 'બાળકો અને કિશોરોમાં પણ ચિંતા, ડિપ્રેશન, ADHD અને વર્તણૂકની સમસ્યાઓ જોવા મળે છે.',
    },
    explanation: {
      en: 'In children, depression often manifests differently than in adults — such as unexplained irritability, sudden drop in academic grades, frequent stomachaches or headaches, school refusal, and withdrawal from play.',
      hi: 'बच्चों में डिप्रेशन उदासी के बजाय चिड़चिड़ेपन, स्कूल जाने से डरने, पेट दर्द की शिकायतों या पढ़ाई में अचानक पिछड़ने के रूप में सामने आता है। इसे समझना जरूरी है।',
      gu: 'બાળકોમાં ડિપ્રેશન ઘણીવાર ચીડિયાપણું, શાળાએ ન જવું, પેટમાં દુખાવાની વારંવાર ફરિયાદો કે ભણવામાં ધ્યાન ન લાગવા સ્વરૂપે દેખાય છે.',
    },
  },
  {
    id: 'mentally-ill-dangerous',
    category: 'general',
    myth: {
      en: 'People with mental illness are violent, unpredictable, and dangerous to society.',
      hi: 'मानसिक बीमारी से पीड़ित सभी लोग हिंसक, खतरनाक और समाज के लिए नुकसानदेह होते हैं।',
      gu: 'માનસિક રોગ ધરાવતા તમામ લોકો હિંસક, ખતરનાક અને જોખમી હોય છે.',
    },
    fact: {
      en: 'The vast majority of individuals with psychiatric conditions are non-violent and gentle.',
      hi: 'अधिकांश मनोरोगी पूरी तरह शांत होते हैं और कभी किसी को कोई नुकसान नहीं पहुंचाते।',
      gu: 'મોટાભાગના દર્દીઓ અત્યંત શાંત અને સૌમ્ય હોય છે અને ક્યારેય કોઈને નુકસાન કરતા નથી.',
    },
    explanation: {
      en: 'Pop culture and cinema sensationalize mental illness. Clinical data consistently shows that individuals with mental illness are over 10 times more likely to be victims of violent crime, abuse, and discrimination than perpetrators.',
      hi: 'फिल्में मनोरोगियों को गलत तरीके से हिंसक दिखाती हैं। वास्तव में, वे खुद समाज में भेदभाव, उपेक्षा और शोषण के शिकार होते हैं। उन्हें डर की नहीं, सहारे की जरूरत होती है।',
      gu: 'સિનેમા અને નાટકોમાં ખોટો ભય ફેલાવાય છે. હકીકતમાં આવા દર્દીઓ પોતે સમાજના અન્યાય અને શોષણનો ભોગ બનતા હોય છે. તેમને ડરની નહીં, હૂંફની જરૂર હોય છે.',
    },
  },
];
