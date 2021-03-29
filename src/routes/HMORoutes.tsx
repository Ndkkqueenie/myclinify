import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AuthorizationRoutes from 'dashboard-app/authorization/AuthorizationRoutes';
import EnrollRoutes from 'dashboard-app/enroll/EnrollRoutes';
import ClaimsRoutes from 'dashboard-app/claims/ClaimsRoutes';

export interface HMORoutesProps {}

const HMORoutes: React.FC<HMORoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/enrollment`}>
          <EnrollRoutes />
        </Route>
        <Route path={`${match.path}/authorization`}>
          <AuthorizationRoutes />
        </Route>
        <Route path={`${match.path}/claims`}>
          <ClaimsRoutes isHmo />
        </Route>
      </Switch>
    </div>
  );
};

export default HMORoutes;
