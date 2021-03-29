import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AddClaim from 'dashboard-app/claims/AddClaim';
import ClaimSummaryList from './ClaimSummary';

export interface ClaimsRoutesProps {
  isHmo?: boolean;
}

const ClaimsRoutes: React.FC<ClaimsRoutesProps> = ({ isHmo }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/add`}>
        <AddClaim />
      </Route>
      <Route path={`${match.path}`}>{!isHmo ? <ClaimSummaryList /> : <ClaimSummaryList />}</Route>
    </Switch>
  );
};

export default ClaimsRoutes;
