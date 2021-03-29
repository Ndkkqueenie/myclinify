/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteVitals
// ====================================================

export interface DeleteVitals_deleteVitals {
  __typename: "VitalModel";
  id: string;
}

export interface DeleteVitals {
  deleteVitals: DeleteVitals_deleteVitals[];
}

export interface DeleteVitalsVariables {
  ids: string[];
}
