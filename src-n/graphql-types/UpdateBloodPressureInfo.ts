/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BloodPressureVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateBloodPressureInfo
// ====================================================

export interface UpdateBloodPressureInfo_updateBloodPressureInfo {
  __typename: "BloodPressureModel";
  id: string;
  readingDateTime: any | null;
  diastolic: number | null;
  systolic: number | null;
  meanArterialPressure: number | null;
}

export interface UpdateBloodPressureInfo {
  updateBloodPressureInfo: UpdateBloodPressureInfo_updateBloodPressureInfo;
}

export interface UpdateBloodPressureInfoVariables {
  input: BloodPressureVitalFields;
  id: string;
}
