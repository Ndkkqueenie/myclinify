/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VerifyPassCodeForUpdatePhoneNumberInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: VerifyPassCodeForUpdatePhoneNumber
// ====================================================

export interface VerifyPassCodeForUpdatePhoneNumber_verifyPassCodeForUpdatePhoneNumber {
  __typename: "VerifyPassCodeForUpdatePhoneNumberResponse";
  message: string;
}

export interface VerifyPassCodeForUpdatePhoneNumber {
  verifyPassCodeForUpdatePhoneNumber: VerifyPassCodeForUpdatePhoneNumber_verifyPassCodeForUpdatePhoneNumber;
}

export interface VerifyPassCodeForUpdatePhoneNumberVariables {
  input: VerifyPassCodeForUpdatePhoneNumberInput;
}
