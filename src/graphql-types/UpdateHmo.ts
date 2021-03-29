/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HmoProfileInput, EmploymentMemberStatus } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateHmo
// ====================================================

export interface UpdateHmo_updateMyHmos {
  __typename: "HmoProfileModel";
  id: string;
  createdDate: any;
  updatedDate: any;
  memberPlan: string | null;
  memberNumber: string | null;
  memberStatus: EmploymentMemberStatus | null;
  employeeNumber: string | null;
  memberStartDate: any | null;
  companyName: string | null;
  primaryProviderName: string | null;
  secondaryProviderName: string | null;
  tertiaryProviderName: string | null;
  primaryProviderAddress: string | null;
  secondaryProviderAddress: string | null;
  tertiaryProviderAddress: string | null;
  hmoProvider: string | null;
}

export interface UpdateHmo {
  updateMyHmos: UpdateHmo_updateMyHmos;
}

export interface UpdateHmoVariables {
  id: string;
  input: HmoProfileInput;
}
