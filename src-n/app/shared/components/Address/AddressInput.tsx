import React, { FC } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import useAddresses from '../../../../hooks/useAddresses';
import InputDropdown from '../Dropdown/InputDropdown';

interface AddressSuggestionsProps {
  google: any;
  placeholder: string;
  value?: string | null;
  readOnly?: boolean;
  fieldPath: string;
  label: string;
  handleInputChange: (fieldPath: string, value: string) => void;
}

const AddressSuggestions: FC<AddressSuggestionsProps> = ({
  google,
  placeholder,
  value,
  readOnly,
  fieldPath,
  label,
  handleInputChange,
}) => {
  const { suggestions, fetchAddresses, loading } = useAddresses(google);

  return (
    <div className="suggestions-wrapper">
      <InputDropdown
        readOnly={readOnly}
        fieldPath={fieldPath}
        loading={loading}
        label={label}
        placeholder={placeholder}
        handleInputChange={(_fieldPath, _value) => {
          handleInputChange(_fieldPath, _value);
          fetchAddresses(value);
        }}
        options={suggestions}
        value={value || ''}
        fullWidth
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY || '',
  LoadingContainer: null,
})(AddressSuggestions);
