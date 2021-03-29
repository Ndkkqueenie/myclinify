/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AdmissionFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FetchAdmissions
// ====================================================

export interface FetchAdmissions_user_admissions_list_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface FetchAdmissions_user_admissions_list_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface FetchAdmissions_user_admissions_list_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface FetchAdmissions_user_admissions_list_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface FetchAdmissions_user_admissions_list_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface FetchAdmissions_user_admissions_list_consultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface FetchAdmissions_user_admissions_list_bloodTransfusions {
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

export interface FetchAdmissions_user_admissions_list_transferPatients {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface FetchAdmissions_user_admissions_list_dischargePatients {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface FetchAdmissions_user_admissions_list {
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
  allergies: FetchAdmissions_user_admissions_list_allergies[];
  labTests: FetchAdmissions_user_admissions_list_labTests[];
  medications: FetchAdmissions_user_admissions_list_medications[];
  radiology: FetchAdmissions_user_admissions_list_radiology[];
  surgeries: FetchAdmissions_user_admissions_list_surgeries[];
  consultations: FetchAdmissions_user_admissions_list_consultations[];
  bloodTransfusions: FetchAdmissions_user_admissions_list_bloodTransfusions[] | null;
  transferPatients: FetchAdmissions_user_admissions_list_transferPatients[] | null;
  dischargePatients: FetchAdmissions_user_admissions_list_dischargePatients[] | null;
}

export interface FetchAdmissions_user_admissions {
  __typename: "AdmissionResponse";
  totalCount: number;
  list: FetchAdmissions_user_admissions_list[];
}

export interface FetchAdmissions_user {
  __typename: "UserModel";
  admissions: FetchAdmissions_user_admissions;
}

export interface FetchAdmissions {
  user: FetchAdmissions_user;
}

export interface FetchAdmissionsVariables {
  filterOptions?: AdmissionFilterInput | null;
  id?: string | null;
}
