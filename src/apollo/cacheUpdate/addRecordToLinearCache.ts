const addRecordToLinearCache = ({
  cache,
  data,
  parentRecordId,
  dataPath,
  cachePath,
  fetchQuery,
}) => {
  const cacheData: any = cache.readQuery({
    query: fetchQuery,
    variables: {
      parentRecordId,
    },
  });

  const newData = [...cacheData[cachePath], data[dataPath]];

  cache.writeQuery({
    query: fetchQuery,
    data: {
      [cachePath]: newData,
    },
    variables: {
      parentRecordId,
    },
  });
};

export default addRecordToLinearCache;
