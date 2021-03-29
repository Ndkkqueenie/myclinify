/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetDependents
// ====================================================

export interface GetDependents_getDependents_list {
  __typename: "DependentModel";
  id: string;
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  genoType: string | null;
  relationship: string | null;
}

export interface GetDependents_getDependents {
  __typename: "DependentsResponse";
  totalCount: number;
  list: GetDependents_getDependents_list[];
}

export interface GetDependents {
  getDependents: GetDependents_getDependents;
}

export interface GetDependentsVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
