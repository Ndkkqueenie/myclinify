import { useMutation } from '@apollo/client';
import { DELETE_MY_HMO } from 'dashboard-app/queries/hmos';
import errorHandler from 'dashboard-app/utils/errorHandler';
import { useToasts } from 'react-toast-notifications';
import { useModal } from './useModal';

export default () => {
  const { isShown: showDeleteModal, toggle } = useModal();
  const { addToast } = useToasts();

  const [deleteHmo, { loading: deletingHmo }] = useMutation(DELETE_MY_HMO, {
    onCompleted: () => {
      addToast('Coverage Information Deleted Successfully', { appearance: 'success' });
      toggle();
    },
    onError: (error) => addToast(errorHandler(error), { appearance: 'error' }),
  });

  const deleteAction = (id: string, updateAction: any) =>
    deleteHmo({ variables: { id }, update: () => updateAction() });

  return {
    deleteAction,
    deletingHmo,
    showDeleteModal,
    toggle,
  };
};
