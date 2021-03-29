/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersFilterInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL query operation: LookupPatient
// ====================================================

export interface LookupPatient_users_list_defaultProfile_personalInformation {
  __typename: "PersonalInformation";
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  gender: Gender | null;
  genoType: string | null;
  title: string | null;
  displayPictureUrl: string | null;
}

export interface LookupPatient_users_list_defaultProfile {
  __typename: "ProfileModel";
  id: string;
  clinifyId: string;
  fullName: string | null;
  personalInformation: LookupPatient_users_list_defaultProfile_personalInformation | null;
}

export interface LookupPatient_users_list {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
  defaultProfile: LookupPatient_users_list_defaultProfile | null;
}

export interface LookupPatient_users {
  __typename: "UsersResponse";
  list: LookupPatient_users_list[];
}

export interface LookupPatient {
  users: LookupPatient_users;
}

export interface LookupPatientVariables {
  filterOptions?: UsersFilterInput | null;
}
