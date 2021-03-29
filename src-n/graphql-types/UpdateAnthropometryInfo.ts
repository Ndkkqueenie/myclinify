/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AnthropometryVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAnthropometryInfo
// ====================================================

export interface UpdateAnthropometryInfo_updateAnthropometryInfo {
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

export interface UpdateAnthropometryInfo {
  updateAnthropometryInfo: UpdateAnthropometryInfo_updateAnthropometryInfo;
}

export interface UpdateAnthropometryInfoVariables {
  input: AnthropometryVitalFields;
  id: string;
}
