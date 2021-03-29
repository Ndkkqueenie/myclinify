/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PulseRateVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePulseRateInfo
// ====================================================

export interface UpdatePulseRateInfo_updatePulseRateInfo {
  __typename: "PulseRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  checkMethod: string | null;
  checkMethodSpecify: string | null;
  rhythm: string | null;
}

export interface UpdatePulseRateInfo {
  updatePulseRateInfo: UpdatePulseRateInfo_updatePulseRateInfo;
}

export interface UpdatePulseRateInfoVariables {
  input: PulseRateVitalFields;
  id: string;
}
