import colors from 'dashboard-app/utils/colors';
import React from 'react';

export interface AdmissionIconProps {
  color: string;
}

const AdmissionIcon: React.FC<AdmissionIconProps> = ({ color = colors.white }) => {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 2H9V1.5C9 1.224 8.776 1 8.5 1H7.415C7.208 0.418 6.652 0 6 0C5.348 0 4.792 0.418 4.585 1H3.5C3.224 1 3 1.224 3 1.5V2H1C0.449 2 0 2.449 0 3V15C0 15.551 0.449 16 1 16H11C11.551 16 12 15.551 12 15V3C12 2.449 11.551 2 11 2ZM4 2H5C5.276 2 5.5 1.776 5.5 1.5C5.5 1.224 5.724 1 6 1C6.276 1 6.5 1.224 6.5 1.5C6.5 1.776 6.724 2 7 2H8V3H4V2ZM11 15H1V3H3V3.5C3 3.776 3.224 4 3.5 4H8.5C8.776 4 9 3.776 9 3.5V3H11V15Z"
        fill={color}
      />
      <path
        d="M3.44531 11.75H8.05432C8.22693 11.75 8.36682 11.6101 8.36682 11.4375C8.36682 11.265 8.22693 11.125 8.05432 11.125H3.44531C3.27271 11.125 3.13281 11.265 3.13281 11.4375C3.13281 11.6101 3.27271 11.75 3.44531 11.75Z"
        fill={color}
      />
      <path
        d="M2.50781 13H8.99182C9.16443 13 9.30432 12.8601 9.30432 12.6875C9.30432 12.515 9.16443 12.375 8.99182 12.375H2.50781C2.33521 12.375 2.19531 12.515 2.19531 12.6875C2.19531 12.8601 2.33521 13 2.50781 13Z"
        fill={color}
      />
      <path
        d="M6.29688 5.28125H5.20312V6.92188H3.5625V8.01562H5.20312V9.65625H6.29688V8.01562H7.9375V6.92188H6.29688V5.28125Z"
        fill={color}
      />
    </svg>
  );
};

export default AdmissionIcon;
