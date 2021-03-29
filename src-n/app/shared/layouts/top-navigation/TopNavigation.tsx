import { useQuery } from '@apollo/client';
import { setAppData } from 'apollo/operations';
import { OutlineIconButton } from 'dashboard-app/common/Button';
import LogOutIcon from 'dashboard-app/common/icons/LogOutIcon';
import { GET_USER, GET_USER_HOSPITAL } from 'dashboard-app/queries/user';
import { userType } from 'dashboard-app/utils/authTracker';
import { UserType } from 'graphql-types/globalTypes';
import useLogout from 'hooks/useLogout';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './topnav.scss';

const PROFILE_AVATAR = '/images/profile-image.png';

export interface TopNavigationProps {
  pageName?: string;
  isMobile?: boolean;
}

const TopNavigation: React.FC<TopNavigationProps & RouteComponentProps> = ({
  pageName,
  isMobile,
}) => {
  const fetchQuery = userType() === UserType.Patient ? GET_USER : GET_USER_HOSPITAL;
  const { data } = useQuery(fetchQuery);
  const firstName = data?.user?.defaultProfile?.personalInformation?.firstName ?? '';
  const title = data?.user?.defaultProfile?.personalInformation?.title ?? '';
  const clinifyId = data?.user?.defaultProfile?.clinifyId ?? '';
  const hospitalName = data?.user?.hospitalOrganization?.name || '';
  const profilePic =
    data?.user?.defaultProfile?.personalInformation?.displayPictureUrl || PROFILE_AVATAR;
  const getGreeting = () => {
    const today = new Date();
    const curHr = today.getHours();
    if (curHr < 12) return 'Good Morning';
    if (curHr <= 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const { logOut } = useLogout();

  return (
    <div className="top-nav">
      <div className="d-flex">
        {isMobile && (
          <div className="collapse-button">
            <div id="menuToggle" onClick={() => setAppData({ isExpanded: true })}>
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        <div className="page-name">{pageName}</div>
      </div>
      <div className="profile-wrapper">
        <div className="left">
          <div className="profile-content">
            <div className="profile-image">
              <div className="image-wrapper">
                <img
                  src={profilePic}
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = PROFILE_AVATAR;
                  }}
                  alt="profile"
                  className="rounded img-fluid"
                />
              </div>
            </div>
            <div className="profile-content-name">
              <h3>
                {getGreeting()}
                <>
                  ,&nbsp;<span>{title}</span>
                  &nbsp;<span>{firstName}</span>
                </>
              </h3>
              <h5>Clinify ID: {clinifyId}</h5>
              {hospitalName && <h3>{hospitalName}.</h3>}
            </div>
            <div className="sign-out" data-tip="Sign Out" data-for="topNavTip">
              <OutlineIconButton
                withIcon
                autoWidth
                noMargin
                onClick={logOut}
                icon={<LogOutIcon />}
              />
              <ReactTooltip
                id="topNavTip"
                place="top"
                className="button-tooltip"
                type="light"
                effect="solid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopNavigation);
