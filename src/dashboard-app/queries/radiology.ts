import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const RADIOLOGY_FIELDS = gql`
  fragment Radiology on RadiologyModel {
    id
    requestDate
    requestType
    priority
    requester
    patientType
    specialty
    examType
    clinicalNote
    examDate
    duration
    radiologist
    paymentType
    radiologyName
    radiologyAddress
    report
    impression
    documentUrl
    createdDate
    updatedDate
  }
`;

export const GET_PATIENT_RADIOLOGY_LIST = gql`
  query GetPatientRadiologyList($filterOptions: RadiologyFilterInput!, $id: String) {
    user (id: $id) {
      radiology(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Radiology
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${RADIOLOGY_FIELDS}
`;

export const GET_RADIOLOGY = gql`
  query GetRadiology($id: String!) {
    radiology(id: $id) {
      ...Radiology
      ${AUDIT_FIELDS}
    }
  }
  ${RADIOLOGY_FIELDS}
`;

export const ADD_RADIOLOGY = gql`
  mutation AddPatientRadiology($input: NewRadiologyInput!) {
    addRadiology(radiology: $input) {
      ...Radiology
      ${AUDIT_FIELDS}
    }
  }
  ${RADIOLOGY_FIELDS}
`;

export const UPDATE_RADIOLOGY = gql`
  mutation UpdatePatientRadiology($input: RadiologyInput!, $id: String!) {
    updateRadiology(radiology: $input, id: $id) {
      ...Radiology
      ${AUDIT_FIELDS}
    }
  }
  ${RADIOLOGY_FIELDS}
`;

export const DELETE_RADIOLOGY = gql`
  mutation DeletePatientRadiology($ids: [String!]!) {
    deleteRadiology(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_RADIOLOGY = gql`
  mutation ArchiveRadiology($ids: [String!]!, $archive: Boolean) {
    archiveRadiology(ids: $ids, archive: $archive) {
      ...Radiology
      ${AUDIT_FIELDS}
    }
  }
  ${RADIOLOGY_FIELDS}
`;
