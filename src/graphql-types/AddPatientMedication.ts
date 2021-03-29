/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MedicationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddPatientMedication
// ====================================================

export interface AddPatientMedication_addMedication_details {
  __typename: "MedicationDetailsModel";
  datePrescribed: any | null;
  duration: string | null;
  medicationName: string;
  purpose: string | null;
  prescribedBy: string | null;
  administrationMethod: string | null;
  dosage: number | null;
  dosageUnit: string | null;
  type: string | null;
  quantity: number | null;
  startDate: any | null;
  endDate: any | null;
  discontinue: string | null;
  refillNumber: number | null;
  frequency: string | null;
}

export interface AddPatientMedication_addMedication_dispenseDetails_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface AddPatientMedication_addMedication_dispenseDetails_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface AddPatientMedication_addMedication_dispenseDetails {
  __typename: "DispenseDetailsModel";
  id: string;
  dispenseDate: any | null;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
  createdDate: any;
  createdBy: AddPatientMedication_addMedication_dispenseDetails_createdBy;
  updatedDate: any;
  updatedBy: AddPatientMedication_addMedication_dispenseDetails_updatedBy | null;
}

export interface AddPatientMedication_addMedication {
  __typename: "MedicationModel";
  id: string;
  patientType: string | null;
  paymentType: string | null;
  details: AddPatientMedication_addMedication_details[] | null;
  dispenseDetails: AddPatientMedication_addMedication_dispenseDetails[] | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  setReminder: boolean | null;
  reminderStartDate: any | null;
  reminderEndDate: any | null;
  medicationStartTime: string | null;
  medicationEndTime: string | null;
  interval: number | null;
  intervalUnit: string | null;
  remindMe: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface AddPatientMedication {
  addMedication: AddPatientMedication_addMedication;
}

export interface AddPatientMedicationVariables {
  input: MedicationInput;
}
