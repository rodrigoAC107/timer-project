import { TimerInitial } from "../model";

var timer: string | number = 0;
var timerMilisecond: string | number = 0;
var interval: number;

export const timerIntervals = (
  setInitialState: React.Dispatch<React.SetStateAction<TimerInitial>>
) => {
  var minutes: number | string,
    seconds: number | string,
    miliseconds: number | string;

  interval = setInterval(function () {
    if (timer > 0) {
      minutes = parseInt((Math.floor(+timer / 60000) % 60).toString());
      seconds = parseInt(Math.floor(+timer / 1000).toString());

      if (timerMilisecond === 1000) {
        timerMilisecond = 1;
      }

      if (timerMilisecond < 1000) {
        miliseconds = parseInt(Math.floor(+timerMilisecond / 10).toString());
      }

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;

      setInitialState({
        minutes,
        seconds,
        miliseconds,
      });
    }

    ++timer;
    ++timerMilisecond;
  }, 1);
};

export const timerReset = () => {
  timer = 0;
  timerMilisecond = 0;
  clearInterval(interval);
};

export const timerInterrupt = () => {
  let interruptTimer = timer;
  clearInterval(interval);
  timer = interruptTimer;
};
