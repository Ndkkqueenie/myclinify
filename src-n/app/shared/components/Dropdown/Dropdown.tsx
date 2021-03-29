import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import styled from 'styled-components';
import colors from '../utils/colors';
import Asterisks from '../icons/Asterisks';
import PlusIcon from '../icons/PlusIcon';
import MultiGroupAction from '../MultiActions/MultiGroupActions';
import { theme } from '../styled-components/react-select.styles';

type DropdownWrapperType = {
  isNavbar?: boolean;
  noPadding?: boolean;
  withTag?: boolean;
  withoutIcon?: boolean;
  filled?: boolean;
  expanded?: boolean;
  withoutBorderRadius?: boolean;
  forSearch?: boolean;
  midi?: boolean;
  withBorderRadius?: boolean;
};

const DropdownWrapper = styled.div<DropdownWrapperType>`
  width: ${(props) => (props.forSearch ? '140px' : '100%')};
  min-width: ${(props) => props.midi && '160px'};
  box-sizing: border-box;
  @media (min-width: 769px) {
    margin-left: ${(props) => props.noPadding && '12px'};
  }
  padding: ${(props) =>
    props.noPadding
      ? '0px'
      : props.withTag
      ? '0px'
      : props.expanded
      ? '12px 6px'
      : props.forSearch
      ? '12px 10px'
      : '12px 15px'};
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    font-size: 14px;
    color: ${colors.darkBlue};
    font-weight: normal;
    font-style: normal;
    margin-bottom: 2px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
  input {
    ::placeholder {
      color: ${colors.black};
      font-size: 13px;
      opacity: 0.5;
    }
  }
  .plus-icon {
    position: absolute;
    margin-left: 12px;
    margin-top: 12px;
  }
`;

type StyledSelectType = {
  isNavbar?: boolean;
  allowMultiEntries?: boolean;
  withTag?: boolean;
  filled?: boolean;
  withoutBorderRadius?: boolean;
  grey?: boolean;
  expanded?: boolean;
  forSearch?: boolean;
  readOnly?: boolean;
  smallWidth?: boolean;
};

export const StyledSelect = styled(Select)<StyledSelectType>`
  .react-select__control {
    width: ${({ smallWidth }) => (smallWidth ? '70px' : '100%')};
    margin: ${({ allowMultiEntries }) => (allowMultiEntries ? '15px 0' : '0')};
    border-radius: ${(props) =>
      props.isNavbar
        ? props.filled
          ? props.forSearch
            ? '4px'
            : '4px'
          : '4px'
        : props.withTag
        ? '0px 4px 4px 0px'
        : props.withoutBorderRadius
        ? props.forSearch
          ? '4px'
          : '4px'
        : '4px'};
    border: 1px solid
      ${(props) =>
        props.isNavbar ? (props.grey ? colors.pseudoAsh : colors.iceBlue) : colors.pseudoAsh};

    padding: ${(props) => (props.withTag ? '2px' : '0px')};
    pointer-events: ${({ readOnly }) => (readOnly ? 'none' : null)};
    border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
    background-color: ${(props) => {
      if (props.withTag && props.readOnly) return colors.fadedGrey;
      if (props.withTag) return colors.white;
      if (props.filled) return colors.iceBlue;
      if (props.readOnly) return colors.lightGrey;
      return colors.white;
    }};

    height: 38px;
    cursor: pointer;
    :hover {
      box-shadow: none;
      border: 1px solid
        ${(props) =>
          props.isNavbar ? (props.grey ? colors.pseudoAsh : colors.iceBlue) : colors.darkBlue};
    }
  }

  .react-select__value-container {
    input {
      caret-color: transparent;
    }
  }

  .react-select__placeholder {
    font-size: 13px;
    opacity: 0.5;
    color: ${(props) =>
      props.isNavbar
        ? props.grey
          ? colors.black
          : props.filled
          ? colors.white
          : colors.iceBlue
        : props.grey
        ? colors.pseudoAsh
        : colors.black};
    margin-left: ${(props) => (props.isNavbar ? (props.expanded ? '0px' : '36px') : '0px')};
    font-weight: ${(props) => (props.isNavbar ? '600' : '400')};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    svg {
      width: 16px;
      height: 16px;
      opacity: 90%;

      path {
        fill: ${(props) => {
          if (props.withTag) return colors.black;
          if (props.filled) return colors.iceBlue;
          if (props.isNavbar && props.grey) return colors.pseudoAsh;
          if (props.isNavbar) return colors.iceBlue;
          if (props.readOnly) return colors.black;
          return colors.darkBlue;
        }};
      }
    }
  }

  .react-select__menu {
    z-index: ${(props) => (props.isNavbar ? '1000' : '90')};
    color: ${colors.black};
    font-size: 14px;
    font-weight: normal;
    z-index: 999;
  }

  .react-select__single-value {
    color: ${(props) => {
      if (props.filled) return colors.white;
      if (props.isNavbar && props.grey) return colors.black;
      if (props.isNavbar) return colors.iceBlue;
      if (props.readOnly) return colors.disabled;
      return colors.black;
    }};
    font-size: 14px;
    font-weight: 400px;
    margin-left: ${(props) => (props.isNavbar ? '24px' : '0px')};
  }
`;

