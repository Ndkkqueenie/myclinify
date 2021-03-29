/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PastEncountersInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddEncounter
// ====================================================

export interface AddEncounter_addPastEncounterInfo_details {
  __typename: "EncounterDetailModel";
  id: string;
  diagnosisDate: any | null;
  diagnosis: string;
  duration: string | null;
  diagnosedBy: string | null;
  specialty: string | null;
  symptoms: string[] | null;
}

export interface AddEncounter_addPastEncounterInfo {
  __typename: "PastEncounterModel";
  id: string;
  clinicName: string | null;
  clinicAddress: string | null;
  details: AddEncounter_addPastEncounterInfo_details[];
  additionalNote: string | null;
}

export interface AddEncounter {
  addPastEncounterInfo: AddEncounter_addPastEncounterInfo;
}

export interface AddEncounterVariables {
  profileId?: string | null;
  input: PastEncountersInput;
}
