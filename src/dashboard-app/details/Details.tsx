import { useQuery } from '@apollo/client';
import { GET_APP_DATA, setTitle } from 'apollo/operations';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Tab, { TabContent, TabWrapper } from 'dashboard-app/common/Tab';
import { Content } from 'dashboard-app/common/Wrapper';
import {
  BackgroundInformationInput,
  NextOfKinInput,
  PersonalInformationInput,
  UserType,
} from 'graphql-types/globalTypes';
import useUpdateProfileDetails from 'hooks/useUpdateProfileDetails';
import React, { useState } from 'react';
import BackgroundInformation from './BackgroundInformation';
import { DETAILS_INITIAL_VALUES_MAPPER } from './constants';
import NextOfKin from './NextOfKin';
import PersonalInformation from './PersonalInformation';

type TabNameType =
  | 'Pre-existing Condition'
  | 'Past Surgical History'
  | 'Gynecologic History'
  | 'Obstetric History'
  | 'Family History'
  | 'Social History'
  | 'Physical Activity'
  | 'Disability'
  | 'Past Encounters'
  | 'Next of Kin'
  | 'Background Information'
  | 'Personal Information'
  | 'Dependents';

export interface DetailsState {
  currentTab: TabNameType;
}

const DetailsTabs = {
  'Personal Information': { view: PersonalInformation, field: 'personalInformation' },
  'Background Information': { view: BackgroundInformation, field: 'backgroundInformation' },
  'Next of Kin': { view: NextOfKin, field: 'nextOfKin' },
};

export interface DetailsProps {
  userType?: UserType;
  blank?: boolean;
}

const Details: React.FC<DetailsProps> = ({ blank }) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('Personal Information');
  const section = DetailsTabs[currentTab]?.field;
  const initialState: PersonalInformationInput | NextOfKinInput[] | BackgroundInformationInput =
    DETAILS_INITIAL_VALUES_MAPPER[section];
  const updateProfileHook = useUpdateProfileDetails({
    section,
    initialState,
    tab: currentTab,
    blank,
  });

  const {
    errorFetching,
    fetchingUserData,
    generateData,
    data,
    handleInputChange,
    updateProfileDetails,
    readOnly,
    inputs,
    actionText,
    toggleAllowEdit,
    disabled,
  } = updateProfileHook;
  const TabComponent = DetailsTabs[currentTab]?.view;

  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);
  React.useEffect(() => setTitle(blank ? 'Patient Registration' : 'My Details'), []);

  if (fetchingUserData || errorFetching) {
    return <LoaderOrError loading={fetchingUserData} />;
  }

  return (
    <Content detailsPage>
      <TabWrapper>
        <Tab
          items={Object.keys(DetailsTabs)}
          activeItem={currentTab}
          isMobile={isMobile}
          tabClick={(tab) => {
            const initialState = [DETAILS_INITIAL_VALUES_MAPPER[tab]];
            setCurrentTab(tab as TabNameType);
            generateData(DetailsTabs[tab].field, initialState);
          }}
        />
        <TabContent isHeaderFixed>
          <RecordForm clear>
            {data && (
              <TabComponent
                data={data}
                handleInputChange={handleInputChange}
                updateProfileDetails={updateProfileDetails}
                tab={currentTab}
                readOnly={readOnly}
                inputs={inputs}
                toggleAllowEdit={toggleAllowEdit}
                actionText={actionText}
                disabled={disabled}
              />
            )}
          </RecordForm>
        </TabContent>
      </TabWrapper>
    </Content>
  );
};

export default Details;
