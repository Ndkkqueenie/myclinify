import { gql } from '@apollo/client';

export const ADD_PROVIDER_CLAIM = gql`
  mutation AddProviderClaim($ProviderClaimInput: ProviderClaimInput!) {
    addProviderClaim(claim: $ProviderClaimInput) {
      id
      status
      createdDate
    }
  }
`;
