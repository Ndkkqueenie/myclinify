/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePhysicalActivity
// ====================================================

export interface DeletePhysicalActivity_deletePhysicalActivityInfo {
  __typename: "PhysicalActivityModel";
  id: string;
}

export interface DeletePhysicalActivity {
  deletePhysicalActivityInfo: DeletePhysicalActivity_deletePhysicalActivityInfo;
}

export interface DeletePhysicalActivityVariables {
  id: string;
  profileId?: string | null;
}
