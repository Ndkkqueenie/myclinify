import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  canAccessPatientRoute,
  loggedIn,
  redirectPath,
  canAccessHospitalRoute,
  canAccessHmoRoute,
} from 'dashboard-app/utils/authTracker';
import NotFoundPage from 'dashboard-app/error-pages/404';
import PatientRoutes from './PatientRoutes';
import HMORoutes from './HMORoutes';
import LoginRoutes from '../dashboard-app/authentication/login/LoginRoutes';
import RegisterRoutes from '../dashboard-app/authentication/register/RegisterRoutes';
import HospitalRoutes from './HospitalRoutes';

import 'intersection-observer';

export interface RoutesVariable {
  isWaitingList?: boolean;
  toggleWaiterModal?: () => void;
}

const Routes: React.FC<any> = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/register"
          render={(props) =>
            loggedIn() ? (
              <Redirect to={{ pathname: redirectPath() }} />
            ) : (
              <RegisterRoutes {...props} />
            )
          }
        />
        <Route
          path="/login"
          render={(props) =>
            loggedIn() ? <Redirect to={{ pathname: redirectPath() }} /> : <LoginRoutes {...props} />
          }
        />
        <Route
          path="/patient"
          render={() =>
            canAccessPatientRoute() ? (
              <PatientRoutes />
            ) : (
              <Redirect to={{ pathname: '/login/patient' }} />
            )
          }
        />
        <Route
          path="/hmo"
          render={(props) =>
            canAccessHmoRoute() ? (
              <HMORoutes {...props} />
            ) : (
              <Redirect to={{ pathname: '/login/organization' }} />
            )
          }
        />
        <Route
          path="/hospital"
          render={(props) =>
            canAccessHospitalRoute() ? (
              <HospitalRoutes {...props} />
            ) : (
              <Redirect to={{ pathname: '/login/organization' }} />
            )
          }
        />
        <Route
          path="/"
          exact
          render={() =>
            loggedIn() ? (
              <Redirect to={{ pathname: redirectPath() }} />
            ) : (
              <Redirect to={{ pathname: '/login' }} />
            )
          }
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
