/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ObstetricHistoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddObstetricHistory
// ====================================================

export interface AddObstetricHistory_addObstetricInfo {
  __typename: "ObstetricHistoryModel";
  id: string;
  childrenCount: number | null;
  lastBirth: any | null;
  additionalNote: string | null;
}

export interface AddObstetricHistory {
  addObstetricInfo: AddObstetricHistory_addObstetricInfo;
}

export interface AddObstetricHistoryVariables {
  profileId?: string | null;
  input: ObstetricHistoryInput;
}
