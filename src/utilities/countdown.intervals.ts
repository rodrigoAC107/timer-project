import { TimerInitial } from "../model";
import { countdownInitial } from "../model/countdown";

var timer: string | number;

export const countdownIntervals = (
  initialDate: countdownInitial,
  setInitialState: React.Dispatch<React.SetStateAction<countdownInitial>>
) => {
  timer = initialTimer(initialDate);
  var hours, minutes, seconds;

  const interval = setInterval(function () {
    hours = parseInt(Math.floor(+timer / 3600).toString());
    minutes = parseInt((Math.floor(+timer / 60) % 60).toString());
    seconds = parseInt(Math.round(+timer % 60).toString());

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    setInitialState({
      hours,
      minutes,
      seconds,
    });

    if (--timer <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};

export const countdownResetTimer = (initialDate: countdownInitial) => {
  timer = initialTimer(initialDate);
};

const initialTimer = (initialDate: countdownInitial) => {
  const { hours, minutes, seconds } = initialDate;
  let newTimer = 3600 * +hours + 60 * +minutes + +seconds;

  return newTimer;
};
