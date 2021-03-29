import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FILTER_INPUT } from 'dashboard-app/utils/constants';
import { UserType } from 'graphql-types/globalTypes';
import {
  GET_PATIENT_VITAL_SIGNS_LIST,
  GET_VITAL_SIGN,
  ADD_VITAL_SIGNS,
  UPDATE_VITAL_SIGNS,
  DELETE_VITAL_SIGNS,
  ARCHIVE_VITAL_SIGNS,
} from 'dashboard-app/queries/vital-signs';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { RoutesVariable } from 'routes';
import VitalSignList from './VitalSignList';
import AddVitalSigns from './AddVitalSigns';

export interface VitalSignsRoutesProps {
  userType?: UserType;
}

const VitalSignsRoutes: React.FC<VitalSignsRoutesProps> = ({ userType }) => {
  const filterOptions = {
    ...FILTER_INPUT,
  };
  const variables: RoutesVariable = {};
  const vitalQuery = GET_PATIENT_VITAL_SIGNS_LIST;
  const fetchQuery = GET_VITAL_SIGN;
  const addQuery = ADD_VITAL_SIGNS;
  const updateQuery = UPDATE_VITAL_SIGNS;
  const deleteQuery = DELETE_VITAL_SIGNS;
  const cacheUpdateQuery = GET_PATIENT_VITAL_SIGNS_LIST;
  const archiveQuery = ARCHIVE_VITAL_SIGNS;
  const icon = 'Vital';
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
    vitalQuery,
    'user.vitals',
    variables,
    filterOptions,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddVitalSigns
          filterOptions={listPageHook.filterOptions}
          setFilterOptions={listPageHook.setFilterOptions}
          userType={userType}
        />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddVitalSigns
          filterOptions={listPageHook.filterOptions}
          setFilterOptions={listPageHook.setFilterOptions}
          userType={userType}
        />
      </Route>
      <Route path={`${match.path}`}>
        <VitalSignList listPageHook={listPageHook} userType={userType} />
      </Route>
    </Switch>
  );
};

export default VitalSignsRoutes;
