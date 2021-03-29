import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const SURGERY_FIELDS = gql`
  fragment Surgery on SurgeryModel {
    id
    surgeryDate
    duration
    type
    rank
    reason
    assistantSurgeon
    requestedBy
    specialty
    facilityName
    facilityAddress
    operatedBy
    priority
    patientType
    patientConsent
    paymentType
    operatingRoomNurse
    anesthetistName
    anesthesia
    operationNote
    postOperationNote
    documentUrl
  }
`;

export const ADD_PATIENT_SURGERY = gql`
  mutation AddPatientSurgery($input: NewSurgeryInput!) {
    addSurgery(surgery: $input) {
      ...Surgery
      ${AUDIT_FIELDS}
    }
  }
  ${SURGERY_FIELDS}
`;

export const UPDATE_SURGERY = gql`
  mutation UpdateSurgery($input: SurgeryInput!, $id: String!) {
    updateSurgery(surgery: $input, id: $id) {
      ...Surgery
      ${AUDIT_FIELDS}
    }
  }
  ${SURGERY_FIELDS}
`;

export const DELETE_SURGERY = gql`
  mutation DeleteSurgeries($ids: [String!]!) {
    deleteSurgeries(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_SURGERY = gql`
  mutation ArchiveSurgery($ids: [String!]!, $archive: Boolean) {
    archiveSurgeries(ids: $ids, archive: $archive) {
      ...Surgery
      ${AUDIT_FIELDS}
    }
  }
  ${SURGERY_FIELDS}
`;

export const GET_PATIENT_SURGERY_LIST = gql`
  query GetPatientSurgeryList($filterOptions: SurgeryFilterInput!, $id: String) {
    user(id: $id) {
      surgeries(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Surgery
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${SURGERY_FIELDS}
`;

export const GET_SURGERY = gql`
  query GetSurgery($id: String!) {
    surgery(id: $id) {
      ...Surgery
      ${AUDIT_FIELDS}
    }
  }
  ${SURGERY_FIELDS}
`;
