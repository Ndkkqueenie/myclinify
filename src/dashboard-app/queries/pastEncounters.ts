import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const PAST_ENCOUNTER_FIELDS = gql`
  fragment PastEncounter on PastEncounterModel {
    id
    clinicName
    clinicAddress
    details {
      id
      diagnosisDate
      diagnosis
      duration
      diagnosedBy
      specialty
      symptoms
    }
    additionalNote
    ${AUDIT_FIELDS}
  }
`;

export const GET_ENCOUNTERS = gql`
  query FetchEncounters($filterInput: ProfileInfosFilterInput!, $profileId: String) {
    getPastEncounters(filterInput: $filterInput, profileId: $profileId) {
      totalCount
      list {
        ...PastEncounter
      }
    }
  }
  ${PAST_ENCOUNTER_FIELDS}
`;

export const ADD_ENCOUNTER = gql`
  mutation AddEncounter($profileId: String, $input: PastEncountersInput!) {
    addPastEncounterInfo(profileId: $profileId, input: $input) {
      ...PastEncounter
    }
  }
  ${PAST_ENCOUNTER_FIELDS}
`;

export const UPDATE_ENCOUNTER = gql`
  mutation UpdateEncounter($input: PastEncountersInput!, $id: String!, $profileId: String) {
    updatePastEncounterInfo(input: $input, id: $id, profileId: $profileId) {
      ...PastEncounter
    }
  }
  ${PAST_ENCOUNTER_FIELDS}
`;

export const DELETE_ENCOUNTER = gql`
  mutation DeleteEncounter($id: String!, $profileId: String) {
    deletePastEncounterInfo(id: $id, profileId: $profileId) {
      id
    }
  }
`;
