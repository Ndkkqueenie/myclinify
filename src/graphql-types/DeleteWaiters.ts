/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteWaiters
// ====================================================

export interface DeleteWaiters_deleteWaitingListItems_assignedTo_personalInformation {
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

export interface DeleteWaiters_deleteWaitingListItems_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: DeleteWaiters_deleteWaitingListItems_assignedTo_personalInformation | null;
}

export interface DeleteWaiters_deleteWaitingListItems_patient_personalInformation {
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

export interface DeleteWaiters_deleteWaitingListItems_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface DeleteWaiters_deleteWaitingListItems_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: DeleteWaiters_deleteWaitingListItems_patient_personalInformation | null;
  user: DeleteWaiters_deleteWaitingListItems_patient_user;
}

export interface DeleteWaiters_deleteWaitingListItems {
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
  assignedTo: DeleteWaiters_deleteWaitingListItems_assignedTo | null;
  patient: DeleteWaiters_deleteWaitingListItems_patient | null;
}

export interface DeleteWaiters {
  deleteWaitingListItems: DeleteWaiters_deleteWaitingListItems[];
}

export interface DeleteWaitersVariables {
  ids: string[];
}
