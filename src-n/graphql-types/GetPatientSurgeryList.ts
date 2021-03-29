/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SurgeryFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPatientSurgeryList
// ====================================================

export interface GetPatientSurgeryList_user_surgeries_list {
  __typename: "SurgeryModel";
  id: string;
  surgeryDate: any | null;
  duration: string | null;
  type: string;
  rank: string | null;
  reason: string | null;
  assistantSurgeon: string | null;
  requestedBy: string | null;
  specialty: string | null;
  facilityName: string | null;
  facilityAddress: string | null;
  operatedBy: string | null;
  priority: string | null;
  patientType: string | null;
  patientConsent: string | null;
  paymentType: string | null;
  operatingRoomNurse: string | null;
  anesthetistName: string | null;
  anesthesia: string | null;
  operationNote: string | null;
  postOperationNote: string | null;
  documentUrl: string[] | null;
}

export interface GetPatientSurgeryList_user_surgeries {
  __typename: "SurgeryResponse";
  totalCount: number;
  list: GetPatientSurgeryList_user_surgeries_list[];
}

export interface GetPatientSurgeryList_user {
  __typename: "UserModel";
  surgeries: GetPatientSurgeryList_user_surgeries;
}

export interface GetPatientSurgeryList {
  user: GetPatientSurgeryList_user;
}

export interface GetPatientSurgeryListVariables {
  filterOptions: SurgeryFilterInput;
  id?: string | null;
}
