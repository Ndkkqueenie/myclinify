import { gql } from '@apollo/client';
import { AUDIT_FIELDS } from './audit';

export const LAB_TEST_FIELDS = gql`
  fragment LabTest on LabTestModel {
    id
    testDate
    specialty
    requestDate
    requestType
    patientType
    duration
    testInfo {
      testName
      testCategory
    }
    orderedBy
    collectionDate
    collectedBy
    result
    labName
    labAddress
    priority
    pathologist
    pathologistReport
    verifiedBy
    performedBy
    specimenCollected
    range
    resultDate
    additionalNote
    documentUrl
    createdDate
    updatedDate
  }
`;

export const ADD_PATIENT_LAB_TEST = gql`
  mutation AddPatientLabTest($input: NewLabTestInput!) {
    addLabTest(labTestResult: $input) {
      ...LabTest
      ${AUDIT_FIELDS}
    }
  }
  ${LAB_TEST_FIELDS}
`;

export const UPDATE_LAB_TEST = gql`
  mutation UpdateLabTest($input: LabTestInput!, $id: String!) {
    updateLabTest(labTestResult: $input, id: $id) {
      ...LabTest
      ${AUDIT_FIELDS}
    }
  }
  ${LAB_TEST_FIELDS}
`;

export const DELETE_LAB_TEST = gql`
  mutation DeleteLabTests($ids: [String!]!) {
    deleteLabTests(ids: $ids) {
      id
    }
  }
`;

export const ARCHIVE_LAB_TESTS = gql`
  mutation ArchiveLabTests($ids: [String!]!, $archive: Boolean) {
    archiveLabTests(ids: $ids, archive: $archive) {
      ...LabTest
      ${AUDIT_FIELDS}
    }
  }
  ${LAB_TEST_FIELDS}
`;

export const GET_LAB_TEST = gql`
  query GetLabTest($id: String!) {
    labTest(id: $id) {
      ...LabTest
      ${AUDIT_FIELDS}
    }
  }
  ${LAB_TEST_FIELDS}
`;

export const GET_PATIENT_LAB_TEST_LIST = gql`
  query GetPatientLabTestList($filterOptions: LabTestFilterInput, $id: String) {
    user (id: $id) {
      lab_tests(filterOptions: $filterOptions) {
        totalCount
        list {
          ...LabTest
          ${AUDIT_FIELDS}
        }
      }
    }
  }
  ${LAB_TEST_FIELDS}
`;
