import { gql } from '@apollo/client';

export const WAITING_LIST_FIELDS = gql`
  fragment Waiter on WaitingListModel {
    id
    status
    visitationReason
    visitType
    arrivalDateTime
    waitTime
    priority
    paymentType
    createdDate
    updatedDate
    specialtyAssignedTo
    assignedTo {
      id
      fullName
      clinifyId
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
    patient {
      id
      fullName
      clinifyId
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
      user {
        id
        email
        phoneNumber
        country
      }
    }
  }
`;

export const CHECKIN_PATIENT = gql`
  mutation CheckInPatient($input: WaitingListInput!) {
    addPatientToWaitingList(input: $input) {
      ...Waiter
    }
  }
  ${WAITING_LIST_FIELDS}
`;

export const DELETE_WAITERS = gql`
  mutation DeleteWaiters($ids: [String!]!) {
    deleteWaitingListItems(ids: $ids) {
      ...Waiter
    }
  }
  ${WAITING_LIST_FIELDS}
`;

export const CHECK_WAITERS_IN_OUT = gql`
  mutation CheckWaitersInOrOut($ids: [String!]!, $status: CheckInOrOutStatus!) {
    checkWaitersInOrOut(ids: $ids, status: $status) {
      ...Waiter
    }
  }
  ${WAITING_LIST_FIELDS}
`;

export const ARCHIVE_WAITER = gql`
  mutation ArchiveWaiters($ids: [String!]!, $archive: Boolean!) {
    archiveWaitingListItems(archive: $archive, ids: $ids) {
      ...Waiter
    }
  }
  ${WAITING_LIST_FIELDS}
`;

export const UPDATE_WAITER = gql`
  mutation UpdateWaiter($input: WaitingListUpdateInput!, $id: String!) {
    updateWaitingList(input: $input, id: $id) {
      ...Waiter
    }
  }
  ${WAITING_LIST_FIELDS}
`;

export const WAITING_LIST = gql`
  query WaitingList($filterOptions: WaitingListFilterInput!) {
    waitingList(filterOptions: $filterOptions) {
      totalCount
      list {
        ...Waiter
      }
    }
  }
  ${WAITING_LIST_FIELDS}
`;
