/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DispenseDetailsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateDispenseDetail
// ====================================================

export interface UpdateDispenseDetail_updateDispenseDetails_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface UpdateDispenseDetail_updateDispenseDetails_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface UpdateDispenseDetail_updateDispenseDetails {
  __typename: "DispenseDetailsModel";
  id: string;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseDate: any | null;
  createdDate: any;
  updatedDate: any;
  createdBy: UpdateDispenseDetail_updateDispenseDetails_createdBy;
  updatedBy: UpdateDispenseDetail_updateDispenseDetails_updatedBy | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
}

export interface UpdateDispenseDetail {
  updateDispenseDetails: UpdateDispenseDetail_updateDispenseDetails;
}

export interface UpdateDispenseDetailVariables {
  id: string;
  input: DispenseDetailsInput;
}
