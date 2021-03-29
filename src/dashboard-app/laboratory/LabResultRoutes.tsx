import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import {
  GET_PATIENT_LAB_TEST_LIST,
  GET_LAB_TEST,
  ADD_PATIENT_LAB_TEST,
  UPDATE_LAB_TEST,
  DELETE_LAB_TEST,
  ARCHIVE_LAB_TESTS,
} from 'dashboard-app/queries/lab-test';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { RoutesVariable } from 'routes';
import LabResultList from './LabResultList';
import AddLabResult from './AddLabResult';

export interface LabResultRoutesProps {
  userType?: UserType;
}

const LabResultRoutes: React.FC<LabResultRoutesProps> = ({ userType }) => {
  const laboratoryQuery = GET_PATIENT_LAB_TEST_LIST;
  const queryVariables: RoutesVariable = {};
  const fetchQuery = GET_LAB_TEST;
  const addQuery = ADD_PATIENT_LAB_TEST;
  const updateQuery = UPDATE_LAB_TEST;
  const deleteQuery = DELETE_LAB_TEST;
  const archiveQuery = ARCHIVE_LAB_TESTS;
  const cacheUpdateQuery = GET_PATIENT_LAB_TEST_LIST;
  const icon = 'LabTest';
  const isOnForm = false;
  const pluralRecordType = 'lab_tests';

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
    laboratoryQuery,
    'user.lab_tests',
    queryVariables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddLabResult userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddLabResult userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <LabResultList listPageHook={listPageHook} userType={userType} />
      </Route>
    </Switch>
  );
};

export default LabResultRoutes;
