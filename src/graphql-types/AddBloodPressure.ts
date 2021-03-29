/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BloodPressureVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddBloodPressure
// ====================================================

export interface AddBloodPressure_addBloodPressureInfo {
  __typename: "BloodPressureModel";
  id: string;
  readingDateTime: any | null;
  diastolic: number | null;
  systolic: number | null;
  meanArterialPressure: number | null;
}

export interface AddBloodPressure {
  addBloodPressureInfo: AddBloodPressure_addBloodPressureInfo;
}

export interface AddBloodPressureVariables {
  input: BloodPressureVitalFields;
  parentRecordId: string;
}
