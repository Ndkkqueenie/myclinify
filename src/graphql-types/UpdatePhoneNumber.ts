/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePhoneNumberInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePhoneNumber
// ====================================================

export interface UpdatePhoneNumber_updatePhoneNumber {
  __typename: "UserModel";
  phoneNumber: string;
}

export interface UpdatePhoneNumber {
  updatePhoneNumber: UpdatePhoneNumber_updatePhoneNumber;
}

export interface UpdatePhoneNumberVariables {
  input: UpdatePhoneNumberInput;
}
