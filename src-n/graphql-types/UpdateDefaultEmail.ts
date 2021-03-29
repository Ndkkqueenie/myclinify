/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateDefaultEmailInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateDefaultEmail
// ====================================================

export interface UpdateDefaultEmail_updateDefaultEmail {
  __typename: "UserModel";
  email: string | null;
}

export interface UpdateDefaultEmail {
  updateDefaultEmail: UpdateDefaultEmail_updateDefaultEmail;
}

export interface UpdateDefaultEmailVariables {
  updateDefaultEmailInput: UpdateDefaultEmailInput;
}
