/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteDependent
// ====================================================

export interface DeleteDependent_deleteDependentInfo {
  __typename: "DependentModel";
  id: string;
}

export interface DeleteDependent {
  deleteDependentInfo: DeleteDependent_deleteDependentInfo;
}

export interface DeleteDependentVariables {
  id: string;
  profileId?: string | null;
}
