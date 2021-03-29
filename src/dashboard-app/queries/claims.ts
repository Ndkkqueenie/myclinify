import { gql } from '@apollo/client';

export const GET_CLAIMS = gql`
  query GetClaims($filterOptions: ClaimFilterInput!) {
    claims(filterOptions: $filterOptions) {
      totalCount
      list {
        id
        status
        claimType
        serviceCategory
        coverage {
          memberNumber
          primaryProviderName
        }
        grandTotal
        createdDate
        patient {
          personalInformation {
            firstName
            lastName
          }
        }
      }
    }
  }
`;
