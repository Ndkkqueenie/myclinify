/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveVitals
// ====================================================

export interface ArchiveVitals_archiveVitals {
  __typename: "VitalModel";
  id: string;
  hospitalName: string | null;
  hospitalAddress: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface ArchiveVitals {
  archiveVitals: ArchiveVitals_archiveVitals[];
}

export interface ArchiveVitalsVariables {
  ids: string[];
  archive?: boolean | null;
}
