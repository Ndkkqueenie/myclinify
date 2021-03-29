import { useMutation, useQuery } from '@apollo/client';
import addWaiterResourceToCache from 'apollo/cacheUpdate/addWaiterResourceToCache';
import updateCacheOnOppositeSides from 'apollo/cacheUpdate/updateWaitingListCacheOppositeSides';
import { GET_USERS_BY_SPECIALTY } from 'dashboard-app/queries/user';
import {
  ARCHIVE_WAITER,
  CHECKIN_PATIENT,
  CHECK_WAITERS_IN_OUT,
  DELETE_WAITERS,
  UPDATE_WAITER,
  WAITING_LIST,
} from 'dashboard-app/queries/waitingList';
import { WAITING_LIST_FILTER_INPUT } from 'dashboard-app/utils/constants';
import { WaitingListFilterInput, WaitingListStatus } from 'graphql-types/globalTypes';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useModal } from './useModal';

interface UseWaitingListProps {
  patient?: string;
  highlightedRecords?: string[];
  filterOptions?: WaitingListFilterInput;
  defaultValues?: any;
  isOnWaitingList?: boolean;
  clearAction?: () => void;
  patientsToCheckin?: any;
  items?: any;
  isOnModal?: boolean;
}

const useWaitingList = ({
  patient = '',
  highlightedRecords = [],
  clearAction = () => {},
  filterOptions = WAITING_LIST_FILTER_INPUT,
  defaultValues,
  isOnWaitingList,
  patientsToCheckin,
  items = [],
  isOnModal,
}: UseWaitingListProps) => {
  const { toggle, isShown } = useModal();
  const [input, setInputs] = useState({
    visitationReason: defaultValues?.visitationReason || '',
    arrivalDateTime: defaultValues?.arrivalDateTime || null,
    paymentType: defaultValues?.paymentType || '',
    specialtyAssignedTo: defaultValues?.specialtyAssignedTo || '',
    patient: defaultValues?.patient?.id || patient,
    priority: defaultValues?.priority || '',
    visitType: defaultValues?.visitType || '',
    assignedTo: defaultValues?.assignedTo?.id || '',
  });

  const { addToast } = useToasts();
  const onError = (error) => addToast(error.message, { appearance: 'error' });
  const defaultOnCompleted = (message) => {
    addToast(message, { appearance: 'success' });
    clearAction();
  };

  const [
    checkInPatient,
    { loading: checkInPatientLoading, error: checkInPatientError },
  ] = useMutation(CHECKIN_PATIENT, {
    variables: { input },
    onCompleted: () =>
      addToast('Patient Added To Waiting List Successfully', { appearance: 'success' }),
    update: (cache, { data }) => addWaiterResourceToCache({ cache, data, filterOptions }),
    onError,
  });

  const newStatusOnUpdate = ['Checked In and Assigned', 'Reassigned'].includes(
    defaultValues?.status,
  )
    ? WaitingListStatus.Reassigned
    : WaitingListStatus.CheckedInAndAssigned;

  const [updateWaiter, { loading: updatingWaiter, error: updateWaiterError }] = useMutation(
    UPDATE_WAITER,
    {
      variables: { input: { ...input, status: newStatusOnUpdate }, id: defaultValues?.id },
      onCompleted: (data) =>
        addToast(`Patient ${data?.updateWaitingList?.status} Successfully`, {
          appearance: 'success',
        }),
      onError,
    },
  );

  const canActOnRecordsWithStatus = (status: string[]) =>
    !!highlightedRecords.length &&
    items
      .filter((item) => highlightedRecords.includes(item?.id))
      .filter((item) => status.includes(item?.status))?.length === highlightedRecords.length;

  const canBulkAssign = canActOnRecordsWithStatus(['Checked In and Unassigned', 'Checked Out']);

  const canBulkReAssign = canActOnRecordsWithStatus([
    'Checked In and Assigned',
    'Checked In and Reassigned',
  ]);

  const canBulkCheckIn = canActOnRecordsWithStatus(['Checked Out']);

  const canBulkCheckOut = canActOnRecordsWithStatus([
    'Checked In',
    'Checked In and Assigned',
    'Reassigned',
    'Checked In and Unassigned',
    'Completed',
  ]);

  const inOrOutStatus =
    (defaultValues?.status !== WaitingListStatus.CheckedOut && isOnModal) ||
    (isOnWaitingList && canBulkCheckOut)
      ? WaitingListStatus.CheckedOut
      : WaitingListStatus.CheckedInAndUnassigned;

  const checkInPatientsList =
    isOnWaitingList && canBulkCheckIn
      ? items
          .filter((waiter) => highlightedRecords?.includes(waiter?.id))
          .map((waiter) => waiter?.patient?.id)
      : patientsToCheckin
          ?.filter((patient) => highlightedRecords?.includes(patient?.id))
          ?.map((patient) => patient?.defaultProfile?.id);

  const idsToUse = isOnWaitingList && canBulkCheckOut ? highlightedRecords : checkInPatientsList;

  const [checkPatientsInOrOut, { loading: checkingOutPatients }] = useMutation(
    CHECK_WAITERS_IN_OUT,
    {
      variables: { ids: idsToUse, status: inOrOutStatus },
      onCompleted: (data) =>
        addToast(
          data?.checkWaitersInOrOut[0]?.status === 'Checked Out'
            ? 'Patient Checked Out Successfully'
            : 'Patient Checked In Successfuly',
          {
            appearance: 'success',
          },
        ),
      onError,
      update: (cache, { data }) => {
        if (inOrOutStatus !== 'CheckedInAndUnassigned') return;
        data.checkWaitersInOrOut.forEach((waiter) =>
          addWaiterResourceToCache({
            data: { addPatientToWaitingList: waiter },
            cache,
            filterOptions,
          }),
        );
      },
    },
  );

  const checkOutSinglePatient = (id: string) =>
    checkPatientsInOrOut({ variables: { ids: [id], status: WaitingListStatus.CheckedOut } });

  const [deleteWaiters, { loading: deletingWaiters }] = useMutation(DELETE_WAITERS, {
    variables: { ids: highlightedRecords },
    onCompleted: () => defaultOnCompleted('Record Deleted Successfully'),
    update: (cache, { data }) => {
      const dataIds = data?.deleteWaitingListItems?.map(({ id }) => id);

      const newCache: any = cache.readQuery({
        query: WAITING_LIST,
        variables: {
          filterOptions,
        },
      });

      const updatedWaitingListCache = {
        totalCount: newCache?.waitingList?.totalCount - dataIds.length,
        list: newCache?.waitingList?.list?.filter((waiter: any) => !dataIds.includes(waiter.id)),
      };

      cache.writeQuery({
        query: WAITING_LIST,
        data: {
          waitingList: updatedWaitingListCache,
        },
        variables: {
          filterOptions,
        },
      });
      toggle();
    },
    onError,
  });

  const archiveToastType = filterOptions.archive ? 'Unarchive' : 'Archive';
  const [archiveWaiters, { loading: archivingWaiter }] = useMutation(ARCHIVE_WAITER, {
    variables: { ids: highlightedRecords, archive: !filterOptions.archive },
    onCompleted: () =>
      addToast(`Record ${archiveToastType}d Successfully`, { appearance: 'success' }),
    onError,
    update: (cache, { data }) =>
      updateCacheOnOppositeSides({
        cache,
        data,
        filterOptions,
        dataPath: 'archiveWaitingListItems',
        oppositeSectionFilterOptions: { ...filterOptions, archive: !filterOptions.archive },
        query: WAITING_LIST,
        clearAction,
      }),
  });

  const { data } = useQuery(GET_USERS_BY_SPECIALTY, {
    variables: { filterOptions: { specialty: input.specialtyAssignedTo } },
    skip: !input.specialtyAssignedTo,
  });

  const specialistOptions = data?.users
    ? data?.users?.list.map((user) => ({
        label: user?.defaultProfile?.fullName,
        value: user?.defaultProfile?.fullName,
        id: user?.defaultProfile?.id,
      }))
    : [];

  const mutationLoading =
    checkInPatientLoading ||
    updatingWaiter ||
    checkingOutPatients ||
    archivingWaiter ||
    deletingWaiters;

  const assignButtonIsDisabled = !input.specialtyAssignedTo || !input.assignedTo;
  const assignActionText =
    newStatusOnUpdate === WaitingListStatus.Reassigned ? 'Reassign' : 'Check In & Assign';

  const handleInputChange = (name, value) => setInputs({ ...input, [name]: value });

  const initialAssignAction = isOnWaitingList ? updateWaiter : checkInPatient;
  const assignAction =
    defaultValues?.status === 'Checked Out' ? checkInPatient : initialAssignAction;

  return {
    checkInPatient,
    checkInPatientError,
    updateWaiter,
    deleteWaiters,
    updateWaiterError,
    handleInputChange,
    specialistOptions,
    input,
    mutationLoading,
    checkPatientsInOrOut,
    assignAction,
    checkOutSinglePatient,
    checkingOutPatients,
    archiveWaiters,
    canBulkAssign,
    canBulkCheckIn,
    canBulkReAssign,
    canBulkCheckOut,
    assignActionText,
    assignButtonIsDisabled,
    toggle,
    isShown,
  };
};

export default useWaitingList;
