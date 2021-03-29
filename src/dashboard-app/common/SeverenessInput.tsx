import React from 'react';
import styled from 'styled-components';
import { generate } from 'shortid';

import colors from '../utils/colors';

const Wrapper = styled.div<{ wide?: boolean; readOnly?: boolean }>`
  width: ${(props) => (props.wide ? '100%' : '320px')};
  box-sizing: border-box;
  padding: 10px 0px 0px;
  display: flex;
  flex-direction: column;

  .wrapper-label {
    font-size: 14px;
    color: ${colors.darkBlue};
    font-weight: normal;
    font-style: normal;
    margin-bottom: 2px;
  }

  .buttons-wrapper {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
  }

  .mild {
    padding: 0px;
  }

  .moderate {
    padding: 0px;
  }

  .severe {
    padding: 0px;
  }

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  .label-wrapper {
    display: flex;
  }

  .outer-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .inner-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ readOnly }) => (readOnly ? colors.silver : colors.white)};
  }

  input[type='radio']:checked + label {
    font-weight: 500;
  }

  .mild label {
    color: ${({ readOnly }) => (readOnly ? colors.silver : colors.seaGreen)};
    font-size: 14px;
  }
  .mild .outer-circle {
    border: 1px solid ${({ readOnly }) => (readOnly ? colors.silver : colors.seaGreen)};
  }
  .mild input[type='radio']:checked + label .inner-circle {
    background-color: ${({ readOnly }) => (readOnly ? colors.silver : colors.seaGreen)};
  }

  .moderate label {
    color: ${({ readOnly }) => (readOnly ? colors.silver : colors.darkYellow)};
    font-size: 14px;
  }
  .moderate .outer-circle {
    border: 1px solid ${({ readOnly }) => (readOnly ? colors.silver : colors.darkYellow)};
  }
  .moderate input[type='radio']:checked + label .inner-circle {
    background-color: ${colors.darkYellow};
  }

  .severe label {
    color: ${({ readOnly }) => (readOnly ? colors.silver : colors.red)};
    font-size: 14px;
  }
  .severe .outer-circle {
    border: 1px solid ${({ readOnly }) => (readOnly ? colors.silver : colors.red)};
  }
  .severe input[type='radio']:checked + label .inner-circle {
    background-color: ${colors.red};
  }
`;

export interface SeverenessInputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  readOnly?: boolean;
}

const SeverenessInput: React.FC<SeverenessInputProps> = ({ onChange, value, readOnly }) => {
  const id = generate();
  return (
    <Wrapper readOnly={readOnly}>
      <label className="wrapper-label" htmlFor="buttons-wrapper">
        Severity
      </label>
      <div className="buttons-wrapper">
        <div className="mild">
          <input
            onChange={onChange}
            id={`mild-radio-${id}`}
            type="radio"
            name={generate()}
            value="Mild"
            checked={value === 'Mild' || !value}
            disabled={readOnly}
          />
          <label htmlFor={`mild-radio-${id}`}>
            <div className="label-wrapper">
              <div className="outer-circle">
                <div className="inner-circle" />
              </div>
              Mild
            </div>
          </label>
        </div>

        <div className="moderate">
          <input
            onChange={onChange}
            id={`moderate-radio-${id}`}
            type="radio"
            name={generate()}
            value="Moderate"
            checked={value === 'Moderate'}
            disabled={readOnly}
          />
          <label htmlFor={`moderate-radio-${id}`}>
            <div className="label-wrapper">
              <div className="outer-circle">
                <div className="inner-circle" />
              </div>
              Moderate
            </div>
          </label>
        </div>

        <div className="severe">
          <input
            onChange={onChange}
            id={`severe-radio-${id}`}
            type="radio"
            name={generate()}
            value="Severe"
            checked={value === 'Severe'}
            disabled={readOnly}
          />
          <label htmlFor={`severe-radio-${id}`}>
            <div className="label-wrapper">
              <div className="outer-circle">
                <div className="inner-circle" />
              </div>
              Severe
            </div>
          </label>
        </div>
      </div>
    </Wrapper>
  );
};

export default SeverenessInput;
