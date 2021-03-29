/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteObstetricHistory
// ====================================================

export interface DeleteObstetricHistory_deleteObstetricInfo {
  __typename: "ObstetricHistoryModel";
  id: string;
}

export interface DeleteObstetricHistory {
  deleteObstetricInfo: DeleteObstetricHistory_deleteObstetricInfo;
}

export interface DeleteObstetricHistoryVariables {
  id: string;
  profileId?: string | null;
}
