/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchAdmission
// ====================================================

export interface FetchAdmission_admission_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface FetchAdmission_admission_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface FetchAdmission_admission_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface FetchAdmission_admission_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface FetchAdmission_admission_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface FetchAdmission_admission_consultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface FetchAdmission_admission_bloodTransfusions {
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

export interface FetchAdmission_admission_transferPatients {
  __typename: "TransferPatientModel";
  id: string;
  transferDateTime: any | null;
  transferredBy: string | null;
  transferReason: string;
  transferHospitalName: string | null;
  transferHospitalAddress: string | null;
}

export interface FetchAdmission_admission_dischargePatients {
  __typename: "DischargePatientModel";
  id: string;
  dischargeDate: any | null;
  dischargeSummary: string;
  dischargedBy: string | null;
}

export interface FetchAdmission_admission_admissionNotes {
  __typename: "AdmissionNoteModel";
  id: string;
  creatorProfileType: string;
  note: string | null;
}

export interface FetchAdmission_admission {
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
  allergies: FetchAdmission_admission_allergies[];
  labTests: FetchAdmission_admission_labTests[];
  medications: FetchAdmission_admission_medications[];
  radiology: FetchAdmission_admission_radiology[];
  surgeries: FetchAdmission_admission_surgeries[];
  consultations: FetchAdmission_admission_consultations[];
  bloodTransfusions: FetchAdmission_admission_bloodTransfusions[] | null;
  transferPatients: FetchAdmission_admission_transferPatients[] | null;
  dischargePatients: FetchAdmission_admission_dischargePatients[] | null;
  admissionNotes: FetchAdmission_admission_admissionNotes[] | null;
}

export interface FetchAdmission {
  admission: FetchAdmission_admission;
}

export interface FetchAdmissionVariables {
  id: string;
}
