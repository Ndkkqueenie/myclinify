/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TransferPatientInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTransferPatient
// ====================================================

export interface UpdateTransferPatient_updateTransferPatient {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface UpdateTransferPatient {
  updateTransferPatient: UpdateTransferPatient_updateTransferPatient;
}

export interface UpdateTransferPatientVariables {
  input: TransferPatientInput;
  id: string;
}
