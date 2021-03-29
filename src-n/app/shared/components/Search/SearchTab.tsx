import * as React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledSearchTag = styled.div<{
  isVitals?: boolean;
  addMarginBottom?: boolean;
  addMarginTop?: boolean;
  row?: boolean;
}>`
  background-color: ${colors.white};
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  // padding: 0px 44px 0px;
  display: flex;
  justify-content: ${(props) => (props.isVitals ? 'flex-start' : 'space-between')};
  align-items: center;
  margin-top: ${({ addMarginTop }) => (addMarginTop ? '70px' : '0px')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  @media (min-width: 769px) {
    flex-direction: row;
  }
  .heading-table {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
    flex-direction: column;
    padding-left: 15px;
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.25);
    @media (min-width: 769px) {
      flex-direction: row;
      padding-right: 25px;
      padding-left: 25px;
    }

    @media (min-width: 992px) {
      padding-right: 32px;
      padding-left: 32px;
    }
  }
  .clinify-dropdown {
    width: 100%;
    margin-bottom: 8px;
    @media only screen and (min-width: 768px) {
      width: 190px;
      margin-bottom: 0;
    }
  }
`;

export interface SearchTabProps {
  children: React.ReactNode;
  isVitals?: boolean;
  row?: boolean;
  addMarginBottom?: boolean;
  addMarginTop?: boolean;
  isVisible?: boolean;
}

const SearchTab: React.FC<SearchTabProps> = ({
  children,
  isVitals,
  addMarginBottom,
  addMarginTop,
  isVisible = true,
}) =>
  isVisible ? (
    <StyledSearchTag
      isVitals={isVitals}
      addMarginBottom={addMarginBottom}
      addMarginTop={addMarginTop}
    >
      {children}
    </StyledSearchTag>
  ) : null;

export default SearchTab;
