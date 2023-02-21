import { useState } from "react";
import { initialCountDown, countdownInitial } from "../../model/countdown";
import { countdownIntervals, countdownResetTimer } from "../../utilities";

import "./Countdown.scss";

const Countdown = () => {
  const countdownInitial = initialCountDown;

  const [initialNumber, setInitialNumber] =
    useState<countdownInitial>(countdownInitial);

  const handleStart = () => {
    countdownIntervals(initialNumber, setInitialNumber);
  };

  const handleSetNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInitialNumber((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setInitialNumber(countdownInitial);
    countdownResetTimer(countdownInitial);
  };

  return (
    <div>
      <div className="number__wrapper">
        <input
          type="number"
          min="00"
          name="hours"
          onChange={handleSetNumber}
          className="number__item"
          value={initialNumber.hours}
        />
        <input
          type="number"
          min="00"
          name="minutes"
          onChange={handleSetNumber}
          className="number__item"
          value={initialNumber.minutes}
        />
        <input
          type="number"
          min="00"
          name="seconds"
          onChange={handleSetNumber}
          className="number__item"
          value={initialNumber.seconds}
        />
      </div>
      <div className="buttons__wrapper">
        <button onClick={handleStart} className="button">
          Start
        </button>
        <button onClick={handleReset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Countdown;
