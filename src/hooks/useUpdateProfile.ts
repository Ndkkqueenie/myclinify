import { useMutation } from '@apollo/client';
import addRecordToLinearPaginatedCache from 'apollo/cacheUpdate/addRecordToLinearPaginatedRecordCache';
import deleteRecordFromLinearPaginatedRecordCache from 'apollo/cacheUpdate/deleteRecordFromLinearPaginatedCache';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import profileSectionParams, {
  PROFILE_INFOS_FILTER_OPTIONS,
} from './constants/profileSectionParams';
import { useModal } from './useModal';
import useOnChange from './useOnChange';

type OnCompleteActionTypes = 'Updated' | 'Saved' | 'Deleted';

type TabNameType =
  | 'Pre-existing Condition'
  | 'Past Surgical History'
  | 'Gynecologic History'
  | 'Obstetric History'
  | 'Family History'
  | 'Social History'
  | 'Physical Activity'
  | 'Disability'
  | 'Past Encounters'
  | 'Next of Kin'
  | 'Background Information'
  | 'Personal Information'
  | 'Coverage Information'
  | 'Dependents';

export default ({
  tab = 'Pre-existing Condition',
  index,
  input,
}: {
  tab: TabNameType;
  index: number;
  input: any;
}) => {
  const { isShown: showDeleteModal, toggle } = useModal();

  const isAddForm = index === 0;
  const [startEdit, setStartEdit] = useState(isAddForm);

  const toggleAllowEdit = () => setStartEdit(!startEdit);

  const { addToast } = useToasts();

  const {
    handleInputChange,
    handleMultipleFieldsChange,
    inputs,
    clearInputs,
    setInputs,
  } = useOnChange(input);

  const onError = (error) => addToast(error.message, { appearance: 'error' });
  const onComplete = (action: OnCompleteActionTypes) =>
    addToast(`${tab} Details ${action} Successfully`, { appearance: 'success' });

  const {
    fetchQuery,
    addQuery,
    deleteQuery,
    updateQuery,
    fetchPath,
    addPath,
    deletePath,
    updatePath,
  } = profileSectionParams[tab];

  const [addProfileInfo, { loading: addingMutating, error: addingError }] = useMutation(addQuery, {
    variables: {
      input: inputs,
    },
    onError,
    onCompleted: () => {
      onComplete('Saved');
      clearInputs();
    },
    update: (cache, { data }) =>
      addRecordToLinearPaginatedCache({
        cache,
        data,
        dataPath: addPath,
        filterInput: PROFILE_INFOS_FILTER_OPTIONS,
        cachePath: fetchPath,
        fetchQuery,
      }),
  });

  const [updateProfileInfo, { loading: updatingMutating, error: updatingError }] = useMutation(
    updateQuery,
    {
      variables: {
        input: inputs,
        id: inputs?.id,
      },
      onError,
      onCompleted: (data) => {
        onComplete('Updated');
        toggleAllowEdit();
        setInputs(data[updatePath]);
      },
    },
  );

  const [deleteProfileInfo, { loading: deletingMutating, error: deletingError }] = useMutation(
    deleteQuery,
    {
      variables: {
        id: inputs?.id,
      },
      onError,
      onCompleted: () => onComplete('Deleted'),
      update: (cache, { data }) =>
        deleteRecordFromLinearPaginatedRecordCache({
          cache,
          data,
          dataPath: deletePath,
          filterInput: PROFILE_INFOS_FILTER_OPTIONS,
          cachePath: fetchPath,
          fetchQuery,
        }),
    },
  );

  const disabled = deletingMutating || updatingMutating || addingMutating;
  const error = deletingError || updatingError || addingError;
  const readOnly = !startEdit;
  const updateAction = isAddForm ? addProfileInfo : updateProfileInfo;

  return {
    showDeleteModal,
    toggle,
    toggleAllowEdit,
    readOnly,
    mutationLoading: false,
    disabled,
    error,
    inputs,
    deleteProfileInfo,
    updateProfileInfo,
    addProfileInfo,
    updateAction,
    handleInputChange,
    handleMultipleFieldsChange,
  };
};
