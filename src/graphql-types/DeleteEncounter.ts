/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteEncounter
// ====================================================

export interface DeleteEncounter_deletePastEncounterInfo {
  __typename: "PastEncounterModel";
  id: string;
}

export interface DeleteEncounter {
  deletePastEncounterInfo: DeleteEncounter_deletePastEncounterInfo;
}

export interface DeleteEncounterVariables {
  id: string;
  profileId?: string | null;
}
