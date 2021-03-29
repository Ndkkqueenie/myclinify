import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const RESPIRATORY_RATE_FIELDS = gql`
  fragment RespiratoryRate on RespiratoryRateModel {
    id
    readingDateTime
    reading
    oxygenSaturation
    rhythm
    additionalNote
  }
`;

export const ADD_RESPIRATORY_RATE = gql`
  mutation AddRespiratoryRate($input: RespiratoryRateVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addRespiratoryRateInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...RespiratoryRate
      ${AUDIT_FIELDS}
    }
  }
  ${RESPIRATORY_RATE_FIELDS}
`;

export const UPDATE_RESPIRATORY_RATE = gql`
  mutation UpdateRespiratoryRateInfo($input: RespiratoryRateVitalFields!, $id: String!) {
    updateRespiratoryRateInfo(input: $input, id: $id) {
      ...RespiratoryRate
      ${AUDIT_FIELDS}
    }
  }
  ${RESPIRATORY_RATE_FIELDS}
`;

export const GET_RESPIRATORY_RATE_INFOS = gql`
  query GetRespiratoryRateInfos($parentRecordId: String!) {
    getRespiratoryRateInfos(vitalId: $parentRecordId) {
      ...RespiratoryRate
      ${AUDIT_FIELDS}
    }
  }
  ${RESPIRATORY_RATE_FIELDS}
`;

export const DELETE_RESPIRATORY_RATE = gql`
  mutation DeleteRespiratoryRate($id: String!) {
    deleteRespiratoryRateInfo(id: $id) {
      id
    }
  }
`;
