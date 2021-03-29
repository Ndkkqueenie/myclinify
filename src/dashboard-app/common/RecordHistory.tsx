import React, { FC } from 'react';

import './styles/recordHistory.scss';

interface RecordHistoryProps {
  createdBy: string;
  createdDate: string | Date;
  updatedBy: string;
  updatedDate: string | Date;
  className?: string;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: false };
const RecordHistory: FC<RecordHistoryProps> = ({
  createdBy,
  createdDate,
  updatedBy,
  updatedDate,
  className,
}) => (
  <div className={`record-history ${className}`}>
    <div className="created-by">
      <p>
        {` Created by ${createdBy} on ${new Date(createdDate).toLocaleString(
          'en-US',
          options,
        )} ${new Date(createdDate).toLocaleTimeString()}`}
      </p>
    </div>
    {updatedBy && (
      <div className="updated-at">
        <p>
          {`Last modified by ${updatedBy} on ${new Date(updatedDate).toLocaleString(
            'en-US',
            options,
          )}  ${new Date(updatedDate).toLocaleTimeString()}`}
        </p>
      </div>
    )}
  </div>
);

export default RecordHistory;
