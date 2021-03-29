import React from 'react';

export interface CaretDownProps {}

const CaretDown: React.FC<CaretDownProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16.167L20 6.16699L17.6667 3.83366L10 11.5003L2.33333 3.83366L-1.90735e-06 6.16699L10 16.167Z"
        fill="#00274A"
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default CaretDown;
