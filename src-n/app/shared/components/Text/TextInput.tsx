import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Asterisks from '../icons/Asterisks';

type StyledInputWrapperType = {
  fullWidth?: boolean;
  withTag?: boolean;
  readOnly?: boolean;
};

export const StyledInputWrapper = styled.div<StyledInputWrapperType>`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  }

  .block-wrapper {
    .unit-tag {
      border: 1px solid ${colors.pseudoAsh};
      background-color: ${({ readOnly }) => (readOnly ? colors.fadedGrey : colors.white)};
    }
  }
`;

export const TwinStyledInputWrapper = styled.div<StyledInputWrapperType>`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  }
  .double-input {
    display: flex;
    input {
      width: 50%;
    }
  }
`;

type StyledLabelType = {
  disabled?: boolean;
};

export const StyledLabel = styled.label<StyledLabelType>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? colors.disabled : colors.darkBlue)};
  font-weight: normal;
  font-style: normal;
  margin-bottom: 2px;
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const StyledInputTagWrapper = styled.div`
  padding: 6px 0px 0px;
  box-sizing: border-box;
  position: relative;
`;

type StyledInputType = {
  topSpaced?: boolean;
  withTag?: boolean;
  readOnly?: boolean;
  nameLeft?: boolean;
};

export const StyledInput = styled.input<StyledInputType>`
  height: 38px;
  width: ${(props) => (props.withTag ? '60%' : '100%')};

  border-radius: ${(props) => (props.withTag ? '4px 0px 0px 4px' : '4px')};
  border: 1px solid ${(props) => (props.disabled ? colors.disabled : colors.pseudoAsh)};
  border-right: ${(props) => (props.withTag ? '0px' : '1px')} solid ${colors.pseudoAsh};
  color: ${(props) => (props.disabled ? colors.disabled : colors.black)};
  font-size: 14px;
  padding: 7px 10px;
  box-sizing: border-box;
  opacity: 100;
  border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
  user-select: ${({ readOnly }) => (readOnly ? 'none' : null)};
  background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
  margin-top: 0px;

  ::placeholder {
    color: ${colors.black};
    font-size: 13px;
    opacity: 0.5;
  }
  :focus {
    //  box-shadow: 0 0 0 0.2rem rgba(0, 39, 74, 0.4);
    border: 1px solid ${colors.darkBlue};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    //  -webkit-appearance: none;
  }
  -moz-appearance: textfield;
`;

export const DoubleStyledInput = styled.input<StyledInputType>`
  height: 38px;
  width: 100%;
  border-top-right-radius: ${(props) => (props.withTag ? '0 !important' : '')};
  border-bottom-right-radius: ${(props) => (props.withTag ? '0 !important' : '')};
  border: 1px solid ${(props) => (props.disabled ? colors.disabled : colors.pseudoAsh)};
  border-right: ${(props) => (props.withTag ? '0px' : '1px')} solid ${colors.pseudoAsh};
  color: ${(props) => (props.disabled ? colors.disabled : colors.black)};
  font-size: 14px;
  padding: 7px 10px;
  box-sizing: border-box;
  opacity: 100;
  border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
  user-select: ${({ readOnly }) => (readOnly ? 'none' : null)};
  background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
  margin-top: ${(props) => (props.topSpaced ? '0px' : '0px')};

  ::placeholder {
    color: ${colors.black};
    font-size: 13px;
    opacity: 0.5;
  }
  :focus {
    border: 1px solid ${colors.darkBlue};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    // -webkit-appearance: none;
  }
  -moz-appearance: textfield;
`;

