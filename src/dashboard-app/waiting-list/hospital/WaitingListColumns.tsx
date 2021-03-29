import CheckBox from 'dashboard-app/common/CheckBox';
import ProfileImageAvatar from 'dashboard-app/common/ProfileImageAvatar';
import calculateAge from 'dashboard-app/utils/calculateAge';
import {
  formatTableData,
  formatTableDateTime,
  formatTableTime,
} from 'dashboard-app/utils/formatTable';
import timerCaclulator from 'dashboard-app/utils/timerCalculator';
import React from 'react';
import Timer from './Timer';

const WaitingListColumns = ({
  frontDesk,
  currentPageNumber,
  filterOptions,
  highlightAll,
  highlightRecord,
  highlightedRecords,
  allHighlighted,
}) => {
  const commonColumns = [
    {
      Header: (
        <CheckBox
          id="checkbox"
          name="select all"
          onChange={highlightAll}
          checked={allHighlighted}
        />
      ),
      accessor: 'id',
      Cell: ({ value }) => (
        <CheckBox
          id={value}
          name="record"
          addMarginLeft
          onChange={() => highlightRecord(value)}
          checked={highlightedRecords?.includes(value)}
        />
      ),
    },
    {
      Header: 'S/N',
      accessor: 'number',
      Cell: (arg: any) => {
        return String(arg.cell.row.index + (currentPageNumber - 1) * filterOptions.take + 1);
      },
    },
    {
      Header: 'Photo',
      accessor: 'patient.personalInformation.displayPictureUrl',
      Cell: ({ value }) => {
        return (
          <ProfileImageAvatar
            profileUrl={
              value ||
              'https://res.cloudinary.com/skiposki/image/upload/v1593673635/clinify/placeholder.png'
            }
          />
        );
      },
    },
    {
      Header: 'Clinify ID',
      accessor: 'patient.clinifyId',
      Cell: formatTableData,
    },
    {
      Header: 'Full Name',
      accessor: 'patient.fullName',
      Cell: formatTableData,
    },
    {
      Header: 'Age',
      accessor: 'patient.personalInformation.dateOfBirth',
      Cell: ({ value }) => calculateAge(value ? value.slice(0, 4) : null),
    },
    {
      Header: 'Sex',
      accessor: 'patient.personalInformation.gender',
      Cell: formatTableData,
    },
    {
      Header: 'Check In Time',
      accessor: 'createdDate',
      Cell: formatTableDateTime,
    },
    {
      Header: 'Check Out Time',
      accessor: (row) => (row.status === 'Checked Out' ? row.updatedDate : ''),
      id: 'updatedDate',
      Cell: formatTableDateTime,
    },
    {
      Header: (
        <div className="list-header-column">
          Total Wait <br /> Time
        </div>
      ),
      accessor: (row) => ({
        date: row.createdDate,
        status: row.status,
        waitTime: row.waitTime,
        updatedDate: row.updatedDate,
      }),
      id: 'waitTime',
      Cell: ({ value: { date, status, waitTime, updatedDate } }) =>
        !['Checked Out', 'Completed'].includes(status) ? (
          <Timer from={date} />
        ) : (
          waitTime || timerCaclulator(new Date(date).getTime(), new Date(updatedDate).getTime())
        ),
    },
  ];

  const frontDeskColumns = [
    ...commonColumns,
    {
      Header: 'Assigned To',
      accessor: 'assignedTo.fullName',
      Cell: formatTableData,
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: formatTableData,
    },
  ];

  const columns = frontDesk ? frontDeskColumns : commonColumns;

  return columns;
};

export default WaitingListColumns;
