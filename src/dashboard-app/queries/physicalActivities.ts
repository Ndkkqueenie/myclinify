import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const PHYSICAL_ACTIVITY_FIELD = gql`
  fragment PhysicalActivity on PhysicalActivityModel {
    id
    type
    name
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_PHYSICAL_ACTIVITIES = gql`
  query GetPhysicalActivities($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getPhysicalActivities(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...PhysicalActivity
      }
    }
  }
  ${PHYSICAL_ACTIVITY_FIELD}
`;

export const ADD_PHYSICAL_ACTIVITY = gql`
  mutation AddPhysicalActivity($profileId: String, $input: PhysicalActivityInput!) {
    addPhysicalActivityInfo(profileId: $profileId, input: $input) {
      ...PhysicalActivity
    }
  }
  ${PHYSICAL_ACTIVITY_FIELD}
`;

export const UPDATE_PHYSICAL_ACTIVITY = gql`
  mutation UpdatePhysicalActivity(
    $input: PhysicalActivityInput!
    $id: String!
    $profileId: String
  ) {
    updatePhysicalActivityInfo(input: $input, id: $id, profileId: $profileId) {
      ...PhysicalActivity
    }
  }
  ${PHYSICAL_ACTIVITY_FIELD}
`;

export const DELETE_PHYSICAL_ACTIVITY = gql`
  mutation DeletePhysicalActivity($id: String!, $profileId: String) {
    deletePhysicalActivityInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
