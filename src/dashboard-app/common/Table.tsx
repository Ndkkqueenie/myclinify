import { ApolloError } from '@apollo/client';
import useIsInitialFetch from 'hooks/useIsInitialFetch';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { usePagination, useTable } from 'react-table';
import ListViewLoaderOrError from './ListViewLoaderOrError';
import Message from './Message';

import './styles/table.scss';

export interface TableProps {
  columns: any;
  data: any;
  onRowClick: (id: string, path?: string) => void;
  isModal?: boolean;
  pageCount: number;
  goToPage: (page: any) => void;
  goToPath?: string;
  showPagination: boolean;
  loading?: boolean;
  evenColumns?: boolean;
  limit?: number;
  error?: ApolloError;
  emptyMessage?: string;
}

const Table: React.FC<TableProps> = ({ columns, data, onRowClick, isModal, loading, error }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
    },
    usePagination,
  );

  const { pathname } = useLocation();

  const { isInitialFetch } = useIsInitialFetch(data, loading);

  if (error || isInitialFetch)
    return (
      <ListViewLoaderOrError error={error} isInitialFetch={isInitialFetch} loading={loading} />
    );

  return (
    <div className="main-table">
      <div className={`table-wrap table-responsive ${isModal && 'is-modal'}`}>
        <div className="table-wrapper">
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
                            onClick={() =>
                              onRowClick(cell.column.id, `${pathname}/${row.original.id}`)
                            }
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
            <Message>{!loading && <p className="empty-message-text">No Records</p>}</Message>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
