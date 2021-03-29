/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveAdmission
// ====================================================

export interface ArchiveAdmission_archiveAdmissions_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface ArchiveAdmission_archiveAdmissions_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface ArchiveAdmission_archiveAdmissions_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface ArchiveAdmission_archiveAdmissions_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface ArchiveAdmission_archiveAdmissions_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface ArchiveAdmission_archiveAdmissions_consultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface ArchiveAdmission_archiveAdmissions_bloodTransfusions {
  __typename: "BloodTransfusionModel";
  id: string;
  transfusionDateTime: any | null;
  transfusionOrderGiven: string;
  transfusionDoctor: string | null;
  transfusionNurse: string | null;
  patientBloodGroup: string | null;
  patientGenoType: string | null;
  crossMatchingTime: string | null;
  bloodLabel: string | null;
  bloodProduct: string | null;
  expiryDate: string | null;
  donorBloodType: string | null;
  bloodPint: string | null;
  lengthOfTransfusion: string | null;
  adverseReaction: string | null;
  reaction: string | null;
  transfusionNote: string | null;
  patientConsent: string | null;
  consentReason: string | null;
  bloodSource: string | null;
}

export interface ArchiveAdmission_archiveAdmissions_transferPatients {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface ArchiveAdmission_archiveAdmissions_dischargePatients {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface ArchiveAdmission_archiveAdmissions_admissionNotes {
  __typename: "AdmissionNoteModel";
  id: string;
  creatorProfileType: string;
  note: string | null;
}

export interface ArchiveAdmission_archiveAdmissions {
  __typename: "AdmissionModel";
  id: string;
  admissionDate: any | null;
  admissionDiagnosis: string[] | null;
  duration: string | null;
  admittedBy: string | null;
  ward: string | null;
  hospitalUnit: string | null;
  roomType: string | null;
  fileNumber: string | null;
  roomNumber: string | null;
  bedNumber: string | null;
  bedAvailable: string | null;
  patientConsent: string | null;
  dischargeDate: any | null;
  transferDate: any | null;
  clinicName: string | null;
  clinicAddress: string | null;
  documentUrl: string[] | null;
  allergies: ArchiveAdmission_archiveAdmissions_allergies[];
  labTests: ArchiveAdmission_archiveAdmissions_labTests[];
  medications: ArchiveAdmission_archiveAdmissions_medications[];
  radiology: ArchiveAdmission_archiveAdmissions_radiology[];
  surgeries: ArchiveAdmission_archiveAdmissions_surgeries[];
  consultations: ArchiveAdmission_archiveAdmissions_consultations[];
  bloodTransfusions: ArchiveAdmission_archiveAdmissions_bloodTransfusions[] | null;
  transferPatients: ArchiveAdmission_archiveAdmissions_transferPatients[] | null;
  dischargePatients: ArchiveAdmission_archiveAdmissions_dischargePatients[] | null;
  admissionNotes: ArchiveAdmission_archiveAdmissions_admissionNotes[] | null;
}

export interface ArchiveAdmission {
  archiveAdmissions: ArchiveAdmission_archiveAdmissions[];
}

export interface ArchiveAdmissionVariables {
  ids: string[];
  archive?: boolean | null;
}
