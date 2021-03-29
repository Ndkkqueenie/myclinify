import { useState } from 'react';

export default (initialState) => {
  const [inputs, setInputs] = useState(initialState);

  const handleInputChange = (name, value) => setInputs({ ...inputs, [name]: value });

  const handleMultipleFieldsChange = (field: string, name: string, value: any, index: number) => {
    const newFields = JSON.parse(JSON.stringify([...inputs[field]]));
    newFields[index][name] = value;
    handleInputChange(field, newFields);
  };

  const clearInputs = () => setInputs(initialState);

  return {
    handleInputChange,
    handleMultipleFieldsChange,
    clearInputs,
    setInputs,
    inputs,
  };
};
