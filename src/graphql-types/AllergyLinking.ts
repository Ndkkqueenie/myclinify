/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AllergyLinking
// ====================================================

export interface AllergyLinking_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface AllergyLinking {
  __typename: "AllergyModel";
  medications: AllergyLinking_medications[] | null;
}
