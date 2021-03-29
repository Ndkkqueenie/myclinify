import ListView from 'dashboard-app/common/ListView';
import {
  formatFieldData,
  formatTableData,
  formatTableDateTime,
} from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface AllergyListProps {
  listPageHook?: any;
  userType: UserType;
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
        Occurence <br /> Date and Time
      </div>
    ),
    accessor: 'occurenceDate',
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
    Header: 'Allergy Type',
    accessor: (row) => row.details,
    Cell: ({ value }) => formatFieldData(value, 'type'),
  },
  {
    Header: 'Trigger',
    accessor: (row) => row.details,
    Cell: ({ value }) => formatFieldData(value, 'trigger'),
  },
  {
    Header: 'Reactions',
    accessor: (row) => row.details,
    Cell: ({ value }) => {
      const reactions = formatFieldData(value, 'reactions');
      if (reactions.split(',').length > 1 && reactions !== '--')
        return `${reactions.split(',')[0]}, ...`;
      return reactions || '--';
    },
  },
  {
    Header: 'Severity',
    accessor: (row) => row.details,
    Cell: ({ value }) => formatFieldData(value, 'severeness'),
  },
  {
    Header: 'Hospital Name',
    accessor: 'hospitalName',
    Cell: formatTableData,
  },
];

const AllergyList: React.FC<AllergyListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Allergy" />
);

export default AllergyList;
