/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteFamilyHistory
// ====================================================

export interface DeleteFamilyHistory_deleteFamilyHistoryInfo {
  __typename: "FamilyHistoryModel";
  id: string;
}

export interface DeleteFamilyHistory {
  deleteFamilyHistoryInfo: DeleteFamilyHistory_deleteFamilyHistoryInfo;
}

export interface DeleteFamilyHistoryVariables {
  id: string;
  profileId?: string | null;
}
