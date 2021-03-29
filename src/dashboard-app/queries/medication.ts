import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const DISPENSE_DETAILS_FIELD = gql`
  fragment DispenseDetail on DispenseDetailsModel {
    id
    dispenseDate
    dispensedBy
    medicationName
    dispenseNote
    dispensePatientType
    dispensePaymentType
    createdDate
    createdBy {
      fullName
    }
    updatedDate
    updatedBy {
      fullName
    }
  }
`;

export const MEDICATION_FIELDS = gql`
  fragment Medication on MedicationModel {
    id
    patientType
    paymentType
    details {
      datePrescribed
      duration
      medicationName
      purpose
      prescribedBy
      administrationMethod
      dosage
      dosageUnit
      type
      quantity
      startDate
      endDate
      discontinue
      refillNumber
      frequency
    }
    dispenseDetails {
      ...DispenseDetail
    }
    hospitalName
    hospitalAddress
    setReminder
    reminderStartDate
    reminderEndDate
    medicationStartTime
    medicationEndTime
    interval
    intervalUnit
    remindMe
    documentUrl
    additionalNote
    createdDate
    updatedDate
  }
  ${DISPENSE_DETAILS_FIELD}
`;

export const FETCH_DISPENSE_DETAILS = gql`
  query DispenseDetails($parentRecordId: String!) {
    getDispenseDetails(medicationId: $parentRecordId) {
      ...DispenseDetail
    }
  }
  ${DISPENSE_DETAILS_FIELD}
`;

export const ADD_PATIENT_MEDICATION = gql`
  mutation AddPatientMedication($input: MedicationInput!) {
    addMedication(medication: $input) {
      ...Medication
      ${AUDIT_FIELDS}
    }
  }
  ${MEDICATION_FIELDS}
`;

export const GET_PATIENT_MEDICATION_LIST = gql`
  query GetPatientMedicationList($filterOptions: MedFilterOptions, $id: String) {
    user (id: $id) {
      medications(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Medication
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${MEDICATION_FIELDS}
`;

export const DELETE_PATIENT_MEDICATION = gql`
  mutation DeletePatientMedications($ids: [String!]!) {
    deleteMedications(ids: $ids) {
      id
    }
  }
`;

export const UPDATE_DISPENSE_DETAIL = gql`
  mutation UpdateDispenseDetail($id: String!, $input: DispenseDetailsInput!) {
    updateDispenseDetails(id: $id, dispenseDetail: $input) {
      id
      dispensedBy
      medicationName
      dispenseDate
      createdDate
      updatedDate
      createdBy {
        fullName
      }
      updatedBy {
        fullName
      }
      dispenseNote
      dispensePatientType
      dispensePaymentType
    }
  }
`;

export const DELETE_DISPENSE_DETAIL = gql`
  mutation DeleteDispenseDetail($id: String!) {
    deleteDispenseDetail(id: $id) {
      id
    }
  }
`;

export const SAVE_DISPENSE_DETAIL = gql`
  mutation SaveDispenseDetails($id: String!, $input: DispenseDetailsInput!) {
    saveDispenseDetail(medicationId: $id, input: $input) {
      id
      dispensedBy
      medicationName
      dispenseDate
      createdDate
      updatedDate
      createdBy {
        fullName
      }
      updatedBy {
        fullName
      }
      dispenseNote
      dispensePatientType
      dispensePaymentType
    }
  }
`;

export const ARCHIVE_PATIENT_MEDICATION = gql`
  mutation ArchivePatientMedication($ids: [String!]!, $archive: Boolean) {
    archiveMedications(ids: $ids, archive: $archive) {
      ...Medication
      ${AUDIT_FIELDS}
    }
  }
  ${MEDICATION_FIELDS}
`;

export const UPDATE_PATIENT_MEDICATION = gql`
  mutation UpdatePatientMedication($id: String!, $input: MedicationInput!) {
    updateMedication(id: $id, medication: $input) {
      ...Medication
      ${AUDIT_FIELDS}
    }
  }
  ${MEDICATION_FIELDS}
`;

export const GET_PATIENT_MEDICATION = gql`
  query GetPatientMedication($id: String!) {
    medication(id: $id) {
      ...Medication
      ${AUDIT_FIELDS}
    }
  }
  ${MEDICATION_FIELDS}
`;
