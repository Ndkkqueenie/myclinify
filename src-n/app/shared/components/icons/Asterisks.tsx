import React from 'react';

export interface AsterisksProps {}

const Asterisks: React.FC<AsterisksProps> = () => {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.58254 2.99341L5.99366 2.17862L5.20256 0.808193L3.79147 1.62299V0H2.20905V1.62299L0.797953 0.808193L0.00683594 2.17862L1.41797 2.99341L0.00684912 3.80819L0.797953 5.17862L2.20905 4.36382V6H3.79147V4.36382L5.20256 5.17862L5.99368 3.80819L4.58254 2.99341Z"
        fill="#FF0000"
      />
    </svg>
  );
};

export default Asterisks;
