/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetFamilyHistories
// ====================================================

export interface GetFamilyHistories_getFamilyHistories_list {
  __typename: "FamilyHistoryModel";
  id: string;
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  relationship: string | null;
  condition: string[];
  additionalNote: string | null;
}

export interface GetFamilyHistories_getFamilyHistories {
  __typename: "FamilyHistoriesResponse";
  totalCount: number;
  list: GetFamilyHistories_getFamilyHistories_list[];
}

export interface GetFamilyHistories {
  getFamilyHistories: GetFamilyHistories_getFamilyHistories;
}

export interface GetFamilyHistoriesVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
