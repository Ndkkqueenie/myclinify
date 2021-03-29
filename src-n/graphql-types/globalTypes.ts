/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * The types of acceptable note creator profile types
 */
export enum AdmissionNotesCreatorProfileTypes {
  Doctor = "Doctor",
  OrganizationDoctor = "OrganizationDoctor",
  OrganizationNurse = "OrganizationNurse",
}

export enum AppointmentType {
  Organization = "Organization",
  Private = "Private",
}

export enum UserType {
  Patient = 'Patient',
  Doctor = 'Doctor',
  OrganizationDoctor = 'OrganizationDoctor',
  OrganizationNurse = 'OrganizationNurse',
  OrganizationFrontDeskOfficer = 'OrganizationFrontDeskOfficer',
  ClaimOfficer = 'ClaimOfficer',
  Pharmacist = 'Pharmacist',
  Admin = 'Admin',
  OrganizationAdmin = 'OrganizationAdmin',
  SuperAdmin = 'SuperAdmin',
}

/**
 * The types of statuses that can be inserted
 */
export enum BillingStatus {
  Approved = "Approved",
  Awaiting = "Awaiting",
  Draft = "Draft",
  Rejected = "Rejected",
  Unverified = "Unverified",
  Verified = "Verified",
}

/**
 * The valid status types for bulk check in and check out
 */
export enum CheckInOrOutStatus {
  CheckedInAndUnassigned = "CheckedInAndUnassigned",
  CheckedOut = "CheckedOut",
}

/**
 * supported Currency types
 */
export enum Currency {
  KOBO = "KOBO",
}

export enum EmploymentMemberStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

/**
 * The types acceptable for hospital status
 */
export enum HospitalStatusTypes {
  Approved = "Approved",
  Pending = "Pending",
  Rejected = "Rejected",
}

/**
 * The types of statuses that can be inserted
 */
export enum ProviderBillingStatus {
  Awaiting = "Awaiting",
  Draft = "Draft",
}

export enum RecordCreator {
  OTHERS = "OTHERS",
  SELF = "SELF",
}

/**
 * The types of severeness that can be inserted
 */
export enum SevereType {
  Mild = "Mild",
  Moderate = "Moderate",
  Severe = "Severe",
}

export enum SubUserType {
  Doctor = "Doctor",
  Patient = "Patient",
}

export enum UserListType {
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
}

/**
 * The types of vitals that can be inserted
 */
export enum VitalType {
  Anthropometry = "Anthropometry",
  BloodGlucose = "BloodGlucose",
  BloodPressure = "BloodPressure",
  Cholesterol = "Cholesterol",
  PulseRate = "PulseRate",
  RespiratoryRate = "RespiratoryRate",
  Temperature = "Temperature",
  UrineDipstick = "UrineDipstick",
  VisualAcuity = "VisualAcuity",
}

/**
 * The types of acceptable status for waiting list
 */
export enum WaitingListStatus {
  CheckedInAndAssigned = "CheckedInAndAssigned",
  CheckedInAndUnassigned = "CheckedInAndUnassigned",
  CheckedOut = "CheckedOut",
  Completed = "Completed",
  Reassigned = "Reassigned",
}

export interface AdmissionFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface AdmissionInput {
  clinifyId?: string | null;
  admissionDate?: any | null;
  duration?: string | null;
  admittedBy?: string | null;
  fileNumber?: string | null;
  ward?: string | null;
  roomType?: string | null;
  roomNumber?: string | null;
  bedNumber?: string | null;
  dischargePatients?: DischargePatientInput[] | null;
  bloodTransfusions?: BloodTransfusionInput[] | null;
  transferPatients?: TransferPatientInput[] | null;
  admissionNotes?: AdmissionNoteInput[] | null;
  dischargeDate?: any | null;
  transferDate?: any | null;
  clinicName?: string | null;
  clinicAddress?: string | null;
  hospitalUnit?: string | null;
  admissionDiagnosis?: string[] | null;
  doctorInCharge?: string | null;
  roomOption?: string | null;
  patientConsent?: string | null;
  bedAvailable?: string | null;
  finding?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
  allergies?: string[] | null;
  consultations?: string[] | null;
  labTests?: string[] | null;
  medications?: string[] | null;
  radiology?: string[] | null;
  surgeries?: string[] | null;
  vitals?: string[] | null;
}

