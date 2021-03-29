import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface SurgeryListProps {
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
        Operation <br /> Date and Time
      </div>
    ),
    accessor: 'surgeryDate',
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
    Header: 'Procedure Type',
    accessor: 'type',
    Cell: formatTableData,
  },
  {
    Header: "Surgeon's Name",
    accessor: 'operatedBy',
    Cell: formatTableData,
  },
  {
    Header: "Surgeon's Specialty",
    accessor: 'specialty',
    Cell: formatTableData,
  },
  {
    Header: 'Rank',
    accessor: 'rank',
    Cell: formatTableData,
  },
  {
    Header: 'Hospital Name',
    accessor: 'facilityName',
    Cell: formatTableData,
  },
];

const SurgeryList: React.FC<SurgeryListProps> = (props) => (
  <ListView
    {...props}
    uniqueColumns={uniqueColumns}
    recordType="Procedure"
    selectedRecordType="Procedure"
  />
);

export default SurgeryList;
