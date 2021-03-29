import * as React from 'react';
import MainLayout from 'dashboard-app/layouts/HMOLayout';
import SearchTab from 'dashboard-app/common/SearchTab';
import { ListContentWrapper, DatePickerWrapper, Content } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import DatePicker from 'dashboard-app/common/DatePicker';
import SearchInput from 'dashboard-app/common/SearchInput';
import Actions from 'dashboard-app/common/Actions';
import Pills from 'dashboard-app/common/Pills';
import { OutlineButton } from 'dashboard-app/common/Button';

const columns = [
  // {
  //   Header: "S/N",
  //   accessor: "number",
  // },
  {
    Header: 'Claim Type',
    accessor: 'claimType',
  },
  {
    Header: 'Service Category',
    accessor: 'serviceCategory',
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
    Header: 'Member Name and Number',
    accessor: 'memberNameAndNumber',
  },
  {
    Header: 'Total Amount',
    accessor: 'totalAmount',
  },
  {
    Header: 'Hospital',
    accessor: 'hospitalName',
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
    serviceCategory: 'Radiology',
    dateIncurred: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hospitalName: 'Diamond Hospital',
    status: <Pills pillStyle="outline" value="Draft" pillType="draft" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 2,
    claimType: 'Outpatient',
    serviceCategory: 'Immunization',
    dateIncurred: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hospitalName: 'Diamond Hospital',
    status: <Pills pillStyle="outline" value="Rejected" pillType="rejected" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 3,
    claimType: 'Inpatient',
    serviceCategory: 'Medication',
    dateIncurred: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hospitalName: 'Diamond Hospital',
    status: <Pills pillStyle="outline" value="Awaiting" pillType="awaiting" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 4,
    claimType: 'Inpatient',
    serviceCategory: 'Consultation',
    dateIncurred: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hospitalName: 'Diamond Hospital',
    status: <Pills pillStyle="outline" value="Approved" pillType="approved" />,
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 5,
    claimType: 'Inpatient',
    serviceCategory: 'Radiology',
    dateIncurred: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    memberNameAndNumber: 'Temitayo Adenuga, ABB1234609',
    totalAmount: ' ₦10,000',
    hospitalName: 'Diamond Hospital',
    status: <Pills pillStyle="outline" value="Verified" pillType="verified" />,
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
          <SearchInput value="" placeholder="Enter Member Number" onChange={() => {}} outline />
          <SearchInput
            value=""
            placeholder="Enter Hospital Name"
            onChange={() => {}}
            outline
            last
          />
          <DatePickerWrapper>
            <DatePicker mini placeholderText="From" onChange={() => {}} />
            <DatePicker mini placeholderText="To" onChange={() => {}} />
          </DatePickerWrapper>
          <OutlineButton text="Clear Filter" withIcon={false} withBorderRadius mini />
        </SearchTab>
        <ListContentWrapper listPage>
          <Content listPage>
            <Table
              showPagination
              goToPage={() => {}}
              columns={columns}
              onRowClick={() => {}}
              pageCount={0}
              data={data}
            />
          </Content>
        </ListContentWrapper>
      </MainLayout>
    </>
  );
};

export default InsuranceBillingList;
