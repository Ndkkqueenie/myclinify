/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender, EmploymentMemberStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: PatientOverview
// ====================================================

export interface PatientOverview_userOverView_dependent {
  __typename: "Dependent";
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  gender: Gender | null;
  relationship: string | null;
}

export interface PatientOverview_userOverView_coverage {
  __typename: "HmoProfileModel";
  hmoProvider: string | null;
  memberNumber: string | null;
  memberPlan: string | null;
  memberStatus: EmploymentMemberStatus | null;
  companyName: string | null;
  companyAddress: string | null;
}

export interface PatientOverview_userOverView_nextOfKin_phoneNumber {
  __typename: "PhoneNumberFields";
  countryName: string | null;
  countryCode: string | null;
  value: string | null;
}

export interface PatientOverview_userOverView_nextOfKin {
  __typename: "NextOfKin";
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  bloodGroup: string | null;
  relationship: string | null;
  occupation: string | null;
  phoneNumber: PatientOverview_userOverView_nextOfKin_phoneNumber | null;
  email: string | null;
  address: string | null;
}

export interface PatientOverview_userOverView_personalInformation {
  __typename: "PersonalInformation";
  title: string | null;
  displayPictureUrl: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  genoType: string | null;
  weight: number | null;
  weightUnit: string | null;
  height: number | null;
  heightUnit: string | null;
  address: string | null;
}

export interface PatientOverview_userOverView_lastAdmission {
  __typename: "AdmissionModel";
  admissionDate: any | null;
  admittedBy: string | null;
  finding: string | null;
  dischargeDate: any | null;
  admissionDiagnosis: string[] | null;
}

export interface PatientOverview_userOverView_allergies_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface PatientOverview_userOverView_allergies {
  __typename: "AllergyModel";
  occurenceDate: any | null;
  duration: string | null;
  details: PatientOverview_userOverView_allergies_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface PatientOverview_userOverView_lastImmunization {
  __typename: "ImmunizationModel";
  administeredDate: any | null;
  immunizationName: string;
  administratorName: string | null;
  method: string | null;
}

export interface PatientOverview_userOverView_lastConsultation {
  __typename: "ConsultationModel";
  consultationDateTime: any | null;
  doctorName: string;
  provisionalDiagnosis: string[] | null;
  finalDiagnosis: string[] | null;
}

export interface PatientOverview_userOverView_lastProcedure {
  __typename: "SurgeryModel";
  surgeryDate: any | null;
  type: string;
  specialty: string | null;
  operatedBy: string | null;
}

export interface PatientOverview_userOverView_lastLabTest_testInfo {
  __typename: "LabTestFields";
  testName: string;
}

export interface PatientOverview_userOverView_lastLabTest {
  __typename: "LabTestModel";
  testDate: any | null;
  testInfo: PatientOverview_userOverView_lastLabTest_testInfo[];
  orderedBy: string | null;
  performedBy: string | null;
}

export interface PatientOverview_userOverView_lastRadiology {
  __typename: "RadiologyModel";
  examDate: any | null;
  radiologist: string | null;
  requester: string | null;
  examType: string[] | null;
  requestType: string | null;
}

export interface PatientOverview_userOverView_lastAppointment {
  __typename: "AppointmentModel";
  facilityName: string | null;
  specialty: string | null;
  appointmentDateTime: any;
}

export interface PatientOverview_userOverView_currentMedication_details {
  __typename: "MedicationDetailsModel";
  medicationName: string;
  datePrescribed: any | null;
  prescribedBy: string | null;
  purpose: string | null;
}

export interface PatientOverview_userOverView_currentMedication {
  __typename: "MedicationModel";
  details: PatientOverview_userOverView_currentMedication_details[] | null;
}

export interface PatientOverview_userOverView_lastVitalSign_anthropometry {
  __typename: "AnthropometryModel";
  height: number | null;
  heightUnit: string | null;
  weight: number | null;
  weightUnit: string | null;
}

export interface PatientOverview_userOverView_lastVitalSign_bloodGlucose {
  __typename: "BloodGlucoseModel";
  reading: number | null;
  readingUnit: string | null;
}

export interface PatientOverview_userOverView_lastVitalSign_bloodPressure {
  __typename: "BloodPressureModel";
  diastolic: number | null;
  systolic: number | null;
}

export interface PatientOverview_userOverView_lastVitalSign_pulseRate {
  __typename: "PulseRateModel";
  reading: number | null;
}

export interface PatientOverview_userOverView_lastVitalSign_respiratoryRate {
  __typename: "RespiratoryRateModel";
  reading: number | null;
}

export interface PatientOverview_userOverView_lastVitalSign_temperature {
  __typename: "TemperatureModel";
  reading: number | null;
  readingUnit: string | null;
}

export interface PatientOverview_userOverView_lastVitalSign {
  __typename: "VitalModel";
  id: string;
  createdDate: any;
  anthropometry: PatientOverview_userOverView_lastVitalSign_anthropometry[] | null;
  bloodGlucose: PatientOverview_userOverView_lastVitalSign_bloodGlucose[] | null;
  bloodPressure: PatientOverview_userOverView_lastVitalSign_bloodPressure[] | null;
  pulseRate: PatientOverview_userOverView_lastVitalSign_pulseRate[] | null;
  respiratoryRate: PatientOverview_userOverView_lastVitalSign_respiratoryRate[] | null;
  temperature: PatientOverview_userOverView_lastVitalSign_temperature[] | null;
}

export interface PatientOverview_userOverView {
  __typename: "overviewResponse";
  completion: string | null;
  primaryPhoneNumber: string | null;
  primaryEmail: string | null;
  dependent: PatientOverview_userOverView_dependent | null;
  coverage: PatientOverview_userOverView_coverage | null;
  nextOfKin: PatientOverview_userOverView_nextOfKin | null;
  personalInformation: PatientOverview_userOverView_personalInformation | null;
  lastAdmission: PatientOverview_userOverView_lastAdmission | null;
  allergies: PatientOverview_userOverView_allergies[] | null;
  lastImmunization: PatientOverview_userOverView_lastImmunization | null;
  lastConsultation: PatientOverview_userOverView_lastConsultation | null;
  lastProcedure: PatientOverview_userOverView_lastProcedure | null;
  lastLabTest: PatientOverview_userOverView_lastLabTest | null;
  lastRadiology: PatientOverview_userOverView_lastRadiology | null;
  lastAppointment: PatientOverview_userOverView_lastAppointment | null;
  currentMedication: PatientOverview_userOverView_currentMedication | null;
  lastVitalSign: PatientOverview_userOverView_lastVitalSign | null;
}

export interface PatientOverview {
  userOverView: PatientOverview_userOverView;
}

export interface PatientOverviewVariables {
  id?: string | null;
}
