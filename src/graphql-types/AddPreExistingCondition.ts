/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PreExistingConditionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddPreExistingCondition
// ====================================================

export interface AddPreExistingCondition_addPreExistingConditionInfo {
  __typename: "PreExistingConditionModel";
  id: string;
  condition: string | null;
  diagnosedDate: any | null;
  duration: string | null;
  additionalNote: string | null;
}

export interface AddPreExistingCondition {
  addPreExistingConditionInfo: AddPreExistingCondition_addPreExistingConditionInfo;
}

export interface AddPreExistingConditionVariables {
  profileId?: string | null;
  input: PreExistingConditionInput;
}
