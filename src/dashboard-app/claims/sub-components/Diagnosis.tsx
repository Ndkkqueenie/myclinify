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
    Header: 'Diagnosis Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Diagnosis',
    accessor: 'diagnosis',
  },
  {
    Header: 'Diagnosis By',
    accessor: 'diagnosisBy',
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
    Header: 'S/N ',
    accessor: 'number',
  },
  {
    Header: 'Diagnosis Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Diagnosis',
    accessor: 'diagnosis',
  },
  {
    Header: 'Diagnosis By',
    accessor: 'diagnosisBy',
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
    date: '01/11/2017',
    duration: '00:00:14',
    diagnosis: 'Bacteria Vaginosis',
    diagnosisBy: 'Dr. John Doe',
    specialty: 'Oncologist',
    class: 'Consultant',
    action: 'View',
    actions: <Actions />,
    subRows: undefined,
  },
];

export interface DiagnosisProps {
  entry?: boolean;
  addToClaim: () => void;
  diagnosisList?: any;
}

const Diagnosis: React.FC<DiagnosisProps> = ({ entry, diagnosisList }) => {
  const diagnosisListPayload = React.useMemo(
    () =>
      diagnosisList &&
      diagnosisList.length > 0 &&
      diagnosisList.map((diagnosisObject, index) => {
        const {
          diagnosisDate,
          duration,
          diagnosis,
          diagnosedBy,
          specialty,
          class: diagnosisClass,
        } = diagnosisObject;
        return {
          number: index + 1,
          select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" />,
          date: diagnosisDate,
          duration,
          diagnosis,
          diagnosisBy: diagnosedBy,
          specialty,
          class: diagnosisClass,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [diagnosisList],
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
            <CollapsibleComponent name="Diagnosis" id="diagnosis" noCheckBox isExpanded>
              {diagnosisListPayload && diagnosisListPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  onRowClick={() => {}}
                  columns={columns}
                  data={diagnosisListPayload || [{}]}
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

export default Diagnosis;
