/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBloodGlucoseInfos
// ====================================================

export interface GetBloodGlucoseInfos_getBloodGlucoseInfos {
  __typename: "BloodGlucoseModel";
  id: string;
  readingDateTime: any | null;
  reading: number | null;
  readingUnit: string | null;
  mealTime: string | null;
}

export interface GetBloodGlucoseInfos {
  getBloodGlucoseInfos: GetBloodGlucoseInfos_getBloodGlucoseInfos[];
}

export interface GetBloodGlucoseInfosVariables {
  parentRecordId: string;
}
