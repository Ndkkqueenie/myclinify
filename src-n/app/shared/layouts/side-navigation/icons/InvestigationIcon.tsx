import React from 'react';
import colors from 'dashboard-app/utils/colors';

const InvestigationIcon = ({ color = colors.white }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4286 2.28516H0.571439C0.255837 2.28516 0 2.54099 0 2.85656V13.1423C0 13.4579 0.255837 13.7137 0.571439 13.7137H15.4286C15.7442 13.7137 16 13.4579 16 13.1423V2.85656C16 2.54099 15.7442 2.28516 15.4286 2.28516ZM14.4914 3.428L7.99998 8.42116L1.50857 3.428H14.4914ZM14.8571 12.5709H1.14285V4.58856L7.652 9.59541C7.85725 9.75301 8.14275 9.75301 8.348 9.59541L14.8571 4.58856V12.5709Z"
      fill={color}
    />
  </svg>
);

export default InvestigationIcon;
