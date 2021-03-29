/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePatientAllergies
// ====================================================

export interface DeletePatientAllergies_deleteAllergies {
  __typename: "AllergyModel";
  id: string;
}

export interface DeletePatientAllergies {
  deleteAllergies: DeletePatientAllergies_deleteAllergies[];
}

export interface DeletePatientAllergiesVariables {
  ids: string[];
}
