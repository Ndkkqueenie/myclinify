import styled from 'styled-components';
import colors from '../utils/colors';

export const InputWrapper = styled.div`
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