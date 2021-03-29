import { useQuery } from '@apollo/client';
import profileSectionParams, {
  PROFILE_INFOS_FILTER_OPTIONS,
} from './constants/profileSectionParams';

type TabNameType =
  | 'Pre-existing Condition'
  | 'Past Surgical History'
  | 'Gynecologic History'
  | 'Obstetric History'
  | 'Family History'
  | 'Social History'
  | 'Physical Activity'
  | 'Disability'
  | 'Past Encounters'
  | 'Next of Kin'
  | 'Coverage Information'
  | 'Dependents';

export default (section: TabNameType) => {
  const { fetchQuery, fetchPath, initialValues } = profileSectionParams[section];
  const { loading, error, data } = useQuery(fetchQuery, {
    variables: { filterInput: PROFILE_INFOS_FILTER_OPTIONS },
  });

  const profileInfos = data ? [initialValues, ...data[fetchPath]?.list] : [initialValues];

  const fetchingOrError = loading || error;

  return {
    profileInfos,
    loading,
    fetchingOrError,
    error,
  };
};
