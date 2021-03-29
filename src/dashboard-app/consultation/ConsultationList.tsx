import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface ConsultationListProps {
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
        Consultation <br /> Date and Time
      </div>
    ),
    accessor: 'consultationDateTime',
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
    Header: "Doctor's Name",
    accessor: 'doctorName',
    Cell: formatTableData,
  },
  {
    Header: 'Specialty',
    accessor: 'specialty',
    Cell: formatTableData,
  },
  {
    Header: 'Provisional Diagnosis',
    accessor: 'provisionalDiagnosis',
    Cell: formatTableData,
  },

  {
    Header: 'Final Diagnosis',
    accessor: 'finalDiagnosis',
    Cell: formatTableData,
  },
  {
    Header: 'Hospital Name',
    accessor: 'clinicName',
    Cell: formatTableData,
  },
];

const ConsultationList: React.FC<ConsultationListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Consultation" />
);

export default ConsultationList;
