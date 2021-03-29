import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const OBSTETRIC_HISTORY = gql`
  fragment ObstetricHistory on ObstetricHistoryModel {
    id
    childrenCount
    lastBirth
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_OBSTETRICS = gql`
  query getObstetricHistories($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getObstetricHistories(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...ObstetricHistory
      }
    }
  }
  ${OBSTETRIC_HISTORY}
`;

export const ADD_OBSTETRIC_HISTORY = gql`
  mutation AddObstetricHistory($profileId: String, $input: ObstetricHistoryInput!) {
    addObstetricInfo(profileId: $profileId, input: $input) {
      ...ObstetricHistory
    }
  }
  ${OBSTETRIC_HISTORY}
`;

export const UPDATE_OBSTETRIC_HISTORY = gql`
  mutation UpdateObstetrics($input: ObstetricHistoryInput!, $id: String!, $profileId: String) {
    updateObstetricHistoryInfo(input: $input, id: $id, profileId: $profileId) {
      ...ObstetricHistory
    }
  }
  ${OBSTETRIC_HISTORY}
`;

export const DELETE_OBSTETRIC_HISTORY = gql`
  mutation DeleteObstetricHistory($id: String!, $profileId: String) {
    deleteObstetricInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
