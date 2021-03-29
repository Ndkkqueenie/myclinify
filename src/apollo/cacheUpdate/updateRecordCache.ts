import formatLinkedRecords from 'dashboard-app/utils/formatLinkedRecords';

const updateRecordCache = ({
  cache,
  data,
  filterOptions,
  recordType,
  fetchQuery,
  recordTypePlural,
}) => {
  const cacheData: any = cache.readQuery({
    query: fetchQuery,
    variables: {
      filterOptions,
    },
  });
  formatLinkedRecords(data[`update${recordType}`]);
  cache.writeQuery({
    query: fetchQuery,
    data: {
      user: {
        ...cacheData.user,
        [recordTypePlural]: {
          ...cacheData.user[recordTypePlural],
          list: cacheData?.user?.[recordTypePlural]?.list?.map((record: any) =>
            record.id === data[`update${recordType}`].id ? data[`update${recordType}`] : record,
          ),
        },
      },
    },
    variables: {
      filterOptions,
    },
  });
};

export default updateRecordCache;
