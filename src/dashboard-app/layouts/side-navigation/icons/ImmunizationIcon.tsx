import colors from 'dashboard-app/utils/colors';
import React from 'react';

export interface ImmunizationIconProps {
  color: string;
}

const ImmunizationIcon: React.FC<ImmunizationIconProps> = ({ color = colors.white }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.47588 13.0161L8.47589 13.0161C8.64292 13.1832 8.91316 13.1832 9.08019 13.0162L9.38235 12.714L9.08019 12.4118C8.8352 12.1668 8.8352 11.7696 9.08019 11.5246L9.0802 11.5246C9.32522 11.2797 9.72242 11.2796 9.96739 11.5246L10.2695 11.8268L10.8739 11.2225L10.5718 10.9203C10.3268 10.6753 10.3268 10.2781 10.5718 10.0331M8.47588 13.0161L10.6425 10.1038M8.47588 13.0161L6.98432 11.5246C6.98431 11.5246 6.98431 11.5246 6.98431 11.5246C6.81725 11.3575 6.81727 11.0873 6.98431 10.9203C6.98431 10.9203 6.98431 10.9203 6.98432 10.9203L10.2696 7.635L12.3655 9.73088M8.47588 13.0161L11.8318 10.406M10.5718 10.0331L10.6425 10.1038M10.5718 10.0331C10.5718 10.0331 10.5718 10.0331 10.5718 10.0331L10.6425 10.1038M10.5718 10.0331C10.8168 9.78807 11.214 9.78811 11.459 10.0331L11.3882 10.1038M10.6425 10.1038C10.8484 9.89784 11.1823 9.89787 11.3882 10.1038M11.3882 10.1038L11.459 10.0331M11.3882 10.1038L11.459 10.0331M11.459 10.0331L11.7611 10.3353M11.459 10.0331L11.6904 10.406L11.7611 10.3353M11.7611 10.3353L12.3655 9.73088M11.7611 10.3353L11.8318 10.406M11.8318 10.406L12.4362 9.80159L12.3655 9.73088M11.8318 10.406L12.3655 9.73088M15.0464 1.97094L15.3486 2.27313L13.9985 3.62328L12.5776 2.20242C12.3327 1.95743 11.9354 1.95738 11.6904 2.20243C11.4454 2.44742 11.4454 2.84461 11.6904 3.08961L12.3655 3.76467L6.09716 10.0331C6.09713 10.0331 6.09711 10.0331 6.09708 10.0331C5.58767 10.5426 5.48241 11.2819 5.73886 11.8829L4.60562 13.0162C4.10627 13.5155 3.98761 14.2526 4.24807 14.8653L1.0843 18.0291C0.83931 18.2741 0.83931 18.6713 1.0843 18.9163C1.32927 19.1613 1.7265 19.1612 1.97149 18.9163L5.13526 15.7525C5.74795 16.0129 6.48507 15.8942 6.98438 15.3949L6.91367 15.3242L6.98438 15.3949L8.11761 14.2617C8.71907 14.5183 9.45836 14.4125 9.96746 13.9034L16.2358 7.63496L16.9109 8.31001C16.9109 8.31002 16.9109 8.31002 16.9109 8.31002C17.1559 8.55502 17.5531 8.55501 17.7981 8.31002C18.0431 8.06502 18.0431 7.66783 17.7981 7.42283L17.7274 7.49354L17.7981 7.42283L16.3772 6.002L17.7274 4.65185L18.0295 4.95403C18.2745 5.19906 18.6717 5.19903 18.9167 4.95405C19.1617 4.70909 19.1617 4.31185 18.9167 4.06686L18.9167 4.06685L15.9336 1.08375C15.6887 0.838747 15.2914 0.838755 15.0464 1.08375C14.8014 1.32871 14.8014 1.72594 15.0464 1.97094ZM11.0153 11.2225L10.9446 11.1517V11.2932L11.0153 11.2225ZM5.49275 14.5077L5.49274 14.5077C5.32616 14.3411 5.32616 14.0699 5.49274 13.9033L6.5407 12.8554L7.14508 13.4598L6.09713 14.5077C6.09713 14.5077 6.09712 14.5077 6.09712 14.5077C5.93049 14.6743 5.65927 14.6743 5.49275 14.5077ZM13.5549 7.04996L13.5549 7.04996C13.3099 7.29496 13.3099 7.69216 13.5549 7.93715L13.857 8.23934L13.2527 8.84369L11.1568 6.74777L13.2527 4.65185L15.3486 6.74777L14.7442 7.35215L14.4421 7.04997C14.1971 6.80496 13.7999 6.80497 13.5549 7.04996ZM16.8401 3.76467L15.49 5.11482L14.8856 4.51047L16.2358 3.16032L16.8401 3.76467Z"
        fill={color}
      />
    </svg>
  );
};

export default ImmunizationIcon;
