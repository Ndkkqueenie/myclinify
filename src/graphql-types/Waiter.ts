/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL fragment: Waiter
// ====================================================

export interface Waiter_assignedTo_personalInformation {
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

export interface Waiter_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: Waiter_assignedTo_personalInformation | null;
}

export interface Waiter_patient_personalInformation {
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

export interface Waiter_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface Waiter_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: Waiter_patient_personalInformation | null;
  user: Waiter_patient_user;
}

export interface Waiter {
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
  assignedTo: Waiter_assignedTo | null;
  patient: Waiter_patient | null;
}
