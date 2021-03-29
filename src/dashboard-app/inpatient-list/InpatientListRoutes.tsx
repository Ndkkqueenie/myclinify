import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InpatientListList from './InpatientList';

export interface InpatientListRoutesProps {}

const InpatientListRoutes: React.FC<InpatientListRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <InpatientListList />
      </Route>
    </Switch>
  );
};

export default InpatientListRoutes;
