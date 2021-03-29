import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const PRE_EXISTING_CONDITION_FIELD = gql`
  fragment PreExistingCondition on PreExistingConditionModel {
    id
    condition
    diagnosedDate
    duration
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_PRE_EXISTING_CONDITION = gql`
  query GetPreExistingConditions($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getPreExistingConditions(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...PreExistingCondition
      }
    }
  }
  ${PRE_EXISTING_CONDITION_FIELD}
`;

export const ADD_PRE_EXISTING_CONDITION = gql`
  mutation AddPreExistingCondition($profileId: String, $input: PreExistingConditionInput!) {
    addPreExistingConditionInfo(profileId: $profileId, input: $input) {
      ...PreExistingCondition
    }
  }
  ${PRE_EXISTING_CONDITION_FIELD}
`;

export const UPDATE_PRE_EXISTING_CONDITION = gql`
  mutation UpdatePreExistingCondition(
    $input: PreExistingConditionInput!
    $id: String!
    $profileId: String
  ) {
    updatePreExistingConditionInfo(input: $input, id: $id, profileId: $profileId) {
      ...PreExistingCondition
    }
  }
  ${PRE_EXISTING_CONDITION_FIELD}
`;

export const DELETE_PRE_EXISTING_CONDITION = gql`
  mutation DeletePreExistingCondition($id: String!, $profileId: String) {
    deletePreExistingConditionInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
