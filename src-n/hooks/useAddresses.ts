import { useState, useCallback } from 'react';

import debounce from 'lodash.debounce';

export default (google) => {
  const [suggestions, setSuggestions] = useState([]);
  const [fetching, setFetching] = useState(false);

  const displaySuggestions = (predictions: any, status: any) => {
    if (status !== google?.maps?.places?.PlacesServiceStatus?.OK) {
      return setFetching(false);
    }
    const addresses = predictions.map((prediction) => prediction.description);
    setSuggestions(addresses);
    setFetching(false);
  };

  const fetchAddresses = useCallback(
    debounce((value: any) => {
      if (!value) return;
      if (value.length > 2) {
        setFetching(true);
        const autoCompleteService = new google.maps.places.AutocompleteService();
        autoCompleteService.getPlacePredictions({ input: value }, displaySuggestions);
      }
    }, 500),
    [],
  );

  const loading = fetching && suggestions.length === 0;

  return {
    suggestions,
    fetchAddresses,
    loading,
  };
};
