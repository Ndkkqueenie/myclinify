import ListView from 'dashboard-app/common/ListView';
import { formatTableData, formatTableDateTime } from 'dashboard-app/utils/formatTable';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

export interface VitalSignListProps {
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
}

const uniqueColumns = [
  {
    Header: (
      <div className="list-header-column">
        Created <br /> Date and Time
      </div>
    ),
    accessor: 'createdDate',
    Cell: formatTableDateTime,
  },
  {
    Header: 'Height',
    accessor: 'anthropometry',
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.height) return '--';
      const finalText = `${value[0]?.height} ${value[0]?.heightUnit || ''}`;
      return finalText;
    },
  },
  {
    Header: 'Weight',
    accessor: (row) => row.anthropometry,
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.weight) return '--';
      const finalText = `${value[0]?.weight} ${value[0]?.weightUnit || ''}`;
      return finalText;
    },
  },
  {
    Header: 'Blood Glucose',
    accessor: 'bloodGlucose',
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.reading) return '--';
      const finalText = `${value[0]?.reading} ${value[0]?.readingUnit || ''}`;
      return finalText;
    },
  },
  {
    Header: 'Blood Pressure',
    accessor: 'bloodPressure',
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.systolic && !value[0]?.diastolic) return '--';
      const finalText = `${value[0]?.systolic || ''} / ${value[0]?.diastolic || ''}`;
      return finalText;
    },
  },
  {
    Header: 'Pulse Rate',
    accessor: 'pulseRate',
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.reading) return '--';
      const finalText = `${value[0]?.reading} bpm`;
      return finalText;
    },
  },
  {
    Header: 'Respiratory Rate',
    accessor: 'respiratoryRate',
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.reading) return '--';
      const finalText = `${value[0]?.reading} cpm`;
      return finalText;
    },
  },
  {
    Header: 'Temperature',
    accessor: 'temperature',
    Cell: ({ value }) => {
      if (!value) return '--';
      if (!value[0]?.reading) return '--';
      const finalText = `${value[0]?.reading} ${value[0]?.readingUnit || ''}`;
      return finalText;
    },
  },
  {
    Header: 'Hospital Name',
    accessor: 'hospitalName',
    Cell: formatTableData,
  },
];

const VitalSignList: React.FC<VitalSignListProps> = (props) => (
  <ListView {...props} uniqueColumns={uniqueColumns} recordType="Vital Signs" />
);

export default VitalSignList;
