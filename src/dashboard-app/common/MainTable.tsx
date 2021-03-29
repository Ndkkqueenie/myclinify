import { ApolloError } from '@apollo/client';
import * as React from 'react';
// import { useLocation } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { usePagination, useTable } from 'react-table';
import styled from 'styled-components';
import colors from '../utils/colors';
import MainTableSearchTab, { MainSearchTabProps } from './MainTableSearchTab';
import Message from './Message';

const StyledTableWrapper = styled.div<{ isModal?: boolean; evenColumns?: boolean }>`
  display: block;
  max-width: 100%;
  height: 100%;

  .text-around {
    display: flex;
    align-items: center;
    font-size: 12px;

    p {
      margin: 0;
    }
  }
  .loader-wrapper {
    padding-right: 30px;
  }

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    max-height: calc(100vh - 230px);
    min-height: ${(props) => (props.isModal ? '380px' : 'initial')};
    padding: 0px 32px;
    margin-top: 10px;
    height: 100%;
  }

  table {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
    border-spacing: 0;
    thead {
      tr {
        height: 75px;
        border: none;
        th {
          position: sticky;
          top: 0;
          background-color: ${colors.white};
          z-index: 10;
          margin: 0;
          padding: 8px 12px;
          font-weight: 500;

          text-align: left;
          font-size: 14px;
          color: ${colors.darkBlue};
          width: fit-content;
          height: inherit;
          @media (max-width: 1399px) {
            max-width: 95px;
          }
          &:nth-child(2) {
            width: 46px;
          }
          .checkbox {
            max-width: 100%;
            position: relative;
          }
        }
      }
    }

    tbody {
      height: 230px;
      overflow-y: auto;
      width: 100%;
      background: ${colors.white};
      tr {
        height: 65px;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
        :hover {
          background-color: ${colors.secondaryBg};
          cursor: pointer;
        }
        &:last-child {
          td {
            border-bottom: 0;
          }
        }
        td {
          margin: 0;
          padding: 8px 12px;
          border-top: 1px solid ${colors.lightAsh};
          font-weight: 400;
          font-size: 14px;
          color: ${colors.black};
          position: relative;
          .checkbox {
            max-width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .round {
            input {
              width: 100%;
              position: absolute;
            }
            label {
              margin-bottom: 0;
            }
          }

          &:not(:last-child) {
            overflow-x: hidden;
          }
          text-overflow: ellipsis;
          text-align: left;
          /* max-width: 50px; */
        }
      }
    }
  }

  .heading-table {
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    z-index: 200;
    top: 72px;
    padding-right: 15px;
    padding-left: 15px;
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.25);
    @media (min-width: 769px) {
      padding-top: 0;
      padding-bottom: 0;
      padding-right: 25px;
      padding-left: 25px;
    }

    @media (min-width: 992px) {
      padding-right: 32px;
      padding-left: 32px;
    }
    .paginate {
      display: flex;
      padding: 15px 2px;
      justify-content: center;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .record-created {
        display: flex;
        justify-content: center;
        margin: auto;
        @media (min-width: 768px) {
          margin: 0;
        }
        svg {
          margin-right: 0.5rem;
          align-self: center;
          path {
            fill: ${colors.darkBlue};
          }
        }
        h3 {
          font-size: 19px;
          align-self: center;
          font-weight: 500;
        }
        .dropdown-icon {
          align-self: center;
          margin-left: 0.15rem;
          position: relative;
          cursor: pointer;
          .dropdown-menu {
            left: -156px !important;
          }
          .nav-link {
            cursor: pointer;
            padding: 5px 0px;

            svg {
              transform: scale(0.5);
            }
          }
        }
      }
      .pagination {
        padding: ${(props) => (props.isModal ? '20px' : '0px')};
        display: flex;
        justify-content: space-between;
        justify-content: center;

        .navigate-pagination {
          display: flex;
          margin-top: 10px;
          flex-direction: column;

          @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            margin-top: 0;
          }
          .select-limit-section {
            display: flex;
            width: 180px;
            justify-content: space-between;
            margin-bottom: 0.5rem;

            .text-around {
              display: flex;
              align-items: center;

              p {
                margin-bottom: 0px !important;
                font-size: 12px;
              }
            }

            @media (min-width: 992px) {
              margin-bottom: 0;
            }
          }
          .select-offset-section {
            display: flex;
            align-items: center;
            margin-top: 10px;
            @media only screen and (min-width: 768px) {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
`;

export interface MainTableProps {
  columns: any;
  data: any;
  isModal?: boolean;
  showPagination: boolean;
  showRecordCreated?: boolean;
  addNewButton?: boolean;
  reassignButton?: boolean;
  assignButton?: boolean;
  waitingListDropdown?: boolean;
  frontDesk?: boolean;
  investigationDropdown?: boolean;
  addButtonText?: string;
  loading?: boolean;
  evenColumns?: boolean;
  limit?: number;
  changeLimit: (take: number) => void;
  searchTabData?: MainSearchTabProps;
  recordCreator?: string;
  emptyMessage?: string;
  // handleRowClick: (id: string, path?: string) => void;
  // changeRecordCreator: (type: string) => void;
  // pageCount: number;
  // goToPage: (page: any) => void;
}

