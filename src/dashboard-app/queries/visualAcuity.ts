import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const VISUAL_ACUITY_FIELDS = gql`
  fragment VisualAcuity on VisualAcuityModel {
    id
    readingDateTime
    withGlassesLeft
    withGlassesRight
    withoutGlassesLeft
    withoutGlassesRight
    additionalNote
  }
`;

export const ADD_VISUAL_ACUITY = gql`
  mutation AddVisualAcuity($input: VisualAcuityVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addVisualAcuityInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...VisualAcuity
      ${AUDIT_FIELDS}
    }
  }
  ${VISUAL_ACUITY_FIELDS}
`;

export const UPDATE_VISUAL_ACUITY = gql`
  mutation UpdateVisualAcuityInfo($input: VisualAcuityVitalFields!, $id: String!) {
    updateVisualAcuityInfo(input: $input, id: $id) {
      ...VisualAcuity
      ${AUDIT_FIELDS}
    }
  }
  ${VISUAL_ACUITY_FIELDS}
`;

export const GET_VISUAL_ACUITY_INFOS = gql`
  query GetVisualAcuityInfos($parentRecordId: String!) {
    getVisualAcuityInfos(vitalId: $parentRecordId) {
      ...VisualAcuity
      ${AUDIT_FIELDS}
    }
  }
  ${VISUAL_ACUITY_FIELDS}
`;

export const DELETE_VISUAL_ACUITY = gql`
  mutation DeleteVisualAcuity($id: String!) {
    deleteVisualAcuityInfo(id: $id) {
      id
    }
  }
`;
