import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RegisterUser from './RegisterUser';

export interface RegisterRoutesProps {}
const RegisterRoutes: React.FC<RegisterRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/`}>
        <RegisterUser />
      </Route>
    </Switch>
  );
};

export default RegisterRoutes;
