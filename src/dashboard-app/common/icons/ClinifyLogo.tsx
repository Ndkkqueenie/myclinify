import React from 'react';
import colors from '../../utils/colors';

export interface ClinifyLogoIconProps {
  color?: string;
  className?: string;
}

export const ClinifyLogo: React.FC<ClinifyLogoIconProps> = ({
  color = colors.iceBlue,
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="83"
      height="24"
      viewBox="0 0 83 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1064 16.14C22.2716 18.39 20.8107 20.31 18.9622 21.69C16.9646 23.16 14.5198 24 11.9259 24C8.64627 24 5.66479 22.65 3.48832 20.49C1.34166 18.33 0 15.33 0 12C0 8.7 1.34166 5.67 3.48832 3.51C5.63498 1.35 8.61645 0 11.9259 0C14.5198 0 16.9646 0.840006 18.9622 2.34001C20.8107 3.69001 22.2716 5.58 23.0766 7.83H19.4392C18.8429 6.72 18.0081 5.76001 16.9944 5.04001C15.5633 3.99001 13.8042 3.36 11.9259 3.36C9.57052 3.36 7.42386 4.32 5.8735 5.88C4.32313 7.44 3.36906 9.6 3.36906 12C3.36906 14.4 4.32313 16.53 5.8735 18.12C7.42386 19.68 9.57052 20.64 11.9259 20.64C13.8042 20.64 15.5633 20.04 16.9944 18.96C18.0081 18.21 18.8429 17.25 19.4392 16.14H23.1064Z"
        fill={color}
      />
      <path
        d="M11.9259 5.94009C13.5955 5.94009 15.0863 6.63008 16.1894 7.71008C17.2925 8.82009 17.9485 10.3201 17.9485 12.0001C17.9485 13.6801 17.2627 15.1801 16.1894 16.2901C15.0863 17.4001 13.5955 18.0601 11.9259 18.0601C10.2563 18.0601 8.76553 17.3701 7.66239 16.2901C6.55924 15.1801 5.90332 13.6801 5.90332 12.0001C5.90332 10.3201 6.58906 8.82009 7.66239 7.71008C8.76553 6.60008 10.2563 5.94009 11.9259 5.94009ZM15.1459 8.76009C14.3111 7.92009 13.1781 7.41008 11.9259 7.41008C10.6737 7.41008 9.54071 7.92009 8.7059 8.76009C7.87109 9.60009 7.36424 10.7401 7.36424 12.0001C7.36424 13.2601 7.87109 14.4001 8.7059 15.2401C9.54071 16.0801 10.6737 16.5901 11.9259 16.5901C13.1781 16.5901 14.3111 16.0801 15.1459 15.2401C15.9807 14.4001 16.4875 13.2601 16.4875 12.0001C16.4875 10.7401 15.9509 9.57009 15.1459 8.76009Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0752 8.76003C12.9398 8.76003 13.6554 9.48003 13.6554 10.35C13.6554 10.95 13.3274 11.49 12.8206 11.76V15.39H11.3596V11.76C10.8528 11.49 10.5248 10.95 10.5248 10.35C10.495 9.48003 11.2106 8.76003 12.0752 8.76003Z"
        fill={color}
      />
      <path
        d="M34.7777 16.1662V15.6662H34.2777H33.2342C32.066 15.6662 31.1449 15.3157 30.3796 14.6255C29.5687 13.8882 29.1427 12.9171 29.1427 11.6662C29.1427 10.4617 29.5189 9.51386 30.2496 8.77865C30.9756 8.04812 31.9432 7.66619 33.2044 7.66619H34.2479H34.2777H34.7777V7.16619V6.6262V6.1262H34.2777H33.2342C31.4207 6.1262 29.9281 6.70778 28.8604 7.94962C27.9728 8.97537 27.5166 10.2331 27.5166 11.6662C27.5166 13.3188 28.07 14.6887 29.1991 15.7246L29.1997 15.7251C30.2859 16.7187 31.633 17.2062 33.2342 17.2062H34.2777H34.7777V16.7062V16.1662ZM42.7153 17.2062H43.2153V16.7062V16.1662V15.6662H42.7153H41.0755C40.1514 15.6662 39.6457 15.3573 39.4024 14.9157C39.2449 14.5936 39.1306 14.0543 39.1306 13.2562V6.59619V6.09619H38.6306H38.0344H37.5344V6.59619V13.5562C37.5344 14.4166 37.6909 15.178 38.0537 15.765C38.6529 16.7778 39.7214 17.2062 41.0755 17.2062H42.7153ZM46.5315 17.2062H47.0315V16.7062V6.59619V6.09619H46.5315H45.9353H45.4353V6.59619V16.7062V17.2062H45.9353H46.5315ZM56.6456 6.59619V14.7135L53.0403 7.02169C52.9588 6.8319 52.8612 6.65371 52.8316 6.59965C52.8269 6.59098 52.8239 6.58551 52.823 6.58368L52.8056 6.54866L52.783 6.51676C52.5415 6.17659 52.1818 5.9762 51.7193 5.9762C51.4108 5.9762 51.0145 6.03948 50.7499 6.35279C50.4854 6.63144 50.4143 6.98659 50.4143 7.31619V16.7362V17.2362H50.9143H51.5106H52.0106V16.7362V8.68577L55.5596 16.2877L55.5594 16.2878L55.5649 16.2987C55.7448 16.6609 55.9371 16.9681 56.1587 17.1353C56.4117 17.3263 56.7285 17.3562 56.9369 17.3562C57.2536 17.3562 57.5689 17.2595 57.8282 16.9987C57.9792 16.8467 58.0698 16.6712 58.1215 16.4862H58.2419V15.9862V6.59619V6.09619H57.7419H57.1456H56.6456V6.59619ZM62.6315 17.2062H63.1315V16.7062V6.59619V6.09619H62.6315H62.0352H61.5352V6.59619V16.7062V17.2062H62.0352H62.6315ZM71.725 12.4362H72.225V11.9362V11.3662V10.8662H71.725H68.0807V9.95619C68.0807 9.46123 68.0825 9.12149 68.1324 8.8451L68.1364 8.82327L68.1384 8.80118C68.1597 8.5646 68.2428 8.36681 68.3754 8.21429L68.3827 8.20598L68.3895 8.19736C68.5639 7.9781 68.7739 7.82815 69.0573 7.73791C69.2372 7.69454 69.5142 7.66619 69.9361 7.66619H71.725H72.225V7.16619V6.6262V6.1262H71.725H70.1448C69.4002 6.1262 68.7466 6.18231 68.2884 6.37235C67.8158 6.55658 67.4525 6.85 67.1684 7.20398C66.8195 7.59948 66.6483 8.08871 66.5516 8.63982L66.5484 8.65819L66.5465 8.67675C66.5155 8.98923 66.4845 9.39613 66.4845 9.95619V16.7062V17.2062H66.9845H67.5807H68.0807V16.7062V12.4362H71.725ZM79.1787 17.2062H79.6787V16.7062V12.9414C80.381 12.8405 81.002 12.5176 81.5191 11.9395C82.1476 11.2369 82.4514 10.3636 82.4514 9.35619V6.59619V6.09619H81.9514H81.3552H80.8552V6.59619V9.38619C80.8552 10.0573 80.6538 10.5494 80.3203 10.8881C79.9404 11.2439 79.47 11.4362 78.8805 11.4362C78.2551 11.4362 77.7936 11.2403 77.4519 10.8994C77.1019 10.521 76.9059 10.0476 76.9059 9.38619V6.59619V6.09619H76.4059H75.8096H75.3096V6.59619V9.35619C75.3096 10.3557 75.6091 11.2677 76.2506 11.9489L76.6146 11.6062L76.2506 11.9489C76.7595 12.4895 77.3743 12.8306 78.0824 12.9389V16.7062V17.2062H78.5824H79.1787Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export const ClinifyIcon: React.FC<ClinifyLogoIconProps> = ({
  color = colors.iceBlue,
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1064 16.14C22.2716 18.39 20.8107 20.31 18.9622 21.69C16.9646 23.16 14.5198 24 11.9259 24C8.64627 24 5.66479 22.65 3.48832 20.49C1.34166 18.33 0 15.33 0 12C0 8.7 1.34166 5.67 3.48832 3.51C5.63498 1.35 8.61645 0 11.9259 0C14.5198 0 16.9646 0.840006 18.9622 2.34001C20.8107 3.69001 22.2716 5.58 23.0766 7.83H19.4392C18.8429 6.72 18.0081 5.76001 16.9944 5.04001C15.5633 3.99001 13.8042 3.36 11.9259 3.36C9.57052 3.36 7.42386 4.32 5.8735 5.88C4.32313 7.44 3.36906 9.6 3.36906 12C3.36906 14.4 4.32313 16.53 5.8735 18.12C7.42386 19.68 9.57052 20.64 11.9259 20.64C13.8042 20.64 15.5633 20.04 16.9944 18.96C18.0081 18.21 18.8429 17.25 19.4392 16.14H23.1064Z"
        fill={color}
      />
      <path
        d="M11.9269 5.94141C13.5965 5.94141 15.0872 6.6314 16.1904 7.7114C17.2935 8.82141 17.9494 10.3214 17.9494 12.0014C17.9494 13.6814 17.2637 15.1814 16.1904 16.2914C15.0872 17.4014 13.5965 18.0614 11.9269 18.0614C10.2572 18.0614 8.76651 17.3714 7.66336 16.2914C6.56022 15.1814 5.9043 13.6814 5.9043 12.0014C5.9043 10.3214 6.59003 8.82141 7.66336 7.7114C8.76651 6.6014 10.2572 5.94141 11.9269 5.94141ZM15.1469 8.76141C14.312 7.9214 13.1791 7.4114 11.9269 7.4114C10.6747 7.4114 9.54169 7.9214 8.70688 8.76141C7.87207 9.60141 7.36522 10.7414 7.36522 12.0014C7.36522 13.2614 7.87207 14.4014 8.70688 15.2414C9.54169 16.0814 10.6747 16.5914 11.9269 16.5914C13.1791 16.5914 14.312 16.0814 15.1469 15.2414C15.9817 14.4014 16.4885 13.2614 16.4885 12.0014C16.4885 10.7414 15.9519 9.57141 15.1469 8.76141Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0747 8.76172C12.9393 8.76172 13.6549 9.48172 13.6549 10.3517C13.6549 10.9517 13.3269 11.4917 12.8201 11.7617V15.3917H11.3591V11.7617C10.8523 11.4917 10.5243 10.9517 10.5243 10.3517C10.4945 9.48172 11.2101 8.76172 12.0747 8.76172Z"
        fill={color}
      />
    </svg>
  );
};

export default ClinifyLogo;
