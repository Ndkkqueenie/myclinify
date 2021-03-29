import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const TEMPERATURE_FIELDS = gql`
  fragment Temperature on TemperatureModel {
    id
    readingDateTime
    checkMethod
    reading
    readingUnit
    additionalNote
  }
`;

export const ADD_TEMPERATURE = gql`
  mutation AddTemperature($input: TemperatureVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addTemperatureInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...Temperature
      ${AUDIT_FIELDS}
    }
  }
  ${TEMPERATURE_FIELDS}
`;

export const UPDATE_TEMPERATURE = gql`
  mutation UpdateTemperatureInfo($input: TemperatureVitalFields!, $id: String!) {
    updateTemperatureInfo(input: $input, id: $id) {
      ...Temperature
      ${AUDIT_FIELDS}
    }
  }
  ${TEMPERATURE_FIELDS}
`;

export const GET_TEMPERATURE_INFOS = gql`
  query GetTemperatureInfos($parentRecordId: String!) {
    getTemperatureInfos(vitalId: $parentRecordId) {
      ...Temperature
      ${AUDIT_FIELDS}
    }
  }
  ${TEMPERATURE_FIELDS}
`;

export const DELETE_TEMPERATURE = gql`
  mutation DeleteTemperature($id: String!) {
    deleteTemperatureInfo(id: $id) {
      id
    }
  }
`;
