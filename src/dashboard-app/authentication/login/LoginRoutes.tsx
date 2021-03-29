import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LoginHome from './LoginHome';
import LoginUser from './LoginUser';
import LoginOrganization from './LoginOrganization';

export interface LoginRoutesProps {}

const LoginRoutes: React.FC<LoginRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/patient`}>
        <LoginUser />
      </Route>
      <Route path={`${match.path}/organization`}>
        <LoginOrganization />
      </Route>
      <Route path={`${match.path}`}>
        <LoginHome />
      </Route>
    </Switch>
  );
};

export default LoginRoutes;
