/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WaitingListInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CheckInPatient
// ====================================================

export interface CheckInPatient_addPatientToWaitingList_assignedTo_personalInformation {
  __typename: "PersonalInformation";
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  gender: Gender | null;
  genoType: string | null;
  title: string | null;
  displayPictureUrl: string | null;
}

export interface CheckInPatient_addPatientToWaitingList_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: CheckInPatient_addPatientToWaitingList_assignedTo_personalInformation | null;
}

export interface CheckInPatient_addPatientToWaitingList_patient_personalInformation {
  __typename: "PersonalInformation";
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  gender: Gender | null;
  genoType: string | null;
  title: string | null;
  displayPictureUrl: string | null;
}

export interface CheckInPatient_addPatientToWaitingList_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface CheckInPatient_addPatientToWaitingList_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: CheckInPatient_addPatientToWaitingList_patient_personalInformation | null;
  user: CheckInPatient_addPatientToWaitingList_patient_user;
}

export interface CheckInPatient_addPatientToWaitingList {
  __typename: "WaitingListModel";
  id: string;
  status: string;
  visitationReason: string | null;
  visitType: string | null;
  arrivalDateTime: any | null;
  waitTime: string | null;
  priority: string | null;
  paymentType: string | null;
  createdDate: any;
  updatedDate: any;
  specialtyAssignedTo: string | null;
  assignedTo: CheckInPatient_addPatientToWaitingList_assignedTo | null;
  patient: CheckInPatient_addPatientToWaitingList_patient | null;
}

export interface CheckInPatient {
  addPatientToWaitingList: CheckInPatient_addPatientToWaitingList;
}

export interface CheckInPatientVariables {
  input: WaitingListInput;
}
