/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DisabilityInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateDisability
// ====================================================

export interface UpdateDisability_updateDisabilityInfo {
  __typename: "DisabilityModel";
  id: string;
  disability: string | null;
  type: string | null;
  additionalNote: string | null;
}

export interface UpdateDisability {
  updateDisabilityInfo: UpdateDisability_updateDisabilityInfo;
}

export interface UpdateDisabilityVariables {
  input: DisabilityInput;
  id: string;
  profileId?: string | null;
}
