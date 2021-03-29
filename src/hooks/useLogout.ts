import { useApolloClient } from '@apollo/client';
import { setAppData } from 'apollo/operations';
import { useHistory } from 'react-router-dom';

const useLogout = () => {
  const history = useHistory();
  const cache = useApolloClient();

  const logOut = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('patientDetails');
    setAppData({ patientIsSelected: false });
    cache.clearStore();
    history.push('/login');
  };

  return { logOut };
};

export default useLogout;
