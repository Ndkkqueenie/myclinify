import React from 'react';
import colors from 'dashboard-app/utils/colors';

const LookupIcon = ({ color = colors.white }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.4755 11.8419C14.4386 10.5576 14.3367 8.72222 13.1693 7.55481C12.896 7.28159 12.5861 7.06691 12.2553 6.91038V4.02459L8.23081 0H0.00537109V16H12.2554V12.8396C12.4492 12.7479 12.6358 12.6361 12.8122 12.5043L15.3283 15.0484L15.9949 14.3891L13.4755 11.8419ZM8.50537 1.60041L10.655 3.75H8.50537V1.60041ZM11.3179 15.0625H0.942871V0.9375H7.56787V4.6875H11.3179V6.62869C10.3292 6.48716 9.2879 6.79584 8.52893 7.55481C7.24959 8.83416 7.24959 10.9158 8.52893 12.1952C9.27909 12.9453 10.3164 13.2647 11.3179 13.1213V15.0625ZM12.5064 11.5323C11.5926 12.4461 10.1057 12.4461 9.19187 11.5323C8.27806 10.6184 8.27806 9.13153 9.19187 8.21772C10.1057 7.30391 11.5926 7.30384 12.5064 8.21772C13.4202 9.13153 13.4202 10.6185 12.5064 11.5323Z"
        fill={color}
      />
      <path d="M8.50539 5.65625H1.88037V6.59375H8.50539V5.65625Z" fill={color} />
      <path d="M6.63037 7.53125H1.88037V8.46875H6.63037V7.53125Z" fill={color} />
      <path d="M6.63037 11.2812H1.88037V12.2188H6.63037V11.2812Z" fill={color} />
      <path d="M6.63037 9.40625H1.88037V10.3438H6.63037V9.40625Z" fill={color} />
    </svg>
  );
};

export default LookupIcon;
