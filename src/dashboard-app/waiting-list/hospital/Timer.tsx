import timerCaclulator from 'dashboard-app/utils/timerCalculator';
import React, { useEffect, useState } from 'react';
import './styles/timer.scss';

const Timer = ({ from }) => {
  const startTime = new Date(from).getTime();
  const [timeDifference, setTimeDifference] = useState(
    timerCaclulator(startTime, new Date().getTime()),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDifference(timerCaclulator(startTime, new Date().getTime()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeDifferenceInMinutes = Math.floor(
    Math.floor((new Date().getTime() - startTime) / 1000) / 60,
  );

  let className = 'timer-green';
  if (timeDifferenceInMinutes > 30) className = 'timer-yellow';
  if (timeDifferenceInMinutes > 60) className = 'timer-red';

  return <div className={className}>{timeDifference}</div>;
};

export default Timer;
