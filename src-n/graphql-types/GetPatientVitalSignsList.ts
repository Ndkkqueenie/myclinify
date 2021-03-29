/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VitalFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPatientVitalSignsList
// ====================================================

export interface GetPatientVitalSignsList_user_vitals_list_anthropometry {
  __typename: "AnthropometryModel";
  id: string;
  readingDateTime: any | null;
  height: number | null;
  heightUnit: string | null;
  weight: number | null;
  weightUnit: string | null;
  hipCircumference: number | null;
  hipCircumferenceUnit: string | null;
  waistCircumference: number | null;
  waistCircumferenceUnit: string | null;
  skinfoldThickness: number | null;
  skinfoldThicknessUnit: string | null;
  leftUpperLimbCircumference: number | null;
  rightUpperLimbCircumference: number | null;
  upperLimbCircumferenceUnit: string | null;
  leftLowerLimbCircumference: number | null;
  rightLowerLimbCircumference: number | null;
  lowerLimbCircumferenceUnit: string | null;
  abdominalGirth: number | null;
  abdominalGirthUnit: string | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_bloodGlucose {
  __typename: "BloodGlucoseModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  readingUnit: string | null;
  mealTime: string | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_bloodPressure {
  __typename: "BloodPressureModel";
  id: string;
  readingDateTime: any | null;
  diastolic: number | null;
  systolic: number | null;
  meanArterialPressure: number | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_pulseRate {
  __typename: "PulseRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  checkMethod: string | null;
  checkMethodSpecify: string | null;
  rhythm: string | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_respiratoryRate {
  __typename: "RespiratoryRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  oxygenSaturation: number | null;
  rhythm: string | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_temperature {
  __typename: "TemperatureModel";
  id: string;
  readingDateTime: any | null;
  checkMethod: string | null;
  reading: number | null;
  readingUnit: string | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_visualAcuity {
  __typename: "VisualAcuityModel";
  id: string;
  readingDateTime: any | null;
  withGlassesLeft: string | null;
  withGlassesRight: string | null;
  withoutGlassesLeft: string | null;
  withoutGlassesRight: string | null;
}

export interface GetPatientVitalSignsList_user_vitals_list_urineDipstick {
  __typename: "UrineDipstickModel";
  id: string;
  readingDateTime: any | null;
  blood: number | null;
  glucose: number | null;
  ketones: number | null;
  ph: number | null;
  protein: number | null;
  nitrites: number | null;
  leucocyte: number | null;
  urobilinogen: number | null;
}

export interface GetPatientVitalSignsList_user_vitals_list {
  __typename: "VitalModel";
  id: string;
  hospitalName: string | null;
  hospitalAddress: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  anthropometry: GetPatientVitalSignsList_user_vitals_list_anthropometry[] | null;
  bloodGlucose: GetPatientVitalSignsList_user_vitals_list_bloodGlucose[] | null;
  bloodPressure: GetPatientVitalSignsList_user_vitals_list_bloodPressure[] | null;
  pulseRate: GetPatientVitalSignsList_user_vitals_list_pulseRate[] | null;
  respiratoryRate: GetPatientVitalSignsList_user_vitals_list_respiratoryRate[] | null;
  temperature: GetPatientVitalSignsList_user_vitals_list_temperature[] | null;
  visualAcuity: GetPatientVitalSignsList_user_vitals_list_visualAcuity[] | null;
  urineDipstick: GetPatientVitalSignsList_user_vitals_list_urineDipstick[] | null;
  createdDate: any;
}

export interface GetPatientVitalSignsList_user_vitals {
  __typename: "VitalResponse";
  totalCount: number;
  list: GetPatientVitalSignsList_user_vitals_list[];
}

export interface GetPatientVitalSignsList_user {
  __typename: "UserModel";
  vitals: GetPatientVitalSignsList_user_vitals;
}

export interface GetPatientVitalSignsList {
  user: GetPatientVitalSignsList_user;
}

export interface GetPatientVitalSignsListVariables {
  filterOptions?: VitalFilterInput | null;
  id?: string | null;
}
