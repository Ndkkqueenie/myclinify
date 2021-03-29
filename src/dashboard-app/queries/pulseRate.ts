import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const PULSE_RATE_FIELDS = gql`
  fragment PulseRate on PulseRateModel {
    id
    readingDateTime
    reading
    checkMethod
    checkMethodSpecify
    rhythm
    additionalNote
  }
`;

export const ADD_PULSE_RATE = gql`
  mutation AddPulseRate($input: PulseRateVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addPulseRateInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...PulseRate
      ${AUDIT_FIELDS}
    }
  }
  ${PULSE_RATE_FIELDS}
`;

export const UPDATE_PULSE_RATE = gql`
  mutation UpdatePulseRateInfo($input: PulseRateVitalFields!, $id: String!) {
    updatePulseRateInfo(input: $input, id: $id) {
      ...PulseRate
      ${AUDIT_FIELDS}
    }
  }
  ${PULSE_RATE_FIELDS}
`;

export const GET_PULSE_RATE_INFOS = gql`
  query GetPulseRateInfos($parentRecordId: String!) {
    getPulseRateInfos(vitalId: $parentRecordId) {
      ...PulseRate
      ${AUDIT_FIELDS}
    }
  }
  ${PULSE_RATE_FIELDS}
`;

export const DELETE_PULSE_RATE = gql`
  mutation DeletePulseRate($id: String!) {
    deletePulseRateInfo(id: $id) {
      id
    }
  }
`;
