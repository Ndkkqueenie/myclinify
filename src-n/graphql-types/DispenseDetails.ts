/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DispenseDetails
// ====================================================

export interface DispenseDetails_getDispenseDetails_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface DispenseDetails_getDispenseDetails_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface DispenseDetails_getDispenseDetails {
  __typename: "DispenseDetailsModel";
  id: string;
  dispenseDate: any | null;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
  createdDate: any;
  createdBy: DispenseDetails_getDispenseDetails_createdBy;
  updatedDate: any;
  updatedBy: DispenseDetails_getDispenseDetails_updatedBy | null;
}

export interface DispenseDetails {
  getDispenseDetails: DispenseDetails_getDispenseDetails[];
}

export interface DispenseDetailsVariables {
  recordId: string;
}
