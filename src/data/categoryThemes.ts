import { ConditionCategory, Language } from '../types';

export interface CategoryTheme {
  id: ConditionCategory;
  name: {
    en: string;
    hi: string;
    gu: string;
  };
  description: {
    en: string;
    hi: string;
    gu: string;
  };
  hex: {
    accent: string;
    text: string;
    bg: string;
    border: string;
    dot: string;
  };
}

export const CATEGORY_THEMES: Record<ConditionCategory, CategoryTheme> = {
  mood: {
    id: 'mood',
    name: {
      en: 'Mood Disorders',
      hi: 'मूड विकार (अवसाद व बायपोलर)',
      gu: 'મૂડ ડિસઓર્ડર્સ (ડિપ્રેશન અને બાયપોલર)',
    },
    description: {
      en: 'Depression, Bipolar, Cyclothymia & Dysthymia',
      hi: 'अवसाद, बायपोलर व मनोदशा के उतार-चढ़ाव',
      gu: 'ડિપ્રેશન, બાયપોલર અને મનોદશાના ફેરફારો',
    },
    hex: {
      accent: '#C4722B', // Dawn Amber-Gold
      text: '#8C4610',
      bg: '#FEF8F0',
      border: '#F4DECA',
      dot: '#C4722B',
    },
  },
  anxiety: {
    id: 'anxiety',
    name: {
      en: 'Anxiety & Panic',
      hi: 'चिंता व घबराहट विकार',
      gu: 'ચિંતા અને ગભરાટની વિકૃતિઓ',
    },
    description: {
      en: 'GAD, Panic Attacks, Social Anxiety & Phobias',
      hi: 'सामान्यीकृत चिंता, पैनिक अटैक व भय',
      gu: 'સામાન્ય ચિંતા, પેનિક એટેક અને ફોબિયા',
    },
    hex: {
      accent: '#148A7F', // Pacific Teal / Sage
      text: '#0D5D56',
      bg: '#F0FBF9',
      border: '#C6ECE6',
      dot: '#148A7F',
    },
  },
  ocd: {
    id: 'ocd',
    name: {
      en: 'OCD & Related',
      hi: 'ओसीडी व संबंधित विचार',
      gu: 'ઓસીડી અને સંબંધિત વિચારો',
    },
    description: {
      en: 'Intrusive Thoughts, Compulsions & Checking',
      hi: 'अवांछित विचार व बार-बार दोहराई जाने वाली क्रियाएं',
      gu: 'ન ઇચ્છતા વિચારો અને વારંવાર કરવાની ટેવ',
    },
    hex: {
      accent: '#486581', // Precision Slate
      text: '#2E4663',
      bg: '#F0F4F8',
      border: '#D9E2EC',
      dot: '#486581',
    },
  },
  psychotic: {
    id: 'psychotic',
    name: {
      en: 'Psychosis & Reality',
      hi: 'मनोविकृति व सिज़ोफ्रेनिया',
      gu: 'સાયકોસિસ અને સિઝોફ્રેનિયા',
    },
    description: {
      en: 'Schizophrenia, Hallucinations & Delusions',
      hi: 'सिज़ोफ्रेनिया, भ्रम व वास्तविकता से अलगाव',
      gu: 'સિઝોફ્રેનિયા, ભ્રમ અને વાસ્તવિકતાનું વિભાજન',
    },
    hex: {
      accent: '#565A9F', // Twilight Indigo
      text: '#3B3E79',
      bg: '#F2F2FA',
      border: '#D7D8EE',
      dot: '#565A9F',
    },
  },
  trauma: {
    id: 'trauma',
    name: {
      en: 'Trauma & PTSD',
      hi: 'आघात व पीटीएसडी (PTSD)',
      gu: 'આઘાત અને પીટીએસડી (PTSD)',
    },
    description: {
      en: 'PTSD, Complex Trauma & Acute Stress',
      hi: 'गंभीर मानसिक सदमा व तनाव विकार',
      gu: 'ગંભીર માનસિક આઘાત અને તણાવ',
    },
    hex: {
      accent: '#3D7B52', // Resilience Cedar
      text: '#225434',
      bg: '#F0F7F2',
      border: '#CDE5D5',
      dot: '#3D7B52',
    },
  },
  neurodevelopmental: {
    id: 'neurodevelopmental',
    name: {
      en: 'Neurodevelopmental',
      hi: 'न्यूरोडेवलपमेंटल (ADHD व ऑटिज्म)',
      gu: 'ન્યુરોડેવલપમેન્ટલ (ADHD અને ઓટિઝમ)',
    },
    description: {
      en: 'Adult ADHD, Autism Spectrum & Executive Function',
      hi: 'ध्यान की कमी, अतिसक्रियता व ऑटिज़्म',
      gu: 'ધ્યાનની ખામી અને ઓટિઝમ સ્પેક્ટ્રમ',
    },
    hex: {
      accent: '#AC7320', // Vibrant Ochre
      text: '#764D12',
      bg: '#FDF8ED',
      border: '#F5E5C4',
      dot: '#AC7320',
    },
  },
  sleep: {
    id: 'sleep',
    name: {
      en: 'Sleep Disorders',
      hi: 'नींद विकार व अनिद्रा',
      gu: 'ઊંઘની સમસ્યાઓ અને અનિદ્રા',
    },
    description: {
      en: 'Chronic Insomnia & Circadian Sleep Disruptions',
      hi: 'अनिद्रा, देर से सोना व नींद का टूटना',
      gu: 'અનિદ્રા અને ઊંઘના સમયચક્રની વિકૃતિઓ',
    },
    hex: {
      accent: '#2B6CB0', // Midnight Marine
      text: '#1B4A75',
      bg: '#EEF5FA',
      border: '#CCE0EF',
      dot: '#2B6CB0',
    },
  },
  eating: {
    id: 'eating',
    name: {
      en: 'Eating Disorders',
      hi: 'खान-पान संबंधी विकार',
      gu: 'ખાવા-પીવાની વિકૃતિઓ',
    },
    description: {
      en: 'Anorexia, Bulimia & Binge Eating Patterns',
      hi: 'एनोरेक्सिया, बुलिमिया व आहार संबंधी समस्याएं',
      gu: 'એનોરેક્સિયા, બુલિમિયા અને વધુ ખાવાની ટેવ',
    },
    hex: {
      accent: '#A24E40', // Rosewood Sienna
      text: '#77372D',
      bg: '#FBF3F1',
      border: '#F0D5D0',
      dot: '#A24E40',
    },
  },
  somatic: {
    id: 'somatic',
    name: {
      en: 'Somatic & Bodily',
      hi: 'शारीरिक लक्षण व स्वास्थ्य चिंता',
      gu: 'શારીરિક લક્ષણો અને સ્વાસ્થ્ય ચિંતા',
    },
    description: {
      en: 'Illness Anxiety, Functional Neurological Symptoms',
      hi: 'अस्पष्ट शारीरिक दर्द व गंभीर बीमारी का डर',
      gu: 'શારીરિક દુખાવો અને ગંભીર રોગનો ડર',
    },
    hex: {
      accent: '#387971', // Eucalyptus Celadon
      text: '#225852',
      bg: '#EFF7F6',
      border: '#CEE5E2',
      dot: '#387971',
    },
  },
  geriatric: {
    id: 'geriatric',
    name: {
      en: 'Geriatric Psychiatry',
      hi: 'वृद्धावस्था मानसिक स्वास्थ्य',
      gu: 'વડીલોનું માનસિક સ્વાસ્થ્ય',
    },
    description: {
      en: 'Dementia, Memory Decline & Late-Life Depression',
      hi: 'स्मृति ह्रास, डिमेंशिया व बुजुर्गों में अवसाद',
      gu: 'યાદશક્તિની કમજોરી, ડિમેન્શિયા અને વૃદ્ધાવસ્થા ડિપ્રેશન',
    },
    hex: {
      accent: '#525F70', // Dignified Slate-Navy
      text: '#394453',
      bg: '#F3F5F7',
      border: '#D8DFE6',
      dot: '#525F70',
    },
  },
  personality: {
    id: 'personality',
    name: {
      en: 'Personality & Relationships',
      hi: 'व्यक्तित्व व संबंध विकार',
      gu: 'વ્યક્તિત્વ અને સંબંધોની વિકૃતિઓ',
    },
    description: {
      en: 'Borderline, Emotional Dysregulation & Interpersonal Patterns',
      hi: 'भावनाओं पर नियंत्रण की कमी व जटिल संबंध',
      gu: 'ભાવનાત્મક અસ્થિરતા અને જટિલ સંબંધો',
    },
    hex: {
      accent: '#734B7F', // Jamun Plum
      text: '#54335C',
      bg: '#F8F2F9',
      border: '#E8D7EC',
      dot: '#734B7F',
    },
  },
  perinatal: {
    id: 'perinatal',
    name: {
      en: 'Perinatal & Maternal',
      hi: 'मातृ व प्रसवोत्तर मानसिक स्वास्थ्य',
      gu: 'માતૃત્વ અને પ્રસૂતિ પછીનું માનસિક સ્વાસ્થ્ય',
    },
    description: {
      en: 'Postpartum Depression, Pregnancy Anxiety & PMDD',
      hi: 'प्रसवोत्तर अवसाद, गर्भावस्था चिंता व पीएमडीडी',
      gu: 'પ્રસૂતિ પછીનું ડિપ્રેશન અને ગર્ભાવસ્થાની ચિંતા',
    },
    hex: {
      accent: '#8E4770', // Mulberry Flora
      text: '#683251',
      bg: '#FAF2F6',
      border: '#ECCFDF',
      dot: '#8E4770',
    },
  },
};

