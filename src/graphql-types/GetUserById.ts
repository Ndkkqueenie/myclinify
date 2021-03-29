/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender, EmploymentMemberStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserById
// ====================================================

export interface GetUserById_user_defaultProfile_personalInformation_secondaryPhoneNumber {
  __typename: "PhoneNumberFields";
  value: string | null;
  countryCode: string | null;
  countryName: string | null;
}

export interface GetUserById_user_defaultProfile_personalInformation {
  __typename: "PersonalInformation";
  title: string | null;
  displayPictureUrl: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  genoType: string | null;
  weight: number | null;
  weightUnit: string | null;
  height: number | null;
  heightUnit: string | null;
  address: string | null;
  secondaryPhoneNumber: GetUserById_user_defaultProfile_personalInformation_secondaryPhoneNumber | null;
}

export interface GetUserById_user_defaultProfile_backgroundInformation {
  __typename: "backgroundInformation";
  maritalStatus: string | null;
  numberOfChildren: number | null;
  education: string | null;
  state: string | null;
  religion: string | null;
  occupation: string | null;
  salaryRange: string | null;
  bloodDonor: string | null;
}

export interface GetUserById_user_defaultProfile {
  __typename: "ProfileModel";
  id: string;
  clinifyId: string;
  active: boolean;
  isDefault: boolean;
  createdDate: any;
  updatedDate: any;
  type: string;
  personalInformation: GetUserById_user_defaultProfile_personalInformation | null;
  backgroundInformation: GetUserById_user_defaultProfile_backgroundInformation | null;
}

export interface GetUserById_user_hmos_list {
  __typename: "HmoProfileModel";
  id: string;
  createdDate: any;
  updatedDate: any;
  memberPlan: string | null;
  memberNumber: string | null;
  memberStatus: EmploymentMemberStatus | null;
  employeeNumber: string | null;
  memberStartDate: any | null;
  companyName: string | null;
  primaryProviderName: string | null;
  secondaryProviderName: string | null;
  tertiaryProviderName: string | null;
  primaryProviderAddress: string | null;
  secondaryProviderAddress: string | null;
  tertiaryProviderAddress: string | null;
  hmoProvider: string | null;
}

export interface GetUserById_user_hmos {
  __typename: "HmoProfileResponse";
  list: GetUserById_user_hmos_list[];
}

export interface GetUserById_user_allergies_list_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface GetUserById_user_allergies_list {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: GetUserById_user_allergies_list_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  createdDate: any;
  updatedDate: any;
}

export interface GetUserById_user_allergies {
  __typename: "AllergyResponse";
  list: GetUserById_user_allergies_list[];
}

export interface GetUserById_user_medications_list_details {
  __typename: "MedicationDetailsModel";
  datePrescribed: any | null;
  duration: string | null;
  medicationName: string;
  purpose: string | null;
  prescribedBy: string | null;
  administrationMethod: string | null;
  dosage: number | null;
  dosageUnit: string | null;
  type: string | null;
  quantity: number | null;
  startDate: any | null;
  endDate: any | null;
  discontinue: string | null;
  refillNumber: number | null;
  frequency: string | null;
}

export interface GetUserById_user_medications_list_dispenseDetails_createdBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface GetUserById_user_medications_list_dispenseDetails_updatedBy {
  __typename: "ProfileModel";
  fullName: string | null;
}

export interface GetUserById_user_medications_list_dispenseDetails {
  __typename: "DispenseDetailsModel";
  id: string;
  dispenseDate: any | null;
  dispensedBy: string | null;
  medicationName: string[] | null;
  dispenseNote: string | null;
  dispensePatientType: string | null;
  dispensePaymentType: string | null;
  createdDate: any;
  createdBy: GetUserById_user_medications_list_dispenseDetails_createdBy;
  updatedDate: any;
  updatedBy: GetUserById_user_medications_list_dispenseDetails_updatedBy | null;
}

