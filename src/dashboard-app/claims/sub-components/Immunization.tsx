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
    Header: 'Administration Date and Time',
    accessor: 'dateImmunized',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Immunization Name',
    accessor: 'immunization',
  },
  {
    Header: 'Administrator Name',
    accessor: 'administratorName',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
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
    Header: 'Administration Date and Time',
    accessor: 'dateImmunized',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Immunization Name',
    accessor: 'immunization',
  },
  {
    Header: 'Administrator Name',
    accessor: 'administratorName',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
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
    dateImmunized: 'June 02, 2020',
    duration: '01.00.00',
    immunization: 'Anthrax',
    administratorName: 'Dr. Kelechi Moon',
    quantity: 1,
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface ImmunizationProps {
  entry?: boolean;
  immunizationList?: any;
}

const Immunization: React.FC<ImmunizationProps> = ({ entry, immunizationList }) => {
  const immunizationListPayload = React.useMemo(
    () =>
      immunizationList &&
      immunizationList.length > 0 &&
      immunizationList.map((immunization, index) => {
        const {
          duration,
          administeredDate,
          immunizationName,
          administratorName,
          quantity,
        } = immunization;
        return {
          number: index + 1,
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          dateImmunized: administeredDate,
          duration,
          immunization: immunizationName,
          administratorName,
          quantity,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [immunizationList],
  );
  return (
    <>
      {entry ? (
        <Table
          showPagination={false}
          goToPage={() => {}}
          pageCount={0}
          columns={entryColumns}
          data={data}
          onRowClick={() => {}}
        />
      ) : (
        <ContentWrapper>
          <Content billingPage noPadding>
            <CollapsibleComponent name="Immunization" id="immunization" noCheckBox isExpanded>
              {immunizationListPayload && immunizationListPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  onRowClick={() => {}}
                  columns={columns}
                  data={immunizationListPayload || [{}]}
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

export default Immunization;
