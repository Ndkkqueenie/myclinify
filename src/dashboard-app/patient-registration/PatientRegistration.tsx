import React, { useState } from 'react';
import { GET_APP_DATA, setTitle } from 'apollo/operations';
import Tab, { TabContent, TabWrapper } from 'dashboard-app/common/Tab';
import {
  PersonalInformationInput,
  BackgroundInformationInput,
  NextOfKinInput,
  DependentInput,
  Gender,
  UserType,
} from 'graphql-types/globalTypes';
import useUpdateProfile from 'hooks/useUpdateProfile';
import { Content } from 'dashboard-app/common/Wrapper';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { GET_HMOS } from 'dashboard-app/queries/hmos';
import { useQuery } from '@apollo/client';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import { DETAILS_INITIAL_VALUES_MAPPER } from 'dashboard-app/details/constants';
import NextOfKin from 'dashboard-app/details/NextOfKin';
import BackgroundInformation from 'dashboard-app/details/BackgroundInformation';
import PersonalInformation from 'dashboard-app/details/PersonalInformation';
import CoverageInformation from 'dashboard-app/coverage/CoverageInformation';
import Dependant from 'dashboard-app/coverage/Dependant';
import useUpdateProfileDetails from 'hooks/useUpdateProfileDetails';
import Message from 'dashboard-app/common/Message';

type TabNameType =
  | 'Personal Information'
  | 'Background Information'
  | 'Next of Kin'
  | 'Coverage Information'
  | 'Dependents';

export interface PatientRegistrationState {
  currentTab: TabNameType;
}

const PatientRegistrationTabs = {
  'Personal Information': { view: PersonalInformation, field: 'personalInformation' },
  'Background Information': { view: BackgroundInformation, field: 'backgroundInformation' },
  'Next of Kin': { view: NextOfKin, field: 'nextOfKin' },
  'Coverage Information': { view: CoverageInformation, field: 'coverageInformation' },
  Dependents: { view: Dependant, field: 'dependents' },
};

const dependentInitialState: DependentInput[] = [
  {
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    relationship: '',
    gender: Gender.Male,
    bloodGroup: '',
  },
];

export interface PatientRegistrationProps {
  userType?: UserType;
  blank?: boolean;
}

const PatientRegistration: React.FC<PatientRegistrationProps> = ({ blank }) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('Personal Information');
  const section = PatientRegistrationTabs[currentTab]?.field;

  const initialState:
    | PersonalInformationInput
    | NextOfKinInput[]
    | BackgroundInformationInput
    | DependentInput[] = DETAILS_INITIAL_VALUES_MAPPER[section];

  const updateProfileHook = useUpdateProfileDetails({
    section,
    initialState,
    tab: currentTab,
    blank,
  });

  const dependentsUpdateProfileHook = useUpdateProfileDetails({
    section: 'dependents',
    initialState: dependentInitialState,
  });

  const { items: hmos, loading, error } = useListPageFilterOptions(
    GET_HMOS,
    'user.hmos',
    {},
    {
      skip: 0,
      take: 10,
    },
    {},
  );

  const { errorFetching, fetchingUserData, data, generateData } = updateProfileHook;
  const TabComponent = PatientRegistrationTabs[currentTab]?.view;

  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);
  React.useEffect(() => setTitle('Patient Registration'), []);
  //   React.useEffect(() => setTitle(blank ? 'Patient Registration' : 'My PatientRegistration'), []);

  if (fetchingUserData || errorFetching || error) {
    return <LoaderOrError loading={fetchingUserData || loading} />;
  }

  return (
    <Content detailsPage>
      <TabWrapper>
        <Tab
          items={Object.keys(PatientRegistrationTabs)}
          activeItem={currentTab}
          isMobile={isMobile}
          tabClick={(tab) => {
            const initialState = [DETAILS_INITIAL_VALUES_MAPPER[tab]];
            setCurrentTab(tab as TabNameType);
            const isMulti = tab === 'Next of Kin';
            generateData();
          }}
        />
        <TabContent isHeaderFixed>
          <RecordForm clear>
            <Message>Data coming soon</Message>
            {/* {currentTab === 'data && <Dependant hook={updateProfileHook} />} */}
          </RecordForm>
        </TabContent>
      </TabWrapper>
    </Content>
  );
};

export default PatientRegistration;
