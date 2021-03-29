/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegistrationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SignupUser
// ====================================================

export interface SignupUser_signup {
  __typename: "UserModel";
  phoneNumber: string;
  country: string;
}

export interface SignupUser {
  signup: SignupUser_signup;
}

export interface SignupUserVariables {
  registrationInput: RegistrationInput;
}
