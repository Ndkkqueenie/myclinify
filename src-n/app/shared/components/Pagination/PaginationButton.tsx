import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Button = styled.button<{ disabled?: boolean; active?: boolean }>`
  width: 25px;
  height: 25px;
  color: ${(props) =>
    !props.disabled ? (props.active ? colors.white : colors.darkBlue) : colors.fadedGrey};
  background-color: ${(props) => (props.active ? colors.darkBlue : 'transparent')};
  border-radius: 50%;
  margin-left: 15px;
  border: none;
  outline: none;
  font-size: 15px;
  :hover {
    color: ${(props) => !props.disabled && colors.white};
    background-color: ${(props) => !props.disabled && colors.darkBlue};
  }

  :focus {
    outline: none;
  }
`;

export interface PaginationButtonProps {
  value: string | number;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  value,
  onClick,
  active = false,
  disabled = false,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} active={active}>
      {value}
    </Button>
  );
};

export default PaginationButton;
