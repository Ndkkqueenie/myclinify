import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import MainLayout from 'dashboard-app/layouts/HMOLayout';
import SearchTab from 'dashboard-app/common/SearchTab';
import SearchInput from 'dashboard-app/common/SearchInput';
import { ListContentWrapper, Content } from 'dashboard-app/common/Wrapper';
import Button, { OutlineButton } from 'dashboard-app/common/Button';
import Table from 'dashboard-app/common/Table';
import Actions from 'dashboard-app/common/Actions';
import Pills from 'dashboard-app/common/Pills';

const columns = [
  {
    Header: 'S/N',
    accessor: 'number',
  },
  {
    Header: 'Name',
    accessor: 'fullName',
  },
  {
    Header: 'Number',
    accessor: 'mNumber',
  },
  {
    Header: 'Plan',
    accessor: 'plan',
  },
  {
    Header: 'Start Date',
    accessor: 'startDate',
  },
  {
    Header: 'Company',
    accessor: 'company',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }: any) => {
      return (
        <Pills
          pillStyle="outline"
          value={value}
          pillType={value === 'Active' ? 'approved' : 'draft'}
        />
      );
    },
  },
  {
    Header: 'Actions',
    accessor: 'actions',
    Cell: () => {
      return <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />;
    },
  },
];

const ResetButton = styled(OutlineButton)`
  margin-left: 0.5rem;
`;

const AddNewButton = styled(Button)`
  margin-left: auto;
`;

const data = [
  {
    number: 1,
    fullName: 'Temitayo Adenuga',
    mNumber: 'ABB1234609',
    plan: 'Gold',
    startDate: '12/05/20',
    company: 'Clinify Nigeria',
    status: 'Active',
  },
  {
    number: 1,
    fullName: 'Temitayo Adenuga',
    mNumber: 'ABB1234609',
    plan: 'Gold',
    startDate: '12/05/20',
    company: 'Clinify Nigeria',
    status: 'Inactive',
  },
];

export interface EnrollmentListProps {}
const EnrollmentList: React.FC<EnrollmentListProps> = () => {
  const history = useHistory();

  return (
    <MainLayout pageName="Enrollment">
      <SearchTab>
        <SearchInput value="" placeholder="Enter Member Number" onChange={() => {}} outline />
        <SearchInput value="" placeholder="Enter Hospital Name" onChange={() => {}} outline last />
        <Button text="Search" onClick={() => {}} />
        <ResetButton text="Clear Filter" withIcon={false} withBorderRadius grey />

        <AddNewButton
          withIcon
          text="Add New Member"
          onClick={() => history.push('/hmo/enrollment/add')}
        />
      </SearchTab>
      <ListContentWrapper listPage>
        <Content listPage>
          <Table
            showPagination
            goToPage={() => {}}
            pageCount={0}
            columns={columns}
            data={data}
            onRowClick={() => {}}
          />
        </Content>
      </ListContentWrapper>
    </MainLayout>
  );
};

export default EnrollmentList;
