/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ArchiveWaiters
// ====================================================

export interface ArchiveWaiters_archiveWaitingListItems_assignedTo_personalInformation {
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

export interface ArchiveWaiters_archiveWaitingListItems_assignedTo {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: ArchiveWaiters_archiveWaitingListItems_assignedTo_personalInformation | null;
}

export interface ArchiveWaiters_archiveWaitingListItems_patient_personalInformation {
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

export interface ArchiveWaiters_archiveWaitingListItems_patient_user {
  __typename: "UserModel";
  id: string;
  email: string | null;
  phoneNumber: string;
  country: string;
}

export interface ArchiveWaiters_archiveWaitingListItems_patient {
  __typename: "ProfileModel";
  id: string;
  fullName: string | null;
  clinifyId: string;
  personalInformation: ArchiveWaiters_archiveWaitingListItems_patient_personalInformation | null;
  user: ArchiveWaiters_archiveWaitingListItems_patient_user;
}

export interface ArchiveWaiters_archiveWaitingListItems {
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
  assignedTo: ArchiveWaiters_archiveWaitingListItems_assignedTo | null;
  patient: ArchiveWaiters_archiveWaitingListItems_patient | null;
}

export interface ArchiveWaiters {
  archiveWaitingListItems: ArchiveWaiters_archiveWaitingListItems[];
}

export interface ArchiveWaitersVariables {
  ids: string[];
  archive: boolean;
}
