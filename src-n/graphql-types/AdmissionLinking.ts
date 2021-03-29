/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AdmissionLinking
// ====================================================

export interface AdmissionLinking_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface AdmissionLinking_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface AdmissionLinking_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface AdmissionLinking_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface AdmissionLinking_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface AdmissionLinking_consultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface AdmissionLinking {
  __typename: "AdmissionModel";
  allergies: AdmissionLinking_allergies[];
  labTests: AdmissionLinking_labTests[];
  medications: AdmissionLinking_medications[];
  radiology: AdmissionLinking_radiology[];
  surgeries: AdmissionLinking_surgeries[];
  consultations: AdmissionLinking_consultations[];
}
