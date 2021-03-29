import { useLazyQuery } from '@apollo/client';
import { setAppData } from 'apollo/operations';
import { userType } from 'dashboard-app/utils/authTracker';
import dotProp from 'dot-prop';
import { DocumentNode } from 'graphql';
import { UserType } from 'graphql-types/globalTypes';
import debounce from 'lodash.debounce';
import qs from 'qs';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useModal } from './useModal';
import useRecordsHighlighter from './useRecordsHighlighter';
import useWaitingList from './useWaitingList';

type FilterOptions = {
  skip: number;
  take: number;
  clinifyId: string;
  memberNumber: string;
  fullName: string;
};

const useLookupFilterOptions = (query: DocumentNode, itemsPath: string) => {
  const { toggle, isShown } = useModal();
  const history = useHistory();
  const { search } = useLocation();
  const queryParams = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const currentPageNumber = queryParams.page ? Number(queryParams.page) : 1;

  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    skip: (currentPageNumber - 1) * 10,
    take: 10,
    clinifyId: '',
    memberNumber: '',
    fullName: '',
  });

  React.useEffect(() => {
    setFilterOptions((prevFilterOptions) => {
      const skip = (currentPageNumber - 1) * prevFilterOptions.take;
      if (skip !== prevFilterOptions.skip) {
        return {
          ...prevFilterOptions,
          skip,
        };
      }
      return prevFilterOptions;
    });
  }, [currentPageNumber]);

  const delayedSetFilterOptions = React.useCallback(
    debounce((field, value) => {
      setFilterOptions({ ...filterOptions, [field]: value });
    }, 500),
    [],
  );

  const [fetchResults, { loading, data, error }] = useLazyQuery(query);

  const items: any = data ? dotProp.get(data, `${itemsPath}.list`) : [];
  const pageCount = data
    ? Math.ceil((dotProp.get(data, `${itemsPath}.totalCount`) as number) / filterOptions.take)
    : 0;

  const {
    highlightAll,
    unSelectAll,
    highlightRecord,
    allHighlighted,
    setHighlightedRecords,
    highlightedRecords,
  } = useRecordsHighlighter(items);

  const triggerSearch = () => {
    unSelectAll();
    fetchResults({
      variables: {
        filterOptions,
      },
    });
  };

  const patientsToCheckin = highlightedRecords.map(
    (item) => items.filter(({ id }) => id === item)[0],
  );

  const waitingListHook = useWaitingList({ highlightedRecords, patientsToCheckin });

  const onRowClick = (accessor, path) => {
    const selectedId = path.split('/')[3];
    const {
      clinifyId,
      personalInformation: { firstName, lastName, displayPictureUrl },
    } = items.filter(({ id }) => id === selectedId)[0].defaultProfile;

    sessionStorage.setItem(
      'patientDetails',
      JSON.stringify({
        clinifyId,
        id: items[0].id,
        fullName: `${firstName} ${lastName}`,
        displayPictureUrl,
      }),
    );

    if (accessor === 'id') return;

    if (userType() === UserType.OrganizationDoctor) setAppData({ patientIsSelected: true });
    if (userType() === UserType.OrganizationFrontDeskOfficer) {
      setHighlightedRecords([selectedId]);
      toggle();
    }
  };

  return {
    filterOptions,
    goToPage: history.push,
    currentPageNumber,
    delayedSetFilterOptions,
    loading,
    items,
    pageCount,
    error,
    triggerSearch,
    onRowClick,
    toggle,
    isShown,
    highlightAll,
    highlightRecord,
    unSelectAll,
    allHighlighted,
    setHighlightedRecords,
    highlightedRecords,
    patientsToCheckin,
    waitingListHook,
  };
};

export default useLookupFilterOptions;
