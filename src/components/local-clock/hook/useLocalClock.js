import { useEffect } from "react";
import useClock from "../../../hooks/useClock";
import useTimer from "../../../hooks/useTimer";

/**
 *
 * @param {Object} clock
 * @param {Function} UpdateLocalClock
 * @returns workable clock
 */
const useLocalClock = (clock, UpdateLocalClock) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    UpdateLocalClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  // create timer
  const timer = useTimer(date);
  return {
    timer,
    timezone,
    offset,
  };
};

export default useLocalClock;