export interface AdmissionNoteInput {
  creatorProfileType: AdmissionNotesCreatorProfileTypes;
  note?: string | null;
}

export interface AllergyFieldsInput {
  type: string;
  trigger: string;
  reactions?: string[] | null;
  severeness?: SevereType | null;
}

export interface AllergyFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface AllergyInput {
  clinifyId: string;
  occurenceDate?: any | null;
  duration?: string | null;
  details?: AllergyFieldsInput[] | null;
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  medications?: string[] | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface AnthropometryVitalFields {
  readingDateTime?: any | null;
  height?: number | null;
  heightUnit?: string | null;
  weight?: number | null;
  weightUnit?: string | null;
  hipCircumference?: number | null;
  hipCircumferenceUnit?: string | null;
  waistCircumference?: number | null;
  waistCircumferenceUnit?: string | null;
  skinfoldThickness?: number | null;
  skinfoldThicknessUnit?: string | null;
  leftUpperLimbCircumference?: number | null;
  rightUpperLimbCircumference?: number | null;
  upperLimbCircumferenceUnit?: string | null;
  leftLowerLimbCircumference?: number | null;
  rightLowerLimbCircumference?: number | null;
  lowerLimbCircumferenceUnit?: string | null;
  abdominalGirth?: number | null;
  abdominalGirthUnit?: string | null;
}

export interface AppointmentFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
  type?: AppointmentType | null;
}

export interface AppointmentInput {
  type?: AppointmentType | null;
  facilityName?: string | null;
  facilityAddress?: string | null;
  availabilityId?: string | null;
  currency?: Currency | null;
  specialty?: string | null;
  category?: string | null;
  reason?: string | null;
  appointmentDateTime?: any | null;
  frequency?: string | null;
  remindMe?: boolean | null;
  reminderDateTime?: any | null;
  reminderDuration?: string | null;
  duration?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
  availabilitySlotCode?: string | null;
}

export interface BackgroundInformationInput {
  maritalStatus?: string | null;
  numberOfChildren?: number | null;
  education?: string | null;
  state?: string | null;
  religion?: string | null;
  occupation?: string | null;
  salaryRange?: string | null;
  bloodDonor?: string | null;
  nationality?: string | null;
  organDonor?: string | null;
}

export interface BillingBillItems {
  incuredDate: any;
  claimType: string;
  authorizationCode?: string | null;
  serviceType?: string | null;
  option?: string | null;
  duration?: string | null;
  diagnosisCode?: string | null;
  drugName?: string | null;
  description: string;
  quantity: number;
  price: number;
  totalAmount: number;
}

export interface BillingBills {
  admissions?: BillingBillItems[] | null;
  allergies?: BillingBillItems[] | null;
  appointments?: BillingBillItems[] | null;
  consultations?: BillingBillItems[] | null;
  labTests?: BillingBillItems[] | null;
  medications?: BillingBillItems[] | null;
  radiology?: BillingBillItems[] | null;
  surgeries?: BillingBillItems[] | null;
}

export interface BillingDetailsInput {
  personalInfo: PersonalInformationInput;
  backgroundInfo?: BackgroundInformationInput | null;
  nextofKin?: NextOfKinInput | null;
}

export interface BillingHealthInput {
  conditions?: PreExistingConditionInput[] | null;
  habits?: HabitInput[] | null;
  physicalActivities?: PhysicalActivityInput[] | null;
  disability?: DisabilityInput[] | null;
}

export interface BloodGlucoseVitalFields {
  readingDateTime?: any | null;
  reading?: number | null;
  readingUnit?: string | null;
  mealTime?: string | null;
}

export interface BloodPressureVitalFields {
  readingDateTime?: any | null;
  diastolic?: number | null;
  systolic?: number | null;
  meanArterialPressure?: number | null;
}

