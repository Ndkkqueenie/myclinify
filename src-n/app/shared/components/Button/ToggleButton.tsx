import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

export const Switch = styled.label<{ readOnly?: boolean; small?: boolean }>`
  position: relative;
  display: inline-block;
  width: ${({ small }) => (small ? '50px' : '60px')};
  height: ${({ small }) => (small ? '25px' : '34px')};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: ${({ readOnly }) => (readOnly ? 'normal' : 'pointer')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ readOnly }) => (readOnly ? colors.disabled : colors.lightGrey)};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    width: ${({ small }) => (small ? '18px' : '26px')};
    height: ${({ small }) => (small ? '18px' : '26px')};
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${({ readOnly }) => (readOnly ? colors.disabled : colors.iceBlue)};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export interface ToggleButtonProps {
  defaultChecked?: boolean;
  onChange: (checked: boolean) => void;
  readOnly?: boolean;
  small?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onChange,
  defaultChecked = false,
  readOnly,
  small,
}) => {
  return (
    <Switch readOnly={readOnly} small={small}>
      <input
        type="checkbox"
        checked={defaultChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider round" />
    </Switch>
  );
};

export default ToggleButton;
