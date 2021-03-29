import { setTitle } from 'apollo/operations';
import SearchIcon from 'dashboard-app/common/icons/SearchIcon';
import 'dashboard-app/common/styles/lookup.scss';
import Table from 'dashboard-app/common/Table';
import { Content } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { LOOKUP_PATIENT } from 'dashboard-app/queries/user';
import useLookupFilterOptions from 'hooks/useLookupFilterOptions';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import AssignPatientForm from './AssignPatientForm';
import Columns from './Columns';
import './lookup.scss';
import LookupSearchTab from './LookupSearchTab';

const DefaultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 170px);
  background-color: #ffffff;
  div {
    text-align: center;
    .lookup {
      display: block;
      color: #00274a;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-top: 28px;
      margin-bottom: 8px;
    }
    p {
      max-width: 364px;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 39, 74, 0.7);
    }
  }
`;

export interface LookupProps {
  frontDesk?: boolean;
}

const Lookup: React.FC<LookupProps> = ({ frontDesk }) => {
  const {
    filterOptions,
    goToPage,
    currentPageNumber,
    delayedSetFilterOptions,
    pageCount,
    loading,
    items,
    error,
    triggerSearch,
    onRowClick,
    isShown,
    toggle,
    highlightAll,
    highlightRecord,
    unSelectAll,
    allHighlighted,
    highlightedRecords,
    patientsToCheckin,
    waitingListHook,
  } = useLookupFilterOptions(LOOKUP_PATIENT, 'users');

  const columnsToUse = Columns({
    frontDesk,
    currentPageNumber,
    filterOptions,
    highlightAll,
    highlightRecord,
    allHighlighted,
    highlightedRecords,
  });

  const columns = useMemo(() => columnsToUse, [filterOptions, highlightedRecords, items]);

  useEffect(() => setTitle('Patient Lookup'), []);
  const dataIsAvailable = items.length === 0;

  return (
    <Content detailsPage noPadding noMargin>
      <LookupSearchTab
        filterOptions={filterOptions}
        frontDesk={frontDesk}
        dataIsAvailable={dataIsAvailable}
        triggerSearch={triggerSearch}
        delayedSetFilterOptions={delayedSetFilterOptions}
        toggleCheckInModal={waitingListHook.checkPatientsInOrOut}
        enableCheckInIcon={highlightedRecords.length > 0}
      />
      <>
        {items.length === 0 && !loading ? (
          <div className="body-wrap">
            <DefaultWrapper>
              <div>
                <SearchIcon x2 />
                <span className="lookup">Look Up</span>
                <p>Search results will show up here</p>
              </div>
            </DefaultWrapper>
          </div>
        ) : (
          <Table
            showPagination={false}
            pageCount={pageCount}
            goToPage={goToPage}
            columns={columns}
            data={items as Record<string, any>[]}
            onRowClick={onRowClick}
            loading={loading}
            error={error}
          />
        )}
      </>
      <Modal
        modalContent={
          <AssignPatientForm
            defaultValues={patientsToCheckin}
            waitingListHook={waitingListHook}
            hideCheckoutButton
          />
        }
        isShown={isShown}
        hide={() => {
          toggle();
          unSelectAll();
        }}
        handleDone={() => {}}
        isAddPage
        headerText="Check In and Assign Patient"
        showExtraActions
        showDone={false}
      />
    </Content>
  );
};

export default Lookup;
