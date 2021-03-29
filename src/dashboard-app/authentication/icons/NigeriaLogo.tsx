import * as React from 'react';

export interface NigeriaLogoProps {
  onClick?: () => void;
}

const NigeriaLogo: React.FC<NigeriaLogoProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
    >
      <path
        d="M38.345 88.2729C17.167 88.2729 0 105.44 0 126.618V385.377C0 406.554 17.167 423.722 38.345 423.722H170.667V88.2729H38.345Z"
        fill="#008751"
      />
      <path d="M341.34 88.277H170.67V423.727H341.34V88.277Z" fill="#F5F5F5" />
      <path
        d="M473.655 88.2729H341.333V423.721H473.655C494.832 423.721 512 406.554 512 385.376V126.618C512 105.44 494.833 88.2729 473.655 88.2729Z"
        fill="#008751"
      />
    </svg>
  );
};

export default NigeriaLogo;
