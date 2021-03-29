/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileDetailsInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProfileDetails
// ====================================================

export interface UpdateProfileDetails_updateProfileDetails_personalInformation_secondaryPhoneNumber {
  __typename: "PhoneNumberFields";
  value: string | null;
  countryCode: string | null;
  countryName: string | null;
}

export interface UpdateProfileDetails_updateProfileDetails_personalInformation {
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
  secondaryPhoneNumber: UpdateProfileDetails_updateProfileDetails_personalInformation_secondaryPhoneNumber | null;
}

export interface UpdateProfileDetails_updateProfileDetails_backgroundInformation {
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

export interface UpdateProfileDetails_updateProfileDetails {
  __typename: "ProfileModel";
  id: string;
  clinifyId: string;
  active: boolean;
  isDefault: boolean;
  createdDate: any;
  updatedDate: any;
  type: string;
  personalInformation: UpdateProfileDetails_updateProfileDetails_personalInformation | null;
  backgroundInformation: UpdateProfileDetails_updateProfileDetails_backgroundInformation | null;
}

export interface UpdateProfileDetails {
  updateProfileDetails: UpdateProfileDetails_updateProfileDetails;
}

export interface UpdateProfileDetailsVariables {
  input: ProfileDetailsInput;
}
