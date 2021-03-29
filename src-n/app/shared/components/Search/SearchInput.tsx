import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import SearchIcon from '../icons/SearchIcon';

const OutlineWrapper = styled.div<{ last?: boolean; readOnly?: boolean }>`
  width: 100%;
  height: 38px;
  margin-right: 0px;
  margin-bottom: 8px;
  @media only screen and (min-width: 768px) {
    width: 190px;
    margin-bottom: 0;
    margin-right: 8px;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 6px;
    border: 1px solid ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
    font-size: 14px;
    border-radius: 4px;

    ::placeholder {
      opacity: 0.5;
      font-size: 13px;
      color: ${colors.pseudoAsh};
      font-weight: normal;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
  @media only screen and (min-width: 768px) {
    width: 190px;
    margin-bottom: 0;
    min-width: 190px;
  }

  height: 38px;
  position: relative;
  border-radius: 4px;

  svg {
    position: absolute;
    right: 0;
    top: 12px;
    right: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
  border-radius: 4px;
  padding: 10px;
  border: 1px solid ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
  font-size: 14px;

  :focus {
    border: 1px solid ${colors.darkBlue};
  }
`;

export interface SearchInputProps {
  outline?: boolean;
  placeholder?: string;
  last?: boolean;
  readOnly?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({
  outline,
  placeholder,
  last,
  onChange,
  value = '',
  readOnly,
}) => {
  const [fieldValue, setFieldValue] = useState(value);

  useEffect(() => {
    if (!value?.length) setFieldValue('');
  }, [value]);

  return (
    <>
      {!outline && (
        <IconWrapper>
          <Input
            placeholder={placeholder || 'Search'}
            onChange={(event) => {
              setFieldValue(event.target.value);
              onChange(event);
            }}
            disabled={readOnly}
            value={fieldValue || ''}
            readOnly={readOnly}
          />
          <SearchIcon />
        </IconWrapper>
      )}
      {outline && (
        <OutlineWrapper last={last}>
          <input
            disabled={readOnly}
            placeholder={placeholder ?? ''}
            onChange={onChange}
            defaultValue={value || ''}
          />
        </OutlineWrapper>
      )}
    </>
  );
};

export default SearchInput;
