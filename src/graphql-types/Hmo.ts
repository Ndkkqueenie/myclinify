/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmploymentMemberStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: Hmo
// ====================================================

export interface Hmo {
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
