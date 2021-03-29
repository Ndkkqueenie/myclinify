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
    Header: 'Operation Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Surgery Type',
    accessor: 'surgery',
  },
  {
    Header: 'Requested By',
    accessor: 'requestedBy',
  },
  {
    Header: 'Specialty',
    accessor: 'specialty',
  },
  {
    Header: 'Class',
    accessor: 'class',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const entryColumns = [
  {
    Header: 'S/N',
    accessor: 'number',
  },
  {
    Header: 'Operation Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Surgery Type',
    accessor: 'surgery',
  },
  {
    Header: 'Requested By',
    accessor: 'requestedBy',
  },
  {
    Header: 'Specialty',
    accessor: 'specialty',
  },
  {
    Header: 'Class',
    accessor: 'class',
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
    surgery: 'Appendicitis',
    requestedBy: 'Dr. John Aba',
    specialty: 'Surgeon',
    class: 'Consultant',
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface SurgeryProps {
  entry?: boolean;
  surgeryList?: any;
}

const Surgery: React.FC<SurgeryProps> = ({ entry, surgeryList }) => {
  const surgeryListPayload = React.useMemo(
    () =>
      surgeryList &&
      surgeryList.length > 0 &&
      surgeryList.map((surgery, index) => {
        const { surgeryDate, duration, requestedBy, specialty } = surgery;
        return {
          number: index + 1,
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          date: surgeryDate,
          duration,
          surgery: '',
          requestedBy,
          specialty,
          class: 'Consultant',
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [surgeryList],
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
            <CollapsibleComponent name="Surgery" id="admission" noCheckBox isExpanded>
              {surgeryListPayload && surgeryListPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  onRowClick={() => {}}
                  columns={columns}
                  data={surgeryListPayload || [{}]}
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

export default Surgery;
