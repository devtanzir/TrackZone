import React, { useEffect } from "react";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-actions";
import useClock from "../../hooks/useClock";

const LocalClock = ({ clock, UpdateLocalClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    UpdateLocalClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
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
    </div>
  );
};

export default LocalClock;
