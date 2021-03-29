/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConsultationFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FetchPatientConsultations
// ====================================================

export interface FetchPatientConsultations_user_consultations_list_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list_admissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list_vitals {
  __typename: "VitalModel";
  id: string;
}

export interface FetchPatientConsultations_user_consultations_list {
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
  allergies: FetchPatientConsultations_user_consultations_list_allergies[];
  labTests: FetchPatientConsultations_user_consultations_list_labTests[];
  medications: FetchPatientConsultations_user_consultations_list_medications[];
  radiology: FetchPatientConsultations_user_consultations_list_radiology[];
  surgeries: FetchPatientConsultations_user_consultations_list_surgeries[];
  admissions: FetchPatientConsultations_user_consultations_list_admissions[];
  vitals: FetchPatientConsultations_user_consultations_list_vitals[];
}

export interface FetchPatientConsultations_user_consultations {
  __typename: "ConsultationResponse";
  totalCount: number;
  list: FetchPatientConsultations_user_consultations_list[];
}

export interface FetchPatientConsultations_user {
  __typename: "UserModel";
  consultations: FetchPatientConsultations_user_consultations;
}

export interface FetchPatientConsultations {
  user: FetchPatientConsultations_user;
}

export interface FetchPatientConsultationsVariables {
  filterOptions?: ConsultationFilterInput | null;
  id?: string | null;
}
