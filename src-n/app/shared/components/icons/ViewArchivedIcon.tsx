import React from 'react';
import colors from '../../utils/colors';

export interface ViewArchiveIconProps {
  color?: string;
}

const ViewArchiveIcon: React.FC<ViewArchiveIconProps> = ({ color = colors.darkBlue }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M5.46875 10.6406H12.4068V11.5782H5.46875V10.6406Z" fill={color} />
        <path
          d="M15.0624 4.45382V2.57867H8.16195L6.52813 1.29688H0V13.2984C0 14.0739 0.630895 14.7048 1.40637 14.7048H14.5936C15.3691 14.7048 16 14.0739 16 13.2984V4.45382H15.0624ZM1.87515 13.2984C1.87515 13.5568 1.66486 13.7671 1.40637 13.7671C1.14788 13.7671 0.937577 13.5568 0.937577 13.2984V2.23445H6.20423L7.83805 3.51624H14.1248V4.45382H1.87515V13.2984ZM15.0624 13.2984C15.0624 13.5568 14.8521 13.7671 14.5936 13.7671H2.73241C2.78442 13.6205 2.81273 13.4627 2.81273 13.2984V5.3914H15.0624V13.2984Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ViewArchiveIcon;
