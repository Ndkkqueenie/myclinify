const timerCaclulator = (startTime, endTime) => {
  const currentTime = new Date().getTime();
  const hours = Math.floor(Math.floor((endTime - startTime) / 1000) / 3600);
  const minutes = Math.floor((Math.floor((endTime - startTime) / 1000) % 3600) / 60);
  const seconds = Math.floor((((currentTime - startTime) / 1000) % 3600) % 60);
  const newTimeDifference = `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }:${seconds > 9 ? seconds : `0${seconds}`}`;
  return newTimeDifference;
};

export default timerCaclulator;
