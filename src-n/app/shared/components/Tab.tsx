import * as React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Dropdown from './Dropdown';
import { SelectWrapper } from './Wrapper';

const StyledTag = styled.div<{ addMarginBottom?: boolean; addMarginTop?: boolean }>`
  background-color: ${colors.white};
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  border-bottom: 1px solid ${colors.fadedGrey};
  display: flex;
  top: 72px;
  width: 100%;
  left: 0;
  clear: both;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  @media (min-width: 768px) {
    padding-right: 25px;
    padding-left: 25px;
    left: 5rem;
  }
  @media (min-width: 992px) {
    left: 260px;
    width: calc(100% - 260px);
    padding-right: 32px;
    padding-left: 32px;
  }
  position: fixed;
  min-height: 50px;
  align-items: flex-end;
  z-index: 200;
  margin-top: ${({ addMarginTop }) => (addMarginTop ? '70px' : '0px')};
  margin-bottom: ${({ addMarginBottom }) => (addMarginBottom ? '70px' : '0px')};

  .tab-item {
    padding: 10px 20px 0px 0px;
    cursor: pointer;
    text-align: center;
    span {
      font-size: 14px;
      font-weight: 500;
    }

    .link-indicator {
      border-top: 4px solid ${colors.white};
      width: 60px;
      margin: 4px auto 0px;
      border-radius: 10px;
    }

    .active-indicator {
      border-top: 4px solid ${colors.iceBlue};
    }

    .is-active {
      color: ${colors.iceBlue};
    }
  }

  .content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .content {
      width: 800px;
      margin-top: 40px;
      background-color: ${colors.white};
      padding: 32px 44px;

      box-sizing: border-box;

      .input-row {
        width: 100%;
        display: flex;
      }

      .button-row {
        width: 100%;
        margin: 30px 0px;
        display: flex;
        justify-content: flex-end;
        padding: 0px 16px;
        box-sizing: border-box;
      }
    }
  }
`;

const StyledTabContent = styled.div<{ isHeaderFixed?: boolean }>`
  padding-top: ${({ isHeaderFixed }) => (isHeaderFixed ? '15px' : '0px')};
  width: 100%;
`;

const StyledTabWrapper = styled.div`
  width: 100%;
`;

export interface TabProps {
  children?: React.ReactNode;
  addMarginBottom?: boolean;
  addMarginTop?: boolean;
  isVisible?: boolean;
  isMobile?: boolean;
  isHeaderFixed?: boolean;
  items?: string[];
  activeItem?: string | null;
  tabClick?: (value: string) => void;
}

export const TabWrapper: React.FC<TabProps> = ({ children }) => (
  <StyledTabWrapper>{children}</StyledTabWrapper>
);

export const TabContent: React.FC<TabProps> = ({ children, isHeaderFixed }) => (
  <StyledTabContent isHeaderFixed={isHeaderFixed}>{children}</StyledTabContent>
);

const TabHeaderContent: React.FC<TabProps> = ({
  children,
  items = [],
  tabClick,
  activeItem,
  isMobile,
}) => {
  const tabChanged = (tab) => {
    if (tabClick) tabClick(tab);
  };
  if (children) return <>{children}</>;
  if (isMobile) {
    return (
      <SelectWrapper>
        <Dropdown
          options={items.map((label) => ({ value: label, label }))}
          value={activeItem}
          onChange={({ value: tab }) => tabChanged(tab)}
        />
      </SelectWrapper>
    );
  }
  return (
    <>
      {items.map((tab) => (
        <div
          key={tab}
          className="tab-item"
          onClick={() => tabChanged(tab)}
          onKeyPress={() => tabChanged(tab)}
          tabIndex={0}
          role="button"
        >
          <span className={activeItem === tab ? 'is-active' : ''}>{tab}</span>
          <div
            className={activeItem === tab ? 'link-indicator active-indicator' : 'link-indicator'}
          />
        </div>
      ))}
    </>
  );
};

const Tab: React.FC<TabProps> = ({
  children,
  addMarginBottom,
  addMarginTop,
  isVisible = true,
  items = [],
  tabClick,
  activeItem,
  isMobile,
}) => {
  return isVisible ? (
    <StyledTag addMarginBottom={addMarginBottom} addMarginTop={addMarginTop}>
      <TabHeaderContent
        items={items}
        activeItem={activeItem}
        isMobile={isMobile}
        tabClick={tabClick}
      >
        {children}
      </TabHeaderContent>
    </StyledTag>
  ) : null;
};

export default Tab;
