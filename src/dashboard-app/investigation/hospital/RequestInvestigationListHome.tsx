import React from 'react';
import { Content } from 'dashboard-app/common/Wrapper';
import RequestInvestigation from './RequestInvestigationList';

export interface RequestInvestigationListHomeProps {}

const RequestInvestigationListHome: React.FC<RequestInvestigationListHomeProps> = () => {
  return (
    <Content noPadding listPage>
      <RequestInvestigation />
    </Content>
  );
};

export default RequestInvestigationListHome;
