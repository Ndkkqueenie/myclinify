import { useMutation } from '@apollo/client';
import updateRecordCache from 'apollo/cacheUpdate/updateRecordCache';
import errorHandler from 'dashboard-app/utils/errorHandler';
import {
  AdmissionFilterInput,
  AdmissionInput,
  AllergyFilterInput,
  AppointmentFilterInput,
  AppointmentInput,
  ImmunizationFilterInput,
  LabTestFilterInput,
  MedicationInput,
  NewAllergyInput,
  NewConsultationInput,
  NewImmunizationInput,
  NewLabTestInput,
  NewRadiologyInput,
  NewSurgeryInput,
  RadiologyFilterInput,
  SurgeryFilterInput,
  VitalFilterInput,
} from 'graphql-types/globalTypes';
import { useToasts } from 'react-toast-notifications';

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
  pluralRecordType?: string,
  setInput = (data: any) => data,
) => {
  const { addToast } = useToasts();
  const recordTypeLower = recordType === 'LabTest' ? 'labTestResult' : recordType.toLowerCase();
  const recordTypePlural = pluralRecordType || `${recordTypeLower}s`;

  const [updateRecord, { loading: updating }] = useMutation(mutationQuery, {
    update: (cache, { data }) => {
      updateRecordCache({ cache, data, filterOptions, recordType, recordTypePlural, fetchQuery });
      setInput(data[`update${recordType}`]);
    },
    onCompleted: () => {
      addToast(`Record Updated Successfully`, { appearance: 'success' });
    },
    onError: (error) => addToast(errorHandler(error), { appearance: 'error' }),
  });

  const updateRecordAction = (
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
    id: string,
  ) => updateRecord({ variables: { input, id } });

  return {
    updateRecordAction,
    updating,
  };
};
