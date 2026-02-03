export interface SurveyData {
  carModel: string;
  accidentHistory: 'none' | 'simple' | 'major' | '';
  year: string;
  mileage: string;
  contact: string;
}

export type SurveyStep = 1 | 2 | 3 | 4 | 5 | 6 | 7; // 6 is analysis, 7 is success

export interface CarCategory {
  title: string;
  models: string;
  desc: string;
  iconName: string;
}