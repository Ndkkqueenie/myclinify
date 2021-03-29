/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LabTest
// ====================================================

export interface LabTest_testInfo {
  __typename: "LabTestFields";
  testName: string;
  testCategory: string | null;
}

export interface LabTest {
  __typename: "LabTestModel";
  id: string;
  testDate: any | null;
  specialty: string | null;
  requestDate: any | null;
  requestType: string;
  patientType: string;
  duration: string | null;
  testInfo: LabTest_testInfo[];
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
