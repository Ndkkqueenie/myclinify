/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserProfile
// ====================================================

export interface GetUserProfile_user_defaultProfile {
  __typename: "ProfileModel";
  type: string;
}

export interface GetUserProfile_user {
  __typename: "UserModel";
  email: string | null;
  phoneNumber: string;
  defaultProfile: GetUserProfile_user_defaultProfile | null;
}

export interface GetUserProfile {
  user: GetUserProfile_user;
}

export interface GetUserProfileVariables {
  id?: string | null;
}
