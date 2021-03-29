import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import {
  GET_PATIENT_SURGERY_LIST,
  ADD_PATIENT_SURGERY,
  GET_SURGERY,
  UPDATE_SURGERY,
  DELETE_SURGERY,
  ARCHIVE_SURGERY,
} from 'dashboard-app/queries/surgery';
import { RoutesVariable } from 'routes';
import SurgeryList from './SurgeryList';
import AddSurgery from './AddSurgery';

export interface SurgeryRoutesProps {
  userType?: UserType;
}

const SurgeryRoutes: React.FC<SurgeryRoutesProps> = ({ userType }) => {
  const surgeryQuery = GET_PATIENT_SURGERY_LIST;
  const queryVariables: RoutesVariable = {};
  const fetchQuery = GET_SURGERY;
  const addQuery = ADD_PATIENT_SURGERY;
  const updateQuery = UPDATE_SURGERY;
  const deleteQuery = DELETE_SURGERY;
  const archiveQuery = ARCHIVE_SURGERY;
  const cacheUpdateQuery = GET_PATIENT_SURGERY_LIST;
  const icon = 'Surgery';
  const pluralRecordType = 'surgeries';
  const isOnForm = false;

  const addFormParams = {
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    archiveQuery,
    fetchQuery,
    pluralRecordType,
    isOnForm,
  };

  const listPageHook = useListPageFilterOptions(
    surgeryQuery,
    'user.surgeries',
    queryVariables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/add`}>
        <AddSurgery userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddSurgery userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <SurgeryList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default SurgeryRoutes;
