import React from 'react';
import colors from '../../utils/colors';

export interface PlusIconProps {
  color?: string;
  size?: number;
}

const PlusIcon: React.FC<PlusIconProps> = ({ color = colors.iceBlue, size = 25 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 98 98"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49 98C21.9803 98 0 76.0197 0 49C0 21.9803 21.9803 0 49 0C76.0197 0 98 21.9803 98 49C98 76.0197 76.0197 98 49 98ZM49 6.125C25.3576 6.125 6.125 25.3576 6.125 49C6.125 72.6424 25.3576 91.875 49 91.875C72.6424 91.875 91.875 72.6424 91.875 49C91.875 25.3576 72.6424 6.125 49 6.125Z"
        fill={color}
      />
      <path
        d="M70.4375 52.0625H27.5625C25.872 52.0625 24.5 50.6905 24.5 49C24.5 47.3095 25.872 45.9375 27.5625 45.9375H70.4375C72.128 45.9375 73.5 47.3095 73.5 49C73.5 50.6905 72.128 52.0625 70.4375 52.0625Z"
        fill={color}
      />
      <path
        d="M49 73.5C47.3095 73.5 45.9375 72.128 45.9375 70.4375V27.5625C45.9375 25.872 47.3095 24.5 49 24.5C50.6905 24.5 52.0625 25.872 52.0625 27.5625V70.4375C52.0625 72.128 50.6905 73.5 49 73.5Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
