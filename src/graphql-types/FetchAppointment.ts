/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchAppointment
// ====================================================

export interface FetchAppointment_appointment {
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

export interface FetchAppointment {
  appointment: FetchAppointment_appointment;
}

export interface FetchAppointmentVariables {
  id: string;
}
