import React, { FC } from 'react';

import useDocumentAttacher from 'hooks/useDocumentAttacher';

import CloseButton from 'dashboard-app/layouts/modal/icons/CloseButton';

import IMGFileIcon from './icons/IMGFileIcon';
import PDFFileIcon from './icons/PDFFileIcon';
import DOCFileIcon from './icons/DOCFileIcon';
import FileUploaderComponent from './FileUploaderComponent';

import './styles/documentAttacher.scss';

interface FiledetailsProp {
  document: string;
}

const FileDetails: FC<FiledetailsProp> = ({ document }) => {
  const extensionsMapper = {
    jpeg: {
      FileIcon: IMGFileIcon,
      text: 'Image file',
    },
    pdf: {
      FileIcon: PDFFileIcon,
      text: 'Pdf file',
    },
    doc: {
      FileIcon: DOCFileIcon,
      text: 'Doc file',
    },
    docx: {
      FileIcon: DOCFileIcon,
      text: 'Doc file',
    },
  };

  const extension: string[] = [];

  let currentIndex = document.length - 1;
  while (currentIndex) {
    if (document[currentIndex] === '.') break;
    extension.push(document[currentIndex]);
    currentIndex -= 1;
  }

  const { FileIcon, text } =
    extensionsMapper[extension.reverse().join('')] || extensionsMapper.jpeg;

  return (
    <div className="file-details">
      <FileIcon />
      <div className="text-wrapper">
        <span>{text}</span>
      </div>
    </div>
  );
};

const FileBadge = ({ removeAction, document }) => (
  <div className="file-badge">
    <div className="url-text">
      <a href={document} target="_blank" rel="noopener noreferrer">
        <FileDetails document={document} />
      </a>
    </div>
    <div className="remove-btn" onClick={removeAction}>
      <CloseButton />
    </div>
  </div>
);

interface DocumentAttacherProps {
  documents: string[];
  handleInputChange: (field: string, documents: string[]) => void;
  readOnly?: boolean;
  type: string;
}

const DocumentAttacher: React.FC<DocumentAttacherProps> = ({
  documents,
  handleInputChange,
  readOnly,
  type,
}) => {
  const { handleUpload, uploading, errorMessage } = useDocumentAttacher();
  const attachments = documents || [];

  return (
    <div className="document-attacher">
      <FileUploaderComponent
        handleChange={(event) => handleUpload(event, handleInputChange, attachments, type)}
        disabled={uploading || readOnly}
        uploading={uploading}
        readOnly={readOnly}
      />
      <div className="error-section">
        <p>{errorMessage}</p>
      </div>
      <div className="file-list">
        {attachments.map((document) => (
          <FileBadge
            document={document}
            removeAction={() =>
              readOnly
                ? null
                : handleInputChange(
                    'documentUrl',
                    documents.filter((url) => url !== document),
                  )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentAttacher;
