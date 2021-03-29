/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ConsultationLinking
// ====================================================

export interface ConsultationLinking_allergies {
  __typename: "AllergyModel";
  id: string;
}

export interface ConsultationLinking_labTests {
  __typename: "LabTestModel";
  id: string;
}

export interface ConsultationLinking_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface ConsultationLinking_radiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface ConsultationLinking_surgeries {
  __typename: "SurgeryModel";
  id: string;
}

export interface ConsultationLinking_admissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface ConsultationLinking_vitals {
  __typename: "VitalModel";
  id: string;
}

export interface ConsultationLinking {
  __typename: "ConsultationModel";
  allergies: ConsultationLinking_allergies[];
  labTests: ConsultationLinking_labTests[];
  medications: ConsultationLinking_medications[];
  radiology: ConsultationLinking_radiology[];
  surgeries: ConsultationLinking_surgeries[];
  admissions: ConsultationLinking_admissions[];
  vitals: ConsultationLinking_vitals[];
}
