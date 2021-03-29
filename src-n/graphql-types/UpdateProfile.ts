/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateProfile_personalInformation_secondaryPhoneNumber {
  __typename: "PhoneNumberFields";
  value: string | null;
  countryCode: string | null;
  countryName: string | null;
}

export interface UpdateProfile_updateProfile_personalInformation {
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
  secondaryPhoneNumber: UpdateProfile_updateProfile_personalInformation_secondaryPhoneNumber | null;
}

export interface UpdateProfile_updateProfile_nextOfKin_phoneNumber {
  __typename: "PhoneNumberFields";
  countryName: string | null;
  countryCode: string | null;
  value: string | null;
}

export interface UpdateProfile_updateProfile_nextOfKin {
  __typename: "NextOfKin";
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  title: string | null;
  middleName: string | null;
  bloodGroup: string | null;
  genoType: string | null;
  phoneNumber: UpdateProfile_updateProfile_nextOfKin_phoneNumber | null;
  email: string | null;
  relationship: string | null;
  occupation: string | null;
  address: string | null;
  country: string | null;
}

export interface UpdateProfile_updateProfile_dependents {
  __typename: "Dependent";
  firstName: string | null;
  lastName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  genoType: string | null;
  relationship: string | null;
}

export interface UpdateProfile_updateProfile_backgroundInformation {
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

export interface UpdateProfile_updateProfile_preExistingCondition {
  __typename: "PreExistingCondition";
  condition: string | null;
  diagnosedDate: any | null;
  duration: string | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_habit {
  __typename: "Habit";
  duration: string | null;
  level: string | null;
  socialHabit: string | null;
  typeSpecified: string | null;
  cigrattesPerDay: number | null;
  unitPerWeek: number | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_physicalActivity {
  __typename: "PhysicalActivity";
  type: string | null;
  name: string | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_disability {
  __typename: "Disability";
  type: string | null;
  disability: string | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_obstetricHistory {
  __typename: "ObstetricHistory";
  childrenCount: number;
  lastBirth: any | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_familyHistory {
  __typename: "FamilyHistory";
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  relationship: string | null;
  condition: string[];
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_gynecologicHistory {
  __typename: "GynecologicHistory";
  firstMenstrualAge: number | null;
  menstrualCycleLength: number | null;
  menstrualFlowDuration: number | null;
  lastMenstrualPeriod: any | null;
  menstrualFlow: string | null;
  contraceptiveUse: string | null;
  contraceptiveType: string | null;
  miscarriageOrAbortion: string | null;
  miscarriageOrAbortionCount: number | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_pastSurgery {
  __typename: "PastSurgery";
  type: string;
  operationDate: any | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile_pastEncounters_fields {
  __typename: "PastEncountersField";
  diagnosisDate: any | null;
  duration: string | null;
  diagnosis: string;
  diagnosedBy: string | null;
  specialty: string | null;
  symptoms: string[] | null;
}

export interface UpdateProfile_updateProfile_pastEncounters {
  __typename: "PastEncounters";
  fields: UpdateProfile_updateProfile_pastEncounters_fields[] | null;
  clinicName: string | null;
  clinicAddress: string | null;
  additionalNote: string | null;
}

export interface UpdateProfile_updateProfile {
  __typename: "ProfileModel";
  id: string;
  clinifyId: string;
  active: boolean;
  isDefault: boolean;
  createdDate: any;
  updatedDate: any;
  type: string;
  personalInformation: UpdateProfile_updateProfile_personalInformation | null;
  nextOfKin: UpdateProfile_updateProfile_nextOfKin[] | null;
  dependents: UpdateProfile_updateProfile_dependents[] | null;
  backgroundInformation: UpdateProfile_updateProfile_backgroundInformation | null;
  preExistingCondition: UpdateProfile_updateProfile_preExistingCondition[] | null;
  habit: UpdateProfile_updateProfile_habit[] | null;
  physicalActivity: UpdateProfile_updateProfile_physicalActivity[] | null;
  disability: UpdateProfile_updateProfile_disability[] | null;
  obstetricHistory: UpdateProfile_updateProfile_obstetricHistory[] | null;
  familyHistory: UpdateProfile_updateProfile_familyHistory[] | null;
  gynecologicHistory: UpdateProfile_updateProfile_gynecologicHistory[] | null;
  pastSurgery: UpdateProfile_updateProfile_pastSurgery[] | null;
  pastEncounters: UpdateProfile_updateProfile_pastEncounters[] | null;
}

export interface UpdateProfile {
  updateProfile: UpdateProfile_updateProfile;
}
