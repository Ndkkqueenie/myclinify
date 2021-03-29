import styled from 'styled-components';
import React from 'react';
import colors from '../utils/colors';

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

export const FormContent = styled.div<{ clear?: boolean; noPaddingBottom?: boolean }>`
  width: 100%;
  max-width: 840px;
  box-sizing: border-box;
  padding: 0px;
  border-radius: 4px;
  padding: ${({ clear }) => (clear ? '0px' : '20px 40px 32px')};
  padding-bottom: ${({ noPaddingBottom }) => noPaddingBottom && '0'};
  margin: 10px 0;
  background-color: ${({ clear }) => !clear && colors.white};
`;

export const RecordForm = ({ noPaddingBottom = false, children, clear = false }) => (
  <FormWrapper>
    <FormContent noPaddingBottom={noPaddingBottom} clear={clear}>
      {children}
    </FormContent>
  </FormWrapper>
);
