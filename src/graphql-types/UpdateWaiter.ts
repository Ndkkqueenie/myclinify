/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WaitingListUpdateInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateWaiter
// ====================================================

export interface UpdateWaiter_updateWaitingList_assignedTo_personalInformation {
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

export interface UpdateWaiter_updateWaitingList_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: UpdateWaiter_updateWaitingList_assignedTo_personalInformation | null;
}

export interface UpdateWaiter_updateWaitingList_patient_personalInformation {
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

export interface UpdateWaiter_updateWaitingList_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface UpdateWaiter_updateWaitingList_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: UpdateWaiter_updateWaitingList_patient_personalInformation | null;
  user: UpdateWaiter_updateWaitingList_patient_user;
}

export interface UpdateWaiter_updateWaitingList {
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
  assignedTo: UpdateWaiter_updateWaitingList_assignedTo | null;
  patient: UpdateWaiter_updateWaitingList_patient | null;
}

export interface UpdateWaiter {
  updateWaitingList: UpdateWaiter_updateWaitingList;
}

export interface UpdateWaiterVariables {
  input: WaitingListUpdateInput;
  id: string;
}
