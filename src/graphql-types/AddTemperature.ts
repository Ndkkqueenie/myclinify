/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TemperatureVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddTemperature
// ====================================================

export interface AddTemperature_addTemperatureInfo {
  __typename: "TemperatureModel";
  id: string;
  readingDateTime: any | null;
  checkMethod: string | null;
  reading: number | null;
  readingUnit: string | null;
}

export interface AddTemperature {
  addTemperatureInfo: AddTemperature_addTemperatureInfo;
}

export interface AddTemperatureVariables {
  input: TemperatureVitalFields;
  parentRecordId: string;
}
