/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteImmunizations
// ====================================================

export interface DeleteImmunizations_deleteImmunizations {
  __typename: "ImmunizationModel";
  id: string;
}

export interface DeleteImmunizations {
  deleteImmunizations: DeleteImmunizations_deleteImmunizations[];
}

export interface DeleteImmunizationsVariables {
  ids: string[];
}
