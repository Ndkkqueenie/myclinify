import { gql } from '@apollo/client';
import { ADMISSION_FIELDS } from './admission';
import { ALLERGY_FIELDS } from './allergy';
import { CONSULTATION_FIELDS } from './consultation';
import { IMMUNIZATION_FIELDS } from './immunization';
import { LAB_TEST_FIELDS } from './lab-test';
import { MEDICATION_FIELDS } from './medication';
import { RADIOLOGY_FIELDS } from './radiology';
import { SURGERY_FIELDS } from './surgery';

export const PROFILE_FIELDS = gql`
  fragment Profile on ProfileModel {
    id
    clinifyId
    active
    isDefault
    createdDate
    updatedDate
    active
    type
    personalInformation {
      title
      displayPictureUrl
      firstName
      lastName
      middleName
      gender
      dateOfBirth
      bloodGroup
      genoType
      weight
      weightUnit
      height
      heightUnit
      address
      secondaryEmail
      secondaryPhoneNumber {
        value
        countryCode
        countryName
      }
    }

    backgroundInformation {
      maritalStatus
      numberOfChildren
      education
      state
      religion
      nationality
      organDonor
      occupation
      salaryRange
      bloodDonor
    }
  }
`;

export const HMO_FIELDS = gql`
  fragment Hmo on HmoProfileModel {
    id
    createdDate
    updatedDate
    memberPlan
    memberNumber
    memberStatus
    employeeNumber
    memberStartDate
    companyName
    primaryProviderName
    secondaryProviderName
    tertiaryProviderName
    primaryProviderAddress
    secondaryProviderAddress
    tertiaryProviderAddress
    hmoProvider
  }
`;

export const GET_USER = gql`
  query GetUser {
    user {
      email
      nonCorporateEmail
      phoneNumber
      country
      defaultProfile {
        ...Profile
      }
    }
  }
  ${PROFILE_FIELDS}
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String!) {
    user(id: $id) {
      email
      phoneNumber
      defaultProfile {
        ...Profile
      }
      hmos {
        list {
          ...Hmo
        }
      }
      allergies {
        list {
          ...Allergy
          createdDate
          updatedDate
        }
      }
      medications {
        list {
          ...Medication
        }
      }
      admissions {
        list {
          ...Admission
        }
      }
      lab_tests {
        list {
          ...LabTest
          createdDate
          updatedDate
        }
      }
      immunizations {
        list {
          ...Immunization
          createdDate
        }
      }
      radiology {
        list {
          ...Radiology
        }
      }
      surgeries {
        list {
          ...Surgery
          createdDate
        }
      }
      consultations {
        list {
          ...Consultation
          createdDate
        }
      }
    }
  }
  ${MEDICATION_FIELDS}
  ${RADIOLOGY_FIELDS}
  ${SURGERY_FIELDS}
  ${LAB_TEST_FIELDS}
  ${IMMUNIZATION_FIELDS}
  ${CONSULTATION_FIELDS}
  ${ALLERGY_FIELDS}
  ${ADMISSION_FIELDS}
  ${PROFILE_FIELDS}
  ${HMO_FIELDS}
`;

export const GET_USER_HOSPITAL = gql`
  query GetUserHospital {
    user {
      defaultProfile {
        clinifyId
        personalInformation {
          title
          displayPictureUrl
          firstName
          lastName
        }
      }
      hospitalOrganization {
        name
      }
    }
  }
`;

export const GET_USER_HMO = gql`
  query GetUserHmo {
    user {
      defaultProfile {
        personalInformation {
          displayPictureUrl
          firstName
          lastName
        }
      }
      hmoOrganization {
        name
      }
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile($id: String) {
    user(id: $id) {
      email
      phoneNumber
      defaultProfile {
        type
      }
    }
  }
`;

export const UPDATE_PROFILE_DETAILS = gql`
  mutation UpdateProfileDetails($input: ProfileDetailsInput!) {
    updateProfileDetails(input: $input) {
      ...Profile
    }
  }
  ${PROFILE_FIELDS}
`;

export const LOOKUP_PATIENT = gql`
  query LookupPatient($filterOptions: UsersFilterInput) {
    users(filterOptions: $filterOptions) {
      list {
        id
        email
        nonCorporateEmail
        phoneNumber
        country
        defaultProfile {
          id
          clinifyId
          fullName
          personalInformation {
            firstName
            lastName
            middleName
            dateOfBirth
            bloodGroup
            gender
            genoType
            title
            displayPictureUrl
          }
        }
      }
    }
  }
`;

export const GET_USERS_BY_SPECIALTY = gql`
  query UsersBySpecialty($filterOptions: UsersFilterInput) {
    users(filterOptions: $filterOptions) {
      list {
        defaultProfile {
          id
          fullName
        }
      }
    }
  }
`;

export const PATIENT_OVERVIEW = gql`
  query PatientOverview($id: String) {
    userOverView(id: $id) {
      completion
      primaryPhoneNumber
      primaryEmail
      dependent {
        firstName
        lastName
        dateOfBirth
        bloodGroup
        gender
        relationship
      }
      coverage {
        hmoProvider
        memberNumber
        memberPlan
        memberStatus
        companyName
        companyAddress
      }
      nextOfKin {
        firstName
        lastName
        gender
        bloodGroup
        relationship
        occupation
        phoneNumber {
          countryName
          countryCode
          value
        }
        email
        address
      }
      personalInformation {
        title
        displayPictureUrl
        firstName
        lastName
        gender
        dateOfBirth
        bloodGroup
        genoType
        weight
        weightUnit
        height
        heightUnit
        address
      }
      lastAdmission {
        admissionDate
        admittedBy
        finding
        hospitalUnit
        admissionDiagnosis
      }
      allergies {
        occurenceDate
        duration
        details {
          type
          trigger
          reactions
          severeness
        }
        documentUrl
        additionalNote
      }
      lastImmunization {
        administeredDate
        immunizationName
        administratorName
        method
      }
      lastConsultation {
        consultationDateTime
        doctorName
        provisionalDiagnosis
        finalDiagnosis
      }
      lastProcedure {
        surgeryDate
        type
        specialty
        operatedBy
      }
      lastLabTest {
        testDate
        testInfo {
          testName
        }
        orderedBy
        performedBy
      }
      lastRadiology {
        examDate
        radiologist
        requester
        examType
        requestType
      }
      lastAppointment {
        facilityName
        specialty
        appointmentDateTime
      }
      currentMedication {
        details {
          medicationName
          datePrescribed
          prescribedBy
          purpose
        }
      }
      lastVitalSign {
        id
        createdDate
        anthropometry {
          height
          heightUnit
          weight
          weightUnit
        }
        bloodGlucose {
          reading
          readingUnit
        }
        bloodPressure {
          diastolic
          systolic
        }
        pulseRate {
          reading
        }
        respiratoryRate {
          reading
        }
        temperature {
          reading
          readingUnit
        }
      }
    }
  }
`;
