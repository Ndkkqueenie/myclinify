/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClaimFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetClaims
// ====================================================

export interface GetClaims_claims_list_coverage {
  __typename: "HmoProfile";
  memberNumber: string | null;
  primaryProviderName: string | null;
}

export interface GetClaims_claims_list_patient_personalInformation {
  __typename: "PersonalInformation";
  firstName: string | null;
  lastName: string | null;
}

export interface GetClaims_claims_list_patient {
  __typename: "ProfileModel";
  personalInformation: GetClaims_claims_list_patient_personalInformation | null;
}

export interface GetClaims_claims_list {
  __typename: "ClaimModel";
  id: string;
  status: string | null;
  claimType: string | null;
  serviceCategory: string | null;
  coverage: GetClaims_claims_list_coverage | null;
  grandTotal: number | null;
  createdDate: any;
  patient: GetClaims_claims_list_patient;
}

export interface GetClaims_claims {
  __typename: "ClaimResponse";
  totalCount: number;
  list: GetClaims_claims_list[];
}

export interface GetClaims {
  claims: GetClaims_claims;
}

export interface GetClaimsVariables {
  filterOptions: ClaimFilterInput;
}
