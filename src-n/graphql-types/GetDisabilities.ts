/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetDisabilities
// ====================================================

export interface GetDisabilities_getDisabilities_list {
  __typename: "DisabilityModel";
  id: string;
  disability: string | null;
  type: string | null;
  additionalNote: string | null;
}

export interface GetDisabilities_getDisabilities {
  __typename: "DisabilitiesResponse";
  totalCount: number;
  list: GetDisabilities_getDisabilities_list[];
}

export interface GetDisabilities {
  getDisabilities: GetDisabilities_getDisabilities;
}

export interface GetDisabilitiesVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
