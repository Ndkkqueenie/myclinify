import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Lookup from './Lookup';

export interface LookupProps {
  frontDesk?: any;
}

const LookupRoutes: React.FC<LookupProps> = ({ frontDesk }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <Lookup frontDesk={frontDesk} />
      </Route>
    </Switch>
  );
};

export default LookupRoutes;
