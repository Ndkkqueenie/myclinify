/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckInOrOutStatus, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CheckWaitersInOrOut
// ====================================================

export interface CheckWaitersInOrOut_checkWaitersInOrOut_assignedTo_personalInformation {
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

export interface CheckWaitersInOrOut_checkWaitersInOrOut_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: CheckWaitersInOrOut_checkWaitersInOrOut_assignedTo_personalInformation | null;
}

export interface CheckWaitersInOrOut_checkWaitersInOrOut_patient_personalInformation {
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

export interface CheckWaitersInOrOut_checkWaitersInOrOut_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface CheckWaitersInOrOut_checkWaitersInOrOut_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: CheckWaitersInOrOut_checkWaitersInOrOut_patient_personalInformation | null;
  user: CheckWaitersInOrOut_checkWaitersInOrOut_patient_user;
}

export interface CheckWaitersInOrOut_checkWaitersInOrOut {
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
  assignedTo: CheckWaitersInOrOut_checkWaitersInOrOut_assignedTo | null;
  patient: CheckWaitersInOrOut_checkWaitersInOrOut_patient | null;
}

export interface CheckWaitersInOrOut {
  checkWaitersInOrOut: CheckWaitersInOrOut_checkWaitersInOrOut[];
}

export interface CheckWaitersInOrOutVariables {
  ids: string[];
  status: CheckInOrOutStatus;
}
