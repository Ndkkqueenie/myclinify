/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompleteSignupInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CompleteSignupUser
// ====================================================

export interface CompleteSignupUser_completeSignup {
  __typename: "LoginResponse";
  accessToken: string;
  hasProfile: boolean;
}

export interface CompleteSignupUser {
  completeSignup: CompleteSignupUser_completeSignup;
}

export interface CompleteSignupUserVariables {
  completeRegistrationInput: CompleteSignupInput;
}
