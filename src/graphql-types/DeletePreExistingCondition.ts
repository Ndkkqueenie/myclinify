/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePreExistingCondition
// ====================================================

export interface DeletePreExistingCondition_deletePreExistingConditionInfo {
  __typename: "PreExistingConditionModel";
  id: string;
}

export interface DeletePreExistingCondition {
  deletePreExistingConditionInfo: DeletePreExistingCondition_deletePreExistingConditionInfo;
}

export interface DeletePreExistingConditionVariables {
  id: string;
  profileId?: string | null;
}
