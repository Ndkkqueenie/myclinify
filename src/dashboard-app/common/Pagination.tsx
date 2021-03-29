import colors from 'dashboard-app/utils/colors';
import { LIMITS_OPTIONS } from 'dashboard-app/utils/constants';
import { RecordCreator } from 'graphql-types/globalTypes';
import React from 'react';
import { PulseLoader } from 'react-spinners';
import ReactTooltip from 'react-tooltip';
import Dropdown from './Dropdown';
import LinkMore from './icons/LinkMore';
import DropdownIcon from './icons/TableDropdownIcon';
import PaginationButton from './PaginationButton';
import './styles/pagination.scss';

const Pagination = ({
  showRecordCreated,
  setIsHovered,
  changeRecordCreator,
  recordCreator,
  loading,
  showPagination,
  isHovered,
  currentPageNumber,
  data,
  goToPage,
  pathname,
  changeLimit,
  limit,
  pageCount,
  isOnModal,
}) => (
  <div className="paginate">
    {showRecordCreated ? (
      <div
        className="record-created"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3>{recordCreator === RecordCreator.SELF ? 'Patient Created' : 'Doctor Created'}</h3>

        <div className="dropdown-icon">
          <li
            className="nav-link"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => setIsHovered(!isHovered)}
          >
            <DropdownIcon />
          </li>
          <div
            className={`dropdown-menu ${isHovered ? 'show' : ''}`}
            aria-labelledby="navbarDropdown"
          >
            <div
              className="dropdown-item"
              onClick={() =>
                changeRecordCreator(
                  recordCreator === RecordCreator.SELF ? RecordCreator.OTHERS : RecordCreator.SELF,
                )
              }
            >
              {recordCreator !== RecordCreator.SELF ? 'Patient Created' : 'Doctor Created'}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div />
    )}
    {isOnModal && (
      <div className="link-more">
        <div data-tip="Link More Records" data-for="searchTabTip">
          <LinkMore />
        </div>
        <ReactTooltip
          id="searchTabTip"
          place="top"
          className="button-tooltip"
          type="light"
          effect="solid"
        />
      </div>
    )}
    <div className="loading_paginate">
      {loading && (
        <div className="loader-wrapper">
          <PulseLoader loading color={colors.darkBlue} size={7} />
        </div>
      )}
      {showPagination && (
        <div className="pagination">
          <div className="navigate-pagination">
            <div className="select-limit-section">
              <div className="text-around">
                <p>Show</p>
              </div>
              <div>
                <Dropdown
                  options={LIMITS_OPTIONS}
                  value={`${limit}`}
                  onChange={({ value }) => {
                    changeLimit(Number(value));
                  }}
                  smallWidth
                  noPadding
                  readOnly={!data.length}
                />
              </div>
              <div className="text-around">
                <p>Per Page</p>
              </div>
            </div>
            <div className="select-offset-section">
              <PaginationButton
                value="<<"
                disabled={currentPageNumber === 1}
                onClick={() => goToPage(`${pathname}?page=1`)}
              />
              <PaginationButton
                value="<"
                disabled={currentPageNumber - 1 === 0}
                onClick={() => goToPage(`${pathname}?page=${currentPageNumber - 1}`)}
              />
              <PaginationButton
                value={!data.length ? 0 : currentPageNumber}
                disabled={false}
                onClick={() => {}}
                active
              />
              <PaginationButton
                value=">"
                disabled={currentPageNumber + 1 > pageCount}
                onClick={() => goToPage(`${pathname}?page=${currentPageNumber + 1}`)}
              />
              <PaginationButton
                value=">>"
                disabled={currentPageNumber >= pageCount}
                onClick={() => goToPage(`${pathname}?page=${pageCount}`)}
              />
              <span className="ml-1 text-around">
                of {pageCount} {`Page${pageCount === 1 ? '' : 's'}`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Pagination;