export interface GetUserById_user_medications_list {
  __typename: "MedicationModel";
  id: string;
  patientType: string | null;
  paymentType: string | null;
  details: GetUserById_user_medications_list_details[] | null;
  dispenseDetails: GetUserById_user_medications_list_dispenseDetails[] | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  setReminder: boolean | null;
  reminderStartDate: any | null;
  reminderEndDate: any | null;
  medicationStartTime: string | null;
  medicationEndTime: string | null;
  interval: number | null;
  intervalUnit: string | null;
  remindMe: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface GetUserById_user_medications {
  __typename: "MedicationResponse";
  list: GetUserById_user_medications_list[];
}

export interface GetUserById_user_admissions_list {
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
}

export interface GetUserById_user_admissions {
  __typename: "AdmissionResponse";
  list: GetUserById_user_admissions_list[];
}

export interface GetUserById_user_lab_tests_list_testInfo {
  __typename: "LabTestFields";
  testName: string;
  testCategory: string | null;
}

export interface GetUserById_user_lab_tests_list {
  __typename: "LabTestModel";
  id: string;
  testDate: any | null;
  specialty: string | null;
  requestDate: any | null;
  requestType: string;
  patientType: string;
  duration: string | null;
  testInfo: GetUserById_user_lab_tests_list_testInfo[];
  orderedBy: string | null;
  collectionDate: any | null;
  collectedBy: string | null;
  result: string | null;
  labName: string | null;
  labAddress: string | null;
  priority: string | null;
  pathologist: string | null;
  pathologistReport: string | null;
  verifiedBy: string | null;
  performedBy: string | null;
  specimenCollected: string | null;
  range: string | null;
  resultDate: any | null;
  additionalNote: string | null;
  documentUrl: string[] | null;
  createdDate: any;
  updatedDate: any;
}

export interface GetUserById_user_lab_tests {
  __typename: "LabTestResponse";
  list: GetUserById_user_lab_tests_list[];
}

export interface GetUserById_user_immunizations_list {
  __typename: "ImmunizationModel";
  id: string;
  administeredDate: any | null;
  duration: string | null;
  immunizationName: string;
  administratorName: string | null;
  nextAppointmentDateTime: any | null;
  batchNumber: string | null;
  expiryDate: any | null;
  remindMe: boolean | null;
  quantity: number | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  dosage: number | null;
  dosageUnit: string | null;
  method: string | null;
  additionalNote: string | null;
  documentUrl: string[] | null;
  createdDate: any;
}

export interface GetUserById_user_immunizations {
  __typename: "ImmunizationResponse";
  list: GetUserById_user_immunizations_list[];
}

export interface GetUserById_user_radiology_list {
  __typename: "RadiologyModel";
  id: string;
  requestDate: any | null;
  requestType: string | null;
  priority: string | null;
  requester: string | null;
  patientType: string | null;
  specialty: string | null;
  examType: string[] | null;
  clinicalNote: string | null;
  examDate: any | null;
  duration: string | null;
  radiologist: string | null;
  paymentType: string | null;
  radiologyName: string | null;
  radiologyAddress: string | null;
  report: string | null;
  impression: string | null;
  documentUrl: string[] | null;
}

export interface GetUserById_user_radiology {
  __typename: "RadiologyResponse";
  list: GetUserById_user_radiology_list[];
}

export interface GetUserById_user_surgeries_list {
  __typename: "SurgeryModel";
  id: string;
  surgeryDate: any | null;
  duration: string | null;
  type: string;
  rank: string | null;
  reason: string | null;
  assistantSurgeon: string | null;
  requestedBy: string | null;
  specialty: string | null;
  facilityName: string | null;
  facilityAddress: string | null;
  operatedBy: string | null;
  priority: string | null;
  patientType: string | null;
  patientConsent: string | null;
  paymentType: string | null;
  operatingRoomNurse: string | null;
  anesthetistName: string | null;
  anesthesia: string | null;
  operationNote: string | null;
  postOperationNote: string | null;
  documentUrl: string[] | null;
  createdDate: any;
}

export interface GetUserById_user_surgeries {
  __typename: "SurgeryResponse";
  list: GetUserById_user_surgeries_list[];
}

export interface GetUserById_user_consultations_list {
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
  createdDate: any;
}

export interface GetUserById_user_consultations {
  __typename: "ConsultationResponse";
  list: GetUserById_user_consultations_list[];
}

export interface GetUserById_user {
  __typename: "UserModel";
  email: string | null;
  phoneNumber: string;
  defaultProfile: GetUserById_user_defaultProfile | null;
  hmos: GetUserById_user_hmos;
  allergies: GetUserById_user_allergies;
  medications: GetUserById_user_medications;
  admissions: GetUserById_user_admissions;
  lab_tests: GetUserById_user_lab_tests;
  immunizations: GetUserById_user_immunizations;
  radiology: GetUserById_user_radiology;
  surgeries: GetUserById_user_surgeries;
  consultations: GetUserById_user_consultations;
}

export interface GetUserById {
  user: GetUserById_user;
}

export interface GetUserByIdVariables {
  id: string;
}