export interface BloodTransfusionInput {
  transfusionDateTime?: any | null;
  transfusionOrderGiven: string;
  transfusionDoctor?: string | null;
  transfusionNurse?: string | null;
  patientBloodGroup?: string | null;
  patientGenoType?: string | null;
  crossMatchingTime?: string | null;
  bloodProduct?: string | null;
  bloodLabel?: string | null;
  expiryDate?: string | null;
  donorBloodType?: string | null;
  otherBloodType?: string | null;
  bloodPint?: string | null;
  lengthOfTransfusion?: string | null;
  adverseReaction?: string | null;
  reaction?: string | null;
  transfusionNote?: string | null;
  patientConsent?: string | null;
  consentReason?: string | null;
  bloodSource?: string | null;
}

export interface ClaimFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  status?: BillingStatus | null;
  hospital?: string | null;
  hmo?: string | null;
  memberNumber?: string | null;
  clinifyId?: string | null;
}

export interface CompleteRegistrationInput {
  details?: PersonalInformationInput | null;
  email: string;
  userType: SubUserType;
}

export interface CompleteSignupInput {
  userId: string;
  passCode: string;
}

export interface ConsultationFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface ConsultationInput {
  clinifyId?: string | null;
  consultationDateTime?: any | null;
  duration?: string | null;
  doctorName?: string | null;
  priority?: string | null;
  specialty?: string | null;
  class?: string | null;
  patientType?: string | null;
  paymentType?: string | null;
  consultationStartDate?: any | null;
  consultationEndDate?: any | null;
  clinicName?: string | null;
  clinicAddress?: string | null;
  documentUrl?: string[] | null;
  complaint?: string | null;
  complaintHistory?: string | null;
  systemReview?: string | null;
  physicalExam?: string | null;
  treatmentPlan?: string | null;
  provisionalDiagnosis?: string[] | null;
  finalDiagnosis?: string[] | null;
  admissions?: string[] | null;
  allergies?: string[] | null;
  labTests?: string[] | null;
  medications?: string[] | null;
  radiology?: string[] | null;
  surgeries?: string[] | null;
  vitals?: string[] | null;
}

export interface CorporateLoginInput {
  email: string;
  password: string;
}

export interface DateRangeInput {
  from?: any | null;
  to?: any | null;
}

export interface DependentInput {
  title?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: Gender | null;
  dateOfBirth?: any | null;
  bloodGroup?: string | null;
  genoType?: string | null;
  relationship?: string | null;
}

export interface DisabilityInput {
  disability?: string | null;
  type?: string | null;
  additionalNote?: string | null;
}

export interface DischargePatientInput {
  dischargeDate?: any | null;
  dischargeSummary: string;
  dischargedBy?: string | null;
}

export interface DispenseDetailsInput {
  dispenseDate?: any | null;
  medicationName?: string[] | null;
  dispenseNote?: string | null;
  dispensePatientType?: string | null;
  dispensePaymentType?: string | null;
  dispensedBy?: string | null;
}

export interface FamilyHistoryInput {
  title?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: Gender | null;
  dateOfBirth?: any | null;
  bloodGroup?: string | null;
  relationship?: string | null;
  condition: string[];
  additionalNote?: string | null;
}

export interface ForgotPasscodeInput {
  email: string;
}

export interface GynecologicHistoryInput {
  firstMenstrualAge?: number | null;
  menstrualCycleLength?: number | null;
  menstrualFlowDuration?: number | null;
  lastMenstrualPeriod?: any | null;
  menstrualFlow?: string | null;
  contraceptiveUse?: string | null;
  contraceptiveType?: string | null;
  miscarriageOrAbortion?: string | null;
  miscarriageOrAbortionCount?: number | null;
  additionalNote?: string | null;
}

export interface HabitInput {
  socialHabit?: string | null;
  level?: string | null;
  duration?: string | null;
  typeSpecified?: string | null;
  cigrattesPerDay?: number | null;
  unitPerWeek?: number | null;
  additionalNote?: string | null;
}

export interface HmoProfileFilterInput {
  skip?: number | null;
  take?: number | null;
}

export interface HmoProfileInput {
  memberNumber?: string | null;
  memberPlan?: string | null;
  employeeNumber?: string | null;
  hmoProvider?: string | null;
  memberStartDate?: any | null;
  memberStatus?: EmploymentMemberStatus | null;
  companyName?: string | null;
  companyAddress?: string | null;
  primaryProviderName?: string | null;
  secondaryProviderName?: string | null;
  tertiaryProviderName?: string | null;
  primaryProviderAddress?: string | null;
  secondaryProviderAddress?: string | null;
  tertiaryProviderAddress?: string | null;
}

