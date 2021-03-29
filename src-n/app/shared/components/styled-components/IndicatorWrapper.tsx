import styled from 'styled-components';
import colors from '../utils/colors';

type IndicatorWrapperType = {
    fullWidth?: boolean;
    active?: boolean;
  };

export const IndicatorWrapper = styled.div<IndicatorWrapperType>`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  }
  label {
    font-size: 14px;
    color: ${colors.darkBlue};
    font-weight: normal;
    font-style: normal;
    margin-bottom: 2px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }

  .indicator-row {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${colors.silver};
    color: ${colors.black};
    font-size: 14px;
    padding: 0px;
    box-sizing: border-box;
    opacity: 100;
    background-color: ${colors.white};
    margin-top: 0px;
    display: flex;
    cursor: default;

    .status {
      width: 50%;
      height: 100%;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.silver};
      font-weight: 500;
    }

    .active-block {
      border-radius: 4px 0px 0px 4px;
      background-color: ${(props) => (props.active ? colors.darkBlue : colors.silver)};
      color: ${(props) => (props.active ? colors.white : colors.black)};
    }

    .inactive-block {
      border-radius: 0px 4px 4px 0px;
      background-color: ${(props) => (props.active ? colors.silver : colors.darkBlue)};
      color: ${(props) => (props.active ? colors.black : colors.white)};
    }
  }
`;