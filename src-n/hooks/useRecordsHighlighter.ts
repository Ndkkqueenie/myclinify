import { useState } from 'react';

const useRecordsHighlighter = (items: any) => {
  const [selectedRecords, setSelectedRecords] = useState<string[]>([]);

  const highlightRecord = (id: string) => {
    const recordAlreadySelected = selectedRecords.includes(id);
    const newRecords = recordAlreadySelected
      ? selectedRecords.filter((record) => record !== id)
      : [id, ...selectedRecords];

    setSelectedRecords(newRecords);
  };

  const allRecordIds = items.map(({ id }) => id);
  const highlightedRecords = selectedRecords.filter((record) => allRecordIds.includes(record));
  const allHighlighted = allRecordIds.length && allRecordIds.length === highlightedRecords.length;

  const highlightAll = () => setSelectedRecords(allHighlighted ? [] : allRecordIds);

  const unSelectAll = () => setSelectedRecords([]);

  return {
    highlightAll,
    unSelectAll,
    highlightRecord,
    allRecordIds,
    allHighlighted,
    setHighlightedRecords: setSelectedRecords,
    highlightedRecords,
  };
};

export default useRecordsHighlighter;
