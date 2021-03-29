import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import {
  FETCH_ADMISSIONS,
  UPDATE_ADMISSION,
  ADD_ADMISSION,
  DELETE_ADMISSIONS,
  ARCHIVE_ADMISSIONS,
} from 'dashboard-app/queries/admission';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { RoutesVariable } from 'routes';
import AdmissionList from './AdmissionList';
import AddAdmission from './AddAdmission';

export interface AdmissionRoutesProps {
  userType?: UserType;
}

const AdmissionRoutes: React.FC<AdmissionRoutesProps> = ({ userType = UserType.Patient }) => {
  const variables: RoutesVariable = {};
  const fetchQuery = FETCH_ADMISSIONS;
  const addQuery = ADD_ADMISSION;
  const updateQuery = UPDATE_ADMISSION;
  const deleteQuery = DELETE_ADMISSIONS;
  const archiveQuery = ARCHIVE_ADMISSIONS;
  const cacheUpdateQuery = FETCH_ADMISSIONS;
  const icon = 'Admission';
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
    fetchQuery,
    'user.admissions',
    variables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddAdmission userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddAdmission userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <AdmissionList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default AdmissionRoutes;
