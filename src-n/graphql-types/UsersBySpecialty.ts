/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: UsersBySpecialty
// ====================================================

export interface UsersBySpecialty_users_list_defaultProfile {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
}

export interface UsersBySpecialty_users_list {
  __typename: "UserModel";
  defaultProfile: UsersBySpecialty_users_list_defaultProfile | null;
}

export interface UsersBySpecialty_users {
  __typename: "UsersResponse";
  list: UsersBySpecialty_users_list[];
}

export interface UsersBySpecialty {
  users: UsersBySpecialty_users;
}

export interface UsersBySpecialtyVariables {
  filterOptions?: UsersFilterInput | null;
}
