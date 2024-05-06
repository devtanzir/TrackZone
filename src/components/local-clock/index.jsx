import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-actions";
import useLocalClock from "./hook/useLocalClock";
import { LocalClockWrapper } from "./local-clock-style";

const LocalClock = ({ clock, UpdateLocalClock, createClock }) => {
  const { timer, timezone, offset } = useLocalClock(clock, UpdateLocalClock);

  if (!timer) return;

  return (
    <LocalClockWrapper>
      {timer && (
        <ClockDisplay
          local={true}
          date={timer}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}

      <ClockActions
        local
        clock={clock}
        updateClock={UpdateLocalClock}
        createClock={createClock}
      />
    </LocalClockWrapper>
  );
};

export default LocalClock;
