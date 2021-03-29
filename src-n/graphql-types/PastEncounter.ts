/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PastEncounter
// ====================================================

export interface PastEncounter_details {
  __typename: "EncounterDetailModel";
  id: string;
  diagnosisDate: any | null;
  diagnosis: string;
  duration: string | null;
  diagnosedBy: string | null;
  specialty: string | null;
  symptoms: string[] | null;
}

export interface PastEncounter {
  __typename: "PastEncounterModel";
  id: string;
  clinicName: string | null;
  clinicAddress: string | null;
  details: PastEncounter_details[];
  additionalNote: string | null;
}
