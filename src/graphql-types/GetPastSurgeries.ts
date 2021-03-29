/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPastSurgeries
// ====================================================

export interface GetPastSurgeries_getPastSurgeries_list {
  __typename: "PastSurgeryModel";
  id: string;
  type: string;
  operationDate: any | null;
  additionalNote: string | null;
}

export interface GetPastSurgeries_getPastSurgeries {
  __typename: "PastSurgeriesResponse";
  totalCount: number;
  list: GetPastSurgeries_getPastSurgeries_list[];
}

export interface GetPastSurgeries {
  getPastSurgeries: GetPastSurgeries_getPastSurgeries;
}

export interface GetPastSurgeriesVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
