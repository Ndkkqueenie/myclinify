/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBloodPressureInfos
// ====================================================

export interface GetBloodPressureInfos_getBloodPressureInfos {
  __typename: "BloodPressureModel";
  id: string;
  readingDateTime: any | null;
  diastolic: number | null;
  systolic: number | null;
  meanArterialPressure: number | null;
}

export interface GetBloodPressureInfos {
  getBloodPressureInfos: GetBloodPressureInfos_getBloodPressureInfos[];
}

export interface GetBloodPressureInfosVariables {
  parentRecordId: string;
}
