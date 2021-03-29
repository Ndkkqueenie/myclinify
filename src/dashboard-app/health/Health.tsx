import { useQuery } from '@apollo/client';
import { GET_APP_DATA, setTitle } from 'apollo/operations';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Tab, { TabContent, TabWrapper } from 'dashboard-app/common/Tab';
import { Content } from 'dashboard-app/common/Wrapper';
import { UserType } from 'graphql-types/globalTypes';
import useFetchProfileInfoData from 'hooks/useFetchProfileInfoData';
import React, { useState } from 'react';
import Disability from './Disability';
import FamilyHistory from './FamilyHistory';
import GynecologicHistory from './GynecologicHistory';
import ObstetricHistory from './ObstetricHistory';
import PastEncounters from './PastEncounters';
import PastSurgery from './PastSurgery';
import PhysicalActivity from './PhysicalActivity';
import PreExistingCondition from './PreExistingCondition';
import SocialHistory from './SocialHistory';

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
  | 'Dependents';

const HealthTabs = {
  'Pre-existing Condition': { view: PreExistingCondition, field: 'preExistingCondition' },
  'Past Surgical History': { view: PastSurgery, field: 'pastSurgery' },
  'Gynecologic History': { view: GynecologicHistory, field: 'gynecologicHistory' },
  'Obstetric History': { view: ObstetricHistory, field: 'obstetricHistory' },
  'Family History': { view: FamilyHistory, field: 'familyHistory' },
  'Social History': { view: SocialHistory, field: 'habit' },
  'Physical Activity': { view: PhysicalActivity, field: 'physicalActivity' },
  Disability: { view: Disability, field: 'disability' },
  'Past Encounters': { view: PastEncounters, field: 'pastEncounters' },
};

export interface HealthProps {
  userType?: UserType;
}

const Health: React.FC<HealthProps> = () => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('Pre-existing Condition');

  const { profileInfos, fetchingOrError, loading } = useFetchProfileInfoData(currentTab);

  const TabComponent = HealthTabs[currentTab]?.view;
  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);

  React.useEffect(() => setTitle('My Health'), []);

  return (
    <Content detailsPage>
      <TabWrapper>
        <Tab
          items={Object.keys(HealthTabs)}
          activeItem={currentTab}
          isMobile={isMobile}
          tabClick={(tab) => setCurrentTab(tab as TabNameType)}
        />
        <TabContent isHeaderFixed>
          {fetchingOrError && <LoaderOrError loading={loading} />}
          <RecordForm clear>{!fetchingOrError && <TabComponent data={profileInfos} />}</RecordForm>
        </TabContent>
      </TabWrapper>
    </Content>
  );
};

export default Health;
