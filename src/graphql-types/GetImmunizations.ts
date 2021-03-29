/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ImmunizationFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetImmunizations
// ====================================================

export interface GetImmunizations_user_immunizations_list {
  __typename: "ImmunizationModel";
  id: string;
  administeredDate: any | null;
  duration: string | null;
  immunizationName: string;
  administratorName: string | null;
  nextAppointmentDateTime: any | null;
  batchNumber: string | null;
  expiryDate: any | null;
  remindMe: boolean | null;
  quantity: number | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  dosage: number | null;
  dosageUnit: string | null;
  method: string | null;
  additionalNote: string | null;
  documentUrl: string[] | null;
}

export interface GetImmunizations_user_immunizations {
  __typename: "ImmunizationResponse";
  totalCount: number;
  list: GetImmunizations_user_immunizations_list[];
}

export interface GetImmunizations_user {
  __typename: "UserModel";
  immunizations: GetImmunizations_user_immunizations;
}

export interface GetImmunizations {
  user: GetImmunizations_user;
}

export interface GetImmunizationsVariables {
  filterOptions?: ImmunizationFilterInput | null;
  id?: string | null;
}
