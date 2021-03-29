import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledPill = styled.div<{ pillType?: PillType }>`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  font-weight: 400;
  background-color: ${(props) =>
    props.pillType === 'completed'
      ? 'rgba(0, 193, 255, 0.15)'
      : props.pillType === 'awaiting'
      ? 'rgba(236, 177, 73, 0.15)'
      : 'rgba(236, 75, 164, 0.15)'};
  text-align: center;

  span {
    color: ${(props) =>
      props.pillType === 'completed'
        ? '#00ABE2'
        : props.pillType === 'awaiting'
        ? '#ECB149'
        : '#962525'};
  }
`;

const StyledOutlinePill = styled.div<{ pillType?: PillType }>`
  padding: 2px 4px;
  width: 86px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  font-weight: 400;
  text-align: center;
  border: 1px solid
    ${(props) =>
      props.pillType === 'submitted'
        ? '#FFE882'
        : props.pillType === 'draft'
        ? colors.pseudoAsh
        : props.pillType === 'rejected'
        ? '#FF0000'
        : props.pillType === 'awaiting'
        ? '#000000'
        : props.pillType === 'approved'
        ? '#00ABE2'
        : '#06AB69'};

  span {
    color: ${(props) =>
      props.pillType === 'submitted'
        ? '#FFE882'
        : props.pillType === 'draft'
        ? colors.pseudoAsh
        : props.pillType === 'rejected'
        ? '#FF0000'
        : props.pillType === 'awaiting'
        ? '#000000'
        : props.pillType === 'approved'
        ? '#00ABE2'
        : '#06AB69'};
  }
`;

type PillType =
  | 'completed'
  | 'awaiting'
  | 'rejected'
  | 'submitted'
  | 'approved'
  | 'draft'
  | 'verified'
  | 'processed';

export interface PillsProps {
  pillType: PillType;
  value: string;
  pillStyle?: 'fill' | 'outline' | undefined;
}

const Pills: React.FC<PillsProps> = ({ pillType, value, pillStyle }) => {
  return (
    <>
      {pillStyle === 'fill' && (
        <StyledPill pillType={pillType}>
          <span>{value}</span>
        </StyledPill>
      )}
      {pillStyle === 'outline' && (
        <StyledOutlinePill pillType={pillType}>
          <span>{value}</span>
        </StyledOutlinePill>
      )}
    </>
  );
};

export default Pills;
