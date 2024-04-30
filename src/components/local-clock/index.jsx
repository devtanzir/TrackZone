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

const LocalClockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 20px;
  margin: 30px 0;
  border-radius: 7px;
  border: 2px solid #050505;
  box-shadow: 20px 20px 20px -10px rgba(0, 0, 0, 0.15),
    inset 15px 15px 10px rgba(255, 255, 255, 0.5),
    -15px -15px 35px rgba(255, 255, 255, 0.35),
    inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;
