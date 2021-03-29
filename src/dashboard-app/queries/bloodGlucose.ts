import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const BLOOD_GLUCOSE_FIELDS = gql`
  fragment BloodGlucose on BloodGlucoseModel {
    id
    readingDateTime
    reading
    readingUnit
    mealTime
    additionalNote
  }
`;

export const ADD_BLOOD_GLUCOSE = gql`
  mutation AddBloodGlucose($input: BloodGlucoseVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addBloodGlucoseInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...BloodGlucose
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_GLUCOSE_FIELDS}
`;

export const UPDATE_BLOOD_GLUCOSE = gql`
  mutation UpdateBloodGlucoseInfo($input: BloodGlucoseVitalFields!, $id: String!) {
    updateBloodGlucoseInfo(input: $input, id: $id) {
      ...BloodGlucose
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_GLUCOSE_FIELDS}
`;

export const GET_BLOOD_GLUCOSE_INFOS = gql`
  query GetBloodGlucoseInfos($parentRecordId: String!) {
    getBloodGlucoseInfos(vitalId: $parentRecordId) {
      ...BloodGlucose
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_GLUCOSE_FIELDS}
`;

export const DELETE_BLOOD_GLUCOSE = gql`
  mutation DeleteBloodGlucose($id: String!) {
    deleteBloodGlucoseInfo(id: $id) {
      id
    }
  }
`;
