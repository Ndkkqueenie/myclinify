/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AdmissionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAdmission
// ====================================================

export interface UpdateAdmission_updateAdmission_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface UpdateAdmission_updateAdmission_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface UpdateAdmission_updateAdmission_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface UpdateAdmission_updateAdmission_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface UpdateAdmission_updateAdmission_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface UpdateAdmission_updateAdmission_consultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface UpdateAdmission_updateAdmission_bloodTransfusions {
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

export interface UpdateAdmission_updateAdmission_transferPatients {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface UpdateAdmission_updateAdmission_dischargePatients {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface UpdateAdmission_updateAdmission_admissionNotes {
  __typename: "AdmissionNoteModel";
  id: string;
  creatorProfileType: string;
  note: string | null;
}

export interface UpdateAdmission_updateAdmission {
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
  allergies: UpdateAdmission_updateAdmission_allergies[];
  labTests: UpdateAdmission_updateAdmission_labTests[];
  medications: UpdateAdmission_updateAdmission_medications[];
  radiology: UpdateAdmission_updateAdmission_radiology[];
  surgeries: UpdateAdmission_updateAdmission_surgeries[];
  consultations: UpdateAdmission_updateAdmission_consultations[];
  bloodTransfusions: UpdateAdmission_updateAdmission_bloodTransfusions[] | null;
  transferPatients: UpdateAdmission_updateAdmission_transferPatients[] | null;
  dischargePatients: UpdateAdmission_updateAdmission_dischargePatients[] | null;
  admissionNotes: UpdateAdmission_updateAdmission_admissionNotes[] | null;
}

export interface UpdateAdmission {
  updateAdmission: UpdateAdmission_updateAdmission;
}

export interface UpdateAdmissionVariables {
  id: string;
  input: AdmissionInput;
}
