/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RespiratoryRateVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateRespiratoryRateInfo
// ====================================================

export interface UpdateRespiratoryRateInfo_updateRespiratoryRateInfo {
  __typename: "RespiratoryRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  oxygenSaturation: number | null;
  rhythm: string | null;
}

export interface UpdateRespiratoryRateInfo {
  updateRespiratoryRateInfo: UpdateRespiratoryRateInfo_updateRespiratoryRateInfo;
}

export interface UpdateRespiratoryRateInfoVariables {
  input: RespiratoryRateVitalFields;
  id: string;
}