const MainTable: React.FC<MainTableProps> = ({
  columns,
  data,
  isModal,
  addNewButton = true,
  reassignButton = false,
  assignButton = false,
  waitingListDropdown = false,
  frontDesk = false,
  investigationDropdown = false,
  addButtonText,
  loading = false,
  evenColumns = false,
  searchTabData,
  emptyMessage,
  // changeRecordCreator,
  // showPagination,
  // showRecordCreated = true,
  // limit,
  // changeLimit,
  // recordCreator,
  // handleRowClick,
  // pageCount,
  // goToPage,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  // const { search, pathname } = useLocation();
  // const currentPageNumber = Number(search.split('=')[1]) || 1;
  // const [isHovered, setIsHovered] = React.useState(false);

  return (
    <StyledTableWrapper isModal={isModal} evenColumns={evenColumns}>
      <div className="heading-table">
        <MainTableSearchTab
          {...(searchTabData as MainSearchTabProps)}
          addNewButton={addNewButton}
          reassignButton={reassignButton}
          assignButton={assignButton}
          waitingListDropdown={waitingListDropdown}
          frontDesk={frontDesk}
          investigationDropdown={investigationDropdown}
          addButtonText={addButtonText}
        />
      </div>

      <div className="tableWrap table-responsive">
        {data.length ? (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={`tbl-${idx}`}>
                  {headerGroup.headers.map((column, i) => (
                    <th key={i}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: any, prIdx) => {
                prepareRow(row);
                return (
                  <tr key={prIdx}>
                    {row.cells.map((cell, i) => {
                      return (
                        <td
                          key={i}
                          // onClick={() =>
                          // handleRowClick(cell.column.id, `${pathname}/${row.original.id}`)
                          // }
                        >
                          {cell.render('Cell') || '--'}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Message>
            <p>{emptyMessage}</p>
          </Message>
        )}
        {loading && (
          <div className="loader-wrapper">
            <PulseLoader loading color={colors.darkBlue} />
          </div>
        )}
      </div>
    </StyledTableWrapper>
  );
};

type ColumnType = {
  Header: string | JSX.Element;
  accessor: string;
};

interface DashboardMainTableProps {
  columns: ColumnType[];
  data: Record<string, unknown>[];
  // onRowClick: (id?: string, path?: string) => void;
  onModal?: boolean;
  // pageCount: number;
  // goToPage: (page: string) => void;
  addNewButton?: boolean;
  reassignButton?: boolean;
  assignButton?: boolean;
  waitingListDropdown?: boolean;
  investigationDropdown?: boolean;
  addButtonText?: string;
  showPagination: boolean;
  showRecordCreated?: boolean;
  loading?: boolean;
  evenColumns?: boolean;
  emptyMessage?: string;
  error?: ApolloError;
  limit?: number;
  changeLimit?: (take: number) => void;
  searchTabData?: MainSearchTabProps;
  recordCreator?: string;
  // changeRecordCreator: (type: string) => void;
  noDeleteButton?: boolean;
  frontDesk?: boolean;
}

const DashboardMainTable: React.FC<DashboardMainTableProps> = ({
  columns,
  data,
  // onRowClick,
  onModal,
  // pageCount,
  // goToPage,
  showPagination,
  addNewButton = true,
  reassignButton = false,
  assignButton = false,
  waitingListDropdown = false,
  investigationDropdown = false,
  frontDesk = false,
  addButtonText,
  showRecordCreated = true,
  loading = false,
  evenColumns = false,
  emptyMessage = '',
  error,
  limit,
  searchTabData,
  recordCreator,
  // changeRecordCreator,
  changeLimit = () => {},
}) => {
  if (error) {
    return (
      <Message>
        <p>An error occured retrieving your information</p>
      </Message>
    );
  }
  if (data && data.length === 0 && loading) {
    return (
      <Message>
        <PulseLoader loading={loading} color={colors.darkBlue} />
      </Message>
    );
  }

  return (
    <MainTable
      isModal={onModal}
      loading={loading}
      columns={columns}
      // pageCount={pageCount}
      data={data}
      // goToPage={goToPage}
      // handleRowClick={onRowClick}
      showPagination={showPagination}
      addNewButton={addNewButton}
      reassignButton={reassignButton}
      assignButton={assignButton}
      waitingListDropdown={waitingListDropdown}
      frontDesk={frontDesk}
      investigationDropdown={investigationDropdown}
      addButtonText={addButtonText}
      showRecordCreated={showRecordCreated}
      evenColumns={evenColumns}
      limit={limit}
      emptyMessage={emptyMessage}
      changeLimit={changeLimit}
      searchTabData={searchTabData}
      recordCreator={recordCreator}
      // changeRecordCreator={changeRecordCreator}
    />
  );
};

export default DashboardMainTable;
