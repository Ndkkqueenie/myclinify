/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetEnrollments
// ====================================================

export interface GetEnrollments_users_list {
  __typename: "UserModel";
  id: string;
  email: string | null;
}

export interface GetEnrollments_users {
  __typename: "UsersResponse";
  totalCount: number;
  list: GetEnrollments_users_list[];
}

export interface GetEnrollments {
  users: GetEnrollments_users;
}

export interface GetEnrollmentsVariables {
  filterOptions: UsersFilterInput;
}
