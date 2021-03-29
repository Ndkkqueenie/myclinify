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
    Header: 'Test Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Condition',
    accessor: 'condition',
  },
  {
    Header: 'Test Name',
    accessor: 'testName',
  },
  {
    Header: 'Lab Order',
    accessor: 'orderName',
  },
  {
    Header: 'Ordered By',
    accessor: 'orderedBy',
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
    Header: 'Test Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Condition',
    accessor: 'condition',
  },
  {
    Header: 'Test Name',
    accessor: 'testName',
  },
  {
    Header: 'Lab Order',
    accessor: 'orderName',
  },
  {
    Header: 'Ordered By',
    accessor: 'orderedBy',
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
    condition: 'Malaria',
    testName: 'Monocytes',
    orderName: 'CBC & Differential',
    orderedBy: 'Dr John Doe',
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface LaboratoryProps {
  entry?: boolean;
  laboratoryList?: any;
}

const Laboratory: React.FC<LaboratoryProps> = ({ entry, laboratoryList }) => {
  const laboratoryListPayload = React.useMemo(
    () =>
      laboratoryList &&
      laboratoryList.length > 0 &&
      laboratoryList.map((laboratory, index) => {
        const { testDate, duration, orderedBy } = laboratory;
        return {
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          number: index + 1,
          date: testDate,
          duration,
          testName: '',
          orderedBy,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [laboratoryList],
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
            <CollapsibleComponent name="Laboratory" id="admission" noCheckBox isExpanded>
              {laboratoryListPayload && laboratoryListPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  onRowClick={() => {}}
                  columns={columns}
                  data={laboratoryListPayload || [{}]}
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

export default Laboratory;
