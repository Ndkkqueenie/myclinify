/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NextOfKinInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddNextOfKin
// ====================================================

export interface AddNextOfKin_addNextOfKinInfo_phoneNumber {
  __typename: "PhoneNumberFields";
  countryName: string | null;
  countryCode: string | null;
  value: string | null;
}

export interface AddNextOfKin_addNextOfKinInfo {
  __typename: "NextOfKinModel";
  id: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  title: string | null;
  middleName: string | null;
  bloodGroup: string | null;
  genoType: string | null;
  phoneNumber: AddNextOfKin_addNextOfKinInfo_phoneNumber;
  email: string | null;
  relationship: string | null;
  occupation: string | null;
  address: string | null;
  country: string | null;
}

export interface AddNextOfKin {
  addNextOfKinInfo: AddNextOfKin_addNextOfKinInfo;
}

export interface AddNextOfKinVariables {
  profileId?: string | null;
  input: NextOfKinInput;
}
