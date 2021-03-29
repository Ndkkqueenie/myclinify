import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const ALLERGY_FIELDS = gql`
  fragment Allergy on AllergyModel {
    id
    occurenceDate
    duration
    hospitalName
    hospitalAddress
    details {
      type
      trigger
      reactions
      severeness
    }
    documentUrl
    additionalNote
    createdDate
    updatedDate
  }
`;

export const ALLERGY_LINKING_FIELDS = gql`
  fragment AllergyLinking on AllergyModel {
    medications {
      id
    }
  }
`;

export const GET_PATIENT_ALLERGY_LIST = gql`
  query GetPatientAllergyList($filterOptions: AllergyFilterInput, $id: String) {
    user(id: $id) {
      allergies(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Allergy
          ...AllergyLinking
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${ALLERGY_FIELDS}
  ${ALLERGY_LINKING_FIELDS}
`;

export const GET_PATIENT_ALLERGY = gql`
  query GetPatientAllergy($id: String!) {
    allergy(id: $id) {
      ...Allergy
      ...AllergyLinking
      ${AUDIT_FIELDS}
    }
  }
  ${ALLERGY_FIELDS}
  ${ALLERGY_LINKING_FIELDS}
`;

export const ADD_PATIENT_ALLERGY = gql`
  mutation AddPatientAllergy($input: NewAllergyInput!) {
    addAllergy(allergy: $input) {
      ...Allergy
      ...AllergyLinking
      ${AUDIT_FIELDS}
    }
  }
  ${ALLERGY_FIELDS}
  ${ALLERGY_LINKING_FIELDS}
`;

export const DELETE_PATIENT_ALLERGY = gql`
  mutation DeletePatientAllergies($ids: [String!]!) {
    deleteAllergies(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_ALLERGY = gql`
  mutation ArchiveAllergy($ids: [String!]!, $archive: Boolean) {
    archiveAllergies(ids: $ids, archive: $archive) {
      ...Allergy
      ...AllergyLinking
      ${AUDIT_FIELDS}
    }
  }
  ${ALLERGY_FIELDS}
  ${ALLERGY_LINKING_FIELDS}
`;

export const UPDATE_PATIENT_ALLERGY = gql`
  mutation UpdatePatientAllergy($input: AllergyInput!, $id: String!) {
    updateAllergy(allergy: $input, id: $id) {
      ...Allergy
      ...AllergyLinking
      ${AUDIT_FIELDS}
    }
  }
  ${ALLERGY_FIELDS}
  ${ALLERGY_LINKING_FIELDS}
`;
