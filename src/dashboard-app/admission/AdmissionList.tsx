import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface AdmissionListProps {
  userType: UserType;
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

const uniqueColumns = [
  {
    Header: (
      <div className="list-header-column">
        Admission <br /> Date and Time
      </div>
    ),
    accessor: 'admissionDate',
    Cell: formatTableDateTime,
  },
  {
    Header: (
      <div className="list-header-column">
        Duration <br /> (YY:MM:DD)
      </div>
    ),
    accessor: 'duration',
    Cell: formatTableData,
  },
  {
    Header: 'Admitted By',
    accessor: 'admittedBy',
    Cell: formatTableData,
  },
  {
    Header: 'Admission Diagnosis',
    accessor: 'admissionDiagnosis',
    Cell: formatTableData,
  },
  {
    Header: 'Hospital Unit',
    accessor: 'hospitalUnit',
    Cell: formatTableData,
  },
  {
    Header: 'Hospital Name',
    accessor: 'clinicName',
    Cell: formatTableData,
  },
];

const AdmissionList: React.FC<AdmissionListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Admission" />
);

export default AdmissionList;
