/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DischargePatientInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateDischargePatient
// ====================================================

export interface UpdateDischargePatient_updateDischargePatient {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface UpdateDischargePatient {
  updateDischargePatient: UpdateDischargePatient_updateDischargePatient;
}

export interface UpdateDischargePatientVariables {
  input: DischargePatientInput;
  id: string;
}
