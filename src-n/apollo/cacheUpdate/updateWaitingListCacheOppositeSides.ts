import { DocumentNode } from 'graphql';
import { WaitingListFilterInput } from 'graphql-types/globalTypes';

const updateCacheOnOppositeSides = ({
  cache,
  filterOptions,
  oppositeSectionFilterOptions,
  query,
  data,
  dataPath,
  clearAction,
  canUpdateOppositeSide = true,
}: {
  cache: any;
  filterOptions: WaitingListFilterInput;
  oppositeSectionFilterOptions: WaitingListFilterInput;
  query: DocumentNode;
  data: any;
  clearAction: any;
  dataPath: string;
  canUpdateOppositeSide?: boolean;
}) => {
  const dataIds = data[dataPath].map(({ id }) => id);

  const getCacheData: any = (cacheFilterOptions) =>
    cache.readQuery({
      query,
      variables: {
        filterOptions: cacheFilterOptions,
      },
    });

  const newCache = getCacheData(filterOptions);
  const updatedWaitingListCache = {
    totalCount: newCache?.waitingList?.totalCount - dataIds.length,
    list: newCache?.waitingList?.list?.filter((waiter: any) => !dataIds.includes(waiter.id)),
  };

  const updateCache = (updatedCache, newFilterOptions) =>
    cache.writeQuery({
      query,
      data: {
        waitingList: updatedCache,
      },
      variables: {
        filterOptions: newFilterOptions,
      },
    });

  updateCache(updatedWaitingListCache, filterOptions);
  clearAction();

  if (!canUpdateOppositeSide) return;
  try {
    const sectionCache = getCacheData(oppositeSectionFilterOptions);
    const updatedSectionCache = {
      list: [...data[dataPath], ...sectionCache.waitingList.list],
      totalCount: sectionCache.waitingList.totalCount + data[dataPath].length,
    };
    updateCache(updatedSectionCache, oppositeSectionFilterOptions);
  } catch (error) {} // eslint-disable-line
};

export default updateCacheOnOppositeSides;
