/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserHospital
// ====================================================

export interface GetUserHospital_user_defaultProfile_personalInformation {
  __typename: "PersonalInformation";
  title: string | null;
  displayPictureUrl: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface GetUserHospital_user_defaultProfile {
  __typename: "ProfileModel";
  clinifyId: string;
  personalInformation: GetUserHospital_user_defaultProfile_personalInformation | null;
}

export interface GetUserHospital_user_hospitalOrganization {
  __typename: "HospitalModel";
  name: string;
}

export interface GetUserHospital_user {
  __typename: "UserModel";
  defaultProfile: GetUserHospital_user_defaultProfile | null;
  hospitalOrganization: GetUserHospital_user_hospitalOrganization;
}

export interface GetUserHospital {
  user: GetUserHospital_user;
}
