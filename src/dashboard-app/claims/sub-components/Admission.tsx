import Actions from 'dashboard-app/common/Actions';
import Button from 'dashboard-app/common/Button';
import CheckBox from 'dashboard-app/common/CheckBox';
import CollapsibleComponent from 'dashboard-app/common/CollapsibleComponent';
import Table from 'dashboard-app/common/Table';
import { ButtonRow, Content, ContentWrapper } from 'dashboard-app/common/Wrapper';
import React from 'react';

const columns = [
  {
    Header: ' ',
    accessor: 'select',
  },
  {
    Header: 'Admission Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Patient File Number',
    accessor: 'patientFileNumber',
  },
  {
    Header: 'Admitted By',
    accessor: 'admittedBy',
  },
  {
    Header: 'Ward',
    accessor: 'ward',
  },
  {
    Header: 'Room Type',
    accessor: 'roomType',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const entryColumns = [
  {
    Header: ' S/N',
    accessor: 'number',
  },
  {
    Header: 'Admission Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Patient File Number',
    accessor: 'patientFileNumber',
  },
  {
    Header: 'Admitted By',
    accessor: 'admittedBy',
  },
  {
    Header: 'Ward',
    accessor: 'ward',
  },
  {
    Header: 'Room Type',
    accessor: 'roomType',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

const data = [
  {
    number: 1,
    select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
    date: '10/11/2017',
    duration: '00:02:13',
    patientFileNumber: '1205FRAD',
    admittedBy: 'Dr John Doe',
    ward: 'Adult',
    roomType: 'Executive',
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface AdmissionProps {
  entry?: boolean;
  admissionList?: any;
}

const Admission: React.FC<AdmissionProps> = ({ entry, admissionList }) => {
  const admissionListPayload = React.useMemo(
    () =>
      admissionList &&
      admissionList.length > 0 &&
      admissionList.map((admission, index) => {
        const { admissionDate, admittedBy, duration, ward, roomType, fileNumber } = admission;
        return {
          number: index + 1,
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          date: admissionDate,
          duration,
          patientFileNumber: fileNumber,
          admittedBy,
          ward,
          roomType,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [admissionList],
  );
  return (
    <>
      <>
        <ContentWrapper>
          <Content billingPage noPadding>
            <CollapsibleComponent name="Admission" id="admission" noCheckBox isExpanded>
              <Table
                evenColumns
                showPagination={false}
                goToPage={() => {}}
                pageCount={0}
                onRowClick={() => {}}
                columns={columns}
                data={admissionListPayload || [{}]}
              />
            </CollapsibleComponent>

            <ButtonRow>
              <Button text="Add to Claim Form" onClick={() => {}} withIcon />
            </ButtonRow>
          </Content>
        </ContentWrapper>
      </>
    </>
  );
};

export default Admission;
