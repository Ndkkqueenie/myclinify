/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ArchiveConsultations
// ====================================================

export interface ArchiveConsultations_archiveConsultations_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations_admissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations_vitals {
  __typename: "VitalModel";
  id: string;
}

export interface ArchiveConsultations_archiveConsultations {
  __typename: "ConsultationModel";
  id: string;
  consultationDateTime: any | null;
  duration: string | null;
  doctorName: string;
  priority: string | null;
  specialty: string | null;
  class: string | null;
  patientType: string | null;
  paymentType: string | null;
  clinicName: string | null;
  clinicAddress: string | null;
  complaint: string | null;
  complaintHistory: string | null;
  systemReview: string | null;
  physicalExam: string | null;
  treatmentPlan: string | null;
  provisionalDiagnosis: string[] | null;
  finalDiagnosis: string[] | null;
  documentUrl: string[] | null;
  allergies: ArchiveConsultations_archiveConsultations_allergies[];
  labTests: ArchiveConsultations_archiveConsultations_labTests[];
  medications: ArchiveConsultations_archiveConsultations_medications[];
  radiology: ArchiveConsultations_archiveConsultations_radiology[];
  surgeries: ArchiveConsultations_archiveConsultations_surgeries[];
  admissions: ArchiveConsultations_archiveConsultations_admissions[];
  vitals: ArchiveConsultations_archiveConsultations_vitals[];
}

export interface ArchiveConsultations {
  archiveConsultations: ArchiveConsultations_archiveConsultations[];
}

export interface ArchiveConsultationsVariables {
  ids: string[];
  archive?: boolean | null;
}
