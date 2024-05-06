import { useEffect } from "react";
import useClock from "../../../hooks/useClock";
import useTimer from "../../../hooks/useTimer";

const useLocalClock = (clock, UpdateLocalClock) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    UpdateLocalClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  const timer = useTimer(date);
  return {
    timer,
    timezone,
    offset,
  };
};

export default useLocalClock;
