import React, { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { VitalFilterInput } from '../../../../graphql-types/globalTypes';
import { useHistory } from 'react-router-dom';
import {
  INVESTIGATION_OPTIONS,
  WAITING_LIST_OPTIONS,
  FRONTDESK_WAITING_LIST_OPTIONS,
} from '../utils/constants';
import { GET_APP_DATA } from '../../../../apollo/operations';
import { useQuery } from '@apollo/client';
import SearchTab from '../Search/SearchTab';
import SearchInput from '../Search/SearchInput';
import { DatePickerWrapper } from '../Wrapper';
import DatePicker from '../DatePicker/DatePicker';
import Button, { OutlineButton, OutlineIconButton } from '../Button/Button';
import ClearFilterIcon from '../icons/ClearFilterIcon';
import ArchiveIcon from '../icons/ArchiveIcon';
import ViewArchivedIcon from '../icons/ViewArchivedIcon';
import UnarchiveIcon from '../icons/UnarchiveIcon';
import ViewUnarchivedIcon from '../icons/ViewUnarchivedIcon';

import TrashIcon from '../icons/TrashIcon';
import ReassignIcon from '../icons/ReassignIcon';

import './patientTableSearchTab.scss';
import colors from '../utils/colors';
import Dropdown from '../Dropdown/Dropdown';
import AssignIcon from '../icons/AssignIcon';
import CheckInIcon from '../icons/CheckInIcon';
import CheckOutIcon from '../icons/CheckOutIcon';

export interface MainSearchTabProps {
  filterOptions: VitalFilterInput;
  isInitialFetch?: boolean;
  addNewButton?: boolean;
  frontDesk?: boolean;
  reassignButton?: boolean;
  assignButton?: boolean;
  addButtonText?: string;
  setDateRange: (key: 'from' | 'to') => any;
  clearFilter: () => void;
  handleSearch: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  toggleViewArchive?: () => void;
  handleArchive?: (records: string[], archive?: boolean) => void;
  handleDelete?: (records: string[]) => void;
  showSearchTab?: boolean;
  investigationDropdown?: boolean;
  waitingListDropdown?: boolean;
  recordsSelected?: string[];
  archive?: boolean;
  isOnModal?: boolean;
  selectedRecordType?: string;
  handleAddNew?: () => void;
}

const MainTableSearchTab: FC<MainSearchTabProps> = ({
  showSearchTab,
  investigationDropdown = false,
  waitingListDropdown = false,
  frontDesk = false,
  addNewButton = true,
  reassignButton = false,
  assignButton = false,
  addButtonText,
  isInitialFetch,
  archive,
  recordsSelected = [],
  isOnModal,
  selectedRecordType,
  handleAddNew = () => {},
  // filterOptions,
  // setDateRange,
  // clearFilter,
  // handleSearch,
  // handleArchive = () => {},
  // toggleViewArchive,
  // handleDelete = () => {},
}) => {
  const history = useHistory();

  const {
    location: { pathname },
  } = history;
  const isVisible = showSearchTab && !isInitialFetch;
  const currentUrl = history.location.pathname;
  const {
    data: {
      appData: { isMobile, pageTitle },
    },
  } = useQuery(GET_APP_DATA);
  const recordPathMapper = {
    laboratory: 'Lab Test',
    'vital-signs': 'Vital Sign',
    radiology: 'Radiology Report',
  };

  const recordPath = currentUrl.split('/')[2];
  const addNewText =
    addButtonText ||
    recordPathMapper[recordPath] ||
    `${recordPath[0].toUpperCase()}${recordPath.slice(1)}`;

  const noRecordsSelected = !recordsSelected.length;
  return (
    <div className="patient-record-list-tab">
      <div className="search-tab-section">
        <SearchTab isVitals>
          <SearchInput
            // onChange={handleSearch}
            onChange={() => {}}
            value=""
            // value={`${filterOptions.keyword}`}
            readOnly={!isVisible}
          />
          {investigationDropdown || waitingListDropdown ? (
            <Dropdown
              midi
              noPadding
              withoutBorderRadius
              options={
                investigationDropdown
                  ? INVESTIGATION_OPTIONS
                  : frontDesk
                  ? FRONTDESK_WAITING_LIST_OPTIONS
                  : WAITING_LIST_OPTIONS
              }
              onChange={() => {}}
              placeholder="All Status"
              grey
            />
          ) : null}

          <DatePickerWrapper>
            <DatePicker
              placeholderText="From"
              // value={filterOptions?.dateRange?.from}
              // onChange={setDateRange('from')}
              onChange={() => {}}
              value=""
              readOnly={!isVisible}
              placeholder="Select Date (From)"
              type="DateOnly"
              width="170px"
            />
            <DatePicker
              placeholderText="To"
              // value={filterOptions?.dateRange?.to}
              // onChange={setDateRange('to')}
              // onAccept={setDateRange('to')}
              onChange={() => {}}
              value=""
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
              // onClick={() => clearFilter()}
              onClick={() => {}}
              mainColor={colors.darkBlue}
              icon={<ClearFilterIcon />}
              fullWidth
            />
          ) : (
            <div data-tip="Clear Filter" data-for="searchTabTip">
              <OutlineIconButton
                // onClick={() => clearFilter()}
                onClick={() => {}}
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
              text={!archive ? 'Archive' : 'Unarchive'}
              // onClick={() => handleArchive(recordsSelected)}
              onClick={() => {}}
              mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
              icon={
                !archive ? (
                  <ArchiveIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                ) : (
                  <UnarchiveIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                )
              }
              disabled={noRecordsSelected}
              fullWidth
            />

            <OutlineButton
              withBorderRadius
              mainColor={colors.darkBlue}
              withIcon
              text={!archive ? 'View Archived' : 'View Unarchived'}
              onClick={() => {}}
              // onClick={toggleViewArchive}
              icon={!archive ? <ViewArchivedIcon /> : <ViewUnarchivedIcon />}
              fullWidth
            />
            <OutlineButton
              withBorderRadius
              withIcon
              text="Delete"
              mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
              onClick={() => {}}
              // onClick={() => handleDelete(recordsSelected)}
              icon={<TrashIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />}
              deleteButton
              disabled={noRecordsSelected}
              fullWidth
            />
            {reassignButton && (
              <OutlineButton
                withBorderRadius
                withIcon
                text="Reassign"
                mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                onClick={() => {}}
                // onClick={() => handleDelete(recordsSelected)}
                icon={
                  <ReassignIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                }
                disabled={noRecordsSelected}
                fullWidth
              />
            )}

            {assignButton && (
              <OutlineButton
                withBorderRadius
                withIcon
                text="Assign"
                fullWidth
                mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                onClick={() => {}}
                // onClick={() => handleDelete(recordsSelected)}
                icon={<AssignIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />}
                disabled={noRecordsSelected}
              />
            )}
            {reassignButton && !frontDesk && (
              <div className="checkout-icons">
                <>
                  <div data-tip={noRecordsSelected ? '' : 'Check-in'} data-for="searchTabTip">
                    <OutlineButton
                      onClick={() => {}}
                      icon={
                        <CheckInIcon
                          color={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                        />
                      }
                      disabled={noRecordsSelected}
                      withBorderRadius
                      withIcon
                      text="Check-in"
                      fullWidth
                      mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                    />
                  </div>
                </>
              </div>
            )}
            {frontDesk && (
              <div className="checkout-icons">
                <>
                  <div data-tip={noRecordsSelected ? '' : 'Check-in'} data-for="searchTabTip">
                    <OutlineButton
                      onClick={() => {}}
                      icon={
                        <CheckInIcon
                          color={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                        />
                      }
                      disabled={noRecordsSelected}
                      withBorderRadius
                      withIcon
                      text="Check-in"
                      fullWidth
                      mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                    />
                  </div>
                  <div data-tip={noRecordsSelected ? '' : 'Check-out'} data-for="searchTabTip">
                    <OutlineButton
                      onClick={() => {}}
                      icon={
                        <CheckOutIcon
                          color={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                        />
                      }
                      disabled={noRecordsSelected}
                      withBorderRadius
                      withIcon
                      text="Check-out"
                      fullWidth
                      mainColor={noRecordsSelected ? colors.tintGrey : colors.darkBlue}
                    />
                  </div>

                  <ReactTooltip
                    id="searchTabTip"
                    place="top"
                    className="button-tooltip"
                    type="light"
                    effect="solid"
                  />
                </>
              </div>
            )}
          </>
        ) : (
          <>
            <div
              data-tip={noRecordsSelected ? '' : archive ? 'Unarchive' : 'Archive'}
              data-for="searchTabTip"
            >
              <OutlineIconButton
                onClick={() => {}}
                // onClick={() => handleArchive(recordsSelected)}
                icon={
                  archive ? (
                    <UnarchiveIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                  ) : (
                    <ArchiveIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                  )
                }
                disabled={noRecordsSelected}
              />
            </div>
            <div data-tip={archive ? 'View Unarchived' : 'View Archived'} data-for="searchTabTip">
              <OutlineIconButton
                onClick={() => {}}
                // onClick={toggleViewArchive}
                icon={archive ? <ViewUnarchivedIcon /> : <ViewArchivedIcon />}
              />
            </div>
            {pageTitle !== 'Patient Waiting List' && (
              <div data-tip={noRecordsSelected ? '' : 'Delete'} data-for="searchTabTip">
                <OutlineIconButton
                  onClick={() => {}}
                  // onClick={() => handleDelete(recordsSelected)}
                  icon={<TrashIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />}
                  deleteButton
                  disabled={noRecordsSelected}
                />
              </div>
            )}
            {reassignButton && (
              <div data-tip={noRecordsSelected ? '' : 'Reassign'} data-for="searchTabTip">
                <OutlineIconButton
                  onClick={() => {}}
                  // onClick={() => handleDelete(recordsSelected)}
                  icon={
                    <ReassignIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                  }
                  disabled={noRecordsSelected}
                />
              </div>
            )}
            {reassignButton && !frontDesk && (
              <div data-tip={noRecordsSelected ? '' : 'Check-out'} data-for="searchTabTip">
                <OutlineIconButton
                  onClick={() => {}}
                  // onClick={() => handleDelete(recordsSelected)}
                  icon={
                    <CheckOutIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                  }
                  disabled={noRecordsSelected}
                />
              </div>
            )}
            {assignButton && (
              <div data-tip={noRecordsSelected ? '' : 'Assign'} data-for="searchTabTip">
                <OutlineIconButton
                  onClick={() => {}}
                  // onClick={() => handleDelete(recordsSelected)}
                  icon={
                    <AssignIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                  }
                  disabled={noRecordsSelected}
                />
              </div>
            )}
            {frontDesk && (
              <>
                <div data-tip={noRecordsSelected ? '' : 'Check-in'} data-for="searchTabTip">
                  <OutlineIconButton
                    onClick={() => {}}
                    // onClick={() => handleDelete(recordsSelected)}
                    icon={
                      <CheckInIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                    }
                    disabled={noRecordsSelected}
                  />
                </div>
                <div data-tip={noRecordsSelected ? '' : 'Check-out'} data-for="searchTabTip">
                  <OutlineIconButton
                    onClick={() => {}}
                    // onClick={() => handleDelete(recordsSelected)}
                    icon={
                      <CheckOutIcon color={noRecordsSelected ? colors.tintGrey : colors.darkBlue} />
                    }
                    disabled={noRecordsSelected}
                  />
                </div>

                <ReactTooltip
                  id="searchTabTip"
                  place="top"
                  className="button-tooltip"
                  type="light"
                  effect="solid"
                />
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

      {addNewButton && (
        <Button
          text={`Add New ${isOnModal ? selectedRecordType : addNewText}`}
          onClick={() => (isOnModal ? handleAddNew() : history.push(`${pathname}/add`))}
          withIcon
          minWidth="auto"
          addButton
        />
      )}
    </div>
  );
};

export default MainTableSearchTab;
