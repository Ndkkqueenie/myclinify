/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DependentInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateDependents
// ====================================================

export interface UpdateDependents_updateDependentInfo {
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

export interface UpdateDependents {
  updateDependentInfo: UpdateDependents_updateDependentInfo;
}

export interface UpdateDependentsVariables {
  profileId?: string | null;
  input: DependentInput;
  id: string;
}
