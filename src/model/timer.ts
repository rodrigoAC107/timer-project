export interface TimerInitial {
  minutes: string | number;
  seconds: string | number;
  miliseconds: string | number;
}

export const timerInitalState: TimerInitial = {
  minutes: "00",
  seconds: "00",
  miliseconds: "00",
};
