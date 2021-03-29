import { useQuery } from '@apollo/client';
import { GET_APP_DATA } from 'apollo/operations';
import { VitalFilterInput } from 'graphql-types/globalTypes';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import colors from '../utils/colors';
import Button, { OutlineButton, OutlineIconButton } from './Button';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import ArchiveIcon from './icons/ArchiveIcon';
import AssignIcon from './icons/AssignIcon';
import CheckInIcon from './icons/CheckInIcon';
import CheckOutIcon from './icons/CheckOutIcon';
import ClearFilterIcon from './icons/ClearFilterIcon';
import ReassignIcon from './icons/ReassignIcon';
import TrashIcon from './icons/TrashIcon';
import UnarchiveIcon from './icons/UnarchiveIcon';
import ViewArchivedIcon from './icons/ViewArchivedIcon';
import ViewUnarchivedIcon from './icons/ViewUnarchivedIcon';
import SearchInput from './SearchInput';
import SearchTab from './SearchTab';
import './styles/patientTableSearchTab.scss';
import { DatePickerWrapper } from './Wrapper';

type OptionType = {
  label?: string;
  value?: string | void;
};
export interface PatientSearchTabProps {
  filterOptions: VitalFilterInput;
  isInitialFetch?: boolean;
  setDateRange: (key: 'from' | 'to') => any;
  clearFilter: () => void;
  handleSearch: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  toggleViewArchive?: () => void;
  handleArchive?: (records: string[], archive?: boolean) => void;
  handleDelete?: (records: string[]) => void;
  showSearchTab?: boolean;
  recordsSelected?: string[];
  archive?: boolean;
  isOnModal?: boolean;
  showAddButton?: boolean;
  selectedRecordType?: string;
  showStatusDropdown?: boolean;
  statusDropDownOptions?: OptionType[];
  showDelete?: boolean;
  isFrontDesk?: boolean;
  handleAddNew?: () => void;
  toggle: () => void;
  checkOut?: () => void;
  reassign?: () => void;
  filterByStatus: (value: string) => void;
  canBulkCheckIn?: boolean;
  canBulkReAssign?: boolean;
  canBulkAssign?: boolean;
  canBulkCheckOut?: boolean;
}

