import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";
import CreateEvent from "../clock-events";
import ShowEvents from "../clock-events/show-events";
import {
  ClockItemWrapper,
  ThreeBtn,
  TimeMng,
  Wrapper,
} from "./clock-list-style";

const ClockListItem = ({
  clock,
  updateClock,
  deleteClock,
  localClock,
  getEventsByClockId,
  addEvent,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const { date } = useClock(clock.timezone, clock.offset);

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
          <ShowEvents
            getEventsByClockId={getEventsByClockId}
            clockId={clock.id}
            deleteEvent={deleteEvent}
            updateEvent={updateEvent}
            deleteAllEvent={deleteAllEvent}
          />
        </ThreeBtn>
      </ClockItemWrapper>
    </Wrapper>
  );
};

export default ClockListItem;
