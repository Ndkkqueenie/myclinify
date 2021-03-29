import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const URINE_DIPSTICK_FIELDS = gql`
  fragment UrineDipstick on UrineDipstickModel {
    id
    readingDateTime
    blood
    glucose
    ketones
    ph
    protein
    nitrites
    leucocyte
    urobilinogen
    additionalNote
  }
`;

export const ADD_URINE_DIPSTICK = gql`
  mutation AddUrineDipstick($input: UrineDipstickVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addUrineDipstickInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...UrineDipstick
      ${AUDIT_FIELDS}
    }
  }
  ${URINE_DIPSTICK_FIELDS}
`;

export const UPDATE_URINE_DIPSTICK = gql`
  mutation UpdateUrineDipstickInfo($input: UrineDipstickVitalFields!, $id: String!) {
    updateUrineDipstickInfo(input: $input, id: $id) {
      ...UrineDipstick
      ${AUDIT_FIELDS}
    }
  }
  ${URINE_DIPSTICK_FIELDS}
`;

export const GET_URINE_DIPSTICK_INFOS = gql`
  query GetUrineDipstickInfos($parentRecordId: String!) {
    getUrineDipstickInfos(vitalId: $parentRecordId) {
      ...UrineDipstick
      ${AUDIT_FIELDS}
    }
  }
  ${URINE_DIPSTICK_FIELDS}
`;

export const DELETE_URINE_DIPSTICK = gql`
  mutation DeleteUrineDipstick($id: String!) {
    deleteUrineDipstickInfo(id: $id) {
      id
    }
  }
`;
