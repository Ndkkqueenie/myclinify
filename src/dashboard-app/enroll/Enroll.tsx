import React, { useState } from 'react';
import MainLayout from 'dashboard-app/layouts/HMOLayout';
import Details from '../details/Details';
import Health from '../health/Health';

type CurrentEnrollItemType = 'My Details' | 'My Health';

export interface EnrollProps {}

const Enroll: React.FC<EnrollProps> = () => {
  const [currentItem, setCurrentItem] = useState<CurrentEnrollItemType>('My Details');

  return (
    <MainLayout
      pageName={`Enroll `}
      chooseEnrollItem={(item: CurrentEnrollItemType) => {
        setCurrentItem(item);
      }}
    >
      {currentItem === 'My Details' && <Details />}
      {currentItem === 'My Health' && <Health />}
    </MainLayout>
  );
};

export default Enroll;
