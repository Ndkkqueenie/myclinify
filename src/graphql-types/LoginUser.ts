/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login {
  __typename: "LoginResponse";
  accessToken: string;
}

export interface LoginUser {
  login: LoginUser_login;
}

export interface LoginUserVariables {
  loginInput: LoginInput;
}
