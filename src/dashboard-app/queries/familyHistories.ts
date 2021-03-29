import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const FAMILY_HISTORY = gql`
  fragment FamilyHistory on FamilyHistoryModel {
    id
    title
    firstName
    lastName
    middleName
    lastName
    gender
    dateOfBirth
    bloodGroup
    relationship
    condition
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_FAMILY_HISTORIES = gql`
  query GetFamilyHistories($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getFamilyHistories(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...FamilyHistory
      }
    }
  }
  ${FAMILY_HISTORY}
`;

export const ADD_FAMILY_HISTORY = gql`
  mutation AddFamilyHistory($profileId: String, $input: FamilyHistoryInput!) {
    addFamilyHistoryInfo(profileId: $profileId, input: $input) {
      ...FamilyHistory
    }
  }
  ${FAMILY_HISTORY}
`;

export const UPDATE_FAMILY_HISTORY = gql`
  mutation UpdateFamilyHistory($input: FamilyHistoryInput!, $id: String!, $profileId: String) {
    updateFamilyHistoryInfo(input: $input, dependentId: $id, profileId: $profileId) {
      ...FamilyHistory
    }
  }
  ${FAMILY_HISTORY}
`;

export const DELETE_FAMILY_HISTORY = gql`
  mutation DeleteFamilyHistory($id: String!, $profileId: String) {
    deleteFamilyHistoryInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
