import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import {
  FETCH_PATIENT_CONSULTATIONS,
  ADD_CONSULTATION,
  UPDATE_CONSULTATION,
  DELETE_CONSULTATION,
  ARCHIVE_CONSULTATION,
} from 'dashboard-app/queries/consultation';
import { RoutesVariable } from 'routes';
import ConsultationList from './ConsultationList';
import AddConsultation from './AddConsultation';

export interface ConsultationRoutesProps {
  userType?: UserType;
}

const ConsultationRoutes: React.FC<ConsultationRoutesProps> = ({ userType }) => {
  const variables: RoutesVariable = {};
  const consultationQuery = FETCH_PATIENT_CONSULTATIONS;

  const fetchQuery = FETCH_PATIENT_CONSULTATIONS;
  const addQuery = ADD_CONSULTATION;
  const updateQuery = UPDATE_CONSULTATION;
  const deleteQuery = DELETE_CONSULTATION;
  const archiveQuery = ARCHIVE_CONSULTATION;
  const cacheUpdateQuery = FETCH_PATIENT_CONSULTATIONS;
  const icon = 'Consultation';
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
    consultationQuery,
    'user.consultations',
    variables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddConsultation userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddConsultation userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <ConsultationList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default ConsultationRoutes;
