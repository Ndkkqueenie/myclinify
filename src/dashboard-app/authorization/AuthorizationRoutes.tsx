import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AuthorizationList from './AuthorizationList';

export interface AuthorizationRoutesProps {}

const AuthorizationRoutes: React.FC<AuthorizationRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <AuthorizationList />
      </Route>
    </Switch>
  );
};

export default AuthorizationRoutes;
