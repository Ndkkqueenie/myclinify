import MainListView from 'dashboard-app/common/MainListView';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

const uniqueColumns = [
  {
    Header: 'Admission Date and Time',
    accessor: 'admissionDate',
  },
  {
    Header: 'Admitted By',
    accessor: 'admittedBy',
  },

  {
    Header: 'Admission Diagnosis',
    accessor: 'condition',
  },
  {
    Header: 'Ward Name',
    accessor: 'ward',
  },
  {
    Header: 'Patient Full Name',
    accessor: 'fullName',
  },
  {
    Header: 'Hospital Unit',
    accessor: 'bedNumber',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const data = [
  {
    admissionDate: '12/05/20 11:54am',
    admittedBy: 'Jessica',
    condition: 'Sclerosis',
    fullName: 'Efosa Okpugie',
    ward: '12',
    bedNumber: '20',
    status: 'Admitted',
  },
  {
    admissionDate: '12/05/20 11:54am',
    admittedBy: 'Jessica',
    condition: 'Sclerosis',
    fullName: 'Efosa Okpugie',
    ward: '12',
    bedNumber: '20',
    status: 'Discharged',
  },
];

export interface InpatientListProps {
  userType?: UserType;
  listPageHook?: any;
  showSearchTab?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noListPadding?: boolean;
  isOnModal?: boolean;
  selectRecord?: (id: string) => void;
  selectedRecords?: string[];
  selectedRecordType?: string;
  handleAddNew?: () => void;
  readOnly?: boolean;
}
const InpatientList: React.FC<InpatientListProps> = (props) => (
  <MainListView
    {...props}
    items={data}
    noActionTab
    uniqueColumns={uniqueColumns}
    showRecordCreated={false}
    recordType="Inpatient List"
    addNewButton={false}
    investigationDropdown
  />
);

export default InpatientList;
