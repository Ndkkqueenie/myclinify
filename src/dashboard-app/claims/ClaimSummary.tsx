import * as React from 'react';

import MainLayout from 'dashboard-app/layouts/MainLayout';
import SearchTab from 'dashboard-app/common/SearchTab';
import { ListContentWrapper, DatePickerWrapper, Content } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import DatePicker from 'dashboard-app/common/DatePicker';
import SearchInput from 'dashboard-app/common/SearchInput';
import Actions from 'dashboard-app/common/Actions';
import Button, { OutlineButton } from 'dashboard-app/common/Button';
import Dropdown from 'dashboard-app/common/Dropdown';
import { CLAIM_STATUS_OPTIONS } from 'dashboard-app/utils/constants';
import ArchiveIcon from 'dashboard-app/common/icons/ArchiveIcon';
import TrashIcon from 'dashboard-app/common/icons/TrashIcon';
import FilterIcon from 'dashboard-app/common/icons/FilterIcon';
import ClearFilterIcon from 'dashboard-app/common/icons/ClearFilterIcon';
import useGetClaims from 'hooks/useGetClaims';
import colors from '../utils/colors';

const columns = [
  {
    Header: 'S/N',
    accessor: 'number',
  },
  {
    Header: 'Claim Type',
    accessor: 'claimType',
  },
  {
    Header: 'Request Category',
    accessor: 'serviceCategory',
  },
  {
    Header: 'Date Requested',
    accessor: 'createdDate',
  },
  {
    Header: 'Date & Time Submitted',
    accessor: 'dateAndTimeSubmitted',
  },
  {
    Header: 'Total Amount',
    accessor: 'totalAmount',
  },
  {
    Header: 'HMO Name',
    accessor: 'hmoName',
  },

  {
    Header: 'Status',
    accessor: 'status',
  },

  {
    Header: 'Actions',
    accessor: 'actions',
    Cell: () => {
      return <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />;
    },
  },
];

export interface ClaimSummaryListProps {}

const ClaimSummaryList: React.FC<ClaimSummaryListProps> = () => {
  const { items, pageCount, goToPage, error, loading } = useGetClaims();

  return (
    <>
      <MainLayout pageName="Claim Summary">
        <SearchTab>
          <SearchInput value="" placeholder="Enter Hospital Name" onChange={() => {}} outline />
          <SearchInput value="" placeholder="Enter HMO Name" onChange={() => {}} outline last />
          <Dropdown
            withoutBorderRadius
            options={CLAIM_STATUS_OPTIONS}
            onChange={() => {}}
            placeholder="All Claims"
            grey
            forSearch
          />
          <DatePickerWrapper>
            <DatePicker mini placeholderText="From" onChange={() => {}} width="40px" />
            <DatePicker mini placeholderText="To" onChange={() => {}} width="40px" />
          </DatePickerWrapper>
          <Button
            littleBorderRadius
            text="Filter"
            withIcon
            onClick={() => {}}
            icon={<FilterIcon />}
          />
          <OutlineButton text="Clear" withIcon mini icon={<ClearFilterIcon />} />

          <OutlineButton
            withBorderRadius
            mainColor={colors.darkBlue}
            withIcon
            text="Archive"
            onClick={() => {}}
            icon={<ArchiveIcon />}
            fullWidth
          />

          <OutlineButton
            withBorderRadius
            withIcon
            text="Delete"
            onClick={() => {}}
            icon={<TrashIcon />}
            deleteButton
            fullWidth
          />
        </SearchTab>
        <ListContentWrapper listPage>
          <Content noPadding listPage>
            <Table
              showPagination
              goToPage={goToPage}
              columns={columns}
              pageCount={pageCount}
              loading={loading}
              onRowClick={() => {}}
              data={items as Record<string, any>[]}
            />
          </Content>
        </ListContentWrapper>
      </MainLayout>
    </>
  );
};

export default ClaimSummaryList;
