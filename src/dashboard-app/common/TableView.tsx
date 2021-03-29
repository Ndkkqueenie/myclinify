import { ApolloError } from '@apollo/client';
import { userType } from 'dashboard-app/utils/authTracker';
import { RecordCreator } from 'graphql-types/globalTypes';
import useIsInitialFetch from 'hooks/useIsInitialFetch';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import ListViewLoaderOrError from './ListViewLoaderOrError';
import Pagination from './Pagination';
import PatientTableSearchTab, { PatientSearchTabProps } from './PatientTableSearchTab';
import Table from './Table';

import './styles/tableView.scss';

export interface PatientTableProps {
  columns: any;
  data: any;
  onRowClick: (id: string, path?: string) => void;
  onModal?: boolean;
  pageCount: number;
  goToPage: (page: any) => void;
  showPagination: boolean;
  showRecordCreated?: boolean;
  loading?: boolean;
  evenColumns?: boolean;
  limit?: number;
  changeLimit: (take: number) => void;
  searchTabData?: PatientSearchTabProps;
  recordCreator?: string;
  changeRecordCreator: (type: string) => void;
  emptyMessage?: string;
  error: ApolloError;
}

const TableView: React.FC<PatientTableProps> = ({
  columns,
  data,
  onRowClick,
  onModal,
  pageCount,
  goToPage,
  showPagination,
  showRecordCreated = true,
  loading = false,
  evenColumns = false,
  error,
  limit,
  changeLimit,
  searchTabData,
  recordCreator,
  emptyMessage,
  changeRecordCreator,
}) => {
  const { search, pathname } = useLocation();
  const currentPageNumber = Number(search.split('=')[1]) || 1;
  const [isHovered, setIsHovered] = React.useState(false);

  const doctorsDashboardLookup = userType() === 'OrganizationDoctor';
  const patientsDashboardLookup = userType() === 'Patient';

  React.useEffect(() => {
    if (doctorsDashboardLookup) {
      changeRecordCreator(RecordCreator.OTHERS);
    }
  }, []);

  let doctorsRecordSelected = false;

  if (
    (doctorsDashboardLookup && recordCreator === RecordCreator.OTHERS) ||
    (patientsDashboardLookup && recordCreator === RecordCreator.SELF)
  ) {
    doctorsRecordSelected = true;
  }

  const { isInitialFetch } = useIsInitialFetch(data, loading);

  if (error || isInitialFetch)
    return (
      <ListViewLoaderOrError error={error} isInitialFetch={isInitialFetch} loading={loading} />
    );

  return (
    <>
      <div className="heading-table">
        <Pagination
          pageCount={pageCount}
          goToPage={goToPage}
          showPagination={showPagination}
          showRecordCreated={showRecordCreated}
          changeRecordCreator={changeRecordCreator}
          recordCreator={recordCreator}
          loading={loading}
          limit={limit}
          changeLimit={changeLimit}
          setIsHovered={setIsHovered}
          data={data}
          isOnModal={onModal}
          pathname={pathname}
          currentPageNumber={currentPageNumber}
          isHovered={isHovered}
        />
        <PatientTableSearchTab
          {...(searchTabData as PatientSearchTabProps)}
          showAddButton={doctorsRecordSelected}
        />
      </div>
      <Table
        showPagination={false}
        pageCount={pageCount}
        goToPage={goToPage}
        columns={columns}
        data={data}
        onRowClick={onRowClick}
        loading={loading}
        error={error}
        isModal={onModal}
        emptyMessage={emptyMessage}
      />
    </>
  );
};

export default TableView;
