import { MedicationClass } from '../types';
import { antidepressantsAntipsychoticsData } from './medications/antidepressants_antipsychotics';
import { moodstabilizersAnxiolyticsData } from './medications/moodstabilizers_anxiolytics';
import { adhdSubstanceData } from './medications/adhd_substance';

export const medicationsData: MedicationClass[] = [
  ...antidepressantsAntipsychoticsData,
  ...moodstabilizersAnxiolyticsData,
  ...adhdSubstanceData,
];
