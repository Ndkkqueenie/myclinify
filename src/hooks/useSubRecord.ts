import { useMutation } from '@apollo/client';
import cache from 'apollo/cache';
import addRecordToLinearCache from 'apollo/cacheUpdate/addRecordToLinearCache';
import deleteRecordFromLinearCache from 'apollo/cacheUpdate/deleteRecordFromLinearCache';
import { GET_USER } from 'dashboard-app/queries/user';
import errorHandler from 'dashboard-app/utils/errorHandler';
import { DispenseDetailsInput } from 'graphql-types/globalTypes';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useModal } from './useModal';

export default ({
  updateQuery,
  deleteQuery,
  saveQuery,
  clearAction,
  isEdit,
  defaultWrite,
  onSaveAction,
  onSavePath,
  onUpdatePath,
  onDeletePath,
  parentRecordId,
  fetchPath,
  fetchQuery,
}) => {
  const { addToast } = useToasts();
  const { isShown: showDeleteModal, toggle } = useModal();

  const [startEdit, setStartEdit] = useState(isEdit && defaultWrite);

  const onError = (error) => addToast(errorHandler(error), { appearance: 'error' });
  const [updateAction, { loading: updating }] = useMutation(updateQuery, {
    onCompleted: (data) => {
      onSaveAction(data[onUpdatePath]);
      setStartEdit(false);
      addToast('Record Updated Successfully', { appearance: 'success' });
    },
    onError,
  });

  const [deleteAction, { loading: deleting }] = useMutation(deleteQuery, {
    onCompleted: () => {
      clearAction();
      setStartEdit(false);
      addToast('Delete Successful', { appearance: 'success' });
      toggle();
    },
    onError,
  });

  const [saveAction, { loading: saving }] = useMutation(saveQuery, {
    onCompleted: (data) => {
      onSaveAction(data[onSavePath]);
      setStartEdit(false);
      addToast('Record Saved Successfully', { appearance: 'success' });
    },
    onError,
  });

  let clinifyId = '';
  try {
    const cacheData: any = cache.readQuery({ query: GET_USER });
    clinifyId = cacheData?.user?.defaultProfile?.clinifyId;
  } catch (error) {
    clinifyId = '';
  }

  const save = (id: string, input: DispenseDetailsInput) =>
    saveAction({ variables: { id, input, clinifyId } });

  const update = (id: string, input: any) => {
    updateAction({ variables: { input, id } });
  };

  const remove = (id) => deleteAction({ variables: { id } });

  let actionText = 'Save';
  let action: any = update;

  if (isEdit) {
    actionText = 'Edit';
    action = () => setStartEdit(true);
  }

  if (startEdit) {
    actionText = 'Update';
    action = (id: string, input: DispenseDetailsInput) => update(id, input);
  }

  const writeAllowed = startEdit || !isEdit;
  const readOnly = !startEdit && isEdit;

  const loading = updating || deleting || saving;

  return {
    update,
    remove,
    save,
    loading,
    startEdit,
    setStartEdit,
    showDeleteModal,
    toggle,
    actionText,
    action,
    readOnly,
    writeAllowed,
  };
};
