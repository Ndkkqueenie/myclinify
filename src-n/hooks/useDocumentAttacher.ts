import upload from 'dashboard-app/utils/upload';
import { useState } from 'react';

export default () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleUpload = async (event, handleInputChange, initialFiles, uploadPath) => {
    try {
      setUploading(true);
      const response = await upload(event, uploadPath);
      const documents = response?.data?.data.map(({ url }) => url);
      const newDocuments = [...documents, ...initialFiles];
      handleInputChange('documentUrl', newDocuments);
      setUploading(false);
    } catch (error) {
      setErrorMessage('an error occured, please try again');
      setUploading(false);
    }
  };

  return {
    handleUpload,
    uploading,
    errorMessage,
  };
};
