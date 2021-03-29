import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface AppointmentListProps {
  userType?: UserType;
  listPageHook?: any;
  showSearchTab?: boolean;
}

const uniqueColumns = [
  {
    Header: (
      <div className="list-header-column">
        Appointment <br /> Date and Time
      </div>
    ),
    accessor: 'appointmentDateTime',
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
    Header: 'Appointment Type',
    accessor: 'appointmentType',
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
    Header: 'Hospital Name',
    accessor: 'facilityName',
    Cell: formatTableData,
  },
];

const AppointmentList: React.FC<AppointmentListProps> = (props) => (
  <ListView
    {...props}
    uniqueColumns={uniqueColumns}
    recordType="Appointment"
    showRecordCreated={false}
  />
);

export default AppointmentList;
