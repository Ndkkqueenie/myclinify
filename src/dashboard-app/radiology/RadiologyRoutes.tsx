import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import {
  GET_PATIENT_RADIOLOGY_LIST,
  GET_RADIOLOGY,
  ADD_RADIOLOGY,
  UPDATE_RADIOLOGY,
  DELETE_RADIOLOGY,
  ARCHIVE_RADIOLOGY,
} from 'dashboard-app/queries/radiology';
import { RoutesVariable } from 'routes';
import RadiologyList from './RadiologyList';
import AddRadiology from './AddRadiology';

export interface RadiologyRoutesProps {
  userType?: UserType;
}

const RadiologyRoutes: React.FC<RadiologyRoutesProps> = ({ userType }) => {
  const variables: RoutesVariable = {};
  const radiologyQuery = GET_PATIENT_RADIOLOGY_LIST;
  const fetchQuery = GET_RADIOLOGY;
  const addQuery = ADD_RADIOLOGY;
  const updateQuery = UPDATE_RADIOLOGY;
  const deleteQuery = DELETE_RADIOLOGY;
  const archiveQuery = ARCHIVE_RADIOLOGY;
  const cacheUpdateQuery = GET_PATIENT_RADIOLOGY_LIST;
  const icon = 'Radiology';
  const pluralRecordType = 'radiology';
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
    pluralRecordType,
  };

  const listPageHook = useListPageFilterOptions(
    radiologyQuery,
    'user.radiology',
    variables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddRadiology userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddRadiology userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <RadiologyList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default RadiologyRoutes;
