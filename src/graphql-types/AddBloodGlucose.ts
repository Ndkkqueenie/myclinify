/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BloodGlucoseVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddBloodGlucose
// ====================================================

export interface AddBloodGlucose_addBloodGlucoseInfo {
  __typename: "BloodGlucoseModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  readingUnit: string | null;
  mealTime: string | null;
}

export interface AddBloodGlucose {
  addBloodGlucoseInfo: AddBloodGlucose_addBloodGlucoseInfo;
}

export interface AddBloodGlucoseVariables {
  input: BloodGlucoseVitalFields;
  parentRecordId: string;
}
