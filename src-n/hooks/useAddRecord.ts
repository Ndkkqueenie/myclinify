import {
  AllergyFilterInput,
  VitalFilterInput,
  AdmissionFilterInput,
  AppointmentFilterInput,
  ImmunizationFilterInput,
  RadiologyFilterInput,
  LabTestFilterInput,
  SurgeryFilterInput,
  NewAllergyInput,
  NewImmunizationInput,
  MedicationInput,
  AdmissionInput,
  AppointmentInput,
  NewLabTestInput,
  NewRadiologyInput,
  NewSurgeryInput,
  NewConsultationInput,
} from 'graphql-types/globalTypes';
import { useMutation } from '@apollo/client';
import { useToasts } from 'react-toast-notifications';
import formatLinkedRecords from 'dashboard-app/utils/formatLinkedRecords';
import errorHandler from 'dashboard-app/utils/errorHandler';

export default (
  mutationQuery: any,
  recordType: string,
  fetchQuery: any,
  filterOptions:
    | AllergyFilterInput
    | VitalFilterInput
    | AdmissionFilterInput
    | AppointmentFilterInput
    | ImmunizationFilterInput
    | RadiologyFilterInput
    | LabTestFilterInput
    | SurgeryFilterInput,
  clearAction: () => void = () => {},
  pluralRecordType?: string,
  actionType = 'Adde',
) => {
  const { addToast } = useToasts();
  const recordTypeLower = recordType === 'LabTest' ? 'labTestResult' : recordType.toLowerCase();
  const recordTypePlural = pluralRecordType || `${recordTypeLower}s`;

  const [addRecord, { loading: adding }] = useMutation(mutationQuery, {
    update: (cache, { data }) => {
      const cacheData: any = cache.readQuery({
        query: fetchQuery,
        variables: {
          filterOptions: { ...filterOptions, archive: false },
        },
      });

      formatLinkedRecords(data[`add${recordType}`]);

      const newData = {
        ...cacheData.user,
        [recordTypePlural]: {
          ...cacheData.user[recordTypePlural],
          totalCount: cacheData.user[recordTypePlural].totalCount + 1,
          list: [data[`add${recordType}`], ...cacheData.user[recordTypePlural].list],
        },
      };

      cache.writeQuery({
        query: fetchQuery,
        data: {
          user: newData,
        },
        variables: {
          filterOptions: { ...filterOptions, archive: false },
        },
      });
    },

    onCompleted: () => {
      addToast(`Record ${actionType}d Successfully`, { appearance: 'success' });
      clearAction();
    },
    onError: (error) => addToast(errorHandler(error), { appearance: 'error' }),
  });

  const addRecordAction = (
    input:
      | NewAllergyInput
      | NewImmunizationInput
      | MedicationInput
      | AdmissionInput
      | AppointmentInput
      | NewLabTestInput
      | NewRadiologyInput
      | NewSurgeryInput
      | NewConsultationInput,
  ) => addRecord({ variables: { input } });

  return {
    addRecordAction,
    adding,
  };
};
