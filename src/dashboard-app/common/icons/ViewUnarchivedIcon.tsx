import React from 'react';
import colors from '../../utils/colors';

export interface ViewUnarchivedIconProps {
  color?: string;
}

const ViewUnarchivedIcon: React.FC<ViewUnarchivedIconProps> = ({ color = colors.darkBlue }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M71.8938 6.15694H35.9029L28.0549 0H0V56.6814C0 61.2499 3.71375 65.064 8.28046 65.1833L70.5982 65.2183H70.6031C74.3776 65.2181 77.7037 62.6747 78.6927 59.0316L89.9278 17.6377H71.8938V6.15694ZM8.92314 59.8999L8.38385 59.8995V59.9004C6.7001 59.8381 5.28372 58.3715 5.28372 56.6814V5.28371H26.2298L34.0777 11.4407H66.6101V17.6379H23.5837L13.0032 56.5851C12.4902 58.4736 10.8424 59.7944 8.92314 59.8999ZM83.0186 22.9216L73.5932 57.648C73.2277 58.9946 71.9982 59.9348 70.6028 59.9348C70.6022 59.9348 70.6015 59.9348 70.601 59.9348L17.3517 59.9047C17.6642 59.2983 17.9173 58.6512 18.1024 57.9705L27.6238 22.9216H83.0186Z"
        fill={color}
      />
    </svg>
  );
};

export default ViewUnarchivedIcon;
