import CheckBox from 'dashboard-app/common/CheckBox';
import ProfileImageAvatar from 'dashboard-app/common/ProfileImageAvatar';
import calculateAge from 'dashboard-app/utils/calculateAge';
import { formatTableData } from 'dashboard-app/utils/formatTable';
import React from 'react';

const Columns = ({
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
      accessor: 'defaultProfile.personalInformation.displayPictureUrl',
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
      accessor: 'defaultProfile.clinifyId',
      Cell: formatTableData,
    },
    {
      Header: 'Full Name',
      accessor: 'defaultProfile.fullName',
      Cell: formatTableData,
    },
    {
      Header: 'Age',
      accessor: 'defaultProfile.personalInformation.dateOfBirth',
      Cell: ({ value }) => calculateAge(value ? value.slice(0, 4) : null),
    },
    {
      Header: 'Sex',
      accessor: 'defaultProfile.personalInformation.gender',
      Cell: formatTableData,
    },
    {
      Header: 'Blood Group',
      accessor: 'defaultProfile.personalInformation.bloodGroup',
      Cell: formatTableData,
    },
  ];

  const organisationDoctorColumns = [
    ...commonColumns,
    {
      Header: 'Genotype',
      accessor: 'defaultProfile.personalInformation.genoType',
      Cell: formatTableData,
    },
  ];

  const frontDeskColumns = [
    ...commonColumns,
    {
      Header: 'Phone Number',
      accessor: 'phoneNumber',
      Cell: formatTableData,
    },
    {
      Header: 'Email Address',
      accessor: 'nonCorporateEmail',
      Cell: formatTableData,
    },
  ];

  const columns = frontDesk ? frontDeskColumns : organisationDoctorColumns;

  return columns;
};

export default Columns;
