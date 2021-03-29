/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PreExistingConditionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePreExistingCondition
// ====================================================

export interface UpdatePreExistingCondition_updatePreExistingConditionInfo {
  __typename: "PreExistingConditionModel";
  id: string;
  condition: string | null;
  diagnosedDate: any | null;
  duration: string | null;
  additionalNote: string | null;
}

export interface UpdatePreExistingCondition {
  updatePreExistingConditionInfo: UpdatePreExistingCondition_updatePreExistingConditionInfo;
}

export interface UpdatePreExistingConditionVariables {
  input: PreExistingConditionInput;
  id: string;
  profileId?: string | null;
}
