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
  qualifications: 'MBBS, MD (Psychiatry)',
  title: {
    en: 'Consultant Psychiatrist',
    hi: 'कंसल्टेंट मनोचिकित्सक (Consultant Psychiatrist)',
    gu: 'કન્સલ્ટન્ટ મનોચિકિત્સક (Consultant Psychiatrist)',
  },
  registrationDetails: {
    en: 'Registered Medical Practitioner under the National Medical Commission (NMC) & Gujarat Medical Council (GMC)',
    hi: 'राष्ट्रीय चिकित्सा आयोग (NMC) एवं गुजरात मेडिकल काउंसिल (GMC) के अंतर्गत पंजीकृत मेडिकल प्रैक्टिशनर',
    gu: 'નેશનલ મેડિકલ કમિશન (NMC) અને ગુજરાત મેડિકલ કાઉન્સિલ (GMC) હેઠળ નોંધાયેલ નિષ્ણાત તબીબ',
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
    en: 'Practicing ethical, evidence-based psychiatric medicine rooted in compassionate listening, objective psychoeducation, and scientifically validated treatments. Every person deserves dignity, clarity, and respect on their journey toward mental well-being.',
    hi: 'सहानुभूतिपूर्ण दृष्टिकोण, वैज्ञानिक प्रमाणों और निष्पक्ष शिक्षा पर आधारित नैतिक चिकित्सा। प्रत्येक व्यक्ति अपनी मानसिक सेहत के सफर में गरिमा, स्पष्टता और सम्मान का हकदार है।',
    gu: 'વૈજ્ઞાનિક પુરાવા, કરુણાપૂર્ણ સંવાદ અને પ્રામાણિક માર્ગદર્શન પર આધારિત સારવાર. દરેક વ્યક્તિ ગૌરવ અને યોગ્ય સન્માન સાથે સાજી થવાનો અધિકાર ધરાવે છે.',
  },
  consultationNotice: {
    en: 'This portal is dedicated exclusively to public psychiatric education and mental health literacy in India. It does not provide personalized medical diagnoses, treatment plans, or online prescriptions. For medical care, please consult a registered medical professional in person.',
    hi: 'यह वेबसाइट केवल सार्वजनिक मानसिक स्वास्थ्य शिक्षा और जागरूकता के लिए है। यह किसी व्यक्तिगत बीमारी का निदान या ऑनलाइन नुस्खा प्रदान नहीं करती है। व्यक्तिगत इलाज के लिए कृपया अपने नजदीकी पंजीकृत डॉक्टर से व्यक्तिगत रूप से मिलें।',
    gu: 'આ વેબસાઇટ ફક્ત જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ અને જાગૃતિ માટે બનાવવામાં આવી છે. આના દ્વારા કોઈ અંગત નિદાન કે સારવાર આપવામાં આવતી નથી. વ્યક્તિગત સારવાર માટે નજીકના ડૉક્ટરનો રૂબરૂ સંપર્ક કરો.',
  },
  ethicalCommitment: {
    en: 'Adheres strictly to the Code of Medical Ethics prescribed by the National Medical Commission (NMC). No promotional guarantees, fake cure claims, or commercial endorsements are made.',
    hi: 'राष्ट्रीय चिकित्सा आयोग (NMC) की मेडिकल आचार संहिता का पूर्ण पालन। किसी भी प्रकार के चमत्कारिक दावे, गारंटी या भ्रामक प्रचार का सख्त निषेध।',
    gu: 'નેશનલ મેડિકલ કમિશન (NMC) ની તબીબી આચારસંહિતાનું સંપૂર્ણ પાલન. કોઈ પણ ચમત્કારિક દાવા કે વ્યાવસાયિક જાહેરાતો કરવામાં આવતી નથી.',
  },
};
