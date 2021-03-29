import React, { useState } from 'react';

import Dropdown from 'dashboard-app/common/Dropdown';
import Button from 'dashboard-app/common/Button';
import { useQuery } from '@apollo/client';
import { GET_USER_HOSPITAL } from 'dashboard-app/queries/user';
import useLogout from 'hooks/useLogout';
import TopNavigationWrapper from './styles/TopNavigationWrapper';

const insuranceOptions = [
  { value: 'Claim Summary', label: 'Claim Summary' },
  { value: 'Pre-authorization Status', label: 'Pre-authorization Status' },
];

type CurrentItemType = 'Claim Summary' | 'Pre-authorization Status';

export interface HospitalTopNavigationProps {
  pageName?: string;
  chooseInsuranceItem?: (currentItem: CurrentItemType) => void;
}

const HospitalTopNavigation: React.FC<HospitalTopNavigationProps> = ({
  pageName,
  chooseInsuranceItem,
}) => {
  const { data } = useQuery(GET_USER_HOSPITAL);
  const [insuranceItem, setInsuranceItem] = useState<CurrentItemType>('Claim Summary');

  let firstName = '';
  let lastName = '';
  let hospital = '';

  if (data) {
    firstName = data?.user?.defaultProfile?.personalInformation?.firstName ?? '';
    lastName = data?.user?.defaultProfile?.personalInformation?.lastName ?? '';
    hospital = data?.user?.hospitalOrganization?.name;
  }

  const { logOut } = useLogout();

  return (
    <TopNavigationWrapper>
      <div className="page-name">{pageName}</div>
      <div className="profile-wrapper">
        <div className="left">
          {chooseInsuranceItem && (
            <Dropdown
              withoutBorderRadius
              grey
              forSearch
              withoutIcon
              noPadding
              options={insuranceOptions}
              value={insuranceItem}
              onChange={(payload) => {
                setInsuranceItem(payload.value);
                chooseInsuranceItem(payload.value as CurrentItemType);
              }}
            />
          )}
          <div className="profile-content">
            <span className="heading">{hospital || 'Clinify Health Facility'}</span>
            {(firstName || lastName) && (
              <span className="text">
                {firstName} {lastName}
              </span>
            )}
          </div>
        </div>
        <div className="right">
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/skiposki/image/upload/v1593673635/clinify/placeholder.png"
              alt="profile"
              width="40"
              className="rounded"
            />
          </div>
        </div>
        <Button text="Sign Out" littleBorderRadius onClick={logOut} />
      </div>
    </TopNavigationWrapper>
  );
};

export default HospitalTopNavigation;
