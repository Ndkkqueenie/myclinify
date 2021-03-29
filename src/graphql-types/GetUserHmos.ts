/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HmoProfileFilterInput, EmploymentMemberStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserHmos
// ====================================================

export interface GetUserHmos_fetchHmos_list {
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

export interface GetUserHmos_fetchHmos {
  __typename: "HmoProfileResponse";
  totalCount: number;
  list: GetUserHmos_fetchHmos_list[];
}

export interface GetUserHmos {
  fetchHmos: GetUserHmos_fetchHmos;
}

export interface GetUserHmosVariables {
  filterInput?: HmoProfileFilterInput | null;
}
