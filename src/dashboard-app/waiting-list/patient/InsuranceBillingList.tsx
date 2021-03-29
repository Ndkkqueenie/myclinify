import * as React from 'react';
import MainLayout from 'dashboard-app/layouts/HMOLayout';
import SearchTab from 'dashboard-app/common/SearchTab';
import { ListContentWrapper, Content, DatePickerWrapper } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import SearchInput from 'dashboard-app/common/SearchInput';
import Actions from 'dashboard-app/common/Actions';
import Pills from 'dashboard-app/common/Pills';
import { OutlineButton } from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';

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
    Header: 'ServiceType',
    accessor: 'serviceType',
  },
  {
    Header: 'Date Incurred',
    accessor: 'dateIncurred',
  },
  {
    Header: 'Date & Time Submitted',
    accessor: 'dateAndTimeSubmitted',
  },
  {
    Header: 'Hospital Name',
    accessor: 'hospitalName',
  },
  {
    Header: 'HMO Name',
    accessor: 'hmo',
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
    claimType: 'Outpatient',
    serviceType: 'Radiology',
    dateIncurred: '02/10/2020',
    dateAndTimeSubmitted: '13/10/2020 11:45am',
    hospitalName: 'Diamond Hospital',
    hmo: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Awaiting" pillType="awaiting" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 2,
    claimType: 'Inpatient',
    serviceType: 'Consultation',
    dateIncurred: '02/10/2020',
    dateAndTimeSubmitted: '14/09/2020 11:45am',
    hospitalName: 'Diamond Hospital',
    hmo: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Approved" pillType="approved" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 3,
    claimType: 'Outpatient',
    serviceType: 'Laboratory',
    dateIncurred: '02/10/2020',
    dateAndTimeSubmitted: '14/09/2020 11:45am',
    hospitalName: 'Diamond Hospital',
    hmo: 'Integrated Healthcare Limited',
    status: <Pills pillStyle="outline" value="Rejected" pillType="rejected" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
];

export interface InsuranceBillingListProps {}

const InsuranceBillingList: React.FC<InsuranceBillingListProps> = () => {
  return (
    <>
      <MainLayout pageName="Insurance Billing">
        <SearchTab>
          <SearchInput value="" placeholder="Enter Hospital Name" onChange={() => {}} outline />
          <SearchInput value="" placeholder="Enter HMO Name" onChange={() => {}} outline last />
          <DatePickerWrapper>
            <DatePicker placeholderText="From" value={undefined} onChange={() => {}} />
            <DatePicker placeholderText="To" value={undefined} onChange={() => {}} />
          </DatePickerWrapper>
          <OutlineButton text="Clear Filter" withIcon={false} withBorderRadius mini />
        </SearchTab>
        <ListContentWrapper listPage>
          <Content listPage>
            <Table
              showPagination
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={columns}
              data={data}
            />
          </Content>
        </ListContentWrapper>
      </MainLayout>
    </>
  );
};

export default InsuranceBillingList;
