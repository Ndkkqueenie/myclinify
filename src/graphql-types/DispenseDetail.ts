/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DispenseDetail
// ====================================================

export interface DispenseDetail_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface DispenseDetail_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface DispenseDetail {
  __typename: "DispenseDetailsModel";
  id: string;
  dispenseDate: any | null;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
  createdDate: any;
  createdBy: DispenseDetail_createdBy;
  updatedDate: any;
  updatedBy: DispenseDetail_updatedBy | null;
}