/**
 * Safe accessor for any category theme, falling back to mood if unassigned.
 */
export function getCategoryTheme(category: string): CategoryTheme {
  const normalized = category.toLowerCase() as ConditionCategory;
  return CATEGORY_THEMES[normalized] || CATEGORY_THEMES.mood;
}

/**
 * Contrast metadata for documentation, auditing, and accessibility reporting.
 */
export const CATEGORY_CONTRAST_AUDIT = {
  mood: { ratioOnWhite: '6.99:1', ratioOnBg: '6.6:1', status: 'WCAG AA / AAA Large' },
  anxiety: { ratioOnWhite: '7.60:1', ratioOnBg: '7.4:1', status: 'WCAG AAA' },
  ocd: { ratioOnWhite: '9.30:1', ratioOnBg: '8.8:1', status: 'WCAG AAA' },
  psychotic: { ratioOnWhite: '9.70:1', ratioOnBg: '9.1:1', status: 'WCAG AAA' },
  trauma: { ratioOnWhite: '8.40:1', ratioOnBg: '8.0:1', status: 'WCAG AAA' },
  neurodevelopmental: { ratioOnWhite: '7.90:1', ratioOnBg: '7.5:1', status: 'WCAG AAA' },
  sleep: { ratioOnWhite: '8.90:1', ratioOnBg: '8.4:1', status: 'WCAG AAA' },
  eating: { ratioOnWhite: '9.10:1', ratioOnBg: '8.6:1', status: 'WCAG AAA' },
  somatic: { ratioOnWhite: '8.00:1', ratioOnBg: '7.6:1', status: 'WCAG AAA' },
  geriatric: { ratioOnWhite: '9.70:1', ratioOnBg: '9.2:1', status: 'WCAG AAA' },
  personality: { ratioOnWhite: '10.20:1', ratioOnBg: '9.6:1', status: 'WCAG AAA' },
  perinatal: { ratioOnWhite: '9.90:1', ratioOnBg: '9.3:1', status: 'WCAG AAA' },
};
