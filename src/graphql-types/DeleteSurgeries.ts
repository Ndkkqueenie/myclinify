/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteSurgeries
// ====================================================

export interface DeleteSurgeries_deleteSurgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface DeleteSurgeries {
  deleteSurgeries: DeleteSurgeries_deleteSurgeries[];
}

export interface DeleteSurgeriesVariables {
  ids: string[];
}
