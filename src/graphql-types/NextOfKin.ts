/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NextOfKin
// ====================================================

export interface NextOfKin_phoneNumber {
  __typename: "PhoneNumberFields";
  countryName: string | null;
  countryCode: string | null;
  value: string | null;
}

export interface NextOfKin {
  __typename: "NextOfKinModel";
  id: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  title: string | null;
  middleName: string | null;
  bloodGroup: string | null;
  genoType: string | null;
  phoneNumber: NextOfKin_phoneNumber;
  email: string | null;
  relationship: string | null;
  occupation: string | null;
  address: string | null;
  country: string | null;
}
