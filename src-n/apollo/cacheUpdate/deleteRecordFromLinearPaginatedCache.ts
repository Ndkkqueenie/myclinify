const deleteRecordFromLinearPaginatedRecordCache = ({
  cache,
  data,
  filterInput,
  dataPath,
  cachePath,
  fetchQuery,
}) => {
  const cacheData = cache.readQuery({
    query: fetchQuery,
    variables: {
      filterInput,
    },
  });

  const updatedCache = {
    totalCount: cacheData[cachePath].totalCount - 1,
    list: cacheData[cachePath].list.filter((record: any) => record.id !== data[dataPath]?.id),
  };

  cache.writeQuery({
    query: fetchQuery,
    data: {
      [cachePath]: updatedCache,
    },
    variables: {
      filterInput,
    },
  });
};

export default deleteRecordFromLinearPaginatedRecordCache;
