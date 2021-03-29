import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

const BLOOD_TRANSFUSION_FIELDS = gql`
  fragment BloodTransfusions on BloodTransfusionModel {
    id
    transfusionDateTime
    transfusionOrderGiven
    transfusionDoctor
    transfusionNurse
    patientBloodGroup
    patientGenoType
    crossMatchingTime
    bloodLabel
    bloodProduct
    expiryDate
    donorBloodType
    bloodPint
    lengthOfTransfusion
    adverseReaction
    reaction
    transfusionNote
    patientConsent
    consentReason
    bloodSource
  }
`;

export const FETCH_BLOOD_TRANSFUSIONS = gql`
  query BloodTransfusions($parentRecordId: String!) {
    admissionBloodTransfusions(admissionId: $parentRecordId) {
      ...BloodTransfusions
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
`;

export const SAVE_BLOOD_TRANSFUSION = gql`
  mutation SaveBloodTransfusion($input: BloodTransfusionInput!, $id: String!, $clinifyId: String!) {
    saveBloodTransfusion(admissionId: $id, input: $input, clinifyId: $clinifyId) {
      ...BloodTransfusions
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
`;

export const UPDATE_BLOOD_TRANSFUSION = gql`
  mutation UpdateBloodTransfusion($input: BloodTransfusionInput!, $id: String!) {
    updateBloodTransfusion(id: $id, input: $input) {
      ...BloodTransfusions
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
`;

export const DELETE_BLOOD_TRANSFUSION = gql`
  mutation DeleteBloodTransfusion($id: String!) {
    deleteBloodTransfusion(id: $id) {
      id
    }
  }
`;

const TRANSFER_PATIENT_FIELDS = gql`
  fragment TransferPatients on TransferPatientModel {
    id
    transferDateTime
    transferredBy
    transferReason
    transferHospitalName
    transferHospitalAddress
  }
`;

export const FETCH_TRANSFER_PATIENTS = gql`
  query TransferPatients($parentRecordId: String!) {
    admissionTransferPatients(admissionId: $parentRecordId) {
      ...TransferPatients
      ${AUDIT_FIELDS}
    }
  }
  ${TRANSFER_PATIENT_FIELDS}
`;

export const SAVE_TRANSFER_PATIENT = gql`
  mutation SaveTransferPatient($input: TransferPatientInput!, $id: String!, $clinifyId: String!) {
    saveTransferPatient(admissionId: $id, input: $input, clinifyId: $clinifyId) {
      ...TransferPatients
      ${AUDIT_FIELDS}
    }
  }
  ${TRANSFER_PATIENT_FIELDS}
`;

export const UPDATE_TRANSFER_PATIENT = gql`
  mutation UpdateTransferPatient($input: TransferPatientInput!, $id: String!) {
    updateTransferPatient(id: $id, input: $input) {
      ...TransferPatients
      ${AUDIT_FIELDS}
    }
  }
  ${TRANSFER_PATIENT_FIELDS}
`;

export const DELETE_TRANSFER_PATIENT = gql`
  mutation DeleteTransferPatient($id: String!) {
    deleteTransferPatient(id: $id) {
      id
    }
  }
`;

const DISCHARGE_PATIENT_FIELDS = gql`
  fragment DischargePatients on DischargePatientModel {
    id
    dischargeDate
    dischargeSummary
    dischargedBy
  }
`;

export const FETCH_DISCHARGE_PATIENTS = gql`
  query DischargePatients($parentRecordId: String!) {
    admissionDischargePatients(admissionId: $parentRecordId) {
      ...DischargePatients
      ${AUDIT_FIELDS}
    }
  }
  ${DISCHARGE_PATIENT_FIELDS}
`;

export const SAVE_DISCHARGE_PATIENT = gql`
  mutation SaveDischargePatient($input: DischargePatientInput!, $id: String!, $clinifyId: String!) {
    saveDischargePatient(admissionId: $id, input: $input, clinifyId: $clinifyId) {
      ...DischargePatients
      ${AUDIT_FIELDS}
    }
  }
  ${DISCHARGE_PATIENT_FIELDS}
`;

export const UPDATE_DISCHARGE_PATIENT = gql`
  mutation UpdateDischargePatient($input: DischargePatientInput!, $id: String!) {
    updateDischargePatient(id: $id, input: $input) {
      ...DischargePatients
      ${AUDIT_FIELDS}
    }
  }
  ${DISCHARGE_PATIENT_FIELDS}
`;

export const DELETE_DISCHARGE_PATIENT = gql`
  mutation DeleteDischargePatient($id: String!) {
    deleteDischargePatient(id: $id) {
      id
    }
  }
`;

const NOTES_FIELDS = gql`
  fragment AdmissionNotes on AdmissionNoteModel {
    id
    creatorProfileType
    note
  }
`;

export const SAVE_ADMISSION_NOTES = gql`
  mutation SaveAdmissionNotes($input: AdmissionNoteInput!, $id: String!, $clinifyId: String!) {
    saveAdmissionNote(admissionId: $id, input: $input, clinifyId: $clinifyId) {
      ...AdmissionNotes
      ${AUDIT_FIELDS}
    }
  }
  ${NOTES_FIELDS}
`;

