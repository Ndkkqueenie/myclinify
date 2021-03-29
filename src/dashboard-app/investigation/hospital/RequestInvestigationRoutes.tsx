import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RequestInvestigationHome from './RequestInvestigationListHome';
import AddRequestInvestigation from './AddRequestInvestigation';

export interface RequestInvestigationRoutesProps {}

const RequestInvestigationRoutes: React.FC<RequestInvestigationRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <RequestInvestigationHome />
      </Route>
      <Route path={`${match.path}/add`}>
        <AddRequestInvestigation />
      </Route>
    </Switch>
  );
};

export default RequestInvestigationRoutes;
