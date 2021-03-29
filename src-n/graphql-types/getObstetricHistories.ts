/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getObstetricHistories
// ====================================================

export interface getObstetricHistories_getObstetricHistories_list {
  __typename: "ObstetricHistoryModel";
  id: string;
  childrenCount: number | null;
  lastBirth: any | null;
  additionalNote: string | null;
}

export interface getObstetricHistories_getObstetricHistories {
  __typename: "ObstetricHistoriesResponse";
  totalCount: number;
  list: getObstetricHistories_getObstetricHistories_list[];
}

export interface getObstetricHistories {
  getObstetricHistories: getObstetricHistories_getObstetricHistories;
}

export interface getObstetricHistoriesVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
