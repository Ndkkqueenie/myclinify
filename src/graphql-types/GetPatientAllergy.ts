/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPatientAllergy
// ====================================================

export interface GetPatientAllergy_allergy_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface GetPatientAllergy_allergy_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface GetPatientAllergy_allergy {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: GetPatientAllergy_allergy_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  medications: GetPatientAllergy_allergy_medications[] | null;
}

export interface GetPatientAllergy {
  allergy: GetPatientAllergy_allergy;
}

export interface GetPatientAllergyVariables {
  id: string;
}