export const UPDATE_ADMISSION_NOTES = gql`
  mutation UpdateAdmissionNotes($input: AdmissionNoteInput!, $id: String!) {
    updateAdmissionNote(id: $id, input: $input) {
      ...AdmissionNotes
      ${AUDIT_FIELDS}
    }
  }
  ${NOTES_FIELDS}
`;

export const DELETE_ADMISSION_NOTES = gql`
  mutation DeleteAdmissionNotes($id: String!) {
    deleteAdmissionNote(id: $id) {
      id
    }
  }
`;

export const ADMISSION_FIELDS = gql`
  fragment Admission on AdmissionModel {
    id
    admissionDate
    admissionDiagnosis
    duration
    admittedBy
    ward
    hospitalUnit
    roomType
    fileNumber
    roomNumber
    bedNumber
    bedAvailable
    patientConsent
    dischargeDate
    transferDate
    clinicName
    clinicAddress
    documentUrl
    createdDate
    updatedDate
  }
`;

export const ADMISSION_LINKING_FIELDS = gql`
  fragment AdmissionLinking on AdmissionModel {
    allergies {
      id
    }
    labTests {
      id
    }
    medications {
      id
    }
    radiology {
      id
    }
    surgeries {
      id
    }
    consultations {
      id
    }
  }
`;

export const FETCH_ADMISSIONS = gql`
  query FetchAdmissions($filterOptions: AdmissionFilterInput, $id: String) {
    user(id: $id) {
      admissions(filterOptions: $filterOptions) {
        totalCount
        list {
          ...Admission
          ...AdmissionLinking
          bloodTransfusions {
            ...BloodTransfusions
          }
          transferPatients {
            ...TransferPatients
          }
          dischargePatients {
            ...DischargePatients
          }
        }
      }
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
  ${TRANSFER_PATIENT_FIELDS}
  ${DISCHARGE_PATIENT_FIELDS}
  ${ADMISSION_FIELDS}
  ${ADMISSION_LINKING_FIELDS}
`;

export const FETCH_ADMISSION = gql`
  query FetchAdmission($id: String!) {
    admission(id: $id) {
      ...Admission
      ...AdmissionLinking
      bloodTransfusions {
        ...BloodTransfusions
      }
      transferPatients {
        ...TransferPatients
      }
      dischargePatients {
        ...DischargePatients
      }
      admissionNotes {
        ...AdmissionNotes
        ${AUDIT_FIELDS}
      }
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
  ${TRANSFER_PATIENT_FIELDS}
  ${DISCHARGE_PATIENT_FIELDS}
  ${NOTES_FIELDS}
  ${ADMISSION_FIELDS}
  ${ADMISSION_LINKING_FIELDS}
`;

export const ADD_ADMISSION = gql`
  mutation AddAdmission($input: NewAdmissionInput!) {
    addAdmission(admission: $input) {
      ...Admission
      ...AdmissionLinking
      bloodTransfusions {
        ...BloodTransfusions
      }
      transferPatients {
        ...TransferPatients
      }
      dischargePatients {
        ...DischargePatients
      }
      admissionNotes {
        ...AdmissionNotes
      }
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
  ${TRANSFER_PATIENT_FIELDS}
  ${DISCHARGE_PATIENT_FIELDS}
  ${NOTES_FIELDS}
  ${ADMISSION_FIELDS}
  ${ADMISSION_LINKING_FIELDS}
`;

export const UPDATE_ADMISSION = gql`
  mutation UpdateAdmission($id: String!, $input: AdmissionInput!) {
    updateAdmission(id: $id, admission: $input) {
      ...Admission
      ...AdmissionLinking
      bloodTransfusions {
        ...BloodTransfusions
      }
      transferPatients {
        ...TransferPatients
      }
      dischargePatients {
        ...DischargePatients
      }
      admissionNotes {
        ...AdmissionNotes
      }
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
  ${TRANSFER_PATIENT_FIELDS}
  ${DISCHARGE_PATIENT_FIELDS}
  ${NOTES_FIELDS}
  ${ADMISSION_FIELDS}
  ${ADMISSION_LINKING_FIELDS}
`;

export const DELETE_ADMISSIONS = gql`
  mutation DeleteAdmissions($ids: [String!]!) {
    deleteAdmissions(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_ADMISSIONS = gql`
  mutation ArchiveAdmission($ids: [String!]!, $archive: Boolean) {
    archiveAdmissions(ids: $ids, archive: $archive) {
      ...Admission
      ...AdmissionLinking
      bloodTransfusions {
        ...BloodTransfusions
      }
      transferPatients {
        ...TransferPatients
      }
      dischargePatients {
        ...DischargePatients
      }
      admissionNotes {
        ...AdmissionNotes
      }
      ${AUDIT_FIELDS}
    }
  }
  ${BLOOD_TRANSFUSION_FIELDS}
  ${TRANSFER_PATIENT_FIELDS}
  ${DISCHARGE_PATIENT_FIELDS}
  ${NOTES_FIELDS}
  ${ADMISSION_FIELDS}
  ${ADMISSION_LINKING_FIELDS}
`;
