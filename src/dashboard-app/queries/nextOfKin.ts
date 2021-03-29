import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const NEXT_OF_KIN_FIELDS = gql`
  fragment NextOfKin on NextOfKinModel {
    id
    firstName
    lastName
    gender
    title
    middleName
    bloodGroup
    genoType
    phoneNumber {
      countryName
      countryCode
      value
    }
    email
    relationship
    occupation
    address
    country
    ${AUDIT_FIELDS}
  }
`;

export const GET_NEXT_OF_KIN = gql`
  query GetNextOfKins($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getNextOfKins(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...NextOfKin
      }
    }
  }
  ${NEXT_OF_KIN_FIELDS}
`;

export const ADD_NEXT_OF_KIN = gql`
  mutation AddNextOfKin($profileId: String, $input: NextOfKinInput!) {
    addNextOfKinInfo(profileId: $profileId, input: $input) {
      ...NextOfKin
    }
  }
  ${NEXT_OF_KIN_FIELDS}
`;

export const UPDATE_NEXT_OF_KIN = gql`
  mutation UpdateNextOfKin($input: NextOfKinInput!, $id: String!, $profileId: String) {
    updateNextOfKinInfo(input: $input, id: $id, profileId: $profileId) {
      ...NextOfKin
    }
  }
  ${NEXT_OF_KIN_FIELDS}
`;

export const DELETE_NEXT_OF_KIN = gql`
  mutation DeleteNextOfKin($id: String!, $profileId: String) {
    deleteNextOfKinInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
