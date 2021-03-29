import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const SelectWrapper = styled.div<{ navSelect?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.navSelect ? '0px' : '12px 20px')};
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${colors.ash};
    font-weight: 500;
  }

  select {
    width: 100%;
    height: 38px;
    border: 1px solid ${(props) => (props.navSelect ? colors.iceBlue : colors.lightGrey)};
    border-radius: 4px;
    font-size: 16px;
    color: ${colors.black};
    padding-left: 10px;
    padding-right: 10px;
    margin: ${(props) => (props.navSelect ? '0px' : '6px 0px 0px')};
    color: ${(props) => (props.navSelect ? colors.iceBlue : colors.darkGrey)};

    :focus {
      outline: 0;
    }
  }
`;

type OptionsType = {
  label: string;
  value: string;
};

export interface SelectProps {
  title?: string;
  name: string;
  options: OptionsType[];
  selectedValue?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  navSelect?: boolean;
}

const Select: React.FC<SelectProps> = ({
  title,
  name,
  options,
  selectedValue,
  onChange,
  navSelect,
}) => {
  return (
    <SelectWrapper navSelect={navSelect}>
      {title && <label htmlFor="">{title}</label>}

      <select value={selectedValue || ''} name={name} onChange={onChange}>
        {options.length > 0 &&
          options.map((optionItem) => {
            const { label, value } = optionItem;
            return <option value={value}>{label}</option>;
          })}
      </select>
    </SelectWrapper>
  );
};

export default Select;
