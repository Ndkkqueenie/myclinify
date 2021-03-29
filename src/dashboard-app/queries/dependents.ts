import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const DEPENDENT_FIELDS = gql`
  fragment Dependent on DependentModel {
    id
    title
    firstName
    lastName
    middleName
    gender
    dateOfBirth
    bloodGroup
    genoType
    relationship
    ${AUDIT_FIELDS}
  }
`;

export const GET_DEPENDENTS = gql`
  query GetDependents($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getDependents(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...Dependent
      }
    }
  }
  ${DEPENDENT_FIELDS}
`;

export const ADD_DEPENDENTS = gql`
  mutation AddDependents($profileId: String, $input: DependentInput!) {
    addDependentInfo(profileId: $profileId, input: $input) {
      ...Dependent
    }
  }
  ${DEPENDENT_FIELDS}
`;

export const UPDATE_DEPENDENTS = gql`
  mutation UpdateDependents($profileId: String, $input: DependentInput!, $id: String!) {
    updateDependentInfo(profileId: $profileId, input: $input, id: $id) {
      ...Dependent
    }
  }
  ${DEPENDENT_FIELDS}
`;

export const DELETE_DEPENDENT = gql`
  mutation DeleteDependent($id: String!, $profileId: String) {
    deleteDependentInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
