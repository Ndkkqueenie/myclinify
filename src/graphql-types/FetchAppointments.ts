/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppointmentFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FetchAppointments
// ====================================================

export interface FetchAppointments_user_appointments_list {
  __typename: "AppointmentModel";
  id: string;
  facilityName: string | null;
  facilityAddress: string | null;
  specialty: string | null;
  class: string | null;
  reason: string | null;
  type: string;
  appointmentDateTime: any;
  frequency: string | null;
  occurance: string | null;
  remindMe: boolean | null;
  reminderDateTime: any | null;
  reminderDuration: string | null;
  duration: string | null;
  additionalNote: string | null;
  documentUrl: string[] | null;
}

export interface FetchAppointments_user_appointments {
  __typename: "AppointmentResponse";
  totalCount: number;
  list: FetchAppointments_user_appointments_list[];
}

export interface FetchAppointments_user {
  __typename: "UserModel";
  appointments: FetchAppointments_user_appointments;
}

export interface FetchAppointments {
  user: FetchAppointments_user;
}

export interface FetchAppointmentsVariables {
  filterOptions?: AppointmentFilterInput | null;
  id?: string | null;
}
