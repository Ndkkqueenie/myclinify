/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewAdmissionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddAdmission
// ====================================================

export interface AddAdmission_addAdmission_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface AddAdmission_addAdmission_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface AddAdmission_addAdmission_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface AddAdmission_addAdmission_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface AddAdmission_addAdmission_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface AddAdmission_addAdmission_consultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface AddAdmission_addAdmission_bloodTransfusions {
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

export interface AddAdmission_addAdmission_transferPatients {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface AddAdmission_addAdmission_dischargePatients {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface AddAdmission_addAdmission_admissionNotes {
  __typename: "AdmissionNoteModel";
  id: string;
  creatorProfileType: string;
  note: string | null;
}

export interface AddAdmission_addAdmission {
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
  allergies: AddAdmission_addAdmission_allergies[];
  labTests: AddAdmission_addAdmission_labTests[];
  medications: AddAdmission_addAdmission_medications[];
  radiology: AddAdmission_addAdmission_radiology[];
  surgeries: AddAdmission_addAdmission_surgeries[];
  consultations: AddAdmission_addAdmission_consultations[];
  bloodTransfusions: AddAdmission_addAdmission_bloodTransfusions[] | null;
  transferPatients: AddAdmission_addAdmission_transferPatients[] | null;
  dischargePatients: AddAdmission_addAdmission_dischargePatients[] | null;
  admissionNotes: AddAdmission_addAdmission_admissionNotes[] | null;
}

export interface AddAdmission {
  addAdmission: AddAdmission_addAdmission;
}

export interface AddAdmissionVariables {
  input: NewAdmissionInput;
}
