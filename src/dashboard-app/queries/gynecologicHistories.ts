import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const GYNECOLOGIC_HISTORY = gql`
  fragment GynecologicHistory on GynecologicHistoryModel {
    id
    firstMenstrualAge
    menstrualCycleLength
    menstrualFlowDuration
    lastMenstrualPeriod
    menstrualFlow
    contraceptiveUse
    miscarriageOrAbortion
    miscarriageOrAbortionCount
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_GYNECOLOGIC_HISTORIES = gql`
  query GetGynecologicHistories($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getGynecologicHistories(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...GynecologicHistory
      }
    }
  }
  ${GYNECOLOGIC_HISTORY}
`;

export const ADD_GYNECOLOGIC_HISTORY = gql`
  mutation AddGynecologicHistory($profileId: String, $input: GynecologicHistoryInput!) {
    addGynecologicHistoryInfo(profileId: $profileId, input: $input) {
      ...GynecologicHistory
    }
  }
  ${GYNECOLOGIC_HISTORY}
`;

export const UPDATE_GYNECOLOGIC_HISTORY = gql`
  mutation UpdateGynecologicHistory(
    $input: GynecologicHistoryInput!
    $id: String!
    $profileId: String
  ) {
    updateGynecologicHistoryInfo(input: $input, id: $id, profileId: $profileId) {
      ...GynecologicHistory
    }
  }
  ${GYNECOLOGIC_HISTORY}
`;

export const DELETE_GYNECOLOGIC_HISTORY = gql`
  mutation DeleteGynecologicHistory($id: String!, $profileId: String) {
    deleteGynecologicInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
