/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVitalList
// ====================================================

export interface GetVitalList_vital {
  __typename: "VitalModel";
  id: string;
  hospitalName: string | null;
  hospitalAddress: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface GetVitalList {
  vital: GetVitalList_vital;
}

export interface GetVitalListVariables {
  id: string;
}
