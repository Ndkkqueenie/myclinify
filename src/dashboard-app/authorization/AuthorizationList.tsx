import * as React from 'react';
import MainLayout from 'dashboard-app/layouts/MainLayout';
import SearchTab from 'dashboard-app/common/SearchTab';
import { ListContentWrapper, DatePickerWrapper, Content } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import DatePicker from 'dashboard-app/common/DatePicker';
import SearchInput from 'dashboard-app/common/SearchInput';
import Actions from 'dashboard-app/common/Actions';
import Pills from 'dashboard-app/common/Pills';
import { OutlineButton } from 'dashboard-app/common/Button';
import Dropdown from 'dashboard-app/common/Dropdown';
import { CLAIM_STATUS_OPTIONS } from 'dashboard-app/utils/constants';

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
    accessor: 'requestCategory',
  },
  {
    Header: 'Date Requested',
    accessor: 'dateRequested',
  },
  {
    Header: 'Date & Time Submitted',
    accessor: 'dateAndTimeSubmitted',
  },
  {
    Header: 'Member Name and Number',
    accessor: 'memberNameAndNumber',
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
  },
];
const data = [
  {
    number: 1,
    claimType: 'Inpatient',
    requestCategory: 'Medication',
    dateRequested: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hmoName: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Awaiting" pillType="awaiting" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
];

export interface AuthorizationListProps {}

const AuthorizationList: React.FC<AuthorizationListProps> = () => {
  return (
    <>
      <MainLayout pageName="Pre-authorization Status">
        <SearchTab>
          <SearchInput onChange={() => {}} value="" />
          <Dropdown
            withoutBorderRadius
            options={CLAIM_STATUS_OPTIONS}
            onChange={() => {}}
            placeholder="All Claims"
            grey
            forSearch
          />
          <DatePickerWrapper>
            <DatePicker mini placeholderText="From" onChange={() => {}} />
            <DatePicker mini placeholderText="To" onChange={() => {}} />
          </DatePickerWrapper>
          <OutlineButton text="Clear Filter" withIcon={false} withBorderRadius mini />
        </SearchTab>
        <ListContentWrapper listPage>
          <Content noPadding listPage>
            <Table
              showPagination
              goToPage={() => {}}
              columns={columns}
              pageCount={0}
              data={data}
              onRowClick={() => {}}
            />
          </Content>
        </ListContentWrapper>
      </MainLayout>
    </>
  );
};

export default AuthorizationList;
