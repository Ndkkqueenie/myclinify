import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import * as React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CLAIMS } from '../dashboard-app/queries/claims';

import { BillingStatus, ClaimFilterInput } from '../graphql-types/globalTypes';

export const LIMIT = 10;

const useGetClaims = () => {
  const history = useHistory();
  const { search } = useLocation();
  const queryParams = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const currentPageNumber = queryParams.page ? Number(queryParams.page) : 1;

  const defaultFilterOptions: ClaimFilterInput = {
    skip: (currentPageNumber - 1) * LIMIT,
    take: LIMIT,
    status: BillingStatus.Awaiting,
    hospital: '',
    memberNumber: '',
  };
  const [filterOptions, setFilterOptions] = React.useState<ClaimFilterInput>(defaultFilterOptions);

  const [getClaims, { data, loading, error }] = useLazyQuery(GET_CLAIMS);

  const clearFilter = () => {
    setFilterOptions(defaultFilterOptions);
    makeRequest();
  };

  const makeRequest = React.useCallback(() => {
    getClaims({
      variables: {
        filterOptions,
      },
    });
  }, [filterOptions, getClaims]);

  // Pagination
  React.useEffect(() => {
    setFilterOptions((prevFilterOptions) => {
      //  filterOptions.take will never be null or undefined but typescript wahala
      const take = prevFilterOptions.take || LIMIT;
      const skip = (currentPageNumber - 1) * take;
      if (skip !== prevFilterOptions.skip) {
        return {
          ...prevFilterOptions,
          skip,
        };
      }
      return prevFilterOptions;
    });
  }, [currentPageNumber]);

  React.useEffect(() => {
    makeRequest();
  }, []); // eslint-disable-line

  const handleSetFilterOptions = (key: keyof ClaimFilterInput, value: string) => {
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    makeRequest();
  };

  //  filterOptions.take will never be null or undefined but typescript wahala
  const take = filterOptions.take || LIMIT;
  const pageCount = data ? Math.ceil(data.claims.totalCount / take) : 0;

  return {
    goToPage: history.push,
    currentPageNumber,
    clearFilter,
    handleSetFilterOptions,
    handleSearch,
    loading,
    filterOptions,
    items: data ? data.claims.list : [],
    pageCount,
    error,
  };
};

export default useGetClaims;
