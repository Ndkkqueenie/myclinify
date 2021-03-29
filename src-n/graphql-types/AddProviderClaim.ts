/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProviderClaimInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddProviderClaim
// ====================================================

export interface AddProviderClaim_addProviderClaim {
  __typename: "ClaimModel";
  id: string;
  status: string | null;
  createdDate: any;
}

export interface AddProviderClaim {
  addProviderClaim: AddProviderClaim_addProviderClaim;
}

export interface AddProviderClaimVariables {
  ProviderClaimInput: ProviderClaimInput;
}
