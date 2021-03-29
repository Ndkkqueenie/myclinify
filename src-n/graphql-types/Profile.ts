/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL fragment: Profile
// ====================================================

export interface Profile_personalInformation_secondaryPhoneNumber {
  __typename: "PhoneNumberFields";
  value: string | null;
  countryCode: string | null;
  countryName: string | null;
}

export interface Profile_personalInformation {
  __typename: "PersonalInformation";
  title: string | null;
  displayPictureUrl: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  genoType: string | null;
  weight: number | null;
  weightUnit: string | null;
  height: number | null;
  heightUnit: string | null;
  address: string | null;
  secondaryPhoneNumber: Profile_personalInformation_secondaryPhoneNumber | null;
}

export interface Profile_backgroundInformation {
  __typename: "backgroundInformation";
  maritalStatus: string | null;
  numberOfChildren: number | null;
  education: string | null;
  state: string | null;
  religion: string | null;
  occupation: string | null;
  salaryRange: string | null;
  bloodDonor: string | null;
}

export interface Profile {
  __typename: "ProfileModel";
  id: string;
  clinifyId: string;
  active: boolean;
  isDefault: boolean;
  createdDate: any;
  updatedDate: any;
  type: string;
  personalInformation: Profile_personalInformation | null;
  backgroundInformation: Profile_backgroundInformation | null;
}
