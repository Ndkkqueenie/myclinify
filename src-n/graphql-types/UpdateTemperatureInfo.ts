/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TemperatureVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTemperatureInfo
// ====================================================

export interface UpdateTemperatureInfo_updateTemperatureInfo {
  __typename: "TemperatureModel";
  id: string;
  readingDateTime: any | null;
  checkMethod: string | null;
  reading: number | null;
  readingUnit: string | null;
}

export interface UpdateTemperatureInfo {
  updateTemperatureInfo: UpdateTemperatureInfo_updateTemperatureInfo;
}

export interface UpdateTemperatureInfoVariables {
  input: TemperatureVitalFields;
  id: string;
}
