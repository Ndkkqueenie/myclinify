import { useQuery } from '@apollo/client';
import subVitalSectionParams from './constants/subVitalSectionParams';

export default (
  section: string,
  parentRecordId: string,
  isEdit: boolean,
  defaultSubRecords: any,
) => {
  const { fetchQuery, fetchPath, initialValues } = subVitalSectionParams[section];
  const { loading, error, data } = useQuery(fetchQuery, {
    variables: { parentRecordId },
    skip: !isEdit,
  });

  let fetchedSubRecords = data ? data[fetchPath] : [initialValues];
  if (data && !fetchedSubRecords?.length) fetchedSubRecords = [initialValues];

  const vitalSubRecords = isEdit ? fetchedSubRecords : defaultSubRecords;

  const fetchingOrError = loading || error;

  return {
    vitalSubRecords,
    loading,
    fetchingOrError,
    error,
  };
};
