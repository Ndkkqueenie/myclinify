const addRecordToLinearPaginatedCache = ({
  cache,
  data,
  filterInput,
  dataPath,
  cachePath,
  fetchQuery,
}) => {
  const cacheData: any = cache.readQuery({
    query: fetchQuery,
    variables: {
      filterInput,
    },
  });

  const newData = {
    totalCount: cacheData[cachePath].totalCount + 1,
    list: [data[dataPath], ...cacheData[cachePath].list],
  };

  cache.writeQuery({
    query: fetchQuery,
    data: {
      [cachePath]: newData,
    },
    variables: {
      filterInput,
    },
  });
};

export default addRecordToLinearPaginatedCache;
