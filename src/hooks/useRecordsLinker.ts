import { RecordOptions } from 'dashboard-app/common/RecordLinker';
import { useState } from 'react';
import useRecordsHighlighter from './useRecordsHighlighter';

export default (
  records: RecordOptions[],
  handleInputChange: (field: string, value: string | string[]) => void,
) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedRecordType, setSelectedRecordType] = useState<RecordOptions>(records[0]);
  const [showList, setShowList] = useState<boolean>(true);
  const [recordToView, setRecordToView] = useState<string>('');

  const {
    highlightRecord: selectRecord,
    setHighlightedRecords: setSelectedRecords,
    highlightedRecords: selectedRecords,
  } = useRecordsHighlighter(records);

  const initialiseModal = (record: RecordOptions, initialRecords: string[]) => {
    setSelectedRecordType(record);
    setSelectedRecords(initialRecords);
    setShowList(true);
    setShowModal(true);
  };

  const closeModal = (done?: boolean, linkPath?: string) => {
    if (done && linkPath) handleInputChange(linkPath, selectedRecords);
    setShowModal(false);
    setShowList(false);
  };

  return {
    showModal,
    setShowModal,
    selectedRecordType,
    setSelectedRecordType,
    showList,
    initialiseModal,
    setShowList,
    closeModal,
    selectRecord,
    selectedRecords,
    recordToView,
    setRecordToView,
  };
};
