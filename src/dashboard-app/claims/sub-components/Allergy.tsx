import React from 'react';

import { ContentWrapper, Content, ButtonRow } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import CollapsibleComponent from 'dashboard-app/common/CollapsibleComponent';
import Button from 'dashboard-app/common/Button';
import CheckBox from 'dashboard-app/common/CheckBox';
import SevernessStatus from 'dashboard-app/common/SevernessStatus';
import Actions from 'dashboard-app/common/Actions';

const columns = [
  {
    Header: ' ',
    accessor: 'select',
  },
  {
    Header: 'Occurrence Date and Time',
    accessor: 'occurenceDate',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Allergy Type',
    accessor: 'type',
  },
  {
    Header: 'Trigger',
    accessor: 'trigger',
  },
  {
    Header: 'Reaction',
    accessor: 'reactions',
  },
  {
    Header: 'Severeness',
    accessor: 'severeness',
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
    Header: 'Occurrence Date and Time',
    accessor: 'occurenceDate',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Allergy Type',
    accessor: 'type',
  },
  {
    Header: 'Trigger',
    accessor: 'trigger',
  },
  {
    Header: 'Reaction',
    accessor: 'reactions',
  },
  {
    Header: 'Severeness',
    accessor: 'severeness',
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
    occurenceDate: '10/11/2017',
    duration: '00:02:13',
    type: 'Animal',
    trigger: 'Cat',
    reactions: 'Sneezing',
    severeness: <SevernessStatus value="Mild" />,
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface AllergyProps {
  entry?: boolean;
}

const Allergy: React.FC<AllergyProps> = ({ entry }) => {
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
            <CollapsibleComponent name="Allergy" id="admission" noCheckBox>
              {data.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  columns={columns}
                  data={data}
                  onRowClick={() => {}}
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

export default Allergy;
