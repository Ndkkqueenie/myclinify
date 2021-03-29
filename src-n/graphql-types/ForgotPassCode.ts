/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ForgotPasscodeInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ForgotPassCode
// ====================================================

export interface ForgotPassCode_forgotPasscode {
  __typename: "UserModel";
  id: string;
}

export interface ForgotPassCode {
  forgotPasscode: ForgotPassCode_forgotPasscode;
}

export interface ForgotPassCodeVariables {
  forgotPasscodeInput: ForgotPasscodeInput;
}
