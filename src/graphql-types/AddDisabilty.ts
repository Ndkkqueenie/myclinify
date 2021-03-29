/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DisabilityInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddDisabilty
// ====================================================

export interface AddDisabilty_addDisabilityInfo {
  __typename: "DisabilityModel";
  id: string;
  disability: string | null;
  type: string | null;
  additionalNote: string | null;
}

export interface AddDisabilty {
  addDisabilityInfo: AddDisabilty_addDisabilityInfo;
}

export interface AddDisabiltyVariables {
  profileId?: string | null;
  input: DisabilityInput;
}
