import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

export const StyledInputWrapper = styled.div`
  width: 320px;
  box-sizing: border-box;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: ${colors.black};
  font-weight: 400;
`;

export const StyledInputTagWrapper = styled.div`
  padding: 6px 0px 0px;
  box-sizing: border-box;
  position: relative;
`;

export const StyledInput = styled.input<{ topSpaced?: boolean }>`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.silver};
  color: ${colors.ash};
  font-size: 16px;
  padding: 7px 20px;
  box-sizing: border-box;
  opacity: 100;
  background-color: ${colors.white};
  margin-top: 0px;
`;

export const StyledTag = styled.div`
  position: absolute;
  right: 0;
  top: 6px;
  padding: 0px 16px;
  box-sizing: border-box;
  background: ${colors.lightAsh};
  color: ${colors.ash};
  border-radius: 0px 4px 4px 0px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface ModalTextInputProps {
  title: string;
  name: string;
  value: string;
  isDisabled: boolean;
  tag?: string;
  fullWidth?: boolean;
}

const ModalTextInput: React.FC<ModalTextInputProps> = ({ title, name, value, isDisabled, tag }) => {
  return (
    <StyledInputWrapper>
      <StyledLabel>{title}</StyledLabel>
      {tag ? (
        <StyledInputTagWrapper>
          <StyledInput type="text" name={name} value={value} disabled={isDisabled} />
          <StyledTag>{tag}</StyledTag>
        </StyledInputTagWrapper>
      ) : (
        <StyledInput type="text" name={name} value={value} disabled={isDisabled} topSpaced />
      )}
    </StyledInputWrapper>
  );
};

export default ModalTextInput;
