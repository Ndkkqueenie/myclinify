import { useQuery } from '@apollo/client';
import cache from 'apollo/cache';
import { GET_APP_DATA, setAppData } from 'apollo/operations';
import GlobalRecordToggler from 'dashboard-app/common/GlobalRecordToggler';
import { ClinifyIcon, ClinifyLogo } from 'dashboard-app/common/icons/ClinifyLogo';
import SideNavUserDetails from 'dashboard-app/common/SideNavUserDetails';
import { GET_USER } from 'dashboard-app/queries/user';
import { userType } from 'dashboard-app/utils/authTracker';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './sidenav.scss';
import { PatientSelectedWithDoctorNavs, sideNavItemsSelector } from './SideNavItems';

export interface SideNavigationProps {
  isMobile?: boolean;
  isExpanded?: boolean;
  section?: string;
}

export interface ISideNavItems {
  title: string;
  url: string;
  icon: React.FC<any>;
}

export interface ISideNavItemsSelector {
  Patient: ISideNavItems[][];
  OrganizationDoctor: ISideNavItems[][];
  OrganizationNurse: ISideNavItems[][];
  OrganizationFrontDeskOfficer: ISideNavItems[][];
}

const SideNavigation: React.FC<SideNavigationProps> = ({ isExpanded, isMobile, section }) => {
  const patientDetails = JSON.parse(
    sessionStorage.getItem('patientDetails') ||
      JSON.stringify({ clinifyId: '', fullName: '', displayPictureUrl: '' }),
  );

  const history = useHistory();
  const { clinifyId, fullName, displayPictureUrl } = patientDetails;

  const {
    data: {
      appData: { patientIsSelected },
    },
  } = useQuery(GET_APP_DATA);

  let navs = sideNavItemsSelector[userType()];

  if (patientIsSelected) navs = PatientSelectedWithDoctorNavs;

  let patientHasAllergies = 0;
  try {
    const cacheData: any = cache.readQuery({ query: GET_USER });
    patientHasAllergies = cacheData?.user?.allergies?.totalCount;
  } catch (error) {
    patientHasAllergies = 0;
  }

  const canSeeRecordToggler = patientIsSelected || userType() === UserType.Patient;

  const goToOverviewPage = () => history.push(`/${section}/overview`);
  const removePatientData = () => {
    sessionStorage.removeItem('patientDetails');
    setAppData({ patientIsSelected: false });
    history.push(`/`);
  };

  return isExpanded ? (
    <div className="side-nav">
      <nav>
        <div className="nav-content">
          <div className="logo_creator_toggler">
            <div className="logo-wrapper">
              <span
                onClick={
                  section === 'patient'
                    ? goToOverviewPage
                    : patientIsSelected && section === 'hospital'
                    ? removePatientData
                    : undefined
                }
              >
                <ClinifyLogo className="logo large" />
                <ClinifyIcon className="logo small" />
              </span>
            </div>
            {canSeeRecordToggler ? <GlobalRecordToggler /> : null}
          </div>
          {patientIsSelected && (
            <div className="nav-item-wrapper cursor-pointer" onClick={goToOverviewPage}>
              <SideNavUserDetails
                username={`${fullName}`}
                profileImage={`${displayPictureUrl}`}
                clinifyId={clinifyId}
              />
            </div>
          )}
          {navs.map((itemGroup, idx) => (
            <div className="nav-item-wrapper" key={`sidenav-${idx}`}>
              {itemGroup.map(({ url, title, icon: Icon }) => (
                <NavLink
                  to={`/${section}${url}`}
                  className="nav-link"
                  activeClassName="active-link"
                  key={`${url}-${title}`}
                >
                  <div
                    className={
                      title === 'Allergy' && patientHasAllergies
                        ? 'indicator has-allergy-indicator'
                        : 'indicator'
                    }
                  />
                  <div
                    className={
                      title === 'Allergy' && patientHasAllergies
                        ? 'nav-item has-allergies'
                        : 'nav-item'
                    }
                  >
                    <Icon />
                    <span>{title}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </nav>
      {isMobile && (
        <div className="nav-overlay" onClick={() => setAppData({ isExpanded: false })} />
      )}
    </div>
  ) : null;
};

export default SideNavigation;
