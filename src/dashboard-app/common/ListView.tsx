import { setTitle } from 'apollo/operations';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import React from 'react';
import { UserType } from '../../graphql-types/globalTypes';
import useIsInitialFetch from '../../hooks/useIsInitialFetch';
import Actions from './Actions';
import CheckBox from './CheckBox';
import Prompter from './Prompter';
import RecordStar from './RecordStar';
import TableView from './TableView';
import { Content, ListContentWrapper } from './Wrapper';

type OptionType = {
  label?: string;
  value?: string | void;
};

export interface ListViewProps {
  userType?: UserType;
  listPageHook?: any;
  showSearchTab?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noListPadding?: boolean;
  isOnModal?: boolean;
  selectRecord?: (id: string) => void;
  selectedRecords?: string[];
  selectedRecordType?: string;
  handleAddNew?: () => void;
  readOnly?: boolean;
  uniqueColumns?: any;
  recordType: string;
  showRecordCreated?: boolean;
  defaultColumns?: any;
  showStatusDropdown?: boolean;
  statusDropDownOptions?: OptionType[];
  showDelete?: boolean;
  isFrontDesk?: boolean;
  checkOut?: () => void;
  reassign?: () => void;
  canBulkCheckIn?: boolean;
  canBulkReAssign?: boolean;
  canBulkAssign?: boolean;
  canBulkCheckOut?: boolean;
}

const ListView: React.FC<ListViewProps> = ({
  listPageHook: {
    filterOptions,
    goToPage,
    currentPageNumber,
    handleSearch,
    setDateRange,
    clearFilter,
    items,
    pageCount,
    loading,
    error,
    changeLimit,
    changeRecordCreator,
    handleRowClick,
    highlightedRecords,
    highlightRecord,
    highlightAll,
    allHighlighted,
    setHighlightedRecords,
    duplicateRecord,
    deleteRecordAction,
    archiveRecordAction,
    toggleViewArchive,
    showModalPrompt,
    toggle,
    disableActionButton,
    filterByStatus,
  },
  showSearchTab = true,
  noListPadding,
  isOnModal,
  selectRecord = () => {},
  selectedRecords,
  selectedRecordType,
  handleAddNew = () => {},
  readOnly,
  uniqueColumns,
  recordType,
  showRecordCreated = true,
  defaultColumns,
  showStatusDropdown = false,
  isFrontDesk,
  showDelete = true,
  statusDropDownOptions = [],
  checkOut,
  reassign,
  canBulkAssign,
  canBulkCheckIn,
  canBulkReAssign,
  canBulkCheckOut,
}) => {
  const selectAction = isOnModal ? selectRecord : highlightRecord;

  const recordsSelected = isOnModal ? selectedRecords : highlightedRecords;

  const { isInitialFetch } = useIsInitialFetch(items);

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
          onChange={highlightAll}
          checked={allHighlighted}
        />
      ),
      accessor: 'secondId',
      Cell: ({ value }) => (
        <CheckBox
          id={value}
          onChange={() => (readOnly ? null : selectAction(value))}
          name="record"
          checked={recordsSelected?.includes(value)}
          addMarginLeft
        />
      ),
    },
    {
      Header: 'S/N',
      accessor: 'number',
      Cell: (arg: any) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>
              {String(arg.cell.row.index + (currentPageNumber - 1) * filterOptions.take + 1)}
            </span>
            <div>
              <RecordStar
                createdDate={arg?.cell?.row?.original?.createdDate}
                updatedDate={arg?.cell?.row?.original?.updatedDate}
              />
            </div>
          </div>
        );
      },
    },
    {
      Header: 'Actions',
      accessor: 'id',
      Cell: ({ value }) => {
        const input = items.filter(({ id }) => id === value)[0];
        return (
          <Actions
            handleDelete={() => {
              setHighlightedRecords([value]);
              toggle();
            }}
            handleArchive={() => archiveRecordAction([value], !filterOptions.archive)}
            handleDuplicate={() => duplicateRecord(input)}
            id={`${urlPath}/${value}`}
            archive={filterOptions.archive}
          />
        );
      },
    },
  ];

  const tableColumns = defaultColumns || [
    ...commonColumns.slice(0, 2),
    ...uniqueColumns,
    commonColumns[2],
  ];

  const columns = React.useMemo(
    () => tableColumns,
    [currentPageNumber, filterOptions, recordsSelected, items], // eslint-disable-line
  );

  React.useEffect(() => (isOnModal ? undefined : setTitle(recordType)), []);

  return (
    <ListContentWrapper listPage noListPadding={noListPadding}>
      <Content noPadding listPage detailsPage={isOnModal}>
        <TableView
          showPagination
          columns={columns}
          data={items as Record<string, any>[]}
          pageCount={pageCount}
          goToPage={goToPage}
          loading={loading}
          showRecordCreated={showRecordCreated}
          error={error}
          onRowClick={handleRowClick}
          emptyMessage={`No ${recordType}`}
          onModal={isOnModal}
          limit={filterOptions.take}
          changeLimit={changeLimit}
          recordCreator={filterOptions.creator}
          changeRecordCreator={changeRecordCreator}
          searchTabData={{
            showSearchTab,
            isInitialFetch,
            toggle,
            filterOptions,
            setDateRange,
            clearFilter,
            handleSearch,
            toggleViewArchive,
            recordsSelected,
            archive: filterOptions.archive,
            handleDelete: deleteRecordAction,
            handleArchive: archiveRecordAction,
            isOnModal,
            selectedRecordType,
            handleAddNew,
            showStatusDropdown,
            isFrontDesk,
            showDelete,
            statusDropDownOptions,
            checkOut,
            reassign,
            canBulkAssign,
            canBulkCheckIn,
            canBulkReAssign,
            canBulkCheckOut,
            filterByStatus,
          }}
        />
      </Content>
      <Modal
        modalContent={
          <Prompter
            text={`Are you sure you want to delete ${
              recordsSelected.length > 1 ? 'these records' : 'this record'
            }?`}
            actionText="Delete"
            deleteAction={() => deleteRecordAction(recordsSelected)}
            cancelAction={toggle}
            disabled={disableActionButton}
          />
        }
        isShown={showModalPrompt}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </ListContentWrapper>
  );
};

export default ListView;
