import { gql } from '@apollo/client';
import { ANTHROPOMETRY_FIELDS } from './anthropometry';
import { AUDIT_FIELDS } from './audit';
import { BLOOD_GLUCOSE_FIELDS } from './bloodGlucose';
import { BLOOD_PRESSURE_FIELDS } from './bloodPressure';
import { PULSE_RATE_FIELDS } from './pulseRate';
import { RESPIRATORY_RATE_FIELDS } from './respiratoryRate';
import { TEMPERATURE_FIELDS } from './temperature';
import { URINE_DIPSTICK_FIELDS } from './urineDipstick';
import { VISUAL_ACUITY_FIELDS } from './visualAcuity';

export const VITAL_FIELDS = gql`
  fragment Vital on VitalModel {
    id
    hospitalName
    hospitalAddress
    documentUrl
    createdDate
    updatedDate
  }
`;

export const GET_PATIENT_VITAL_SIGNS_LIST = gql`
  query GetPatientVitalSignsList($filterOptions: VitalFilterInput, $id: String) {
    user(id: $id) {
      vitals(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Vital
          anthropometry {
            ...Anthropometry
          }
          bloodGlucose {
            ...BloodGlucose
          }
          bloodPressure {
            ...BloodPressure
          }
          pulseRate {
            ...PulseRate
          }
          respiratoryRate {
            ...RespiratoryRate
          }
          temperature {
            ...Temperature
          }
          visualAcuity {
            ...VisualAcuity
          }
          urineDipstick {
            ...UrineDipstick
          }
          createdDate
        }
      }
    }
  }
  ${VITAL_FIELDS}
  ${ANTHROPOMETRY_FIELDS}
  ${BLOOD_PRESSURE_FIELDS}
  ${BLOOD_GLUCOSE_FIELDS}
  ${TEMPERATURE_FIELDS}
  ${PULSE_RATE_FIELDS}
  ${RESPIRATORY_RATE_FIELDS}
  ${TEMPERATURE_FIELDS}
  ${VISUAL_ACUITY_FIELDS}
  ${URINE_DIPSTICK_FIELDS}
`;

export const ADD_VITAL_SIGNS = gql`
  mutation AddVital($input: NewVitalInput!) {
    addVital(vital: $input) {
      ...Vital
      ${AUDIT_FIELDS}
    }
  }
  ${VITAL_FIELDS}
`;

export const UPDATE_VITAL_SIGNS = gql`
  mutation UpdateVital($input: UpdateVitalInput!, $id: String!) {
    updateVital(id: $id, vital: $input) {
      ...Vital
      ${AUDIT_FIELDS}
    }
  }
  ${VITAL_FIELDS}
`;

export const DELETE_VITAL_SIGNS = gql`
  mutation DeleteVitals($ids: [String!]!) {
    deleteVitals(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_VITAL_SIGNS = gql`
  mutation ArchiveVitals($ids: [String!]!, $archive: Boolean) {
    archiveVitals(ids: $ids, archive: $archive) {
      ...Vital
      ${AUDIT_FIELDS}
    }
  }
  ${VITAL_FIELDS}
`;

export const GET_VITAL_SIGN = gql`
  query GetVitalList($id: String!) {
    vital(id: $id) {
      ...Vital
      ${AUDIT_FIELDS}
    }
  }
  ${VITAL_FIELDS}
`;
