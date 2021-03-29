/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RespiratoryRateVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddRespiratoryRate
// ====================================================

export interface AddRespiratoryRate_addRespiratoryRateInfo {
  __typename: "RespiratoryRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  oxygenSaturation: number | null;
  rhythm: string | null;
}

export interface AddRespiratoryRate {
  addRespiratoryRateInfo: AddRespiratoryRate_addRespiratoryRateInfo;
}

export interface AddRespiratoryRateVariables {
  input: RespiratoryRateVitalFields;
  parentRecordId: string;
}
