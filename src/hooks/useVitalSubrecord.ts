import { useMutation } from '@apollo/client';
import addRecordToLinearCache from 'apollo/cacheUpdate/addRecordToLinearCache';
import deleteRecordFromLinearCache from 'apollo/cacheUpdate/deleteRecordFromLinearCache';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import subVitalSectionParams from './constants/subVitalSectionParams';
import { useModal } from './useModal';
import useOnChange from './useOnChange';

type OnCompleteActionTypes = 'Updated' | 'Saved' | 'Deleted';

export default ({
  tab,
  input,
  parentRecordId,
  defaultOnChange,
  isEdit,
  remove,
  clinifyId,
}: {
  tab: string;
  parentRecordId: string;
  input: any;
  defaultOnChange: any;
  isEdit: boolean;
  remove: () => void;
  clinifyId?: string;
}) => {
  const { isShown: showDeleteModal, toggle: toggleModal } = useModal();
  const isNewRecordForm = !parentRecordId || !input?.id;
  const [startEdit, setStartEdit] = useState(isNewRecordForm);

  const toggleAllowEdit = () => setStartEdit(!startEdit);

  const { addToast } = useToasts();

  const onError = (error) => addToast(error.message, { appearance: 'error' });
  const onComplete = (action: OnCompleteActionTypes) =>
    addToast(`Record ${action} Successfully`, { appearance: 'success' });

  const {
    handleInputChange,
    handleMultipleFieldsChange,
    inputs,
    clearInputs,
    setInputs,
  } = useOnChange(input);

  let inputToSend = inputs;
  if (tab === 'Anthropometry')
    inputToSend = {
      ...inputs,
      height: parseFloat(inputs?.height),
      weight: parseFloat(inputs?.weight),
      waistCircumference: parseFloat(inputs?.waistCircumference),
      hipCircumference: parseFloat(inputs?.hipCircumference),
      skinfoldThickness: parseFloat(inputs?.skinfoldThickness),
      leftUpperLimbCircumference: parseFloat(inputs?.leftUpperLimbCircumference),
      rightUpperLimbCircumference: parseFloat(inputs?.rightUpperLimbCircumference),
    };

  const {
    fetchQuery,
    addQuery,
    deleteQuery,
    updateQuery,
    fetchPath,
    addPath,
    deletePath,
    updatePath,
  } = subVitalSectionParams[tab];

  const [addSubVital, { loading: addingMutating }] = useMutation(addQuery, {
    variables: {
      input: inputToSend,
      parentRecordId,
      clinifyId,
    },
    onError,
    onCompleted: (data) => {
      onComplete('Saved');
      setInputs(data[addPath]);
      toggleAllowEdit();
      remove();
    },
    update: (cache, { data }) =>
      addRecordToLinearCache({
        cache,
        data,
        dataPath: addPath,
        parentRecordId,
        cachePath: fetchPath,
        fetchQuery,
      }),
  });

  const [updateSubVital, { loading: updatingMutating }] = useMutation(updateQuery, {
    variables: {
      input: inputToSend,
      id: inputs?.id,
    },
    onError,
    onCompleted: (data) => {
      onComplete('Updated');
      toggleAllowEdit();
      setInputs(data[updatePath]);
    },
  });

  const [deleteSubVital, { loading: deletingMutating }] = useMutation(deleteQuery, {
    variables: {
      id: inputs?.id,
    },
    onError,
    onCompleted: () => onComplete('Deleted'),
    update: (cache, { data }) =>
      deleteRecordFromLinearCache({
        cache,
        data,
        dataPath: deletePath,
        parentRecordId,
        cachePath: fetchPath,
        fetchQuery,
      }),
  });

  const disableActionButton = deletingMutating || updatingMutating || addingMutating;
  const readOnly = isEdit && !startEdit;
  const handleChange = !isEdit ? defaultOnChange : handleInputChange;
  const inputsToUse = !isEdit ? input : inputs;
  const cancelAction = () => setStartEdit(false);

  let action: any = addSubVital;
  let actionText = 'Save';

  if (inputs?.id) {
    actionText = 'Edit';
    action = toggleAllowEdit;
  }

  const updatePossible = startEdit && input?.id;
  if (updatePossible) {
    actionText = 'Update';
    action = updateSubVital;
  }

  const toggle = input?.id ? toggleModal : remove;

  return {
    showDeleteModal,
    toggle,
    toggleAllowEdit,
    startEdit: updatePossible,
    setStartEdit,
    readOnly,
    disableActionButton,
    inputs: inputsToUse,
    deleteSubVital,
    action,
    actionText,
    cancelAction,
    handleInputChange: handleChange,
    handleMultipleFieldsChange,
  };
};
