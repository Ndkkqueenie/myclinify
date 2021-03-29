/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompleteRegistrationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CompleteRegistration
// ====================================================

export interface CompleteRegistration_completeRegistration {
  __typename: "ProfileModel";
  id: string;
  type: string;
}

export interface CompleteRegistration {
  completeRegistration: CompleteRegistration_completeRegistration;
}

export interface CompleteRegistrationVariables {
  completeRegistrationInput: CompleteRegistrationInput;
}
