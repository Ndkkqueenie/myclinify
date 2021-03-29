import React from 'react';

export interface ExpandIconProps {
  color?: string;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({ color = '#110000' }) => {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 9.93359L0 1.93359L1.86667 0.066927L8 6.20026L14.1333 0.066927L16 1.93359L8 9.93359Z"
        fill={color}
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default ExpandIcon;
