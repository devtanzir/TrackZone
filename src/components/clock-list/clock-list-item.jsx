import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";
import CreateEvent from "../clock-events";
import useEvent from "../../hooks/useEvent";
import { useEffect, useState } from "react";
import ShowEvents from "../clock-events/show-events";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  const timer = useTimer(date);

  const { addEvent, events, getEventsByClockId } = useEvent();
  const [eventState, setEventState] = useState(null);

  useEffect(() => {
    const clockEvents = getEventsByClockId(clock.id);
    const newEvents = events[clockEvents];
    console.log(newEvents);
  }, [events]);

  if (!date || !timer) return;

  return (
    <>
      <ClockDisplay
        date={timer}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <h3>{formatDistance(date, localClock)}</h3>
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
      <ShowEvents
        events={eventState}
        getEventsByClockId={getEventsByClockId}
        clockId={clock.id}
      />

      <CreateEvent clockId={clock.id} addClock={addEvent} />
    </>
  );
};

export default ClockListItem;
