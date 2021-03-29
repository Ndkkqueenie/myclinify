import { useQuery } from '@apollo/client';
import { GET_APP_DATA, setTitle } from 'apollo/operations';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Tab, { TabContent, TabWrapper } from 'dashboard-app/common/Tab';
import { Content } from 'dashboard-app/common/Wrapper';
import { UserType } from 'graphql-types/globalTypes';
import useFetchProfileInfoData from 'hooks/useFetchProfileInfoData';
import React, { useState } from 'react';
import CoverageInformation from './CoverageInformation';
import Dependant from './Dependant';

type TabNameType = 'Coverage Information' | 'Dependents';

const CoverageTabs: TabNameType[] = ['Coverage Information', 'Dependents'];

export interface CoverageProps {
  userType?: UserType;
}

const Coverage: React.FC<CoverageProps> = () => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('Coverage Information');
  const { profileInfos, fetchingOrError, loading } = useFetchProfileInfoData(currentTab);

  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);

  React.useEffect(() => setTitle('My Coverage'), []);

  return (
    <Content detailsPage>
      <TabWrapper>
        <Tab
          isMobile={isMobile}
          items={CoverageTabs}
          activeItem={currentTab}
          tabClick={(tab) => {
            setCurrentTab(tab as TabNameType);
          }}
        />
        <TabContent isHeaderFixed>
          {fetchingOrError && <LoaderOrError loading={loading} />}
          <RecordForm clear>
            {!fetchingOrError && currentTab === 'Dependents' && <Dependant data={profileInfos} />}
            {!fetchingOrError && currentTab === 'Coverage Information' && (
              <CoverageInformation data={profileInfos} />
            )}
          </RecordForm>
        </TabContent>
      </TabWrapper>
    </Content>
  );
};

export default Coverage;
