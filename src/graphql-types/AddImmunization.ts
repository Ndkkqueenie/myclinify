/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewImmunizationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddImmunization
// ====================================================

export interface AddImmunization_addImmunization {
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

export interface AddImmunization {
  addImmunization: AddImmunization_addImmunization;
}

export interface AddImmunizationVariables {
  input: NewImmunizationInput;
}
