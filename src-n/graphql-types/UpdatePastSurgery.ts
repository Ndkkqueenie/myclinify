/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PastSurgeryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePastSurgery
// ====================================================

export interface UpdatePastSurgery_updatePastSurgeryInfo {
  __typename: "PastSurgeryModel";
  id: string;
  type: string;
  operationDate: any | null;
  additionalNote: string | null;
}

export interface UpdatePastSurgery {
  updatePastSurgeryInfo: UpdatePastSurgery_updatePastSurgeryInfo;
}

export interface UpdatePastSurgeryVariables {
  input: PastSurgeryInput;
  id: string;
  profileId?: string | null;
}
