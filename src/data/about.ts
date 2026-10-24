import { LocalizedString } from '../types';

export interface DoctorProfile {
  name: string;
  qualifications: string;
  title: LocalizedString;
  registrationDetails: LocalizedString;
  languagesSpoken: string[];
  specialInterests: LocalizedString[];
  practicePhilosophy: LocalizedString;
  consultationNotice: LocalizedString;
  ethicalCommitment: LocalizedString;
}

export const doctorProfile: DoctorProfile = {
  name: 'Dr. Raghav Suthar',
  qualifications: 'MBBS · DNB Psychiatry Resident',
  title: {
    en: 'DNB Psychiatry Resident · Public Education',
    hi: 'डीएनबी मनोचिकित्सा रेज़िडेंट · जन-जागरूकता शिक्षा',
    gu: 'ડી.એન.બી. મનોચિકિત્સા રેસિડેન્ટ · જાહેર શિક્ષણ',
  },
  registrationDetails: {
    en: 'Psychiatry resident. This website provides public education and does not offer consultations.',
    hi: 'मनोचिकित्सा रेज़िडेंट। यह वेबसाइट जन-शिक्षा के लिए है, परामर्श सेवा नहीं।',
    gu: 'મનોચિકિત્સા રેસિડેન્ટ. આ વેબસાઇટ જાહેર શિક્ષણ માટે છે, પરામર્શ સેવા નથી.',
  },
  languagesSpoken: ['English', 'हिन्दी (Hindi)', 'ગુજરાતી (Gujarati)'],
  specialInterests: [
    {
      en: 'Adult General Psychiatry & Mood Disorders (Depression & Bipolar Spectrum)',
      hi: 'वयस्क सामान्य मनोरोग एवं मूड विकार (डिप्रेशन व बायपोलर स्पेक्ट्रम)',
      gu: 'પુખ્ત મનોરોગ અને મૂડ સંબંધિત વિકૃતિઓ (ડિપ્રેશન અને બાયપોલર)',
    },
    {
      en: 'De-Addiction Medicine & Substance-Use Disorders (Alcohol, Tobacco, Opioids)',
      hi: 'नशा मुक्ति चिकित्सा एवं व्यसन विकार (शराब, तंबाकू व अन्य नशा)',
      gu: 'વ્યસન મુક્તિ ચિકિત્સા (દારૂ, તમાકુ અને અન્ય પદાર્થો)',
    },
    {
      en: 'Anxiety, Panic Disorders & Obsessive-Compulsive Disorder (OCD)',
      hi: 'चिंता, घबराहट, पैनिक अटैक एवं ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD)',
      gu: 'ચિંતા, પેનિક એટેક અને ઓસીડી (OCD)',
    },
    {
      en: 'Geriatric Psychiatry (Dementia, Late-Life Depression & Delirium)',
      hi: 'वृद्धावस्था मनोरोग (डिमेंशिया, भूलने की बीमारी व बुजुर्गों का डिप्रेशन)',
      gu: 'વૃદ્ધાવસ્થા મનોરોગ (ડિમેન્શિયા, સ્મૃતિ ભ્રંશ અને વડીલોનું ડિપ્રેશન)',
    },
    {
      en: 'Community Mental Health Education & Public Stigma Eradication',
      hi: 'सामुदायिक मानसिक स्वास्थ्य शिक्षा एवं सामाजिक भ्रांतियों का उन्मूलन',
      gu: 'સામુદાયિક માનસિક સ્વાસ્થ્ય શિક્ષણ અને સામાજિક કલંક નિવારણ',
    },
  ],
  practicePhilosophy: {
    en: 'This project focuses on compassionate, evidence-informed public education and clear explanations of mental health. Every person deserves dignity, clarity, and respect when seeking support.',
    hi: 'यह परियोजना मानसिक स्वास्थ्य के बारे में सहानुभूतिपूर्ण, प्रमाण-आधारित जन-शिक्षा और स्पष्ट जानकारी पर केंद्रित है। सहायता लेने वाले हर व्यक्ति को गरिमा और सम्मान मिलना चाहिए।',
    gu: 'આ પ્રોજેક્ટ માનસિક સ્વાસ્થ્ય અંગે સહાનુભૂતિપૂર્ણ, પુરાવા-આધારિત જાહેર શિક્ષણ પર કેન્દ્રિત છે. સહાય મેળવતા દરેક વ્યક્તિને ગૌરવ અને સન્માન મળવું જોઈએ.',
  },
  consultationNotice: {
    en: 'This portal is dedicated exclusively to public psychiatric education and mental health literacy in India. It does not provide personalized medical diagnoses, treatment plans, or online prescriptions. For medical care, please consult a registered medical professional in person.',
    hi: 'यह वेबसाइट केवल सार्वजनिक मानसिक स्वास्थ्य शिक्षा और जागरूकता के लिए है। यह किसी व्यक्तिगत बीमारी का निदान या ऑनलाइन नुस्खा प्रदान नहीं करती है। व्यक्तिगत इलाज के लिए कृपया अपने नजदीकी पंजीकृत डॉक्टर से व्यक्तिगत रूप से मिलें।',
    gu: 'આ વેબસાઇટ ફક્ત જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ અને જાગૃતિ માટે બનાવવામાં આવી છે. આના દ્વારા કોઈ અંગત નિદાન કે સારવાર આપવામાં આવતી નથી. વ્યક્તિગત સારવાર માટે નજીકના ડૉક્ટરનો રૂબરૂ સંપર્ક કરો.',
  },
  ethicalCommitment: {
    en: 'This website provides general education, not individual diagnosis or treatment. Source links and review information are shown where available; content should not replace care from a qualified clinician.',
    hi: 'यह वेबसाइट सामान्य शिक्षा देती है, व्यक्तिगत निदान या उपचार नहीं। जहाँ उपलब्ध हों, वहाँ स्रोत लिंक और समीक्षा जानकारी दी जाती है; यह योग्य चिकित्सक की देखभाल का विकल्प नहीं है।',
    gu: 'આ વેબસાઇટ સામાન્ય શિક્ષણ આપે છે, વ્યક્તિગત નિદાન કે સારવાર નહીં. જ્યાં ઉપલબ્ધ હોય ત્યાં સ્ત્રોત લિંક્સ અને સમીક્ષા માહિતી આપવામાં આવે છે; આ યોગ્ય તબીબી સંભાળનો વિકલ્પ નથી.',
  },
};
