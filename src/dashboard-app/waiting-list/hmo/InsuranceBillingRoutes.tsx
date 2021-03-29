import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InsuranceBillingList from './InsuranceBillingList';

export interface InsuranceBillingRoutesProps {}

const InsuranceBillingRoutes: React.FC<InsuranceBillingRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <InsuranceBillingList />
      </Route>
    </Switch>
  );
};

export default InsuranceBillingRoutes;
