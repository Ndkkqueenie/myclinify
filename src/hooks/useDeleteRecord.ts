import { useMutation } from '@apollo/client';
import errorHandler from 'dashboard-app/utils/errorHandler';
import {
  AdmissionFilterInput,
  AllergyFilterInput,
  AppointmentFilterInput,
  ImmunizationFilterInput,
  LabTestFilterInput,
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
  clearAction: () => void = () => {},
  pluralRecordType?: string,
  actionType = 'delete',
  toggle = () => {},
) => {
  const { addToast } = useToasts();
  const recordTypeLower = recordType.toLowerCase();
  const recordTypePlural = pluralRecordType || `${recordTypeLower}s`;
  const archiveToastType = filterOptions.archive ? 'Unarchive' : 'Archive';
  const toastActionType = actionType === 'delete' ? 'Delete' : archiveToastType;
  const recordTypePluralCap =
    pluralRecordType && pluralRecordType !== 'lab_tests'
      ? `${pluralRecordType[0].toUpperCase()}${pluralRecordType.slice(1)}`
      : `${recordType}s`;

  const [deleteRecord, { loading: deleting }] = useMutation(mutationQuery, {
    update: (cache, { data }) => {
      const deletedRecords = data[`${actionType}${recordTypePluralCap}`].map(({ id }) => id);

      const getCacheData: any = (cacheFilterOptions) =>
        cache.readQuery(
          {
            query: fetchQuery,
            variables: {
              filterOptions: cacheFilterOptions,
            },
          },
          true,
        );

      const newCache = getCacheData(filterOptions);
      const updatedUserCache = {
        ...newCache.user,
        [recordTypePlural]: {
          ...newCache.user[recordTypePlural],
          totalCount: newCache.user[recordTypePlural].totalCount - 1,
          list: newCache.user[recordTypePlural].list.filter(
            (record: any) => !deletedRecords.includes(record.id),
          ),
        },
      };

      const updateCache = (updatedCache, newFilterOptions) => {
        cache.writeQuery({
          query: fetchQuery,
          data: {
            user: updatedCache,
          },
          variables: {
            filterOptions: newFilterOptions,
          },
        });
      };
      updateCache(updatedUserCache, filterOptions);
      // if action type is archive. add the record to the unarchived/archived section cache.
      if (actionType === 'archive') {
        try {
          const sectionFilterOptions = { ...filterOptions, archive: !filterOptions.archive };
          const sectionCache = getCacheData(sectionFilterOptions);
          const updatedSectionCache = {
            ...sectionCache.user,
            [recordTypePlural]: {
              ...sectionCache.user[recordTypePlural],
              totalCount: sectionCache.user[recordTypePlural].totalCount + 1,
              list: [
                ...data[`archive${recordTypePluralCap}`],
                ...sectionCache.user[recordTypePlural].list,
              ],
            },
          };
          updateCache(updatedSectionCache, sectionFilterOptions);
        } catch (error) { } // eslint-disable-line
      }
    },
    onCompleted: (data) => {
      const deletedData = data[`${actionType}${recordTypePluralCap}`];
      if (!deletedData.length) return addToast('Deletion Unsuccessful', { appearance: 'error' });
      addToast(`Record ${toastActionType}d Successfully`, { appearance: 'success' });
      clearAction();
      toggle();
    },
    onError: (error) => {
      addToast(errorHandler(error), { appearance: 'error' });
      toggle();
    },
  });

  const deleteRecordAction = (ids: string[], archive = false) =>
    deleteRecord({ variables: { ids, archive } });

  return {
    deleteRecordAction,
    deleting,
  };
};
