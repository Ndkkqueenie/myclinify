import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { baseUrl } from 'index';

export default () => {
  const [results, setResults] = useState([]);
  const [fetching, setFetching] = useState(false);

  const getToken = async () => {
    const response = await axios({
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      url: `${baseUrl}/integrations/icd`,
    });
    sessionStorage.setItem('icdToken', response?.data?.accessToken || '');
  };

  useEffect(() => {
    if (!sessionStorage.getItem('icdToken')) getToken();
  }, []);

  const search = useCallback(
    debounce(async (input: string) => {
      try {
        if (input.length < 3) return;
        setFetching(true);
        const response = await axios({
          method: 'POST',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('icdToken')}`,
            'API-Version': 'v2',
            'Accept-Language': 'en',
          },
          url: `https://id.who.int/icd/release/11/2020-09/mms/search?q=${input}%&flatResults=false&includeKeywordResult=true`,
        });

        setResults(
          response.data.destinationEntities.map(({ title, theCode }) => ({
            code: theCode,
            title: title.replace(/(<([^>]+)>)/gi, ''),
          })),
        );
        setFetching(false);
      } catch (error) {
        setFetching(false);
        if (error.response.status === 401) getToken();
      }
    }, 500),
    [],
  );

  const loading = fetching && results.length === 0;
  return { search, results, loading };
};
