/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FamilyHistoryInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddFamilyHistory
// ====================================================

export interface AddFamilyHistory_addFamilyHistoryInfo {
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

export interface AddFamilyHistory {
  addFamilyHistoryInfo: AddFamilyHistory_addFamilyHistoryInfo;
}

export interface AddFamilyHistoryVariables {
  profileId?: string | null;
  input: FamilyHistoryInput;
}
