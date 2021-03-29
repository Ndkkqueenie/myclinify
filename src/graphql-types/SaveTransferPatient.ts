/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TransferPatientInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveTransferPatient
// ====================================================

export interface SaveTransferPatient_saveTransferPatient {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface SaveTransferPatient {
  saveTransferPatient: SaveTransferPatient_saveTransferPatient;
}

export interface SaveTransferPatientVariables {
  input: TransferPatientInput;
  id: string;
  clinifyId: string;
}
