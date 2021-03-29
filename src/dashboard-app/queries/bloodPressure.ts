import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const BLOOD_PRESSURE_FIELDS = gql`
  fragment BloodPressure on BloodPressureModel {
    id
    readingDateTime
    diastolic
    systolic
    meanArterialPressure
    additionalNote
  }
`;

export const ADD_BLOOD_PRESSURE = gql`
  mutation AddBloodPressure($input: BloodPressureVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addBloodPressureInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...BloodPressure
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_PRESSURE_FIELDS}
`;

export const UPDATE_BLOOD_PRESSURE = gql`
  mutation UpdateBloodPressureInfo($input: BloodPressureVitalFields!, $id: String!) {
    updateBloodPressureInfo(input: $input, id: $id) {
      ...BloodPressure
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_PRESSURE_FIELDS}
`;

export const GET_BLOOD_PRESSURE_INFOS = gql`
  query GetBloodPressureInfos($parentRecordId: String!) {
    getBloodPressureInfos(vitalId: $parentRecordId) {
      ...BloodPressure
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_PRESSURE_FIELDS}
`;

export const DELETE_BLOOD_PRESSURE = gql`
  mutation DeleteBloodPressure($id: String!) {
    deleteBloodPressureInfo(id: $id) {
      id
    }
  }
`;
