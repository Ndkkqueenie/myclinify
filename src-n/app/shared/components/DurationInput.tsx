import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Asterisks from './icons/Asterisks';

const DurationWrapper = styled.div<{ wide?: boolean; readOnly?: boolean }>`
  width: ${(props) => (!props.wide ? '100%' : '320px')};
  box-sizing: border-box;
  padding: 0px;
  display: flex;
  flex-direction: column;

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

  .input-wrapper {
    width: 100%;
    padding: 0;
  }

  input {
    height: 38px;
    text-align: center;
    font-size: 14px;
    ::placeholder {
      color: ${colors.black};
      opacity: 0.5;
      font-size: 13px;
    }
    :focus {
      border-color: ${colors.darkBlue};
    }
  }

  .year-input {
    width: 33%;
    border: 1px solid ${colors.pseudoAsh};
    border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};

    border-radius: 4px 0px 0px 4px;
    background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
    -ms-touch-action: none;
    touch-action: none;
  }
  .month-input {
    width: 34%;
    border: 1px solid ${colors.pseudoAsh};
    border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
    border-left: none;
    border-right: none;
    background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
  }
  .day-input {
    width: 33%;
    border: 1px solid ${colors.pseudoAsh};
    border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.tintGrey)};
    border-radius: 0px 4px 4px 0px;
    background-color: ${({ readOnly }) => (readOnly ? colors.lightGrey : colors.white)};
  }
`;

export interface DurationInputProps {
  title?: string;
  onChange: (duration: string) => void;
  durationValue?: string | null;
  isRequired?: boolean;
  readOnly?: boolean;
  isYear?: boolean;
  isRoundable?: boolean;
}

const DurationInput: React.FC<DurationInputProps> = ({
  title,
  onChange,
  durationValue,
  isRequired,
  readOnly,
  isYear,
  isRoundable,
}) => {
  const handleChange = (singleValue, totalValues, section) => {
    const splitTotalValues = totalValues.split(':');
    const cannotAllow = singleValue !== '' && !Number(singleValue);
    if (cannotAllow || singleValue < 0) return;
    if (isRoundable && section === 'month') {
      const yearsFromMonths = Math.floor(singleValue / 12);
      splitTotalValues[0] = yearsFromMonths;
      splitTotalValues[1] = singleValue;
      totalValues = splitTotalValues.join(':');
      return onChange(totalValues);
    }
    if (isRoundable && section === 'day' && !splitTotalValues[1]) {
      const yearsFromDays = Math.floor(singleValue / 365);
      splitTotalValues[0] = yearsFromDays;
      splitTotalValues[2] = singleValue;
      totalValues = splitTotalValues.join(':');
      return onChange(totalValues);
    }
    if (`${singleValue}`.toString().length > 2) return;
    if (isYear && section === 'year' && singleValue > 99) return;
    if (isYear && section === 'month' && singleValue > 12) return;
    if (isYear && section === 'day' && singleValue > 31) return;
    onChange(totalValues);
  };

  const values = durationValue ? durationValue.split(':') : ['', '', ''];

  return (
    <DurationWrapper readOnly={readOnly}>
      <label htmlFor=".inputs-wrapper">
        {title} {isRequired && <Asterisks />}
      </label>
      <div className="inputs-wrapper">
        <input
          type="text"
          name="years"
          className="year-input"
          placeholder={isYear ? 'Year' : 'Hour'}
          value={values[0]}
          disabled={readOnly}
          min={0}
          onChange={({ target: { value } }) =>
            handleChange(value, `${value}:${values[1]}:${values[2]}`, 'year')
          }
        />
        <input
          type="text"
          name="months"
          className="month-input"
          placeholder={isYear ? 'Month' : 'Minute'}
          value={values[1]}
          disabled={readOnly}
          min={0}
          onChange={({ target: { value } }) =>
            handleChange(value, `${values[0]}:${value}:${values[2]}`, 'month')
          }
        />
        <input
          type="text"
          name="days"
          className="day-input"
          placeholder={isYear ? 'Day' : 'Second'}
          value={values[2]}
          disabled={readOnly}
          min={0}
          onChange={({ target: { value } }) =>
            handleChange(value, `${values[0]}:${values[1]}:${value}`, 'day')
          }
        />
      </div>
    </DurationWrapper>
  );
};

export default DurationInput;
