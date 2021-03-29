/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ResetPasscodeInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ChangePassCode
// ====================================================

export interface ChangePassCode_changePasscode {
  __typename: "UserModel";
  id: string;
}

export interface ChangePassCode {
  changePasscode: ChangePassCode_changePasscode;
}

export interface ChangePassCodeVariables {
  resetPasswordInput: ResetPasscodeInput;
}