type OptionType = {
  label?: string;
  value?: string | void;
};

export interface DropdownProps {
  title?: string;
  options: Array<OptionType>;
  placeholder?: string;
  value?: string | string[] | number | null;
  isMulti?: boolean;
  onChange?: (changeValue: any) => void;
  isNavbar?: boolean;
  isRequired?: boolean;
  noPadding?: boolean;
  withTag?: boolean;
  withoutIcon?: boolean;
  filled?: boolean;
  grey?: boolean;
  expanded?: boolean;
  midi?: boolean;
  withoutBorderRadius?: boolean;
  forSearch?: boolean;
  readOnly?: boolean;
  smallWidth?: boolean;
  creatable?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  placeholder,
  value,
  isMulti,
  onChange,
  isNavbar,
  isRequired,
  noPadding,
  withTag,
  withoutIcon,
  filled,
  withoutBorderRadius,
  grey,
  expanded,
  forSearch,
  midi,
  readOnly,
  smallWidth,
  creatable,
}) => {
  let selection;
  if (value != null) {
    selection = options.filter((option) => option.value === value);
    if (!selection.length) selection = [{ label: value, value }];
  }
  return (
    <DropdownWrapper
      isNavbar={isNavbar}
      noPadding={noPadding}
      withTag={withTag}
      withoutIcon={withoutIcon}
      withoutBorderRadius={withoutBorderRadius}
      expanded={expanded}
      forSearch={forSearch}
      midi={midi}
    >
      {title && (
        <label htmlFor="react-select">
          {title} {isRequired && <Asterisks />}
        </label>
      )}
      <StyledSelect
        as={creatable ? CreatableSelect : Select}
        value={selection}
        classNamePrefix="react-select"
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        options={options}
        placeholder="Select One"
        isMulti={isMulti}
        onChange={onChange}
        isNavbar={isNavbar}
        withTag={withTag}
        filled={filled}
        grey={grey}
        theme={theme}
        forSearch={forSearch}
        expanded={readOnly ? false : expanded}
        withoutBorderRadius={withoutBorderRadius}
        readOnly={readOnly}
        smallWidth={smallWidth}
      />
      {isNavbar && !withoutIcon && <PlusIcon color={filled ? colors.white : colors.darkBlue} />}
    </DropdownWrapper>
  );
};

export interface MultiDropdownProps extends DropdownProps {
  values?: string[];
}

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  title,
  options,
  placeholder,
  values,
  onChange,
  isNavbar,
  isRequired,
  noPadding,
  withTag,
  withoutIcon,
  filled,
  withoutBorderRadius,
  grey,
  expanded,
  forSearch,
  readOnly,
  smallWidth,
  creatable,
}) => {
  const dropValues = values?.length ? values : [''];
  const getSelection = (val: string) => {
    let selection = options.filter((option) => option.value === val);
    if (!selection.length) selection = [{ label: val, value: val }];
    return selection;
  };
  return (
    <DropdownWrapper
      isNavbar={isNavbar}
      noPadding={noPadding}
      withTag={withTag}
      withoutIcon={withoutIcon}
      withoutBorderRadius={withoutBorderRadius}
      expanded={expanded}
      forSearch={forSearch}
    >
      {title && (
        <label htmlFor="react-select">
          {title} {isRequired && <Asterisks />}
        </label>
      )}
      {dropValues.map((val, idx) => (
        <React.Fragment key={`multi-drop-${idx}`}>
          <StyledSelect
            as={creatable ? CreatableSelect : Select}
            value={getSelection(val)}
            classNamePrefix="react-select"
            options={options}
            placeholder={placeholder || 'Select'}
            onChange={({ value }) => {
              if (onChange) {
                const newUpdate = [...dropValues];
                newUpdate[idx] = value;
                onChange(newUpdate);
              }
            }}
            isNavbar={isNavbar}
            withTag={withTag}
            filled={filled}
            grey={grey}
            theme={theme}
            forSearch={forSearch}
            expanded={readOnly ? false : expanded}
            withoutBorderRadius={withoutBorderRadius}
            readOnly={readOnly}
            smallWidth={smallWidth}
            allowMultiEntries
          />
          {!readOnly && (
            <MultiGroupAction
              noPadding
              items={dropValues}
              index={idx}
              initialItem=""
              onClick={(value) => {
                if (onChange) onChange(value);
              }}
            />
          )}
        </React.Fragment>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
