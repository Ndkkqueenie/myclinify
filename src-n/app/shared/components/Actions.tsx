import React from 'react';
import { Link } from 'react-router-dom';
import MoreIcon from './icons/MoreIcon';
import TableDropdownIcon from './icons/TableDropdownIcon';
import { ActionsWrapper } from './styled-components/ActionsWrapper'

type DropdownPillType = 'inprogress' | 'submitted' | 'completed';
export interface ActionsProps {
  handleDuplicate?: () => void;
  handleDelete?: () => void;
  handleArchive?: () => void;
  tableAction?: 'patientsTable' | 'actions';
  dropdownPillType?: DropdownPillType;
  id?: string;
  archive?: boolean;
  value?: string;
  dropdownTable?: string;
}

const Actions: React.FC<ActionsProps> = ({
  id,
  handleArchive,
  handleDelete,
  handleDuplicate,
  archive,
  dropdownPillType,
  tableAction = 'patientsTable',
  dropdownTable = 'investigation',
  value,
}) => {
  return (
    <ActionsWrapper dropdownPillType={dropdownPillType}>
      {tableAction === 'patientsTable' && (
        <>
          <MoreIcon />
          <div className="content-padding">
            <div className="content">
              <Link to={id ? `${id}?viewOnly=true` : '#'}>
                <button type="button">View</button>
              </Link>
              <Link to={id ? `${id}?viewOnly=false` : '#'}>
                <button type="button">Edit</button>
              </Link>
              <button type="button" onClick={handleDuplicate}>
                Duplicate
              </button>
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
              <button type="button" onClick={handleArchive}>
                {archive ? 'Unarchive' : 'Archive'}
              </button>
            </div>
          </div>
        </>
      )}
      {tableAction === 'actions' && (
        <>
          <div className="dropdown-table">
            <span>{value}</span> <TableDropdownIcon />
          </div>
          <div className="content-padding">
            <div className="content">
              <button type="button">Completed</button>
              <button type="button">In Progress</button>
              {dropdownTable === 'investigation' ? (
                <button type="button">Submitted</button>
              ) : (
                <>
                  <button type="button">Reassigned</button>
                  <button type="button">Waiting</button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </ActionsWrapper>
  );
};

export default Actions;
