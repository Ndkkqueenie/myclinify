/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewConsultationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddConsultation
// ====================================================

export interface AddConsultation_addConsultation_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface AddConsultation_addConsultation_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface AddConsultation_addConsultation_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface AddConsultation_addConsultation_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface AddConsultation_addConsultation_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface AddConsultation_addConsultation_admissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface AddConsultation_addConsultation_vitals {
  __typename: "VitalModel";
  id: string;
}

export interface AddConsultation_addConsultation {
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
  allergies: AddConsultation_addConsultation_allergies[];
  labTests: AddConsultation_addConsultation_labTests[];
  medications: AddConsultation_addConsultation_medications[];
  radiology: AddConsultation_addConsultation_radiology[];
  surgeries: AddConsultation_addConsultation_surgeries[];
  admissions: AddConsultation_addConsultation_admissions[];
  vitals: AddConsultation_addConsultation_vitals[];
}

export interface AddConsultation {
  addConsultation: AddConsultation_addConsultation;
}

export interface AddConsultationVariables {
  input: NewConsultationInput;
}
