import React from 'react';

export interface DropdownIconProps {}

const DropdownIcon: React.FC<DropdownIconProps> = () => {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.54"
        d="M10.6 0.601562L6 5.20156L1.4 0.601562L0 2.00156L6 8.00156L12 2.00156L10.6 0.601562Z"
        fill="black"
      />
    </svg>
  );
};

export default DropdownIcon;
