import React, { JSXElementConstructor, ReactElement } from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Button = styled.button`
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 500;
  min-width: 150px;
  @media only screen and (min-width: 768px) {
    padding: 14px 16px;
    font-size: 18px;
    min-width: 200px;
  }
  border-radius: 4px;
  background-color: ${colors.iceBlue};
  color: ${colors.white};
  border: none;

  :focus {
    outline: none;
  }

  :disabled {
    background-color: ${colors.lightGrey};
  }
`;

export interface AuthenticationButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
}

const AuthenticationButton: React.FC<AuthenticationButtonProps> = ({
  text,
  onClick,
  disabled,
  ref,
}) => {
  return (
    <Button ref={ref} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default AuthenticationButton;

export interface AuthenticationModalButtonProps {
  text: string | ReactElement;
  onClick?: (data?: any) => void;
  disabled?: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
}

const StyledAuthButton = styled.button`
  width: 280px;
  padding: 10px 12px;
  color: ${colors.white};
  background-color: ${colors.iceBlue};
  border-radius: 10px;
  border: none;
  font-size: 13px !important;
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    font-size: 18px !important;
    padding: 0.9em 1em !important;
  }

  :focus {
    outline: none;
  }

  :disabled {
    background-color: ${colors.lightGrey} !important;
  }
`;

export const AuthenticationModalButton: React.FC<AuthenticationModalButtonProps> = ({
  onClick,
  text,
  disabled,
  ref,
}) => {
  return (
    <StyledAuthButton ref={ref} onClick={onClick} disabled={disabled}>
      {text}
    </StyledAuthButton>
  );
};
