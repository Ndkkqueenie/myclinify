/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PastSurgeryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddPastSurgery
// ====================================================

export interface AddPastSurgery_addPastSurgeryInfo {
  __typename: "PastSurgeryModel";
  id: string;
  type: string;
  operationDate: any | null;
  additionalNote: string | null;
}

export interface AddPastSurgery {
  addPastSurgeryInfo: AddPastSurgery_addPastSurgeryInfo;
}

export interface AddPastSurgeryVariables {
  profileId?: string | null;
  input: PastSurgeryInput;
}
