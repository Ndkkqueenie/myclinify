/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTemperatureInfos
// ====================================================

export interface GetTemperatureInfos_getTemperatureInfos {
  __typename: "TemperatureModel";
  id: string;
  readingDateTime: any | null;
  checkMethod: string | null;
  reading: number | null;
  readingUnit: string | null;
}

export interface GetTemperatureInfos {
  getTemperatureInfos: GetTemperatureInfos_getTemperatureInfos[];
}

export interface GetTemperatureInfosVariables {
  parentRecordId: string;
}
