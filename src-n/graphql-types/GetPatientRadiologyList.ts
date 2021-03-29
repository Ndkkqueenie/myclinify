/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RadiologyFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPatientRadiologyList
// ====================================================

export interface GetPatientRadiologyList_user_radiology_list {
  __typename: "RadiologyModel";
  id: string;
  requestDate: any | null;
  requestType: string | null;
  priority: string | null;
  requester: string | null;
  patientType: string | null;
  specialty: string | null;
  examType: string[] | null;
  clinicalNote: string | null;
  examDate: any | null;
  duration: string | null;
  radiologist: string | null;
  paymentType: string | null;
  radiologyName: string | null;
  radiologyAddress: string | null;
  report: string | null;
  impression: string | null;
  documentUrl: string[] | null;
}

export interface GetPatientRadiologyList_user_radiology {
  __typename: "RadiologyResponse";
  totalCount: number;
  list: GetPatientRadiologyList_user_radiology_list[];
}

export interface GetPatientRadiologyList_user {
  __typename: "UserModel";
  radiology: GetPatientRadiologyList_user_radiology;
}

export interface GetPatientRadiologyList {
  user: GetPatientRadiologyList_user;
}

export interface GetPatientRadiologyListVariables {
  filterOptions: RadiologyFilterInput;
  id?: string | null;
}
