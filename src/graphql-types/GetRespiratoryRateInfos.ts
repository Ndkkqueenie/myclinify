/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRespiratoryRateInfos
// ====================================================

export interface GetRespiratoryRateInfos_getRespiratoryRateInfos {
  __typename: "RespiratoryRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  oxygenSaturation: number | null;
  rhythm: string | null;
}

export interface GetRespiratoryRateInfos {
  getRespiratoryRateInfos: GetRespiratoryRateInfos_getRespiratoryRateInfos[];
}

export interface GetRespiratoryRateInfosVariables {
  parentRecordId: string;
}
