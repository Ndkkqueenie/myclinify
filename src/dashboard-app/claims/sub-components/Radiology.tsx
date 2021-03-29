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
    Header: 'Examination Date and Time',
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
    Header: 'Requested By',
    accessor: 'requestedBy',
  },
  {
    Header: 'Examination Type',
    accessor: 'examinationType',
  },
  {
    Header: 'Procedure',
    accessor: 'procedure',
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
    Header: 'Examination Date and Time',
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
    Header: 'Requested By',
    accessor: 'requestedBy',
  },
  {
    Header: 'Examination Type',
    accessor: 'examinationType',
  },
  {
    Header: 'Procedure',
    accessor: 'procedure',
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
    condition: 'Broken Bone',
    requestedBy: 'Dr John Doe',
    examinationType: 'MRI',
    procedure: 'Chemoembolization',
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface RadiologyProps {
  entry?: boolean;
  radiologyList?: any;
}

const Radiology: React.FC<RadiologyProps> = ({ entry, radiologyList }) => {
  const radiologyListPayload = React.useMemo(
    () =>
      radiologyList &&
      radiologyList.length > 0 &&
      radiologyList.map((radiology, index) => {
        const { examDate, duration, requester } = radiology;
        return {
          number: index + 1,
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          date: examDate,
          duration,
          requestedBy: requester,
          // examinationType: type,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [radiologyList],
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
            <CollapsibleComponent name="Radiology" id="radiology" noCheckBox isExpanded>
              {radiologyListPayload && radiologyListPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  onRowClick={() => {}}
                  columns={columns}
                  data={radiologyListPayload || [{}]}
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

export default Radiology;
