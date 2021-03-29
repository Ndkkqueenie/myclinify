/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WaitingListFilterInput, Gender } from "./globalTypes";

// ====================================================
// GraphQL query operation: WaitingList
// ====================================================

export interface WaitingList_waitingList_list_assignedTo_personalInformation {
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

export interface WaitingList_waitingList_list_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: WaitingList_waitingList_list_assignedTo_personalInformation | null;
}

export interface WaitingList_waitingList_list_patient_personalInformation {
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

export interface WaitingList_waitingList_list_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface WaitingList_waitingList_list_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: WaitingList_waitingList_list_patient_personalInformation | null;
  user: WaitingList_waitingList_list_patient_user;
}

export interface WaitingList_waitingList_list {
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
  assignedTo: WaitingList_waitingList_list_assignedTo | null;
  patient: WaitingList_waitingList_list_patient | null;
}

export interface WaitingList_waitingList {
  __typename: "WaitingListResponse";
  totalCount: number;
  list: WaitingList_waitingList_list[];
}

export interface WaitingList {
  waitingList: WaitingList_waitingList;
}

export interface WaitingListVariables {
  filterOptions: WaitingListFilterInput;
}
