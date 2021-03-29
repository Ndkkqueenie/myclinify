import React from 'react';
import SearchTab from 'dashboard-app/common/SearchTab';
import { ListContentWrapper, DatePickerWrapper, Content } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import DatePicker from 'dashboard-app/common/DatePicker';
import SearchInput from 'dashboard-app/common/SearchInput';
import Actions from 'dashboard-app/common/Actions';
import Pills from 'dashboard-app/common/Pills';
import Button, { OutlineButton } from 'dashboard-app/common/Button';
import Dropdown from 'dashboard-app/common/Dropdown';
import { CLAIM_STATUS_OPTIONS } from 'dashboard-app/utils/constants';
import ArchiveIcon from 'dashboard-app/common/icons/ArchiveIcon';
import TrashIcon from 'dashboard-app/common/icons/TrashIcon';
import FilterIcon from 'dashboard-app/common/icons/FilterIcon';
import ClearFilterIcon from 'dashboard-app/common/icons/ClearFilterIcon';

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
    requestCategory: 'Radiology',
    dateRequested: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hmoName: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Draft" pillType="draft" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 2,
    claimType: 'Outpatient',
    requestCategory: 'Immunization',
    dateRequested: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hmoName: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Rejected" pillType="rejected" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 3,
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
  {
    number: 4,
    claimType: 'Inpatient',
    requestCategory: 'Consultation',
    dateRequested: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hmoName: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Approved" pillType="approved" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
];

export interface AuthorizationProps {}

const Authorization: React.FC<AuthorizationProps> = () => {
  return (
    <>
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

        <Button
          littleBorderRadius
          text="Archive"
          color="rgba(6, 171, 105, 0.7)"
          backgroundColor="rgba(4, 209, 181, 0.2)"
          withIcon
          onClick={() => {}}
          icon={<ArchiveIcon />}
        />

        <Button
          littleBorderRadius
          text="Delete"
          color="rgba(207, 44, 73, 0.7)"
          backgroundColor="rgba(207, 44, 73, 0.3)"
          withIcon
          onClick={() => {}}
          icon={<TrashIcon />}
          minWidth="auto"
        />
      </SearchTab>
      <ListContentWrapper listPage>
        <Content listPage>
          <Table
            showPagination
            goToPage={() => {}}
            columns={columns}
            pageCount={0}
            onRowClick={() => {}}
            data={data}
          />
        </Content>
      </ListContentWrapper>
    </>
  );
};

export default Authorization;
