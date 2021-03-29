import ListView from 'dashboard-app/common/ListView';
import {
  formatFieldData,
  formatFieldMultipleDateTime,
  formatTableData,
} from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import { nanoid } from 'nanoid';
import React from 'react';

export interface MedicationListProps {
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

const uniqueColumns = [
  {
    Header: (
      <div className="list-header-column">
        Prescription <br /> Date and Time
      </div>
    ),
    accessor: (row) => row.details,
    id: nanoid(4),
    Cell: ({ value }) => formatFieldMultipleDateTime(value, 'datePrescribed'),
  },
  {
    Header: (
      <div className="list-header-column">
        Duration <br /> (YY:MM:DD)
      </div>
    ),
    accessor: (row) => row.details,
    id: nanoid(4),
    Cell: ({ value }) => {
      const finalValue = formatFieldData(value, 'duration');
      return finalValue !== 'null' ? finalValue : '--';
    },
  },
  {
    Header: 'Medication Name',
    accessor: (row) => row.details,
    id: nanoid(4),
    Cell: ({ value }) => formatFieldData(value, 'medicationName'),
  },
  {
    Header: 'Indication (Reason)',
    accessor: (row) => row.details,
    id: nanoid(4),
    Cell: ({ value }) => formatFieldData(value, 'purpose'),
  },
  {
    Header: 'Prescribed By',
    accessor: (row) => row.details,
    id: nanoid(4),
    Cell: ({ value }) => formatFieldData(value, 'prescribedBy'),
  },
  {
    Header: 'Route of Administration',
    accessor: (row) => row.details,
    id: nanoid(4),
    Cell: ({ value }) => formatFieldData(value, 'administrationMethod'),
  },
  {
    Header: 'Hospital Name',
    accessor: 'hospitalName',
    Cell: formatTableData,
  },
];

const MedicationList: React.FC<MedicationListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Medication" />
);

export default MedicationList;
