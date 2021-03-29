/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GynecologicHistoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateGynecologicHistory
// ====================================================

export interface UpdateGynecologicHistory_updateGynecologicHistoryInfo {
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

export interface UpdateGynecologicHistory {
  updateGynecologicHistoryInfo: UpdateGynecologicHistory_updateGynecologicHistoryInfo;
}

export interface UpdateGynecologicHistoryVariables {
  input: GynecologicHistoryInput;
  id: string;
  profileId?: string | null;
}
