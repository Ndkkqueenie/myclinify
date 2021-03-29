const deleteRecordFromLinearCache = ({
  cache,
  data,
  parentRecordId,
  dataPath,
  cachePath,
  fetchQuery,
}) => {
  const cacheData = cache.readQuery({
    query: fetchQuery,
    variables: {
      parentRecordId,
    },
  });

  const updatedCache = cacheData[cachePath].filter(
    (record: any) => record.id !== data[dataPath]?.id,
  );

  cache.writeQuery({
    query: fetchQuery,
    data: {
      [cachePath]: updatedCache,
    },
    variables: {
      parentRecordId,
    },
  });
};

export default deleteRecordFromLinearCache;
