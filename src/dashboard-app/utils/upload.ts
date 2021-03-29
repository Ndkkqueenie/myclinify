import Axios from 'axios';
import FormData from 'form-data';
import { baseUrl } from 'index';

export default async (event, uploadPath) => {
  const data = new FormData();
  const numberOfFiles = event.target.files.length;
  for (let i = 0; i < numberOfFiles; i++) {
    data.append('files', event.target.files[i]);
  }
  data.append('type', uploadPath);

  const response = await Axios({
    url: `${baseUrl}/integrations/cloudinary`,
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')} `,
    },
  });

  return response;
};
