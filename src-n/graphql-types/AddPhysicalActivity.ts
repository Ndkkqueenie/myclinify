/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PhysicalActivityInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddPhysicalActivity
// ====================================================

export interface AddPhysicalActivity_addPhysicalActivityInfo {
  __typename: "PhysicalActivityModel";
  id: string;
  type: string | null;
  name: string | null;
  additionalNote: string | null;
}

export interface AddPhysicalActivity {
  addPhysicalActivityInfo: AddPhysicalActivity_addPhysicalActivityInfo;
}

export interface AddPhysicalActivityVariables {
  profileId?: string | null;
  input: PhysicalActivityInput;
}