export interface HospitalFilterInput {
  skip?: number | null;
  take?: number | null;
  keyword?: string | null;
  state?: string | null;
  lga?: string | null;
  level?: string | null;
  ownership?: string | null;
  status?: HospitalStatusTypes | null;
}

export interface ImmunizationFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface ImmunizationInput {
  clinifyId?: string | null;
  administeredDate?: any | null;
  duration?: string | null;
  immunizationName?: string | null;
  administratorName?: string | null;
  batchNumber?: string | null;
  expiryDate?: any | null;
  method?: string | null;
  quantity?: number | null;
  dosage?: number | null;
  dosageUnit?: string | null;
  nextAppointmentDateTime?: any | null;
  remindMe?: boolean | null;
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface LabFieldsInput {
  testName: string;
  testCategory?: string | null;
}

export interface LabTestFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface LabTestInput {
  clinifyId?: string | null;
  testDate?: any | null;
  specialty?: string | null;
  requestDate?: any | null;
  requestType?: string | null;
  patientType?: string | null;
  duration?: string | null;
  testInfo?: LabFieldsInput[] | null;
  collectedBy?: string | null;
  orderedBy?: string | null;
  collectionDate?: any | null;
  resultDate?: any | null;
  result?: string | null;
  range?: string | null;
  priority?: string | null;
  pathologist?: string | null;
  pathologistReport?: string | null;
  verifiedBy?: string | null;
  performedBy?: string | null;
  specimenCollected?: string | null;
  paymentType?: string | null;
  labName?: string | null;
  labAddress?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface LoginInput {
  phoneNumber: string;
  passCode: string;
}

export interface MedFilterOptions {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface MedicationDetailsInput {
  id?: string | null;
  datePrescribed?: any | null;
  duration?: string | null;
  medicationName: string;
  purpose: string;
  prescribedBy?: string | null;
  administrationMethod?: string | null;
  type?: string | null;
  quantity?: number | null;
  dosage?: number | null;
  dosageUnit?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  frequency?: string | null;
  discontinue?: string | null;
  refillNumber?: number | null;
}

export interface MedicationInput {
  clinifyId?: string | null;
  setReminder?: boolean | null;
  reminderStartDate?: any | null;
  reminderEndDate?: any | null;
  medicationStartTime?: string | null;
  medicationEndTime?: string | null;
  interval?: number | null;
  intervalUnit?: string | null;
  dispenseDetails?: DispenseDetailsInput[] | null;
  details: MedicationDetailsInput[];
  remindMe?: string | null;
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  discontinue?: string | null;
  refillNumber?: number | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
  patientType?: string | null;
  paymentType?: string | null;
}

export interface NewAdmissionInput {
  clinifyId?: string | null;
  admissionDate?: any | null;
  duration?: string | null;
  admittedBy?: string | null;
  fileNumber?: string | null;
  ward?: string | null;
  roomType?: string | null;
  roomNumber?: string | null;
  bedNumber?: string | null;
  dischargePatients?: DischargePatientInput[] | null;
  bloodTransfusions?: BloodTransfusionInput[] | null;
  transferPatients?: TransferPatientInput[] | null;
  admissionNotes?: AdmissionNoteInput[] | null;
  dischargeDate?: any | null;
  transferDate?: any | null;
  clinicName: string;
  clinicAddress?: string | null;
  hospitalUnit?: string | null;
  admissionDiagnosis?: string[] | null;
  doctorInCharge?: string | null;
  roomOption?: string | null;
  patientConsent?: string | null;
  bedAvailable?: string | null;
  finding?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
  allergies?: string[] | null;
  consultations?: string[] | null;
  labTests?: string[] | null;
  medications?: string[] | null;
  radiology?: string[] | null;
  surgeries?: string[] | null;
  vitals?: string[] | null;
}

export interface NewAllergyInput {
  clinifyId: string;
  occurenceDate?: any | null;
  duration?: string | null;
  details: AllergyFieldsInput[];
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  medications?: string[] | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface NewAppointmentInput {
  type?: AppointmentType | null;
  guestClinifyId: string;
  facilityName?: string | null;
  facilityAddress?: string | null;
  availabilityId?: string | null;
  currency?: Currency | null;
  specialty?: string | null;
  category?: string | null;
  reason?: string | null;
  appointmentDateTime: any;
  frequency?: string | null;
  remindMe?: boolean | null;
  reminderDateTime?: any | null;
  reminderDuration?: string | null;
  duration?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
  availabilitySlotCode?: string | null;
}

export interface NewConsultationInput {
  clinifyId?: string | null;
  consultationDateTime?: any | null;
  duration?: string | null;
  doctorName: string;
  priority: string;
  specialty?: string | null;
  class?: string | null;
  patientType?: string | null;
  paymentType?: string | null;
  consultationStartDate?: any | null;
  consultationEndDate?: any | null;
  clinicName?: string | null;
  clinicAddress?: string | null;
  documentUrl?: string[] | null;
  complaint?: string | null;
  complaintHistory?: string | null;
  systemReview?: string | null;
  physicalExam?: string | null;
  treatmentPlan?: string | null;
  provisionalDiagnosis: string[];
  finalDiagnosis?: string[] | null;
  admissions?: string[] | null;
  allergies?: string[] | null;
  labTests?: string[] | null;
  medications?: string[] | null;
  radiology?: string[] | null;
  surgeries?: string[] | null;
  vitals?: string[] | null;
}

export interface NewImmunizationInput {
  clinifyId?: string | null;
  administeredDate?: any | null;
  duration?: string | null;
  immunizationName: string;
  administratorName?: string | null;
  batchNumber?: string | null;
  expiryDate?: any | null;
  method?: string | null;
  quantity?: number | null;
  dosage?: number | null;
  dosageUnit?: string | null;
  nextAppointmentDateTime?: any | null;
  remindMe?: boolean | null;
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface NewLabTestInput {
  clinifyId?: string | null;
  testDate?: any | null;
  specialty?: string | null;
  requestDate?: any | null;
  requestType: string;
  patientType: string;
  duration?: string | null;
  testInfo: LabFieldsInput[];
  collectedBy?: string | null;
  orderedBy?: string | null;
  collectionDate?: any | null;
  resultDate?: any | null;
  result: string;
  range?: string | null;
  priority?: string | null;
  pathologist?: string | null;
  pathologistReport?: string | null;
  verifiedBy?: string | null;
  performedBy?: string | null;
  specimenCollected?: string | null;
  paymentType?: string | null;
  labName?: string | null;
  labAddress?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface NewRadiologyInput {
  clinifyId?: string | null;
  requestDate?: any | null;
  requestType?: string | null;
  priority?: string | null;
  requester?: string | null;
  patientType?: string | null;
  specialty?: string | null;
  examType?: string[] | null;
  clinicalNote?: string | null;
  examDate?: any | null;
  duration?: string | null;
  radiologist?: string | null;
  paymentType?: string | null;
  radiologyName?: string | null;
  radiologyAddress?: string | null;
  report?: string | null;
  impression?: string | null;
  documentUrl?: string[] | null;
}

export interface NewSurgeryInput {
  clinifyId?: string | null;
  surgeryDate?: any | null;
  duration?: string | null;
  type: string;
  requestedBy?: string | null;
  operatedBy: string;
  specialty?: string | null;
  rank?: string | null;
  assistantSurgeon?: string | null;
  facilityName?: string | null;
  facilityAddress?: string | null;
  priority?: string | null;
  patientType?: string | null;
  patientConsent?: string | null;
  paymentType?: string | null;
  reason?: string | null;
  operatingRoomNurse?: string | null;
  anesthetistName?: string | null;
  anesthesia?: string | null;
  surgeryStartDate?: any | null;
  surgeryEndDate?: any | null;
  operationNote?: string | null;
  postOperationNote?: string | null;
  documentUrl?: string[] | null;
}

export interface NewVitalInput {
  clinifyId?: string | null;
  type?: VitalType | null;
  anthropometry?: AnthropometryVitalFields[] | null;
  bloodGlucose?: BloodGlucoseVitalFields[] | null;
  bloodPressure?: BloodPressureVitalFields[] | null;
  pulseRate?: PulseRateVitalFields[] | null;
  respiratoryRate?: RespiratoryRateVitalFields[] | null;
  temperature?: TemperatureVitalFields[] | null;
  urineDipstick?: UrineDipstickVitalFields[] | null;
  visualAcuity?: VisualAcuityVitalFields[] | null;
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface NextOfKinInput {
  title?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  bloodGroup?: string | null;
  genoType?: string | null;
  phoneNumber?: PhoneNumberInput | null;
  phoneNumberAlt?: PhoneNumberInput | null;
  email?: string | null;
  emailAlt?: string | null;
  relationship?: string | null;
  occupation?: string | null;
  address?: string | null;
  country?: string | null;
}

export interface ObstetricHistoryInput {
  childrenCount: number;
  lastBirth?: any | null;
  additionalNote?: string | null;
}

export interface PastEncountersFieldInput {
  diagnosisDate?: any | null;
  duration?: string | null;
  diagnosis: string;
  diagnosedBy?: string | null;
  specialty?: string | null;
  symptoms?: string[] | null;
}

export interface PastEncountersInput {
  details?: PastEncountersFieldInput[] | null;
  clinicName?: string | null;
  clinicAddress?: string | null;
  additionalNote?: string | null;
}

export interface PastSurgeryInput {
  type: string;
  operationDate?: any | null;
  additionalNote?: string | null;
}

export interface PersonalInformationInput {
  displayPictureUrl?: string | null;
  title?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: Gender | null;
  secondaryEmail?: string | null;
  secondaryPhoneNumber?: PhoneNumberInput | null;
  dateOfBirth?: any | null;
  bloodGroup?: string | null;
  genoType?: string | null;
  weight?: number | null;
  weightUnit?: string | null;
  height?: number | null;
  heightUnit?: string | null;
  address?: string | null;
  bio?: string | null;
  registrationNumber?: string | null;
  registrationDate?: any | null;
  folioNumber?: string | null;
  expiryDate?: any | null;
  speciality?: string | null;
  yearsOfPractice?: number | null;
  hospital?: string | null;
  documentUrl?: string[] | null;
}

export interface PhoneNumberInput {
  countryCode?: string | null;
  value?: string | null;
  countryName?: string | null;
}

export interface PhysicalActivityInput {
  type?: string | null;
  name?: string | null;
  additionalNote?: string | null;
}

export interface PreExistingConditionInput {
  condition?: string | null;
  diagnosedDate?: any | null;
  duration?: string | null;
  additionalNote?: string | null;
}

export interface ProfileDetailsInput {
  personalInformation?: PersonalInformationInput | null;
  backgroundInformation?: BackgroundInformationInput | null;
}

export interface ProfileInfosFilterInput {
  skip?: number | null;
  take?: number | null;
}

export interface ProviderClaimInput {
  clinifyId: string;
  coverage?: HmoProfileInput | null;
  details?: BillingDetailsInput | null;
  health?: BillingHealthInput | null;
  bills?: BillingBills | null;
  currency?: string | null;
  grandTotal?: number | null;
  professionalFee?: number | null;
  additionNote?: string | null;
  serviceCategory?: string | null;
  claimType?: string | null;
  admissions?: string[] | null;
  allergies?: string[] | null;
  appointments?: string[] | null;
  consultations?: string[] | null;
  labTests?: string[] | null;
  medications?: string[] | null;
  radiology?: string[] | null;
  surgeries?: string[] | null;
  status?: ProviderBillingStatus | null;
}

export interface PulseRateVitalFields {
  readingDateTime?: any | null;
  checkMethod?: string | null;
  checkMethodSpecify?: string | null;
  reading?: number | null;
  rhythm?: string | null;
}

export interface RadiologyFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface RadiologyInput {
  clinifyId?: string | null;
  requestDate?: any | null;
  requestType?: string | null;
  priority?: string | null;
  requester?: string | null;
  patientType?: string | null;
  specialty?: string | null;
  examType?: string[] | null;
  clinicalNote?: string | null;
  examDate?: any | null;
  duration?: string | null;
  radiologist?: string | null;
  paymentType?: string | null;
  radiologyName?: string | null;
  radiologyAddress?: string | null;
  report?: string | null;
  impression?: string | null;
  documentUrl?: string[] | null;
}

export interface RegistrationInput {
  phoneNumber: string;
  country: string;
}

export interface ResetPasscodeInput {
  oldPasscode: string;
  newPasscode: string;
}

export interface RespiratoryRateVitalFields {
  readingDateTime?: any | null;
  reading?: number | null;
  oxygenSaturation?: number | null;
  rhythm?: string | null;
}

export interface SurgeryFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface SurgeryInput {
  clinifyId?: string | null;
  surgeryDate?: any | null;
  duration?: string | null;
  type?: string | null;
  requestedBy?: string | null;
  operatedBy?: string | null;
  specialty?: string | null;
  rank?: string | null;
  assistantSurgeon?: string | null;
  facilityName?: string | null;
  facilityAddress?: string | null;
  priority?: string | null;
  patientType?: string | null;
  patientConsent?: string | null;
  paymentType?: string | null;
  reason?: string | null;
  operatingRoomNurse?: string | null;
  anesthetistName?: string | null;
  anesthesia?: string | null;
  surgeryStartDate?: any | null;
  surgeryEndDate?: any | null;
  operationNote?: string | null;
  postOperationNote?: string | null;
  documentUrl?: string[] | null;
}

export interface TemperatureVitalFields {
  readingDateTime?: any | null;
  checkMethod?: string | null;
  checkMethodSpecify?: string | null;
  reading?: number | null;
  readingUnit?: string | null;
}

export interface TransferPatientInput {
  transferDateTime?: any | null;
  transferReason: string;
  transferredBy?: string | null;
  transferHospitalName?: string | null;
  transferHospitalAddress?: string | null;
}

export interface UpdateDefaultEmailInput {
  email: string;
}

export interface UpdatePhoneNumberInput {
  phoneNumber: string;
  country: string;
  otpCode: string;
}

export interface UpdateVitalInput {
  clinifyId?: string | null;
  type?: VitalType | null;
  hospitalName?: string | null;
  hospitalAddress?: string | null;
  documentUrl?: string[] | null;
  additionalNote?: string | null;
}

export interface UrineDipstickVitalFields {
  readingDateTime?: any | null;
  blood?: number | null;
  glucose?: number | null;
  ketones?: number | null;
  ph?: number | null;
  protein?: number | null;
  nitrites?: number | null;
  leucocyte?: number | null;
  urobilinogen?: number | null;
}

export interface UsersFilterInput {
  skip?: number | null;
  take?: number | null;
  clinifyId?: string | null;
  memberNumber?: string | null;
  specialty?: string | null;
  fullName?: string | null;
  userType?: UserListType | null;
}

export interface VerifyOtpInput {
  userId: string;
  otpCode: string;
}

export interface VerifyPassCodeForUpdatePhoneNumberInput {
  phoneNumber: string;
  passCode: string;
}

export interface VisualAcuityVitalFields {
  readingDateTime?: any | null;
  withGlassesLeft?: string | null;
  withGlassesRight?: string | null;
  withoutGlassesLeft?: string | null;
  withoutGlassesRight?: string | null;
}

export interface VitalFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
}

export interface WaitingListFilterInput {
  skip?: number | null;
  take?: number | null;
  dateRange?: DateRangeInput | null;
  keyword?: string | null;
  creator?: RecordCreator | null;
  archive?: boolean | null;
  status?: string | null;
}

export interface WaitingListInput {
  patient: string;
  assignedTo?: string | null;
  specialtyAssignedTo?: string | null;
  clinifyId?: string | null;
  arrivalDateTime?: any | null;
  priority?: string | null;
  paymentType?: string | null;
  visitType?: string | null;
  visitationReason?: string | null;
}

export interface WaitingListUpdateInput {
  status?: WaitingListStatus | null;
  clinifyId?: string | null;
  arrivalDateTime?: any | null;
  priority?: string | null;
  paymentType?: string | null;
  visitType?: string | null;
  visitationReason?: string | null;
  specialtyAssignedTo?: string | null;
  assignedTo?: string | null;
  waitTime?: string | null;
  archive?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
