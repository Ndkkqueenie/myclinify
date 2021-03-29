/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPhysicalActivities
// ====================================================

export interface GetPhysicalActivities_getPhysicalActivities_list {
  __typename: "PhysicalActivityModel";
  id: string;
  type: string | null;
  name: string | null;
  additionalNote: string | null;
}

export interface GetPhysicalActivities_getPhysicalActivities {
  __typename: "PhysicalActivitiesResponse";
  totalCount: number;
  list: GetPhysicalActivities_getPhysicalActivities_list[];
}

export interface GetPhysicalActivities {
  getPhysicalActivities: GetPhysicalActivities_getPhysicalActivities;
}

export interface GetPhysicalActivitiesVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
