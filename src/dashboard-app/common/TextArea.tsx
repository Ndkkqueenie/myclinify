import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Asterisks from './icons/Asterisks';
import { StyledLabel } from './TextInput';

export const Wrapper = styled.div<{ fullWidth?: boolean; readOnly?: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : '320px')};
  box-sizing: border-box;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;

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

  textarea {
    border: 1px solid ${colors.silver};
    background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
    border-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.tintGrey)};
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: ${({ readOnly }) => (readOnly ? colors.disabled : colors.black)};
    font-weight: normal;
    min-height: 64px;
    outline: none;
    :focus {
      sbox-shadow: 0 0 0 0.2rem rgba(0, 39, 74, 0.4);
      border: 1px solid ${colors.darkBlue};
    }
  }

  .text-area-readonly {
    border: 1px solid ${colors.silver};
    background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
    border-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.tintGrey)};
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: ${({ readOnly }) => (readOnly ? colors.disabled : colors.black)};
    font-weight: normal;
    min-height: 100px;
    -moz-appearance: textfield-multiline;
    -webkit-appearance: textarea;
    white-space: pre-wrap;
  }
`;

export interface TextAreaProps {
  name: string;
  fullWidth?: boolean;
  value?: string | null;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  spellcheck?: boolean;
  isRequired?: boolean;
  defaultRows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  fullWidth,
  value,
  label,
  onChange,
  readOnly,
  spellcheck = true,
  isRequired,
  defaultRows,
}) => {
  const [rows, setRows] = useState(defaultRows || 3);

  const textArea: any = useRef(null);

  const handleChange = (event, change) => {
    const textareaLineHeight = 24;

    const currentRows = event.target.scrollHeight / textareaLineHeight + 1;

    setRows(currentRows);
    if (change) onChange(event);
  };

  return (
    <Wrapper fullWidth={fullWidth} readOnly={readOnly}>
      <StyledLabel disabled={readOnly}>
        {label}
        {isRequired && <Asterisks />}
      </StyledLabel>
      {readOnly ? (
        <div className="text-area-readonly">{value}</div>
      ) : (
        <textarea
          ref={textArea}
          name={name}
          id="text-area"
          cols={20}
          rows={rows}
          className="text"
          value={value || ''}
          onChange={(event) => handleChange(event, true)}
          disabled={readOnly}
          spellCheck={spellcheck}
        />
      )}
    </Wrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FieldTextArea = ({ field, form: _, ...props }: any) => (
  <TextArea {...field} {...props} />
);

export default TextArea;
