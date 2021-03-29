import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface LabResultListProps {
  userType?: UserType;
  listPageHook: any;
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
        Test <br /> Date and Time
      </div>
    ),
    accessor: 'testDate',
    Cell: formatTableDateTime,
  },
  {
    Header: (
      <div className="list-header-column">
        Duration <br /> (HH:MM:SS)
      </div>
    ),
    accessor: 'duration',
    Cell: formatTableData,
  },
  {
    Header: 'Test Name (Lab Order)',
    accessor: 'testInfo',
    Cell: ({ value }) => {
      const joinedValue = value ? value[0].testName : '--';
      return joinedValue;
    },
  },
  {
    Header: 'Priority',
    accessor: 'priority',
    Cell: formatTableData,
  },
  {
    Header: 'Ordered By',
    accessor: 'orderedBy',
    Cell: formatTableData,
  },
  {
    Header: 'Test Performed By',
    accessor: 'pathologist',
    Cell: formatTableData,
  },
  {
    Header: 'Facility Name',
    accessor: 'labName',
    Cell: formatTableData,
  },
];

const LabResultList: React.FC<LabResultListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Laboratory" />
);

export default LabResultList;
