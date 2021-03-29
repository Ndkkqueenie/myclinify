/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MedFilterOptions } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPatientMedicationList
// ====================================================

export interface GetPatientMedicationList_user_medications_list_details {
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

export interface GetPatientMedicationList_user_medications_list_dispenseDetails_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface GetPatientMedicationList_user_medications_list_dispenseDetails_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface GetPatientMedicationList_user_medications_list_dispenseDetails {
  __typename: "DispenseDetailsModel";
  id: string;
  dispenseDate: any | null;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
  createdDate: any;
  createdBy: GetPatientMedicationList_user_medications_list_dispenseDetails_createdBy;
  updatedDate: any;
  updatedBy: GetPatientMedicationList_user_medications_list_dispenseDetails_updatedBy | null;
}

export interface GetPatientMedicationList_user_medications_list {
  __typename: "MedicationModel";
  id: string;
  patientType: string | null;
  paymentType: string | null;
  details: GetPatientMedicationList_user_medications_list_details[] | null;
  dispenseDetails: GetPatientMedicationList_user_medications_list_dispenseDetails[] | null;
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

export interface GetPatientMedicationList_user_medications {
  __typename: "MedicationResponse";
  totalCount: number;
  list: GetPatientMedicationList_user_medications_list[];
}

export interface GetPatientMedicationList_user {
  __typename: "UserModel";
  medications: GetPatientMedicationList_user_medications;
}

export interface GetPatientMedicationList {
  user: GetPatientMedicationList_user;
}

export interface GetPatientMedicationListVariables {
  filterOptions?: MedFilterOptions | null;
  id?: string | null;
}
