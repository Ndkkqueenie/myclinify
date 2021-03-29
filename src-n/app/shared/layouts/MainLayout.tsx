import * as React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_APP_DATA } from 'apollo/operations';
import useResponsiveness from 'hooks/useResponsiveness';
import colors from '../utils/colors';
import SideNavigation from './side-navigation/SideNavigation';
import TopNavigation from './top-navigation/TopNavigation';

const MainLayoutWrapper = styled.div<{
  fullWidth?: boolean;
  noMargin?: boolean;
  useWhiteBackground?: boolean;
  withTab?: boolean;
  withSearch?: boolean;
  onModal?: boolean;
}>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};
  min-height: ${({ withTab, withSearch }) =>
    withTab ? 'calc(100vh - 138px)' : withSearch ? 'calc(100vh - 72px)' : 'calc(100vh - 72px)'};
  margin-top: ${({ withTab, withSearch }) => (withTab ? '138px' : withSearch ? '72px' : '72px')};
  position: relative;

  background-color: ${colors.secondaryBg};

  // padding-right: 15px;
  // padding-left: 15px;

  @media (min-width: 769px) {
    min-height: ${({ withTab, withSearch, onModal }) => {
      if (onModal) return '0';
      return withTab
        ? 'calc(100vh - 122px)'
        : withSearch
        ? 'calc(100vh - 203px)'
        : 'calc(100vh - 72px)';
    }};

    margin-top: ${({ withTab, withSearch, onModal }) => {
      if (onModal) return '0';
      return withTab ? '122px' : withSearch ? '203px' : '72px';
    }};
    margin-left: ${({ noMargin }) => (noMargin ? '0px' : '5rem')};
  }
  @media (min-width: 992px) {
    margin-left: ${({ noMargin }) => (noMargin ? '0px' : '260px')};
  }
`;

const ChildLayoutWrapper = styled.div<{
  fullWidth?: boolean;
  noMargin?: boolean;
  useWhiteBackground?: boolean;
  withTab?: boolean;
  withSearch?: boolean;
  onModal?: boolean;
}>`
  min-height: ${({ withTab, withSearch }) =>
    withTab ? 'calc(100vh - 138px)' : withSearch ? 'calc(100vh - 72px)' : 'calc(100vh - 72px)'};
  display: flex;

  @media (min-width: 769px) {
    min-height: ${({ withTab, withSearch, onModal }) => {
      if (onModal) return '0';
      return withTab
        ? 'calc(100vh - 122px)'
        : withSearch
        ? 'calc(100vh - 203px)'
        : 'calc(100vh - 72px)';
    }};
  }
`;

export interface LayoutProps {
  pageName?: string;
  children: React.ReactNode;
  showHabitButton?: boolean;
  handleAddNewHabit?: () => void;
  showPhysicalActivitiesButton?: boolean;
  handleAddNewNextOfKin?: () => void;
  showPreExistingConditionButton?: boolean;
  handleAddNewPhysicalActivities?: () => void;
  showNextOfKinButton?: boolean;
  handleAddNewPreExistingCondition?: () => void;
  showDisabilitiesButton?: boolean;
  handleAddNewDisabilities?: () => void;
  showDependentButton?: boolean;
  handleAddNewDependent?: () => void;
  showTopNav?: boolean;
  fullWidth?: boolean;
  noMargin?: boolean;
  useWhiteBackground?: boolean;
  withTab?: boolean;
  withSearch?: boolean;
  onModal?: boolean;
  section?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, section }) => {
  useResponsiveness();
  const {
    data: {
      appData: { pageTitle, isExpanded, isMobile },
    },
  } = useQuery(GET_APP_DATA);
  return (
    <MainLayoutWrapper>
      <SideNavigation isExpanded={isExpanded} isMobile={isMobile} section={section} />
      <TopNavigation pageName={pageTitle} isMobile={isMobile} />
      <ChildLayoutWrapper>{children}</ChildLayoutWrapper>
    </MainLayoutWrapper>
  );
};

export default Layout;
