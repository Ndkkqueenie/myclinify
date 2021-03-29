import colors from '../utils/colors';
import styled from 'styled-components';

export const ActionsWrapper = styled.div<{ dropdownPillType?: DropdownPillType }>`
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
