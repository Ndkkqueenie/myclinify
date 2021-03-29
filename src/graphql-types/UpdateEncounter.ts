/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PastEncountersInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateEncounter
// ====================================================

export interface UpdateEncounter_updatePastEncounterInfo_details {
  __typename: "EncounterDetailModel";
  id: string;
  diagnosisDate: any | null;
  diagnosis: string;
  duration: string | null;
  diagnosedBy: string | null;
  specialty: string | null;
  symptoms: string[] | null;
}

export interface UpdateEncounter_updatePastEncounterInfo {
  __typename: "PastEncounterModel";
  id: string;
  clinicName: string | null;
  clinicAddress: string | null;
  details: UpdateEncounter_updatePastEncounterInfo_details[];
  additionalNote: string | null;
}

export interface UpdateEncounter {
  updatePastEncounterInfo: UpdateEncounter_updatePastEncounterInfo;
}

export interface UpdateEncounterVariables {
  input: PastEncountersInput;
  id: string;
  profileId?: string | null;
}
