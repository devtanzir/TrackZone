import React, { useEffect } from "react";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-actions";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import styled from "styled-components";

const LocalClock = ({ clock, UpdateLocalClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    UpdateLocalClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  const timer = useTimer(date);

  if (!date || !timer) return;

  return (
    <LocalClockWrapper>
      {timer && (
        <ClockDisplay
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

const LocalClockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0;
`;
