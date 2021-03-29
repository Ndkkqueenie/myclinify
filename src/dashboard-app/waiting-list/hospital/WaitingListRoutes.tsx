import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InsuranceBillingListHome from './WaitingListHome';

export interface InsuranceBillingRoutesProps {
  frontDesk?: any;
}

const InsuranceBillingRoutes: React.FC<InsuranceBillingRoutesProps> = ({ frontDesk }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <InsuranceBillingListHome frontDesk={frontDesk} />
      </Route>
    </Switch>
  );
};

export default InsuranceBillingRoutes;