export const StyledTag = styled.div`
  position: absolute;
  right: 0;
  top: 6px;
  padding: 0px 16px;
  box-sizing: border-box;
  background: ${colors.lightAsh};
  color: ${colors.ash};
  border-radius: 0px 10px 10px 0px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface TextInputProps {
  type?: string;
  title?: string;
  name: string;
  value?: string | number | null;
  isDisabled?: boolean;
  placeholder?: string;
  withTag?: boolean;
  fullWidth?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  isRequired?: boolean;
  readOnly?: boolean;
  onKeyUp?: (event: any) => void;
  tag?: React.ReactElement;
  minValue?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  type = 'text',
  title,
  name,
  value,
  isDisabled,
  withTag,
  fullWidth,
  onChange,
  isRequired,
  placeholder,
  readOnly,
  onKeyUp,
  tag: Tag,
  minValue,
}) => {
  const handleChange = (event, handler) => {
    const { value } = event.target;
    if (type === 'number' && value !== '' && !Number(value) && value !== '0') return;
    return handler(event);
  };

  return (
    <StyledInputWrapper fullWidth={fullWidth} withTag={withTag} readOnly={readOnly}>
      {title && (
        <StyledLabel disabled={isDisabled}>
          {title}
          {isRequired && <Asterisks />}
        </StyledLabel>
      )}
      <div className="block-wrapper">
        <StyledInput
          type={type === 'number' ? 'text' : type}
          name={name}
          value={value || minValue}
          disabled={isDisabled || readOnly}
          readOnly={readOnly}
          topSpaced
          onChange={(event) => handleChange(event, onChange)}
          placeholder={placeholder}
          withTag={withTag}
          onKeyUp={onKeyUp}
          min={minValue || 0}
        />
        {withTag && <div className="select-dropdown">{Tag}</div>}
      </div>
    </StyledInputWrapper>
  );
};

export interface DoubleTextInputProps {
  type?: string;
  title?: string;
  min?: number;
  max?: number;
  nameLeft: string;
  nameRight: string;
  valueLeft?: string;
  valueRight?: string;
  isDisabled?: boolean;
  placeholderLeft?: string;
  placeholderRight?: string;
  fullWidth?: boolean;
  onChangeLeft?: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  onChangeRight?: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  isRequired?: boolean;
  readOnly?: boolean;
  withTag?: boolean;
  tag?: React.ReactElement;
}

export const DoubleTextInput: React.FC<DoubleTextInputProps> = ({
  type = 'text',
  title,
  min,
  max,
  nameLeft,
  nameRight,
  valueLeft,
  valueRight,
  isDisabled,
  fullWidth,
  onChangeLeft,
  withTag,
  onChangeRight,
  isRequired,
  placeholderLeft,
  placeholderRight,
  readOnly,
  tag: Tag,
}) => {
  const onChange = (event, handler) => {
    const { value } = event.target;
    if (type === 'number' && value !== '' && !Number(value) && value !== '0') {
      return;
    }
    return handler(event);
  };

  return (
    <TwinStyledInputWrapper fullWidth={fullWidth} withTag={withTag}>
      {title && (
        <StyledLabel disabled={isDisabled}>
          {title}
          {isRequired && <Asterisks />}
        </StyledLabel>
      )}
      <div className="double-input">
        <DoubleStyledInput
          type={type === 'number' ? 'text' : type}
          name={nameLeft}
          value={`${Number(valueLeft) >= 0 && valueLeft !== null ? valueLeft : ''}`}
          disabled={isDisabled || readOnly}
          readOnly={readOnly}
          onChange={(event) => onChange(event, onChangeLeft)}
          min={min}
          max={max}
          placeholder={placeholderLeft}
          withTag={withTag}
        />
        <DoubleStyledInput
          type={type === 'number' ? 'text' : type}
          name={nameRight}
          value={`${Number(valueRight) >= 0 && valueRight !== null ? valueRight : ''}`}
          disabled={isDisabled || readOnly}
          readOnly={readOnly}
          onChange={(event) => onChange(event, onChangeRight)}
          min={min}
          max={max}
          placeholder={placeholderRight}
          withTag={withTag}
        />
        {withTag && <div className="select-dropdown">{Tag}</div>}
      </div>
    </TwinStyledInputWrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FieldTextInput = ({ field, form: _, ...props }: any) => (
  <TextInput {...field} {...props} />
);

export default TextInput;
