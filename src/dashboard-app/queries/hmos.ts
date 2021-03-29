import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const HMO_FIELDS = gql`
  fragment Hmo on HmoProfileModel {
    id
    memberNumber
    memberPlan
    employeeNumber
    memberStartDate
    memberStatus
    companyName
    companyAddress
    primaryProviderName
    secondaryProviderName
    tertiaryProviderName
    primaryProviderAddress
    secondaryProviderAddress
    tertiaryProviderAddress
    hmoProvider
    ${AUDIT_FIELDS}
  }
`;

export const GET_HMOS = gql`
  query GetUserHmos($filterInput: HmoProfileFilterInput) {
    fetchHmos(filterOptions: $filterInput) {
      totalCount
      list {
        ...Hmo
      }
    }
  }
  ${HMO_FIELDS}
`;

export const UPDATE_HMO = gql`
  mutation UpdateHmo($id: String!, $input: HmoProfileInput!) {
    updateMyHmos(hmoProfileInput: $input, hmoProfileId: $id) {
      ...Hmo
    }
  }
  ${HMO_FIELDS}
`;

export const SAVE_HMO = gql`
  mutation SaveUserHmos($input: HmoProfileInput!) {
    saveMyHmos(hmoProfileInput: $input) {
      ...Hmo
    }
  }
  ${HMO_FIELDS}
`;

export const DELETE_MY_HMO = gql`
  mutation DeleteMyHmo($id: String!) {
    deleteMyHmo(id: $id) {
      id
    }
  }
`;
