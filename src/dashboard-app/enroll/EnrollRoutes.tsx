import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Enroll from './Enroll';
import EnrollmentList from './EnrollmentList';

export interface EnrollRoutesProps {}

const EnrollRoutes: React.FC<EnrollRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <EnrollmentList />
      </Route>
      <Route path={`${match.path}/:id`}>
        <Enroll />
      </Route>
    </Switch>
  );
};

export default EnrollRoutes;
