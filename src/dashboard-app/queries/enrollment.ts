import { gql } from '@apollo/client';

export const GET_ENROLLMENTS = gql`
  query GetEnrollments($filterOptions: UsersFilterInput!) {
    users(filterOptions: $filterOptions) {
      totalCount
      list {
        id
        email
      }
    }
  }
`;
