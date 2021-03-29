/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ImmunizationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateImmunization
// ====================================================

export interface UpdateImmunization_updateImmunization {
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

export interface UpdateImmunization {
  updateImmunization: UpdateImmunization_updateImmunization;
}

export interface UpdateImmunizationVariables {
  id: string;
  input: ImmunizationInput;
}
