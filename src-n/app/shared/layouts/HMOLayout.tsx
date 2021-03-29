import * as React from 'react';
import styled from 'styled-components';

import { MOBILE_BREAKPOINT } from 'dashboard-app/utils/constants';
import colors from '../utils/colors';
import HMOSideNavigation from './side-navigation/HMOSideNavigation';

import HMOTopNavigation, {
  CurrentEnrollItemType,
  CurrentLookupItemType,
} from './top-navigation/HMOTopNavigation';

const MainLayoutWrapper = styled.div<{
  fullWidth: boolean;
  noMargin: boolean;
  useWhiteBackground: boolean;
  withTab: boolean;
  withSearch: boolean;
}>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};
  margin-left: ${({ noMargin }) => (noMargin ? '0px' : '0')};
  min-height: ${({ withTab, withSearch }) =>
    withTab ? 'calc(100vh - 138px)' : withSearch ? 'calc(100vh - 72px)' : 'calc(100vh - 72px)'};
  margin-top: ${({ withTab, withSearch }) => (withTab ? '138px' : withSearch ? '72px' : '72px')};
  position: relative;

  background-color: ${colors.secondaryBg};

  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 769px) {
    min-height: ${({ withTab, withSearch }) =>
      withTab ? 'calc(100vh - 122px)' : withSearch ? 'calc(100vh - 203px)' : 'calc(100vh - 72px)'};
    margin-top: ${({ withTab, withSearch }) => (withTab ? '122px' : withSearch ? '203px' : '72px')};

    margin-left: ${({ noMargin }) => (noMargin ? '0px' : '5rem')};
    padding-right: 25px;
    padding-left: 25px;
  }
  @media (min-width: 992px) {
    padding-right: 32px;
    padding-left: 32px;
    margin-left: ${({ noMargin }) => (noMargin ? '0px' : '260px')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'calc(100% - 260px)')};
  }
`;

export interface HMOLayoutProps {
  pageName: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  noMargin?: boolean;
  useWhiteBackground?: boolean;
  withTab?: boolean;
  withSearch?: boolean;
  chooseEnrollItem?: (currentItem: CurrentEnrollItemType) => void;
  chooseLookupItem?: (currentItem: CurrentLookupItemType) => void;
}

const HMOLayout: React.FC<HMOLayoutProps> = ({
  children,
  pageName,
  chooseEnrollItem,
  chooseLookupItem,
  fullWidth = false,
  noMargin = false,
  useWhiteBackground = false,
  withTab = false,
  withSearch = false,
}) => {
  const [showSideBar, setShowSideBar] = React.useState(true);
  const sidebarRef = React.useRef<any>();
  const topBarRef = React.useRef<any>();

  React.useEffect(() => {
    const handleResize = () => {
      setShowSideBar(window.innerWidth > 768);
    };
    const handleNavClick = (e) => {
      if (
        showSideBar &&
        window.innerWidth <= MOBILE_BREAKPOINT &&
        topBarRef.current &&
        !topBarRef.current.contains(e.target) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setShowSideBar(false);
      }
    };
    document.addEventListener('click', handleNavClick);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('click', handleNavClick);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <MainLayoutWrapper
      fullWidth={fullWidth}
      noMargin={noMargin}
      useWhiteBackground={useWhiteBackground}
      withTab={withTab}
      withSearch={withSearch}
    >
      {showSideBar && (
        <div ref={sidebarRef}>
          <HMOSideNavigation />
        </div>
      )}
      <div ref={topBarRef}>
        <HMOTopNavigation
          pageName={pageName}
          setShowSideBar={() => setShowSideBar(!showSideBar)}
          chooseEnrollItem={chooseEnrollItem}
          chooseLookupItem={chooseLookupItem}
        />
      </div>

      {children}
    </MainLayoutWrapper>
  );
};

export default HMOLayout;
