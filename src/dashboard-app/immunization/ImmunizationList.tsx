import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface ImmunizationListProps {
  userType?: UserType;
  listPageHook: any;
  showSearchTab?: boolean;
}

const uniqueColumns = [
  {
    Header: (
      <div className="list-header-column">
        Administration <br /> Date and Time
      </div>
    ),
    accessor: 'administeredDate',
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
    Header: 'Vaccination Name',
    accessor: 'immunizationName',
    Cell: formatTableData,
  },
  {
    Header: 'Given By',
    accessor: 'administratorName',
    Cell: formatTableData,
  },
  {
    Header: 'Route of Administraton',
    accessor: 'method',
    Cell: formatTableData,
  },
  {
    Header: 'Hospital Name',
    accessor: 'hospitalName',
    Cell: formatTableData,
  },
];

const ImmunizationList: React.FC<ImmunizationListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Immunization" />
);

export default ImmunizationList;
