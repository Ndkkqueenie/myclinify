import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import {
  FETCH_APPOINTMENTS,
  ADD_APPOINTMENT,
  UPDATE_APPOINTMENT,
  DELETE_APPOINTMENT,
  ARCHIVE_APPOINTMENT,
} from 'dashboard-app/queries/appointment';
import { RoutesVariable } from 'routes';
import AppointmentList from './AppointmentList';
import AddAppointment from './AddAppointment';

export interface AppointmentRoutesProps {
  userType?: UserType;
}

const AppointmentRoutes: React.FC<AppointmentRoutesProps> = ({ userType = UserType.Patient }) => {
  const variables: RoutesVariable = {};
  const appointmentQuery = FETCH_APPOINTMENTS;

  const fetchQuery = FETCH_APPOINTMENTS;
  const addQuery = ADD_APPOINTMENT;
  const updateQuery = UPDATE_APPOINTMENT;
  const deleteQuery = DELETE_APPOINTMENT;
  const archiveQuery = ARCHIVE_APPOINTMENT;
  const cacheUpdateQuery = FETCH_APPOINTMENTS;
  const icon = 'Appointment';
  const isOnForm = false;

  const addFormParams = {
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    archiveQuery,
    fetchQuery,
    isOnForm,
  };

  const listPageHook = useListPageFilterOptions(
    appointmentQuery,
    'user.appointments',
    variables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddAppointment filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddAppointment filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <AppointmentList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default AppointmentRoutes;
