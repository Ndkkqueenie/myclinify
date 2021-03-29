import { useMutation, useQuery } from '@apollo/client';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { GET_USER, UPDATE_PROFILE_DETAILS } from '../dashboard-app/queries/user';
import useOnChange from './useOnChange';

export default ({ section, initialState, tab = 'Personal Information', blank = false }) => {
  const { addToast } = useToasts();
  const [allowEdit, setAllowEdit] = useState(false);
  const [actionText, setActionText] = useState('Update');

  const { handleInputChange, setInputs, inputs } = useOnChange(initialState);

  const toggleAllowEdit = () => setAllowEdit(!allowEdit);

  const { loading: fetchingUserData, error: errorFetching, data } = useQuery(GET_USER, {
    onCompleted: () => generateData(),
    variables: {
      id: JSON.parse(sessionStorage.getItem('patientDetails') || '{}').id,
    },
    skip: blank,
  });

  const generateData = (path = section, defaultData = initialState) => {
    const newEditData = data?.user?.defaultProfile[path] || {};
    const noData = !Object.keys(newEditData).length;
    if (noData) {
      setActionText('Save');
      setAllowEdit(true);
      setInputs(defaultData);
    } else {
      setActionText('Update');
      setAllowEdit(false);
      setInputs(newEditData);
    }
  };

  const [updateProfileDetails, { loading: updating }] = useMutation(UPDATE_PROFILE_DETAILS, {
    onCompleted: () => {
      toggleAllowEdit();
      addToast(`${tab} Details ${actionText}d Successfully`, {
        appearance: 'success',
      });
    },
    onError: () => addToast('An Error Occured', { appearance: 'error' }),
    variables: {
      input: { [section]: inputs },
    },
  });

  const readOnly = !allowEdit;

  const disabled = updating || !fieldsAreValid(section, inputs);

  return {
    data,
    updateProfileDetails,
    disabled,
    handleInputChange,
    generateData,
    fetchingUserData,
    errorFetching,
    readOnly,
    inputs,
    toggleAllowEdit,
    actionText,
  };
};
