import React, { useState } from 'react';
import styled from 'styled-components';

import colors from 'dashboard-app/utils/colors';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';

import Dropdown from 'dashboard-app/common/Dropdown';
import { GET_USER_HMO } from 'dashboard-app/queries/user';
import { useQuery } from '@apollo/client';

import DropdownIcon from 'dashboard-app/common/icons/DropdownIcon';
import EmailSettingsIcon from './icons/EmailSettingsIcon';
import PasscodeIcon from './icons/PasscodeIcon';
import PhoneNumberIcon from './icons/PhoneNumberIcon';

const TopNavigationWrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  top: 0px;
  height: 72px;
  z-index: 555;
  position: fixed;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  left: 0;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 769px) {
    width: calc(100% - 5rem);
    left: 5rem;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 25px;
    padding-left: 25px;
  }

  @media (min-width: 992px) {
    padding-right: 32px;
    padding-left: 32px;
    left: 260px;
    width: calc(100% - 260px);
  }

  .page-name {
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      font-size: 25px;
    }
  }

  .profile-wrapper {
    display: flex;
    align-items: center;

    .left {
      text-align: right;
      display: flex;
      flex-grow: 1;

      .add-button {
      }

      .profile-content {
        display: flex;
        align-items: center;
        .profile-image {
          .image-wrapper {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 2px solid ${colors.iceBlue};
            overflow: hidden;

            justify-content: center;
            @media (min-width: 768px) {
              height: 40px;
              width: 40px;
            }
          }
        }
        .profile-content-name {
          margin-left: 0.5rem;
          @media (min-width: 768px) {
            margin-left: 20px;
          }
          h3 {
            font-weight: 400;
            font-size: 14px;
            text-align: left;
            span {
              font-weight: 600;
            }
            @media (min-width: 768px) {
              font-weight: 400;
              font-size: 19px;
              text-align: left;
              span {
                font-weight: 600;
              }
            }
          }

          h5 {
            font-size: 8px;
            font-weight: 300;
            text-align: left;
            @media (min-width: 768px) {
              font-size: 10px;
            }
          }
        }
        .dropdown-icon {
          align-self: center;
          margin-left: 0.15rem;
          position: relative;
          cursor: pointer;
          .nav-link {
            padding: 5px 0px;
            svg {
              transform: scale(0.5);
            }
          }

          * {
            cursor: pointer;
            list-style: none;
          }
          @media (min-width: 768px) {
            margin-left: 0.5rem;
          }
        }
      }
      @media (min-width: 768px) {
        .left {
          .add-button {
          }

          .profile-content {
            .profile-image {
              .image-wrapper {
                height: 40px;
                width: 40px;
              }
            }
            .profile-content-name {
              margin-left: 20px;

              h3 {
                font-weight: 400;
                font-size: 19px;
                text-align: left;
                span {
                  font-weight: 600;
                }
              }

              h5 {
                font-size: 10px;
                font-weight: 300;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
  .collapse-button {
    display: block;
    display: flex;
    margin-top: 5px;
    padding: 0 1rem 0 0;
    align-items: center;
    @media (min-width: 769px) {
      display: none;
    }
    #menuToggle {
      position: relative;
      cursor: pointer;
      span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: ${colors.iceBlue};
        border-radius: 3px;
        z-index: 1;
      }
    }
  }

  nav {
    display: block;
    text-align: center;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  .nav {
    a {
      display: block;
      position: relative;
    }
    .nav-icon {
      padding: 5px 0 5px 10px;

      margin-left: 10px;
    }
    vertical-align: top;
    display: inline-block;
    border-radius: 6px;
    li {
      position: relative;

      display: block;
      width: 100%;
      font-weight: 400;
      cursor: pointer;
      color: #212529;
      text-align: inherit;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
      padding: 8px 1.2rem;
      font-size: 11px;
      @media (min-width: 789px) {
        font-size: 15px;
      }
      &:hover {
        background: ${colors.secondaryBg};
      }
    }
    > li {
      float: left;
      margin-right: 1px;

      &:hover {
        border-bottom-color: orange;

        > ul {
          left: -316%;
          top: 30px;
          padding-top: 5px;
          min-width: 100%;
          z-index: 1000;
          min-width: 10rem;
          padding: 0.5rem 0;
          margin: 0.125rem 0 0;
          font-size: 1rem;
          color: #212529;
          text-align: left;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0.25rem;
          padding: 0;
        }
      }

      li {
        position: relative;

        display: block;
        width: 100%;
        font-weight: 400;
        cursor: pointer;
        color: #212529;
        text-align: inherit;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
        padding: 8px 1.2rem;
        font-size: 11px;
        @media (min-width: 789px) {
          font-size: 15px;
        }
        &:hover {
          background: ${colors.secondaryBg};
        }
        ul {
        }
        &:hover {
          > ul {
            left: auto;
            right: 100%;
            top: 0;
            padding-top: 5px;
            min-width: 100%;
            z-index: 1000;
            min-width: 10rem;
            padding: 0.5rem 0;
            margin: 0.125rem 0 0;
            font-size: 1rem;
            color: #212529;
            text-align: left;
            list-style: none;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 0.25rem;
            padding: 0;
          }
        }
      }
    }
    ul {
      position: absolute;
      white-space: nowrap;
      z-index: 1;
      left: -99999em;
    }
  }
`;

export type CurrentEnrollItemType = 'My Details' | 'My Health';
export type CurrentLookupItemType = 'Member Details' | 'Claim Details';

const enrollOptions = [
  { value: 'My Details', label: 'My Details' },
  { value: 'My Health', label: 'My Health' },
];

const lookupOptions = [
  { value: 'Member Details', label: 'Member Details' },
  { value: 'Claim Details', label: 'Claim Details' },
];

export interface HMOTopNavigationProps {
  setShowSideBar: () => void;
  pageName?: string;
  chooseEnrollItem?: (currentEnrollItem: CurrentEnrollItemType) => void;
  chooseLookupItem?: (currentLookupItem: CurrentLookupItemType) => void;
}

const HMOTopNavigation: React.FC<HMOTopNavigationProps & RouteComponentProps> = ({
  pageName,
  chooseEnrollItem,
  setShowSideBar,
  chooseLookupItem,
}) => {
  const [enrollItem, setEnrollItem] = useState<CurrentEnrollItemType>('My Details');
  const [lookupItem, setLookupItem] = useState<CurrentLookupItemType>('Member Details');

  const { data } = useQuery(GET_USER_HMO);

  let firstName = '';
  let lastName = '';
  let hmo = '';

  if (data) {
    firstName = data?.user?.defaultProfile?.personalInformation?.firstName ?? 'Michael';
    lastName = data?.user?.defaultProfile?.personalInformation?.lastName ?? 'Samuels';
    hmo = data?.user?.hmoOrganization?.name;
  }

  const history = useHistory();

  return (
    <TopNavigationWrapper>
      <div className="d-flex ">
        <div className="collapse-button">
          <div id="menuToggle" onClick={() => setShowSideBar()}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="page-name">{pageName}</div>
      </div>

      <div className="profile-wrapper">
        <div className="left">
          {chooseEnrollItem && (
            <Dropdown
              withoutBorderRadius
              grey
              forSearch
              withoutIcon
              noPadding
              options={enrollOptions}
              value={enrollItem}
              onChange={(payload) => {
                setEnrollItem(payload.value);
                chooseEnrollItem(payload.value as CurrentEnrollItemType);
              }}
            />
          )}
          {chooseLookupItem && (
            <Dropdown
              withoutBorderRadius
              grey
              forSearch
              withoutIcon
              noPadding
              options={lookupOptions}
              value={lookupItem}
              onChange={(payload) => {
                setLookupItem(payload.value);
                chooseLookupItem(payload.value as CurrentLookupItemType);
              }}
            />
          )}
          <div className="profile-content" />
          <div className="profile-wrapper">
            <div className="left">
              <div className="profile-content">
                <div className="profile-image">
                  <div className="image-wrapper">
                    <img
                      src="/images/profile-image.png"
                      alt="profile"
                      className="rounded img-fluid"
                    />
                  </div>
                </div>
                <div className="profile-content-name">
                  <span className="heading">{hmo}</span>{' '}
                  {(firstName || lastName) && (
                    <span className="text">
                      {firstName} {lastName}
                    </span>
                  )}
                </div>
                <nav>
                  <ul className="nav">
                    <li className="nav-icon">
                      <DropdownIcon />
                      <ul>
                        <li>
                          <span>Settings</span>
                          <ul>
                            <li>
                              <EmailSettingsIcon /> <span>Email Settings</span>
                            </li>
                            <li>
                              <PhoneNumberIcon /> <span>Phone number settings</span>
                            </li>
                            <li>
                              <PasscodeIcon /> <span>Passcode Reset</span>
                            </li>
                          </ul>
                        </li>

                        <li
                          onClick={() => {
                            sessionStorage.removeItem('userToken');
                            sessionStorage.removeItem('userData');
                            history.push('/login/patient');
                          }}
                        >
                          <span>Sign Out</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopNavigationWrapper>
  );
};

export default withRouter(HMOTopNavigation);
