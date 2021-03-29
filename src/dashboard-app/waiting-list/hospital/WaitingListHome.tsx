import React from 'react';
import { Content } from 'dashboard-app/common/Wrapper';
import InsuranceBilling from './WaitingList';

export interface InsuranceBillingListHomeProps {
  frontDesk?: boolean;
}

const InsuranceBillingListHome: React.FC<InsuranceBillingListHomeProps> = ({ frontDesk }) => {
  return (
    <Content noPadding listPage>
      <InsuranceBilling />
    </Content>
  );
};

export default InsuranceBillingListHome;
