import { useMutation } from '@apollo/client';
import { SAVE_HMO } from 'dashboard-app/queries/hmos';
import { HmoProfileInput } from 'graphql-types/globalTypes';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

export default (clearAction: () => void = () => {}) => {
  const { addToast } = useToasts();
  const [actionType, setActionType] = useState<string>('Saved');

  const [addHmo, { loading }] = useMutation(SAVE_HMO, {
    onCompleted: () => {
      addToast(`Coverage Information Details ${actionType} Successfully`, {
        appearance: 'success',
      });
      clearAction();
    },
    onError: () => addToast('An Error Occured', { appearance: 'error' }),
  });

  const addHmoAction = (input: HmoProfileInput[], updateAction: any = () => {}) =>
    addHmo({
      variables: { hmoProfileInput: input },
      update: (_, { data: { saveMyHmos } }) => {
        updateAction(saveMyHmos);
      },
    });

  return {
    addHmoAction,
    loading,
    setActionType,
  };
};
