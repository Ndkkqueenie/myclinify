import React from 'react';
import styled from 'styled-components';
import colors from 'dashboard-app/utils/colors';
import CheckInIcon from '../icons/CheckInIcon';

const CheckInWrapper = styled.div<{ dropdownPillType?: DropdownPillType }>`
  overflow: hidden;
  z-index: 5;

  .content {
    display: none;
    position: absolute;
    background-color: ${colors.white};
    min-width: 120px;
    box-shadow: 0px 0px 4px ${colors.lightGrey};
    z-index: 1;
    padding: 5px;
    right: 0;

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
export interface CheckInProps {
  handleDuplicate?: () => void;
  handleDelete?: () => void;
  handleCheckIn?: () => void;
  id?: string;
  value?: string;
}

const CheckIn: React.FC<CheckInProps> = () => {
  return (
    <CheckInWrapper>
      <CheckInIcon />
    </CheckInWrapper>
  );
};

export default CheckIn;
