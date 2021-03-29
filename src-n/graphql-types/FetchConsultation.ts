/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchConsultation
// ====================================================

export interface FetchConsultation_consultation_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface FetchConsultation_consultation_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface FetchConsultation_consultation_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface FetchConsultation_consultation_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface FetchConsultation_consultation_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface FetchConsultation_consultation_admissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface FetchConsultation_consultation_vitals {
  __typename: "VitalModel";
  id: string;
}

export interface FetchConsultation_consultation {
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
  allergies: FetchConsultation_consultation_allergies[];
  labTests: FetchConsultation_consultation_labTests[];
  medications: FetchConsultation_consultation_medications[];
  radiology: FetchConsultation_consultation_radiology[];
  surgeries: FetchConsultation_consultation_surgeries[];
  admissions: FetchConsultation_consultation_admissions[];
  vitals: FetchConsultation_consultation_vitals[];
}

export interface FetchConsultation {
  consultation: FetchConsultation_consultation;
}

export interface FetchConsultationVariables {
  id: string;
}
