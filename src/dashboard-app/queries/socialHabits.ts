import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const SOCIAL_HABIT = gql`
  fragment Habit on HabitModel {
    id
    socialHabit
    level
    duration
    typeSpecified
    cigrattesPerDay
    unitPerWeek
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_SOCIAL_HABIT = gql`
  query GetSocialhabits($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getHabits(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...Habit
      }
    }
  }
  ${SOCIAL_HABIT}
`;

export const ADD_SOCIAL_HABIT = gql`
  mutation AddSocialHabit($profileId: String, $input: HabitInput!) {
    addHabitInfo(profileId: $profileId, input: $input) {
      ...Habit
    }
  }
  ${SOCIAL_HABIT}
`;

export const UPDATE_SOCIAL_HABIT = gql`
  mutation UpdateSocialHabit($input: HabitInput!, $id: String!, $profileId: String) {
    updateHabitInfo(input: $input, id: $id, profileId: $profileId) {
      ...Habit
    }
  }
  ${SOCIAL_HABIT}
`;

export const DELETE_SOCIAL_HABIT = gql`
  mutation DeleteSocialHabit($id: String!, $profileId: String) {
    deleteHabitInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
