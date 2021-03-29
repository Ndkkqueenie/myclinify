/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePastSurgery
// ====================================================

export interface DeletePastSurgery_deletePastSurgeryInfo {
  __typename: "PastSurgeryModel";
  id: string;
}

export interface DeletePastSurgery {
  deletePastSurgeryInfo: DeletePastSurgery_deletePastSurgeryInfo;
}

export interface DeletePastSurgeryVariables {
  id: string;
  profileId?: string | null;
}
