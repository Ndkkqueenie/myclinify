/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PhysicalActivityInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePhysicalActivity
// ====================================================

export interface UpdatePhysicalActivity_updatePhysicalActivityInfo {
  __typename: "PhysicalActivityModel";
  id: string;
  type: string | null;
  name: string | null;
  additionalNote: string | null;
}

export interface UpdatePhysicalActivity {
  updatePhysicalActivityInfo: UpdatePhysicalActivity_updatePhysicalActivityInfo;
}

export interface UpdatePhysicalActivityVariables {
  input: PhysicalActivityInput;
  id: string;
  profileId?: string | null;
}
