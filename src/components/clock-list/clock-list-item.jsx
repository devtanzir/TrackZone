import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";
import CreateEvent from "../clock-events";
import useEvent from "../../hooks/useEvent";
import { useEffect, useState } from "react";
import ShowEvents from "../clock-events/show-events";
import styled from "styled-components";
import Button from "../ui/button/button";

const ClockListItem = ({
  clock,
  updateClock,
  deleteClock,
  localClock,
  getEventsByClockId,
  addEvent,
}) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const [show, setShow] = useState(false);

  const timer = useTimer(date);

  if (!date || !timer) return;

  return (
    <Wrapper>
      <ClockDisplay
        date={timer}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <ClockItemWrapper>
        <TimeMng>{formatDistance(date, localClock)}</TimeMng>
        <ThreeBtn>
          <ClockActions
            clock={clock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
          <CreateEvent clockId={clock.id} addClock={addEvent} />
          <Button onClick={() => setShow(!show)}>Show Event</Button>
        </ThreeBtn>
      </ClockItemWrapper>
      {show && (
        <ul>
          <h5>all events</h5>
          {getEventsByClockId(clock.id).map((item) => (
            <li key={item.id}> {item.title}</li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default ClockListItem;

const Wrapper = styled.div`
  display: inline-block;
  width: 405.6px;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 20px 20px 20px -10px rgba(0, 0, 0, 0.15),
    inset 15px 15px 10px rgba(255, 255, 255, 0.5),
    -15px -15px 35px rgba(255, 255, 255, 0.35),
    inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;
const ClockItemWrapper = styled.div`
  padding: 15px;
  padding-top: 0;
`;
const ThreeBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TimeMng = styled.h3`
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
`;
