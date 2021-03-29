import colors from 'dashboard-app/utils/colors';
import React from 'react';

export interface SurgeryIconProps {
  color: string;
}

const SurgeryIcon: React.FC<SurgeryIconProps> = ({ color = colors.white }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5938 3.3125H11.2812V1.90625C11.2812 1.64737 11.0714 1.4375 10.8125 1.4375H5.1875C4.92862 1.4375 4.71875 1.64737 4.71875 1.90625V3.3125H1.40625C0.630844 3.3125 0 3.94334 0 4.71875V13.1562C0 13.9317 0.630844 14.5625 1.40625 14.5625H14.5938C15.3692 14.5625 16 13.9317 16 13.1562V4.71875C16 3.94334 15.3692 3.3125 14.5938 3.3125ZM5.65625 2.375H10.3438V3.3125H5.65625V2.375ZM1.40625 4.25H14.5938C14.8522 4.25 15.0625 4.46028 15.0625 4.71875V8H11.2476C11.0195 6.412 9.65016 5.1875 8 5.1875C6.34987 5.1875 4.98053 6.412 4.75238 8H0.9375V4.71875C0.9375 4.46028 1.14778 4.25 1.40625 4.25V4.25ZM10.3438 8.46875C10.3438 9.76109 9.29234 10.8125 8 10.8125C6.70766 10.8125 5.65625 9.76109 5.65625 8.46875C5.65625 7.17641 6.70766 6.125 8 6.125C9.29234 6.125 10.3438 7.17641 10.3438 8.46875ZM14.5938 13.625H1.40625C1.14778 13.625 0.9375 13.4147 0.9375 13.1562V8.9375H4.75238C4.98053 10.5255 6.34987 11.75 8 11.75C9.65016 11.75 11.0195 10.5255 11.2476 8.9375H15.0625V13.1562C15.0625 13.4147 14.8522 13.625 14.5938 13.625Z"
        fill={color}
      />
      <path
        d="M8.35156 6.8125H7.64844V7.86719H6.59375V8.57031H7.64844V9.625H8.35156V8.57031H9.40625V7.86719H8.35156V6.8125Z"
        fill={color}
      />
    </svg>
  );
};

export default SurgeryIcon;