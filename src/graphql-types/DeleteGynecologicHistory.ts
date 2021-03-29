/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteGynecologicHistory
// ====================================================

export interface DeleteGynecologicHistory_deleteGynecologicInfo {
  __typename: "GynecologicHistoryModel";
  id: string;
}

export interface DeleteGynecologicHistory {
  deleteGynecologicInfo: DeleteGynecologicHistory_deleteGynecologicInfo;
}

export interface DeleteGynecologicHistoryVariables {
  id: string;
  profileId?: string | null;
}
