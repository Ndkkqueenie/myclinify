/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NextOfKinInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateNextOfKin
// ====================================================

export interface UpdateNextOfKin_updateNextOfKinInfo_phoneNumber {
  __typename: "PhoneNumberFields";
  countryName: string | null;
  countryCode: string | null;
  value: string | null;
}

export interface UpdateNextOfKin_updateNextOfKinInfo {
  __typename: "NextOfKinModel";
  id: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  title: string | null;
  middleName: string | null;
  bloodGroup: string | null;
  genoType: string | null;
  phoneNumber: UpdateNextOfKin_updateNextOfKinInfo_phoneNumber;
  email: string | null;
  relationship: string | null;
  occupation: string | null;
  address: string | null;
  country: string | null;
}

export interface UpdateNextOfKin {
  updateNextOfKinInfo: UpdateNextOfKin_updateNextOfKinInfo;
}

export interface UpdateNextOfKinVariables {
  input: NextOfKinInput;
  id: string;
  profileId?: string | null;
}
