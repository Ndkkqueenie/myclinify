/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AnthropometryVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddAnthropometry
// ====================================================

export interface AddAnthropometry_addAnthropometryInfo {
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

export interface AddAnthropometry {
  addAnthropometryInfo: AddAnthropometry_addAnthropometryInfo;
}

export interface AddAnthropometryVariables {
  input: AnthropometryVitalFields;
  parentRecordId: string;
}
