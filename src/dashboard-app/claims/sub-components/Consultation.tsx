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
    Header: 'Consultation Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: "Doctor's Name",
    accessor: 'doctorName',
  },
  {
    Header: 'Condition',
    accessor: 'condition',
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
    Header: 'Consultation Date and Time',
    accessor: 'date',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: "Doctor's Name",
    accessor: 'doctorName',
  },
  {
    Header: 'Condition',
    accessor: 'condition',
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

export interface ConsultationProps {
  entry?: boolean;
  entryData?: any;
  onChange?: () => void;
  addToClaim: () => void;
  consultationList?: any;
}

const Consultation: React.FC<ConsultationProps> = ({
  entry,
  consultationList,
  onChange = () => {},
}) => {
  const consultationPayload = React.useMemo(
    () =>
      consultationList &&
      consultationList.length > 0 &&
      consultationList.map((consultation, index) => {
        return {
          select: (
            <CheckBox id="admission-checkbox-1" name="admission-checkbox" onChange={onChange} />
          ),
          number: index + 1,
          date: consultation.consultationDateTime,
          duration: consultation.duration,
          doctorName: consultation.doctorName,
          // condition: consultation.condition,
          specialty: consultation.specialty,
          class: consultation.class,
          action: 'View',
          actions: <Actions />,
          subRows: undefined,
        };
      }),
    [consultationList], // eslint-disable-line
  );
  const data = [
    {
      select: <CheckBox id="admission-checkbox-1" name="admission-checkbox" onChange={onChange} />,
      number: 1,
      date: '10/11/2017',
      duration: '00:02:13',
      doctorName: 'Dr John Doe',
      condition: 'Malaria',
      specialty: 'Oncologist',
      class: 'Consultant',
      action: 'View',
      actions: <Actions />,
      subRows: undefined,
    },
  ];
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
            <CollapsibleComponent name="Consultation" id="admission" noCheckBox isExpanded>
              {consultationPayload && consultationPayload.length > 0 && (
                <Table
                  evenColumns
                  showPagination={false}
                  goToPage={() => {}}
                  pageCount={0}
                  columns={columns}
                  onRowClick={() => {}}
                  data={consultationPayload || [{}]}
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

export default Consultation;
