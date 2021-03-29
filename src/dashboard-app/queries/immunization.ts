import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const IMMUNIZATION_FIELDS = gql`
  fragment Immunization on ImmunizationModel {
    id
    administeredDate
    duration
    immunizationName
    administratorName
    nextAppointmentDateTime
    batchNumber
    expiryDate
    remindMe
    quantity
    hospitalName
    hospitalAddress
    dosage
    dosageUnit
    method
    additionalNote
    documentUrl
    createdDate
    updatedDate
  }
`;

export const GET_IMMUNIZATIONS = gql`
  query GetImmunizations($filterOptions: ImmunizationFilterInput, $id: String) {
    user (id: $id) {
      immunizations(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Immunization
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${IMMUNIZATION_FIELDS}
`;

export const GET_IMMUNIZATION = gql`
  query GetImmunization($id: String!) {
    immunization(id: $id) {
      ...Immunization
      ${AUDIT_FIELDS}
    }
  }
  ${IMMUNIZATION_FIELDS}
`;

export const UPDATE_IMMUNIZATION = gql`
  mutation UpdateImmunization($id: String!, $input: ImmunizationInput!) {
    updateImmunization(id: $id, immunization: $input) {
      ...Immunization
      ${AUDIT_FIELDS}
    }
  }
  ${IMMUNIZATION_FIELDS}
`;

export const DELETE_IMMUNIZATION = gql`
  mutation DeleteImmunizations($ids: [String!]!) {
    deleteImmunizations(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_IMMUNIZATION = gql`
  mutation ArchiveImmunizations($ids: [String!]!, $archive: Boolean) {
    archiveImmunizations(ids: $ids, archive: $archive) {
      ...Immunization
      ${AUDIT_FIELDS}
    }
  }
  ${IMMUNIZATION_FIELDS}
`;

export const GET_IMMUNIZATIONS_BY_ID = gql`
  query GetImmunizationsById($id: String, $filterOptions: ImmunizationFilterInput) {
    user(id: $id) {
      immunizations(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Immunization
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${IMMUNIZATION_FIELDS}
`;

export const ADD_IMMUNIZATION = gql`
  mutation AddImmunization($input: NewImmunizationInput!) {
    addImmunization(immunization: $input) {
      ...Immunization
      ${AUDIT_FIELDS}
    }
  }
  ${IMMUNIZATION_FIELDS}
`;
