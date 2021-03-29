/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DischargePatientInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveDischargePatient
// ====================================================

export interface SaveDischargePatient_saveDischargePatient {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface SaveDischargePatient {
  saveDischargePatient: SaveDischargePatient_saveDischargePatient;
}

export interface SaveDischargePatientVariables {
  input: DischargePatientInput;
  id: string;
  clinifyId: string;
}
