import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StatusWrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;

  .indicator {
    width: 10px;
    height: 10px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }

  span {
    font-size: 16px;
  }
`;

type ValueType = 'positive' | 'negative';
export interface LabTestStatusProps {
  value: ValueType;
}

const LabTestStatus: React.FC<LabTestStatusProps> = ({ value }) => {
  const statusDetails = {
    negative: {
      color: colors.seaGreen,
      text: 'Negative',
    },
    positive: {
      color: colors.orange,
      text: 'Positive',
    },
  };
  return (
    <StatusWrapper color={statusDetails[value].color}>
      <div className="indicator" />
      <span>{statusDetails[value].text}</span>
    </StatusWrapper>
  );
};

export default LabTestStatus;
