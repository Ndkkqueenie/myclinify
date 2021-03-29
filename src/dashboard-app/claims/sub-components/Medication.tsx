import React from 'react';

import { ContentWrapper, Content, ButtonRow } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import CollapsibleComponent from 'dashboard-app/common/CollapsibleComponent';
import Button from 'dashboard-app/common/Button';
import CheckBox from 'dashboard-app/common/CheckBox';
import Actions from 'dashboard-app/common/Actions';

const columns = [
  {
    Header: ' ',
    accessor: 'select',
  },
  {
    Header: 'Prescription Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Medication Name',
    accessor: 'medicationName',
  },
  {
    Header: 'Purpose',
    accessor: 'purpose',
  },
  {
    Header: 'Prescribed By',
    accessor: 'prescribedBy',
  },
  {
    Header: 'Administration Method',
    accessor: 'administrationMethod',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const entryColumns = [
  {
    Header: 'S/N ',
    accessor: 'number',
  },
  {
    Header: 'Prescription Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Medication Name',
    accessor: 'medicationName',
  },
  {
    Header: 'Purpose',
    accessor: 'purpose',
  },
  {
    Header: 'Prescribed By',
    accessor: 'prescribedBy',
  },
  {
    Header: 'Administration Method',
    accessor: 'administrationMethod',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

const data = [
  {
    select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
    number: 1,
    date: '10/11/2017',
    duration: '00:02:13',
    medicationName: 'Panadol',
    purpose: 'Headache',
    prescribedBy: 'Dr. Joe Akpa',
    administrationMethod: 'Oral',
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface MedicationProps {
  entry?: boolean;
  medicationList?: any;
}

const Medication: React.FC<MedicationProps> = ({ entry, medicationList }) => {
  const medicationListPayload = React.useMemo(
    () =>
      medicationList &&
      medicationList.length > 0 &&
      medicationList.map((medication, index) => {
        const {
          datePrescribed,
          duration,
          medicationName,
          purpose,
          prescribedBy,
          administrationMethod,
        } = medication;
        return {
          number: index + 1,
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          date: datePrescribed,
          duration,
          medicationName,
          purpose,
          prescribedBy,
          administrationMethod,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [medicationList],
  );
  return (
    <>
      {entry ? (
        <Table
          showPagination={false}
          goToPage={() => {}}
          pageCount={0}
          onRowClick={() => {}}
          columns={entryColumns}
          data={data}
        />
      ) : (
        <ContentWrapper>
          <Content billingPage noPadding>
            <CollapsibleComponent name="Medication" id="admission" noCheckBox isExpanded>
              {medicationListPayload && medicationListPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  onRowClick={() => {}}
                  columns={columns}
                  data={medicationListPayload || [{}]}
                />
              )}
            </CollapsibleComponent>

            <ButtonRow>
              <Button text="Add to Claim Form" onClick={() => {}} withIcon />
            </ButtonRow>
          </Content>
        </ContentWrapper>
      )}
    </>
  );
};

export default Medication;
