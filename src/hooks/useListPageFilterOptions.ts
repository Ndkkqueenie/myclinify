import { useQuery } from '@apollo/client';
import { GET_APP_DATA } from 'apollo/operations';
import { FILTER_INPUT } from 'dashboard-app/utils/constants';
import dotProp from 'dot-prop';
import { DocumentNode } from 'graphql';
import { RecordCreator } from 'graphql-types/globalTypes';
import debounce from 'lodash.debounce';
import qs from 'qs';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { RoutesVariable } from 'routes';
import useAddForm from './useAddForm';
import useRecordsHighlighter from './useRecordsHighlighter';
import useWaitingList from './useWaitingList';

type FilterOptions = any;

const useListPageFilterOptions = (
  query: DocumentNode,
  itemsPath: string,
  variables: RoutesVariable,
  filterOption: FilterOptions,
  addFormParams?,
) => {
  const history = useHistory();
  const { search } = useLocation();
  const queryParams = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const currentPageNumber = queryParams.page ? Number(queryParams.page) : 1;

  const {
    data: {
      appData: { creator },
    },
  } = useQuery(GET_APP_DATA);

  const defaultFilterOption = filterOption || FILTER_INPUT;
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(defaultFilterOption);

  const clearFilter = () => setFilterOptions(defaultFilterOption);

  const delayedSetFilterOptions = useCallback(
    debounce((_filterOptions: React.SetStateAction<FilterOptions>) => {
      setFilterOptions(_filterOptions);
    }, 1000),
    [],
  );

  useEffect(() => {
    const skip = (currentPageNumber - 1) * filterOptions.take;
    if (skip !== filterOptions.skip) {
      return delayedSetFilterOptions({
        ...filterOptions,
        skip,
      });
    }
    if (itemsPath !== 'user.hmos' && itemsPath !== 'waitingList') {
      return delayedSetFilterOptions({
        ...filterOptions,
        creator,
      });
    }
  }, [currentPageNumber, creator]);

  const changeRecordCreator = (creator: string) =>
    delayedSetFilterOptions({ ...filterOptions, creator: creator as RecordCreator });

  const changeLimit = (take: number) => delayedSetFilterOptions({ ...filterOptions, take });

  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
    delayedSetFilterOptions({
      ...filterOptions,
      keyword: value,
    });

  const setDateRange = (key: 'from' | 'to') => (e: Date | null) =>
    delayedSetFilterOptions({
      ...filterOptions,
      dateRange: {
        ...filterOptions.dateRange,
        [key]: e ? new Date(e).toISOString() : null,
      },
    });

  const filterByStatus = (value: string) =>
    delayedSetFilterOptions({
      ...filterOptions,
      status: value,
    });

  // N.B previous data is not preserved in useQuery().data so it has to be stored;
  const [listItems, setListItems] = useState([]);
  const { data, loading, error } = useQuery(query, {
    variables: {
      filterOptions,
      id: JSON.parse(sessionStorage.getItem('patientDetails') || '{}').id,
    },
    onCompleted: (fetchedData) => {
      setListItems(dotProp.get(fetchedData, `${itemsPath}.list`) || []);
    },
  });

  // keep react state in sync with data in Apollo cache
  useEffect(() => (data ? setListItems(dotProp.get(data, `${itemsPath}.list`) || []) : () => {}), [
    data,
  ]);

  let items: any = listItems;

  if (items.length > 0) {
    items = items.map((item) => ({ ...item, secondId: item.id }));
  }

  const { readOnly, recordsToView, isOnModal, toggleContent } = addFormParams;
  if (readOnly) {
    items = items.filter((item) => recordsToView.includes(item.id));
  }

  // console.log(items, '?????????', itemsPath, loading);

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

  const handleRowClick = (accessor, goToPath) => {
    const noClickColumns = ['id', 'secondId'];
    if (noClickColumns.includes(accessor)) return;
    const splittedPath = goToPath.split('/');
    if (isOnModal) {
      const id = splittedPath[4];
      return toggleContent(id);
    }
    if (variables.isWaitingList) {
      const id = splittedPath[3];
      setHighlightedRecords([id]);
      return toggleContent();
    }
    history.push(goToPath);
  };

  const toggleViewArchive = () => {
    delayedSetFilterOptions({ ...filterOptions, archive: !filterOptions.archive });
    setHighlightedRecords([]);
  };

  const waitersToUpdate = highlightedRecords.map(
    (item) => items.filter(({ id }) => id === item)[0],
  );

  const waitingListHook = useWaitingList({
    filterOptions,
    highlightedRecords,
    isOnWaitingList: true,
    clearAction: unSelectAll,
    items,
  });

  const {
    archiveWaiters,
    checkPatientsInOrOut,
    mutationLoading: waitingListMutating,
    toggle: toggleWaitingListDeleteModal,
    isShown: showWaitingListDeleteModal,
    deleteWaiters,
    checkOutSinglePatient,
    canBulkAssign,
    canBulkCheckIn,
    canBulkReAssign,
    canBulkCheckOut,
  } = waitingListHook;

  if (variables.isWaitingList) {
    const checkedOutItems = items.filter(({ status }) => status === 'Checked Out');
    const itemsNotCheckedOut = items.filter(({ status }) => status !== 'Checked Out');
    items = [...itemsNotCheckedOut, ...checkedOutItems];
  }

  const {
    duplicateRecord,
    archiveRecordAction,
    deleteRecordAction,
    toggle,
    showModalPrompt,
  } = useAddForm({
    ...addFormParams,
    filterOptions,
    clearAction: unSelectAll,
  });

  const archiveAction = itemsPath === 'waitingList' ? archiveWaiters : archiveRecordAction;
  const toggleDeleteModal = itemsPath === 'waitingList' ? toggleWaitingListDeleteModal : toggle;

  return {
    filterOptions,
    changeLimit,
    changeRecordCreator,
    goToPage: history.push,
    currentPageNumber,
    setFilterOptions,
    clearFilter,
    setDateRange,
    handleSearch,
    handleRowClick,
    highlightRecord,
    setHighlightedRecords,
    unSelectAll,
    highlightedRecords,
    highlightAll,
    allHighlighted,
    toggleViewArchive,
    duplicateRecord,
    archiveRecordAction: archiveAction,
    deleteRecordAction,
    waitersToUpdate,
    toggle: toggleDeleteModal,
    toggleWaitingListDeleteModal,
    showWaitingListDeleteModal,
    checkoutPatients: checkPatientsInOrOut,
    checkOutSinglePatient,
    deleteWaiters,
    filterByStatus,
    canBulkAssign,
    canBulkCheckIn,
    canBulkReAssign,
    canBulkCheckOut,
    waitingListHook,
    showModalPrompt,
    loading: loading || waitingListMutating,
    items,
    pageCount,
    error,
  };
};

export default useListPageFilterOptions;
