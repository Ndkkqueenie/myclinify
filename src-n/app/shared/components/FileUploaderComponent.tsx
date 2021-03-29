import React from 'react';
import styled from 'styled-components';
import Loader from 'react-spinners/PulseLoader';
import AttachmentIcon from './icons/AttachmentIcon';
import colors from '../utils/colors';

const Wrapper = styled.div<{ readOnly?: boolean }>`
  padding: 16px 16px 0px 16px;

  input[type='file'] {
    display: none;
  }
  .custom-file-upload {
    background-color: ${colors.lightSilver};
    font-size: 12px;
    font-weight: normal;
    color: ${({ readOnly }) => (readOnly ? colors.disabled : colors.iceBlue)};
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    box-sizing: border-box;
    min-width: 153px;
    min-height: 40px;
    cursor: pointer;
    border-radius: 10px;

    svg {
      margin-right: 20px;
    }
  }
`;

export interface FileUploaderComponentProps {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLAllCollection>,
  ) => void;
  disabled?: boolean;
  uploading?: boolean;
  text?: string;
  readOnly?: boolean;
}

const FileUploaderComponent: React.FC<FileUploaderComponentProps> = ({
  handleChange,
  disabled,
  uploading,
  readOnly,
}) => {
  return (
    <Wrapper readOnly={readOnly}>
      <label htmlFor="file-upload" className="custom-file-upload">
        <AttachmentIcon fill={readOnly ? colors.disabled : ''} />
        <span style={{ marginRight: '10px' }}>Attach Document</span>{' '}
        {uploading ? (
          <span style={{ marginTop: '5px' }}>
            <Loader size={10} loading={uploading} />
          </span>
        ) : (
          ''
        )}
      </label>
      <input disabled={disabled} id="file-upload" type="file" onChange={handleChange} multiple />
    </Wrapper>
  );
};

export default FileUploaderComponent;
