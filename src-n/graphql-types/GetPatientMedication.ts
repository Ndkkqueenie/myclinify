/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPatientMedication
// ====================================================

export interface GetPatientMedication_medication_details {
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

export interface GetPatientMedication_medication_dispenseDetails_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface GetPatientMedication_medication_dispenseDetails_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface GetPatientMedication_medication_dispenseDetails {
  __typename: "DispenseDetailsModel";
  id: string;
  dispenseDate: any | null;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
  createdDate: any;
  createdBy: GetPatientMedication_medication_dispenseDetails_createdBy;
  updatedDate: any;
  updatedBy: GetPatientMedication_medication_dispenseDetails_updatedBy | null;
}

export interface GetPatientMedication_medication {
  __typename: "MedicationModel";
  id: string;
  patientType: string | null;
  paymentType: string | null;
  details: GetPatientMedication_medication_details[] | null;
  dispenseDetails: GetPatientMedication_medication_dispenseDetails[] | null;
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

export interface GetPatientMedication {
  medication: GetPatientMedication_medication;
}

export interface GetPatientMedicationVariables {
  id: string;
}
