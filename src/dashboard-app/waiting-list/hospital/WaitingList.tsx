import { setTitle } from 'apollo/operations';
import ListView from 'dashboard-app/common/ListView';
import Prompter from 'dashboard-app/common/Prompter';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import AssignPatientForm from 'dashboard-app/lookup/AssignPatientForm';
import { WAITING_LIST } from 'dashboard-app/queries/waitingList';
import { userType } from 'dashboard-app/utils/authTracker';
import { WAITING_LIST_FILTER_INPUT, WAITING_LIST_OPTIONS } from 'dashboard-app/utils/constants';
import { UserType } from 'graphql-types/globalTypes';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { useModal } from 'hooks/useModal';
import React, { useEffect, useMemo } from 'react';
import WaitingListColumns from './WaitingListColumns';

const WaitingList = () => {
  const { isShown, toggle } = useModal();

  const listPageHook = useListPageFilterOptions(
    WAITING_LIST,
    'waitingList',
    { isWaitingList: true },
    WAITING_LIST_FILTER_INPUT,
    {
      isOnForm: false,
      toggleContent: toggle,
    },
  );

  const {
    currentPageNumber,
    filterOptions,
    highlightAll,
    highlightRecord,
    allHighlighted,
    highlightedRecords,
    items,
    waitersToUpdate,
    waitingListHook,
    checkoutPatients,
    unSelectAll,
    toggleWaitingListDeleteModal,
    deleteWaiters,
    showWaitingListDeleteModal,
    checkOutSinglePatient,
    canBulkAssign,
    canBulkCheckIn,
    canBulkReAssign,
    canBulkCheckOut,
    loading,
  } = listPageHook;

  const columnsToUse = WaitingListColumns({
    frontDesk: userType() === UserType.OrganizationFrontDeskOfficer,
    currentPageNumber,
    filterOptions,
    highlightAll,
    highlightedRecords,
    highlightRecord,
    allHighlighted,
  });

  const columns = useMemo(() => columnsToUse, [
    currentPageNumber,
    filterOptions,
    highlightedRecords,
    items,
  ]);

  useEffect(() => setTitle('Patient Waiting List'), []);

  return (
    <>
      <ListView
        listPageHook={listPageHook}
        showRecordCreated={false}
        recordType="Waiting List"
        defaultColumns={columns}
        showDelete={false}
        isFrontDesk
        showStatusDropdown
        reassign={toggle}
        checkOut={checkoutPatients}
        statusDropDownOptions={WAITING_LIST_OPTIONS}
        canBulkAssign={canBulkAssign}
        canBulkCheckIn={canBulkCheckIn}
        canBulkReAssign={canBulkReAssign}
        canBulkCheckOut={canBulkCheckOut}
      />
      <Modal
        modalContent={
          showWaitingListDeleteModal ? (
            <Prompter
              text={`Are you sure you want to delete ${
                highlightedRecords.length > 1 ? 'these records' : 'this record'
              }?`}
              actionText="Delete"
              deleteAction={deleteWaiters}
              cancelAction={toggleWaitingListDeleteModal}
              disabled={loading}
            />
          ) : (
            <AssignPatientForm
              defaultValues={waitersToUpdate}
              defaultValuesPath="patient"
              selectedWaiters={highlightedRecords}
              waitingListHook={waitingListHook}
              checkOutSinglePatient={checkOutSinglePatient}
              isOnWaitingList
              items={items}
            />
          )
        }
        isShown={isShown || showWaitingListDeleteModal}
        hide={() => {
          isShown ? toggle() : toggleWaitingListDeleteModal();
          unSelectAll();
        }}
        handleDone={() => {}}
        isAddPage={isShown}
        headerText="Check In or Check Out / Assign or Reassign Patient"
        showExtraActions={isShown}
        showDone={false}
        isAuthentication={showWaitingListDeleteModal}
      />
    </>
  );
};

export default WaitingList;
