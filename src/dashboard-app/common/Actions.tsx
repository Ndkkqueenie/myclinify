import React from 'react';
import colors from 'dashboard-app/utils/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreIcon from './icons/MoreIcon';
import TableDropdownIcon from './icons/TableDropdownIcon';

const ActionsWrapper = styled.div<{ dropdownPillType?: DropdownPillType }>`
  overflow: hidden;
  z-index: 5;
  .dropdown-table {
    display: flex;
    align-items: center;
    span {
      margin-right: 6px;
      text-transform: capitalize;
      color: ${(props) =>
        props.dropdownPillType === 'submitted'
          ? '#FFE882'
          : props.dropdownPillType === 'completed'
          ? '#06AB69'
          : props.dropdownPillType === 'inprogress'
          ? '#00ABE2'
          : '#06AB69'};
    }
  }
  .content {
    display: none;
    position: absolute;
    background-color: ${colors.white};
    min-width: 120px;
    box-shadow: 0px 0px 4px ${colors.lightGrey};
    z-index: 99;
    padding: 5px;
    right: 0;
    top: -120%;

    button {
      color: black;
      padding: 6px 10px;
      text-decoration: none;
      display: block;
      text-align: left;
      font-size: 14px;
      border: none;
      width: 100%;
      background-color: ${colors.white};

      :hover {
        background-color: ${colors.skyBlue};
      }
    }
  }

  :hover {
    .content {
      display: block;
    }
  }
`;

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
