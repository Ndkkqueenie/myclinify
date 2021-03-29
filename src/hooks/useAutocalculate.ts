import moment from 'moment';
import { useEffect, useState } from 'react';

export default ({ yearDuration = true, value, onDurationChange, separator = ':' }) => {
  const [firstDuration, setYearDuration] = useState('');
  const [secondDuration, setMonthDuration] = useState('');
  const [thirdDuration, setDayDuration] = useState('');

  function handleValueConversion(): string {
    if (!Array.isArray(value)) {
      return '';
    }
    let diff = 0;
    let formatValaue: 'milliseconds' | 'days' = 'milliseconds';
    const startDate = moment(value[0]);
    const endDate = moment(value[1]);
    if (yearDuration) {
      formatValaue = 'days';
    }
    diff = endDate.diff(startDate, formatValaue);
    if (!diff) {
      return '';
    }
    if (yearDuration) {
      const year: number = Math.trunc(diff / 365);
      diff -= 365 * year;
      const month: number = Math.trunc(diff / 30);
      const day: number = Math.trunc(diff - (month % 30));
      return `${year}:${month}:${day}`;
    }
    const hours = Math.floor(diff / 3600000);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (value) {
      let durationValue = '';
      if (typeof value !== 'string') {
        durationValue = handleValueConversion();
      } else {
        durationValue = value;
      }
      if (!durationValue) {
        setYearDuration('');
        setMonthDuration('');
        setDayDuration('');
      }
      if (typeof durationValue === 'string') {
        const duration = durationValue.split(separator);
        setYearDuration(duration[0]);
        setMonthDuration(duration[1]);
        setDayDuration(duration[2]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (value)
      onDurationChange(`${firstDuration}${separator}${secondDuration}${separator}${thirdDuration}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstDuration, secondDuration, thirdDuration]);

  return {
    firstDuration,
    secondDuration,
    thirdDuration,
  };
};
