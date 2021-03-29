/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResendOTP
// ====================================================

export interface ResendOTP_resendOtp {
  __typename: "ResendOtpResponse";
  message: string;
}

export interface ResendOTP {
  resendOtp: ResendOTP_resendOtp;
}

export interface ResendOTPVariables {
  phoneNumber: string;
}
