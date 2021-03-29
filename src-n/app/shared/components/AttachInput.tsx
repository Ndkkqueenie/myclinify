import React from 'react';
import { InputWrapper } from './styled-components/InputWrapper';

export interface AttachInputProps {}

const AttachInput: React.FC<AttachInputProps> = () => {
  return (
    <InputWrapper>
      <input className="file-upload" type="file" name="Whatever" id="file" />
    </InputWrapper>
  );
};

export default AttachInput;
