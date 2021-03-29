import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const CONSULTATION_FIELDS = gql`
  fragment Consultation on ConsultationModel {
    id
    consultationDateTime
    duration
    doctorName
    priority
    specialty
    class
    patientType
    paymentType
    clinicName
    clinicAddress
    complaint
    complaintHistory
    systemReview
    physicalExam
    treatmentPlan
    provisionalDiagnosis
    finalDiagnosis
    documentUrl
    createdDate
    updatedDate
  }
`;

export const CONSULTATION_LINKING_FIELDS = gql`
  fragment ConsultationLinking on ConsultationModel {
    allergies {
      id
    }
    labTests {
      id
    }
    medications {
      id
    }
    radiology {
      id
    }
    surgeries {
      id
    }
    admissions {
      id
    }
    vitals {
      id
    }
  }
`;

export const FETCH_PATIENT_CONSULTATIONS = gql`
  query FetchPatientConsultations($filterOptions: ConsultationFilterInput, $id: String) {
    user(id: $id) {
      consultations(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Consultation
          ...ConsultationLinking
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${CONSULTATION_FIELDS}
  ${CONSULTATION_LINKING_FIELDS}
`;

export const FETCH_CONSULTATION = gql`
  query FetchConsultation($id: String!) {
    consultation(id: $id) {
      ...Consultation
      ...ConsultationLinking
      ${AUDIT_FIELDS}
    }
  }
  ${CONSULTATION_FIELDS}
  ${CONSULTATION_LINKING_FIELDS}
`;

export const ADD_CONSULTATION = gql`
  mutation AddConsultation($input: NewConsultationInput!) {
    addConsultation(consultation: $input) {
      ...Consultation
      ...ConsultationLinking
      ${AUDIT_FIELDS}
    }
  }
  ${CONSULTATION_FIELDS}
  ${CONSULTATION_LINKING_FIELDS}
`;

export const UPDATE_CONSULTATION = gql`
  mutation UpdateConsultation($id: String!, $input: ConsultationInput!) {
    updateConsultation(id: $id, consultation: $input) {
      ...Consultation
      ...ConsultationLinking
      ${AUDIT_FIELDS}
    }
  }
  ${CONSULTATION_FIELDS}
  ${CONSULTATION_LINKING_FIELDS}
`;

export const DELETE_CONSULTATION = gql`
  mutation DeleteConsultations($ids: [String!]!) {
    deleteConsultations(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_CONSULTATION = gql`
  mutation ArchiveConsultations($ids: [String!]!, $archive: Boolean) {
    archiveConsultations(ids: $ids, archive: $archive) {
      ...Consultation
      ...ConsultationLinking
      ${AUDIT_FIELDS}
    }
  }
  ${CONSULTATION_FIELDS}
  ${CONSULTATION_LINKING_FIELDS}
`;
