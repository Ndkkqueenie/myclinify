/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CheckoutWaiters
// ====================================================

export interface CheckoutWaiters_checkoutWaiters_assignedTo_personalInformation {
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

export interface CheckoutWaiters_checkoutWaiters_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: CheckoutWaiters_checkoutWaiters_assignedTo_personalInformation | null;
}

export interface CheckoutWaiters_checkoutWaiters_patient_personalInformation {
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

export interface CheckoutWaiters_checkoutWaiters_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface CheckoutWaiters_checkoutWaiters_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: CheckoutWaiters_checkoutWaiters_patient_personalInformation | null;
  user: CheckoutWaiters_checkoutWaiters_patient_user;
}

export interface CheckoutWaiters_checkoutWaiters {
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
  assignedTo: CheckoutWaiters_checkoutWaiters_assignedTo | null;
  patient: CheckoutWaiters_checkoutWaiters_patient | null;
}

export interface CheckoutWaiters {
  checkoutWaiters: CheckoutWaiters_checkoutWaiters[];
}

export interface CheckoutWaitersVariables {
  ids: string[];
}
