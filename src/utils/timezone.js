import { TIMEZONE_OFFSET } from "../constants/timezone";

export const getOffset = (start = -11.5, ending = 12) => {
  const offsets = [];
  for (let i = start; i <= ending; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

export const getTimeZone = () => {
  return ["UTC", "GMT", ...Object.keys(TIMEZONE_OFFSET)];
};

export const structureClockObject = (state, events) => {
  const result = state.map((clock) => {
    clock.events = events.filter((event) => event.clockId === clock._id);
  });
  console.log(result, "result");
  return result;
};
