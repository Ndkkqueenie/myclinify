/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteNextOfKin
// ====================================================

export interface DeleteNextOfKin_deleteNextOfKinInfo {
  __typename: "NextOfKinModel";
  id: string;
}

export interface DeleteNextOfKin {
  deleteNextOfKinInfo: DeleteNextOfKin_deleteNextOfKinInfo;
}

export interface DeleteNextOfKinVariables {
  id: string;
  profileId?: string | null;
}
