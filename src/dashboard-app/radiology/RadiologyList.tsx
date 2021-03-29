import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface RadiologyListProps {
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
        Examination <br /> Date and Time
      </div>
    ),
    accessor: 'examDate',
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
    Header: 'Examination Type',
    accessor: 'examType',
    Cell: ({ value }) => {
      const joinedValue = value ? value.join(', ') : '';
      const displayText = joinedValue.length > 10 ? `${joinedValue.slice(0, 8)}...` : joinedValue;
      return displayText || '--';
    },
  },
  {
    Header: 'Priority',
    accessor: 'priority',
    Cell: formatTableData,
  },
  {
    Header: 'Requested By',
    accessor: 'requester',
    Cell: formatTableData,
  },
  {
    Header: 'Radiologist Name',
    accessor: 'radiologist',
    Cell: formatTableData,
  },
  {
    Header: 'Facility Name',
    accessor: 'radiologyName',
    Cell: formatTableData,
  },
];

const RadiologyList: React.FC<RadiologyListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Radiology" />
);

export default RadiologyList;
