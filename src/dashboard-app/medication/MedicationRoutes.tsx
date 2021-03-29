import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import {
  GET_PATIENT_MEDICATION_LIST,
  GET_PATIENT_MEDICATION,
  ADD_PATIENT_MEDICATION,
  UPDATE_PATIENT_MEDICATION,
  DELETE_PATIENT_MEDICATION,
  ARCHIVE_PATIENT_MEDICATION,
} from 'dashboard-app/queries/medication';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { RoutesVariable } from 'routes';
import MedicationList from './MedicationList';
import AddMedication from './AddMedication';

export interface MedicationRoutesProps {
  userType?: UserType;
}

const MedicationRoutes: React.FC<MedicationRoutesProps> = ({ userType }) => {
  const variables: RoutesVariable = {};
  const medicationQuery = GET_PATIENT_MEDICATION_LIST;
  const fetchQuery = GET_PATIENT_MEDICATION;
  const addQuery = ADD_PATIENT_MEDICATION;
  const updateQuery = UPDATE_PATIENT_MEDICATION;
  const deleteQuery = DELETE_PATIENT_MEDICATION;
  const cacheUpdateQuery = GET_PATIENT_MEDICATION_LIST;
  const archiveQuery = ARCHIVE_PATIENT_MEDICATION;
  const icon = 'Medication';
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
    medicationQuery,
    'user.medications',
    variables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddMedication userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddMedication userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}`}>
        <MedicationList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default MedicationRoutes;
