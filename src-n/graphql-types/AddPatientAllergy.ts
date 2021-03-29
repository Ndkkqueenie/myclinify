/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewAllergyInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddPatientAllergy
// ====================================================

export interface AddPatientAllergy_addAllergy_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface AddPatientAllergy_addAllergy_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface AddPatientAllergy_addAllergy {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: AddPatientAllergy_addAllergy_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  medications: AddPatientAllergy_addAllergy_medications[] | null;
}

export interface AddPatientAllergy {
  addAllergy: AddPatientAllergy_addAllergy;
}

export interface AddPatientAllergyVariables {
  input: NewAllergyInput;
}
