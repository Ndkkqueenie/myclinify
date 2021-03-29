/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPulseRateInfos
// ====================================================

export interface GetPulseRateInfos_getPulseRateInfos {
  __typename: "PulseRateModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  checkMethod: string | null;
  checkMethodSpecify: string | null;
  rhythm: string | null;
}

export interface GetPulseRateInfos {
  getPulseRateInfos: GetPulseRateInfos_getPulseRateInfos[];
}

export interface GetPulseRateInfosVariables {
  parentRecordId: string;
}
