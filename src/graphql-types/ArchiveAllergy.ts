/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveAllergy
// ====================================================

export interface ArchiveAllergy_archiveAllergies_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface ArchiveAllergy_archiveAllergies_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface ArchiveAllergy_archiveAllergies {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: ArchiveAllergy_archiveAllergies_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  medications: ArchiveAllergy_archiveAllergies_medications[] | null;
}

export interface ArchiveAllergy {
  archiveAllergies: ArchiveAllergy_archiveAllergies[];
}

export interface ArchiveAllergyVariables {
  ids: string[];
  archive?: boolean | null;
}
