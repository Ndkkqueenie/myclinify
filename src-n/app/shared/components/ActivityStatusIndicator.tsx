import React from 'react';
import Asterisks from './icons/Asterisks';
import { IndicatorWrapper } from './styled-components/IndicatorWrapper';

export interface ActivityStatusIndicatorProps {
  title: string;
  active?: boolean;
  isRequired?: boolean;
}

const ActivityStatusIndicator: React.FC<ActivityStatusIndicatorProps> = ({
  title,
  active,
  isRequired,
}) => {
  return (
    <IndicatorWrapper active={active}>
      <label htmlFor="indicator">
        {title}
        {isRequired && <Asterisks />}
      </label>
      <div className="indicator-row">
        <div className="status active-block">Active</div>
        <div className="status inactive-block">Inactive</div>
      </div>
    </IndicatorWrapper>
  );
};

export default ActivityStatusIndicator;
