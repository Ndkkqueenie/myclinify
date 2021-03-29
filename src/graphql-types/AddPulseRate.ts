/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PulseRateVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddPulseRate
// ====================================================

export interface AddPulseRate_addPulseRateInfo {
  __typename: "PulseRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  checkMethod: string | null;
  checkMethodSpecify: string | null;
  rhythm: string | null;
}

export interface AddPulseRate {
  addPulseRateInfo: AddPulseRate_addPulseRateInfo;
}

export interface AddPulseRateVariables {
  input: PulseRateVitalFields;
  parentRecordId: string;
}
