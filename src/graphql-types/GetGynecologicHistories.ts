/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetGynecologicHistories
// ====================================================

export interface GetGynecologicHistories_getGynecologicHistories_list {
  __typename: "GynecologicHistoryModel";
  id: string;
  firstMenstrualAge: number | null;
  menstrualCycleLength: number | null;
  menstrualFlowDuration: number | null;
  lastMenstrualPeriod: any | null;
  menstrualFlow: string | null;
  contraceptiveUse: string | null;
  miscarriageOrAbortion: string | null;
  miscarriageOrAbortionCount: number | null;
  additionalNote: string | null;
}

export interface GetGynecologicHistories_getGynecologicHistories {
  __typename: "GynecologicHistoriesResponse";
  totalCount: number;
  list: GetGynecologicHistories_getGynecologicHistories_list[];
}

export interface GetGynecologicHistories {
  getGynecologicHistories: GetGynecologicHistories_getGynecologicHistories;
}

export interface GetGynecologicHistoriesVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
