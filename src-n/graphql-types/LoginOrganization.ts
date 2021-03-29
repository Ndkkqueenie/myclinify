/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CorporateLoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: LoginOrganization
// ====================================================

export interface LoginOrganization_corporateLogin {
  __typename: "LoginResponse";
  accessToken: string;
}

export interface LoginOrganization {
  corporateLogin: LoginOrganization_corporateLogin;
}

export interface LoginOrganizationVariables {
  loginInput: CorporateLoginInput;
}
