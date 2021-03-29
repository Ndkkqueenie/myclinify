/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ObstetricHistoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateObstetrics
// ====================================================

export interface UpdateObstetrics_updateObstetricHistoryInfo {
  __typename: "ObstetricHistoryModel";
  id: string;
  childrenCount: number | null;
  lastBirth: any | null;
  additionalNote: string | null;
}

export interface UpdateObstetrics {
  updateObstetricHistoryInfo: UpdateObstetrics_updateObstetricHistoryInfo;
}

export interface UpdateObstetricsVariables {
  input: ObstetricHistoryInput;
  id: string;
  profileId?: string | null;
}
