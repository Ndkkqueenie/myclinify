/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveAppointments
// ====================================================

export interface ArchiveAppointments_archiveAppointments {
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

export interface ArchiveAppointments {
  archiveAppointments: ArchiveAppointments_archiveAppointments[];
}

export interface ArchiveAppointmentsVariables {
  ids: string[];
  archive?: boolean | null;
}
