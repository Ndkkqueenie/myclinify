import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import {
  GET_IMMUNIZATIONS,
  ADD_IMMUNIZATION,
  GET_IMMUNIZATION,
  UPDATE_IMMUNIZATION,
  DELETE_IMMUNIZATION,
  ARCHIVE_IMMUNIZATION,
} from 'dashboard-app/queries/immunization';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { RoutesVariable } from 'routes';
import ImmunizationList from './ImmunizationList';
import AddImmunization from './AddImmunization';

export interface ImmunizationRoutesProps {
  userType?: UserType;
}

const ImmunizationRoutes: React.FC<ImmunizationRoutesProps> = ({ userType }) => {
  const immunizationQuery = GET_IMMUNIZATIONS;
  const queryVariables: RoutesVariable = {};

  const fetchQuery = GET_IMMUNIZATION;
  const addQuery = ADD_IMMUNIZATION;
  const updateQuery = UPDATE_IMMUNIZATION;
  const deleteQuery = DELETE_IMMUNIZATION;
  const archiveQuery = ARCHIVE_IMMUNIZATION;
  const cacheUpdateQuery = GET_IMMUNIZATIONS;
  const icon = 'Immunization';
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
    immunizationQuery,
    'user.immunizations',
    queryVariables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddImmunization userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddImmunization userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <ImmunizationList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default ImmunizationRoutes;
