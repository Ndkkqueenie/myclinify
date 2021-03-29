import React, { FC, useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import TextInput from '../Text/TextInput';
import './inputDropdown.scss';
import colors from '../utils/colors';

interface DropdownProps {
  option: string;
  handleInputChange: () => void;
  isICD?: boolean;
}

const DropDown: FC<DropdownProps> = ({ option, handleInputChange, isICD }) => (
  <div className="option" onClick={() => handleInputChange()}>
    <p>
      {isICD ? (
        <>
          <b>{option.split('-')[0]}</b> -{option.split('-')[1]}
        </>
      ) : (
        option
      )}
    </p>
  </div>
);

interface InputDropdownProps {
  handleInputChange: (field: string, value: string) => void;
  options: string[];
  label?: string;
  value: string;
  readOnly?: boolean;
  placeholder: string;
  fieldPath: string;
  fullWidth?: boolean;
  isRequired?: boolean;
  loading?: boolean;
  isICD?: boolean;
}

const InputDropdown: FC<InputDropdownProps> = ({
  handleInputChange,
  options,
  label,
  value,
  readOnly,
  placeholder,
  fieldPath,
  fullWidth = true,
  isRequired,
  isICD,
  loading,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  let wrapperRef;
  const setWrapperRef = (node) => {
    wrapperRef = node;
  };

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.contains(event.target)) setShowDropdown(false);
  };

  useEffect(() => document.addEventListener('mousedown', handleClickOutside));

  const dropdownIsVisible = (showDropdown && !readOnly && options.length > 0) || loading;

  return (
    <div className="input-dropdown" ref={setWrapperRef}>
      <div className="input-section">
        <TextInput
          name="text-dropdown"
          title={label}
          onChange={({ target: { value } }) => {
            handleInputChange(fieldPath, value);
            if (!showDropdown) setShowDropdown(true);
            if (value.length === 0) setShowDropdown(false);
          }}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          fullWidth={fullWidth}
          isRequired={isRequired}
        />
      </div>
      {dropdownIsVisible ? (
        <div className="dropdown-wrapper">
          <div
            className={fullWidth ? 'dropdown-section full-width' : 'dropdown-section half-width'}
          >
            <div className="options">
              <div className="options-loader">
                {loading ? (
                  <PulseLoader size={10} color={colors.darkBrown} loading={loading} />
                ) : null}
              </div>
              {options.map((option) => (
                <DropDown
                  option={option}
                  handleInputChange={() => {
                    handleInputChange(fieldPath, option);
                    setShowDropdown(false);
                  }}
                  isICD={isICD}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InputDropdown;
