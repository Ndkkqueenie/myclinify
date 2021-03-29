import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const APPOINTMENT_FIELDS = gql`
  fragment Appointment on AppointmentModel {
    id
    facilityName
    facilityAddress
    specialty
    class
    reason
    type
    appointmentDateTime
    frequency
    occurance
    remindMe
    reminderDateTime
    reminderDuration
    duration
    additionalNote
    documentUrl
    createdDate
    updatedDate
  }
`;

export const FETCH_APPOINTMENTS = gql`
  query FetchAppointments($filterOptions: AppointmentFilterInput, $id: String) {
    user(id: $id) {
      appointments(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Appointment
        }
      }
    }
  }
  ${APPOINTMENT_FIELDS}
`;

export const FETCH_APPOINTMENT = gql`
  query FetchAppointment($id: String!) {
    appointment(id: $id) {
     ...Appointment
     ${AUDIT_FIELDS}
    }
  }
  ${APPOINTMENT_FIELDS}
`;

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment($input: NewAppointmentInput!) {
    addAppointment(appointment: $input) {
      ...Appointment
       ${AUDIT_FIELDS}
    }
  }
  ${APPOINTMENT_FIELDS}
`;

export const UPDATE_APPOINTMENT = gql`
  mutation UpdateAppointment($id: String!, $input: AppointmentInput!) {
    updateAppointment(id: $id, appointment: $input) {
      ...Appointment
      ${AUDIT_FIELDS}
    }
  }
  ${APPOINTMENT_FIELDS}
`;

export const DELETE_APPOINTMENT = gql`
  mutation DeleteAppointments($ids: [String!]!) {
    deleteAppointments(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_APPOINTMENT = gql`
  mutation ArchiveAppointments($ids: [String!]!, $archive: Boolean) {
    archiveAppointments(ids: $ids, archive: $archive) {
      ...Appointment
      ${AUDIT_FIELDS}
    }
  }
  ${APPOINTMENT_FIELDS}
`;
