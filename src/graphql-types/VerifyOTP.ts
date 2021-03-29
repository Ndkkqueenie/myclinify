/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VerifyOtpInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: VerifyOTP
// ====================================================

export interface VerifyOTP_verifyOtp {
  __typename: "VerifyOtpResponse";
  status: string;
  phone: string;
}

export interface VerifyOTP {
  verifyOtp: VerifyOTP_verifyOtp;
}

export interface VerifyOTPVariables {
  verifyOtpInput: VerifyOtpInput;
}
