import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { UserType } from 'graphql-types/globalTypes';
import {
  GET_PATIENT_ALLERGY_LIST,
  ADD_PATIENT_ALLERGY,
  UPDATE_PATIENT_ALLERGY,
  DELETE_PATIENT_ALLERGY,
  GET_PATIENT_ALLERGY,
  ARCHIVE_ALLERGY,
} from 'dashboard-app/queries/allergy';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import { RoutesVariable } from 'routes';
import AddAllergy from './AddAllergy';
import AllergyList from './AllergyList';

export interface AllergyRoutesProps {
  userType?: UserType;
}

const AllergyRoutes: React.FC<AllergyRoutesProps> = ({ userType = UserType.Patient }) => {
  const variables: RoutesVariable = {};
  const allergyQuery = GET_PATIENT_ALLERGY_LIST;

  const fetchQuery = GET_PATIENT_ALLERGY;
  const addQuery = ADD_PATIENT_ALLERGY;
  const updateQuery = UPDATE_PATIENT_ALLERGY;
  const deleteQuery = DELETE_PATIENT_ALLERGY;
  const archiveQuery = ARCHIVE_ALLERGY;
  const cacheUpdateQuery = GET_PATIENT_ALLERGY_LIST;
  const icon = 'Allergy';
  const isOnForm = false;
  const pluralRecordType = 'allergies';

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
    allergyQuery,
    'user.allergies',
    variables,
    null,
    addFormParams,
  );
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact>
        <AddAllergy userType={userType} filterOptions={listPageHook.filterOptions} />
      </Route>
      <Route path={`${match.path}/:id`}>
        <AddAllergy filterOptions={listPageHook.filterOptions} userType={userType} />
      </Route>
      <Route path={`${match.path}`}>
        <AllergyList userType={userType} listPageHook={listPageHook} />
      </Route>
    </Switch>
  );
};

export default AllergyRoutes;
