import React from 'react';

export interface CollapseIconProps {
  color?: string;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({ color = '#110000' }) => {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.0664062L0 8.06641L1.86667 9.93307L8 3.79974L14.1333 9.93307L16 8.06641L8 0.0664062Z"
        fill={color}
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default CollapseIcon;
