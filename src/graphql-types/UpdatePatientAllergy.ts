/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AllergyInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePatientAllergy
// ====================================================

export interface UpdatePatientAllergy_updateAllergy_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface UpdatePatientAllergy_updateAllergy_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface UpdatePatientAllergy_updateAllergy {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: UpdatePatientAllergy_updateAllergy_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  medications: UpdatePatientAllergy_updateAllergy_medications[] | null;
}

export interface UpdatePatientAllergy {
  updateAllergy: UpdatePatientAllergy_updateAllergy;
}

export interface UpdatePatientAllergyVariables {
  input: AllergyInput;
  id: string;
}
