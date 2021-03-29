import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PatientRegistration from './PatientRegistration';

export interface PatientRegistrationProps {
  frontDesk?: any;
}

const PatientRegistrationRoutes: React.FC<PatientRegistrationProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <PatientRegistration />
      </Route>
    </Switch>
  );
};

export default PatientRegistrationRoutes;
