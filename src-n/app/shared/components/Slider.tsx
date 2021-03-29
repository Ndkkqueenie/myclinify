import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const SliderComponent = styled.div`
  width: 100%;
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
  .wrapper {
    padding: 8px 16px;
    box-sizing: border-box;
    background-color: ${colors.lightAsh};
    width: 100%;
    border-radius: 6px;

    .text {
      color: ${colors.darkGrey};
      font-weight: 300;
    }

    .slider {
      #range {
        -webkit-appearance: none;
        outline: none;
        background: ${colors.lightGrey};
        height: 4px;
        width: 100%;
        border-radius: 5px;
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${colors.white};
          box-shadow: 0px 0px 6px ${colors.lightGrey};
        }
      }

      /* FIREFOX */
      #range::-moz-range-thumb {
        border: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: ${colors.white};
        cursor: pointer;
      }

      #range::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: ${colors.lightGrey};
        border-radius: 5px;
        box-shadow: 0px 0px 6px ${colors.lightGrey};
      }
    }
  }
`;

export const SliderWrapper = styled.div``;

interface SliderProps {
  range?: string;
  name?: string | null;
  handleRangeChange: (value: string) => void;
  max?: number;
}

const Slider: React.FC<SliderProps> = ({ range, handleRangeChange, name, max }) => {
  return (
    <SliderComponent>
      <label>
        {name} ({range})
      </label>
      <div className="wrapper">
        <div className="slider">
          <input
            id="range"
            type="range"
            min="0"
            max={max}
            step="4"
            value={range}
            onChange={({ target: { value } }) => handleRangeChange(value)}
          />
        </div>
      </div>
    </SliderComponent>
  );
};

export default Slider;
