import * as React from 'react';
import styled from 'styled-components';
import { GridLoader } from 'react-spinners';
import colors from '../utils/colors';

const LoaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 155px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  position: fixed;
  z-index: 999;

  div {
    div {
      background-color: ${colors.iceBlue} !important;
    }
  }
`;

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <LoaderWrapper>
      <GridLoader />
    </LoaderWrapper>
  );
};

export default Loader;
