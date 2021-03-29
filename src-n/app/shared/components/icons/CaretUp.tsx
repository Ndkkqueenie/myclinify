import React from 'react';

export interface CaretUpProps {}

const CaretUp: React.FC<CaretUpProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3.83301L0 13.833L2.33333 16.1663L10 8.49967L17.6667 16.1663L20 13.833L10 3.83301Z"
        fill="#00274A"
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default CaretUp;
