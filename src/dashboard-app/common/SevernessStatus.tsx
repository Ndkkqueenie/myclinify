import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const Indicator = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Text = styled.span`
  font-size: 14px;
`;

export interface SevernessStatusProps {
  value: string;
}

const SevernessStatus: React.FC<SevernessStatusProps> = ({ value }) => {
  return (
    <StatusWrapper>
      <Content>
        <Indicator
          color={
            value === 'Mild'
              ? colors.seaGreen
              : value === 'Moderate'
              ? colors.yellow
              : value === 'Severe'
              ? colors.orange
              : colors.white
          }
        />
        <Text>{value}</Text>
      </Content>
    </StatusWrapper>
  );
};

export default SevernessStatus;
