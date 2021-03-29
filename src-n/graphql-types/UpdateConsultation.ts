/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConsultationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateConsultation
// ====================================================

export interface UpdateConsultation_updateConsultation_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation_admissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation_vitals {
  __typename: "VitalModel";
  id: string;
}

export interface UpdateConsultation_updateConsultation {
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
  allergies: UpdateConsultation_updateConsultation_allergies[];
  labTests: UpdateConsultation_updateConsultation_labTests[];
  medications: UpdateConsultation_updateConsultation_medications[];
  radiology: UpdateConsultation_updateConsultation_radiology[];
  surgeries: UpdateConsultation_updateConsultation_surgeries[];
  admissions: UpdateConsultation_updateConsultation_admissions[];
  vitals: UpdateConsultation_updateConsultation_vitals[];
}

export interface UpdateConsultation {
  updateConsultation: UpdateConsultation_updateConsultation;
}

export interface UpdateConsultationVariables {
  id: string;
  input: ConsultationInput;
}
