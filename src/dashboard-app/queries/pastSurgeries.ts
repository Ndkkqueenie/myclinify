import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const PAST_SURGERY_FIELDS = gql`
  fragment PastSurgery on PastSurgeryModel {
    id
    type
    operationDate
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_PAST_SURGERY = gql`
  query GetPastSurgeries($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getPastSurgeries(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...PastSurgery
      }
    }
  }
  ${PAST_SURGERY_FIELDS}
`;

export const ADD_PAST_SURGERY = gql`
  mutation AddPastSurgery($profileId: String, $input: PastSurgeryInput!) {
    addPastSurgeryInfo(profileId: $profileId, input: $input) {
      ...PastSurgery
    }
  }
  ${PAST_SURGERY_FIELDS}
`;

export const UPDATE_PAST_SURGERY = gql`
  mutation UpdatePastSurgery($input: PastSurgeryInput!, $id: String!, $profileId: String) {
    updatePastSurgeryInfo(input: $input, id: $id, profileId: $profileId) {
      ...PastSurgery
    }
  }
  ${PAST_SURGERY_FIELDS}
`;

export const DELETE_PAST_SURGERY = gql`
  mutation DeletePastSurgery($id: String!, $profileId: String) {
    deletePastSurgeryInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
