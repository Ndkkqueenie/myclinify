/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RadiologyInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePatientRadiology
// ====================================================

export interface UpdatePatientRadiology_updateRadiology {
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

export interface UpdatePatientRadiology {
  updateRadiology: UpdatePatientRadiology_updateRadiology;
}

export interface UpdatePatientRadiologyVariables {
  input: RadiologyInput;
  id: string;
}
