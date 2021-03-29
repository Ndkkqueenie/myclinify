/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserHmo
// ====================================================

export interface GetUserHmo_user_defaultProfile_personalInformation {
  __typename: "PersonalInformation";
  displayPictureUrl: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface GetUserHmo_user_defaultProfile {
  __typename: "ProfileModel";
  personalInformation: GetUserHmo_user_defaultProfile_personalInformation | null;
}

export interface GetUserHmo_user_hmoOrganization {
  __typename: "HmoProviderModel";
  name: string;
}

export interface GetUserHmo_user {
  __typename: "UserModel";
  defaultProfile: GetUserHmo_user_defaultProfile | null;
  hmoOrganization: GetUserHmo_user_hmoOrganization;
}

export interface GetUserHmo {
  user: GetUserHmo_user;
}
