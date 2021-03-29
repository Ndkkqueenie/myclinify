import { gql } from '@apollo/client';

export const GET_HOSPITALS = gql`
  query GetHospitals($filterOptions: HospitalFilterInput) {
    hospitals(filterOptions: $filterOptions) {
      totalCount
      list {
        id
        name
      }
    }
  }
`;
