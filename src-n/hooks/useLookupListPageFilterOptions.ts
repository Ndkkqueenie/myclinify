import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import * as React from 'react';
import debounce from 'lodash.debounce';
import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import dotProp from 'dot-prop';

type FilterOptions = {
  skip: number;
  take: number;
  keyword: string;
  dateRange: {
    from: string;
    to: string;
  };
};

const useLookupListPageFilterOptions = (query: DocumentNode, itemsPath: string) => {
  const history = useHistory();
  const { search } = useLocation();
  const queryParams = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const currentPageNumber = queryParams.page ? Number(queryParams.page) : 1;

  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    skip: (currentPageNumber - 1) * 10,
    take: 10,
    keyword: '',
    dateRange: {
      from: new Date('2020-01-01').toISOString(),
      to: new Date().toISOString(),
    },
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
    debounce((_filterOptions: React.SetStateAction<FilterOptions>) => {
      setFilterOptions(_filterOptions);
    }, 500),
    [],
  );

  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
    delayedSetFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      keyword: value,
    }));

  const setDateRange = (key: 'from' | 'to') => (e: Date) =>
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      dateRange: {
        ...prevFilterOptions.dateRange,
        [key]: e.toISOString(),
      },
    }));

  const { data, loading, error } = useQuery(query, {
    variables: {
      id: JSON.parse(sessionStorage.getItem('patientProfile') || '{}').id,
      filterOptions,
    },
  });

  const items = data ? dotProp.get(data, `${itemsPath}.list`) : [];
  const pageCount = data
    ? Math.ceil((dotProp.get(data, `${itemsPath}.totalCount`) as number) / filterOptions.take)
    : 0;

  return {
    filterOptions,
    goToPage: history.push,
    currentPageNumber,
    setFilterOptions,
    setDateRange,
    handleSearch,
    loading,
    items,
    pageCount,
    error,
  };
};

export default useLookupListPageFilterOptions;
