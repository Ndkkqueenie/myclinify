import { useEffect, useState } from 'react';

export default (items, loading = true) => {
  const [isInitialFetch, setIsInitialFetch] = useState(true);

  useEffect(() => {
    if ((items.length > 0 && isInitialFetch) || (items.length === 0 && !loading && isInitialFetch))
      setIsInitialFetch(false);
  }, [items, loading]); // eslint-disable-line

  return {
    isInitialFetch,
  };
};
