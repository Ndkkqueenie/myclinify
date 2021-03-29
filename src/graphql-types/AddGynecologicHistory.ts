/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GynecologicHistoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddGynecologicHistory
// ====================================================

export interface AddGynecologicHistory_addGynecologicHistoryInfo {
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

export interface AddGynecologicHistory {
  addGynecologicHistoryInfo: AddGynecologicHistory_addGynecologicHistoryInfo;
}

export interface AddGynecologicHistoryVariables {
  profileId?: string | null;
  input: GynecologicHistoryInput;
}
