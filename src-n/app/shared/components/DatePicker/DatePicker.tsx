import React from 'react';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';

import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { ThemeProvider } from '@material-ui/styles';
// import { differenceInCalendarWeeks } from 'date-fns/esm/fp';
import CalendarIcon from '../icons/CalendarIcon';
import colors from '../utils/colors';
import Asterisks from '../icons/Asterisks';
import TimeIcon from '../icons/TimeIcon';
import DateTime from '../icons/DateTime';
import './datePicker.scss';

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey extends overridesNameToClassKey {}
}

export const DatePickerContainer = styled.div<{ wide?: boolean }>`
  width: ${(props) => (props.wide ? '320px' : '100%')};
  min-width: 175px;
  box-sizing: border-box;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
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
`;

const materialTheme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: {
      main: '#212529',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        fontSize: '14px',
        padding: '0 10px',
        position: 'relative',
        '& $notchedOutline': {
          borderColor: colors.pseudoAsh,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: colors.darkBlue,
          '@media (hover: none)': {
            borderColor: '#00274a',
            borderWidth: '1px',
          },
        },
        '&$disabled': {
          backgroundColor: colors.lightGrey,
        },
        '&$focused $notchedOutline': {
          borderColor: '#00274a',
          borderWidth: '1px',
        },
      },
    },
    MuiTypography: {
      root: {
        color: '#212529',
      },
    },
    MuiPickersToolbar: {
      backgroundColor: colors.iceBlue,
      color: '#212529',
      toolbar: {
        backgroundColor: colors.iceBlue,
        color: '#212529',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: '#212529',
      },
    },
    MuiPickersDay: {
      day: {
        color: colors.darkBlue,
      },
      daySelected: {
        backgroundColor: colors.iceBlue,
      },
      dayDisabled: {
        color: colors.pseudoAsh,
      },
      current: {
        color: colors.darkBlue,
      },
    },
    MuiButton: {
      textPrimary: {
        color: colors.iceBlue,
      },
    },
  },
});

export type DateType = 'DateTime' | 'DateOnly' | 'TimeOnly';

export interface DatePickerProps {
  placeholderText?: string;
  label?: string;
  wide?: boolean;
  withBorderRadius?: boolean;
  onChange: (date: string | null) => void;
  value?: string;
  placeholder?: string;
  isRequired?: boolean;
  readOnly?: boolean;
  mini?: boolean;
  className?: string;
  width?: string;
  maxDate?: Date;
  minDate?: Date;
  type?: DateType;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  wide = false,
  onChange,
  // onAccept,
  placeholder,
  value,
  isRequired = false,
  readOnly,
  maxDate,
  minDate,
  type = 'DateTime',
}) => {
  const onPickerChange = (date) => {
    if (date === null) {
      onChange(date);
    }
    if (date instanceof Date && date.getTime()) {
      onChange(date?.toISOString());
    }
  };
  return (
    <>
      <DatePickerContainer wide={wide}>
        {label && (
          <StyledLabel>
            {label} {isRequired && <Asterisks />}
          </StyledLabel>
        )}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={materialTheme}>
            {type === 'DateOnly' ? (
              <KeyboardDatePicker
                clearable
                value={value ? new Date(value) : null}
                placeholder={placeholder || 'Select Date'}
                onChange={onPickerChange}
                autoOk
                inputVariant="outlined"
                // onAccept={onAccept}
                minDate={minDate}
                maxDate={maxDate || new Date()}
                disabled={readOnly}
                readOnly={readOnly}
                helperText={null}
                format="dd/MM/yyyy"
                keyboardIcon={<CalendarIcon />}
              />
            ) : type === 'TimeOnly' ? (
              <KeyboardTimePicker
                clearable
                autoOk
                placeholder={placeholder || 'Select Time'}
                mask="__:__ _M"
                inputVariant="outlined"
                value={value ? new Date(value) : null}
                disabled={readOnly}
                readOnly={readOnly}
                onChange={onPickerChange}
                keyboardIcon={<TimeIcon />}
              />
            ) : (
              <KeyboardDateTimePicker
                value={value ? new Date(value) : null}
                onChange={onPickerChange}
                clearable
                autoOk
                inputVariant="outlined"
                placeholder={placeholder || 'Select Date and Time'}
                minDate={new Date('2018-01-01T00:00')}
                format="dd/MM/yyyy hh:mm a"
                disabled={readOnly}
                readOnly={readOnly}
                keyboardIcon={<DateTime />}
              />
            )}
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </DatePickerContainer>
    </>
  );
};

export default DatePicker;
