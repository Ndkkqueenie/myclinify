import React from 'react';
import styled from 'styled-components';

const StyledOutlineDropdownPill = styled.div<{ dropdownPillType?: DropdownPillType }>`
  padding: 2px 4px;
  width: 86px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  font-weight: 400;
  text-align: center;
  border: none;
  span {
    color: ${(props) =>
      props.dropdownPillType === 'submitted'
        ? '#FFE882'
        : props.dropdownPillType === 'completed'
        ? '#06AB69'
        : props.dropdownPillType === 'inprogress'
        ? '#00ABE2'
        : '#06AB69'};
  }
`;

type DropdownPillType = 'inprogress' | 'submitted' | 'completed';

export interface DropdownPillsProps {
  dropdownPillType: DropdownPillType;
  value: string;
}

const DropdownPills: React.FC<DropdownPillsProps> = ({ dropdownPillType, value }) => {
  return (
    <>
      <StyledOutlineDropdownPill dropdownPillType={dropdownPillType}>
        <span>{value}</span>
      </StyledOutlineDropdownPill>
    </>
  );
};

export default DropdownPills;
