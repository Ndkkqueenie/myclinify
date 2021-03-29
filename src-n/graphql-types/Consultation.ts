/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Consultation
// ====================================================

export interface Consultation {
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
}
