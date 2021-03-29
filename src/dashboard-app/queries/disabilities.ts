import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const DISABILITY_FIELDS = gql`
  fragment Disability on DisabilityModel {
    id
    disability
    type
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_DISABILITY = gql`
  query GetDisabilities($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getDisabilities(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...Disability
      }
    }
  }
  ${DISABILITY_FIELDS}
`;

export const ADD_DISABILITY = gql`
  mutation AddDisabilty($profileId: String, $input: DisabilityInput!) {
    addDisabilityInfo(profileId: $profileId, input: $input) {
      ...Disability
    }
  }
  ${DISABILITY_FIELDS}
`;

export const UPDATE_DISABILITY = gql`
  mutation UpdateDisability($input: DisabilityInput!, $id: String!, $profileId: String) {
    updateDisabilityInfo(input: $input, id: $id, profileId: $profileId) {
      ...Disability
    }
  }
  ${DISABILITY_FIELDS}
`;

export const DELETE_DISABILITY = gql`
  mutation DeleteDisability($id: String!, $profileId: String) {
    deleteDisabilityInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
