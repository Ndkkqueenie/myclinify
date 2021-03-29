import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const ANTHROPOMETRY_FIELDS = gql`
  fragment Anthropometry on AnthropometryModel {
    id
    readingDateTime
    height
    heightUnit
    weight
    weightUnit
    hipCircumference
    hipCircumferenceUnit
    waistCircumference
    waistCircumferenceUnit
    skinfoldThickness
    skinfoldThicknessUnit
    leftUpperLimbCircumference
    rightUpperLimbCircumference
    upperLimbCircumferenceUnit
    leftLowerLimbCircumference
    rightLowerLimbCircumference
    lowerLimbCircumferenceUnit
    abdominalGirth
    abdominalGirthUnit
    additionalNote
  }
`;

export const ADD_ANTHROPOMETRY = gql`
  mutation AddAnthropometry($input: AnthropometryVitalFields!, $parentRecordId: String!, $clinifyId: String!) {
    addAnthropometryInfo(input: $input, vitalId: $parentRecordId, clinifyId: $clinifyId) {
      ...Anthropometry
      ${AUDIT_FIELDS}
    }
  }
  ${ANTHROPOMETRY_FIELDS}
`;

export const UPDATE_ANTHROPOMETRY = gql`
  mutation UpdateAnthropometryInfo($input: AnthropometryVitalFields!, $id: String!) {
    updateAnthropometryInfo(input: $input, id: $id) {
      ...Anthropometry
      ${AUDIT_FIELDS}
    }
  }
  ${ANTHROPOMETRY_FIELDS}
`;

export const GET_ANTHROPOMETRY_INFOS = gql`
  query GetAnthropometryInfos($parentRecordId: String!) {
    getAnthropometryInfos(vitalId: $parentRecordId) {
      ...Anthropometry
      ${AUDIT_FIELDS}
    }
  }
  ${ANTHROPOMETRY_FIELDS}
`;

export const DELETE_ANTHROPOMETRY = gql`
  mutation DeleteAnthropometry($id: String!) {
    deleteAnthropometryInfo(id: $id) {
      id
    }
  }
`;
