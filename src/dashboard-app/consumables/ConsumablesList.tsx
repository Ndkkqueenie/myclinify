import MainListView from 'dashboard-app/common/MainListView';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';
import Actions from 'dashboard-app/common/Actions';

const data = [
  {
    number: 1,
    dateAndTimeSubmitted: '12/05/20 11:54am',
    consumableName: 'Injection',
    quantity: '2',
    patientType: 'Inpatient',
    sex: 'Male',
    consumedBy: 'Michael',
    fullName: 'Efosa Okpugie',
    paymentType: 'Cheque',
    actions: (
      <Actions
        handleDelete={() => {}}
        handleDuplicate={() => {}}
        id=""
        value="Completed"
        tableAction="actions"
      />
    ),
  },
  {
    number: 2,
    dateAndTimeSubmitted: '12/05/20 11:54am',
    consumableName: 'Prostetic Legs',
    quantity: '1',
    patientType: 'Outpatient',
    sex: 'Male',
    consumedBy: 'Efosa',
    fullName: 'Michael Omidele',
    paymentType: 'Cash',
    actions: (
      <Actions
        handleDelete={() => {}}
        handleDuplicate={() => {}}
        id=""
        value="Completed"
        tableAction="actions"
      />
    ),
  },
];

export interface ConsumablesListProps {
  userType?: UserType;
  listPageHook?: any;
  showSearchTab?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noListPadding?: boolean;
  isOnModal?: boolean;
  selectRecord?: (id: string) => void;
  selectedRecords?: string[];
  selectedRecordType?: string;
  handleAddNew?: () => void;
  readOnly?: boolean;
  addNewButton?: boolean;
}
const ConsumablesList: React.FC<ConsumablesListProps> = (props) => {
  const { addNewButton } = props;

  const uniqueColumns = [
    {
      Header: 'Consumed Date and Time',
      accessor: 'dateAndTimeSubmitted',
    },
    {
      Header: 'Requested By',
      accessor: 'consumedBy',
    },
    {
      Header: 'Consumable Type',
      accessor: 'consumableName',
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
    },
  ];

  const generalListColumns = [
    {
      Header: 'Patient Full Name',
      accessor: 'fullName',
    },
    {
      Header: 'Patient Type',
      accessor: 'patientType',
    },
    {
      Header: 'Status',
      accessor: 'actions',
    },
  ];

  const patientListColumn = [
    {
      Header: 'Patient Type',
      accessor: 'patientType',
    },
    {
      Header: 'Payment Type',
      accessor: 'paymentType',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
    },
  ];

  const columnToAdd = addNewButton ? patientListColumn : generalListColumns;
  const columns = [...uniqueColumns, ...columnToAdd];

  return (
    <MainListView
      {...props}
      items={data}
      noActionTab
      uniqueColumns={columns}
      showRecordCreated={false}
      recordType="Consumables"
      addButtonText="Consumable"
      addNewButton={addNewButton}
    />
  );
};

export default ConsumablesList;
