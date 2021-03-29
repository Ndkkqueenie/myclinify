import React from 'react';
import { setTitle } from 'apollo/operations';
import { ListContentWrapper, Content } from './Wrapper';
import MainTable from './MainTable';
import { UserType } from '../../graphql-types/globalTypes';
// import useIsInitialFetch from '../../hooks/useIsInitialFetch';
import CheckBox from './CheckBox';
import Actions from './Actions';

export interface MainListViewProps {
  userType?: UserType;
  listPageHook?: any;
  showSearchTab?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  noActionTab?: boolean;
  useWhiteBackground?: boolean;
  noListPadding?: boolean;
  isOnModal?: boolean;
  selectRecord?: (id: string) => void;
  selectedRecords?: string[];
  items?: any;
  selectedRecordType?: string;
  handleAddNew?: () => void;
  frontDesk?: boolean;
  readOnly?: boolean;
  uniqueColumns: any;
  recordType: string;
  addNewButton?: boolean;
  reassignButton?: boolean;
  assignButton?: boolean;
  waitingListDropdown?: boolean;
  investigationDropdown?: boolean;
  actionFields?: string;
  addButtonText?: string;
  showRecordCreated?: boolean;
  noDeleteButton?: boolean;
}

const MainListView: React.FC<MainListViewProps> = ({
  items,
  noListPadding,
  isOnModal,
  noActionTab = false,
  uniqueColumns,
  recordType,
  addNewButton = true,
  reassignButton = false,
  assignButton = false,
  waitingListDropdown = false,
  investigationDropdown = false,
  actionFields,
  addButtonText,
  showRecordCreated = true,
  frontDesk = false,
  noDeleteButton,
  // listPageHook: {
  // filterOptions,
  //   goToPage,
  //   currentPageNumber,
  //   handleSearch,
  //   setDateRange,
  //   clearFilter,
  // items,
  //   pageCount,
  // loading,
  // error,
  //   changeLimit,
  //   changeRecordCreator,
  //   handleRowClick,
  //   highlightedRecords,
  //   highlightRecord,
  //   highlightAll,
  //   allHighlighted,
  //   duplicateRecord,
  //   deleteRecordAction,
  //   archiveRecordAction,
  //   toggleViewArchive,
  // },
  // showSearchTab = true,
  // selectRecord = () => {},
  // selectedRecords,
  // selectedRecordType,
  // handleAddNew = () => {},
  // readOnly,
}) => {
  // const selectAction = isOnModal ? selectRecord : highlightRecord;

  // const recordsSelected = isOnModal ? selectedRecords : highlightedRecords;

  // const { isInitialFetch } = useIsInitialFetch(items);

  const urlMapper = {
    'lab result': 'lab-result',
    'vital signs': 'vital-signs',
  };

  const recordTypeLower = recordType.toLowerCase();

  const urlPath = urlMapper[recordTypeLower] || recordTypeLower;

  const commonColumns = [
    {
      Header: (
        <CheckBox
          id="checkbox"
          name="select all"
          // onChange={highlightAll}
          // checked={allHighlighted}
        />
      ),
      accessor: 'secondId',
      Cell: ({ value }) => (
        <CheckBox
          id={value}
          // onChange={() => (readOnly ? null : selectAction(value))}
          name="record"
          // checked={recordsSelected?.includes(value)}
          addMarginLeft
        />
      ),
    },
    {
      Header: 'S/N',
      accessor: 'number',
      // Cell: (arg: any) => {
      //   return String(arg.cell.row.index + (currentPageNumber - 1) * filterOptions.take + 1);
      // },
    },
    {
      Header: 'Status',
      accessor: 'id',
      Cell: ({ value }) => {
        // const input = items.filter(({ id }) => id === value)[0];
        return (
          <Actions
            tableAction="actions"
            dropdownTable={actionFields}
            value="completed"
            // handleDelete={() => deleteRecordAction([value])}
            // handleArchive={() => archiveRecordAction([value], !filterOptions.archive)}
            // handleDuplicate={() => duplicateRecord(input)}
            id={`${urlPath}/${value}`}
            // archive={filterOptions.archive}
          />
        );
      },
    },
  ];

  const tableColumns = [...commonColumns.slice(0, 2), ...uniqueColumns, commonColumns[2]];
  const tableColumnsNoAction = [...commonColumns.slice(0, 2), ...uniqueColumns];

  const columns = React.useMemo(
    () => tableColumns,
    [items], // eslint-disable-line
    // [currentPageNumber, filterOptions, recordsSelected, items], // eslint-disable-line
  );
  const columnsNoAction = React.useMemo(
    () => tableColumnsNoAction,
    [items], // eslint-disable-line
  );

  React.useEffect(() => setTitle(recordType), []);

  return (
    <ListContentWrapper listPage noListPadding={noListPadding}>
      <Content noPadding listPage detailsPage={isOnModal}>
        <MainTable
          showPagination
          columns={noActionTab ? columnsNoAction : columns}
          data={items as Record<string, any>[]}
          noDeleteButton={noDeleteButton}
          // pageCount={pageCount}
          // goToPage={goToPage}
          // loading={loading}
          frontDesk={frontDesk}
          showRecordCreated={showRecordCreated}
          // error={error}
          // onRowClick={handleRowClick}
          addNewButton={addNewButton}
          reassignButton={reassignButton}
          assignButton={assignButton}
          waitingListDropdown={waitingListDropdown}
          investigationDropdown={investigationDropdown}
          addButtonText={addButtonText}
          emptyMessage={`No ${recordType}`}
          onModal={isOnModal}
          // limit={filterOptions.take}
          // changeLimit={changeLimit}
          // recordCreator={filterOptions.creator}
          // changeRecordCreator={changeRecordCreator}
          // searchTabData={{
          //   showSearchTab,
          //   isInitialFetch,
          // filterOptions,
          //   setDateRange,
          //   clearFilter,
          //   handleSearch,
          //   toggleViewArchive,
          //   recordsSelected,
          // archive: filterOptions.archive,
          //   handleDelete: deleteRecordAction,
          //   handleArchive: archiveRecordAction,
          //   isOnModal,
          //   selectedRecordType,
          //   handleAddNew,
          // }}
        />
      </Content>
    </ListContentWrapper>
  );
};

export default MainListView;
