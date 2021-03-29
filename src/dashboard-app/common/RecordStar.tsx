import React from 'react';
import './styles/recordStar.scss';

const RecordStar = ({ createdDate = '', updatedDate = '' }) => {
  const createdWithNoUpdate = createdDate === updatedDate;
  const updated = updatedDate !== createdDate;
  const date = createdWithNoUpdate ? createdDate : updatedDate;
  const datePlusTwentyFourHours = new Date(new Date(date).getTime() + 60 * 60 * 24 * 1000);
  const displayAsterisk = new Date(datePlusTwentyFourHours) > new Date();
  let className = 'green-sterisk';
  if (updated) className = 'yellow-sterisk';
  if (!displayAsterisk) return null;
  return (
    <div className={className}>
      <span>*</span>
    </div>
  );
};

export default RecordStar;
