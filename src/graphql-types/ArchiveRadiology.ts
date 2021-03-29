/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveRadiology
// ====================================================

export interface ArchiveRadiology_archiveRadiology {
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

export interface ArchiveRadiology {
  archiveRadiology: ArchiveRadiology_archiveRadiology[];
}

export interface ArchiveRadiologyVariables {
  ids: string[];
  archive?: boolean | null;
}
