import * as React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import MainLayout from 'dashboard-app/layouts/MainLayout';
import SearchTab from 'dashboard-app/common/SearchTab';
import { ListContentWrapper, Content } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import SearchInput from 'dashboard-app/common/SearchInput';
import Actions from 'dashboard-app/common/Actions';
import Pills from 'dashboard-app/common/Pills';
import Button, { OutlineButton } from 'dashboard-app/common/Button';
import Dropdown from 'dashboard-app/common/Dropdown';
import { CLAIM_STATUS_OPTIONS } from 'dashboard-app/utils/constants';
import useGetClaims, { LIMIT } from 'hooks/useGetClaims';

const ResetButton = styled(OutlineButton)`
  margin-left: 0.5rem;
`;

export interface ClaimSummaryListProps {}

const ClaimSummaryList: React.FC<ClaimSummaryListProps> = () => {
  const {
    items,
    pageCount,
    goToPage,
    error,
    loading,
    currentPageNumber,
    handleSearch,
    clearFilter,
    handleSetFilterOptions,
    filterOptions,
  } = useGetClaims();
  const columns = React.useMemo(
    () => [
      {
        Header: 'S/N',
        accessor: 'number',
        Cell: (arg: any) => {
          //  filterOptions.take will never be null or undefined but typescript wahala
          const take = filterOptions.take || LIMIT;
          return String(arg.cell.row.index + (currentPageNumber - 1) * take + 1);
        },
      },
      {
        Header: 'Claim Type',
        accessor: 'claimType',
      },
      {
        Header: 'Service Category',
        accessor: 'serviceCategory',
      },
      // {
      //   Header: 'Date Incurred',
      //   accessor: 'dateIncured',
      //   // TODO: use the right accessor
      //   // Cell: ({ value }) => {
      //   //   return format(new Date(value), 'dd/LL/yy');
      //   // },
      // },
      {
        Header: 'Date & Time Submitted',
        accessor: 'createdDate',
        Cell: ({ value }) => {
          const date = new Date(value);
          return (
            <>
              <span>{format(date, 'dd/LL/yy')}</span>
              <br />
              <span>{format(date, 'hh:mm aaaa')}</span>
            </>
          );
        },
      },
      {
        Header: 'Member Name and Number',
        accessor: 'patient.personalInformation',
        Cell: (p: any) => {
          return (
            <>
              <span>
                {p.value.firstName} {p.value.lastName}
              </span>
              <br />
              <span>{p.cell.row.original.coverage.memberNumber}</span>
            </>
          );
        },
      },
      {
        Header: 'Total Amount',
        accessor: 'grandTotal',
        Cell: ({ value }) => {
          const formatter = new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
          });
          return formatter.format(value);
        },
      },
      {
        Header: 'Hospital Name',
        accessor: 'coverage.primaryProviderName',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: any) => {
          return <Pills pillStyle="outline" value={value} pillType={value.toLowerCase()} />;
        },
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: () => {
          return <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />;
        },
      },
    ],
    [currentPageNumber, filterOptions.take],
  );
  return (
    <>
      <MainLayout pageName="Claim Summary">
        <SearchTab>
          <SearchInput
            onChange={(evt) => handleSetFilterOptions('memberNumber', evt.target.value)}
            value=""
            placeholder="Enter Member Number"
            outline
          />
          <SearchInput
            value=""
            placeholder="Enter Hospital Name"
            onChange={(evt) => handleSetFilterOptions('hospital', evt.target.value)}
            outline
            last
          />
          <Dropdown
            withoutBorderRadius
            options={CLAIM_STATUS_OPTIONS}
            onChange={({ value }) => handleSetFilterOptions('status', value)}
            placeholder="All Claims"
            grey
            forSearch
          />
          {/* <DatePickerWrapper> */}
          {/*  <DatePicker mini placeholderText="From" onChange={() => {}} /> */}
          {/*  <DatePicker mini placeholderText="To" onChange={() => {}} /> */}
          {/* </DatePickerWrapper> */}
          <Button text="Search" onClick={handleSearch} />
          <ResetButton
            text="Clear Filter"
            withIcon={false}
            withBorderRadius
            grey
            onClick={clearFilter}
          />
        </SearchTab>
        <ListContentWrapper listPage>
          <Content listPage>
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
