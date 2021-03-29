/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FetchEncounters
// ====================================================

export interface FetchEncounters_getPastEncounters_list_details {
  __typename: "EncounterDetailModel";
  id: string;
  diagnosisDate: any | null;
  diagnosis: string;
  duration: string | null;
  diagnosedBy: string | null;
  specialty: string | null;
  symptoms: string[] | null;
}

export interface FetchEncounters_getPastEncounters_list {
  __typename: "PastEncounterModel";
  id: string;
  clinicName: string | null;
  clinicAddress: string | null;
  details: FetchEncounters_getPastEncounters_list_details[];
  additionalNote: string | null;
}

export interface FetchEncounters_getPastEncounters {
  __typename: "PastEncountersResponse";
  totalCount: number;
  list: FetchEncounters_getPastEncounters_list[];
}

export interface FetchEncounters {
  getPastEncounters: FetchEncounters_getPastEncounters;
}

export interface FetchEncountersVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
