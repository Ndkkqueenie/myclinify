import React from 'react';

export interface UnitTagProps {
  text: string;
  readOnly?: boolean;
}

const UnitTag: React.FC<UnitTagProps> = ({ text, readOnly }) => {
  return (
    <div className={`${readOnly && 'readonly'} unit-tag-wrapper`}>
      <div className="unit-tag">{text}</div>
    </div>
  );
};

export default UnitTag;
