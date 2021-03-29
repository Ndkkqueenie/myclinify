import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InvestigationList from './InvestigationList';

export interface InvestigationRoutesProps {}

const InvestigationRoutes: React.FC<InvestigationRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <InvestigationList />
      </Route>
    </Switch>
  );
};

export default InvestigationRoutes;
