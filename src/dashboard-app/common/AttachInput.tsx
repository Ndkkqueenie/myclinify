import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Wrapper = styled.div`
  width: 350px;
  /* height: 40px; */

  .file-upload {
    width: 153px;
  }

  .file-upload::-webkit-file-upload-button {
    visibility: hidden;
  }

  .file-upload::before {
    content: 'Attach Document';
    width: 153px;
    /* height: 40px; */
    padding: 10px 12px;
    color: ${colors.iceBlue};
    background-color: #efeff4;
    border-radius: 5px;
  }
`;

export interface AttachInputProps {}

const AttachInput: React.FC<AttachInputProps> = () => {
  return (
    <Wrapper>
      <input className="file-upload" type="file" name="Whatever" id="file" />
    </Wrapper>
  );
};

export default AttachInput;
