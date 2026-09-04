export type Language = 'en' | 'hi' | 'gu';

export interface LocalizedString {
  en: string;
  hi: string;
  gu: string;
}

export interface ReferenceItem {
  citation: string;
  source: string;
  year?: string;
  url?: string;
}

export interface FAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface Condition {
  id: string;
  slug: string;
  category: 'mood' | 'anxiety' | 'ocd' | 'psychotic' | 'trauma' | 'neurodevelopmental' | 'sleep' | 'eating' | 'somatic' | 'geriatric' | 'personality';
  name: LocalizedString;
  medicalTerms: LocalizedString;
  overview: LocalizedString;
  commonSymptoms: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  dailyLifeImpact: LocalizedString;
  causes: LocalizedString; // Bio-psycho-social
  riskFactors: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  psychiatricAssessment: LocalizedString;
  diagnosisExplanation: LocalizedString;
  differentialConsiderations: LocalizedString;
  treatment: {
    psychoeducation: LocalizedString;
    lifestyleSupport: LocalizedString;
    psychotherapy: LocalizedString;
    medications: LocalizedString;
    familySocialInterventions: LocalizedString;
  };
  treatmentGoals: LocalizedString;
  recoveryOutlook: LocalizedString;
  relapsePrevention: LocalizedString;
  urgentWarningSigns: LocalizedString;
  mythsVsFacts: Array<{
    myth: LocalizedString;
    fact: LocalizedString;
  }>;
  faqs: FAQItem[];
  references: ReferenceItem[];
  lastReviewed: string;
}

export interface SubstanceInfo {
  id: string;
  slug: string;
  name: LocalizedString;
  medicalTerms: LocalizedString;
  whatIsIt: LocalizedString;
  whyAddictive: LocalizedString;
  brainBodyEffects: LocalizedString;
  problematicUseSigns: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  dependenceSigns: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  withdrawalSymptoms: LocalizedString;
  medicalComplications: LocalizedString;
  psychiatricComplications: LocalizedString;
  familyImpact: LocalizedString;
  assessmentOverview: LocalizedString;
  treatmentApproach: LocalizedString;
  psychotherapyModalities: LocalizedString;
  medicationAssistedTreatment: LocalizedString;
  detoxificationConcepts: LocalizedString; // General, non-instructional
  relapsePrevention: LocalizedString;
  harmReduction: LocalizedString;
  overdoseWarningSigns: LocalizedString;
  emergencyAdvice: LocalizedString;
  mythsVsFacts: Array<{
    myth: LocalizedString;
    fact: LocalizedString;
  }>;
  faqs: FAQItem[];
  references: ReferenceItem[];
  lastReviewed: string;
}

export interface MedicationClass {
  id: string;
  name: LocalizedString;
  commonExamples: string[];
  indications: LocalizedString;
  mechanismPlain: LocalizedString;
  commonSideEffects: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  seriousAdverseEffects: LocalizedString;
  commonMisconceptions: LocalizedString;
  importantPrecautions: LocalizedString;
  whyMonitoringNeeded: LocalizedString;
  mandatoryWarning: LocalizedString;
  references: ReferenceItem[];
  lastReviewed: string;
}

export interface TherapyModality {
  id: string;
  name: LocalizedString;
  shortName: string;
  plainSummary: LocalizedString;
  howItWorks: LocalizedString;
  conditionsUsedFor: LocalizedString;
  whatToExpect: LocalizedString;
  misconceptions: LocalizedString;
  lastReviewed: string;
}

export interface MythFact {
  id: string;
  myth: LocalizedString;
  fact: LocalizedString;
  explanation: LocalizedString;
  category: 'general' | 'medications' | 'addiction' | 'therapy' | 'children';
}

export interface CaregiverGuide {
  id: string;
  title: LocalizedString;
  category: 'support' | 'communication' | 'boundaries' | 'selfcare' | 'crisis';
  summary: LocalizedString;
  keyPoints: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  whatToSay: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  whatToAvoid: {
    en: string[];
    hi: string[];
    gu: string[];
  };
}

export interface SymptomEducation {
  id: string;
  symptomName: LocalizedString;
  plainDescription: LocalizedString;
  possibleCauses: LocalizedString; // Emphasizing multiple conditions + physical causes
  whenToConsult: LocalizedString;
  selfCareSupport: LocalizedString;
}

export interface HelplineItem {
  name: LocalizedString;
  number: string;
  availableHours: LocalizedString;
  languages: LocalizedString;
  operatedBy: string;
  verificationSource: string;
  verifiedDate: string;
  cost: LocalizedString;
  description: LocalizedString;
}

export type ActiveTab =
  | 'home'
  | 'conditions'
  | 'addiction'
  | 'treatments'
  | 'medications'
  | 'caregivers'
  | 'myths'
  | 'symptoms'
  | 'when-to-seek-help'
  | 'interactive'
  | 'emergency'
  | 'about';
