/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user_defaultProfile_personalInformation_secondaryPhoneNumber {
  __typename: "PhoneNumberFields";
  value: string | null;
  countryCode: string | null;
  countryName: string | null;
}

export interface GetUser_user_defaultProfile_personalInformation {
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
  secondaryPhoneNumber: GetUser_user_defaultProfile_personalInformation_secondaryPhoneNumber | null;
}

export interface GetUser_user_defaultProfile_backgroundInformation {
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

export interface GetUser_user_defaultProfile {
  __typename: "ProfileModel";
  id: string;
  clinifyId: string;
  active: boolean;
  isDefault: boolean;
  createdDate: any;
  updatedDate: any;
  type: string;
  personalInformation: GetUser_user_defaultProfile_personalInformation | null;
  backgroundInformation: GetUser_user_defaultProfile_backgroundInformation | null;
}

export interface GetUser_user {
  __typename: "UserModel";
  email: string | null;
  phoneNumber: string;
  country: string;
  defaultProfile: GetUser_user_defaultProfile | null;
}

export interface GetUser {
  user: GetUser_user;
}
