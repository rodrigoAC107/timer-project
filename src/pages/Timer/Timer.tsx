import React, { useState } from "react";
import { timerInitalState, TimerInitial } from "../../model";
import { timerInterrupt, timerIntervals, timerReset } from "../../utilities";

const Timer = () => {
  const timerInitial = timerInitalState;

  const [initialNumber, setInitialNumber] =
    useState<TimerInitial>(timerInitial);
  const [flagIterrutpt, setFlagIterrutpt] = useState(false);

  const handleStart = () => {
    timerIntervals(setInitialNumber);
    setFlagIterrutpt(true);
  };
  const handleReset = () => {
    setInitialNumber(timerInitalState);
    timerReset();
    setFlagIterrutpt(false);
  };

  return (
    <div>
      <div className="number-timer__wrapper">
        <p className="number-timer">
          <span className="number__item">{initialNumber.minutes}</span>
          <span className="number__item">:</span>
          <span className="number__item">{initialNumber.seconds}</span>
          <span className="number__item">:</span>
          <span className="number__item">{initialNumber.miliseconds}</span>
        </p>
      </div>
      <div className="buttons__wrapper">
        {!flagIterrutpt && (
          <button onClick={handleStart} className="button">
            {initialNumber.miliseconds > 0 ? "Return" : "Start"}
          </button>
        )}
        {flagIterrutpt && (
          <button
            onClick={() => {
              timerInterrupt();
              setFlagIterrutpt(false);
            }}
            className="button"
          >
            Interrupt
          </button>
        )}
        <button onClick={handleReset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
