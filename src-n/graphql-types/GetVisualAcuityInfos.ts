/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVisualAcuityInfos
// ====================================================

export interface GetVisualAcuityInfos_getVisualAcuityInfos {
  __typename: "VisualAcuityModel";
  id: string;
  readingDateTime: any | null;
  withGlassesLeft: string | null;
  withGlassesRight: string | null;
  withoutGlassesLeft: string | null;
  withoutGlassesRight: string | null;
}

export interface GetVisualAcuityInfos {
  getVisualAcuityInfos: GetVisualAcuityInfos_getVisualAcuityInfos[];
}

export interface GetVisualAcuityInfosVariables {
  parentRecordId: string;
}
