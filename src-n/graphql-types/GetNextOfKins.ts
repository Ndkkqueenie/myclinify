/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetNextOfKins
// ====================================================

export interface GetNextOfKins_getNextOfKins_list_phoneNumber {
  __typename: "PhoneNumberFields";
  countryName: string | null;
  countryCode: string | null;
  value: string | null;
}

export interface GetNextOfKins_getNextOfKins_list {
  __typename: "NextOfKinModel";
  id: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  title: string | null;
  middleName: string | null;
  bloodGroup: string | null;
  genoType: string | null;
  phoneNumber: GetNextOfKins_getNextOfKins_list_phoneNumber;
  email: string | null;
  relationship: string | null;
  occupation: string | null;
  address: string | null;
  country: string | null;
}

export interface GetNextOfKins_getNextOfKins {
  __typename: "NextOfKinResponse";
  totalCount: number;
  list: GetNextOfKins_getNextOfKins_list[];
}

export interface GetNextOfKins {
  getNextOfKins: GetNextOfKins_getNextOfKins;
}

export interface GetNextOfKinsVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
