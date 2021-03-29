/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPreExistingConditions
// ====================================================

export interface GetPreExistingConditions_getPreExistingConditions_list {
  __typename: "PreExistingConditionModel";
  id: string;
  condition: string | null;
  diagnosedDate: any | null;
  duration: string | null;
  additionalNote: string | null;
}

export interface GetPreExistingConditions_getPreExistingConditions {
  __typename: "PreExistingConditionsResponse";
  totalCount: number;
  list: GetPreExistingConditions_getPreExistingConditions_list[];
}

export interface GetPreExistingConditions {
  getPreExistingConditions: GetPreExistingConditions_getPreExistingConditions;
}

export interface GetPreExistingConditionsVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
