/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SurgeryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateSurgery
// ====================================================

export interface UpdateSurgery_updateSurgery {
  __typename: "SurgeryModel";
  id: string;
  surgeryDate: any | null;
  duration: string | null;
  type: string;
  rank: string | null;
  reason: string | null;
  assistantSurgeon: string | null;
  requestedBy: string | null;
  specialty: string | null;
  facilityName: string | null;
  facilityAddress: string | null;
  operatedBy: string | null;
  priority: string | null;
  patientType: string | null;
  patientConsent: string | null;
  paymentType: string | null;
  operatingRoomNurse: string | null;
  anesthetistName: string | null;
  anesthesia: string | null;
  operationNote: string | null;
  postOperationNote: string | null;
  documentUrl: string[] | null;
}

export interface UpdateSurgery {
  updateSurgery: UpdateSurgery_updateSurgery;
}

export interface UpdateSurgeryVariables {
  input: SurgeryInput;
  id: string;
}