const PatientTableSearchTab: FC<PatientSearchTabProps> = ({
  showSearchTab,
  isInitialFetch,
  filterOptions,
  setDateRange,
  clearFilter,
  handleSearch,
  handleArchive = () => {},
  archive,
  toggleViewArchive,
  handleDelete = () => {},
  recordsSelected = [],
  isOnModal,
  selectedRecordType,
  showAddButton,
  handleAddNew = () => {},
  toggle,
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
  filterByStatus,
}) => {
  const history = useHistory();

  const {
    location: { pathname },
  } = history;
  const isVisible = showSearchTab && !isInitialFetch;
  const currentUrl = history.location.pathname;
  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);
  const recordPathMapper = {
    laboratory: 'Lab Test',
    'vital-signs': 'Vital Sign',
    radiology: 'Radiology Exam',
    surgery: 'Procedure',
  };

  const recordPath = currentUrl.split('/')[2];
  const addNewText =
    recordPathMapper[recordPath] || `${recordPath[0].toUpperCase()}${recordPath.slice(1)}`;

  const noRecordsSelected = !recordsSelected.length;

  const ActiveArchive = archive
    ? { Icon: UnarchiveIcon, Text: 'Unarchive' }
    : { Icon: ArchiveIcon, Text: 'Archive' };
  const ActiveViewArchive = archive
    ? { Icon: ViewUnarchivedIcon, Text: 'View Unarchived' }
    : { Icon: ViewArchivedIcon, Text: 'View Archived' };
  const iconColor = noRecordsSelected ? colors.tintGrey : colors.darkBlue;

  return (
    <div className="patient-record-list-tab">
      <div className="search-tab-section">
        <SearchTab isVitals>
          <SearchInput
            onChange={handleSearch}
            value={filterOptions.keyword}
            readOnly={!isVisible}
          />
          {showStatusDropdown && (
            <Dropdown
              midi
              noPadding
              withoutBorderRadius
              options={statusDropDownOptions}
              onChange={({ value }) => filterByStatus(value)}
              placeholder="All Status"
              grey
            />
          )}
          <DatePickerWrapper>
            <DatePicker
              placeholderText="From"
              value={filterOptions?.dateRange?.from}
              onChange={setDateRange('from')}
              readOnly={!isVisible}
              placeholder="Select Date (From)"
              type="DateOnly"
              width="170px"
            />
            <DatePicker
              placeholderText="To"
              value={filterOptions?.dateRange?.to}
              onChange={setDateRange('to')}
              placeholder="Select Date (To)"
              readOnly={!isVisible}
              maxDate={new Date()}
              type="DateOnly"
              width="170px"
            />
          </DatePickerWrapper>
          {isMobile ? (
            <OutlineButton
              withBorderRadius
              withIcon
              text="Clear Filter"
              onClick={() => clearFilter()}
              mainColor={colors.darkBlue}
              icon={<ClearFilterIcon />}
              fullWidth
            />
          ) : (
            <div data-tip="Clear Filter" data-for="searchTabTip">
              <OutlineIconButton
                onClick={() => clearFilter()}
                withIcon
                icon={<ClearFilterIcon />}
              />
            </div>
          )}
        </SearchTab>
      </div>
      <div className="delete-archive-section">
        {isMobile ? (
          <>
            <OutlineButton
              withBorderRadius
              withIcon
              text={ActiveArchive.Text}
              onClick={() => handleArchive(recordsSelected, !archive)}
              mainColor={iconColor}
              icon={<ActiveArchive.Icon color={iconColor} />}
              disabled={noRecordsSelected}
              fullWidth
            />

            <OutlineButton
              withBorderRadius
              mainColor={colors.darkBlue}
              withIcon
              text={ActiveViewArchive.Text}
              onClick={toggleViewArchive}
              icon={<ActiveViewArchive.Icon />}
              fullWidth
            />
            <OutlineButton
              withBorderRadius
              withIcon
              text="Delete"
              mainColor={iconColor}
              onClick={toggle}
              icon={<TrashIcon color={iconColor} />}
              deleteButton
              disabled={noRecordsSelected}
              fullWidth
            />
          </>
        ) : (
          <>
            <div data-tip={ActiveArchive.Text} data-for="searchTabTip">
              <OutlineIconButton
                onClick={() => handleArchive(recordsSelected, !archive)}
                icon={<ActiveArchive.Icon color={iconColor} />}
                disabled={noRecordsSelected}
              />
            </div>
            <div data-tip={ActiveViewArchive.Text} data-for="searchTabTip">
              <OutlineIconButton onClick={toggleViewArchive} icon={<ActiveViewArchive.Icon />} />
            </div>
            <div data-tip="Delete" data-for="searchTabTip">
              <OutlineIconButton
                onClick={toggle}
                icon={<TrashIcon color={iconColor} />}
                deleteButton
                disabled={noRecordsSelected}
              />
            </div>
            {isFrontDesk && (
              <>
                <div data-tip="Assign" data-for="searchTabTip">
                  <OutlineIconButton
                    onClick={reassign}
                    icon={<AssignIcon color={!canBulkAssign ? colors.tintGrey : colors.darkBlue} />}
                    disabled={!canBulkAssign}
                  />
                </div>
                <div data-tip="Reassign" data-for="searchTabTip">
                  <OutlineIconButton
                    onClick={reassign}
                    icon={
                      <ReassignIcon color={!canBulkReAssign ? colors.tintGrey : colors.darkBlue} />
                    }
                    disabled={!canBulkReAssign}
                  />
                </div>
                <div data-tip="Check In" data-for="searchTabTip">
                  <OutlineIconButton
                    onClick={checkOut}
                    icon={
                      <CheckInIcon color={!canBulkCheckIn ? colors.tintGrey : colors.darkBlue} />
                    }
                    disabled={!canBulkCheckIn}
                  />
                </div>
                <div data-tip="Check Out" data-for="searchTabTip">
                  <OutlineIconButton
                    onClick={checkOut}
                    icon={
                      <CheckOutIcon color={!canBulkCheckOut ? colors.tintGrey : colors.darkBlue} />
                    }
                    disabled={!canBulkCheckOut}
                  />
                </div>
              </>
            )}
            <ReactTooltip
              id="searchTabTip"
              place="top"
              className="button-tooltip"
              type="light"
              effect="solid"
            />
          </>
        )}
      </div>
      {showAddButton ? (
        <Button
          text={`Add New ${isOnModal ? selectedRecordType : addNewText}`}
          onClick={() => (isOnModal ? handleAddNew() : history.push(`${pathname}/add`))}
          withIcon
          minWidth="auto"
          addButton
        />
      ) : null}
    </div>
  );
};

export default PatientTableSearchTab;
