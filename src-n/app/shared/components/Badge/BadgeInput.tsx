import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import Asterisks from '../icons/Asterisks';
import 'badgeInput.scss';
import customStyles, { theme } from '../styled-components/react-select.styles';
import { StyledLabel } from '../Text/TextInput';

interface BadgeInputProps {
  name: string;
  placeholder: string;
  title: string;
  fullWidth?: boolean;
  isRequired?: boolean;
  readOnly?: boolean;
  onChange: (values: string[]) => void;
  values: string[];
}

const BadgeInput: React.FC<BadgeInputProps> = ({
  title,
  placeholder,
  isRequired,
  values = [],
  onChange,
  readOnly,
}) => {
  const [currentText, setCurrentText] = useState<string>('');

  const createTagInput = () => {
    onChange([...values, currentText]);
    setCurrentText('');
  };

  const handleKeyDown = (event: any) => {
    if (readOnly) return;
    if (event.key === 'Enter' || event.key === 'Tab') createTagInput();
  };

  const onInputChange = (value) => {
    const isComma = value[value.length - 1] === ',';
    if (isComma) return createTagInput();
    setCurrentText(value);
  };

  const handleChange = (value: any) => {
    if (readOnly) return;
    if (values.length === 1) return onChange([]);
    if (!value) return;
    const updatedValues = value.map(({ value }) => value);
    onChange(updatedValues);
  };

  const selectedValue = values.map((value) => ({ label: value, value }));

  return (
    <div className="badge-input">
      <StyledLabel>
        {title} {isRequired && <Asterisks />}
      </StyledLabel>
      <CreatableSelect
        components={{
          DropdownIndicator: null,
        }}
        inputValue={currentText}
        isMulti
        isClearable={false}
        menuIsOpen={false}
        onChange={handleChange}
        onInputChange={onInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={selectedValue || []}
        isDisabled={readOnly}
        styles={customStyles}
        theme={theme}
      />
    </div>
  );
};

export default BadgeInput;
