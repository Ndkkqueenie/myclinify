import { useQuery } from '@apollo/client';
import { GET_APP_DATA, setTitle } from 'apollo/operations';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Tab, { TabContent, TabWrapper } from 'dashboard-app/common/Tab';
import { Content } from 'dashboard-app/common/Wrapper';
import { GET_USER } from 'dashboard-app/queries/user';
import { UserType } from 'graphql-types/globalTypes';
import useUpdateProfilePicture from 'hooks/useUpdateProfilePicture';
import React, { useState } from 'react';
import ChangeEmail from './ChangeEmail';
import ChangePasscode from './ChangePascode';
import ChangePhoneNumber from './ChangePhoneNumber';
import './settings.scss';

type TabNameTypes = 'Change Email Address' | 'Change Phone Number' | 'Change Passcode';

const PROFILE_AVATAR = '/images/profile-image.png';
const PROFILE_CAMERA = '/images/camera.png';

type TabNameType = TabNameTypes;

const SettingsTab = {
  'Change Email Address': { view: ChangeEmail, field: 'ChangeEmail' },
  'Change Phone Number': { view: ChangePhoneNumber, field: 'ChangePhoneNumber' },
  'Change Passcode': { view: ChangePasscode, field: 'ChangePasscode' },
};

const SettingsTabs = SettingsTab;
export interface DetailsProps {
  userType?: UserType;
}

const Settings: React.FC<DetailsProps> = () => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('Change Email Address');

  const TabComponent = SettingsTabs[currentTab]?.view;
  const { data } = useQuery(GET_USER);

  const profilePic =
    data?.user?.defaultProfile?.personalInformation?.displayPictureUrl || PROFILE_AVATAR;

  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);

  React.useEffect(() => setTitle('Settings'), []);
  const isLoading = false;

  const { changePicture } = useUpdateProfilePicture();

  if (isLoading) {
    return <LoaderOrError loading={isLoading} />;
  }

  return (
    <Content detailsPage>
      <TabWrapper>
        <Tab
          items={Object.keys(SettingsTabs)}
          activeItem={currentTab}
          isMobile={isMobile}
          tabClick={(tab) => {
            setCurrentTab(tab as TabNameType);
          }}
        />
        <TabContent isHeaderFixed>
          <RecordForm clear>
            <div className="upload_image">
              <label htmlFor="fileToUpload">
                <div
                  className="profile-pic"
                  style={{
                    backgroundImage: `url(${profilePic})`,
                  }}
                >
                  <img src={PROFILE_CAMERA} alt="camera-icon" />
                </div>
              </label>
              <input
                type="File"
                name="fileToUpload"
                id="fileToUpload"
                onChange={changePicture}
                accept=".jpg,.jpeg,.png,"
              />
              <h5>Upload Profile Picture</h5>
            </div>
            <TabComponent
              currentPhoneNumber={data?.user?.phoneNumber}
              currentEmail={data?.user?.nonCorporateEmail}
              currentCountry={data?.user?.country}
            />
          </RecordForm>
        </TabContent>
      </TabWrapper>
    </Content>
  );
};

export default Settings;
