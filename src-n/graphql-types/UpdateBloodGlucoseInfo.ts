/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BloodGlucoseVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateBloodGlucoseInfo
// ====================================================

export interface UpdateBloodGlucoseInfo_updateBloodGlucoseInfo {
  __typename: "BloodGlucoseModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  readingUnit: string | null;
  mealTime: string | null;
}

export interface UpdateBloodGlucoseInfo {
  updateBloodGlucoseInfo: UpdateBloodGlucoseInfo_updateBloodGlucoseInfo;
}

export interface UpdateBloodGlucoseInfoVariables {
  input: BloodGlucoseVitalFields;
  id: string;
}
