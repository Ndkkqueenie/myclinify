import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE_DETAILS } from 'dashboard-app/queries/user';
import errorHandler from 'dashboard-app/utils/errorHandler';
import upload from 'dashboard-app/utils/upload';
import { useToasts } from 'react-toast-notifications';

export default () => {
  const { addToast } = useToasts();
  const [changeProfilePic] = useMutation(UPDATE_PROFILE_DETAILS, {
    onCompleted: () => addToast('Profile Picture Changed Successfully', { appearance: 'success' }),
    onError: (error) => addToast(errorHandler(error), { appearance: 'error' }),
  });

  const changePicture = async (event) => {
    try {
      const response = await upload(event, 'avatar');
      const uploadedImage = response?.data?.data.map(({ url }) => url)[0];
      changeProfilePic({
        variables: {
          input: {
            personalInformation: { displayPictureUrl: uploadedImage },
          },
        },
      });
    } catch (error) {
      addToast('Error Occured Trying To Upload', { appearance: 'error' });
    }
  };

  return {
    changePicture,
  };
};
