import NotVisibleIcon from 'dashboard-app/common/icons/NotVisible';
import VisibilityIcon from 'dashboard-app/common/icons/VisibilityIcon';
import TextInput from 'dashboard-app/common/TextInput';
import React, { useState } from 'react';

const TextInputWithVisibilityIcon = ({ value, label, name, onChange }) => {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  return (
    <div className="text-input-wrapper">
      <div className="input-section">
        <TextInput
          type={inputType}
          value={value}
          onChange={onChange}
          name={name}
          title={label}
          fullWidth
        />
      </div>
      <div className="visibility-icon-section">
        {inputType === 'password' ? (
          <NotVisibleIcon onClick={() => setInputType('text')} />
        ) : (
          <VisibilityIcon onClick={() => setInputType('password')} />
        )}
      </div>
    </div>
  );
};

export default TextInputWithVisibilityIcon;
