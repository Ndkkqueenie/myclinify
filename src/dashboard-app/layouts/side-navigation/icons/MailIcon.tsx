import React from 'react';

export interface MailIconProps {}

const MailIcon: React.FC<MailIconProps> = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3571 2.57147H0.642869C0.287816 2.57147 0 2.85929 0 3.2143V14.7857C0 15.1408 0.287816 15.4286 0.642869 15.4286H17.3571C17.7122 15.4286 18 15.1408 18 14.7857V3.2143C18 2.85929 17.7122 2.57147 17.3571 2.57147ZM16.3029 3.85717L8.99998 9.47447L1.69714 3.85717H16.3029ZM16.7143 14.1429H1.2857V5.1628L8.6085 10.7955C8.8394 10.9728 9.16059 10.9728 9.3915 10.7955L16.7143 5.1628V14.1429Z"
        fill="white"
      />
    </svg>
  );
};

export default MailIcon;
