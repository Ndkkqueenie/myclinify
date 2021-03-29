/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveImmunizations
// ====================================================

export interface ArchiveImmunizations_archiveImmunizations {
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

export interface ArchiveImmunizations {
  archiveImmunizations: ArchiveImmunizations_archiveImmunizations[];
}

export interface ArchiveImmunizationsVariables {
  ids: string[];
  archive?: boolean | null;
}
