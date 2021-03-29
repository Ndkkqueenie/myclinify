/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteDisability
// ====================================================

export interface DeleteDisability_deleteDisabilityInfo {
  __typename: "DisabilityModel";
  id: string;
}

export interface DeleteDisability {
  deleteDisabilityInfo: DeleteDisability_deleteDisabilityInfo;
}

export interface DeleteDisabilityVariables {
  id: string;
  profileId?: string | null;
}
