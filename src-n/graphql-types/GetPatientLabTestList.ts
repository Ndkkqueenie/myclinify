/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LabTestFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPatientLabTestList
// ====================================================

export interface GetPatientLabTestList_user_lab_tests_list_testInfo {
  __typename: "LabTestFields";
  testName: string;
  testCategory: string | null;
}

export interface GetPatientLabTestList_user_lab_tests_list {
  __typename: "LabTestModel";
  id: string;
  testDate: any | null;
  specialty: string | null;
  requestDate: any | null;
  requestType: string;
  patientType: string;
  duration: string | null;
  testInfo: GetPatientLabTestList_user_lab_tests_list_testInfo[];
  orderedBy: string | null;
  collectionDate: any | null;
  collectedBy: string | null;
  result: string | null;
  labName: string | null;
  labAddress: string | null;
  priority: string | null;
  pathologist: string | null;
  pathologistReport: string | null;
  verifiedBy: string | null;
  performedBy: string | null;
  specimenCollected: string | null;
  range: string | null;
  resultDate: any | null;
  additionalNote: string | null;
  documentUrl: string[] | null;
}

export interface GetPatientLabTestList_user_lab_tests {
  __typename: "LabTestResponse";
  totalCount: number;
  list: GetPatientLabTestList_user_lab_tests_list[];
}

export interface GetPatientLabTestList_user {
  __typename: "UserModel";
  lab_tests: GetPatientLabTestList_user_lab_tests;
}

export interface GetPatientLabTestList {
  user: GetPatientLabTestList_user;
}

export interface GetPatientLabTestListVariables {
  filterOptions?: LabTestFilterInput | null;
  id?: string | null;
}
