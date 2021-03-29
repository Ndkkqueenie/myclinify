/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DispenseDetailsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveDispenseDetails
// ====================================================

export interface SaveDispenseDetails_saveDispenseDetail_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface SaveDispenseDetails_saveDispenseDetail_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface SaveDispenseDetails_saveDispenseDetail {
  __typename: "DispenseDetailsModel";
  id: string;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseDate: any | null;
  createdDate: any;
  updatedDate: any;
  createdBy: SaveDispenseDetails_saveDispenseDetail_createdBy;
  updatedBy: SaveDispenseDetails_saveDispenseDetail_updatedBy | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
}

export interface SaveDispenseDetails {
  saveDispenseDetail: SaveDispenseDetails_saveDispenseDetail;
}

export interface SaveDispenseDetailsVariables {
  id: string;
  input: DispenseDetailsInput;
}
