import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'dashboard-app/utils/colors';
import { ClinifyLogo, ClinifyIcon } from 'dashboard-app/common/icons/ClinifyLogo';
import EnrollIcon from './icons/EnrollIcon';
import AuthorizationIcon from './icons/AuthorizationIcon';
import ClaimsIcon from './icons/ClaimsIcon';

const StyledNavigation = styled.nav`
  width: 5rem;
  background-color: ${colors.darkBlue};
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  overflow-x: hidden;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: ${colors.lightGrey};
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.iceBlue};
    width: 3px;
    height: 3px;
    -webkit-border-radius: 1ex;
  }

  :hover {
    width: 260px;
    transition: width 0.2s;
    transition-timing-function: ease-out;

    .logo.large {
      display: block !important;
    }
    .logo.small {
      display: none !important;
    }
    span {
      display: block !important;
      position: relative;
      transform: translateX(0);
    }
  }
  transition: transform 0.25s;
  transition-timing-function: ease-out;

  @media (min-width: 768px) {
    transform: translateX(0);
  }

  .nav-content {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-wrapper {
      width: 100%;
      height: 72px;
      display: flex;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid rgba(166, 166, 166, 0.3);
      padding: 24px 30px;
      font-weight: bold;
      font-size: 1.3em;
      color: ${colors.iceBlue};
      .logo.large {
        display: none;
      }
      .logo.small {
        display: block;
      }
    }

    .nav-item-wrapper {
      border-bottom: 1px solid rgba(166, 166, 166, 0.3);
      width: 100%;

      .nav-link {
        text-decoration: none;
        padding: 6px 0px;
        box-sizing: border-box;
        display: flex;
        height: 46px;

        .indicator {
          display: block;
          border-left: 3px solid ${colors.darkBlue};
          margin-right: 27px;
        }

        .nav-item {
          width: 100%;
          color: ${colors.white};
          font-weight: 400;
          display: flex;
          align-items: center;
          :hover {
            color: ${colors.iceBlue};
            font-weight: 600;
            svg {
              g {
                path {
                  fill: ${colors.iceBlue} !important;
                }
              }
              path {
                fill: ${colors.iceBlue} !important;
                stroke: ${colors.iceBlue} !important;
              }
            }
          }
          span {
            margin-left: 14px;
            font-size: 14px;
            transition: transform 0.25s;
            display: none;
          }
        }
      }
      .active-link {
        padding: 6px 0px;
        box-sizing: border-box;
        display: flex;
        height: 46px;

        .indicator {
          display: block;
          border-left: 3px solid ${colors.iceBlue};
          margin-right: 27px;
        }

        .nav-item {
          width: 100%;
          color: ${colors.iceBlue};
          font-weight: 600;
          display: flex;
          align-items: center;
          span {
            margin-left: 14px;
            font-size: 14px;
          }

          svg {
            g {
              path {
                fill: ${colors.iceBlue} !important;
              }
            }
            path {
              fill: ${colors.iceBlue} !important;
              stroke: ${colors.iceBlue} !important;
            }
          }
        }
      }
    }

    .no-border {
      border: none;
    }

    .wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 30px;

      .contact-button {
        width: 146px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px 18px;
        border-radius: 4px;
        background-color: ${colors.deepBlue};
        color: ${colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 260px;

    .nav-content {
      .logo-wrapper {
        .logo.large {
          display: block;
        }
        .logo.small {
          display: none;
        }
      }
      .nav-item-wrapper,
      .active-link {
        .nav-link {
          .nav-item {
            span {
              display: block;
              position: relative;
              transform: translateX(0);
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    width: 260px;

    .nav-content {
      .logo-wrapper {
        .logo.large {
          display: block;
        }
        .logo.small {
          display: none;
        }
      }
      .nav-item-wrapper,
      .active-link {
        .nav-link {
          .nav-item {
            span {
              display: block;
              position: relative;
              transform: translateX(0);
            }
          }
        }
      }
    }
  }
`;

export interface HMOSideNavigationProps {}

const HMOSideNavigation: React.FC<HMOSideNavigationProps> = () => {
  return (
    <StyledNavigation>
      <div className="nav-content">
        <div className="logo-wrapper">
          <span>
            <ClinifyLogo className="logo large" />
            <ClinifyIcon className="logo small" />
          </span>
        </div>

        <div className="nav-item-wrapper">
          <NavLink to="/hmo/enrollment" className="nav-link" activeClassName="active-link">
            <div className="indicator" />
            <div className="nav-item">
              <EnrollIcon />
              <span>Enrollment</span>
            </div>
          </NavLink>
        </div>

        <div className="nav-item-wrapper">
          <NavLink to="/hmo/authorization" className="nav-link" activeClassName="active-link">
            <div className="indicator" />
            <div className="nav-item">
              <AuthorizationIcon />
              <span>Authorization</span>
            </div>
          </NavLink>
          <NavLink to="/hmo/claims" className="nav-link" activeClassName="active-link">
            <div className="indicator" />
            <div className="nav-item">
              <ClaimsIcon />
              <span>Claims</span>
            </div>
          </NavLink>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default HMOSideNavigation;
